// src/lib/business.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { BusinessPost, BusinessMetadata } from '@/types/business';

// ─── Marked config (mirrors blog.ts) ──────────────────────────────────────────

marked.setOptions({ breaks: true, gfm: true });

const renderer = new marked.Renderer();

renderer.html = (html: string) => html.replace(/src="images\//g, 'src="/images/');
renderer.image = (href: string, title: string | null, text: string) => {
  const fixedHref = href.startsWith('images/') ? `/${href}` : href;
  const titleAttr = title ? ` title="${title}"` : '';
  return `<img src="${fixedHref}" alt="${text}"${titleAttr} loading="lazy" />`;
};

marked.use({ renderer });

// ─── Paths ────────────────────────────────────────────────────────────────────

const BUSINESS_DIRECTORY = path.join(process.cwd(), 'src/content/business');

// ─── Helpers ──────────────────────────────────────────────────────────────────

function resolveFilePath(slug: string): { filePath: string; isMDX: boolean } | null {
  const mdxPath = path.join(BUSINESS_DIRECTORY, `${slug}.mdx`);
  const mdPath  = path.join(BUSINESS_DIRECTORY, `${slug}.md`);
  if (fs.existsSync(mdxPath)) return { filePath: mdxPath, isMDX: true };
  if (fs.existsSync(mdPath))  return { filePath: mdPath,  isMDX: false };
  return null;
}

function getAllBusinessFiles(): string[] {
  try {
    return fs.readdirSync(BUSINESS_DIRECTORY).filter(
      file => file.endsWith('.md') || file.endsWith('.mdx')
    );
  } catch {
    return [];
  }
}

function fileToSlug(filename: string): string {
  return filename.replace(/\.mdx?$/, '');
}

// ─── Cache (mirrors blog.ts pattern exactly) ──────────────────────────────────

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

class BusinessCache {
  private cache = new Map<string, CacheEntry<unknown>>();
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

const businessCache = new BusinessCache();

// ─── Public API ───────────────────────────────────────────────────────────────

export async function getAllBusinessPosts(): Promise<BusinessMetadata[]> {
  const cacheKey = 'all-business-posts';
  const cached = businessCache.get<BusinessMetadata[]>(cacheKey);
  if (cached) return cached;

  try {
    const files = getAllBusinessFiles();

    const posts = files
      .map(file => {
        const slug     = fileToSlug(file);
        const filePath = path.join(BUSINESS_DIRECTORY, file);
        const content  = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(content);

        return {
          slug,
          title:            data.title            || 'Untitled',
          excerpt:          data.excerpt           || '',
          date:             data.date              || new Date().toISOString(),
          dateModified:     data.dateModified,
          author:           data.author            || 'Mirellé Team',
          region:           data.region            || '',
          regionCode:       data.regionCode        || '',
          language:         data.language          || 'en',
          locale:           data.locale            || 'en_GB',
          city:             data.city              || '',
          country:          data.country           || '',
          canonical:        data.canonical         || `https://mirelleinspo.com/business/${slug}`,
          targetKeyword:    data.targetKeyword     || '',
          secondaryKeywords:data.secondaryKeywords || [],
          searchIntent:     data.searchIntent,
          noIndex:          data.noIndex           ?? false,
          tldr:             data.tldr              || '',
          entityType:       data.entityType        || 'EditorialNailPlatform',
          speakable:        data.speakable         ?? true,
          contact:          data.contact           || { email: '' },
          services:         data.services          || [],
          schemaType:       data.schemaType        || 'ProfessionalService',
          template:         'business' as const,
          image:            data.image             || '',
          imageAlt:         data.imageAlt          || data.title || '',
          imageWidth:       data.imageWidth        || 1200,
          imageHeight:      data.imageHeight       || 800,
          url:              `https://mirelleinspo.com/business/${slug}`,
        } as BusinessMetadata;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    businessCache.set(cacheKey, posts);
    return posts;
  } catch (error) {
    console.error('Error reading business posts:', error);
    return [];
  }
}

export async function getBusinessPost(slug: string): Promise<BusinessPost | null> {
  const cacheKey = `business-post:${slug}`;
  const cached = businessCache.get<BusinessPost>(cacheKey);
  if (cached) return cached;

  try {
    const resolved = resolveFilePath(slug);
    if (!resolved) {
      console.error(`Business post not found: ${slug}`);
      return null;
    }

    const { filePath, isMDX } = resolved;
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content: rawContent } = matter(fileContent);

    let htmlContent: string;

    if (isMDX) {
      htmlContent = rawContent;
    } else {
      let compiled = await marked(rawContent);
      compiled = compiled.replace(
        /<h2>(.*?)<\/h2>/g,
        (_match, text) => {
          const id = text
            .replace(/<[^>]*>/g, '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
          return `<h2 id="${id}">${text}</h2>`;
        }
      );
      htmlContent = compiled;
    }

    const post: BusinessPost = {
      slug,
      title:             data.title            || 'Untitled',
      excerpt:           data.excerpt          || '',
      content:           htmlContent,
      isMDX,
      date:              data.date             || new Date().toISOString(),
      dateModified:      data.dateModified,
      author:            data.author           || 'Mirellé Team',
      region:            data.region           || '',
      regionCode:        data.regionCode       || '',
      language:          data.language         || 'en',
      locale:            data.locale           || 'en_GB',
      city:              data.city             || '',
      country:           data.country          || '',
      canonical:         data.canonical        || `https://mirelleinspo.com/business/${slug}`,
      targetKeyword:     data.targetKeyword    || '',
      secondaryKeywords: data.secondaryKeywords|| [],
      searchIntent:      data.searchIntent,
      noIndex:           data.noIndex          ?? false,
      tldr:              data.tldr             || '',
      faqSchema:         data.faqSchema        || [],
      entityType:        data.entityType       || 'EditorialNailPlatform',
      speakable:         data.speakable        ?? true,
      contact:           data.contact          || { email: '' },
      services:          data.services         || [],
      schemaType:        data.schemaType       || 'ProfessionalService',
      template:          'business' as const,
      image:             data.image            || '',
      imageAlt:          data.imageAlt         || data.title || '',
      imageWidth:        data.imageWidth       || 1200,
      imageHeight:       data.imageHeight      || 800,
      galleryImages:     data.galleryImages    || [],
      url:               `https://mirelleinspo.com/business/${slug}`,
    };

    businessCache.set(cacheKey, post);
    return post;
  } catch (error) {
    console.error(`Error reading business post ${slug}:`, error);
    return null;
  }
}

export async function getAllBusinessSlugs(): Promise<string[]> {
  try {
    return getAllBusinessFiles().map(fileToSlug);
  } catch (error) {
    console.error('Error reading business slugs:', error);
    return [];
  }
}

export async function getBusinessPostsByCountry(): Promise<Record<string, BusinessMetadata[]>> {
  const allPosts = await getAllBusinessPosts();
  return allPosts.reduce<Record<string, BusinessMetadata[]>>((acc, post) => {
    const country = post.country || 'Other';
    if (!acc[country]) acc[country] = [];
    acc[country].push(post);
    return acc;
  }, {});
}

export function clearBusinessCache(): void {
  businessCache.clear();
}