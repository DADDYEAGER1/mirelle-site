import Link from 'next/link';

const shopCategories = [
  {
    title: "Halloween Nails",
    description: "Spooky and stylish nail designs for Halloween",
    image: "/halloweenbannerimg.jpg",
    href: "/shop/halloween",
    productCount: "15+ Products",
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Winter Nails",
    description: "Cozy and elegant winter nail inspiration",
    image: "/wintersection.jpg",
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
  },
  {
    title: "Christmas Nails",
    description: "Festive holiday nail art for Christmas cheer",
    image: "/christmassection.jpg",
    href: "/shop/christmas",
    productCount: "15+ Products",
    color: "from-red-500 to-green-500"
  },
  {
    title: "Fall Nails",
    description: "Warm autumn colors and cozy fall vibes",
    image: "/fallsection.jpg",
    href: "/shop/fall",
    productCount: "15+ Products",
    color: "from-amber-400 to-orange-600"
  },
  {
    title: "New Year Nails",
    description: "Glamorous designs to sparkle into the new year",
    image: "/newyearsection.jpeg",
    href: "/shop/new-year",
    productCount: "15+ Products",
    color: "from-gold-400 to-yellow-500"
  }
];

export default function ShopSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-charcoal-50 to-nude-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-800 mb-4">
            Shop Mirellé's Favs
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Discover Mirellé's curated collection of nail products, tools, and 
            accessories for every season and occasion.
          </p>
        </div>
        
        {/* Updated grid layout for 6 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopCategories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2"
            >
              <div className="relative h-80">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Enhanced gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent"></div>
                <div className={`absolute inset-0 bg-gradient-to-tr ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Floating animation elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-10 right-10 w-4 h-4 bg-white/20 rounded-full blur-sm animate-pulse"></div>
                  <div className="absolute bottom-20 left-10 w-6 h-6 bg-white/15 rounded-full blur-sm animate-bounce" style={{ animationDelay: '1s' }}></div>
                </div>
                
                {/* Product count badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-semibold text-charcoal-800 shadow-lg border border-white/20">
                  {category.productCount}
                </div>

                {/* Trending badge for select categories */}
                {(index === 2 || index === 3) && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    TRENDING
                  </div>
                )}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="backdrop-blur-sm bg-black/20 rounded-2xl p-4 border border-white/10">
                  <h3 className="font-serif text-2xl font-bold mb-2 drop-shadow-lg">
                    {category.title}
                  </h3>
                  <p className="text-white/90 mb-4 drop-shadow-md text-sm">
                    {category.description}
                  </p>
                  <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-all duration-300 bg-white/25 backdrop-blur-sm px-4 py-2 rounded-full w-fit hover:bg-white/35">
                    <span>Shop Now</span>
                    <svg 
                      className="ml-2 w-4 h-4 transform group-hover:scale-110 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action Section */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span className="mr-3">✨</span>
            <span>Explore All Collections</span>
            <span className="ml-3">✨</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
