import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogMetadata, TopicalMap, KeywordStrategy, ContentRelations, SeoMetrics, TutorialMetadata } from '@/types/blog';
import { marked } from 'marked';
import { EventData } from './generateSchemas';

marked.setOptions({
  breaks: true,
  gfm: true,
});

const BLOG_DIRECTORY = path.join(process.cwd(), 'src/content/blogs');
const METADATA_DIRECTORY = path.join(process.cwd(), 'src/content/metadata');

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

class MetadataCache {
  private cache = new Map<string, CacheEntry<any>>();
  private readonly TTL = 3600000;

  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    if (Date.now() - entry.timestamp > this.TTL) {
      this.cache.delete(key);
      return null;
    }
    return entry.data as T;
  }

  set<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  clear(): void {
    this.cache.clear();
  }

  getStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    };
  }
}

const metadataCache = new MetadataCache();

interface ImageMetadata {
  url: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

function loadMetadataFile<T>(filename: string): T {
  const cacheKey = `metadata:${filename}`;
  
  const cached = metadataCache.get<T>(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    const filePath = path.join(METADATA_DIRECTORY, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content) as T;
    
    metadataCache.set(cacheKey, data);
    
    return data;
  } catch (error) {
    console.error(`Error loading metadata file ${filename}:`, error);
    return {} as T;
  }
}


function ensureArray(value: any): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') return value.split(',').map(s => s.trim());
  return [];
}


function getMetadataFromJSON(slug: string): Partial<BlogMetadata> {
  try {
    const titles = loadMetadataFile<Record<string, string>>('titles.json');
    const excerpts = loadMetadataFile<Record<string, string>>('excerpts.json');
    const tags = loadMetadataFile<Record<string, string[]>>('tags.json');

    // merged alt+caption into images.json
    const images = loadMetadataFile<Record<string, ImageMetadata>>('images.json');

    const dateModified = loadMetadataFile<Record<string, string>>('dateModified.json');
    const tldrs = loadMetadataFile<
      Record<
        string,
        {
          summary: string[];
          keyTakeaways: string[];
          faqs?: any[];
          creativeLine?: string;
        }
      >
    >('tldr.json');

    const faqs = loadMetadataFile<Record<string, any[]>>('faqItems.json');
    const events = loadMetadataFile<Record<string, EventData>>('events.json');

    const topicalMaps = loadMetadataFile<Record<string, any>>('topicalMaps.json');
    const keywordStrategies = loadMetadataFile<Record<string, any>>('keywordStrategies.json');
    const contentRelations = loadMetadataFile<Record<string, any>>('contentRelations.json');
    const seoMetrics = loadMetadataFile<Record<string, any>>('seoMetrics.json');

    const imageData = images[slug];

    let imageUrl: string | undefined;
    let imageWidth: number | undefined;
    let imageHeight: number | undefined;
    let imageAlt: string | undefined;
    let imageCaption: string | undefined;

    if (typeof imageData === 'string') {
      imageUrl = imageData;
      // derive alt defaults if plain string (no object)
      imageAlt = undefined;
      imageWidth = 1200;
      imageHeight = 630;
    } else if (imageData && typeof imageData === 'object') {
      imageUrl = imageData.url;
      imageWidth = imageData.width;
      imageHeight = imageData.height;
      imageAlt = imageData.alt;
      imageCaption = imageData.caption;
    }

    return {
      title: titles[slug] || undefined,
      excerpt: excerpts[slug] || undefined,
      tags: tags[slug] || undefined,
      image: imageUrl,
      imageAlt: imageAlt,
      imageWidth: imageWidth,
      imageHeight: imageHeight,
      imageCaption: imageCaption,
      dateModified: dateModified[slug] || undefined,
      tldr: tldrs[slug] || undefined,
      faqItems: faqs[slug] || undefined,
      eventData: events[slug] || undefined,
      topicalMap: topicalMaps[slug] || undefined,
      keywordStrategy: keywordStrategies[slug] || undefined,
      contentRelations: contentRelations[slug] || undefined,
      seoMetrics: seoMetrics[slug] || undefined,
    };
  } catch (error) {
    console.error(`Error getting metadata for ${slug}:`, error);
    return {};
  }
}

function getMetadataFromFrontmatter(slug: string): Partial<BlogMetadata> {
  try {
    const filePath = path.join(BLOG_DIRECTORY, `${slug}.md`);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);
    
    return {
      date: data.date,
      author: data.author,
      readTime: data.readTime,
      category: data.category,
      canonical: data.canonical || `https://mirelleinspo.com/blog/${slug}`,
      wordCount: data.wordCount,
      tags: data.tags, // ✅ ADD THIS
    };
  } catch (error) {
    console.error(`Error reading frontmatter for ${slug}:`, error);
    return {};
  }
}

