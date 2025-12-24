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
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragOffset = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Touch/Drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragOffset.current = 0;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    dragOffset.current = clientX - dragStartX.current;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 75;
    if (Math.abs(dragOffset.current) > threshold) {
      if (dragOffset.current < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    dragOffset.current = 0;
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  if (!isClient) return null;

  return (
    <div className="w-full max-w-[1400px] mx-auto px-3 md:px-6 lg:px-12">
      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex gap-6 transition-transform ease-out"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / itemsPerView.desktop + 1.5)}% + ${isDragging ? dragOffset.current : 0}px))`,
            transitionDuration: isDragging ? '0ms' : '500ms',
          }}
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              draggable={false}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.url}
                  alt={item.name}
                  fill
                  className="object-cover pointer-events-none"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  draggable={false}
                />
              </div>
              <p className="text-center mt-3 font-ui text-base tracking-tight text-foreground">
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
          className="p-2 text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-70 transition-opacity"
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

        <span className="font-ui text-sm text-foreground">
          {currentIndex + 1} / {maxIndex + 1}
        </span>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="p-2 text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-70 transition-opacity"
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
    </div>
  );
}
