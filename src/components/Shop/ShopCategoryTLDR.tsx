'use client';

import { useState } from 'react';
import Image from 'next/image';

// ✅ NEW: Support both string[] and object[]
interface ImageData {
  src: string;
  alt: string;
}

interface ProductShowcaseProps {
  images: string[] | ImageData[];  // Accept both formats
}

export default function ProductShowcase({ images }: ProductShowcaseProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // ✅ Normalize to object format
  const normalizedImages = images.map((img, index) => 
    typeof img === 'string' 
      ? { src: img, alt: `Press-on nail design ${index + 1}` }
      : img
  );

  // Duplicate images for seamless loop
  const duplicatedImages = [...normalizedImages, ...normalizedImages, ...normalizedImages];

  return (
    <div className="relative w-full overflow-hidden py-12 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Blur fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div
        className={`flex gap-6 ${isPaused ? '' : 'animate-scroll'}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredIndex(null);
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="flex-shrink-0 w-48 h-64 relative group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`w-full h-full rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                hoveredIndex === index ? 'scale-110 shadow-2xl z-20' : 'scale-100'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={533}
                loading="lazy"
                className="w-full h-full object-cover"
                sizes="200px"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
