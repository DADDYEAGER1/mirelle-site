// src/components/Inspo/CategoryGrid.tsx
'use client';

import Link from 'next/link';
import type { DesignData } from '@/types/inspo';

interface CategoryCardProps {
  design: DesignData;
  imageCount?: number;
}

function CategoryCard({ design, imageCount = 0 }: CategoryCardProps) {
  const isTrending = design.category === 'Trendy';

  return (
    <Link href={`/inspo/${design.slug}`} className="group">
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-[450px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={design.heroImage}
            alt={design.displayName}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          {/* Design count badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/30">
              {imageCount > 0 ? `${imageCount} Designs` : 'Coming Soon'}
            </span>
          </div>

          {/* Category badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-burgundy-600/80 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase tracking-wider">
              {design.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-cream-100 transition-colors">
            {design.displayName}
          </h3>

          {/* Description */}
          <p className="text-white/90 mb-5 line-clamp-2 text-base">
            {design.description}
          </p>

          {/* View Gallery link */}
          <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Explore Gallery
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Trending Badge */}
        {isTrending && (
          <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-pulse z-10">
            🔥 Trending
          </div>
        )}

        {/* Emoji decoration */}
        <div className="absolute top-6 left-6 text-4xl opacity-80 group-hover:opacity-100 transition-opacity z-10">
          {design.emojis[0]}
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
  const categoryOrder = ['Classic', 'Trendy', 'Seasonal'];

  return (
    <div className="bg-gradient-to-b from-cream-50 to-white">
      {categoryOrder.map((categoryName) => {
        const categoryDesigns = designsByCategory[categoryName];
        if (!categoryDesigns || categoryDesigns.length === 0) return null;

        return (
          <section key={categoryName} id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Category Header */}
            <div className="mb-12 text-center md:text-left">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-burgundy-100 text-burgundy-700 rounded-full text-sm font-bold uppercase tracking-wide">
                  {categoryName} Collection
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {categoryName} Designs
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                {categoryName === 'Classic' && 'Timeless nail designs that never go out of style'}
                {categoryName === 'Trendy' && 'Latest viral nail trends and modern styles'}
                {categoryName === 'Seasonal' && 'Perfect designs for every season and occasion'}
              </p>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryDesigns.map((design) => (
                <CategoryCard key={design.slug} design={design} imageCount={42} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
