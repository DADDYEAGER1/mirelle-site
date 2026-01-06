import { Metadata } from 'next';
import { getAllBlogPosts, getAllCategories, getPostsByCategory, getAllClusters, getStandalonePosts } from '@/lib/blog';
import MainHeroSection from '@/components/Blog/MainHeroSection';
import MustReadSection from '@/components/Blog/MustReadSection';
import CarouselSection from '@/components/Blog/CarouselSection';
import LatestStoriesSection from '@/components/Blog/LatestStoriesSection';
import NextPageButton from '@/components/Blog/NextPageButton';
import BlogCategoryNav from '@/components/Blog/BlogCategoryNav';

export const metadata: Metadata = {
  title: "Nail Care Blog - Expert Tips & Trends | Mirellè",
  description: 'Discover trending nail tutorials, seasonal trends, and professional nail care advice. Step-by-step guides and inspiration.',
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

  const allClusters = await getAllClusters();
  
  // Manual hero selection
  const heroSlugs = [
    'christmas-nail-designs-2025',
    'halloween-nail-ideas-2025',
    'winter-nails-2025',
    'valentine-nails-2026',
    'new-year-nails-2025'
  ];
  
  const allPosts = await getAllBlogPosts();
  const heroPosts = heroSlugs
    .map(slug => allPosts.find(p => p.slug === slug))
    .filter(Boolean) as typeof allPosts;

  // Category filtered page
  if (selectedCategory) {
    const allCategoryPosts = await getPostsByCategory(selectedCategory);
    const postsPerPage = 12;
    const totalPages = Math.ceil(allCategoryPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const posts = allCategoryPosts.slice(startIndex, startIndex + postsPerPage);

    return (
      <div className="min-h-screen bg-[#f9fafb]">
        <section className="py-16 bg-[#f9fafb] border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h1 
              className="text-4xl md:text-5xl uppercase"
              style={{ fontFamily: 'Larken, Georgia, serif' }}
            >
              {selectedCategory.replace('-', ' ')}
            </h1>
          </div>
        </section>

        <BlogCategoryNav />

        <LatestStoriesSection posts={posts} />

        {currentPage < totalPages && (
          <NextPageButton href={`/blog?category=${selectedCategory}&page=${currentPage + 1}`} />
        )}
      </div>
    );
  }

  // PAGE 1
  if (currentPage === 1) {
    const standalonePosts = await getStandalonePosts();
    const mustReadPosts = standalonePosts.slice(0, 3);
    const latestPosts = standalonePosts.slice(3, 9);

    return (
      <div className="min-h-screen bg-[#f9fafb]">
        {/* Hero Section */}
        <section className="py-24 bg-[#f9fafb] border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h1 
              className="text-5xl md:text-6xl"
              style={{ fontFamily: 'Larken, serif' }}
            >
              Nails
            </h1>
          </div>
        </section>

        {/* Category Nav */}
        <BlogCategoryNav />

        {/* Hero Posts */}
        <MainHeroSection posts={heroPosts} />

        {/* First 2 Cluster Carousels */}
        {allClusters.slice(0, 2).map((cluster) => (
          <CarouselSection key={cluster.pillar.slug} clusterGroup={cluster} />
        ))}

        {/* Must Read */}
        <MustReadSection posts={mustReadPosts} />

        {/* Latest Stories */}
        <LatestStoriesSection posts={latestPosts} />

        {/* Next Button */}
        {(allClusters.length > 2 || standalonePosts.length > 9) && (
          <NextPageButton href="/blog?page=2" />
        )}
      </div>
    );
  }

  // PAGE 2+
  const standalonePosts = await getStandalonePosts();
  const remainingClusters = allClusters.slice(2);
  const clustersOnThisPage = remainingClusters.slice((currentPage - 2) * 2, (currentPage - 2) * 2 + 2);
  
  const postsPerPage = 12;
  const postsStartIndex = 9 + ((currentPage - 2) * postsPerPage);
  const postsOnThisPage = standalonePosts.slice(postsStartIndex, postsStartIndex + postsPerPage);
  
  const hasMoreClusters = remainingClusters.length > (currentPage - 1) * 2;
  const hasMorePosts = standalonePosts.length > postsStartIndex + postsPerPage;

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <section className="py-16 bg-[#f9fafb] border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 
            className="text-4xl md:text-5xl"
            style={{ fontFamily: 'Larken, Georgia, serif' }}
          >
            Nails
          </h1>
        </div>
      </section>

      <BlogCategoryNav />

      {/* Remaining Cluster Carousels */}
      {clustersOnThisPage.map((cluster) => (
        <CarouselSection key={cluster.pillar.slug} clusterGroup={cluster} />
      ))}

      {/* Grid of Posts */}
      {postsOnThisPage.length > 0 && (
        <LatestStoriesSection posts={postsOnThisPage} />
      )}

      {/* Next Button */}
      {(hasMoreClusters || hasMorePosts) && (
        <NextPageButton href={`/blog?page=${currentPage + 1}`} />
      )}
    </div>
  );
}