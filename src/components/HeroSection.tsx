import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/winternailbg.jpg"
          alt="Beautiful nail art background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
          Mirellé
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Modern Nail Ideas & Trends for Every Mood
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#featured-topics"
            className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-charcoal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore More
          </Link>
          <Link
            href="/shop"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-charcoal-800 transition-all duration-300 transform hover:scale-105"
          >
            Shop Mirellé's Favs
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
