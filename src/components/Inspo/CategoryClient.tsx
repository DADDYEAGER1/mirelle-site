// src/components/Inspo/CategoryClient.tsx
'use client';

import { useState } from 'react';
import type { DesignData, DesignImage } from '@/types/inspo';
import CategoryHero from './CategoryHero';
import FilterBar from './FilterBar';
import MasonryGallery from './MasonryGallery';
import ImageModal from './ImageModal';
import AboutSection, { generateCategoryAbout } from './AboutSection';
import FAQAccordion, { generateCategoryFAQs } from './FAQAccordion';
import RelatedContent from './RelatedContent';
import { filterImages } from '@/lib/inspoFilters';

interface CategoryClientProps {
  designData: DesignData;
  initialImages: DesignImage[];
  relatedDesigns: DesignData[];
  faqs?: Array<{ question: string; answer: string }>;
}

export default function CategoryClient({
  designData,
  initialImages,
  relatedDesigns,
  faqs: customFaqs,
}: CategoryClientProps) {
  const [images, setImages] = useState<DesignImage[]>(initialImages);
  const [filter, setFilter] = useState<'all' | 'premium' | string>('all');
  const [selectedImage, setSelectedImage] = useState<DesignImage | null>(null);

  // Handle filter changes
  const handleFilterChange = (newFilter: 'all' | 'premium' | string) => {
    setFilter(newFilter);
    const filtered = filterImages(initialImages, newFilter);
    setImages(filtered);
  };

  // Handle image navigation in modal
  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    let newIndex: number;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    } else {
      newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(images[newIndex]);
  };

  // Generate content
  const aboutContent = generateCategoryAbout(designData.slug);
  const faqs = customFaqs || generateCategoryFAQs(designData.slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white">
      {/* Hero Section */}
      <CategoryHero designData={designData} imageCount={initialImages.length} />

      {/* Stats Bar */}
      <section className="bg-white border-y border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent/80 mb-1">
                {initialImages.length}+
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Designs
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent/80 mb-1">
                50K+
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Saves
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent/80 mb-1">
                4.9★
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Rating
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent/80 mb-1">
                Daily
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Updates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <FilterBar
        currentFilter={filter}
        onFilterChange={handleFilterChange}
        totalImages={initialImages.length}
        filteredCount={images.length}
      />

      {/* Masonry Gallery */}
      <MasonryGallery
        images={images}
        onImageClick={setSelectedImage}
      />

      {/* About Section */}
      <AboutSection
        title={`About ${designData.displayName}`}
        content={aboutContent}
      />

      {/* Perfect For Section */}
      {designData.perfectFor && designData.perfectFor.length > 0 && (
        <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perfect For
              </h2>
              <p className="text-xl text-gray-600">
                Ideal occasions and settings for {designData.displayName.toLowerCase()}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {designData.perfectFor.map((occasion, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-3">{designData.emojis[index % designData.emojis.length]}</div>
                  <div className="font-bold text-gray-900">{occasion}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Style Guide */}
      {designData.styleGuide && designData.styleGuide.length > 0 && (
        <section className="bg-white py-16 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pro Tips & Style Guide
              </h2>
              <p className="text-xl text-gray-600">
                Expert advice for achieving perfect {designData.displayName.toLowerCase()}
              </p>
            </div>
            
            <div className="space-y-4">
              {designData.styleGuide.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gradient-to-r from-accent/5 to-transparent rounded-2xl border-l-4 border-accent/80"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent/80 font-bold">
                    {index + 1}
                  </div>
                  <p className="flex-1 text-gray-700 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <FAQAccordion faqs={faqs} />

      {/* Related Content */}
      {relatedDesigns.length > 0 && (
        <section className="bg-gradient-to-br from-cream-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                You Might Also Love
              </h2>
              <p className="text-xl text-gray-600">
                Explore related nail design styles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedDesigns.map((design) => (
                <a
                  key={design.slug}
                  href={`/inspo/${design.slug}`}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-[400px]"
                >
                  <img
                    src={design.heroImage}
                    alt={design.displayName}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-accent/80 transition-colors">
                      {design.displayName}
                    </h3>
                    <p className="text-white/90 text-sm line-clamp-2 mb-3">
                      {design.description}
                    </p>
                    <div className="flex items-center text-white font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                      Explore Collection
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-burgundy-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="inline-block mb-4">
              <span className="text-5xl">{designData.emojis[0]}</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Get Fresh Nail Inspiration Weekly
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join 100k+ nail enthusiasts receiving trending designs every week
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-accent/80 focus:outline-none text-gray-900"
              />
              <button className="px-8 py-4 bg-accent/80 text-white rounded-full font-semibold hover:bg-accent transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe anytime. Your email is safe with us.
            </p>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        images={images}
        onClose={() => setSelectedImage(null)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
