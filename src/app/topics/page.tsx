import Link from 'next/link';
import { Metadata } from 'next';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Complete 2026 Nail Guides: Chrome, Cat Claw, Square & More',
  description: 'Master 2026 trending techniques with expert guides: chrome application, cat claw shaping, square filing, milky pastels, seasonal trends. Step-by-step for every skill level!',
  keywords: 'nail care guides 2026, chrome nails tutorial, cat claw nail shaping, square nails how to, milky nail technique, 3D nail art guide, seasonal nail trends, DIY manicure tutorials, nail health tips, professional techniques, trending nail guides, at-home nail hacks, modern nail inspiration, skin tone matching nails',
  authors: [{ name: 'Mirellè Inspo Team' }],
  creator: 'Mirellè Inspo',
  publisher: 'Mirellè Inspo',
  alternates: {
    canonical: 'https://mirelleinspo.com/topics',
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
    title: 'Complete 2026 Nail Guides: Chrome, Cat Claw, Square & More',
    description: 'Expert guides for trending 2026 techniques: chrome finishes, cat claw shapes, square filing, milky pastels. Step-by-step for every level. Master trending nails!',
    type: 'website',
    url: 'https://mirelleinspo.com/topics',
    siteName: 'Mirellè Inspo',
    locale: 'en_US',
    images: [{
      url: 'https://mirelleinspo.com/featuretopicbanner-2026.jpg',
      width: 1200,
      height: 630,
      alt: 'Mirellè Inspo Complete Nail Guides for 2026 Trending Techniques',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 Nail Guides: Chrome, Cat Claw & Square (Expert Tips)',
    description: 'Master trending techniques with step-by-step guides. Every skill level. Pro secrets inside →',
    images: ['https://mirelleinspo.com/twitter-topics-2026.jpg'],
    creator: '@mirelleinspo',
    site: '@mirelleinspo',
  },
  other: {
    'pin:description': 'Complete 2026 nail guides! Master chrome, cat claw, square & milky techniques. Expert step-by-step tutorials for every skill level. Save these guides!',
    'pinterest-rich-pin': 'true',
  },
}

const topics = [
  {
    title: "Nail Care Guide",
    description: "Essential tips for healthy, beautiful nails - from basic care to advanced treatments and strengthening techniques",
    image: "/nailcare.jpg",
    href: "/topics/nail-care-guide",
    category: "NAIL HEALTH",
    icon: "💅"
  },
  {
    title: "For Skin Tones",
    description: "Find the perfect nail colors for your skin tone - expert color matching and personalized recommendations",
    image: "/skintone.jpg",
    href: "/topics/skin-tones",
    category: "COLOR GUIDE",
    icon: "🎨"
  },
  {
    title: "Nail Art Guides",
    description: "Step-by-step nail art tutorials and inspiration - from beginner techniques to advanced designs",
    image: "/nailart.jpg",
    href: "/topics/nail-art-guides",
    category: "TUTORIALS",
    icon: "✨"
  },
  {
    title: "Seasonal Trends",
    description: "Stay updated with the latest seasonal nail trends - spring florals, summer brights, fall warmth, and winter elegance",
    image: "/nailtrends.jpg",
    href: "/topics/seasonal-trends",
    category: "TRENDS",
    icon: "🍂"
  },
  {
    title: "At-Home Nail Hacks",
    description: "Professional techniques you can do at home - DIY manicures, cost-saving tips, and salon-quality results",
    image: "/athome.jpg",
    href: "/topics/at-home-hacks",
    category: "DIY TIPS",
    icon: "🏠"
  },
  {
    title: "Modern Women Inspiration",
    description: "Empowering nail looks for the modern woman - chic, confident styles for work, events, and everyday life",
    image: "/modern.jpg",
    href: "/topics/modern-women",
    category: "INSPIRATION",
    icon: "👑"
  }
];

export default function Topics() {
  // JSON-LD Structured Data
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://mirelleinspo.com/topics',
    name: 'Nail Care Topics & Expert Guides',
    description: 'Comprehensive nail care guides covering health, art, trends, and techniques',
    url: 'https://mirelleinspo.com/topics',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://mirelleinspo.com/#website',
    },
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
        name: 'Topics',
        item: 'https://mirelleinspo.com/topics',
      },
    ],
  };

  const topicListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Nail Care Topic Guides',
    description: 'Expert guides covering all aspects of nail care, art, and styling',
    itemListElement: topics.map((topic, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: topic.title,
      description: topic.description,
      url: `https://mirelleinspo.com${topic.href}`,
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(topicListSchema) }} />

      <div className="min-h-screen bg-gray-50">
        {/* Glassmorphism Hero Section */}
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
          {/* Animated gradient background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
          </div>

          {/* Glassmorphism card */}
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl shadow-2xl p-12 text-center">
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 mx-auto mb-8 rounded-full"></div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
                Featured Topics
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-2xl mx-auto">
                Everything You Need to Know About Nails
              </p>
              
              <div className="flex justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-200">
                  <span className="text-2xl">✨</span>
                  <span className="text-sm font-medium text-gray-700">Expert Guides</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200">
                  <span className="text-2xl">💅</span>
                  <span className="text-sm font-medium text-gray-700">Step-by-Step</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Topics Grid - Blog Style Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
                Explore Our Topics
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From nail care basics to advanced techniques, discover everything you need
                to know about beautiful, healthy nails.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {topics.map((topic, index) => (
                <Link
                  key={index}
                  href={topic.href}
                  className="group block bg-white"
                >
                  {/* Large Featured Image */}
                  <div className="relative w-full overflow-hidden mb-6">
                    <div className="relative w-full pb-[75%]">
                      <img
                        src={topic.image}
                        alt={topic.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content - Centered */}
                  <div className="space-y-3 text-center">
                    {/* Category Label */}
                    <div className="text-xs font-bold tracking-widest text-burgundy-800 uppercase">
                      {topic.category}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl md:text-2xl leading-tight text-gray-900 group-hover:text-gray-600 transition-colors duration-300 px-2">
                      {topic.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Content Grid - Horizontal on Mobile */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
                Explore More
              </h2>
              <p className="text-lg text-gray-600">
                Discover our curated collections
              </p>
            </div>

            {/* Grid - Same row on mobile */}
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {/* Blog Card */}
              <Link
                href="/blog"
                className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-pink-500 to-rose-600 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                  <div className="text-4xl md:text-6xl mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    📝
                  </div>
                  <h3 className="text-sm md:text-2xl font-bold text-center leading-tight">
                    Explore Nail Trends
                  </h3>
                </div>
              </Link>

              {/* Inspo Card */}
              <Link
                href="/inspo"
                className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-purple-500 to-indigo-600 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                  <div className="text-4xl md:text-6xl mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    ✨
                  </div>
                  <h3 className="text-sm md:text-2xl font-bold text-center leading-tight">
                    Get Inspired
                  </h3>
                </div>
              </Link>

              {/* Shop Card */}
              <Link
                href="/shop"
                className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-rose-500 to-pink-600 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                  <div className="text-4xl md:text-6xl mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    🛍️
                  </div>
                  <h3 className="text-sm md:text-2xl font-bold text-center leading-tight">
                    Shop Favorites
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
