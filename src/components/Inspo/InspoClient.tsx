// src/components/Inspo/InspoClient.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { DesignData, DesignImage } from '@/types/inspo';

interface InspoClientProps {
  designData: DesignData;
  initialImages: DesignImage[];
  relatedDesigns: DesignData[];
  breadcrumbItems: Array<{ label: string; href: string }>;
}

export default function InspoClient({
  designData,
  initialImages,
  relatedDesigns,
  breadcrumbItems,
}: InspoClientProps) {
  const [selectedImage, setSelectedImage] = useState<DesignImage | null>(null);
  const [filter, setFilter] = useState<'all' | 'premium'>('all');

  const filteredImages = filter === 'premium' 
    ? initialImages.filter(img => img.isPremium)
    : initialImages;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbItems} currentPage={designData.displayName} />
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center text-white py-32"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${designData.heroImage})`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 mb-6 text-sm font-semibold uppercase tracking-wider">
            <span>{designData.category}</span>
            <span>•</span>
            <span>{designData.year}</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            {designData.displayName}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            {designData.description}
          </p>

          {/* Emoji decoration */}
          <div className="flex gap-4 justify-center text-4xl mb-8">
            {designData.emojis.map((emoji, i) => (
              <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                {emoji}
              </span>
            ))}
          </div>

          {/* TL;DR Summary */}
          {designData.tldr && (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 max-w-2xl mx-auto text-left">
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Overview:</h3>
              <ul className="space-y-2 text-white/90">
                {designData.tldr.summary.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-purple-300 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All ({initialImages.length})
              </button>
              <button
                onClick={() => setFilter('premium')}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  filter === 'premium'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Premium ({initialImages.filter(img => img.isPremium).length})
              </button>
            </div>
            
            <div className="text-sm text-gray-600">
              {filteredImages.length} designs
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredImages.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No images available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium line-clamp-2">{image.alt}</p>
                  </div>
                </div>

                {/* Premium badge */}
                {image.isPremium && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                    ⭐ PRO
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Perfect For Section */}
      {designData.perfectFor && designData.perfectFor.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Perfect For
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {designData.perfectFor.map((item, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Designs */}
      {relatedDesigns.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            You Might Also Like
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedDesigns.map((design) => (
              <Link
                key={design.slug}
                href={`/inspo/${design.slug}`}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${design.heroImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{design.displayName}</h3>
                    <p className="text-white/90 text-sm mb-3">{design.description}</p>
                    <span className="inline-flex items-center text-sm font-semibold border-b-2 border-transparent group-hover:border-purple-300 transition-all">
                      View Gallery →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-purple-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          
          <div className="max-w-5xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-white/10 backdrop-blur-md p-4 mt-4 rounded-lg">
              <p className="text-white text-lg">{selectedImage.alt}</p>
              {selectedImage.pinterestUrl && (
                <a
                  href={selectedImage.pinterestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 mt-2 text-sm"
                >
                  View on Pinterest →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
