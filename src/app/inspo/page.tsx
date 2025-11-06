// src/app/inspo/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllDesignSlugs, getDesignData, getDesignsByCategory } from '@/lib/inspo';

export const metadata: Metadata = {
  title: '1,000+ Nail Designs 2025 - French, Chrome, Ombre & More',
  description: 'Get 1,000+ nail designs with step-by-step tutorials. French tips, chrome, ombre, glitter - every style, every skill level. New designs added weekly. Save yours now!',
  keywords: [
    'nail design inspiration 2025',
    'nail ideas 2025',
    'trending nail designs',
    'french tip nails',
    'ombre nail ideas',
    'chrome nails tutorial',
    'minimalist nail art',
    'glitter nails designs',
    'summer nail inspiration',
    'DIY nail tutorials',
    'easy nail designs',
    'seasonal nail ideas'
  ],
  authors: [{ name: "Mirelle" }],
  creator: "Mirelle",
  publisher: "Mirelle",
  alternates: {
    canonical: 'https://mirelleinspo.com/inspo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: '1,000+ Nail Designs 2025 - French, Chrome, Ombre & More',
    description: 'Browse 1,000+ nail designs with step-by-step tutorials. French tips, chrome, ombre, glitter - every style, skill level. New designs weekly. Save yours!',
    url: 'https://mirelleinspo.com/inspo',
    siteName: 'Mirelle',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://mirelleinspo.com/images/inspo-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Gallery of 1000+ trending nail designs 2025 including French tips chrome ombre glitter and minimalist styles with tutorials',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '1,000+ Nail Designs & Tutorials (Updated Weekly)',
    description: 'French tips, chrome, ombre, glitter - every style covered. Step-by-step tutorials. New designs weekly!',
    images: ['https://mirelleinspo.com/images/inspo-hero.jpg'],
    creator: "@mirelleinspo",
    site: "@mirelleinspo",
  },
  other: {
    "pin:description": 'Get 1,000+ nail designs with step-by-step tutorials. French tips, chrome, ombre, glitter - every style, every skill level. New designs added weekly!',
    "pin:media": 'https://mirelleinspo.com/images/inspo-hero.jpg',
    "pinterest-rich-pin": "true",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": 'Gallery of 1000+ trending nail designs 2025 including French tips chrome ombre glitter and minimalist styles with tutorials',
    "og:image:type": "image/jpeg",
    "article:publisher": "https://www.pinterest.com/mirelle_inspo",
    "pinterest:category": "nail design inspiration",
    "pinterest:board_suggestion": "Nail Art Ideas",
    "og:see_also": "https://mirelleinspo.com/inspo",
  },
};

export default async function InspoPage() {
  const designSlugs = getAllDesignSlugs();
  const designs = designSlugs.map(slug => getDesignData(slug)).filter(Boolean);
  const designsByCategory = getDesignsByCategory();

  // Category display order
  const categoryOrder = ['Classic', 'Trendy', 'Seasonal'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Nail Design Inspiration
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Explore 1000+ stunning nail designs from classic elegance to trending styles. 
            Find your perfect manicure inspiration for every occasion.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 border border-white/30">
              ✨ Step-by-step tutorials
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 border border-white/30">
              💅 All skill levels
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 border border-white/30">
              📸 Save your favorites
            </span>
          </div>
        </div>
      </section>

      {/* Categories by Type */}
      {categoryOrder.map(categoryName => {
        const categoryDesigns = designsByCategory[categoryName];
        if (!categoryDesigns || categoryDesigns.length === 0) return null;

        return (
          <section key={categoryName} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {categoryName} Designs
              </h2>
              <p className="text-gray-600 text-lg">
                {categoryName === 'Classic' && 'Timeless nail designs that never go out of style'}
                {categoryName === 'Trendy' && 'Latest viral nail trends and modern styles'}
                {categoryName === 'Seasonal' && 'Perfect designs for every season and occasion'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryDesigns.map((design) => {
                if (!design) return null;
                
                return (
                  <Link
                    key={design.slug}
                    href={`/inspo/${design.slug}`}
                    className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Design Image */}
                    <div className="relative h-80 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${design.heroImage})` }}
                      />
                      {/* Premium gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-500" />
                      
                      {/* Category badge */}
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border border-white/40 px-3 py-1 text-white text-xs font-semibold uppercase tracking-wider">
                        {design.category}
                      </div>

                      {/* Emoji */}
                      <div className="absolute top-4 left-4 text-2xl">
                        {design.emojis[0]}
                      </div>
                      
                      {/* Design Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                          {design.displayName}
                        </h3>
                        <p className="text-white/90 mb-4 text-sm">
                          {design.description}
                        </p>
                        <div className="inline-flex items-center text-white font-semibold border-b-2 border-transparent group-hover:border-purple-300 transition-all">
                          View Gallery
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Features Section */}
      <section className="bg-white py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Mirelle for Nail Inspiration?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1000+ Designs</h3>
              <p className="text-gray-600">Constantly updated with latest trends and timeless classics</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Step-by-Step Guides</h3>
              <p className="text-gray-600">Detailed tutorials for recreating every design</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">All Skill Levels</h3>
              <p className="text-gray-600">From beginner-friendly to advanced nail art</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
