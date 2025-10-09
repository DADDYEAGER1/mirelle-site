import Link from 'next/link';

const shopCategories = [
  {
    title: "Halloween Nails",
    description: "Spooky and stylish nail designs for Halloween",
    image: "/halloweenbannerimg.jpg",
    href: "/shop/halloween",
    productCount: "50+ Products",
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Winter Nails",
    description: "Cozy and elegant winter nail inspiration",
    image: "/wintersection.jpg",
    href: "/shop/winter",
    productCount: "50+ Products",
    color: "from-blue-400 to-purple-500"
  },
  {
    title: "Trendy Nails",
    description: "Latest trending nail designs and colors",
    image: "/trendsection.jpg",
    href: "/shop/trendy",
    productCount: "50+ Products",
    color: "from-pink-400 to-blush-500",
    trending: true
  },
  {
    title: "Christmas Nails",
    description: "Festive holiday nail art for Christmas cheer",
    image: "/christmassection.jpg",
    href: "/shop/christmas",
    productCount: "50+ Products",
    color: "from-red-500 to-green-500",
    trending: true
  },
  {
    title: "Fall Nails",
    description: "Warm autumn colors and cozy fall vibes",
    image: "/fallsection.jpg",
    href: "/shop/fall",
    productCount: "50+ Products",
    color: "from-amber-400 to-orange-600"
  },
  {
    title: "New Year Nails",
    description: "Glamorous designs to sparkle into the new year",
    image: "/newyearsection.jpeg",
    href: "/shop/new-year",
    productCount: "50+ Products",
    color: "from-gold-400 to-yellow-500"
  }
];

export default function ShopSection() {
  return (
    <section className="py-26 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-18">
          <p className="text-overline text-editorial-accent uppercase tracking-widest mb-4 font-semibold">
            Shop
          </p>
          <h2 className="font-display text-display-md text-editorial-charcoal mb-6 tracking-magazine">
            Shop Mirellé's Favs
          </h2>
          <p className="text-body-lg text-editorial-slate leading-relaxed font-light">
            Discover Mirellé's curated collection of nail products, tools, and 
            accessories for every season and occasion.
          </p>
        </div>
        
        {/* Shop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopCategories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group relative overflow-hidden bg-white shadow-editorial hover:shadow-editorial-lg transition-all duration-500"
            >
              <div className="relative h-96">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Editorial gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>
                
                {/* Product count badge - top right */}
                <div className="absolute top-6 right-6 border border-white/40 backdrop-blur-sm bg-white/20 px-4 py-2 text-caption uppercase tracking-wide font-semibold text-white">
                  {category.productCount}
                </div>

                {/* Trending badge - minimal */}
                {category.trending && (
                  <div className="absolute top-6 left-6 border border-editorial-accent text-editorial-accent backdrop-blur-sm bg-white/80 px-3 py-1 text-caption uppercase tracking-widest font-semibold">
                    Trending
                  </div>
                )}
              </div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="font-display text-headline-lg mb-3 text-white tracking-magazine">
                  {category.title}
                </h3>
                <p className="text-white/90 mb-6 text-body font-sans font-light leading-relaxed">
                  {category.description}
                </p>
                <div className="inline-flex items-center text-white border-b border-white/50 pb-1 text-body-sm font-sans uppercase tracking-wide font-medium group-hover:border-editorial-accent group-hover:text-editorial-accent transition-all duration-300">
                  <span className="mr-2">Shop Now</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
