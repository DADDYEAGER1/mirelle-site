import Link from 'next/link';

const shopCategories = [
  {
    title: "Halloween Nails",
    description: "Spooky and stylish nail designs for Halloween",
    image: "halloweenbannerimg.jpg",
    href: "/shop/halloween",
    productCount: "15+ Products",
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Winter Nails",
    description: "Cozy and elegant winter nail inspiration",
    image: "/winternail.bg",
    href: "/shop/winter",
    productCount: "15+ Products",
    color: "from-blue-400 to-purple-500"
  },
  {
    title: "Trendy Nails",
    description: "Latest trending nail designs and colors",
    image: "/trendsection.jpg",
    href: "/shop/trendy",
    productCount: "15+ Products",
    color: "from-pink-400 to-blush-500"
  }
];

export default function Shop() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/shopnail.jpg"
            alt="Shop Mirelle's favorites"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Shop Mirellé's Favs
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Curated Nail Products & Tools
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Discover Mirellé's carefully curated collection of nail products, 
              tools, and accessories for every season and occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shopCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-80">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70`}></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                  
                  {/* Product count badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-charcoal-800">
                    {category.productCount}
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Shop Now
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

          {/* Featured Products Preview */}
          <div className="mt-20 bg-gradient-to-br from-blush-50 to-purple-50 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Why Choose Mirellé's Recommendations?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blush-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="font-semibold text-charcoal-800 mb-2">Expert Curation</h4>
                <p className="text-sm text-charcoal-600">
                  Every product is personally tested and approved by Mirellé
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-charcoal-800 mb-2">Quality Assured</h4>
                <p className="text-sm text-charcoal-600">
                  Only the highest quality products that deliver results
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-nude-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h4 className="font-semibold text-charcoal-800 mb-2">Trending Now</h4>
                <p className="text-sm text-charcoal-600">
                  Stay ahead with the latest and most popular nail products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
