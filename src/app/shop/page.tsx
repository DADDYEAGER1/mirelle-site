import Link from 'next/link';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';
useEffect(() => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mirelleinspo.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Shop",
        "item": "https://mirelleinspo.com/shop"
      }
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(script);

  return () => {
    document.head.removeChild(script);
  };
}, []);

// SEO Metadata
export const metadata: Metadata = {
  title: 'Shop Premium Nail Products - Press-On Nails, Polish & Tools | Mirelle',
  description: 'Shop 300+ curated premium nail products including press-on nails, nail polish, tools, and accessories. Expert-selected seasonal collections for Halloween, Christmas, Winter, and trendy designs.',
  keywords: 'buy press-on nails, nail polish shop, nail tools, seasonal nail designs, Christmas nails, Halloween nails, winter nails, trendy nail products, nail art supplies, professional nail products',
  authors: [{ name: 'Mirelle' }],
  creator: 'Mirelle',
  publisher: 'Mirelle',
  alternates: {
    canonical: 'https://mirelleinspo.com/shop',
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
    title: 'Shop Premium Nail Products | Mirelle',
    description: 'Explore 300+ expert-curated premium nail products. Seasonal collections, trendy designs, professional tools.',
    type: 'website',
    url: 'https://mirelleinspo.com/shop',
    siteName: 'Mirelle',
    locale: 'en_US',
    images: [{
      url: 'https://mirelleinspo.com/shopnail.jpg',
      width: 1200,
      height: 630,
      alt: 'Mirelle Premium Nail Products Shop',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop Premium Nail Products | Mirelle',
    description: '300+ curated nail products & seasonal collections',
    images: ['https://mirelleinspo.com/shopnail.jpg'],
    creator: '@mirelleinspo',
    site: '@mirelleinspo',
  },
};

const shopCategories = [
  {
    title: "Halloween Nails",
    description: "Spooky and stylish nail designs for Halloween parties and events. Shop 50+ premium press-on nails featuring pumpkins, ghosts, and festive designs",
    image: "halloweenbannerimg.jpg",
    href: "/shop/halloween",
    productCount: "50+ Premium Products",
    color: "from-orange-400/30 via-red-400/25 to-purple-500/30",
    badge: "Trending Now",
    badgeColor: "bg-orange-500",
    previewImages: [
      "https://m.media-amazon.com/images/I/71PUcXj5YYL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71sPuMmbetL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71-5-NHYeLL._SL1500_.jpg"
    ]
  },
  {
    title: "Winter Nails",
    description: "Cozy and elegant winter nail inspiration for the cold season. Discover snowflakes, icy blues, and festive winter designs perfect for the season",
    image: "/winternail.jpg",
    href: "/shop/winter",
    productCount: "50+ Premium Products",
    color: "from-blue-400/30 via-cyan-300/25 to-indigo-400/30",
    badge: "Seasonal Collection",
    badgeColor: "bg-blue-500",
    previewImages: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
      "https://m.media-amazon.com/images/I/71SqVKDpklL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71fyeVDIPgL._SX679_.jpg"
    ]
  },
  {
    title: "Trendy Nails",
    description: "Latest trending nail designs and colors that define fashion. Stay ahead with the hottest nail art trends, chrome finishes, and modern styles",
    image: "/trendsection.jpg",
    href: "/shop/trendy",
    productCount: "50+ Premium Products",
    color: "from-pink-400/30 via-rose-400/25 to-purple-400/30",
    badge: "Hot Right Now",
    badgeColor: "bg-pink-500",
    previewImages: [
      "https://m.media-amazon.com/images/I/51Uugs4lrFL._SY300_SX300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/716nixDcZuL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71FCxS2K4HL._SX679_.jpg"
    ]
  },
  {
    title: "Christmas Nails",
    description: "Festive nail collections for holiday celebrations and gatherings. Perfect for Christmas parties with Santa, reindeer, and snowflake designs",
    image: "/christmas-nails-hero.jpg",
    href: "/shop/christmas",
    productCount: "50+ Premium Products",
    color: "from-green-400/30 via-emerald-400/25 to-red-400/30",
    badge: "Holiday Special",
    badgeColor: "bg-green-500",
    previewImages: [
      "https://m.media-amazon.com/images/I/71EVLUzXlNL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71EaoVoCteL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71gyg085s7L._SX679_.jpg"
    ]
  },
  {
    title: "Fall Nails",
    description: "Warm autumn tones and cozy seasonal designs for perfect fall vibes. Featuring maple leaves, pumpkins, and rich harvest colors",
    image: "/fall-nails-hero.jpg",
    href: "/shop/fall",
    productCount: "50+ Premium Products",
    color: "from-amber-400/30 via-orange-400/25 to-red-400/30",
    badge: "Autumn Collection",
    badgeColor: "bg-amber-500",
    previewImages: [
      "https://m.media-amazon.com/images/I/61sxz4od20L._SY450_.jpg",
      "https://m.media-amazon.com/images/I/71cFPu6G4yL._SY450_.jpg",
      "https://m.media-amazon.com/images/I/71l0Zz5At7L._SY450_.jpg"
    ]
  },
  {
    title: "New Year Nails",
    description: "Sparkling celebrations and glamorous designs to ring in the new year. Glitter, gold, and elegant party-ready nail art",
    image: "/new-year-nails-hero.jpg",
    href: "/shop/new-year",
    productCount: "50+ Premium Products",
    color: "from-yellow-400/30 via-gold-400/25 to-purple-400/30",
    badge: "Limited Edition",
    badgeColor: "bg-yellow-500",
    previewImages: [
      "https://m.media-amazon.com/images/I/51ftUOKwjiL._SY300_SX300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/71-2wbBCGXL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71tUVR5v9xL._SX679_.jpg"
    ]
  }
];

export default function Shop() {
  // JSON-LD Structured Data
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://mirelleinspo.com/shop',
    name: 'Shop Premium Nail Products',
    description: '300+ curated premium nail products including press-on nails, polish, tools, and accessories',
    url: 'https://mirelleinspo.com/shop',
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
        name: 'Shop',
        item: 'https://mirelleinspo.com/shop',
      },
    ],
  };

  const collectionListSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Nail Product Collections',
    description: 'Browse our curated seasonal and trending nail product collections',
    url: 'https://mirelleinspo.com/shop',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: shopCategories.map((category, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: category.title,
        description: category.description,
        url: `https://mirelleinspo.com${category.href}`,
      })),
    },
  };

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionListSchema) }} />

      <div className="min-h-screen bg-gray-50">
        {/* Premium Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/shopnail.jpg"
              alt="Shop Mirelle's Premium Nail Collection - Press-On Nails, Polish & Professional Tools"
              className="w-full h-full object-cover scale-105 transition-transform duration-[10s] hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-300/30 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-300/25 rounded-full animate-pulse delay-2000"></div>
          </div>

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 border border-white/20">
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Shop Mirellé's
                <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Premium Collection
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-8 text-gray-200">
                Curated Luxury Nail Products & Professional Tools - 300+ Premium Items
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  300+ Premium Products
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Expert Curated
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Trending Collections
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Categories Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-block">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-800 mb-6 relative">
                  Shop by Collection
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                </h2>
              </div>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed mt-8">
                Discover Mirellé's carefully curated collections of premium nail products, 
                professional tools, and seasonal accessories for every occasion and style.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {shopCategories.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 bg-white"
                >
                  <div className="relative h-96">
                    <img
                      src={category.image}
                      alt={`${category.title} - ${category.description}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} group-hover:opacity-40 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent group-hover:from-white/90 transition-all duration-300"></div>
                    <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white/40 via-transparent to-white/20"></div>
                    
                    <div className="absolute top-6 left-6">
                      <div className={`${category.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm bg-opacity-90 shadow-lg`}>
                        {category.badge}
                      </div>
                    </div>

                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-charcoal-800 shadow-lg border border-white/50">
                      {category.productCount}
                    </div>

                    <div className="absolute bottom-24 right-6 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      {category.previewImages.map((img, idx) => (
                        <div key={idx} className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white/70 backdrop-blur-sm shadow-lg">
                          <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-t-2xl border-t border-white/20"></div>
                    
                    <div className="relative z-10">
                      <h3 className="font-serif text-3xl font-bold mb-3 text-charcoal-800 group-hover:text-purple-700 transition-colors duration-300 drop-shadow-sm">
                        {category.title}
                      </h3>
                      <p className="text-charcoal-700 mb-6 leading-relaxed drop-shadow-sm">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-charcoal-700 font-bold text-lg group-hover:translate-x-2 transition-transform duration-300">
                          <span className="mr-2">Explore Collection</span>
                          <svg 
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                        
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 text-right">
                          <div className="text-sm text-charcoal-600 font-medium">New Arrivals</div>
                          <div className="text-xs text-charcoal-500">Updated Weekly</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-200/30 via-pink-200/20 to-transparent pointer-events-none rounded-3xl"></div>
                </Link>
              ))}
            </div>

            {/* Premium Features Section */}
            <div className="mt-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 rounded-3xl p-12 border border-gray-100 shadow-xl">
              <h3 className="font-serif text-3xl font-bold text-charcoal-800 mb-12 text-center">
                Why Choose Mirellé's Premium Collections?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                      <span className="text-3xl">✨</span>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <h4 className="font-bold text-xl text-charcoal-800 mb-4">Expert Curation</h4>
                  <p className="text-charcoal-600 leading-relaxed">
                    Every product is personally tested and approved by Mirellé's team of professional nail artists
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <h4 className="font-bold text-xl text-charcoal-800 mb-4">Quality Guaranteed</h4>
                  <p className="text-charcoal-600 leading-relaxed">
                    Only the highest quality products that deliver professional salon results at home
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                      <span className="text-3xl">💎</span>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <h4 className="font-bold text-xl text-charcoal-800 mb-4">Always Trending</h4>
                  <p className="text-charcoal-600 leading-relaxed">
                    Stay ahead of trends with the latest and most popular nail products and techniques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
