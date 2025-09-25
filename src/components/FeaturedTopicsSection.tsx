import Link from 'next/link';

const topics = [
  {
    title: "Nail Care Guide",
    description: "Essential tips for healthy, beautiful nails",
    image: "/nailcare.jpg",
    href: "/topics/nail-care-guide",
    color: "from-nude-400 to-nude-600",

  },
  {
    title: "For Skin Tones",
    description: "Find the perfect nail colors for your skin tone",
    image: "/skintone.jpg",
    href: "/topics/skin-tones",
    color: "from-blush-400 to-blush-600",

    trending: true
  },
  {
    title: "Nail Art Guides",
    description: "Step-by-step nail art tutorials and inspiration",
    image: "/nailart.jpg",
    href: "/topics/nail-art-guides",
    color: "from-purple-400 to-purple-600",

  },
  {
    title: "Seasonal Trends",
    description: "Stay updated with the latest seasonal nail trends",
    image: "/nailtrendsupdated.jpg",
    href: "/topics/seasonal-trends",
    color: "from-nude-500 to-blush-500",

    trending: true
  },
  {
    title: "At-Home Nail Hacks",
    description: "Professional techniques you can do at home",
    image: "/athomeupdated.jpg",
    href: "/topics/at-home-hacks",
    color: "from-blush-500 to-purple-500",

  },
  {
    title: "Modern Women Inspiration",
    description: "Empowering nail looks for the modern woman",
    image: "/modern.jpg",
    href: "/topics/modern-women",
    color: "from-purple-500 to-nude-500",
  }
];

export default function FeaturedTopicsSection() {
  return (
    <section id="featured-topics" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-800 mb-4">
            Featured Topics
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Discover everything you need to know about nails, from care basics to 
            advanced techniques and seasonal inspiration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Link
              key={index}
              href={topic.href}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] bg-white"
            >
              {/* Trending Badge */}
              {topic.trending && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    TRENDING
                  </span>
                </div>
              )}
              
              {/* Product Count Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium px-3 py-1 rounded-full shadow-lg">
                  {topic.productCount}
                </span>
              </div>
              
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60"></div>
                
                {/* Premium Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-purple-500/20 opacity-60"></div>
                
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm"></div>
                
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-white drop-shadow-lg">
                    {topic.title}
                  </h3>
                  <p className="text-white/95 mb-4 text-sm md:text-base drop-shadow-md leading-relaxed">
                    {topic.description}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold px-5 py-3 rounded-full hover:bg-white/30 transition-all duration-300 group-hover:translate-x-1 shadow-lg">
                    <span className="mr-2">Explore</span>
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-transparent pointer-events-none"></div>
            </Link>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-charcoal-600 mb-6">
            Ready to transform your nail game?
          </p>
          <Link 
            href="/topics" 
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">View All Topics</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
