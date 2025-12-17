// src/components/Inspo/FeaturedCarousel.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import type { DesignData } from '@/types/inspo';

interface FeaturedCarouselProps {
  designs: DesignData[];
}

export default function FeaturedCarousel({ designs }: FeaturedCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth',
      });
      setCurrentSlide(index);
    }
  };

  const scrollLeft = () => {
    const newIndex = currentSlide === 0 ? designs.length - 1 : currentSlide - 1;
    scrollToSlide(newIndex);
  };

  const scrollRight = () => {
    const newIndex = currentSlide === designs.length - 1 ? 0 : currentSlide + 1;
    scrollToSlide(newIndex);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-bold uppercase tracking-wide">
                🔥 Trending Now
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Featured Designs
            </h2>
            <p className="text-lg text-gray-600">
              Most popular styles this week
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent/10 hover:text-accent/80 transition-all group"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent/10 hover:text-accent/80 transition-all group"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth gap-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {designs.map((design) => (
            <Link
              key={design.slug}
              href={`/inspo/${design.slug}`}
              className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-[500px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={design.heroImage}
                    alt={design.displayName}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                {/* Trending Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-pulse z-10 flex items-center gap-2">
                  <span className="animate-bounce">🔥</span>
                  Trending
                </div>

                {/* Emoji */}
                <div className="absolute top-6 left-6 text-4xl opacity-90 group-hover:scale-110 transition-transform z-10">
                  {design.emojis[0]}
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-bold border border-white/30">
                      {design.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-background transition-colors">
                    {design.displayName}
                  </h3>

                  <p className="text-white/90 mb-6 line-clamp-2 text-base">
                    {design.description}
                  </p>

                  <div className="flex items-center text-white font-bold group-hover:translate-x-2 transition-transform duration-300">
                    View Collection
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {designs.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? 'w-8 h-3 bg-accent/80'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
