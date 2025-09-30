import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import BlogPost from '@/components/Blog/BlogPost';

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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const post = await getBlogPost(slug);
  
  if (!post) notFound();

  // JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://www.mirelleinspo.com${post.image}`,
    "datePublished": post.date,
    "author": { "@type": "Person", "name": post.author }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogPost post={post} />
    </>
  );
}
