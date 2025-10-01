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
    
    // Add IDs to H2 headings using regex (simpler approach)
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
