'use client';

import { useEffect, useState } from 'react';
import PremiumButton from '@/components/ui/PremiumButton';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  // ✅ Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* ✅ Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.05s ease-out',
        }}
      >
        <picture>
          <source 
            media="(max-width: 768px)" 
            srcSet="/images/hero/trending-chrome-cat-claw-square-nails-2026-designs-pinterest-mobile.webp" 
          />
          <img
            src="/images/hero/trending-chrome-cat-claw-square-nails-2026-viral-designs-pinterest.webp"
            alt="Trending 2026 chrome nails, cat claw designs, square nail art with press-ons – 50K+ trust Mirellé for viral nail inspiration"
            className="w-full h-full object-cover opacity-90"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* ✅ Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-overline text-white/80 mb-6 tracking-widest uppercase font-sans animate-fade-in">
          Est. 2024
        </p>
        
        <h1 className="font-display text-display-lg md:text-display-xl mb-8 tracking-magazine animate-fade-in" style={{ animationDelay: '200ms' }}>
          Mirellé
        </h1>
        
        <p className="text-body-xl md:text-headline-md mb-12 font-sans font-light max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
          Modern Nail Ideas & Trends for Every Mood
        </p>
        
        {/* ✅ CTA buttons with PremiumButton */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <PremiumButton
            href="#featured-topics"
            variant="primary"
            size="lg"
          >
            Explore More
          </PremiumButton>
          <PremiumButton
            href="/shop"
            variant="secondary"
            size="lg"
          >
            Shop Mirellé's Favs
          </PremiumButton>
        </div>
      </div>
      
      {/* ✅ Scroll indicator with pulse animation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-caption uppercase tracking-widest font-sans">Scroll</span>
          <svg className="w-5 h-5 text-white/60 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}