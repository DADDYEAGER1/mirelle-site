'use client';

import { useState, useRef, useEffect } from 'react';
import FeatureBlogCard from './FeatureBlogCard';
import { BlogMetadata } from '@/types/blog';

interface MainHeroSectionProps {
  posts: BlogMetadata[];
}

export default function MainHeroSection({ posts }: MainHeroSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
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

  // Take first 5 posts
  const displayPosts = posts.slice(0, 5);

  return (
    <section className="py-16 bg-[#f9fafb] border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
        <div className="relative">
          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {displayPosts.map((post) => (
              <div 
                key={post.slug}
                className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-[32%] lg:w-[23%] snap-start"
              >
                <FeatureBlogCard post={post} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Desktop Only */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}