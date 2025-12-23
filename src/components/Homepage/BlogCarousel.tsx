// src/components/Homepage/BlogCarousel.tsx
'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogMetadata } from '@/types/blog';

interface BlogCarouselProps {
  posts: BlogMetadata[];
}

export default function BlogCarousel({ posts }: BlogCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  const featuredPosts = posts.slice(0, 8);
  
  if (!featuredPosts || featuredPosts.length === 0) {
    return null;
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % featuredPosts.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const startX = e.clientX;
    
    const handleMouseMove = (moveE: MouseEvent) => {
      const diff = startX - moveE.clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        document.removeEventListener('mousemove', handleMouseMove);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }, { once: true });
  };

  return (
    <section className="bg-background py-12 md:py-16">
      {/* Section Title with Lines - Only around title */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 mb-8">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md h-[1px] bg-border-color mb-4" />
          <h2 className="font-product text-xl md:text-2xl text-foreground text-center tracking-wider">
            BLOG SECTION
          </h2>
          <div className="w-full max-w-md h-[1px] bg-border-color mt-4" />
        </div>
      </div>
      
      {/* Desktop Pagination - Top Right */}
      <div className="hidden md:flex justify-end max-w-7xl mx-auto px-6 md:px-8 lg:px-16 mb-4">
        <span className="font-product text-sm text-foreground">
          &lt;{currentIndex + 1}/{featuredPosts.length}&gt;
        </span>
      </div>
      
      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div 
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop: 3 cards + 4th peeking */}
          <div 
            className="hidden md:flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * 33.33}%)`,
            }}
          >
            {featuredPosts.map((post) => (
              <div 
                key={post.slug}
                className="flex-shrink-0 w-[33.33%] px-3"
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  {/* Image - 4:3 Ratio */}
                  <div className="relative w-full aspect-[4/3] mb-4">
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        fill
                        className="object-cover"
                        sizes="33vw"
                      />
                    )}
                  </div>
                  
                  {/* Category */}
                  {post.category && (
                    <p className="font-product uppercase text-xs text-foreground/70 mb-2 tracking-wider">
                      {post.category}
                    </p>
                  )}
                  
                  {/* Title */}
                  <h3 className="font-heading text-lg text-foreground mb-2 group-hover:opacity-70 transition-opacity line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Author */}
                  {post.author && (
                    <p className="font-product text-xs text-foreground/70 uppercase tracking-wider">
                      BY {post.author.toUpperCase()}
                    </p>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile: 1 card + 2nd peeking */}
          <div 
            className="md:hidden flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * 85}%)`,
            }}
          >
            {featuredPosts.map((post) => (
              <div 
                key={post.slug}
                className="flex-shrink-0 w-[85%] px-3"
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  {/* Image - 4:3 Ratio */}
                  <div className="relative w-full aspect-[4/3] mb-4">
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        fill
                        className="object-cover"
                        sizes="85vw"
                      />
                    )}
                  </div>
                  
                  {/* Category */}
                  {post.category && (
                    <p className="font-product uppercase text-xs text-foreground/70 mb-2 tracking-wider">
                      {post.category}
                    </p>
                  )}
                  
                  {/* Title */}
                  <h3 className="font-heading text-base text-foreground mb-2 group-hover:opacity-70 transition-opacity line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Author */}
                  {post.author && (
                    <p className="font-product text-xs text-foreground/70 uppercase tracking-wider">
                      BY {post.author.toUpperCase()}
                    </p>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Pagination - Dots below carousel */}
      <div className="md:hidden flex justify-center gap-2 mt-6 px-6">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-foreground' : 'bg-foreground/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
