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
    <nav className="w-full border-t border-b border-gray-200 bg-background">
      {/* Desktop - Horizontal */}
      <div className="hidden md:block max-w-[1200px] mx-auto px-16">
        <ul className="flex items-center justify-center gap-8 py-4">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/shop/${category.slug}`}
                className="text-sm uppercase tracking-widest font-body hover:opacity-70 transition-opacity"
              >
                {category.displayName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile - Stacked */}
      <div className="md:hidden max-w-[1200px] mx-auto px-6">
        <ul className="flex flex-col divide-y divide-gray-200">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/shop/${category.slug}`}
                className="block py-4 text-sm uppercase tracking-widest font-body hover:opacity-70 transition-opacity"
              >
                {category.displayName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}