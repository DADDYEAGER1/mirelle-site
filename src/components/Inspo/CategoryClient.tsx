// src/components/Inspo/CategoryClient.tsx
'use client';

import { useState } from 'react';
import type { DesignData, DesignImage } from '@/types/inspo';
import CategoryHero from './CategoryHero';
import MasonryGallery from './MasonryGallery';
import ImageModal from './ImageModal';

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
}: CategoryClientProps) {
  const [selectedImage, setSelectedImage] = useState<DesignImage | null>(null);

  // Handle image navigation in modal
  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = initialImages.findIndex(img => img.id === selectedImage.id);
    let newIndex: number;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : initialImages.length - 1;
    } else {
      newIndex = currentIndex < initialImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(initialImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Hero Section */}
      <CategoryHero designData={designData} />

      {/* Masonry Gallery */}
      <MasonryGallery
        images={initialImages}
        onImageClick={setSelectedImage}
      />

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        images={initialImages}
        onClose={() => setSelectedImage(null)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}