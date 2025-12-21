import { Metadata } from 'next';
import { getPaginatedPosts, getAllCategories, getPostsByCategory } from '@/lib/blog';
import MainHeroSection from '@/components/Blog/MainHeroSection';
import MustReadSection from '@/components/Blog/MustReadSection';
import CarouselSection from '@/components/Blog/CarouselSection';
import CategorySection from '@/components/Blog/CategorySection';
import LatestStoriesSection from '@/components/Blog/LatestStoriesSection';
import NextPageButton from '@/components/Blog/NextPageButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Nail Care Blog - Expert Tips & Trends | Mirellè",
  description: 'Discover trending nail tutorials, seasonal trends, and professional nail care advice. Step-by-step guides and inspiration.',
  keywords: 'nail care blog, nail tutorials, chrome nails, nail art, seasonal nail trends, nail health tips',
};

interface PageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
  }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const selectedCategory = params.category;

  // Get all posts for first page, or filtered posts for category pages
  let posts;
  let totalPages = 1;

  if (selectedCategory) {
    // Category filtered page
    const allCategoryPosts = await getPostsByCategory(selectedCategory);
    const postsPerPage = 12;
    totalPages = Math.ceil(allCategoryPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    posts = allCategoryPosts.slice(startIndex, startIndex + postsPerPage);
  } else if (currentPage === 1) {
    // First page - show all sections
    const allPostsData = await getPaginatedPosts(1, 100);
    posts = allPostsData.posts;
  } else {
    // Subsequent pages - just show grid
    const paginatedData = await getPaginatedPosts(currentPage, 12);
    posts = paginatedData.posts;
    totalPages = paginatedData.totalPages;
  }

  const categories = await getAllCategories();

  // Get posts for each category (for first page only)
  const nailCarePosts = currentPage === 1 && !selectedCategory 
    ? await getPostsByCategory('nail-care') 
    : [];
  const tutorialPosts = currentPage === 1 && !selectedCategory 
    ? await getPostsByCategory('tutorials') 
    : [];
  const seasonalPosts = currentPage === 1 && !selectedCategory 
    ? await getPostsByCategory('seasonal-trends') 
    : [];

  // First page layout
  if (currentPage === 1 && !selectedCategory) {
    return (
      <div className="min-h-screen bg-[#f9fafb]">
        {/* Hero Section */}
        <section className="py-24 bg-[#f9fafb] border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h1 
              className="text-5xl md:text-6xl"
              style={{ fontFamily: 'Jeremiah, Georgia, serif' }}
            >
              Nails
            </h1>
          </div>
        </section>

        {/* Category Bar */}
        <section className="py-6 bg-white border-b border-gray-100 sticky top-0 z-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <Link
                href="/blog"
                className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
                style={{ fontFamily: 'Boriboon, system-ui, sans-serif' }}
              >
                View All
              </Link>
              {categories.slice(0, 5).map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog?category=${category.slug}`}
                  className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'Boriboon, system-ui, sans-serif' }}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Hero - 5 Handpicked Cards */}
        <MainHeroSection posts={posts.slice(0, 5)} />

        {/* Must Read - 3 Compact Cards */}
        <MustReadSection posts={posts.slice(5, 8)} />

        {/* Carousel */}
        <CarouselSection 
          title="THE MAKEUP OF A MARRIAGE: WEDDING BEAUTY RITUALS FROM AROUND THE WORLD"
          posts={posts.slice(8, 15)} 
        />

        {/* Nail Care Category */}
        {nailCarePosts.length > 0 && (
          <CategorySection 
            categoryName="NAIL CARE"
            posts={nailCarePosts} 
          />
        )}

        {/* Tutorial Category */}
        {tutorialPosts.length > 0 && (
          <CategorySection 
            categoryName="TUTORIAL"
            posts={tutorialPosts} 
          />
        )}

        {/* Seasonal Trends Category */}
        {seasonalPosts.length > 0 && (
          <CategorySection 
            categoryName="SEASONAL TRENDS"
            posts={seasonalPosts} 
          />
        )}

        {/* Latest Stories */}
        <LatestStoriesSection posts={posts.slice(15, 24)} />

        {/* Next Button */}
        {totalPages > 1 && (
          <NextPageButton href="/blog?page=2" />
        )}
      </div>
    );
  }

  // Subsequent pages or category filtered pages
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Category Name (if filtered) */}
      {selectedCategory && (
        <section className="py-16 bg-[#f9fafb] border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h1 
              className="text-4xl md:text-5xl uppercase"
              style={{ fontFamily: 'Jeremiah, Georgia, serif' }}
            >
              {selectedCategory.replace('-', ' ')}
            </h1>
          </div>
        </section>
      )}

      {/* Category Bar */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-0 z-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <Link
              href="/blog"
              className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
              style={{ fontFamily: 'Boriboon, system-ui, sans-serif' }}
            >
              View All
            </Link>
            {categories.slice(0, 5).map((category) => (
              <Link
                key={category.slug}
                href={`/blog?category=${category.slug}`}
                className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
                style={{ fontFamily: 'Boriboon, system-ui, sans-serif' }}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Stories Grid */}
      <LatestStoriesSection posts={posts} />

      {/* Next Button */}
      {currentPage < totalPages && (
        <NextPageButton 
          href={selectedCategory 
            ? `/blog?category=${selectedCategory}&page=${currentPage + 1}`
            : `/blog?page=${currentPage + 1}`
          } 
        />
      )}
    </div>
  );
}