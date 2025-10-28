import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogMetadata, Category, Tag } from '@/types/blog';
import { marked } from 'marked';

marked.setOptions({
  breaks: true,
  gfm: true,
});

const BLOG_DIRECTORY = path.join(process.cwd(), 'src/content/blogs');

export async function getAllBlogPosts(): Promise<BlogMetadata[]> {
  try {
    const files = fs.readdirSync(BLOG_DIRECTORY);
    const posts = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const slug = file.replace('.md', '');
        const filePath = path.join(BLOG_DIRECTORY, file);
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
          canonical: data.canonical || `https://mirelleinspo.com/blog/${slug}`,
          imageAlt: data.imageAlt || undefined,
          category: data.category || undefined,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIRECTORY, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content: markdownContent } = matter(fileContent);
    
    // Convert markdown to HTML
    let htmlContent = await marked(markdownContent);
    
    // Add IDs to H2 headings using regex
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

    const tldr = data.tldr
      ? {
          summary: data.tldr.summary || [],
          keyTakeaways: data.tldr.keyTakeaways || []
        }
      : undefined;
    
    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      content: htmlContent,
      date: data.date || new Date().toISOString(),
      author: data.author || 'Anonymous',
      tags: data.tags || [],
      image: data.image || null,
      readTime: data.readTime || '5 min',
      canonical: data.canonical || `https://mirelleinspo.com/blog/${slug}`,
      updatedDate: data.updatedDate || undefined,
      category: data.category || undefined,
      imageAlt: data.imageAlt || undefined,
      imageWidth: data.imageWidth || undefined,
      imageHeight: data.imageHeight || undefined,
      dateModified: data.dateModified || data.updatedDate || undefined,
      wordCount: data.wordCount || undefined,
      faqItems: data.faqItems || undefined,
      tutorialSteps: data.tutorialSteps || undefined,
      tutorialMetadata: data.tutorialMetadata || undefined,
      videoMetadata: data.videoMetadata || undefined,
      galleryImages: data.galleryImages || undefined,
      tldr,
    };
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

// ✅ NEW: Get posts by category
export async function getPostsByCategory(category: string): Promise<BlogMetadata[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter(post => 
    post.category?.toLowerCase() === category.toLowerCase()
  );
}

// ✅ NEW: Get posts by tag
export async function getPostsByTag(tag: string): Promise<BlogMetadata[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
}

// ✅ NEW: Get all unique categories with counts
export async function getAllCategories(): Promise<Category[]> {
  const allPosts = await getAllBlogPosts();
  const categoryMap = new Map<string, number>();
  
  allPosts.forEach(post => {
    if (post.category) {
      const count = categoryMap.get(post.category) || 0;
      categoryMap.set(post.category, count + 1);
    }
  });
  
  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      description: `Explore ${count} articles about ${name}`,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

// ✅ NEW: Get all unique tags with counts
export async function getAllTags(): Promise<Tag[]> {
  const allPosts = await getAllBlogPosts();
  const tagMap = new Map<string, number>();
  
  allPosts.forEach(post => {
    post.tags.forEach(tag => {
      const count = tagMap.get(tag) || 0;
      tagMap.set(tag, count + 1);
    });
  });
  
  return Array.from(tagMap.entries())
    .map(([name, count]) => ({
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

// ✅ NEW: Get related posts based on tags and category
export async function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): Promise<BlogMetadata[]> {
  const currentPost = await getBlogPost(currentSlug);
  if (!currentPost) return [];
  
  const allPosts = await getAllBlogPosts();
  
  // Score posts by relevance
  const scoredPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0;
      
      // Same category gets 3 points
      if (post.category === currentPost.category) {
        score += 3;
      }
      
      // Each matching tag gets 1 point
      const matchingTags = post.tags.filter(tag => 
        currentPost.tags.includes(tag)
      );
      score += matchingTags.length;
      
      return { post, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
  
  return scoredPosts.map(item => item.post);
}

// ✅ NEW: Get paginated posts
export async function getPaginatedPosts(
  page: number = 1,
  postsPerPage: number = 12
): Promise<{
  posts: BlogMetadata[];
  totalPages: number;
  currentPage: number;
  totalPosts: number;
}> {
  const allPosts = await getAllBlogPosts();
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  
  return {
    posts: allPosts.slice(startIndex, endIndex),
    totalPages,
    currentPage: page,
    totalPosts,
  };
}

// ✅ NEW: Search posts using simple text matching (Fuse.js will be used in component)
export async function searchPosts(query: string): Promise<BlogMetadata[]> {
  const allPosts = await getAllBlogPosts();
  const lowerQuery = query.toLowerCase();
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    post.category?.toLowerCase().includes(lowerQuery)
  );
}
