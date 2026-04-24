import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogMetadata } from '@/types/blog';
import { marked } from 'marked';

// ── Renderer ─────────────────────────────────────────────────────────────────
const renderer = new marked.Renderer();

renderer.html = ({ text, raw }: { text?: string; raw?: string }) => {
  const content = text ?? raw ?? '';
  return content.replace(/src="images\//g, 'src="/images/');
};

renderer.image = ({ href, title, text }: { href: string; title: string | null; text: string }) => {
  const fixedHref = href.startsWith('images/') ? `/${href}` : href;
  const titleAttr = title ? ` title="${title}"` : '';
  return `<img src="${fixedHref}" alt="${text}"${titleAttr} loading="lazy" />`;
};

marked.use({
  breaks: true,
  gfm: true,
  pedantic: false,
  renderer,
});

// ── THE FIX: extract raw HTML blocks BEFORE marked touches them ───────────────
// marked silently drops/mangles raw HTML blocks that use single-quote attributes.
// We yank them out, replace with placeholders, run marked, then restore them.
function preserveHtmlBlocks(content: string): { processed: string; blocks: string[] } {
  const blocks: string[] = [];
  const processed = content.replace(/<(div|table|a)[^>]*>[\s\S]*?<\/\1>/gi, (match) => {
    const index = blocks.length;
    blocks.push(match);
    return `%%HTML_BLOCK_${index}%%`;
  });
  return { processed, blocks };
}

function restoreHtmlBlocks(html: string, blocks: string[]): string {
  return html.replace(/%%HTML_BLOCK_(\d+)%%/g, (_, i) => blocks[parseInt(i)]);
}
// ─────────────────────────────────────────────────────────────────────────────

const SPOTLIGHT_DIRECTORY = path.join(process.cwd(), 'src/content/spotlights');

function resolveFilePath(slug: string): { filePath: string; isMDX: boolean } | null {
  const mdxPath = path.join(SPOTLIGHT_DIRECTORY, `${slug}.mdx`);
  const mdPath  = path.join(SPOTLIGHT_DIRECTORY, `${slug}.md`);
  if (fs.existsSync(mdxPath)) return { filePath: mdxPath, isMDX: true };
  if (fs.existsSync(mdPath))  return { filePath: mdPath,  isMDX: false };
  return null;
}

function getAllSpotlightFiles(): string[] {
  try {
    return fs.readdirSync(SPOTLIGHT_DIRECTORY).filter(
      file => file.endsWith('.md') || file.endsWith('.mdx')
    );
  } catch {
    return [];
  }
}

function fileToSlug(filename: string): string {
  return filename.replace(/\.mdx?$/, '');
}

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

class SpotlightCache {
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
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  clear(): void {
    this.cache.clear();
  }
}

const spotlightCache = new SpotlightCache();

export async function getAllSpotlightPosts(): Promise<BlogMetadata[]> {
  const cacheKey = 'all-spotlight-posts';
  const cached = spotlightCache.get<BlogMetadata[]>(cacheKey);
  if (cached) return cached;

  try {
    const files = getAllSpotlightFiles();
    const posts = files
      .map(file => {
        const slug     = fileToSlug(file);
        const filePath = path.join(SPOTLIGHT_DIRECTORY, file);
        const content  = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(content);
        return {
          slug,
          title:             data.title      || 'Untitled',
          excerpt:           data.excerpt    || '',
          date:              data.date       || new Date().toISOString(),
          author:            data.author     || 'Mirellè Team',
          category:          data.category,
          image:             data.image      || null,
          imageAlt:          data.imageAlt,
          imageWidth:        data.imageWidth  || 1200,
          imageHeight:       data.imageHeight || 630,
          readTime:          data.readTime   || '5 min',
          canonical:         data.canonical  || `https://mirelleinspo.com/spotlight/${slug}`,
          template:          data.template   || 'split-left',
          topicalMap:        data.topicalMap,
          navigationContext: data.navigationContext,
          url:               `https://mirelleinspo.com/spotlight/${slug}`,
        } as BlogMetadata;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    spotlightCache.set(cacheKey, posts);
    return posts;
  } catch (error) {
    console.error('Error reading spotlight posts:', error);
    return [];
  }
}

export async function getSpotlightPost(slug: string): Promise<BlogPost | null> {
  const cacheKey = `spotlight-post:${slug}`;
  const cached = spotlightCache.get<BlogPost>(cacheKey);
  if (cached) return cached;

  try {
    const resolved = resolveFilePath(slug);
    if (!resolved) {
      console.error(`Spotlight post not found: ${slug}`);
      return null;
    }

    const { filePath, isMDX } = resolved;
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content: rawContent } = matter(fileContent);

    let htmlContent: string;

    if (isMDX) {
      htmlContent = rawContent;
    } else {
      // 1. Pull out raw HTML blocks so marked can't touch them
      const { processed, blocks } = preserveHtmlBlocks(rawContent);

      // 2. Run marked on markdown-only content
      let compiled = marked.parse(processed, { async: false }) as string;

      // 3. Restore the raw HTML blocks
      compiled = restoreHtmlBlocks(compiled, blocks);

      // 4. Add IDs to h2s
      compiled = compiled.replace(
        /<h2>(.*?)<\/h2>/g,
        (_match, text) => {
          const cleanText = text.replace(/<[^>]*>/g, '');
          const id = cleanText
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
          return `<h2 id="${id}">${text}</h2>`;
        }
      );

      htmlContent = compiled;
    }

    const post: BlogPost = {
      slug,
      title:             data.title      || 'Untitled',
      excerpt:           data.excerpt    || '',
      content:           htmlContent,
      isMDX,
      date:              data.date       || new Date().toISOString(),
      author:            data.author     || 'Mirellè Team',
      category:          data.category,
      image:             data.image      || null,
      imageAlt:          data.imageAlt,
      imageWidth:        data.imageWidth  || 1200,
      imageHeight:       data.imageHeight || 630,
      readTime:          data.readTime   || '5 min',
      canonical:         data.canonical  || `https://mirelleinspo.com/spotlight/${slug}`,
      template:          'split-left',
      topicalMap:        data.topicalMap,
      navigationContext: data.navigationContext,
      carouselImages:    data.carouselImages,
      products:          data.products,
      coverImage:        data.image      || '/images/default-blog.jpg',
    };

    spotlightCache.set(cacheKey, post);
    return post;
  } catch (error) {
    console.error(`Error reading spotlight post ${slug}:`, error);
    return null;
  }
}

export async function getAllSpotlightSlugs(): Promise<string[]> {
  try {
    return getAllSpotlightFiles().map(fileToSlug);
  } catch (error) {
    console.error('Error reading spotlight slugs:', error);
    return [];
  }
}

export async function getSpotlightPostsByCategory(categorySlug: string): Promise<BlogMetadata[]> {
  const allPosts = await getAllSpotlightPosts();
  return allPosts.filter(post => post.category === categorySlug);
}

export async function getAllSpotlightCategories() {
  return [
    { name: 'Seasonal',        slug: 'seasonal' },
    { name: 'Trends',          slug: 'trends' },
    { name: 'Tutorial',        slug: 'tutorial' },
    { name: 'Nail Care',       slug: 'nail care' },
    { name: 'Nail Art',        slug: 'nail art' },
    { name: "Editor's Choice", slug: "editor's choice" },
  ];
}

export async function getRelatedSpotlightPosts(
  currentSlug: string,
  limit: number = 9
): Promise<BlogMetadata[]> {
  const currentPost = await getSpotlightPost(currentSlug);
  if (!currentPost) return [];

  const allPosts = await getAllSpotlightPosts();
  const sameCategoryPosts = allPosts
    .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit);

  if (sameCategoryPosts.length < limit) {
    const remaining  = limit - sameCategoryPosts.length;
    const otherPosts = allPosts
      .filter(post =>
        post.slug !== currentSlug &&
        !sameCategoryPosts.some(sp => sp.slug === post.slug)
      )
      .slice(0, remaining);
    return [...sameCategoryPosts, ...otherPosts];
  }

  return sameCategoryPosts;
}

export async function getPaginatedSpotlightPosts(
  page: number = 1,
  perPage: number = 12
): Promise<{
  posts: BlogMetadata[];
  totalPages: number;
  currentPage: number;
  totalPosts: number;
}> {
  const allPosts   = await getAllSpotlightPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / perPage);
  const startIndex = (page - 1) * perPage;
  const posts      = allPosts.slice(startIndex, startIndex + perPage);
  return { posts, totalPages, currentPage: page, totalPosts };
}

