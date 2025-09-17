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
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blush-200/20 via-transparent to-purple-200/20"></div>
                
                {/* Product count badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-charcoal-800 shadow-lg">
                  {category.productCount}
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif text-2xl font-bold mb-2 drop-shadow-lg">
                  {category.title}
                </h3>
                <p className="text-white/90 mb-4 drop-shadow-md">
                  {category.description}
                </p>
                <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 bg-white/25 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
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

      </div>
    </section>
  );
}
