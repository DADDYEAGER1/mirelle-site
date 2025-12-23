// src/components/Homepage/ShopCarousel.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CategoryData } from '@/types/shop';

interface ShopCarouselProps {
  categories: CategoryData[];
}

export default function ShopCarousel({ categories }: ShopCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false); // Disabled
  
  if (!categories || categories.length === 0) {
    return null;
  }

  // Remove useEffect for auto-play
  
  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % categories.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + categories.length) % categories.length);
  };

  const handleDragStart = (e: React.MouseEvent) => {
    setIsAutoPlaying(false);
    const startX = e.clientX;
    
    const handleDragMove = (moveE: MouseEvent) => {
      const diff = startX - moveE.clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setCurrentIndex(prev => (prev + 1) % categories.length);
        } else {
          setCurrentIndex(prev => (prev - 1 + categories.length) % categories.length);
        }
        document.removeEventListener('mousemove', handleDragMove);
      }
    };
    
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleDragMove);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }, { once: true });
  };

  return (
    <section className="bg-background py-8 md:py-12">
      {/* Section Title with Lines */}
      <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-12 mb-8">
        <div className="w-full h-[1px] bg-border-color mb-4" />
        <h2 className="font-heading text-2xl md:text-3xl text-foreground text-center">
          SHOP THE EDITS
        </h2>
        <div className="w-full h-[1px] bg-border-color mt-4" />
      </div>
      
      {/* Pagination - Desktop: Top Right, Mobile: Bottom */}
      <div className="hidden md:block absolute top-0 right-6 font-ui text-sm text-foreground z-10">
        &lt;{currentIndex + 1}/{categories.length}&gt;
      </div>
      
      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-3 md:px-6 lg:px-12 mt-8">
        <div 
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={handleDragStart}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * 24}%)`,
            }}
          >
            {categories.map((category) => (
              <div 
                key={category.slug}
                className="flex-shrink-0 w-[85%] md:w-[24%] px-2"
              >
                <Link 
                  href={`/shop/${category.slug}`}
                  className="block group"
                >
                  {/* Image - 4:3 Ratio */}
                  <div className="relative w-full aspect-[4/3] mb-4">
                    <Image
                      src={category.heroImage}
                      alt={category.displayName}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 33vw, 24vw"
                    />
                  </div>
                  
                  {/* Season Label */}
                  <p className="font-ui uppercase text-xs text-text-secondary mb-2 tracking-wider">
                    {category.season}
                  </p>
                  
                  {/* Title */}
                  <h3 className="font-heading text-lg md:text-xl text-foreground mb-2 group-hover:opacity-70 transition-opacity">
                    {category.displayName}
                  </h3>
                  
                  {/* Description snippet */}
                  <p className="font-ui text-xs text-text-secondary uppercase line-clamp-2">
                    {category.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
