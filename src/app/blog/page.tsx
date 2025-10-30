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
  };
}

export default async function BlogPage({ searchParams }: PageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const { posts, totalPages, totalPosts } = await getPaginatedPosts(currentPage, 12);
  
  const categories = await getAllCategories();
  const tags = await getAllTags();
  
  const baseUrl = 'https://mirelleinspo.com';

  const blogSchema = generateBlogSchema();
  const itemListSchema = generateBlogListSchema(posts);

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
                <span className="font-semibold">{totalPosts}+ Articles</span>
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
            <BlogSearch posts={posts} /> 
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar with Categories and Tags */}
              <aside className="lg:col-span-1 space-y-8">
                {/* Popular Tags */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 15).map((tag) => (
                      <Link
                        key={tag.slug}
                        href={`/blog/tag/${tag.slug}`}
                        className="text-sm bg-white text-gray-700 px-3 py-1 rounded-full hover:bg-pink-100 transition-colors"
                      >
                        {tag.name} ({tag.count})
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Blog Grid */}
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Latest Articles
                  </h2>
                  <p className="text-gray-600">
                    Page {currentPage} of {totalPages} • {totalPosts} total articles
                  </p>
                </div>

                {posts.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {posts.map((post, index) => (
                        <>
                          <BlogCard key={post.slug} post={post} />
                          
                          {/* Inline Newsletter CTA after 3rd card */}
                          {index === 2 && currentPage === 1 && (
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
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        baseUrl="/blog"
                      />
                    )}
                  </>
                ) : (
                  <div className="text-center py-16">
                    <h3 className="text-2xl font-bold text-gray-600 mb-4">
                      Amazing Content Coming Soon
                    </h3>
                    <p className="text-gray-500">
                      We're crafting expert nail care content for you. Check back soon!
                    </p>
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
