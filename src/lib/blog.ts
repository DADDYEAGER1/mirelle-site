import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogMetadata } from '@/types/blog';
import { marked } from 'marked';

marked.setOptions({
  breaks: true,
  gfm: true,
});

const BLOG_DIRECTORY = path.join(process.cwd(), 'src/content/blogs');
const METADATA_DIRECTORY = path.join(process.cwd(), 'src/content/metadata');

// Cache for metadata files
const metadataCache: { [key: string]: any } = {};

function loadMetadataFile(filename: string): any {
  if (metadataCache[filename]) return metadataCache[filename];
  
  try {
    const filePath = path.join(METADATA_DIRECTORY, filename);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      metadataCache[filename] = JSON.parse(content);
      return metadataCache[filename];
    }
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
  }
  
  return {};
}

// ✅ Get metadata from JSON files (only editable fields)
function getMetadataFromJSON(slug: string): Partial<BlogMetadata> | null {
  try {
    const titles = loadMetadataFile('titles.json');
    const excerpts = loadMetadataFile('excerpts.json');
    const tags = loadMetadataFile('tags.json');
    const images = loadMetadataFile('images.json');
    const imageAlts = loadMetadataFile('imageAlts.json');
    const dateModified = loadMetadataFile('dateModified.json');
    const tldr = loadMetadataFile('tldr.json');
    const faqItems = loadMetadataFile('faqItems.json');

    return {
      title: titles[slug],
      excerpt: excerpts[slug],
      tags: tags[slug],
      image: images[slug],
      imageAlt: imageAlts[slug],
      dateModified: dateModified[slug],
      tldr: tldr[slug],
      faqItems: faqItems[slug],
    };
  } catch (error) {
    console.error(`Error reading metadata for ${slug}:`, error);
    return null;
  }
}

// ✅ Get metadata from MD frontmatter (core fields)
function getMetadataFromFrontmatter(slug: string): Partial<BlogMetadata> | null {
  try {
    const filePath = path.join(BLOG_DIRECTORY, `${slug}.md`);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);

    return {
      date: data.date,
      author: data.author,
      readTime: data.readTime,
      category: data.category,
      // Add any other core fields that should come from MD
    };
  } catch (error) {
    console.error(`Error reading frontmatter for ${slug}:`, error);
    return null;
  }
}

// ✅ Get all blog posts (combine JSON + MD data)
export async function getAllBlogPosts(): Promise<BlogMetadata[]> {
  try {
    const files = fs.readdirSync(BLOG_DIRECTORY);
    const posts = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const slug = file.replace('.md', '');
        const jsonMetadata = getMetadataFromJSON(slug) || {};
        const mdMetadata = getMetadataFromFrontmatter(slug) || {};

        // ✅ Merge: JSON overrides for editable fields, MD for core fields
        return {
          slug,
          title: jsonMetadata.title || 'Untitled',
          excerpt: jsonMetadata.excerpt || '',
          date: mdMetadata.date || new Date().toISOString(),
          author: mdMetadata.author || 'Anonymous',
          readTime: mdMetadata.readTime || '5 min',
          tags: jsonMetadata.tags || [],
          image: jsonMetadata.image || null,
          imageAlt: jsonMetadata.imageAlt,
          category: mdMetadata.category,
          dateModified: jsonMetadata.dateModified,
          tldr: jsonMetadata.tldr,
          faqItems: jsonMetadata.faqItems,
        } as BlogMetadata;
      })
      .filter((post): post is BlogMetadata => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// ✅ Get single blog post (combine JSON + MD data + content)
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIRECTORY, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content: markdownContent } = matter(fileContent);
    
    const jsonMetadata = getMetadataFromJSON(slug) || {};

    let htmlContent = await marked(markdownContent);
    htmlContent = htmlContent.replace(/<h2>(.*?)<\/h2>/g, (match, text) => {
      const cleanText = text.replace(/<[^>]*>/g, '');
      const id = cleanText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      return `<h2 id="${id}">${text}</h2>`;
    });

    return {
      slug,
      // ✅ From JSON metadata (editable)
      title: jsonMetadata.title || data.title || 'Untitled',
      excerpt: jsonMetadata.excerpt || data.excerpt || '',
      tags: jsonMetadata.tags || data.tags || [],
      image: jsonMetadata.image || data.image || null,
      imageAlt: jsonMetadata.imageAlt || data.imageAlt,
      dateModified: jsonMetadata.dateModified || data.dateModified,
      tldr: jsonMetadata.tldr || data.tldr,
      faqItems: jsonMetadata.faqItems || data.faqItems,
      
      // ✅ From MD frontmatter (core content)
      content: htmlContent,
      date: data.date || new Date().toISOString(),
      author: data.author || 'Anonymous',
      readTime: data.readTime || '5 min',
      category: data.category,
      canonical: `https://mirelleinspo.com/blog/${slug}`,
      
      // ✅ Optional fields from MD
      updatedDate: data.updatedDate,
      imageWidth: data.imageWidth,
      imageHeight: data.imageHeight,
      wordCount: data.wordCount,
      tutorialSteps: data.tutorialSteps,
      tutorialMetadata: data.tutorialMetadata,
      videoMetadata: data.videoMetadata,
      galleryImages: data.galleryImages,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

// ✅ Keep all other functions the same...
export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const files = fs.readdirSync(BLOG_DIRECTORY);
    return files.filter((file) => file.endsWith('.md')).map((file) => file.replace('.md', ''));
  } catch (error) {
    console.error('Error reading blog slugs:', error);
    return [];
  }
}

