import { Metadata } from 'next';
import { getPaginatedPosts, getAllCategories, getAllTags } from '@/lib/blog';
import BlogCard from '@/components/Blog/BlogCard';
import BlogSearch from '@/components/Blog/BlogSearch';
import Pagination from '@/components/Blog/Pagination';
import { generateBlogSchema, generateBlogListSchema } from '@/lib/generateSchemas';
import Link from 'next/link';

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
  
  // ✅ NEW: Get categories and tags for sidebar/filters
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

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-pink-200 to-purple-200 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Nail Care Blog - Expert Tips & Trends
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover professional nail care advice, seasonal trends, and step-by-step tutorials for beautiful, healthy nails
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-2xl">📝</span>
                <span className="font-semibold">{totalPosts}+ Articles</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-2xl">✨</span>
                <span className="font-semibold">Expert Advice</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-2xl">📆</span>
                <span className="font-semibold">Updated Weekly</span>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ NEW: Search Section */}
        <section className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <BlogSearch allPosts={posts} />
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* ✅ NEW: Sidebar with Categories and Tags */}
              <aside className="lg:col-span-1 space-y-8">
                {/* Categories */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.slice(0, 8).map((category) => (
                      <Link
                        key={category.slug}
                        href={`/blog/category/${category.slug}`}
                        className="flex items-center justify-between p-2 rounded hover:bg-white transition-colors"
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
                      {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                      ))}
                    </div>

                    {/* ✅ NEW: Pagination Component */}
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

        {/* Categories Section - Simplified */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Explore by Topic
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.slice(0, 8).map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-2">💅</div>
                  <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} articles</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
