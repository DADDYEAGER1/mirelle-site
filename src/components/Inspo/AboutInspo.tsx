// src/components/Inspo/AboutInspo.tsx
'use client';

import { useState } from 'react';

export default function AboutInspo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-[#f9fafb]">
      <div className="max-w-[1400px] mx-auto px-16 md:px-20">
        <details 
          open={isOpen}
          onToggle={(e: any) => setIsOpen(e.target.open)}
          className="group"
        >
          <summary className="cursor-pointer flex justify-between items-center">
            <h2 
              className="text-[#252220]"
              style={{
                fontFamily: 'Larken, serif',
                fontSize: '32px',
                fontWeight: 400,
              }}
            >
              About Our Inspiration Gallery
            </h2>
            
            <svg 
              className="w-6 h-6 text-[#252220] transform group-open:rotate-180 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          
          <div className="mt-8 max-w-3xl">
            <p 
              className="text-[#252220] leading-relaxed mb-6"
              style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: '18px',
                lineHeight: '1.7',
              }}
            >
              Discover how we curate the best nail designs for you
            </p>
            
            <div 
              className="text-[#252220] leading-relaxed space-y-6"
              style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: '16px',
                lineHeight: '1.7',
              }}
            >
              <p>
                Our inspiration gallery features over 1,000 curated nail designs across 25+ style categories, 
                from classic French tips to trending chrome finishes. Each design is carefully selected by our 
                editorial team to ensure the highest quality and relevance.
              </p>
              
              <p>
                We update our collection daily with fresh designs and seasonal trends, making it easy for you 
                to find inspiration whether you're a professional nail artist or an enthusiast looking for your 
                next manicure idea.
              </p>
              
              <p>
                Browse by shape, technique, occasion, or season to discover designs that match your style and 
                skill level. Every design includes detailed information to help you recreate the look at home 
                or share with your nail technician.
              </p>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}