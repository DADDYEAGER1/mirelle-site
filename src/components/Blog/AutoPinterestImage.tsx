'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface AutoPinterestImageProps {
  src?: string;
  alt?: string;
  [key: string]: any; // Allow any other props
}

export default function AutoPinterestImage({ src, alt, ...props }: AutoPinterestImageProps) {
  const pathname = usePathname();
  
  if (!src) return null;

  // Construct full URLs automatically
  const fullUrl = `https://mirelleinspo.com${pathname}`;
  const fullImageUrl = src.startsWith('http') ? src : `https://mirelleinspo.com${src}`;
  
  // Auto-generate Pinterest board URL based on the blog category
  // Extract slug from pathname: /blog/christmas-nails-2025 -> christmas-nails-2025
  const slug = pathname.split('/').pop() || '';
  const pinterestBoardUrl = `https://www.pinterest.com/mirelle_inspo/${slug}/`;
  
  const pinterestSaveUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(fullUrl)}&media=${encodeURIComponent(fullImageUrl)}&description=${encodeURIComponent(alt || 'Nail inspiration from Mirelle')}`;

  return (
    <div className="my-8 text-center relative group">
      {/* Link to Pinterest board */}
      <a 
        href={pinterestBoardUrl} 
        target="_blank" 
        rel="noopener" 
        className="block"
      >
        <img 
          src={src} 
          alt={alt || 'Nail art inspiration'} 
          className="rounded-lg shadow-lg mx-auto hover:opacity-90 transition-opacity"
          loading="lazy"
          {...props}
        />
      </a>
      
      {/* Pinterest Save Button (appears on hover) */}
      <a 
        data-pin-do="buttonPin" 
        data-pin-tall="true"
        href={pinterestSaveUrl}
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-red-600 text-white px-3 py-2 rounded-full hover:bg-red-700 text-sm font-medium shadow-lg flex items-center gap-1"
        target="_blank"
        rel="noopener"
        aria-label="Save to Pinterest"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.713-1.227s.179.34.889.34c1.917 0 3.289-1.755 3.289-4.097 0-1.771-1.5-3.463-3.773-3.463-2.834 0-4.265 2.028-4.265 3.719 0 1.023.388 1.929 1.222 2.27.137.056.21.031.243-.085l.173-.688c.015-.058.007-.112-.041-.167-.282-.337-.463-.772-.463-1.39 0-1.79 1.338-3.393 3.488-3.393 1.902 0 2.948 1.162 2.948 2.713 0 2.042-1.031 3.763-2.562 3.763-.846 0-1.479-.699-1.276-1.559.243-1.027.714-2.135.714-2.877 0-.664-.356-1.218-1.093-1.218-.867 0-1.563.897-1.563 2.099 0 .766.259 1.284.259 1.284s-.888 3.761-1.044 4.421c-.184.779-.027 1.855-.013 1.952C6.157 21.395 2 17.143 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        Pin
      </a>
      
      {/* CTA text */}
      <span className="text-blue-600 underline mt-2 inline-block text-sm">
        View More on Pinterest →
      </span>
    </div>
  );
}
