import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/Blog/BlogCard';

// SEO-Optimized Metadata (PRESERVED - NO CHANGES)
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

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  // JSON-LD Structured Data (PRESERVED - NO CHANGES)
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
      {/* Structured Data (PRESERVED - NO CHANGES) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-background-cream">
        {/* Hero Section - Premium Editorial Style */}
        <section className="relative bg-white border-b border-border-light overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-light/20 via-transparent to-accent/10" />
          
          <div className="container-premium relative section-padding">
            <div className="text-center max-w-4xl mx-auto">
              {/* Eyebrow Text */}
              <div className="eyebrow-text mb-6 animate-fade-in">
                Curated Beauty Editorial
              </div>
              
              {/* Main Headline */}
              <h1 className="font-display text-display-lg mb-6 text-balance animate-slide-up">
                Nail Care Blog - Expert Tips & Trends
              </h1>
              
              {/* Accent Divider */}
              <div className="divider-accent mx-auto animate-scale-in" />
              
              {/* Description */}
              <p className="text-body-lg text-text-secondary max-w-2xl mx-auto mb-16 animate-fade-in">
                Discover professional nail care advice, seasonal trends, and step-by-step tutorials for beautiful, healthy nails
              </p>
              
              {/* Trust Signals - Editorial Style */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 animate-slide-up">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-1">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="meta-text">{posts.length}+ Articles</span>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-1">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <span className="meta-text">Expert Advice</span>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-1">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="meta-text">Updated Weekly</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid Section - Magazine Layout */}
        <section className="section-padding">
          <div className="container-premium">

            {/* Blog Posts Grid */}
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {posts.map((post, index) => (
                  <div 
                    key={post.slug}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="font-display text-heading-lg mb-4 text-text-primary">
                    Amazing Content Coming Soon
                  </h3>
                  <p className="text-body text-text-secondary">
                    We're crafting expert nail care content for you. Check back soon!
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Categories Section - Editorial Grid */}
        <section className="py-20 bg-white border-t border-border-light">
          <div className="container-premium">
            <div className="text-center mb-16">
              <div className="eyebrow-text mb-4">Explore by Category</div>
              <h2 className="font-display text-heading-xl text-text-primary">
                Popular Topics
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {[
                { name: 'Nail Care', icon: '💅', description: 'Essential tips' },
                { name: 'Nail Art', icon: '🎨', description: 'Creative designs' },
                { name: 'Seasonal Trends', icon: '🍂', description: 'What\'s trending' },
                { name: 'Tutorials', icon: '📚', description: 'Step-by-step guides' },
              ].map((topic) => (
                <div
                  key={topic.name}
                  className="group bg-background-cream p-8 text-center hover-lift border border-border-light transition-all duration-400 hover:border-accent hover:shadow-elevated"
                >
                  <div className="text-5xl mb-4 transition-transform duration-400 group-hover:scale-110">
                    {topic.icon}
                  </div>
                  <h3 className="font-display text-heading-md mb-2 text-text-primary">
                    {topic.name}
                  </h3>
                  <p className="text-body-sm text-text-muted">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA - Premium Editorial */}
        <section className="section-padding bg-primary text-white">
          <div className="container-premium">
            <div className="max-w-2xl mx-auto text-center">
              <div className="eyebrow-text mb-4 !text-accent-light">
                Stay Inspired
              </div>
              <h2 className="font-display text-heading-xl mb-4 !text-white">
                Never Miss a Trend
              </h2>
              <p className="text-body-lg mb-8 text-white/80">
                Get expert nail care tips and exclusive content delivered to your inbox weekly
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-3 bg-white text-primary rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-accent text-white rounded-full hover:bg-accent-light transition-colors duration-300 font-medium uppercase tracking-wider text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
