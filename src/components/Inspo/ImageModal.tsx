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
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Get current index
  const currentIndex = image ? images.findIndex(img => img.id === image.id) : -1;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  // Load liked/saved state
  useEffect(() => {
    if (!image) return;
    
    try {
      const liked = localStorage.getItem('likedDesigns');
      const saved = localStorage.getItem('savedDesigns');
      if (liked) setIsLiked(JSON.parse(liked).includes(image.id));
      if (saved) setIsSaved(JSON.parse(saved).includes(image.id));
    } catch (error) {
      console.error('Error loading saved state:', error);
    }
  }, [image]);

  // Handle keyboard navigation
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
      case 'z':
      case 'Z':
        setIsZoomed(prev => !prev);
        break;
    }
  }, [image, isFirst, isLast, onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when modal open
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

  // Touch handlers for swipe
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

  const toggleLike = () => {
    if (!image) return;
    
    try {
      const liked = localStorage.getItem('likedDesigns');
      const likedArray = liked ? JSON.parse(liked) : [];
      
      if (isLiked) {
        const updated = likedArray.filter((id: string) => id !== image.id);
        localStorage.setItem('likedDesigns', JSON.stringify(updated));
        setIsLiked(false);
      } else {
        likedArray.push(image.id);
        localStorage.setItem('likedDesigns', JSON.stringify(likedArray));
        setIsLiked(true);
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const toggleSave = () => {
    if (!image) return;
    
    try {
      const saved = localStorage.getItem('savedDesigns');
      const savedArray = saved ? JSON.parse(saved) : [];
      
      if (isSaved) {
        const updated = savedArray.filter((id: string) => id !== image.id);
        localStorage.setItem('savedDesigns', JSON.stringify(updated));
        setIsSaved(false);
      } else {
        savedArray.push(image.id);
        localStorage.setItem('savedDesigns', JSON.stringify(savedArray));
        setIsSaved(true);
      }
    } catch (error) {
      console.error('Error toggling save:', error);
    }
  };

  const handleDownload = async () => {
    if (!image) return;
    
    try {
      const response = await fetch(image.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mirelle-${image.id}.webp`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const handleShare = (platform: string) => {
    if (!image) return;
    
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(image.alt);
    
    const shareUrls: { [key: string]: string } = {
      pinterest: `https://pinterest.com/pin/create/button/?url=${url}&media=${encodeURIComponent(image.url)}&description=${text}`,
      instagram: `https://www.instagram.com/`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
    
    setShowShareMenu(false);
  };

  const copyLink = () => {
    if (!image) return;
    
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => {
      setCopiedLink(false);
      setShowShareMenu(false);
    }, 2000);
  };

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 group"
        aria-label="Close modal"
      >
        <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation arrows */}
      {!isFirst && onNavigate && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('prev');
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous image"
        >
          <svg className="w-7 h-7 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {!isLast && onNavigate && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('next');
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 group"
          aria-label="Next image"
        >
          <svg className="w-7 h-7 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image container */}
      <div
        className="relative max-w-7xl max-h-[90vh] w-full mx-4"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={image.url}
          alt={image.alt}
          className={`w-full h-full object-contain rounded-2xl shadow-2xl transition-transform duration-300 ${
            isZoomed ? 'cursor-zoom-out scale-150' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />

        {/* Bottom bar with actions */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
          {/* Image info */}
          <p className="text-white text-sm mb-4 line-clamp-2">{image.alt}</p>

          {/* Action buttons */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Like button */}
              <button
                onClick={toggleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isLiked
                    ? 'bg-pink-500 text-white scale-110'
                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md'
                }`}
              >
                <svg className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-sm font-medium">{isLiked ? 'Liked' : 'Like'}</span>
              </button>

              {/* Save button */}
              <button
                onClick={toggleSave}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isSaved
                    ? 'bg-accent/80 text-white scale-110'
                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md'
                }`}
              >
                <svg className="w-5 h-5" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span className="text-sm font-medium">{isSaved ? 'Saved' : 'Save'}</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              {/* Download button */}
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="text-sm font-medium">Download</span>
              </button>

              {/* Share button */}
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span className="text-sm font-medium">Share</span>
                </button>

                {/* Share menu */}
                {showShareMenu && (
                  <div className="absolute bottom-full right-0 mb-2 bg-white rounded-2xl shadow-2xl p-3 min-w-[200px] animate-in slide-in-from-bottom-2 duration-200">
                    <button
                      onClick={() => handleShare('pinterest')}
                      className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="text-xl">📌</span>
                      <span className="text-sm font-medium text-gray-700">Pinterest</span>
                    </button>
                    <button
                      onClick={() => handleShare('instagram')}
                      className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="text-xl">📷</span>
                      <span className="text-sm font-medium text-gray-700">Instagram</span>
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="text-xl">🐦</span>
                      <span className="text-sm font-medium text-gray-700">Twitter</span>
                    </button>
                    <button
                      onClick={copyLink}
                      className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="text-xl">{copiedLink ? '✓' : '🔗'}</span>
                      <span className="text-sm font-medium text-gray-700">
                        {copiedLink ? 'Copied!' : 'Copy Link'}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Image counter */}
          <div className="mt-4 text-center text-white/60 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs">
        Press ESC to close • Arrow keys to navigate • Z to zoom
      </div>
    </div>
  );
}