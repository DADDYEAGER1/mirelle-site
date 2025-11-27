// src/components/Shop/ProductPageContent.tsx
'use client';

import { useState } from 'react';
import { ProductPageData } from '@/types/shop';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Star, Package, Truck, Shield, ArrowRight, 
  ChevronDown, ChevronUp, Sparkles, Droplet,
  Clock, RefreshCw, Ruler, Palette, BookOpen, Lightbulb
} from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumbs';
import InternalLinksSection from '@/components/Shop/InternalLinksSection';
import { calculateDiscount } from '@/lib/shopProducts';

interface ProductPageContentProps {
  product: ProductPageData;
  category: string;
  categoryName: string;
  breadcrumbItems: Array<{ label: string; href: string }>;
  relatedProducts?: ProductPageData[];
}

// Specification icon mapping
const specIcons: Record<string, any> = {
  packageContents: Package,
  material: Droplet,
  finish: Sparkles,
  durability: Shield,
  applicationTime: Clock,
  reusable: RefreshCw,
  sizes: Ruler,
  colorPalette: Palette
};

// Specification gradient colors (softer, premium)
const specGradients: Record<string, string> = {
  packageContents: 'from-purple-500/80 to-purple-600/80',
  material: 'from-blue-500/80 to-blue-600/80',
  finish: 'from-pink-500/80 to-pink-600/80',
  durability: 'from-green-500/80 to-green-600/80',
  applicationTime: 'from-orange-500/80 to-orange-600/80',
  reusable: 'from-teal-500/80 to-teal-600/80',
  sizes: 'from-indigo-500/80 to-indigo-600/80',
  colorPalette: 'from-rose-500/80 to-rose-600/80'
};

