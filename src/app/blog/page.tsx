import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/Blog/BlogCard';

// SEO-Optimized Metadata
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

// Category display configuration
const CATEGORIES = [
  {
    id: 'seasonal-and-holiday',
    title: '🎄 Seasonal & Holiday Nails',
    description: 'Trending nail designs for every season and celebration',
    icon: '🎄',
  },
  {
    id: 'inspiration-and-trends',
    title: '✨ Nail Inspiration & Trends',
    description: 'Latest nail art trends and creative design ideas',
    icon: '✨',
  },
  {
    id: 'special-occasions',
    title: '💍 Special Occasions',
    description: 'Perfect nails for weddings, dates, and celebrations',
    icon: '💍',
  },
  {
    id: 'tutorials-and-how-tos',
    title: '📚 Tutorials & How-Tos',
    description: 'Step-by-step guides to create stunning nails at home',
    icon: '📚',
  },
  {
    id: 'product-reviews',
    title: '🛍️ Product Reviews',
    description: 'Honest reviews of nail products and tools',
    icon: '🛍️',
  },
  {
    id: 'nail-care-essentials',
    title: '💅 Nail Care Essentials',
    description: 'Tips for healthy, strong, beautiful nails',
    icon: '💅',
  },
];

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  // Group posts by category
  const postsByCategory = posts.reduce((acc, post) => {
    const category = post.category || 'uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(post);
    return acc;
  }, {} as Record<string, typeof posts>);

  // JSON-LD Structured Data
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://mirelleinspo.com/blog#blog',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://mirelleinspo.com/blog',
    },
    name: 'Mirelle Nail Care Blog',
    description: 'Expert nail care tips, trends, and tutorials for beautiful, healthy nails',
    publisher: {
      '@type': 'Organization',
      '@id': 'https://mirelleinspo.com/#organization',
      name: 'Mirelle',
      url: 'https://mirelleinspo.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mirelleinspo.com/logo.png',
      },
    },
    blogPost: posts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://mirelleinspo.com/blog/${post.slug}`,
      datePublished: post.date,
      image: `https://mirelleinspo.com${post.image}`,
      author: {
        '@type': 'Person',
        name: post.author,
      },
    })),
    inLanguage: 'en-US',
  };

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
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
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
            
            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-2xl">📝</span>
                <span className="font-semibold">{posts.length}+ Articles</span>
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

        {/* Sectionalized Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {CATEGORIES.map((category) => {
              const categoryPosts = postsByCategory[category.id] || [];
              
              // Skip empty categories
              if (categoryPosts.length === 0) return null;

              return (
                <div key={category.id} className="mb-20 last:mb-0">
                  {/* Category Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{category.icon}</span>
                      <h2 className="text-3xl font-bold text-gray-800">
                        {category.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 text-lg ml-14">
                      {category.description}
                    </p>
                  </div>

                  {/* Category Posts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryPosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Empty State */}
            {posts.length === 0 && (
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
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Explore More Topics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {CATEGORIES.map((category) => (
                <div
                  key={category.id}
                  className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {category.title.replace(/^[^\s]+\s/, '')}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
