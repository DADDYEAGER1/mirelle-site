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
  
  try {
    const post = await getBlogPost(slug);
    
    if (!post) {
      notFound();
    }

    return <BlogPost post={post} />;
  } catch (error) {
    notFound();
  }
}
