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
          readTime: data.readTime || 5,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
  } catch (error) {
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIRECTORY, `${slug}.md`);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data, content: markdownContent } = matter(content);
    
    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      content: await marked(markdownContent),
      date: data.date || new Date().toISOString(),
      author: data.author || 'Anonymous',
      tags: data.tags || [],
      image: data.image || null,
      readTime: data.readTime || 5,
    };
  } catch (error) {
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
    return [];
  }
}


// Custom renderer to add IDs to headings
const renderer = new marked.Renderer();
renderer.heading = function (text, level) {
  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `<h${level} id="${id}">${text}</h${level}>`;
};

marked.setOptions({ renderer });

export async function getBlogPost(slug: string) {
  // ... your existing code
  
  const htmlContent = marked(content);
  
  return {
    // ... rest of your data
    content: htmlContent,
  };
}
