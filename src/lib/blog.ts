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

// Helper function to recursively read all markdown files from nested folders
function getAllMarkdownFiles(dir: string, fileList: { category: string; filename: string; filepath: string }[] = []): { category: string; filename: string; filepath: string }[] {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);

    if (stat.isDirectory()) {
      // Recursively read subdirectory
      getAllMarkdownFiles(filepath, fileList);
    } else if (file.endsWith('.md')) {
      // Extract category from folder name
      const relativePath = path.relative(BLOG_DIRECTORY, dir);
      const category = relativePath || 'uncategorized';
      
      fileList.push({
        category,
        filename: file,
        filepath
      });
    }
  });

  return fileList;
}

export async function getAllBlogPosts(): Promise<BlogMetadata[]> {
  try {
    const markdownFiles = getAllMarkdownFiles(BLOG_DIRECTORY);
    
    const posts = markdownFiles
      .map(({ category, filename, filepath }) => {
        const slug = filename.replace('.md', '');
        const content = fs.readFileSync(filepath, 'utf8');
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
          category: category, // Category from folder name
          canonical: data.canonical || `https://mirelleinspo.com/blog/${slug}`,
          faqItems: data.faqItems || undefined,
          tutorialSteps: data.tutorialSteps || undefined,
          tutorialMetadata: data.tutorialMetadata || undefined,
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
    // Search for the file in all subdirectories
    const markdownFiles = getAllMarkdownFiles(BLOG_DIRECTORY);
    const fileData = markdownFiles.find(f => f.filename === `${slug}.md`);
    
    if (!fileData) {
      console.error(`Blog post not found: ${slug}`);
      return null;
    }

    const fileContent = fs.readFileSync(fileData.filepath, 'utf8');
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
      category: fileData.category, // Category from folder name
      canonical: data.canonical || `https://mirelleinspo.com/blog/${slug}`,
      faqItems: data.faqItems || undefined,
      tutorialSteps: data.tutorialSteps || undefined,
      tutorialMetadata: data.tutorialMetadata || undefined,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const markdownFiles = getAllMarkdownFiles(BLOG_DIRECTORY);
    return markdownFiles.map(f => f.filename.replace('.md', ''));
  } catch (error) {
    console.error('Error reading blog slugs:', error);
    return [];
  }
}
