export const dynamicParams = false;
export const revalidate = false;


import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostsByTag, getAllTags } from '@/lib/blog';
import BlogCard from '@/components/Blog/BlogCard';
import Breadcrumbs from '@/components/Breadcrumbs';

interface PageProps {
  params: {
    tag: string;
  };
  searchParams: {
    page?: string;
  };
}


// 🟢 CHANGED - Enable ISR with 1 hour revalidation
export const revalidate = 3600; // Revalidate every hour

// 🟢 CHANGED - Remove dynamic export (causing conflict with generateStaticParams)
// export const dynamic = 'force-static';

export async function generateStaticParams() {
  // const slugs = await getAllBlogSlugs();
  const tags = await getAllTags();
  return tags.map((slug) => ({
    slug: slug,
  }));
}


// ✅ NEW - Generate metadata for tag pages
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = params;
  const posts = await getPostsByTag(tag);
  const tags = await getAllTags();
  const tagData = tags.find(t => t.slug === tag);

  if (!tagData || posts.length === 0) {
    return {
      title: 'Tag Not Found - Mirelle',
      description: 'The tag you are looking for does not exist.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `https://mirelleinspo.com/blog/tag/${tag}`;
  const tagName = tagData.name;
  
  return {
    title: `${tagName} - Nail Care Articles | Mirelle`,
    description: `Discover ${posts.length} expert articles tagged with ${tagName}. Professional nail care tips, trends, and tutorials curated by Mirelle.`,
    keywords: `${tagName}, nail care, nail art, nail trends, ${tagName.toLowerCase()}, manicure, beauty blog`,
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
      title: `${tagName} - Nail Care Articles | Mirelle`,
      description: `Discover ${posts.length} expert articles tagged with ${tagName}`,
      type: 'website',
      url: canonicalUrl,
      siteName: 'Mirelle',
      locale: 'en_US',
      images: [{
        url: 'https://mirelleinspo.com/blog-tag.jpg',
        width: 1200,
        height: 630,
        alt: `${tagName} articles on Mirelle`,
        type: 'image/jpeg',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tagName} Articles | Mirelle`,
      description: `Discover expert ${tagName} articles`,
      images: ['https://mirelleinspo.com/blog-tag.jpg'],
      creator: '@mirelleinspo',
      site: '@mirelleinspo',
    },
  };
}

export default async function TagPage({ params, searchParams }: PageProps) {
  const { tag } = params;
  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 12;

  const allPosts = await getPostsByTag(tag);
  const tags = await getAllTags();
  const tagData = tags.find(t => t.slug === tag);

  if (!tagData || allPosts.length === 0) {
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
        name: `#${tagData.name}`,
        item: `https://mirelleinspo.com/blog/tag/${tag}`,
      },
    ],
  };

  // ✅ NEW - Collection page structured data
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${tagData.name} Articles`,
    description: `Collection of ${allPosts.length} articles tagged with ${tagData.name}`,
    url: `https://mirelleinspo.com/blog/tag/${tag}`,
    about: {
      '@type': 'Thing',
      name: tagData.name,
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
          currentPage={`#${tagData.name}`}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-200 to-pink-200 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white px-6 py-3 rounded-full mb-4 shadow-md">
                <span className="text-3xl font-bold text-gray-800">#{tagData.name}</span>
              </div>
              <p className="text-xl text-gray-600 mb-6">
                Explore articles tagged with <strong>{tagData.name}</strong>
              </p>
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
                        href={`/blog/tag/${tag}?page=${currentPage - 1}`}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        ← Previous
                      </a>
                    )}

                    {/* Page Numbers */}
                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <a
                          key={page}
                          href={`/blog/tag/${tag}?page=${page}`}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            page === currentPage
                              ? 'bg-purple-600 text-white'
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
                        href={`/blog/tag/${tag}?page=${currentPage + 1}`}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
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
                  No articles found with this tag
                </h3>
                <a
                  href="/blog"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  ← Back to all articles
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Popular Tags Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Explore Other Tags
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {tags
                .filter(t => t.slug !== tag)
                .slice(0, 20)
                .map((t) => (
                  <a
                    key={t.slug}
                    href={`/blog/tag/${t.slug}`}
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors border border-gray-200 hover:border-purple-300"
                  >
                    #{t.name} ({t.count})
                  </a>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
