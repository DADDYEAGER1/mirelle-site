// src/components/Inspo/CategoryClient.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import CategoryHero from './CategoryHero';
import FilterBar from './FilterBar';
import MasonryGallery from './MasonryGallery';
import DesignTips from './DesignTips';
import FAQSection from './FAQSection';
import ShopCTA from './ShopCTA';
import RelatedContent from './RelatedContent';
import type { DesignData, DesignImage } from '@/types/inspo';
import { filterImages, sortImages, type FilterState, type SortOption } from '@/lib/inspoFilters';

interface CategoryClientProps {
  designData: DesignData;
  initialImages: DesignImage[];
  relatedDesigns: DesignData[];
  faqs: Array<{ question: string; answer: string }>;
}

export default function CategoryClient({
  designData,
  initialImages,
  relatedDesigns,
  faqs,
}: CategoryClientProps) {
  const [filters, setFilters] = useState<FilterState>({});
  const [sortBy, setSortBy] = useState<SortOption>('trending');
  const [selectedImage, setSelectedImage] = useState<DesignImage | null>(null);

  // Apply filters and sorting
  let displayedImages = filterImages(initialImages, filters);
  displayedImages = sortImages(displayedImages, sortBy);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value === 'all' ? undefined : value }));
  };

  const clearFilters = () => {
    setFilters({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white">
      {/* Hero Section */}
      <CategoryHero designData={designData} imageCount={initialImages.length} />

      {/* Filter Bar */}
      <FilterBar
        activeFilters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={clearFilters}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalResults={displayedImages.length}
      />

      {/* Gallery */}
      <MasonryGallery images={displayedImages} onImageClick={setSelectedImage} />

      {/* Design Tips Section */}
      {designData.styleGuide && designData.styleGuide.length >= 3 && (
        <DesignTips
          categoryName={designData.displayName}
          tips={[
            {
              icon: '🎯',
              title: designData.styleGuide[0] || 'Application Technique',
              description: 'Master the fundamentals with proper nail prep, base coat application, and curing times for long-lasting results.',
            },
            {
              icon: '💡',
              title: designData.styleGuide[1] || 'Color Selection',
              description: 'Choose complementary shades that enhance your skin tone and match your style preferences for stunning results.',
            },
            {
              icon: '⭐',
              title: designData.styleGuide[2] || 'Maintenance Tips',
              description: 'Keep your manicure looking fresh with daily cuticle oil, gentle care, and touch-ups when needed.',
            },
          ]}
        />
      )}

      {/* About This Style Section */}
      {designData.styleGuide && designData.styleGuide.length > 0 && (
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <details className="group bg-gradient-to-br from-cream-50 to-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100">
              <summary className="cursor-pointer px-8 py-6 flex justify-between items-center hover:bg-cream-50 transition-colors list-none">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-burgundy-100 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">💡</span>
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl font-bold text-gray-900">
                      About {designData.displayName}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      Everything you need to know about this style
                    </p>
                  </div>
                </div>

                <svg
                  className="w-7 h-7 text-burgundy-600 transform group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="px-8 pb-8 space-y-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl font-medium text-gray-900 mb-4">
                    {designData.description}
                  </p>

                  <h3 className="font-serif text-2xl font-bold text-gray-900 mt-6 mb-4">
                    Style Guidelines
                  </h3>
                  <ul className="space-y-3">
                    {designData.styleGuide.map((guide, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-burgundy-600 mt-1 font-bold text-lg">✓</span>
                        <span className="text-lg">{guide}</span>
                      </li>
                    ))}
                  </ul>

                  {designData.perfectFor && designData.perfectFor.length > 0 && (
                    <>
                      <h3 className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4">
                        Perfect For
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {designData.perfectFor.map((occasion) => (
                          <span
                            key={occasion}
                            className="px-4 py-2 bg-burgundy-100 text-burgundy-800 rounded-full text-base font-semibold"
                          >
                            {occasion}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </details>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <FAQSection
          title={`${designData.displayName} FAQ`}
          description={`Common questions about ${designData.displayName.toLowerCase()}`}
          faqs={faqs}
        />
      )}

      {/* Shop CTA */}
      <ShopCTA categoryName={designData.displayName} categorySlug={designData.slug} />

      {/* Related Content */}
      <RelatedContent categorySlug={designData.slug} />

      {/* Related Categories */}
      {relatedDesigns.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-white to-cream-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Explore Similar Styles
              </h2>
              <p className="text-xl text-gray-600">
                You might also love these design categories
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedDesigns.map((related) => (
                <Link key={related.slug} href={`/inspo/${related.slug}`}>
                  <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-[350px]">
                    <div className="absolute inset-0">
                      <img
                        src={related.heroImage}
                        alt={related.displayName}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>

                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <span className="inline-block w-fit px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold mb-3">
                        View Gallery
                      </span>

                      <h3 className="font-serif text-3xl font-bold text-white mb-2 group-hover:text-cream-100 transition-colors">
                        {related.displayName}
                      </h3>

                      <p className="text-white/90 text-sm line-clamp-2 mb-3">
                        {related.description}
                      </p>

                      <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        Explore
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-5xl hover:text-burgundy-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <div className="max-w-5xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="bg-white/10 backdrop-blur-md p-6 mt-4 rounded-2xl border border-white/20">
              <p className="text-white text-xl font-medium mb-3">{selectedImage.alt}</p>
              {selectedImage.pinterestUrl && (
                <a
                  href={selectedImage.pinterestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-burgundy-300 hover:text-burgundy-200 text-base font-semibold"
                >
                  View on Pinterest
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
