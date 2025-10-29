import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import BlogPost from '@/components/Blog/BlogPost';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedPosts from '@/components/Blog/RelatedPosts';
import type { Metadata } from 'next';
import { generateSchemas } from '@/lib/generateSchemas';

interface PageProps {
  params: {
    slug: string;
  };
}

// ✅ ISR: Revalidate every hour
export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Mirelle',
      description: 'The blog post you are looking for does not exist.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  // 🔄 UPDATED: Use canonical from post if exists, otherwise construct
  const canonicalUrl = post.canonical || `https://mirelleinspo.com/blog/${slug}`;
  const imageUrl = post.image ? `https://mirelleinspo.com${post.image}` : 'https://mirelleinspo.com/og-default.png';
  const imageAltText = post.imageAlt || post.title;
  
  // 🔄 UPDATED: Better keywords handling
  const keywords = post.tags?.length 
    ? post.tags.join(', ')
    : 'nail art, nail care, nail trends, manicure tips, nail design';
  
  return {
    title: `${post.title} | Mirelle`,
    description: post.excerpt || `Discover ${post.title} - expert nail tips, trends, and tutorials from Mirelle.`,
    keywords,
    authors: [{ name: post.author || 'Mirelle' }],
    creator: post.author || 'Mirelle',
    publisher: 'Mirelle',
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${post.title} | Mirelle`,
      description: post.excerpt || `Discover ${post.title} - expert nail inspiration from Mirelle.`,
      type: 'article',
      url: canonicalUrl,
      siteName: 'Mirelle',
      locale: 'en_US',
      images: [{
        url: imageUrl,
        width: post.imageWidth || 1200,
        height: post.imageHeight || 630,
        alt: imageAltText,
        type: 'image/jpeg',
      }],
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.updatedDate || post.date,
      authors: [post.author || 'Mirelle'],
      section: post.category || 'Nail Care',
      tags: post.tags || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Mirelle`,
      description: post.excerpt || `Discover ${post.title} - expert nail inspiration from Mirelle.`,
      images: [imageUrl],
      creator: '@mirelleinspo',
      site: '@mirelleinspo',
    },
    other: {
      'article:published_time': post.date,
      'article:modified_time': post.dateModified || post.updatedDate || post.date,
      'article:author': post.author || 'Mirelle',
      'article:section': post.category || 'Nail Care',
      'article:tag': post.tags?.join(', ') || '',
      // ✅ NEW: Add word count if available
      ...(post.wordCount && { 'article:word_count': post.wordCount.toString() }),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const post = await getBlogPost(slug);
  
  if (!post) notFound();

  // ✅ UPDATED: Generate schemas with all available data
  const schemas = generateSchemas({
    post,
    slug: params.slug,
    faqItems: post.faqItems,
    tutorialSteps: post.tutorialSteps,
    tutorialMetadata: post.tutorialMetadata,
    videoMetadata: post.videoMetadata,
    galleryImages: post.galleryImages,
    // Note: rating removed for safety - add only when you have real reviews
  });

  return (
    <>
      {/* Core Structured Data - Always Present */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.articleSchema) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.websiteSchema) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.organizationSchema) }} 
      />
      
      {/* Conditional Structured Data - Only When Data Exists */}
      {schemas.faqSchema && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }} 
        />
      )}
      {schemas.howToSchema && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.howToSchema) }} 
        />
      )}
      {schemas.videoSchema && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.videoSchema) }} 
        />
      )}
      {schemas.imageGallerySchema && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.imageGallerySchema) }} 
        />
      )}
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[{ label: 'Blog', href: '/blog' }]} 
        currentPage={post.title} 
      />
      
      {/* Main Blog Post Content */}
      <BlogPost post={post} />

      {/* Related Posts Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <RelatedPosts currentSlug={slug} />
        </div>
      </section>
    </>
  );
}
