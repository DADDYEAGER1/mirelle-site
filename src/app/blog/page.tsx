import { Metadata } from 'next';
import { getPaginatedPosts, getAllCategories, getAllTags } from '@/lib/blog';
import BlogCard from '@/components/Blog/BlogCard';
import BlogSearch from '@/components/Blog/BlogSearch';
import Pagination from '@/components/Blog/Pagination';
import { generateBlogSchema, generateBlogListSchema } from '@/lib/generateSchemas';
import Link from 'next/link';
import StickyBottomNav from '@/components/ui/StickyBottomNav';
import GlassCard from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'Nail Care Blog - Expert Tips, Trends & Tutorials | Mirelle',
  description: 'Discover 100+ expert nail care articles, seasonal trends, step-by-step tutorials, and professional manicure tips. Your ultimate guide to beautiful, healthy nails.',
  keywords: 'nail care blog, nail tips 2025, nail trends, nail art tutorials, manicure tips, nail health, professional nail care, seasonal nail designs, nail inspiration, beauty blog',
  authors: [{ name: 'Mirelle' }],
  creator: 'Mirelle',
  publisher: 'Mirelle',
  alternates: {
    canonical: 'https://mirelleinspo.com/blog',
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
    title: 'Nail Care Blog - Expert Tips, Trends & Tutorials | Mirelle',
    description: 'Discover expert nail care articles, seasonal trends, and step-by-step tutorials. Your ultimate guide to beautiful, healthy nails.',
    type: 'website',
    url: 'https://mirelleinspo.com/blog',
    siteName: 'Mirelle',
    locale: 'en_US',
    images: [{
      url: 'https://mirelleinspo.com/blog-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Mirelle Nail Care Blog',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nail Care Blog | Mirelle',
    description: 'Expert nail care articles, trends & tutorials',
    images: ['https://mirelleinspo.com/blog-hero.jpg'],
    creator: '@mirelleinspo',
    site: '@mirelleinspo',
  },
};

interface PageProps {
  searchParams: {
    page?: string;
    tag?: string;
    category?: string;
    search?: string;
  };
}

export default async function BlogPage({ searchParams }: PageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const selectedTag = searchParams.tag;
  const selectedCategory = searchParams.category;
  const searchQuery = searchParams.search;

  // Get all posts
  const { posts: allPosts, totalPages: originalTotalPages, totalPosts: originalTotalPosts } = await getPaginatedPosts(1, 1000);
  
  // Filter posts based on search params
  let filteredPosts = allPosts;

  if (selectedTag) {
    // Tags in markdown are already slugified (e.g., "october-2025")
    filteredPosts = filteredPosts.filter(post => 
      post.tags?.some(tag => tag === selectedTag)
    );
  }

  if (selectedCategory) {
    // Slugify category for comparison
    const slugifyCategory = (cat: string) => cat.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    filteredPosts = filteredPosts.filter(post => 
      slugifyCategory(post.category || '') === selectedCategory
    );
  }

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredPosts = filteredPosts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags?.some(tag => tag.toLowerCase().includes(query)) ||
      post.category?.toLowerCase().includes(query)
    );
  }

  // Paginate filtered posts
  const postsPerPage = 12;
  const totalFilteredPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalFilteredPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  const categories = await getAllCategories();
  const tags = await getAllTags();
  
  const baseUrl = 'https://mirelleinspo.com';

  const blogSchema = generateBlogSchema();
  const itemListSchema = generateBlogListSchema(paginatedPosts);

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
    ],
  };

  // Build query params for pagination
  const buildPaginationUrl = (page: number) => {
    const params = new URLSearchParams();
    if (page > 1) params.set('page', page.toString());
    if (selectedTag) params.set('tag', selectedTag);
    if (selectedCategory) params.set('category', selectedCategory);
    if (searchQuery) params.set('search', searchQuery);
    return `/blog${params.toString() ? '?' + params.toString() : ''}`;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen thumb-zone">
        {/* Hero Section with Animated Gradient */}
        <section className="relative bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300/30 via-transparent to-purple-300/30 animate-pulse"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
              Nail Care Blog - Expert Tips & Trends
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              Discover professional nail care advice, seasonal trends, and step-by-step tutorials for beautiful, healthy nails
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-700 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <span className="text-2xl">📝</span>
                <span className="font-semibold">{originalTotalPosts}+ Articles</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <span className="text-2xl">✨</span>
                <span className="font-semibold">Expert Advice</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 animate-fade-in" style={{ animationDelay: '400ms' }}>
                <span className="text-2xl">📆</span>
                <span className="font-semibold">Updated Weekly</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <BlogSearch posts={allPosts} /> 
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar with Categories and Tags */}
              <aside className="lg:col-span-1 space-y-8">
                {/* Categories */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.slice(0, 8).map((category) => (
                      <Link
                        key={category.slug}
                        href={`/blog?category=${category.slug}`}
                        className={`flex items-center justify-between p-2 rounded transition-colors ${
                          selectedCategory === category.slug 
                            ? 'bg-pink-100 font-semibold' 
                            : 'hover:bg-white'
                        }`}
                      >
                        <span className="text-gray-700">{category.name}</span>
                        <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 15).map((tag) => (
                      <Link
                        key={tag.slug}
                        href={`/blog?tag=${tag.slug}`}
                        className={`text-sm px-3 py-1 rounded-full transition-colors ${
                          selectedTag === tag.slug
                            ? 'bg-pink-500 text-white font-semibold'
                            : 'bg-white text-gray-700 hover:bg-pink-100'
                        }`}
                      >
                        {tag.name} ({tag.count})
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Blog Grid */}
              <div className="lg:col-span-3">
                {/* Active Filters */}
                {(selectedTag || selectedCategory || searchQuery) && (
                  <div className="mb-6 flex items-center gap-2 flex-wrap bg-gray-50 p-4 rounded-lg">
                    <span className="text-gray-600 font-semibold">Active filters:</span>
                    {selectedTag && (
                      <Link
                        href={`/blog${selectedCategory ? `?category=${selectedCategory}` : ''}${searchQuery ? `${selectedCategory ? '&' : '?'}search=${searchQuery}` : ''}`}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm hover:bg-pink-200 transition-colors"
                      >
                        Tag: {selectedTag}
                        <span className="text-lg leading-none">×</span>
                      </Link>
                    )}
                    {selectedCategory && (
                      <Link
                        href={`/blog${selectedTag ? `?tag=${selectedTag}` : ''}${searchQuery ? `${selectedTag ? '&' : '?'}search=${searchQuery}` : ''}`}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200 transition-colors"
                      >
                        Category: {selectedCategory}
                        <span className="text-lg leading-none">×</span>
                      </Link>
                    )}
                    {searchQuery && (
                      <Link
                        href={`/blog${selectedTag ? `?tag=${selectedTag}` : ''}${selectedCategory ? `${selectedTag ? '&' : '?'}category=${selectedCategory}` : ''}`}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
                      >
                        Search: {searchQuery}
                        <span className="text-lg leading-none">×</span>
                      </Link>
                    )}
                    <Link
                      href="/blog"
                      className="text-sm text-gray-600 hover:text-gray-900 underline ml-2"
                    >
                      Clear all filters
                    </Link>
                  </div>
                )}

                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {selectedTag || selectedCategory || searchQuery ? 'Filtered Articles' : 'Latest Articles'}
                  </h2>
                  <p className="text-gray-600">
                    {totalFilteredPosts > 0 ? (
                      <>
                        Showing {startIndex + 1}-{Math.min(endIndex, totalFilteredPosts)} of {totalFilteredPosts} article{totalFilteredPosts !== 1 ? 's' : ''}
                        {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
                      </>
                    ) : (
                      'No articles found'
                    )}
                  </p>
                </div>

                {paginatedPosts.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {paginatedPosts.map((post, index) => (
                        <>
                          <BlogCard key={post.slug} post={post} />
                          
                          {/* Inline Newsletter CTA after 3rd card */}
                          {index === 2 && currentPage === 1 && !selectedTag && !selectedCategory && !searchQuery && (
                            <GlassCard className="flex flex-col justify-center items-center text-center col-span-1 md:col-span-2 xl:col-span-3 my-4 bg-gradient-to-br from-pink-50 to-purple-50">
                              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                💅 Get Weekly Nail Inspo
                              </h3>
                              <p className="text-gray-600 mb-4 max-w-md">
                                Join 10,000+ nail enthusiasts! Get trending designs, expert tips, and exclusive finds delivered weekly.
                              </p>
                              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                                <input
                                  type="email"
                                  placeholder="Your email address"
                                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                                />
                                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                  Subscribe
                                </button>
                              </div>
                              <p className="text-xs text-gray-500 mt-3">
                                ✓ Trending designs ✓ Expert tips ✓ No spam ever
                              </p>
                            </GlassCard>
                          )}
                        </>
                      ))}
                    </div>

                    {/* Pagination Component */}
                    {totalPages > 1 && (
                      <div className="mt-8">
                        <div className="flex justify-center gap-2">
                          {currentPage > 1 && (
                            <Link
                              href={buildPaginationUrl(currentPage - 1)}
                              className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                            >
                              Previous
                            </Link>
                          )}
                          
                          {Array.from({ length: totalPages }, (_, i) => i + 1)
                            .filter(page => {
                              return page === 1 || 
                                     page === totalPages || 
                                     (page >= currentPage - 1 && page <= currentPage + 1);
                            })
                            .map((page, index, array) => (
                              <>
                                {index > 0 && array[index - 1] !== page - 1 && (
                                  <span key={`ellipsis-${page}`} className="px-3 py-2 text-gray-500">...</span>
                                )}
                                <Link
                                  key={page}
                                  href={buildPaginationUrl(page)}
                                  className={`px-4 py-2 rounded transition-colors ${
                                    currentPage === page
                                      ? 'bg-pink-500 text-white font-semibold'
                                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                  }`}
                                >
                                  {page}
                                </Link>
                              </>
                            ))}
                          
                          {currentPage < totalPages && (
                            <Link
                              href={buildPaginationUrl(currentPage + 1)}
                              className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                            >
                              Next
                            </Link>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-16">
                    <h3 className="text-2xl font-bold text-gray-600 mb-4">
                      {selectedTag || selectedCategory || searchQuery ? 'No Articles Found' : 'Amazing Content Coming Soon'}
                    </h3>
                    <p className="text-gray-500 mb-6">
                      {selectedTag || selectedCategory || searchQuery 
                        ? 'Try adjusting your filters or search terms.' 
                        : "We're crafting expert nail care content for you. Check back soon!"}
                    </p>
                    {(selectedTag || selectedCategory || searchQuery) && (
                      <Link
                        href="/blog"
                        className="inline-block px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                      >
                        View All Articles
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Bottom Nav for Mobile */}
        <StickyBottomNav />
      </div>
    </>
  );
}
