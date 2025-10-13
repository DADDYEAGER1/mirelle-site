// In src/components/Blog/BlogPost.tsx
// Change the component name to avoid conflict with the type

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost as BlogPostType } from '@/types/blog';
import BlogSidebar from './BlogSidebar';
import CommentSection from '@/components/Blog/CommentSection';

interface BlogPostProps {
  post: BlogPostType;
}

// RENAME: BlogPost -> BlogPostContent
export default function BlogPostContent({ post }: BlogPostProps) {
  // ... rest of the component stays the same
  const tableOfContents = extractHeadings(post.content);
  
  const relatedPosts = [
    {
      slug: 'halloween-nail-ideas-2025',
      title: '35+ Halloween Nail Ideas 2025',
      image: '/images/blog/halloweenhero.png'
    },
    {
      slug: 'christmas-nail-designs-2025',
      title: '18 Christmas Nail Designs 2025',
      image: '/images/blog/christmas-nail-designs-2025-hero.jpg'
    }
  ].filter(p => p.slug !== post.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link 
          href="/blog"
          className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
        >
          ← Back to Blog
        </Link>
      </div>

      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-6">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.readTime} read</span>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {post.image && (
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-8">
          <div 
            className="prose prose-lg max-w-none 
            [&_h2]:text-pink-600 [&_h2]:text-3xl [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:font-bold [&_h2]:scroll-mt-24
            [&_h3]:text-purple-600 [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:font-semibold
            [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-4
            [&_ul]:my-4 [&_li]:mb-2
            [&_strong]:text-gray-900 [&_strong]:font-semibold
            [&_a]:text-blue-600 [&_a]:no-underline hover:[&_a]:text-blue-800
            [&_img]:rounded-lg [&_img]:shadow-lg [&_img]:my-8
            [&_hr]:my-8 [&_hr]:border-pink-200"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <CommentSection postSlug={post.slug} postTitle={post.title} />
        </article>

        <aside className="lg:col-span-4">
          <BlogSidebar
            tableOfContents={tableOfContents}
            relatedPosts={relatedPosts}
          />
        </aside>
      </div>
    </div>
  );
}

function extractHeadings(htmlContent: string): { id: string; title: string }[] {
  const headings: { id: string; title: string }[] = [];
  const regex = /<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/gi;
  let match;
  
  while ((match = regex.exec(htmlContent)) !== null) {
    const id = match[1];
    const rawTitle = match[2];
    const title = rawTitle
      .replace(/<[^>]*>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .trim();
    
    headings.push({ id, title });
  }
  
  return headings;
}
