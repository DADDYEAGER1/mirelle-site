// src/app/posts/page.tsx
import { getAllCategories, getPaginatedPosts, getPostsByCategory } from '@/lib/posts';
import PostHero from '@/components/posts/PostHero';
import CategoryNav from '@/components/posts/CategoryNav';
import PostGrid from '@/components/posts/PostGrid';
import Pagination from '@/components/posts/Pagination';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inspo Posts | Mirellé',
  description: 'Curated beauty and nail art inspiration from Mirellé.',
  openGraph: {
    title: 'Inspo Posts | Mirellé',
    description: 'Curated beauty and nail art inspiration.',
    type: 'website',
  },
};

interface PostsPageProps {
  searchParams: {
    page?: string;
    category?: string;
  };
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const page = parseInt(searchParams.page || '1', 10);
  const categorySlug = searchParams.category;

  // Get all categories for nav
  const categories = await getAllCategories();

  // Get posts (filtered or paginated)
  let posts;
  let paginationData;

  if (categorySlug) {
    // Get category posts
    const categoryPosts = await getPostsByCategory(categorySlug);
    const totalPosts = categoryPosts.length;
    const perPage = 12;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    posts = categoryPosts.slice(startIndex, endIndex);
    paginationData = {
      currentPage: page,
      totalPages: Math.ceil(totalPosts / perPage),
      hasNextPage: endIndex < totalPosts,
      hasPreviousPage: page > 1,
    };
  } else {
    // Get all posts paginated
    const data = await getPaginatedPosts(page, 12);
    posts = data.posts;
    paginationData = {
      currentPage: data.currentPage,
      totalPages: data.totalPages,
      hasNextPage: data.hasNextPage,
      hasPreviousPage: data.hasPreviousPage,
    };
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <PostHero />

      {/* Main Content - Full Width (No Ad Space) */}
      <div className="w-full px-[6px] md:px-[12px] py-8 md:py-12 lg:py-16">
        {/* Category Navigation */}
        <CategoryNav categories={categories} />

        {/* Post Grid */}
        <PostGrid posts={posts} />

        {/* Pagination */}
        <Pagination
          currentPage={paginationData.currentPage}
          totalPages={paginationData.totalPages}
          hasNextPage={paginationData.hasNextPage}
          hasPreviousPage={paginationData.hasPreviousPage}
          category={categorySlug}
        />
      </div>
    </div>
  );
}