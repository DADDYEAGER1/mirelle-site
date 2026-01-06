'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Hardcoded categories - no need to pass as props
const CATEGORIES = [
  { name: 'Seasonal', slug: 'seasonal' },
  { name: 'Trends', slug: 'trends' },
  { name: 'Tutorial', slug: 'tutorial' },
  { name: 'Nail Care', slug: 'nail-care' },
  { name: 'Nail Art', slug: 'nail-art' },
  { name: "Editor's Choice", slug: 'editors-choice' }
];

export default function BlogCategoryNav() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams?.get('category');

  return (
    <section className="py-6 bg-white border-b border-gray-100 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop: Centered row, all visible */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-wrap">
          <Link
            href="/blog"
            className={`font-ui text-sm uppercase tracking-wider transition-opacity ${
              !activeCategory ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'
            }`}
          >
            View All
          </Link>
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/blog?category=${category.slug}`}
              className={`font-ui text-sm uppercase tracking-wider transition-opacity ${
                activeCategory === category.slug ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Mobile: Horizontal scroll, no scrollbar */}
        <div className="md:hidden overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 whitespace-nowrap">
            <Link
              href="/blog"
              className={`font-ui text-sm uppercase tracking-wider transition-opacity ${
                !activeCategory ? 'text-foreground' : 'text-foreground/70'
              }`}
            >
              View All
            </Link>
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/blog?category=${category.slug}`}
                className={`font-ui text-sm uppercase tracking-wider transition-opacity ${
                  activeCategory === category.slug ? 'text-foreground' : 'text-foreground/70'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}