// Read More Component
function ReadMoreText({ html }: { html: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="relative">
      <div 
        className={`prose prose-lg prose-pink max-w-none transition-all duration-300 ${!isExpanded ? 'line-clamp-5' : ''}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      
      {!isExpanded && (
        <>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
          <button
            onClick={() => setIsExpanded(true)}
            className="mt-2 text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2 transition-all hover:gap-3"
          >
            Read More <ChevronDown className="w-4 h-4" />
          </button>
        </>
      )}
      
      {isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className="mt-4 text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2 transition-all hover:gap-3"
        >
          Show Less <ChevronUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

// FAQ Accordion Component
function FAQAccordion({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-purple-50/30 hover:to-pink-50/30 transition-all min-h-[64px]"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-semibold text-gray-900 pr-4">
              {faq.question}
            </span>
            <ChevronDown 
              className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <div 
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
            aria-hidden={openIndex !== index}
          >
            <p className="px-6 pb-4 text-gray-700 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProductPageContent({
  product,
  category,
  categoryName,
  breadcrumbItems,
  relatedProducts = [],
}: ProductPageContentProps) {
  const discountPercent = calculateDiscount(product.originalPrice, product.price);
  const hasDiscount = discountPercent > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/30 to-white">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Breadcrumb items={breadcrumbItems} currentPage={product.name} />
      </div>

      {/* ========== HERO SECTION ========== */}
      <section className="container mx-auto px-4 pb-12">
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
                  <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                    NEW
                  </span>
                )}
                {product.isTrending && (
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                    TRENDING
                  </span>
                )}
                {hasDiscount && (
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>

              {/* Stock Status Overlay */}
              {product.stockStatus === 'low-stock' && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-orange-50/95 backdrop-blur-sm border border-orange-200 text-orange-800 px-4 py-2 rounded-xl text-sm font-medium text-center shadow-lg">
                    ⚠️ Low Stock - Order Soon!
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
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
              <span className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
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
              className="block w-full bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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

      {/* ========== SPECIFICATIONS (Horizontal Scroll - Glassmorphism) ========== */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <section className="container mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Specifications
          </h2>
          
          {/* Horizontal scrollable container */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {Object.entries(product.specifications).map(([key, value]) => {
                const Icon = specIcons[key] || Package;
                const gradient = specGradients[key] || 'from-gray-500/80 to-gray-600/80';
                
                return (
                  <div
                    key={key}
                    className="group relative bg-white/40 backdrop-blur-md rounded-2xl p-4 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-[280px] flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    }}
                  >
                    {/* Gradient icon background */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Spec Label */}
                    <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    
                    {/* Spec Value */}
                    <p className="text-sm font-medium text-gray-900 leading-snug">
                      {value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Scroll hint */}
          <p className="text-center text-sm text-gray-500 mt-2">
            ← Swipe to see more →
          </p>
        </section>
      )}

      {/* ========== RELATED PRODUCTS (Horizontal Scroll - Premium Hover) ========== */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="container mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You May Also Like
          </h2>
          
          {/* Horizontal scrollable container */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {relatedProducts.map((relatedProduct) => {
                const discount = calculateDiscount(relatedProduct.originalPrice, relatedProduct.price);
                
                return (
                  <Link
                    key={relatedProduct.id}
                    href={`/shop/${category}/${relatedProduct.slug}`}
                    className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-[200px] flex-shrink-0"
                  >
                    {/* Premium gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                    
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.imageAlt || relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1 z-20">
                        {relatedProduct.isNew && (
                          <span className="bg-pink-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
                            NEW
                          </span>
                        )}
                        {relatedProduct.isTrending && (
                          <span className="bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
                            HOT
                          </span>
                        )}
                        {discount > 0 && (
                          <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
                            -{discount}%
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-3 relative z-20">
                      <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2 group-hover:text-purple-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      
                      {/* Rating */}
                      {relatedProduct.rating && (
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-600">{relatedProduct.rating}</span>
                        </div>
                      )}

                      {/* Price */}
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-base font-bold text-pink-600">
                          {relatedProduct.price}
                        </span>
                        {discount > 0 && (
                          <span className="text-xs text-gray-400 line-through">
                            {relatedProduct.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="text-xs text-purple-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        View <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Scroll hint */}
          <p className="text-center text-sm text-gray-500 mt-2">
            ← Swipe to explore more →
          </p>
        </section>
      )}

      {/* ========== EXPLORE MORE COLLECTIONS ========== */}
      {(() => {
        const validCategories = product.relatedCategories?.filter((catSlug) => 
          ['fall', 'christmas', 'winter', 'trendy', 'new-year', 'halloween'].includes(catSlug)
        ) || [];
        
        if (validCategories.length === 0) return null;
        
        const categoryGradients: Record<string, string> = {
          fall: 'from-orange-500 to-red-600',
          christmas: 'from-red-500 to-green-600',
          winter: 'from-blue-400 to-cyan-600',
          trendy: 'from-pink-500 to-purple-600',
          'new-year': 'from-purple-500 to-indigo-600',
          halloween: 'from-orange-600 to-purple-700'
        };
        
        return (
          <section className="container mx-auto px-4 pb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Explore More Collections
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {validCategories.map((catSlug) => (
                <Link
                  key={catSlug}
                  href={`/shop/${catSlug}`}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`aspect-video bg-gradient-to-br ${categoryGradients[catSlug] || 'from-gray-400 to-gray-600'} flex items-center justify-center relative`}>
                    {/* Premium overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    <span className="text-white text-2xl font-bold capitalize relative z-10 group-hover:scale-110 transition-transform">
                      {catSlug.replace('-', ' ')}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}

      {/* ========== INTERNAL LINKS ========== */}
      <InternalLinksSection
        blog={product.internalLinks.blog}
        inspo={product.internalLinks.inspo}
        topic={product.internalLinks.topic}
      />

      {/* ========== ABOUT THIS PRODUCT (Read More) ========== */}
      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About This Product
          </h2>
          <ReadMoreText html={product.fullDescription.html} />
        </div>
      </section>

      {/* ========== FAQs (Accordion) ========== */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={product.faqs} />
          </div>
        </section>
      )}
    </div>
  );
}
