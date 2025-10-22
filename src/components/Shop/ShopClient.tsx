'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { CategoryData, Product } from '@/types/shop';
import { calculateDiscount } from '@/lib/shop';

interface ShopClientProps {
  category: CategoryData;
  products: Product[];
}

type FilterType = 'all' | 'new' | 'trending' | 'sale';

export default function ShopClient({ category, products }: ShopClientProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [showAllProducts, setShowAllProducts] = useState(false);

  const initialDisplayCount = 15;

  // Filter products based on active filter
  const filteredProducts = useMemo(() => {
    switch (activeFilter) {
      case 'new':
        return products.filter(p => p.isNew);
      case 'trending':
        return products.filter(p => p.isTrending);
      case 'sale':
        return products.filter(p => p.originalPrice !== p.price);
      case 'all':
      default:
        return products;
    }
  }, [products, activeFilter]);

  // Display products based on "Load More" state
  const displayedProducts = showAllProducts
    ? filteredProducts
    : filteredProducts.slice(0, initialDisplayCount);

  const hasMoreProducts = filteredProducts.length > initialDisplayCount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${category.heroImage})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-r from-${category.gradientFrom} via-${category.gradientVia} to-${category.gradientTo} opacity-80`} />
        
        {/* Floating Emojis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {category.emojis.map((emoji, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-float"
              style={{
                left: `${(i + 1) * 20}%`,
                top: `${20 + (i * 15)}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {category.displayName} {category.year}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl drop-shadow-md">
            {category.description}
          </p>
        </div>
      </section>

      {/* Back to Shop Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/shop"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Shop
        </Link>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {(['all', 'new', 'trending', 'sale'] as FilterType[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter === 'all' ? 'All Products' : filter === 'new' ? 'New Arrivals' : filter === 'trending' ? 'Trending' : 'On Sale'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((product) => {
            const discount = calculateDiscount(product.originalPrice, product.price);
            
            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.description}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                    {product.isTrending && (
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                        TRENDING
                      </span>
                    )}
                    {product.stockStatus === 'low-stock' && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        LOW STOCK
                      </span>
                    )}
                  </div>

                  {/* Discount Badge */}
                  {discount > 0 && (
                    <div className="absolute top-2 right-2">
                      <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                        -{discount}%
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem]">
                    {product.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    {product.originalPrice !== product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="block w-full bg-gray-900 text-white text-center py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    {product.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {hasMoreProducts && !showAllProducts && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllProducts(true)}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              Load More Products ({filteredProducts.length - initialDisplayCount} more)
            </button>
          </div>
        )}

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found for this filter.</p>
          </div>
        )}
      </div>

      {/* Social Proof / Testimonials Section */}
      {category.testimonials.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-md"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&quot;{testimonial.review}&quot;</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.product}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Categories Section */}
      {category.relatedCategories.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Explore More Collections
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.relatedCategories.slice(0, 4).map((relatedSlug) => {
                // Simple display name conversion (capitalize first letter)
                const displayName = relatedSlug
                  .split('-')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');
                
                return (
                  <Link
                    key={relatedSlug}
                    href={`/shop/${relatedSlug}`}
                    className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-4xl">💅</span>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                        {displayName} Nails
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Floating Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
