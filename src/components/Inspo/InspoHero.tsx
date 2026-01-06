// src/components/Inspo/InspoHero.tsx
'use client';

export default function InspoHero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center bg-[#f9fafb]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h1 
          className="text-[#252220] mb-6 leading-tight"
          style={{
            fontFamily: 'Larken, serif',
            fontSize: '36px',
            fontWeight: 400,
          }}
        >
          Nail Design Inspiration Gallery
        </h1>

        <p 
          className="text-[#252220] max-w-3xl mx-auto leading-relaxed"
          style={{
            fontFamily: 'Crimson Text, serif',
            fontSize: '18px',
          }}
        >
          Discover curated nail designs by Mirellé editors
        </p>
      </div>
    </section>
  );
}