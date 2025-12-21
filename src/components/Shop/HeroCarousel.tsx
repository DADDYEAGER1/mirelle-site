'use client';

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const maxIndex = Math.max(0, images.length - itemsPerView.desktop);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  if (!isClient) return null;

  return (
    <div className="w-full max-w-[1400px] mx-auto px-16 sm:px-24 lg:px-32">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView.desktop + 1.5)}%)`,
          }}
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.url}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p className="text-center mt-3 font-product text-base tracking-tight">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-2 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
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
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <span className="text-sm font-body">
          {currentIndex + 1} / {maxIndex + 1}
        </span>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="p-2 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
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
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}