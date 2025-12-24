'use client';

import Link from 'next/link';

interface Category {
  slug: string;
  displayName: string;
}

interface ShopCategoryNavProps {
  categories: Category[];
}

export default function ShopCategoryNav({ categories }: ShopCategoryNavProps) {
  return (
    <nav className="w-full border-t border-b border-border-color bg-background">
      {/* Desktop - Horizontal Centered */}
      <div className="hidden md:block max-w-7xl mx-auto px-3 md:px-6 lg:px-12">
        <ul className="flex items-center justify-center gap-8 py-4">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/shop/${category.slug}`}
                className="font-ui text-sm uppercase tracking-widest text-foreground hover:opacity-70 transition-opacity"
              >
                {category.displayName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile - Horizontal Scroll with Peek */}
      <div className="md:hidden">
        <div className="overflow-x-auto scrollbar-hide px-3">
          <ul className="flex gap-6 py-4 w-max">
            {categories.map((category) => (
              <li key={category.slug} className="flex-shrink-0">
                <Link
                  href={`/shop/${category.slug}`}
                  className="font-ui text-sm uppercase tracking-widest text-foreground whitespace-nowrap hover:opacity-70 transition-opacity"
                >
                  {category.displayName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
}
