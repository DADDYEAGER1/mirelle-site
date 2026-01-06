'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface HeroCarouselProps {
  images: Array<{
    url: string;
    name: string;
  }>;
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check scroll position
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth || 0;
      const gap = 24; // gap-6 = 24px
      const currentCard = Math.round(scrollLeft / (cardWidth + gap));
      
      setCurrentIndex(currentCard);
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    if (isClient) {
      checkScroll();
      const ref = scrollRef.current;
      if (ref) {
        ref.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll);
        return () => {
          ref.removeEventListener('scroll', checkScroll);
          window.removeEventListener('resize', checkScroll);
        };
      }
    }
  }, [isClient]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Calculate total pages based on visible cards
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 4;
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  const visibleCards = isClient ? getVisibleCards() : 4;
  const totalPages = Math.ceil(images.length / visibleCards);
  const currentPage = Math.floor(currentIndex / visibleCards) + 1;

  if (!isClient) return null;

  return (
    <div className="w-full max-w-[1400px] mx-auto px-3 md:px-6 lg:px-12">
      {/* Carousel Container with Peek */}
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-[32%] lg:w-[30%] snap-start"
            >
              {/* Card with subtle border */}
              <div className="bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.url}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
                  />
                </div>
                
                {/* Product Name */}
                <div className="p-4 text-center">
                  <p 
                    className="text-base tracking-tight text-[#252220]"
                    style={{ fontFamily: 'Larken, Georgia, serif' }}
                  >
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination - Bottom Center */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="p-2 text-[#252220] disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-70 transition-opacity"
          aria-label="Previous"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <span 
          className="text-sm text-[#252220]"
          style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}
        >
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="p-2 text-[#252220] disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-70 transition-opacity"
          aria-label="Next"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Hide scrollbar globally */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}