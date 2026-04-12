'use client';

import { useState } from 'react';
import { ProductPageData } from '@/types/shop';
import Image from 'next/image';
import Link from 'next/link';
import { Package, Truck, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumbs';
import InternalLinksSection from '@/components/Shop/InternalLinksSection';

interface ProductPageContentProps {
  product: ProductPageData;
  category: string;
  categoryName: string;
  breadcrumbItems: Array<{ label: string; href: string }>;
  relatedProducts?: ProductPageData[];
}

// Read More Component
function ReadMoreText({ html }: { html: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="relative">
      <div 
        className={`prose prose-lg max-w-none font-body text-foreground transition-all duration-300 ${!isExpanded ? 'line-clamp-6' : ''}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="mt-4 font-body text-sm text-foreground underline hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          Read More <ChevronDown className="w-4 h-4" />
        </button>
      )}
      
      {isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className="mt-4 font-body text-sm text-foreground underline hover:opacity-70 transition-opacity flex items-center gap-2"
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
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors min-h-[72px]"
          >
            <span className="font-heading text-base text-foreground pr-4">
              {faq.question}
            </span>
            <ChevronDown 
              className={`w-5 h-5 text-foreground flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-5 pt-2 font-body text-foreground/80 leading-relaxed border-t border-gray-200">
              {faq.answer}
            </div>
          )}
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
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <div className="container-standard pt-8 pb-4">
        <Breadcrumb items={breadcrumbItems} currentPage={product.name} />
      </div>

      {/* Hero Section */}
      <section className="container-standard pt-8 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image - SQUARE, NO ROUNDED EDGES */}
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.imageAlt || product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Brand */}
            {product.brand && (
              <p className="font-body text-xs uppercase tracking-widest text-foreground/60">
                {product.brand}
              </p>
            )}

            {/* Title */}
            <h1 className="font-heading text-[36px] sm:text-[42px] leading-tight tracking-tight text-foreground">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="font-product text-3xl font-semibold text-foreground">
                {product.price}
              </span>
              {product.originalPrice !== product.price && (
                <span className="font-product text-xl text-foreground/40 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {/* Short Description */}
            {product.description && (
              <p className="font-body text-base text-foreground/80 leading-relaxed">
                {product.description}
              </p>
            )}

            {/* Trust Signals - BRAND COLORS ONLY */}
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-gray-200">
              <div className="flex flex-col items-center text-center gap-2">
                <Package className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                <span className="font-body text-xs text-foreground/70">24 Pieces</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                <span className="font-body text-xs text-foreground/70">Fast Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Shield className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                <span className="font-body text-xs text-foreground/70">Quality Guarantee</span>
              </div>
            </div>

            {/* CTA Button - BRAND COLORS, ARROW TOP-RIGHT */}
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block w-full border-2 border-foreground text-foreground text-center py-4 font-body text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Shop on Amazon
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Specifications - Horizontal Scroll */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <section className="container-standard pb-16">
          <h2 className="font-heading text-[24px] mb-6 tracking-tight">
            Specifications
          </h2>
          
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-4 min-w-max pb-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="flex-shrink-0 w-[180px] border border-gray-200 p-4"
                >
                  <h3 className="font-product text-[10px] uppercase tracking-wide text-foreground/60 mb-2">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <p className="font-body text-xs text-foreground leading-tight">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* You May Also Like - Center on Desktop */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="container-wide pb-16">
          <h2 className="font-heading text-[24px] mb-8 tracking-tight text-center">
            You May Also Like
          </h2>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-[1400px]">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/shop/${category}/${relatedProduct.slug}`}
                  className="group block"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-3">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.imageAlt || relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>

                  {/* Info */}
                  <div className="space-y-1">
                    <h3 className="font-product text-sm leading-tight text-foreground line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    
                    {/* Yellow Stars */}
                    {relatedProduct.rating && (
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-sm">★</span>
                        <span className="font-body text-xs text-foreground/60">{relatedProduct.rating}</span>
                      </div>
                    )}

                    <p className="font-product text-sm font-semibold text-foreground">
                      {relatedProduct.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Explore More Collections - Center Aligned, Boriboon Font */}
      {(() => {
        const validCategories = product.relatedCategories?.filter((catSlug) => 
          ['fall', 'christmas', 'winter', 'trendy', 'new-year', 'halloween'].includes(catSlug)
        ) || [];
        
        if (validCategories.length === 0) return null;
        
        return (
          <section className="container-wide pb-16 border-t border-gray-200 pt-16">
            <h2 className="font-product text-[24px] mb-8 tracking-tight text-center">
              Explore More Collections
            </h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[900px]">
                {validCategories.slice(0, 3).map((catSlug) => (
                  <Link
                    key={catSlug}
                    href={`/shop/${catSlug}`}
                    className="group relative aspect-[4/5] overflow-hidden bg-gray-200"
                  >
                    <div className="absolute inset-0 bg-foreground/80 group-hover:bg-foreground/70 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-product text-xl text-background capitalize">
                        {catSlug.replace('-', ' ')}
                      </h3>
                      <span className="inline-flex items-center text-background text-sm font-body mt-2 group-hover:gap-2 transition-all">
                        Shop now
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Internal Links */}
      <InternalLinksSection
        blog={product.internalLinks.blog}
        inspo={product.internalLinks.inspo}
        topic={product.internalLinks.topic}
      />

      {/* About This Product */}
      <section className="container-narrow py-16">
        <h2 className="font-heading text-[28px] mb-6 tracking-tight">
          About This Product
        </h2>
        <ReadMoreText html={product.fullDescription.html} />
      </section>

      {/* FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="container-narrow pb-20">
          <h2 className="font-heading text-[28px] mb-8 tracking-tight">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={product.faqs} />
        </section>
      )}
    </div>
  );
}