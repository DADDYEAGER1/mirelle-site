import Image from 'next/image';
import Link from 'next/link';
import { BlogPost as BlogPostType } from '@/types/blog';
import BlogSidebar from './BlogSidebar';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  // Extract headings for Table of Contents
  const tableOfContents = extractHeadings(post.content);
  
  // Related posts (you can make this dynamic later based on tags)
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
  ].filter(p => p.slug !== post.slug); // Don't show current post

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link 
          href="/blog"
          className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-6">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.readTime} min read</span>
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

      {/* Two Column Layout: Content + Sidebar */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <article className="flex-1 max-w-3xl">
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
        </article>

        {/* Sidebar */}
        <BlogSidebar
          tableOfContents={tableOfContents}
          relatedPosts={relatedPosts}
        />
      </div>
    </div>
  );
}

// Helper function to extract H2 headings for Table of Contents
function extractHeadings(htmlContent: string): { id: string; title: string }[] {
  const headings: { id: string; title: string }[] = [];
  const regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  let match;
  
  while ((match = regex.exec(htmlContent)) !== null) {
    const title = match[1].replace(/<[^>]*>/g, ''); // Strip HTML tags
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
    headings.push({ id, title });
  }
  
  return headings;
}
