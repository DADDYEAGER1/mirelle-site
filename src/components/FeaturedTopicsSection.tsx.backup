import Link from 'next/link';
import AnimatedCard from '@/components/ui/AnimatedCard';

const topics = [
  {
    title: "Nail Care Guide",
    description: "Essential tips for healthy, beautiful nails",
    image: "/nailcare.jpg",
    href: "/topics/nail-care-guide",
    color: "from-nude-400 to-nude-600"
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
    color: "from-purple-400 to-purple-600"
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
    color: "from-blush-500 to-purple-500"
  },
  {
    title: "Modern Women Inspiration",
    description: "Empowering nail looks for the modern woman",
    image: "/modern.jpg",
    href: "/topics/modern-women",
    color: "from-purple-500 to-nude-500"
  }
];

export default function FeaturedTopicsSection() {
  return (
    <section id="featured-topics" className="py-26 bg-editorial-sand">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-18">
          <p className="text-overline text-editorial-accent uppercase tracking-widest mb-4 font-semibold">
            Explore
          </p>
          <h2 className="font-display text-display-md text-editorial-charcoal mb-6 tracking-magazine">
            Featured Topics
          </h2>
          <p className="text-body-lg text-editorial-slate leading-relaxed font-light">
            Discover everything you need to know about nails, from care basics to 
            advanced techniques and seasonal inspiration.
          </p>
        </div>
        
        {/* ✅ Topics Grid with AnimatedCard + Staggered reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <AnimatedCard 
              key={index} 
              delay={index * 100} 
              enableTilt={true}
              className="h-full"
            >
              <Link
                href={topic.href}
                className="group relative overflow-hidden bg-white shadow-editorial hover:shadow-editorial-lg transition-all duration-500 block h-full"
              >
                {/* Trending Badge */}
                {topic.trending && (
                  <div className="absolute top-6 right-6 z-20">
                    <span className="border border-editorial-accent text-editorial-accent text-caption uppercase tracking-widest px-3 py-1 font-semibold backdrop-blur-sm bg-white/80">
                      Trending
                    </span>
                  </div>
                )}
                
                {/* ✅ Image with zoom effect */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* ✅ Gradient overlay animation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80"></div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="relative z-10">
                    <h3 className="font-display text-headline-lg mb-3 text-white tracking-magazine">
                      {topic.title}
                    </h3>
                    <p className="text-white/90 mb-6 text-body font-sans font-light leading-relaxed">
                      {topic.description}
                    </p>
                    
                    {/* ✅ CTA with animated underline */}
                    <div className="inline-flex items-center text-white pb-1 text-body-sm font-sans uppercase tracking-wide font-medium relative">
                      <span className="mr-2">Explore</span>
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      {/* ✅ Animated underline */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-editorial-accent transition-all duration-300 group-hover:w-full origin-left"></span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-18">
          <p className="text-body-lg text-editorial-slate mb-8 font-light">
            Ready to transform your nail game?
          </p>
          <Link 
            href="/topics" 
            className="inline-flex items-center bg-editorial-charcoal text-white font-sans text-caption uppercase tracking-widest px-12 py-4 font-medium hover:bg-editorial-accent transition-all duration-500 shadow-editorial"
          >
            <span className="mr-3">View All Topics</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
