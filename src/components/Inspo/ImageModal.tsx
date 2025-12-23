// src/components/Inspo/ImageModal.tsx
'use client';

import { useEffect, useState, useCallback } from 'react';
import type { DesignImage } from '@/types/inspo';

interface ImageModalProps {
  image: DesignImage | null;
  images: DesignImage[];
  onClose: () => void;
  onNavigate?: (direction: 'prev' | 'next') => void;
}

export default function ImageModal({ image, images, onClose, onNavigate }: ImageModalProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const currentIndex = image ? images.findIndex(img => img.id === image.id) : -1;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!image) return;

    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        if (!isFirst && onNavigate) onNavigate('prev');
        break;
      case 'ArrowRight':
        if (!isLast && onNavigate) onNavigate('next');
        break;
    }
  }, [image, isFirst, isLast, onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [image]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && !isLast && onNavigate) {
      onNavigate('next');
    } else if (isRightSwipe && !isFirst && onNavigate) {
      onNavigate('prev');
    }
  };

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button - top right */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300"
        aria-label="Close"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image Container */}
      <div 
        className="h-full flex items-center justify-center p-4 md:p-8"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation - Previous */}
        {!isFirst && onNavigate && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('prev');
            }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-all duration-300"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Navigation - Next */}
        {!isLast && onNavigate && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('next');
            }}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-all duration-300"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Image */}
        <img
          src={image.url}
          alt={image.alt}
          className="max-h-[90vh] max-w-full object-contain"
        />

        {/* Counter - bottom center */}
        <div 
          className="fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white"
          style={{
            fontFamily: 'General Sans, sans-serif',
            fontSize: '14px',
          }}
        >
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}