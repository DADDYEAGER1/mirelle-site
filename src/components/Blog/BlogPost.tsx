// import { notFound } from 'next/navigation';
// import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
// import BlogPost from '@/components/Blog/BlogPost';
// import type { Metadata } from 'next';
// import { generateSchemas } from '@/lib/generateSchemas';

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// export async function generateStaticParams() {
//   const slugs = await getAllBlogSlugs();
//   return slugs.map((slug) => ({
//     slug: slug,
//   }));
// }

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const { slug } = params;
//   const post = await getBlogPost(slug);
  
//   if (!post) {
//     return {
//       title: 'Post Not Found - Mirelle',
//       description: 'The blog post you are looking for does not exist.',
//       robots: {
//         index: false,
//         follow: false,
//       },
//     };
//   }

//   const canonicalUrl = `https://mirelleinspo.com/blog/${slug}`;
//   const imageUrl = post.image ? `https://mirelleinspo.com${post.image}` : 'https://mirelleinspo.com/og-default.png';
  
//   return {
//     title: `${post.title} | Mirelle`,
//     description: post.excerpt || `Discover ${post.title} - expert nail tips, trends, and tutorials from Mirelle.`,
//     keywords: post.tags?.join(', ') || 'nail art, nail care, nail trends, manicure tips, nail design',
//     authors: [{ name: post.author || 'Mirelle' }],
//     creator: post.author || 'Mirelle',
//     publisher: 'Mirelle',
//     alternates: {
//       canonical: canonicalUrl,
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         'max-video-preview': -1,
//         'max-image-preview': 'large',
//         'max-snippet': -1,
//       },
//     },
//     openGraph: {
//       title: `${post.title} | Mirelle`,
//       description: post.excerpt || `Discover ${post.title} - expert nail inspiration from Mirelle.`,
//       type: 'article',
//       url: canonicalUrl,
//       siteName: 'Mirelle',
//       locale: 'en_US',
//       images: [{
//         url: imageUrl,
//         width: 1200,
//         height: 630,
//         alt: post.title,
//         type: 'image/jpeg',
//       }],
//       publishedTime: post.date,
//       modifiedTime: post.updatedDate || post.date,
//       authors: [post.author || 'Mirelle'],
//       section: post.category || 'Nail Care',
//       tags: post.tags || [],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: `${post.title} | Mirelle`,
//       description: post.excerpt || `Discover ${post.title} - expert nail inspiration from Mirelle.`,
//       images: [imageUrl],
//       creator: '@mirelleinspo',
//       site: '@mirelleinspo',
//     },
//     other: {
//       'article:published_time': post.date,
//       'article:modified_time': post.updatedDate || post.date,
//       'article:author': post.author || 'Mirelle',
//       'article:section': post.category || 'Nail Care',
//       'article:tag': post.tags?.join(', ') || '',
//     },
//   };
// }

// export default async function BlogPostPage({ params }: PageProps) {
//   const { slug } = params;
//   const post = await getBlogPost(slug);
  
//   if (!post) notFound();

//   const schemas = generateSchemas({
//     post,
//     slug: params.slug,
//     faqItems: post.faqItems,
//     tutorialSteps: post.tutorialSteps,
//     tutorialMetadata: post.tutorialMetadata,
//   });

//   return (
//     <>
//       {/* Core Structured Data */}
//       <script 
//         type="application/ld+json" 
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.articleSchema) }} 
//       />
//       <script 
//         type="application/ld+json" 
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }} 
//       />
//       <script 
//         type="application/ld+json" 
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.websiteSchema) }} 
//       />
//       <script 
//         type="application/ld+json" 
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.organizationSchema) }} 
//       />
      
//       {/* Conditional Structured Data */}
//       {schemas.faqSchema && (
//         <script 
//           type="application/ld+json" 
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }} 
//         />
//       )}
//       {schemas.howToSchema && (
//         <script 
//           type="application/ld+json" 
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.howToSchema) }} 
//         />
//       )}
//       {schemas.videoSchema && (
//         <script 
//           type="application/ld+json" 
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.videoSchema) }} 
//         />
//       )}
      
//       <BlogPost post={post} />
//     </>
//   );
// }

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost as BlogPostType } from '@/types/blog';
import BlogSidebar from './BlogSidebar';
import CommentSection from '@/components/Blog/CommentSection';

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
    <div className="max-w-7xl mx-auto px-4 py-8">
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

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content - Takes 8 columns on large screens */}
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

        {/* Sidebar - Takes 4 columns on large screens */}
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