export async function getPostsByCategory(categorySlug: string): Promise<BlogMetadata[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => {
    if (!post.category) return false;
    const postCategorySlug = post.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return postCategorySlug === categorySlug;
  });
}

export async function getPostsByTag(tagSlug: string): Promise<BlogMetadata[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) =>
    post.tags.some((tag) => {
      const tagSlugified = tag.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return tagSlugified === tagSlug;
    })
  );
}

export async function getAllCategories(): Promise<{ name: string; slug: string; count: number; description: string }[]> {
  const allPosts = await getAllBlogPosts();
  const categoryMap = new Map<string, number>();

  allPosts.forEach((post) => {
    if (post.category) {
      categoryMap.set(post.category, (categoryMap.get(post.category) || 0) + 1);
    }
  });

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({
      name,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      count,
      description: `Expert articles about ${name}`,
    }))
    .sort((a, b) => b.count - a.count);
}

export async function getAllTags(): Promise<{ name: string; slug: string; count: number }[]> {
  const allPosts = await getAllBlogPosts();
  const tagMap = new Map<string, number>();

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({
      name,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export async function getRelatedPosts(slug: string, limit: number = 3): Promise<BlogMetadata[]> {
  const currentPost = await getBlogPost(slug);
  if (!currentPost) return [];

  const allPosts = await getAllBlogPosts();

  const scoredPosts = allPosts
    .filter((post) => post.slug !== slug)
    .map((post) => {
      let score = 0;
      if (post.category && post.category === currentPost.category) score += 10;
      const matchingTags = post.tags.filter((tag) => currentPost.tags.includes(tag));
      score += matchingTags.length * 5;
      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scoredPosts.map((item) => item.post);
}

export async function getPaginatedPosts(
  page: number = 1,
  perPage: number = 12
): Promise<{
  posts: BlogMetadata[];
  totalPages: number;
  currentPage: number;
  totalPosts: number;
}> {
  const allPosts = await getAllBlogPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const posts = allPosts.slice(start, end);

  return { posts, totalPages, currentPage: page, totalPosts };
}

export async function searchPosts(query: string): Promise<BlogMetadata[]> {
  if (!query.trim()) return [];

  const allPosts = await getAllBlogPosts();
  const lowerQuery = query.toLowerCase();

  return allPosts.filter((post) => {
    const searchText = `${post.title} ${post.excerpt} ${post.tags.join(' ')} ${post.category || ''}`.toLowerCase();
    return searchText.includes(lowerQuery);
  });
}
