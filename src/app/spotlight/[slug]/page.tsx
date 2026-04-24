import { notFound } from 'next/navigation';
import { getSpotlightPost, getAllSpotlightSlugs } from '@/lib/spotlight';
import type { Metadata } from 'next';
import { generateSchemas } from '@/lib/generateSchemas';

import SplitLeftTemplate from './templates/SplitLeftTemplate';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 86400;

export async function generateStaticParams() {
  const slugs = await getAllSpotlightSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getSpotlightPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found - Mirellé',
      description: 'The spotlight post you are looking for does not exist.',
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = post.canonical || `https://mirelleinspo.com/spotlight/${slug}`;
  const imageUrl = post.image?.startsWith('http') ? post.image : `https://mirelleinspo.com${post.image}`;
  const imageAltText = post.imageAlt || post.title;

  return {
    title: `${post.title} | Mirellé`,
    description: post.excerpt || `Discover ${post.title} - expert nail tips, trends, and tutorials from Mirellé.`,
    authors: [{ name: post.author || 'Mirellé' }],
    creator: post.author || 'Mirellé',
    publisher: 'Mirellé',
    alternates: { canonical: canonicalUrl },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${post.title} | Mirellé`,
      description: post.excerpt || `Discover ${post.title} - expert nail inspiration from Mirellé.`,
      type: 'article',
      url: canonicalUrl,
      siteName: 'Mirellé',
      locale: 'en_US',
      images: [{
        url: imageUrl,
        width: post.imageWidth || 1200,
        height: post.imageHeight || 630,
        alt: imageAltText,
        type: 'image/jpeg',
      }],
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author || 'Mirellé'],
      section: post.category || 'Nail Care',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Mirellé`,
      description: post.excerpt || `Discover ${post.title} - expert nail inspiration from Mirellé.`,
      images: [imageUrl],
      creator: '@mirelleinspo',
      site: '@mirelleinspo',
    },
    other: {
      'article:published_time': post.date,
      'article:modified_time': post.date,
      'article:author': post.author || 'Mirellé',
      'article:section': post.category || 'Nail Care',
      'og:image:width': (post.imageWidth || 1200).toString(),
      'og:image:height': (post.imageHeight || 630).toString(),
      'og:image:alt': imageAltText,
      'og:image:type': 'image/jpeg',
      ...(post.readTime && { 'twitter:label1': 'Reading time', 'twitter:data1': post.readTime }),
    },
  };
}

export default async function SpotlightPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getSpotlightPost(slug);

  if (!post) notFound();

  const schemas = generateSchemas({
    post,
    slug: slug,
  });

  const postWithCoverImage = {
    ...post,
    coverImage: post.image || '/images/default-blog.jpg',
  };

  return (
    <>
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

      <SplitLeftTemplate post={postWithCoverImage} />
    </>
  );
}