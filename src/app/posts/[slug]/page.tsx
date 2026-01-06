// src/app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getPost, getAllPostSlugs } from '@/lib/posts';
import Breadcrumbs from '@/components/Breadcrumbs';
import ImageCarousel from '@/components/Blog/ImageCarousel';
import ProductGrid from '@/components/Blog/ProductGrid';
import InlineNewsletter from '@/components/Blog/InlineNewsletter';
import AboutEEAT from '@/components/Blog/AboutEEAT';
import FinalNewsletter from '@/components/Blog/FinalNewsletter';
import ReadMoreSection from '@/components/posts/ReadMoreSection';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 86400;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = post.canonical || `https://mirelleinspo.com/posts/${slug}`;
  const imageUrl = post.image.startsWith('http') 
    ? post.image 
    : `https://mirelleinspo.com${post.image}`;

  return {
    title: `${post.title} | Mirellé`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: canonicalUrl,
      siteName: 'Mirellé',
      images: [{
        url: imageUrl,
        width: post.imageWidth || 1200,
        height: post.imageHeight || 1200,
        alt: post.imageAlt || post.title,
      }],
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: [post.author],
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  // Split content for component placement
  const contentSections = post.content.split(/\n\n/);
  const totalSections = contentSections.length;

  const section1End = Math.floor(totalSections * 0.2);
  const section2End = Math.floor(totalSections * 0.4);
  const section3End = Math.floor(totalSections * 0.6);

  const firstSection = contentSections.slice(0, section1End).join('\n\n');
  const middleSection = contentSections.slice(section1End, section2End).join('\n\n');
  const moreContent = contentSections.slice(section2End, section3End).join('\n\n');
  const remainingContent = contentSections.slice(section3End).join('\n\n');

  // Generate schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image.startsWith('http') ? post.image : `https://mirelleinspo.com${post.image}`,
    "datePublished": post.date,
    "dateModified": post.dateModified || post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mirellé Inspo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mirelleinspo.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mirelleinspo.com/posts/${slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mirelleinspo.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Posts",
        "item": "https://mirelleinspo.com/posts"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title
      }
    ]
  };

  return (
    <>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-background">
        {/* Main Content Container with Proper Padding */}
        <div className="px-[6px] md:px-3 lg:px-[12px] py-8 md:py-12">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs
              items={[{ label: 'Posts', href: '/posts' }]}
              currentPage={post.title}
              includeSchema={false}
            />
          </div>

          {/* Category */}
          <p className="text-sm uppercase tracking-wide text-gray-700 mb-4">
            {post.category}
          </p>

          {/* Title */}
          <h1 className="text-[36px] md:text-[42px] font-serif leading-tight mb-4">
            {post.title}
          </h1>

          {/* Byline */}
          <div className="text-sm text-gray-700 mb-8">
            <p className="uppercase tracking-wide mb-1">BY {post.author}</p>
            <time dateTime={post.date} className="text-gray-600">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          </div>

          {/* Hero Image - Left Aligned, Full Width */}
          <div className="w-full mb-8">
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: firstSection }} />

            {post.carouselImages && post.carouselImages.length > 0 && (
              <ImageCarousel images={post.carouselImages} />
            )}

            <div dangerouslySetInnerHTML={{ __html: middleSection }} />

            {post.products && post.products.length > 0 && (
              <ProductGrid products={post.products} layout="dual" />
            )}

            <div dangerouslySetInnerHTML={{ __html: moreContent }} />

            <InlineNewsletter />

            <div dangerouslySetInnerHTML={{ __html: remainingContent }} />
          </article>
        </div>

        {/* Full Width Sections with Brand Background */}
        <FinalNewsletter />
        <AboutEEAT />
        <ReadMoreSection currentSlug={post.slug} />
      </div>
    </>
  );
}