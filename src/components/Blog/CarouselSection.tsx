'use client';

import { useState, useRef, useEffect } from 'react';
import FeatureBlogCard from './FeatureBlogCard';
import { BlogMetadata } from '@/types/blog';

interface CarouselSectionProps {
  posts: BlogMetadata[];
  title: string;
}

export default function CarouselSection({ posts, title }: CarouselSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const totalCards = posts.length;

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth || 0;
      const currentCard = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(currentCard);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8">
          <h2 
            className="text-3xl md:text-4xl"
            className="font-heading"
          >
            {title}
          </h2>

          {/* Page Counter - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span 
              className="text-sm"
              className="font-ui"
            >
              {currentIndex + 1} / {totalCards}
            </span>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {posts.map((post) => (
            <div 
              key={post.slug}
              className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-[32%] lg:w-[23%] snap-start"
            >
              <FeatureBlogCard post={post} />
            </div>
          ))}
        </div>

        {/* Dots Pagination - Mobile */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {Array.from({ length: Math.min(totalCards, 5) }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? 'bg-[#252220] w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}