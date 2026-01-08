// src/components/Inspo/MasonryGallery.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import type { DesignImage } from '@/types/inspo';

interface MasonryGalleryProps {
  images: DesignImage[];
  onImageClick: (image: DesignImage) => void;
}

export default function MasonryGallery({ images, onImageClick }: MasonryGalleryProps) {
  const [displayCount, setDisplayCount] = useState(20);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayCount < images.length) {
          setDisplayCount(prev => Math.min(prev + 20, images.length));
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [displayCount, images.length]);

  const displayedImages = images.slice(0, displayCount);
  const hasMore = displayCount < images.length;

  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 
          className="text-[#252220] mb-4"
          style={{
            fontFamily: 'Larken, serif',
            fontSize: '24px',
          }}
        >
          No designs found
        </h3>
        <p 
          className="text-[#252220] opacity-70"
          style={{
            fontFamily: 'Crimson Text, serif',
            fontSize: '16px',
          }}
        >
          Browse other categories
        </p>
      </div>
    );
  }

  return (
    <section className="py-12 bg-[#f9fafb]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Masonry Grid - Pinterest style */}
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid mb-4 group cursor-pointer"
              onClick={() => onImageClick(image)}
            >
              <div className="relative overflow-hidden bg-white">
                <img
                  src={image.url}
                  alt={image.alt}
                  loading={index < 20 ? 'eager' : 'lazy'}
                  className="w-full h-auto object-cover transform group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Trigger */}
        {hasMore && (
          <div ref={loadMoreRef} className="py-12 text-center">
            <div className="inline-flex items-center gap-2 text-[#252220]">
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span style={{ fontFamily: 'General Sans, sans-serif', fontSize: '14px' }}>
                Loading more...
              </span>
            </div>
          </div>
        )}

        {!hasMore && images.length > 0 && (
          <div className="text-center py-12">
            <p 
              className="text-[#252220] opacity-70"
              style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: '16px',
              }}
            >
              You've seen all {images.length} designs
            </p>
          </div>
        )}
      </div>
    </section>
  );
}