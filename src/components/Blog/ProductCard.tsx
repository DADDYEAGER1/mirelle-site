// src/components/Blog/ProductCard.tsx
'use client';

import { useState } from 'react';

interface ProductCardProps {
  image: string;
  name?: string;      // NEW field
  title?: string;     // OLD field for backward compatibility
  price: string;
  link?: string;      // NEW field
  url?: string;       // OLD field for backward compatibility
  brand?: string;
  layout?: 'grid' | 'featured'; // grid = Image 1 style, featured = Image 2 style
  details?: string[]; // For featured layout only
  align?: 'left' | 'right'; // For featured layout alternating
}

export default function ProductCard({ 
  image, 
  name,
  title,
  price, 
  link,
  url,
  brand,
  layout = 'grid',
  details,
  align = 'left'
}: ProductCardProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Handle backward compatibility - use new fields if available, fallback to old
  const productName = name || title || 'Product';
  const productLink = link || url || '#';

  // Grid Layout (2 or 4 products side by side - Image 1 style)
  if (layout === 'grid') {
    return (
      <>
        <div className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300">
          {/* Product Image - Clickable for zoom */}
          <button
            onClick={() => setIsZoomed(true)}
            className="relative w-full aspect-square overflow-hidden bg-gray-50 cursor-zoom-in"
          >
            <img
              src={image}
              alt={productName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </button>

          {/* Product Info */}
          <div className="p-5 text-center">
            {brand && (
              <p className="font-ui text-xs uppercase tracking-wider text-gray-600 mb-2">
                {brand}
              </p>
            )}
            <h3 className="font-heading text-sm md:text-base mb-3 line-clamp-2 min-h-[2.5rem]" style={{ color: '#252220' }}>
              {productName}
            </h3>
            <p className="font-ui text-lg font-semibold mb-4" style={{ color: '#252220' }}>
              {price}
            </p>
            <a
              href={productLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block w-full py-2.5 px-4 border-2 border-black font-ui text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
              style={{ borderColor: '#252220' }}
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Zoom Modal */}
        {isZoomed && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300"
                aria-label="Close"
              >
                ×
              </button>
              <img
                src={image}
                alt={productName}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </>
    );
  }

  // Featured Layout (single product with details - Image 2 style)
  return (
    <>
      <div className={`flex flex-col ${align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-start`}>
        {/* Product Card */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            {/* Product Image - Clickable for zoom */}
            <button
              onClick={() => setIsZoomed(true)}
              className="relative w-full aspect-square overflow-hidden bg-gray-50 cursor-zoom-in"
            >
              <img
                src={image}
                alt={productName}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </button>

            {/* Product Info */}
            <div className="p-6 text-center">
              {brand && (
                <p className="font-ui text-xs uppercase tracking-wider text-gray-600 mb-2">
                  {brand}
                </p>
              )}
              <h3 className="font-heading text-base md:text-lg mb-4" style={{ color: '#252220' }}>
                {productName}
              </h3>
              <p className="font-ui text-xl font-semibold mb-4" style={{ color: '#252220' }}>
                {price}
              </p>
              <a
                href={productLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block w-full py-3 px-6 border-2 border-black font-ui text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
                style={{ borderColor: '#252220' }}
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>

        {/* Product Details */}
        {details && details.length > 0 && (
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <ul className="space-y-4">
              {details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" style={{ backgroundColor: '#252220' }} />
                  <span className="font-ui text-sm md:text-base leading-relaxed text-gray-700">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}