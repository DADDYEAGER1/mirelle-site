'use client';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import ProductShowcase from './ProductShowcase';
import type { Product } from '@/types/shop';

interface ShopCategoryTLDRProps {
  title: string;
  year: number;
  metaDescription: string;
  showcaseProducts: Product[];
  tldrSummary?: string[];
  tldrKeyTakeaways?: string[];
}

export default function ShopCategoryTLDR({
  title,
  year,
  metaDescription,
  showcaseProducts,
  tldrSummary,
  tldrKeyTakeaways,
}: ShopCategoryTLDRProps) {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const showcaseImages = showcaseProducts.map(p => p.image);

  return (
    <section className="w-full bg-gradient-editorial">
      {/* Hero Title & Meta Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 text-center">
        <h1 className="text-display-lg sm:text-display-xl font-serif font-normal text-editorial-charcoal mb-6 tracking-magazine">
          {title} {year}
        </h1>
        <p className="text-body-xl sm:text-headline-md text-editorial-slate max-w-4xl mx-auto font-light leading-relaxed">
          {metaDescription}
        </p>
      </div>
      import Image from 'next/image';

      {/* Product Showcase */}
      <ProductShowcase images={showcaseImages} />

      {/* TL;DR Quick Overview */}
      {tldrSummary && tldrSummary.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/80 backdrop-blur-sm border-l-4 border-editorial-accent p-6 rounded-lg shadow-editorial">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚡</span>
              <h2 className="text-headline-md font-serif text-editorial-charcoal">
                Quick Collection Overview
              </h2>
            </div>
            
            <div className="space-y-3">
              <ul className="space-y-2">
                {tldrSummary.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-editorial-accent mt-1">✓</span>
                    <span className="text-editorial-slate text-body">{item}</span>
                  </li>
                ))}
              </ul>
              
              {tldrKeyTakeaways && tldrKeyTakeaways.length > 0 && (
                <div className="mt-4 pt-4 border-t border-editorial-stone">
                  <p className="text-editorial-charcoal font-medium mb-2 text-body">
                    Key Features:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tldrKeyTakeaways.map((takeaway, index) => (
                      <span 
                        key={index} 
                        className="bg-editorial-sand text-editorial-charcoal px-3 py-1 rounded-full text-body-sm font-medium"
                      >
                        {takeaway}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-center">
        <button
          onClick={scrollToProducts}
          className="group inline-flex items-center gap-3 bg-editorial-charcoal text-white px-8 py-4 rounded-full font-semibold text-body-lg hover:bg-editorial-slate transition-all duration-300 shadow-editorial hover:shadow-editorial-lg hover:scale-105"
        >
          Shop Collection
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
