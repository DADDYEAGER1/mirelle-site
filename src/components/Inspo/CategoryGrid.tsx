// src/components/Inspo/CategoryGrid.tsx
'use client';

import Link from 'next/link';
import type { DesignData } from '@/types/inspo';

interface CategoryCardProps {
  design: DesignData;
}

function CategoryCard({ design }: CategoryCardProps) {
  return (
    <Link href={`/inspo/${design.slug}`} className="group block">
      <div className="relative overflow-hidden bg-[#f9fafb]">
        {/* Image */}
        <div className="relative h-[500px] overflow-hidden">
          <img
            src={design.heroImage}
            alt={design.displayName}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Explore Gallery button - bottom left */}
          <div className="absolute bottom-6 left-6">
            <span 
              className="inline-block border-b border-[#f9fafb] pb-1 text-[#f9fafb] group-hover:border-[#f9fafb]/70 transition-all"
              style={{
                fontFamily: 'General Sans, sans-serif',
                fontSize: '14px',
              }}
            >
              Explore Gallery
            </span>
          </div>
        </div>

        {/* Text below image */}
        <div className="pt-4">
          <p 
            className="text-[#252220] mb-2"
            style={{
              fontFamily: 'General Sans, sans-serif',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {design.category}
          </p>
          <h3 
            className="text-[#252220] group-hover:opacity-70 transition-opacity"
            style={{
              fontFamily: 'Larken, serif',
              fontSize: '24px',
              fontWeight: 400,
            }}
          >
            {design.displayName}
          </h3>
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
  const categoryOrder = ['Shape', 'Seasonal', 'Occasion', 'Classic', 'Technique'];

  return (
    <div className="bg-[#f9fafb]">
      {categoryOrder.map((categoryName) => {
        const categoryDesigns = designsByCategory[categoryName];
        if (!categoryDesigns || categoryDesigns.length === 0) return null;

        return (
          <section key={categoryName} className="max-w-[1400px] mx-auto px-16 md:px-20 py-16 md:py-20">
            {/* Category Header */}
            <div className="mb-12">
              <h2 
                className="text-[#252220] mb-3"
                style={{
                  fontFamily: 'General Sans, sans-serif',
                  fontSize: '32px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                {categoryName}
              </h2>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {categoryDesigns.map((design) => (
                <CategoryCard key={design.slug} design={design} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}