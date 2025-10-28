import { Metadata } from 'next';
import { getPostsByCategory, getAllCategories } from '@/lib/blog';
import BlogCard from '@/components/Blog/BlogCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = params;
  const posts = await getPostsByCategory(category);
  
  if (posts.length === 0) {
    return {
      title: 'Category Not Found - Mirelle',
      robots: { index: false, follow: false },
    };
  }

  const categoryName = posts[0].category || category;
  const canonicalUrl = `https://mirelleinspo.com/blog/category/${category}`;

  return {
    title: `${categoryName} - Nail Care Articles | Mirelle`,
    description: `Explore ${posts.length} expert articles about ${categoryName}. Professional tips, trends, and tutorials for beautiful nails.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${categoryName} Articles | Mirelle`,
      description: `${posts.length} expert articles about ${categoryName}`,
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = params;
  const posts = await getPostsByCategory(category);
  const allCategories = await getAllCategories();
  
  if (posts.length === 0) {
    notFound();
  }

  const categoryName = posts[0].category || category;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mirelleinspo.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://mirelleinspo.com/blog',
      },
      {
        '@type': '