export async function getAllSpotlightClusters() {
  const cacheKey = 'all-spotlight-clusters';
  const cached = spotlightCache.get<any[]>(cacheKey);
  if (cached) return cached;

  const allPosts    = await getAllSpotlightPosts();
  const pillarPosts = allPosts.filter(post => post.topicalMap?.position === 'pillar');

  const clusterGroups = pillarPosts.map(pillar => {
    const clusterPosts = allPosts.filter(post =>
      post.topicalMap?.position === 'cluster' &&
      (
        post.topicalMap?.parentPillar === `/spotlight/${pillar.slug}` ||
        post.topicalMap?.parentPillar === pillar.slug
      )
    );
    return { pillar, clusters: clusterPosts };
  });

  spotlightCache.set(cacheKey, clusterGroups);
  return clusterGroups;
}

export async function getStandaloneSpotlightPosts(): Promise<BlogMetadata[]> {
  const cacheKey = 'standalone-spotlight-posts';
  const cached = spotlightCache.get<BlogMetadata[]>(cacheKey);
  if (cached) return cached;

  const allPosts   = await getAllSpotlightPosts();
  const standalone = allPosts.filter(post =>
    !post.topicalMap?.position ||
    (post.topicalMap.position !== 'pillar' && post.topicalMap.position !== 'cluster')
  );

  spotlightCache.set(cacheKey, standalone);
  return standalone;
}

export function clearSpotlightCache() {
  spotlightCache.clear();
}