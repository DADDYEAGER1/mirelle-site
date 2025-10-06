import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import BlogPost from '@/components/Blog/BlogPost';
import type { Metadata } from 'next';
import { generateSchemas } from '@/lib/generateSchemas';

interface PageProps {
  params: {
    slug: string;
  };
}

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
    };
  }

  return {
    title: `${post.title} | Mirelle`,
    description: post.excerpt || `Discover ${post.title} - expert nail tips, trends, and tutorials from Mirelle.`,
    keywords: post.tags?.join(', ') || 'nail art, nail care, nail trends',
    openGraph: {
      title: `${post.title} | Mirelle`,
      description: post.excerpt || `Discover ${post.title} - expert nail inspiration from Mirelle.`,
      type: 'article',
      url: `https://mirelleinspo.com/blog/${slug}`,
      images: post.image ? [{
        url: `https://mirelleinspo.com${post.image}`,
        width: 1200,
        height: 630,
        alt: post.title,
      }] : [],
      publishedTime: post.date,
      authors: [post.author || 'Mirelle'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Mirelle`,
      description: post.excerpt || `Discover ${post.title} - expert nail inspiration from Mirelle.`,
      images: post.image ? [`https://mirelleinspo.com${post.image}`] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const post = await getBlogPost(slug);
  
  if (!post) notFound();

  const schemas = generateSchemas({
    post,
    slug: params.slug,
    faqItems: post.faqItems,
    tutorialSteps: post.tutorialSteps,
    tutorialMetadata: post.tutorialMetadata,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }} />
      {schemas.faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }} />}
      {schemas.howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.howToSchema) }} />}
      <BlogPost post={post} />
    </>
  );
}