export async function getAllBlogPosts(): Promise<BlogMetadata[]> {
  const cacheKey = 'all-blog-posts';
  
  const cached = metadataCache.get<BlogMetadata[]>(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    const files = fs.readdirSync(BLOG_DIRECTORY);
    const posts = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const slug = file.replace('.md', '');
        
        const jsonMetadata = getMetadataFromJSON(slug);
        const frontmatterMetadata = getMetadataFromFrontmatter(slug);
        
        return {
          slug,
          title: jsonMetadata.title || 'Untitled',
          excerpt: jsonMetadata.excerpt || '',
          date: frontmatterMetadata.date || new Date().toISOString(),
          author: frontmatterMetadata.author || 'Anonymous',
          tags: ensureArray(jsonMetadata.tags || frontmatterMetadata.tags),
          image: jsonMetadata.image || null,
          imageAlt: jsonMetadata.imageAlt,
          imageWidth: jsonMetadata.imageWidth,
          imageHeight: jsonMetadata.imageHeight,
          imageCaption: jsonMetadata.imageCaption,
          readTime: frontmatterMetadata.readTime || '5 min',
          category: frontmatterMetadata.category,
          canonical: frontmatterMetadata.canonical || `https://mirelleinspo.com/blog/${slug}`,
          dateModified: jsonMetadata.dateModified,
          wordCount: frontmatterMetadata.wordCount,
          tldr: jsonMetadata.tldr,
          eventData: jsonMetadata.eventData,
          faqItems: jsonMetadata.faqItems,
          topicalMap: jsonMetadata.topicalMap,
          keywordStrategy: jsonMetadata.keywordStrategy,
          contentRelations: jsonMetadata.contentRelations,
          seoMetrics: jsonMetadata.seoMetrics,
        } as BlogMetadata;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    metadataCache.set(cacheKey, posts);
    
    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const cacheKey = `blog-post:${slug}`;
  
  const cached = metadataCache.get<BlogPost>(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    const filePath = path.join(BLOG_DIRECTORY, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content: markdownContent } = matter(fileContent);
    
    let htmlContent = await marked(markdownContent);
    
    htmlContent = htmlContent.replace(
      /<h2>(.*?)<\/h2>/g,
      (match, text) => {
        const cleanText = text.replace(/<[^>]*>/g, '');
        const id = cleanText
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');
        return `<h2 id="${id}">${text}</h2>`;
      }
    );
    
    const jsonMetadata = getMetadataFromJSON(slug);
    
    const post: BlogPost = {
      slug,
      title: jsonMetadata.title || data.title || 'Untitled',
      excerpt: jsonMetadata.excerpt || data.excerpt || '',
      content: htmlContent,
      date: data.date || new Date().toISOString(),
      author: data.author || 'Anonymous',
      tags: ensureArray(jsonMetadata.tags || data.tags),
      image: jsonMetadata.image || data.image || null,
      imageAlt: jsonMetadata.imageAlt || data.imageAlt,
      imageWidth: jsonMetadata.imageWidth || data.imageWidth || 1200,
      imageHeight: jsonMetadata.imageHeight || data.imageHeight || 630,
      imageCaption: jsonMetadata.imageCaption || data.imageCaption,
      readTime: data.readTime || '5 min',
      category: data.category,
      canonical: data.canonical || `https://mirelleinspo.com/blog/${slug}`,
      dateModified: jsonMetadata.dateModified || data.dateModified,
      wordCount: data.wordCount,
      tldr: jsonMetadata.tldr || data.tldr,
      eventData: jsonMetadata.eventData || data.eventData,
      faqItems: jsonMetadata.faqItems || data.faqItems,
      topicalMap: jsonMetadata.topicalMap || data.topicalMap,
      keywordStrategy: jsonMetadata.keywordStrategy || data.keywordStrategy,
      contentRelations: jsonMetadata.contentRelations || data.contentRelations,
      seoMetrics: jsonMetadata.seoMetrics || data.seoMetrics,
    };
    
    metadataCache.set(cacheKey, post);
    
    return post;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const files = fs.readdirSync(BLOG_DIRECTORY);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));
  } catch (error) {
    console.error('Error reading blog slugs:', error);
    return [];
  }
}

