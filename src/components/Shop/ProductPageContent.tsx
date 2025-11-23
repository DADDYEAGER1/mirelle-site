// src/components/Shop/ProductPageContent.tsx
'use client';

import { ProductPageData } from '@/types/shop';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Package, Truck, Shield, ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedProductsGrid from '@/components/Shop/RelatedProductsGrid';
import InternalLinksSection from '@/components/Shop/InternalLinksSection';
import { calculateDiscount } from '@/lib/shopProducts';

interface ProductPageContentProps {
  product: ProductPageData;
  category: string;
  categoryName: string;
  breadcrumbItems: Array<{ label: string; href: string }>;
}

export default function ProductPageContent({
  product,
  category,
  categoryName,
  breadcrumbItems,
}: ProductPageContentProps) {
  const discountPercent = calculateDiscount(product.originalPrice, product.price);
  const hasDiscount = discountPercent > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Breadcrumb items={breadcrumbItems} currentPage={product.name} />
      </div>

      {/* Product Hero Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-xl">
              <Image
                src={product.image}
                alt={product.imageAlt || product.name}
                fill
                className="object-cover"
                priority
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW
                  </span>
                )}
                {product.isTrending && (
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    TRENDING
                  </span>
                )}
                {hasDiscount && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>

              {/* Stock Status */}
              {product.stockStatus === 'low-stock' && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-orange-100 border border-orange-300 text-orange-800 px-4 py-2 rounded-lg text-sm font-medium text-center">
                    ⚠️ Low Stock - Order Soon!
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              {product.rating && product.reviewCount && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating!)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              )}
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-pink-600">
                {product.price}
              </span>
              {hasDiscount && (
                <span className="text-2xl text-gray-400 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {/* Short Description */}
            {product.description && (
              <p className="text-gray-700 text-lg">{product.description}</p>
            )}

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
              <div className="flex flex-col items-center text-center">
                <Package className="w-8 h-8 text-pink-500 mb-2" />
                <span className="text-sm text-gray-600">24 Pieces</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Truck className="w-8 h-8 text-pink-500 mb-2" />
                <span className="text-sm text-gray-600">Fast Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="w-8 h-8 text-pink-500 mb-2" />
                <span className="text-sm text-gray-600">Quality Guarantee</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {product.cta || 'Shop Now'} <ArrowRight className="inline ml-2" />
            </a>

            {/* Stock Status */}
            {product.stockStatus && (
              <div className={`text-center py-2 px-4 rounded-lg ${
                product.stockStatus === 'in-stock'
                  ? 'bg-green-100 text-green-800'
                  : product.stockStatus === 'low-stock'
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.stockStatus === 'in-stock' && '✓ In Stock'}
                {product.stockStatus === 'low-stock' && '⚠️ Low Stock'}
                {product.stockStatus === 'out-of-stock' && '✕ Out of Stock'}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About This Product
          </h2>
          <div
            className="prose prose-lg prose-pink max-w-none"
            dangerouslySetInnerHTML={{ __html: product.fullDescription.html }}
          />
        </div>
      </section>

      {/* Specifications */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Specifications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between p-4 bg-white rounded-lg">
                  <span className="font-medium text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <RelatedProductsGrid
          category={category}
          productIds={product.relatedProducts}
          title="You May Also Like"
        />
      )}

      {/* Internal Links Section */}
      <InternalLinksSection
        blog={product.internalLinks.blog}
        inspo={product.internalLinks.inspo}
        topic={product.internalLinks.topic}
      />

      {/* Related Categories */}
      {product.relatedCategories && product.relatedCategories.length > 0 && (
        <section className="container mx-auto px-4 pb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore More Collections
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {product.relatedCategories.map((catSlug) => (
              <Link
                key={catSlug}
                href={`/shop/${catSlug}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold capitalize">
                    {catSlug.replace('-', ' ')}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {product.faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
