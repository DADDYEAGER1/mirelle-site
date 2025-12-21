'use client';

import CategoryCard from './CategoryCard';

interface Category {
  slug: string;
  displayName: string;
  imageUrl: string;
}

interface ExploreCategoriesGridProps {
  categories: Category[];
}

export default function ExploreCategoriesGrid({
  categories,
}: ExploreCategoriesGridProps) {
  // Show only 3 categories
  const displayCategories = categories.slice(0, 3);

  return (
    <section className="w-full bg-background py-20 sm:py-24 border-t border-gray-200">
      <div className="container-wide">
        <h2 className="font-heading text-[28px] sm:text-[32px] text-center mb-12 tracking-tight">
          Explore More Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {displayCategories.map((category) => (
            <CategoryCard
              key={category.slug}
              slug={category.slug}
              displayName={category.displayName}
              imageUrl={category.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}