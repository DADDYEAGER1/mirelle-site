import Link from 'next/link';
import { Metadata } from 'next';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Nail Care Topics & Guides - Expert Tips for Every Style | Mirelle',
  description: 'Explore comprehensive nail care guides covering nail health, art techniques, skin tone matching, seasonal trends, at-home hacks, and modern inspiration. Expert advice for beautiful nails.',
  keywords: 'nail care guide, nail art tutorials, nails for skin tones, seasonal nail trends, at-home nail hacks, DIY manicure, nail health tips, modern nail designs, nail care basics, professional nail techniques',
  authors: [{ name: 'Mirelle' }],
  creator: 'Mirelle',
  publisher: 'Mirelle',
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
    title: 'Nail Care Topics & Guides | Mirelle',
    description: 'Expert nail care guides covering health, art, trends, and techniques for every style.',
    type: 'website',
    url: 'https://mirelleinspo.com/topics',
    siteName: 'Mirelle',
    locale: 'en_US',
    images: [{
      url: 'https://mirelleinspo.com/featuretopicbanner.jpg',
      width: 1200,
      height: 630,
      alt: 'Mirelle Featured Nail Care Topics',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nail Care Topics & Guides | Mirelle',
    description: 'Expert guides for nail health, art & trends',
    images: ['https://mirelleinspo.com/featuretopicbanner.jpg'],
    creator: '@mirelleinspo',
    site: '@mirelleinspo',
  },
};

const topics = [
  {
    title: "Nail Care Guide",
    description: "Essential tips for healthy, beautiful nails - from basic care to advanced treatments and strengthening techniques",
    image: "/nailcare.jpg",
    href: "/topics/nail-care-guide",
    color: "from-nude-400 to-nude-600",
    icon: "💅"
  },
  {
    title: "For Skin Tones",
    description: "Find the perfect nail colors for your skin tone - expert color matching and personalized recommendations",
    image: "/skintone.jpg",
    href: "/topics/skin-tones",
    color: "from-blush-400 to-blush-600",
    icon: "🎨"
  },
  {
    title: "Nail Art Guides",
    description: "Step-by-step nail art tutorials and inspiration - from beginner techniques to advanced designs",
    image: "/nailart.jpg",
    href: "/topics/nail-art-guides",
    color: "from-purple-400 to-purple-600",
    icon: "✨"
  },
  {
    title: "Seasonal Trends",
    description: "Stay updated with the latest seasonal nail trends - spring florals, summer brights, fall warmth, and winter elegance",
    image: "/nailtrends.jpg",
    href: "/topics/seasonal-trends",
    color: "from-nude-500 to-blush-500",
    icon: "🍂"
  },
  {
    title: "At-Home Nail Hacks",
    description: "Professional techniques you can do at home - DIY manicures, cost-saving tips, and salon-quality results",
    image: "/athome.jpg",
    href: "/topics/at-home-hacks",
    color: "from-blush-500 to-purple-500",
    icon: "🏠"
  },
  {
    title: "Modern Women Inspiration",
    description: "Empowering nail looks for the modern woman - chic, confident styles for work, events, and everyday life",
    image: "/modern.jpg",
    href: "/topics/modern-women",
    color: "from-purple-500 to-nude-500",
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

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/featuretopicbanner.jpg"
              alt="Featured Nail Care Topics and Expert Guides - Nail Health, Art Techniques & Trends"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30"></div>
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Featured Topics
            </h1>
            <p className="text-xl md:text-2xl font-light drop-shadow-md">
              Everything You Need to Know About Nails
            </p>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
                Explore Our Topics
              </h2>
              <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
                From nail care basics to advanced techniques, discover everything you need
                to know about beautiful, healthy nails.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topics.map((topic, index) => (
                <Link
                  key={index}
                  href={topic.href}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative h-64">
                    <img
                      src={topic.image}
                      alt={`${topic.title} - ${topic.description}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${topic.color} opacity-30`}></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {topic.icon}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-white/90 mb-4">
                      {topic.description}
                    </p>
                    <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Explore
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2 text-gray-800">What topics do you cover?</h3>
                <p className="text-gray-600">We cover comprehensive nail care guides including nail health basics, art techniques, color matching for different skin tones, seasonal trends, DIY home manicures, and modern nail inspiration.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Are these guides suitable for beginners?</h3>
                <p className="text-gray-600">Yes! Our guides range from beginner-friendly basics to advanced techniques, with step-by-step instructions and professional tips for every skill level.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2 text-gray-800">How often are topics updated?</h3>
                <p className="text-gray-600">We regularly update our guides with the latest trends, techniques, and seasonal inspiration to keep you informed about current nail care practices.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
