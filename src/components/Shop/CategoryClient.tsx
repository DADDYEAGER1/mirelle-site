'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { CategoryData, Product } from '@/types/shop';
import CategoryHero from '@/components/Shop/CategoryHero';
import CategoryHeaderBar from '@/components/Shop/CategoryHeaderBar';
import ProductCard from '@/components/Shop/ProductCard';
import Pagination from '@/components/Shop/Pagination';
import ExploreCategoriesGrid from '@/components/Shop/ExploreCategoriesGrid';

interface CategoryClientProps {
  categorySlug: string;
  categoryData: CategoryData;
  products: Product[];
  relatedCategories: Array<{
    slug: string;
    displayName: string;
    imageUrl: string;
  }>;
}

const ITEMS_PER_PAGE = 20;

export default function CategoryClient({
  categorySlug,
  categoryData,
  products,
  relatedCategories,
}: CategoryClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination values FIRST
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  // Carousel images (first 8 products)
  const carouselImages = products.slice(0, 8).map(product => ({
    url: product.image,
    name: product.name,
  }));

  // Get page from URL on mount
  useEffect(() => {
    const pageParam = searchParams.get('page');
    if (pageParam) {
      const page = parseInt(pageParam, 10);
      if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
      }
    }
  }, [searchParams, totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    
    // Update URL with ?page=X
    const url = new URL(window.location.href);
    url.searchParams.set('page', page.toString());
    router.push(url.pathname + url.search, { scroll: false });

    // Scroll to top of products
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <CategoryHero
        title={categoryData.displayName}
        description={categoryData.description}
        carouselImages={carouselImages}
      />

      {/* Header Bar */}
      <CategoryHeaderBar
        categoryName={categoryData.displayName}
        totalItems={products.length}
      />

      {/* Products Grid */}
      <section className="container-wide py-20 sm:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              imageAlt={product.imageAlt}
              brand={product.brand}
              categorySlug={categorySlug}
              productSlug={product.slug}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </section>

      {/* Explore More Collections */}
      <ExploreCategoriesGrid categories={relatedCategories} />
    </div>
  );
}