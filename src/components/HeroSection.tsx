import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-editorial-cream">
      {/* Background Image with editorial overlay - Art Direction for Mobile/Desktop */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source 
            media="(max-width: 768px)" 
            srcSet="/herosectionbg-mobile.jpg" 
          />
          <img
            src="/herosectionbg.jpg"
            alt="Beautiful nail art background"
            className="w-full h-full object-cover opacity-90"
          />
        </picture>
        {/* Subtle gradient overlay - Allure style */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>
      
      {/* Content - Editorial spacing and typography */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Overline text - magazine style */}
        <p className="text-overline text-white/80 mb-6 tracking-widest uppercase font-sans">
          Est. 2024
        </p>
        
        {/* Hero headline - large serif display */}
        <h1 className="font-display text-display-lg md:text-display-xl mb-8 tracking-magazine">
          Mirellé
        </h1>
        
        {/* Subheadline - refined sans-serif */}
        <p className="text-body-xl md:text-headline-md mb-12 font-sans font-light max-w-2xl mx-auto leading-relaxed">
          Modern Nail Ideas & Trends for Every Mood
        </p>
        
        {/* CTA buttons - editorial style with more space */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-16">
          <Link
            href="#featured-topics"
            className="bg-white text-editorial-charcoal px-10 py-4 font-sans font-medium text-body-sm tracking-wide uppercase hover:bg-editorial-accent hover:text-white transition-all duration-500 shadow-editorial"
          >
            Explore More
          </Link>
          <Link
            href="/shop"
            className="border border-white/80 text-white px-10 py-4 font-sans font-medium text-body-sm tracking-wide uppercase hover:bg-white hover:text-editorial-charcoal hover:border-white transition-all duration-500"
          >
            Shop Mirellé's Favs
          </Link>
        </div>
      </div>
      
      {/* Minimal scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-caption uppercase tracking-widest font-sans">Scroll</span>
          <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
