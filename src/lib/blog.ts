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

// ✅ Read from JSON metadata
function getMetadataFromJSON(slug: string): BlogMetadata | null {
  try {
    const metadataPath = path.join(METADATA_DIRECTORY, `${slug}.json`);
    if (fs.existsSync(metadataPath)) {
      const jsonContent = fs.readFileSync(metadataPath, 'utf8');
      return JSON.parse(jsonContent);
    }
    return null;
  } catch (error) {
    console.error(`Error reading metadata for ${slug}:`, error);
    return null;
  }
}

// ✅ Fallback to frontmatter
function getMetadataFromFrontmatter(slug: string): BlogMetadata | null {
  try {
    const filePath = path.join(BLOG_DIRECTORY, `${slug}.md`);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);

    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Anonymous',
      tags: data.tags || [],
      image: data.image || null,
      readTime: data.readTime || '5 min',
      imageAlt: data.imageAlt || undefined,
      category: data.category || undefined,
    };
  } catch (error) {
    console.error(`Error reading frontmatter for ${slug}:`, error);
    return null;
  }
}

// ✅ Get all blog posts
export async function getAllBlogPosts(): Promise<BlogMetadata[]> {
  try {
    const files = fs.readdirSync(BLOG_DIRECTORY);
    const posts = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const slug = file.replace('.md', '');
        const metadata = getMetadataFromJSON(slug) || getMetadataFromFrontmatter(slug);
        if (!metadata) return null;
        return { ...metadata, slug };
      })
      .filter((post): post is BlogMetadata => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// ✅ Get single blog post
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIRECTORY, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content: markdownContent } = matter(fileContent);
    const metadata = getMetadataFromJSON(slug);

    let htmlContent = await marked(markdownContent);
    htmlContent = htmlContent.replace(/<h2>(.*?)<\/h2>/g, (match, text) => {
      const cleanText = text.replace(/<[^>]*>/g, '');
      const id = cleanText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      return `<h2 id="${id}">${text}</h2>`;
    });

    const tldr = data.tldr
      ? {
          summary: data.tldr.summary || [],
          keyTakeaways: data.tldr.keyTakeaways || [],
        }
      : undefined;

    return {
      slug,
      title: metadata?.title || data.title || 'Untitled',
      excerpt: metadata?.excerpt || data.excerpt || '',
      content: htmlContent,
      date: metadata?.date || data.date || new Date().toISOString(),
      author: metadata?.author || data.author || 'Anonymous',
      tags: metadata?.tags || data.tags || [],
      image: metadata?.image || data.image || null,
      readTime: metadata?.readTime || data.readTime || '5 min',
      canonical: metadata?.canonical || data.canonical || `https://mirelleinspo.com/blog/${slug}`,
      updatedDate: metadata?.updatedDate || data.updatedDate || undefined,
      category: metadata?.category || data.category || undefined,
      imageAlt: metadata?.imageAlt || data.imageAlt || undefined,
      imageWidth: metadata?.imageWidth || data.imageWidth || undefined,
      imageHeight: metadata?.imageHeight || data.imageHeight || undefined,
      dateModified: metadata?.dateModified || data.dateModified || data.updatedDate || undefined,
      wordCount: metadata?.wordCount || data.wordCount || undefined,
      faqItems: data.faqItems || undefined,
      tutorialSteps: data.tutorialSteps || undefined,
      tutorialMetadata: data.tutorialMetadata || undefined,
      videoMetadata: data.videoMetadata || undefined,
      galleryImages: metadata?.galleryImages || data.galleryImages || undefined,
      tldr,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

// ✅ Get all slugs
export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const files = fs.readdirSync(BLOG_DIRECTORY);
    return files.filter((file) => file.endsWith('.md')).map((file) => file.replace('.md', ''));
  } catch (error) {
    console.error('Error reading blog slugs:', error);
    return [];
  }
}

// ✅ Get posts by category
export async function getPostsByCategory(categorySlug: string): Promise<BlogMetadata[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => {
    if (!post.category) return false;
    const postCategorySlug = post.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return postCategorySlug === categorySlug;
  });
}

// ✅ Get posts by tag
export async function getPostsByTag(tagSlug: string): Promise<BlogMetadata[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) =>
    post.tags.some((tag) => {
      const tagSlugified = tag.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return tagSlugified === tagSlug;
    })
  );
}

// ✅ Get all categories with slug + count
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

// ✅ Get all tags with slug + count
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

// ✅ Related posts
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

// ✅ Paginated posts
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

// ✅ Search
export async function searchPosts(query: string): Promise<BlogMetadata[]> {
  if (!query.trim()) return [];

  const allPosts = await getAllBlogPosts();
  const lowerQuery = query.toLowerCase();

  return allPosts.filter((post) => {
    const searchText = `${post.title} ${post.excerpt} ${post.tags.join(' ')} ${post.category || ''}`.toLowerCase();
    return searchText.includes(lowerQuery);
  });
}
