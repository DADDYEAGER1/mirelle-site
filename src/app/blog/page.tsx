import { Metadata } from 'next';
import { getPaginatedPosts, getAllCategories, getAllTags } from '@/lib/blog';
import BlogCard from '@/components/Blog/BlogCard';
import BlogSearch from '@/components/Blog/BlogSearch';
import Pagination from '@/components/Blog/Pagination';
import { generateBlogSchema, generateBlogListSchema } from '@/lib/generateSchemas';
import Link from 'next/link';
import StickyBottomNav from '@/components/ui/StickyBottomNav';
import GlassCard from '@/components/ui/GlassCard';
import { Fragment } from 'react';
import InlineNewsletterForm from '@/components/Blog/InlineNewsletterForm';


export const metadata: Metadata = {
  title: "100+ Nail Secrets Pros Don't Want You to Know (2025-2026)",
  description: 'Discover trending nail tutorials for 2026: chrome application, cat claw shaping, milky pastel perfection. Step-by-step guides, pro secrets, seasonal trends. 50K+ learning weekly!',
  keywords: 'nail care blog 2026, nail tutorials 2026, chrome nails tutorial, cat claw nails how to, square nails guide, milky nails DIY, 3D nail art tutorial, seasonal nail trends, nail health tips, press-on application guide, professional nail secrets, trending nail techniques, DIY manicure 2026, nail inspiration blog',
  authors: [{ name: 'Mirellè Inspo Team' }],
  creator: 'Mirellè Inspo',
  publisher: 'Mirellè Inspo',
  alternates: {
    canonical: 'https://mirelleinspo.com/blog',
  },
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
    title: "100+ Nail Secrets Pros Don't Want You to Know (2025-2026)",
    description: 'Master chrome, cat claw & square nails with our trending tutorials. Step-by-step guides, pro secrets, seasonal trends. 50K+ nail lovers learning weekly!',
    type: 'website',
    url: 'https://mirelleinspo.com/blog',
    siteName: 'Mirellè Inspo',
    locale: 'en_US',
    images: [{
      url: 'https://mirelleinspo.com/blog-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Mirellè Inspo Blog - 100+ expert nail tutorials for chrome, cat claw and trending 2026 designs',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '100+ Nail Secrets 50K+ Are Using (Pros Hate This)',
    description: 'Chrome, cat claw, square nail tutorials. Pro secrets, trending guides. 50K+ learning →',
    images: ['https://mirelleinspo.com/blog-hero.jpg'],
    creator: '@mirelleinspo',
    site: '@mirelleinspo',
  },
  other: {
    'pin:description': 'Browse 100+ expert nail care articles, seasonal trends, and tutorials. Get inspired with the latest nail art ideas and professional tips.',
    'pin:media': 'https://mirelleinspo.com/blog-hero.jpg',
    'pinterest-rich-pin': 'true',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': 'Mirelle Nail Care Blog - 100+ Expert Articles & Tutorials',
    'og:image:type': 'image/jpeg',
    'og:type': 'blog',
    'article:publisher': 'https://www.pinterest.com/mirelle_inspo',
    'pinterest:category': 'Beauty',
    'pinterest:board_suggestion': 'Nail Care Tips',
    'og:updated_time': new Date().toISOString(),
    'twitter:label1': 'Articles',
    'twitter:data1': '100+ posts',
    'twitter:label2': 'Topics',
    'twitter:data2': 'Nail Art, Trends, Tutorials',
  },
};

// ✅ FIX #2: Changed searchParams to Promise type for Next.js 15
interface PageProps {
  searchParams: Promise<{
    page?: string;
    tag?: string;
    category?: string;
    search?: string;
  }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
  // ✅ FIX #2: Added await for searchParams
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const selectedTag = params.tag;
  const selectedCategory = params.category;
  const searchQuery = params.search;

  // Get all posts
  const { posts: allPosts, totalPages: originalTotalPages, totalPosts: originalTotalPosts } = await getPaginatedPosts(1, 1000);
  
  // Filter posts based on search params
  let filteredPosts = allPosts;

  if (selectedTag) {
    filteredPosts = filteredPosts.filter(post => 
      post.tags?.some(tag => tag === selectedTag)
    );
  }

  if (selectedCategory) {
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
    const urlParams = new URLSearchParams();
    if (page > 1) urlParams.set('page', page.toString());
    if (selectedTag) urlParams.set('tag', selectedTag);
    if (selectedCategory) urlParams.set('category', selectedCategory);
    if (searchQuery) urlParams.set('search', searchQuery);
    return `/blog${urlParams.toString() ? '?' + urlParams.toString() : ''}`;
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


      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-background py-24 border-b border-editorial-stone">
          <div className="container mx-auto px-4">
            <div className="w-16 h-0.5 bg-accent mx-auto mb-8"></div>
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-serif text-display-lg md:text-display-xl text-text-primary mb-6">
                Nail Care Blog - Expert Tips & Trends
              </h1>
              <p className="text-body-lg text-editorial-slate max-w-2xl mx-auto leading-relaxed">
                Discover professional nail care advice, seasonal trends, and step-by-step tutorials for beautiful, healthy nails
              </p>
              
              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📝</span>
                  <span className="font-medium text-text-primary text-body">{originalTotalPosts}+ Articles</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✨</span>
                  <span className="font-medium text-text-primary text-body">Expert Advice</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📆</span>
                  <span className="font-medium text-text-primary text-body">Updated Weekly</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
        </section>

        {/* Search Section */}
        <section className="bg-white py-8 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <svg 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="search"
                  placeholder="Search articles by title, tags, category..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-editorial-accent focus:border-transparent text-body"
                />
              </div>
              <p className="text-caption text-gray-500 mt-2 flex items-center gap-1">
                <span>💡</span>
                Tip: Use the search bar to find articles or click tags/categories to filter
              </p>
            </div>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                      {paginatedPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                      ))}
                    </div>

                    {/* ✅ FIX #3: Pagination now uses client-side navigation */}
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
                              <Fragment key={page}>
                                {index > 0 && array[index - 1] !== page - 1 && (
                                  <span className="px-3 py-2 text-gray-500">...</span>
                                )}
                                <Link
                                  href={buildPaginationUrl(page)}
                                  className={`px-4 py-2 rounded transition-colors ${
                                    currentPage === page
                                      ? 'bg-pink-500 text-white font-semibold'
                                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                  }`}
                                >
                                  {page}
                                </Link>
                              </Fragment>
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
