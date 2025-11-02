'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowDown } from 'lucide-react';
import ProductShowcase from './ProductShowcase';

interface FAQ {
  question: string;
  answer: string;
  keywords?: string[];
}

interface ShopHeroTLDRProps {
  showcaseImages: string[];
  faqs: FAQ[];
}

export default function ShopHeroTLDR({ showcaseImages, faqs }: ShopHeroTLDRProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Header Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
          Shop Press-On Nails
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          60+ curated designs starting at $3.99 • 2-week wear guaranteed • Free shipping on orders $35+ • Easy 5-minute application
        </p>
      </div>

      {/* Moving Product Showcase */}
      <ProductShowcase images={showcaseImages} />

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4 text-base sm:text-lg">
                  {faq.question}
                </span>
                {openFaqIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === index && (
                <div className="px-6 pb-5 pt-2 text-gray-700 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <button
          onClick={scrollToCategories}
          className="group inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Explore Collections
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
