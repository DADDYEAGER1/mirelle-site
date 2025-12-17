// src/components/Inspo/MasonryGallery.tsx
'use client';

import { useState, useEffect } from 'react';
import type { DesignImage } from '@/types/inspo';

interface MasonryGalleryProps {
  images: DesignImage[];
  onImageClick: (image: DesignImage) => void;
}

export default function MasonryGallery({ images, onImageClick }: MasonryGalleryProps) {
  const [likedImages, setLikedImages] = useState<Set<string>>(new Set());
  const [savedImages, setSavedImages] = useState<Set<string>>(new Set());
  
  // Generate fake but realistic view counts (5k-50k range)
  const getViewCount = (imageId: string) => {
    const hash = imageId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return Math.floor(5000 + (hash % 45000)); // Range: 5,000 - 50,000
  };
  
  // Generate fake like counts (500-5k range)
  const getLikeCount = (imageId: string) => {
    const hash = imageId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return Math.floor(500 + (hash % 4500)); // Range: 500 - 5,000
  };

  // Load saved/liked from localStorage on mount
  useEffect(() => {
    try {
      const liked = localStorage.getItem('likedDesigns');
      const saved = localStorage.getItem('savedDesigns');
      if (liked) setLikedImages(new Set(JSON.parse(liked)));
      if (saved) setSavedImages(new Set(JSON.parse(saved)));
    } catch (error) {
      console.error('Error loading saved data:', error);
    }
  }, []);

  const toggleLike = (imageId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newLiked = new Set(likedImages);
    if (newLiked.has(imageId)) {
      newLiked.delete(imageId);
    } else {
      newLiked.add(imageId);
    }
    setLikedImages(newLiked);
    localStorage.setItem('likedDesigns', JSON.stringify([...newLiked]));
  };

  const toggleSave = (imageId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newSaved = new Set(savedImages);
    if (newSaved.has(imageId)) {
      newSaved.delete(imageId);
    } else {
      newSaved.add(imageId);
    }
    setSavedImages(newSaved);
    localStorage.setItem('savedDesigns', JSON.stringify([...newSaved]));
  };

  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
          No designs found
        </h3>
        <p className="text-gray-600 mb-6">
          Try adjusting your filters or browse other categories
        </p>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results count */}
        <div className="mb-8 text-center">
          <p className="text-gray-600 text-lg">
            Showing <span className="font-bold text-gray-900">{images.length}</span> stunning designs
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image, index) => {
            const isLiked = likedImages.has(image.id);
            const isSaved = savedImages.has(image.id);

            return (
              <div
                key={image.id}
                className="break-inside-avoid mb-4 group cursor-pointer"
                onClick={() => onImageClick(image)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading={index < 12 ? 'eager' : 'lazy'}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium line-clamp-2 mb-3">
                        {image.alt}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex items-center gap-4 text-white/80 text-xs">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          {getViewCount(image.id).toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                          {getLikeCount(image.id).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={(e) => toggleLike(image.id, e)}
                    className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                      isLiked
                        ? 'bg-pink-500 scale-110'
                        : 'bg-white/90 hover:bg-white hover:scale-110'
                    }`}
                    aria-label={isLiked ? 'Unlike' : 'Like'}
                  >
                    <svg
                      className={`w-5 h-5 ${isLiked ? 'text-white' : 'text-gray-700'}`}
                      fill={isLiked ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>

                  {/* Save Button */}
                  <button
                    onClick={(e) => toggleSave(image.id, e)}
                    className={`absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                      isSaved
                        ? 'bg-burgundy-600 scale-110'
                        : 'bg-white/90 hover:bg-white hover:scale-110'
                    }`}
                    aria-label={isSaved ? 'Unsave' : 'Save'}
                  >
                    <svg
                      className={`w-5 h-5 ${isSaved ? 'text-white' : 'text-gray-700'}`}
                      fill={isSaved ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>

                  {/* Premium Badge */}
                  {image.isPremium && (
                    <div className="absolute bottom-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                      ⭐ PRO
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
