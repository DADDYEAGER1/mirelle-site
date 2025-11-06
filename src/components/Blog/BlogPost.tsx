import Image from 'next/image';
import Link from 'next/link';
import { BlogPost as BlogPostType } from '@/types/blog';
import BlogSidebar from './BlogSidebar';
import CommentSection from '@/components/Blog/CommentSection';
import TLDRSection from './TLDRSection';
import ReadingProgress from './ReadingProgress';
import SocialShare from './SocialShare';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  // Extract headings for Table of Contents
  const tableOfContents = extractHeadings(post.content);
  
  // Related posts
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Back Button */}
      <div className="mb-4 sm:mb-6">
        <Link 
          href="/blog"
          className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2 text-sm sm:text-base"
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Hero Section - Mobile Optimized */}
      <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
        {/* Title - Better mobile sizing */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-2">
          {post.title}
        </h1>
        
        {/* Meta Info - Stack on mobile */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 px-4">
          <span>By {post.author}</span>
          <span className="hidden sm:inline">•</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          })}</span>
          <span className="hidden sm:inline">•</span>
          <span>{post.readTime} read</span>
        </div>

        {/* Tags - Better mobile wrapping */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-4">
          {/* Show category badge first if exists */}
          {post.category && (
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              {post.category}
            </span>
          )}
          
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Hero Image - Mobile optimized aspect ratio */}
{post.image && (
  <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl">
    {/* Mobile: Use 16:9 for better fit, Desktop: Use actual 1200:630 ratio */}
    <div className="aspect-[16/9] sm:aspect-[1200/630] relative">
      <Image
        src={post.image}
        alt={post.alt ?? post.title}
        fill
        className="object-cover sm:object-contain sm:bg-gray-50"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        priority
      />
    </div>
  </div>
)}
      </div>

      {/* Reading Progress */}
      <ReadingProgress />

      {/* Social Share */}
      <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
        <SocialShare title={post.title} slug={post.slug} />
      </div>

      {/* TL;DR Section */}
{post.tldr && (
  <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
    <TLDRSection
      summary={post.tldr.summary}
      readTime={String(post.readTime)}
      faqs={post.faqItems || post.tldr.faqs || []}  // ✅ Use faqItems from post, fallback to tldr.faqs
      creativeLine={post.tldr.creativeLine}
      keyTakeaways={post.tldr.keyTakeaways}
    />
  </div>
)}

      {/* Two Column Layout - Stack on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Main Content */}
        <article className="lg:col-span-8">
          <div 
            className="prose prose-sm sm:prose-base lg:prose-lg max-w-none
            [&_h2]:text-pink-600 [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:mt-8 sm:[&_h2]:mt-12 [&_h2]:mb-4 sm:[&_h2]:mb-6 [&_h2]:font-bold [&_h2]:scroll-mt-20 sm:[&_h2]:scroll-mt-24
            [&_h3]:text-purple-600 [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:mt-6 sm:[&_h3]:mt-8 [&_h3]:mb-3 sm:[&_h3]:mb-4 [&_h3]:font-semibold
            [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-base
            [&_ul]:my-3 sm:[&_ul]:my-4 [&_li]:mb-2 [&_li]:text-base
            [&_strong]:text-gray-900 [&_strong]:font-semibold
            [&_a]:text-blue-600 [&_a]:no-underline hover:[&_a]:text-blue-800
            [&_img]:rounded-lg [&_img]:shadow-lg [&_img]:my-6 sm:[&_img]:my-8 [&_img]:w-full
            [&_hr]:my-6 sm:[&_hr]:my-8 [&_hr]:border-pink-200
            px-2 sm:px-0"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Comment Section */}
          <CommentSection postSlug={post.slug} postTitle={post.title} />
        </article>

        {/* Sidebar */}
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

// Extract and clean heading text
function extractHeadings(htmlContent: string): { id: string; title: string }[] {
  const headings: { id: string; title: string }[] = [];
  const regex = /<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/gi;
  let match;
  
  while ((match = regex.exec(htmlContent)) !== null) {
    const id = match[1];
    const rawTitle = match[2];
    // Strip ALL HTML tags and decode entities
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
