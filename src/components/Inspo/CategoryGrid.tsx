// src/components/Inspo/CategoryGrid.tsx
'use client';

import Link from 'next/link';
import type { DesignData } from '@/types/inspo';

interface CategoryCardProps {
  design: DesignData;
  imageCount?: number;
}

function CategoryCard({ design, imageCount = 0 }: CategoryCardProps) {
  const isTrending = design.category === 'Trendy' || design.year === 2026;

  return (
    <Link href={`/inspo/${design.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-[500px] hover:-translate-y-2">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img
            src={design.heroImage}
            alt={design.displayName}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
          
          {/* Glassmorphism overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          {/* Top badges */}
          <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
            {/* Design count badge */}
            <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
              <span className="text-white text-sm font-bold">
                {imageCount > 0 ? `${imageCount}+ Designs` : 'Coming Soon'}
              </span>
            </div>

            {/* Trending badge */}
            {isTrending && (
              <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-xl animate-pulse-soft">
                <span className="text-white text-sm font-bold flex items-center gap-1">
                  🔥 Trending
                </span>
              </div>
            )}
          </div>

          {/* Category badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-lg">
              {design.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3 transform group-hover:translate-x-2 transition-transform duration-500">
            {design.displayName}
          </h3>

          {/* Description */}
          <p className="text-white/90 mb-5 line-clamp-2 text-base leading-relaxed">
            {design.description}
          </p>

          {/* Features tags */}
          {design.tldr?.keyTakeaways && (
            <div className="flex flex-wrap gap-2 mb-5">
              {design.tldr.keyTakeaways.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* View Gallery CTA */}
          <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
            <span className="mr-2">Explore Gallery</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Decorative emoji */}
        <div className="absolute top-6 right-6 text-5xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 z-10">
          {design.emojis[0]}
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-purple-500/20 blur-xl"></div>
        </div>
      </div>
    </Link>
  );
}

interface CategoryGridProps {
  designs: DesignData[];
  designsByCategory: { [category: string]: DesignData[] };
}

export default function CategoryGrid({ designs, designsByCategory }: CategoryGridProps) {
  const categoryOrder = ['Shape', 'Classic', 'Technique', 'Occasion', 'Seasonal'];
  const categoryDescriptions: { [key: string]: string } = {
    'Shape': 'Discover nail designs by shape - from elegant almond to bold coffin',
    'Classic': 'Timeless nail designs that never go out of style',
    'Technique': 'Master advanced nail art techniques and finishes',
    'Occasion': 'Perfect designs for every special moment and celebration',
    'Seasonal': 'Trending seasonal nail art for every time of year',
  };

  return (
    <div className="bg-gradient-to-b from-white via-cream-50 to-white">
      {categoryOrder.map((categoryName) => {
        const categoryDesigns = designsByCategory[categoryName];
        if (!categoryDesigns || categoryDesigns.length === 0) return null;

        return (
          <section key={categoryName} id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Category Header */}
            <div className="mb-12 text-center md:text-left">
              <div className="inline-block mb-4">
                <span className="px-6 py-3 bg-gradient-to-r from-accent/20 to-purple-100 text-accent rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                  {categoryName} Collection
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                {categoryName} Designs
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                {categoryDescriptions[categoryName]}
              </p>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryDesigns.map((design) => (
                <CategoryCard key={design.slug} design={design} imageCount={85} />
              ))}
            </div>

            {/* View All button */}
            {categoryDesigns.length > 3 && (
              <div className="mt-12 text-center">
                <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-accent/50 transition-all duration-300 hover:scale-105 shadow-lg">
                  View All {categoryName} Designs
                </button>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}