// src/components/Inspo/ExploreSection.tsx
'use client';

import Link from 'next/link';

interface ExploreCard {
  image: string;
  category: string;
  title: string;
  author: string;
  link: string;
}

const exploreCards: ExploreCard[] = [
  {
    image: '/images/nail-care-guide.jpg',
    category: 'CARE',
    title: 'Essential Nail Care Tips',
    author: 'MIRELLÉ TEAM',
    link: '/blog/nail-care-guide',
  },
  {
    image: '/images/nail-art-guide.jpg',
    category: 'TUTORIAL',
    title: 'Nail Art Techniques',
    author: 'MIRELLÉ TEAM',
    link: '/blog/nail-art-techniques',
  },
  {
    image: '/images/trending-designs.jpg',
    category: 'TRENDS',
    title: 'Latest Nail Trends 2026',
    author: 'MIRELLÉ TEAM',
    link: '/blog/trends-2026',
  },
];

export default function ExploreSection() {
  return (
    <section className="py-16 md:py-20 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 
          className="text-[#252220] mb-12"
          style={{
            fontFamily: 'Larken, serif',
            fontSize: '32px',
            fontWeight: 400,
          }}
        >
          Explore
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {exploreCards.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className="group block"
            >
              <div className="relative overflow-hidden bg-[#f9fafb]">
                <div className="relative h-[400px] overflow-hidden mb-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div>
                  <p 
                    className="text-[#252220] mb-2"
                    style={{
                      fontFamily: 'General Sans, sans-serif',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {card.category}
                  </p>
                  
                  <h3 
                    className="text-[#252220] mb-3 group-hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: 'Larken, serif',
                      fontSize: '24px',
                      fontWeight: 400,
                    }}
                  >
                    {card.title}
                  </h3>
                  
                  <p 
                    className="text-[#252220]"
                    style={{
                      fontFamily: 'General Sans, sans-serif',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    BY {card.author}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}