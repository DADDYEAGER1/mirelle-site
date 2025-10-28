import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostsByCategory, getAllCategories } from '@/lib/blog';
import BlogCard from '@/components/Blog/BlogCard';
import Breadcrumbs from '@/components/Breadcrumbs';

interface PageProps {
  params: {
    category: string;
  };
  searchParams: {
    page?: string;
  };
}

// ✅ NEW - Generate static params for all categories
export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    category: category.name,
  }));
}

// ✅ NEW - Generate metadata for category pages
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = params;
  const posts = await getPostsByCategory(category);
  const categories = await getAllCategories();
  const categoryData = categories.find(cat => cat.slug === category);

  if (!categoryData || posts.length === 0) {
    return {
      title: 'Category Not Found - Mirelle',
      description: 'The category you are looking for does not exist.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `https://mirelleinspo.com/blog/category/${category}`;
  
  return {
    title: `${categoryData.name} - Nail Care Articles | Mirelle`,
    description: categoryData.description || `Explore ${posts.length} expert articles about ${categoryData.name}. Professional nail care tips, trends, and tutorials curated by Mirelle.`,
    keywords: `${categoryData.name}, nail care, nail art, nail trends, ${categoryData.name.toLowerCase()} tips, manicure, beauty blog`,
    authors: [{ name: 'Mirelle' }],
    creator: 'Mirelle',
    publisher: 'Mirelle',
    alternates: {
      canonical: canonicalUrl,
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
      title: `${categoryData.name} - Nail Care Articles | Mirelle`,
      description: categoryData.description || `Explore ${posts.length} expert articles about ${categoryData.name}`,
      type: 'website',
      url: canonicalUrl,
      siteName: 'Mirelle',
      locale: 'en_US',
      images: [{
        url: 'https://mirelleinspo.com/blog-category.jpg',
        width: 1200,
        height: 630,
        alt: `${categoryData.name} articles on Mirelle`,
        type: 'image/jpeg',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryData.name} Articles | Mirelle`,
      description: categoryData.description || `Explore expert ${categoryData.name} articles`,
      images: ['https://mirelleinspo.com/blog-category.jpg'],
      creator: '@mirelleinspo',
      site: '@mirelleinspo',
    },
  };
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { category } = params;
  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 12;

  // Get all posts in this category
  const allPosts = await getPostsByCategory(category);
  const categories = await getAllCategories();
  const categoryData = categories.find(cat => cat.slug === category);

  if (!categoryData || allPosts.length === 0) {
    notFound();
  }

  // Calculate pagination
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = allPosts.slice(startIndex, endIndex);

  // ✅ NEW - Breadcrumb structured data
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
        '@type': 'ListItem',
        position: 3,
        name: categoryData.name,
        item: `https://mirelleinspo.com/blog/category/${category}`,
      },
    ],
  };

  // ✅ NEW - Collection page structured data
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryData.name} Articles`,
    description: categoryData.description || `Collection of ${allPosts.length} articles about ${categoryData.name}`,
    url: `https://mirelleinspo.com/blog/category/${category}`,
    about: {
      '@type': 'Thing',
      name: categoryData.name,
    },
    numberOfItems: allPosts.length,
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="min-h-screen">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[{ label: 'Blog', href: '/blog' }]} 
          currentPage={categoryData.name}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-pink-200 to-purple-200 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {categoryData.name}
              </h1>
              {categoryData.description && (
                <p className="text-xl text-gray-600 mb-6">
                  {categoryData.description}
                </p>
              )}
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <span className="text-2xl">📝</span>
                <span className="font-semibold">
                  {allPosts.length} {allPosts.length === 1 ? 'Article' : 'Articles'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {paginatedPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {paginatedPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12">
                    {/* Previous Button */}
                    {currentPage > 1 && (
                      <a
                        href={`/blog/category/${category}?page=${currentPage - 1}`}
                        className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                      >
                        ← Previous
                      </a>
                    )}

                    {/* Page Numbers */}
                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <a
                          key={page}
                          href={`/blog/category/${category}?page=${page}`}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            page === currentPage
                              ? 'bg-pink-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {page}
                        </a>
                      ))}
                    </div>

                    {/* Next Button */}
                    {currentPage < totalPages && (
                      <a
                        href={`/blog/category/${category}?page=${currentPage + 1}`}
                        className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                      >
                        Next →
                      </a>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-gray-600 mb-4">
                  No articles found in this category
                </h3>
                <a
                  href="/blog"
                  className="text-pink-600 hover:text-pink-700 underline"
                >
                  ← Back to all articles
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Other Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Explore Other Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {categories
                .filter(cat => cat.slug !== category)
                .map((cat) => (
                  <a
                    key={cat.slug}
                    href={`/blog/category/${cat.slug}`}
                    className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-100 hover:border-pink-300"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">{cat.name}</h3>
                    <span className="text-sm text-gray-600">
                      {cat.count} {cat.count === 1 ? 'article' : 'articles'}
                    </span>
                  </a>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