export async function getPostsByCategory(category: string): Promise<BlogMetadata[]> {
  const cacheKey = `category:${category}`;
  
  const cached = metadataCache.get<BlogMetadata[]>(cacheKey);
  if (cached) return cached;

  const allPosts = await getAllBlogPosts();
  const filtered = allPosts.filter(post => post.category === category);
  
  metadataCache.set(cacheKey, filtered);
  return filtered;
}

export async function getPostsByTag(tag: string): Promise<BlogMetadata[]> {
  const cacheKey = `tag:${tag}`;
  
  const cached = metadataCache.get<BlogMetadata[]>(cacheKey);
  if (cached) return cached;

  const allPosts = await getAllBlogPosts();
  const filtered = allPosts.filter(post => 
    post.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  );
  
  metadataCache.set(cacheKey, filtered);
  return filtered;
}

export async function getAllCategories() {
  const allPosts = await getAllBlogPosts();
  const categoryMap = new Map<string, number>();
  
  allPosts.forEach(post => {
    if (post.category) {
      categoryMap.set(post.category, (categoryMap.get(post.category) || 0) + 1);
    }
  });
  
  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, ''),
    count,
  }));
}

export async function getAllTags() {
  const allPosts = await getAllBlogPosts();
  const tagMap = new Map<string, number>();
  
  allPosts.forEach(post => {
    post.tags?.forEach(tag => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });
  
  return Array.from(tagMap.entries())
    .map(([slug, count]) => ({
      name: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      slug: slug,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogMetadata[]> {
  const currentPost = await getBlogPost(currentSlug);
  if (!currentPost) return [];
  
  const allPosts = await getAllBlogPosts();
  
  // 🆕 TOPICAL MAPPING: Prioritize related clusters first
  if (currentPost.contentRelations?.relatedPostSlugs) {
    const relatedSlugs = currentPost.contentRelations.relatedPostSlugs;
    const relatedPosts = allPosts
      .filter(post => relatedSlugs.includes(`/blog/${post.slug}`) || relatedSlugs.includes(post.slug))
      .slice(0, limit);
    
    if (relatedPosts.length >= limit) {
      return relatedPosts;
    }
  }
  
  const scoredPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0;
      
      if (post.category === currentPost.category) score += 3;
      
      const sharedTags = post.tags?.filter(tag => 
        currentPost.tags?.includes(tag)
      ).length || 0;
      score += sharedTags;
      
      return { post, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
  
  return scoredPosts;
}

export async function getPaginatedPosts(page: number = 1, perPage: number = 12): Promise<{
  posts: BlogMetadata[];
  totalPages: number;
  currentPage: number;
  totalPosts: number;
}> {
  const allPosts = await getAllBlogPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const posts = allPosts.slice(startIndex, endIndex);
  
  return {
    posts,
    totalPages,
    currentPage: page,
    totalPosts,
  };
}

// 🆕 TOPICAL MAPPING UTILITY FUNCTIONS
export async function getClusterPosts(pillarSlug: string): Promise<BlogMetadata[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter(post => 
    post.topicalMap?.position === 'cluster' && 
    (post.topicalMap.parentPillar === pillarSlug || post.topicalMap.parentPillar === `/blog/${pillarSlug}`)
  );
}

export async function getPillarPosts(): Promise<BlogMetadata[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter(post => post.topicalMap?.position === 'pillar');
}

export async function detectCannibalization(slug: string): Promise<{
  hasRisk: boolean;
  competingPosts: BlogMetadata[];
  recommendations: string[];
}> {
  const currentPost = await getBlogPost(slug);
  if (!currentPost) return { hasRisk: false, competingPosts: [], recommendations: [] };
  
  const allPosts = await getAllBlogPosts();
  const competingPosts: BlogMetadata[] = [];
  const recommendations: string[] = [];
  
  const primaryKeyword = currentPost.topicalMap?.primaryKeyword;
  
  if (primaryKeyword) {
    allPosts.forEach(post => {
      if (post.slug === slug) return;
      
      if (post.topicalMap?.primaryKeyword === primaryKeyword) {
        competingPosts.push(post);
        recommendations.push(`Post "${post.title}" targets same primary keyword: "${primaryKeyword}"`);
      }
      
      if (currentPost.keywordStrategy?.avoidKeywords?.includes(post.topicalMap?.primaryKeyword || '')) {
        recommendations.push(`Warning: You're targeting "${post.topicalMap?.primaryKeyword}" which should be avoided`);
      }
    });
  }
  
  return {
    hasRisk: competingPosts.length > 0 || recommendations.length > 0,
    competingPosts,
    recommendations,
  };
}

export function clearBlogCache() {
  metadataCache.clear();
}

export function getCacheStats() {
  return metadataCache.getStats();
}
