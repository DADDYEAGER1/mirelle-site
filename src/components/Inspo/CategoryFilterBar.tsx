// src/components/Inspo/CategoryFilterBar.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface Category {
  name: string;
  slug: string;
}

const categories: Category[] = [
  { name: 'Shape', slug: 'shape' },
  { name: 'Seasonal', slug: 'seasonal' },
  { name: 'Occasion', slug: 'occasion' },
  { name: 'Classic', slug: 'classic' },
  { name: 'Technique', slug: 'technique' },
];

export default function CategoryFilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams?.get('category') || 'all';

  const handleCategoryClick = (slug: string) => {
    if (slug === 'all') {
      router.push('/inspo');
    } else {
      router.push(`/inspo?category=${slug}`);
    }
  };

  return (
    <section className="bg-[#f9fafb] border-b border-[#252220]/10 sticky top-0 z-40">
      <div className="max-w-[1400px] mx-auto px-16 md:px-20 py-4">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => handleCategoryClick('all')}
            className={`whitespace-nowrap px-6 py-2 transition-all duration-300 ${
              activeCategory === 'all'
                ? 'border-b-2 border-[#252220] font-semibold'
                : 'border-b-2 border-transparent hover:border-[#252220]/30'
            }`}
            style={{
              fontFamily: 'General Sans, sans-serif',
              fontSize: '14px',
              color: '#252220',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => handleCategoryClick(category.slug)}
              className={`whitespace-nowrap px-6 py-2 transition-all duration-300 ${
                activeCategory === category.slug
                  ? 'border-b-2 border-[#252220] font-semibold'
                  : 'border-b-2 border-transparent hover:border-[#252220]/30'
              }`}
              style={{
                fontFamily: 'General Sans, sans-serif',
                fontSize: '14px',
                color: '#252220',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}