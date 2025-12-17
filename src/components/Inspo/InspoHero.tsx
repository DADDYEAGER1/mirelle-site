// src/components/Inspo/InspoHero.tsx
'use client';

export default function InspoHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-burgundy-900 via-burgundy-700 to-burgundy-600">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy-50/10 via-pink-50/10 to-purple-50/10 animate-gradient" />
      
      {/* Floating nail design elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-16 h-20 bg-white/5 rounded-lg transform rotate-12 animate-float" />
        <div className="floating-element absolute top-40 right-20 w-20 h-24 bg-white/5 rounded-lg transform -rotate-6 animate-float-delayed" />
        <div className="floating-element absolute bottom-32 left-1/4 w-12 h-16 bg-white/5 rounded-lg transform rotate-45 animate-float-slow" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 py-20">
        {/* Stats badge */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg border border-white/30 text-white">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
          Updated Daily • 1000+ Designs • Free Inspiration
        </div>
        
        {/* Main heading */}
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cream-100 to-white bg-clip-text text-transparent tracking-tight leading-tight">
          Nail Design
          <br />
          Inspiration Gallery
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Discover 1000+ curated nail designs from classic elegance to trending styles. 
          Find your perfect manicure inspiration for every occasion.
        </p>

        {/* Emoji decoration */}
        <div className="flex gap-6 justify-center text-5xl mb-10">
          {['💅', '✨', '💖', '🎨'].map((emoji, i) => (
            <span
              key={i}
              className="animate-bounce inline-block"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            href="#categories"
            className="px-8 py-4 bg-white text-accent rounded-full font-semibold hover:bg-background transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            Explore Gallery
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Get Weekly Trends
          </button>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <span className="bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-white/90 border border-white/20">
            ✓ Step-by-step tutorials
          </span>
          <span className="bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-white/90 border border-white/20">
            ✓ All skill levels
          </span>
          <span className="bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-white/90 border border-white/20">
            ✓ Save favorites
          </span>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(-10deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(15deg); }
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
          animation-delay: 5s;
        }
        
        .animate-float-slow {
          animation: float-slow 30s ease-in-out infinite;
          animation-delay: 10s;
        }
      `}</style>
    </section>
  );
}
