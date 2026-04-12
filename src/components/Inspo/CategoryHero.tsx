// src/components/Inspo/CategoryHero.tsx
'use client';

import type { DesignData } from '@/types/inspo';

interface CategoryHeroProps {
  designData: DesignData;
}

export default function CategoryHero({ designData }: CategoryHeroProps) {
  return (
    <section className="py-16 md:py-20 bg-[#f9fafb]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2">
            <li>
              <a 
                href="/" 
                className="text-[#252220] hover:opacity-70 transition-opacity"
                style={{
                  fontFamily: 'General Sans, sans-serif',
                  fontSize: '14px',
                }}
              >
                Home
              </a>
            </li>
            <li className="text-[#252220]" style={{ fontFamily: 'General Sans, sans-serif', fontSize: '14px' }}>/</li>
            <li>
              <a 
                href="/inspo" 
                className="text-[#252220] hover:opacity-70 transition-opacity"
                style={{
                  fontFamily: 'General Sans, sans-serif',
                  fontSize: '14px',
                }}
              >
                Inspiration
              </a>
            </li>
            <li className="text-[#252220]" style={{ fontFamily: 'General Sans, sans-serif', fontSize: '14px' }}>/</li>
            <li 
              className="text-[#252220]"
              style={{
                fontFamily: 'General Sans, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              {designData.displayName}
            </li>
          </ol>
        </nav>

        {/* Title */}
        <h1 
          className="text-[#252220] mb-6 text-center"
          style={{
            fontFamily: 'Larken, serif',
            fontSize: '42px',
            fontWeight: 400,
          }}
        >
          {designData.displayName}
        </h1>

        {/* Description */}
        <p 
          className="text-[#252220] max-w-3xl mx-auto leading-relaxed text-center"
          style={{
            fontFamily: 'Crimson Text, serif',
            fontSize: '18px',
            lineHeight: '1.7',
          }}
        >
          {designData.description}
        </p>
      </div>
    </section>
  );
}