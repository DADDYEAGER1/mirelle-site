// src/components/Shop/RelatedProductsGrid.tsx
'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/types/shop';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { getRelatedProducts, generateProductSlug, calculateDiscount } from '@/lib/shopProducts';

interface RelatedProductsGridProps {
  category: string;
  productIds: string[];
  title?: string;
}

export default function RelatedProductsGrid({
  category,
  productIds,
  title = 'Related Products',
}: RelatedProductsGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const related = await getRelatedProducts(category, productIds, 5);
      setProducts(related);
      setLoading(false);
    }
    loadProducts();
  }, [category, productIds]);

  if (loading) {
    return (
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-square bg-gray-200 rounded-xl mb-4" />
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (products.length === 0) return null;

  return (
    <section className="container mx-auto px-4 pb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        {title}
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {products.map((product) => {
          const slug = generateProductSlug(product.name);
          const discount = calculateDiscount(product.originalPrice, product.price);
          
          return (
            <Link
              key={product.id}
              href={`/shop/${category}/${slug}`}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.imageAlt || product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.isNew && (
                    <span className="bg-pink-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                      NEW
                    </span>
                  )}
                  {product.isTrending && (
                    <span className="bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                      HOT
                    </span>
                  )}
                  {discount > 0 && (
                    <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                      -{discount}%
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-pink-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                )}

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-pink-600">
                    {product.price}
                  </span>
                  {discount > 0 && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-3 text-sm text-pink-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
