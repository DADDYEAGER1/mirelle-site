// src/components/Posts/CategoryNav.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Category } from '@/types/posts';

interface CategoryNavProps {
  categories: Category[];
}

export default function CategoryNav({ categories }: CategoryNavProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const handleCategoryClick = (categorySlug: string | null) => {
    if (categorySlug) {
      router.push(`/posts?category=${categorySlug}`);
    } else {
      router.push('/posts');
    }
  };

  return (
    <nav className="border-b border-gray-200 mb-12">
      <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
        {/* All Posts */}
        <button
          onClick={() => handleCategoryClick(null)}
          className={`font-ui text-sm uppercase tracking-wide whitespace-nowrap pb-2 border-b-2 transition-colors ${
            !currentCategory
              ? 'border-foreground text-foreground'
              : 'border-transparent text-gray-600 hover:text-foreground'
          }`}
        >
          ALL
        </button>

        {/* Dynamic Categories */}
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => handleCategoryClick(category.slug)}
            className={`font-ui text-sm uppercase tracking-wide whitespace-nowrap pb-2 border-b-2 transition-colors ${
              currentCategory === category.slug
                ? 'border-foreground text-foreground'
                : 'border-transparent text-gray-600 hover:text-foreground'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
}