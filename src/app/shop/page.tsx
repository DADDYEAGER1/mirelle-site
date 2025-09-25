import Link from 'next/link';

const shopCategories = [
  {
    title: "Halloween Nails",
    description: "Spooky and stylish nail designs for Halloween parties and events",
    image: "halloweenbannerimg.jpg",
    href: "/shop/halloween",
    productCount: "50+ Premium Products",
    color: "from-orange-500 via-red-500 to-purple-600",
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
    description: "Cozy and elegant winter nail inspiration for the cold season",
    image: "/winternail.jpg",
    href: "/shop/winter",
    productCount: "50+ Premium Products",
    color: "from-blue-400 via-cyan-300 to-indigo-500",
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
    description: "Latest trending nail designs and colors that define fashion",
    image: "/trendsection.jpg",
    href: "/shop/trendy",
    productCount: "50+ Premium Products",
    color: "from-pink-400 via-rose-400 to-purple-500",
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
    description: "Festive nail collections for holiday celebrations and gatherings",
    image: "/christmas-nails-hero.jpg",
    href: "/shop/christmas",
    productCount: "50+ Premium Products",
    color: "from-green-500 via-emerald-400 to-red-500",
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
    description: "Warm autumn tones and cozy seasonal designs for perfect fall vibes",
    image: "/fall-nails-hero.jpg",
    href: "/shop/fall",
    productCount: "50+ Premium Products",
    color: "from-amber-500 via-orange-400 to-red-400",
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
    description: "Sparkling celebrations and glamorous designs to ring in the new year",
    image: "/new-year-nails-hero.jpg",
    href: "/shop/new-year",
    productCount: "50+ Premium Products",
    color: "from-yellow-400 via-gold-400 to-purple-500",
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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Premium Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/shopnail.jpg"
            alt="Shop Mirelle's Premium Collection"
            className="w-full h-full object-cover scale-105 transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-300/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-300/25 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Shop Mirellé's
              <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Premium Collection
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-200">
              Curated Luxury Nail Products & Professional Tools
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
                className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2"
              >
                <div className="relative h-96">
                  {/* Main Image */}
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-75 group-hover:opacity-85 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/90 transition-all duration-300"></div>
                  
                  {/* Glass Morphism Badge */}
                  <div className="absolute top-6 left-6">
                    <div className={`${category.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm bg-opacity-90 shadow-lg`}>
                      {category.badge}
                    </div>
                  </div>

                  {/* Product Count Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-charcoal-800 shadow-lg">
                    {category.productCount}
                  </div>

                  {/* Preview Thumbnails */}
                  <div className="absolute bottom-20 right-6 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    {category.previewImages.map((img, idx) => (
                      <div key={idx} className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/50 backdrop-blur-sm">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-serif text-3xl font-bold mb-3 group-hover:text-yellow-200 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Enhanced CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-white font-bold text-lg group-hover:translate-x-2 transition-transform duration-300">
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
                    
                    {/* Hover Stats */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 text-right">
                      <div className="text-sm text-white/80">New Arrivals</div>
                      <div className="text-xs text-white/60">Updated Weekly</div>
                    </div>
                  </div>
                </div>
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

            {/* Trust Indicators */}
            {/* <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-gray-200">

            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
