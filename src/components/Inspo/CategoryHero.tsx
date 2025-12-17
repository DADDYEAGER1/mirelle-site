// src/components/Inspo/CategoryHero.tsx
'use client';

import type { DesignData } from '@/types/inspo';

interface CategoryHeroProps {
  designData: DesignData;
  imageCount: number;
}

export default function CategoryHero({ designData, imageCount }: CategoryHeroProps) {
  return (
    <section
      className="relative bg-cover bg-center text-white py-32 md:py-40"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${designData.heroImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center gap-2 text-white/80">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="/inspo" className="hover:text-white transition-colors">
                Inspiration
              </a>
            </li>
            <li>/</li>
            <li className="text-white font-semibold">{designData.displayName}</li>
          </ol>
        </nav>

        {/* Category badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 mb-6 text-sm font-semibold uppercase tracking-wider rounded-full">
          <span>{designData.category}</span>
          <span>•</span>
          <span>{designData.year}</span>
          <span>•</span>
          <span>{imageCount} Designs</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight max-w-4xl">
          {designData.displayName}
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl font-light leading-relaxed">
          {designData.description}
        </p>

        {/* Emoji decoration */}
        <div className="flex gap-4 mb-8 text-4xl">
          {designData.emojis.map((emoji, i) => (
            <span
              key={i}
              className="animate-bounce inline-block"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>

        {/* TL;DR Summary */}
        {designData.tldr && (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-3xl">
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Quick Overview
            </h3>
            <ul className="space-y-3 text-white/90">
              {designData.tldr.summary.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent/40 mt-1 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {designData.tldr.keyTakeaways && (
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex flex-wrap gap-2">
                  {designData.tldr.keyTakeaways.map((takeaway, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                    >
                      {takeaway}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
