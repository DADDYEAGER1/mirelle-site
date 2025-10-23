'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PinterestOverlay() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait for Pinterest script to load
    const initializePinterest = () => {
      const images = document.querySelectorAll('article img');
      
      images.forEach((img) => {
        // Skip if already processed
        if (img.parentElement?.classList.contains('pinterest-wrapper')) return;
        
        const imgElement = img as HTMLImageElement;
        const src = imgElement.src;
        const alt = imgElement.alt || 'Nail inspiration from Mirelle';
        
        // Get full URLs
        const fullUrl = `https://mirelleinspo.com${pathname}`;
        const fullImageUrl = src.startsWith('http') ? src : `https://mirelleinspo.com${src}`;
        
        // Generate Pinterest board URL from slug
        const slug = pathname.split('/').pop() || '';
        const pinterestBoardUrl = `https://www.pinterest.com/mirelle_inspo/${slug}/`;
        
        const pinterestSaveUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(fullUrl)}&media=${encodeURIComponent(fullImageUrl)}&description=${encodeURIComponent(alt)}`;
        
        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'pinterest-wrapper relative group inline-block w-full my-8';
        
        // Create board link wrapper
        const boardLink = document.createElement('a');
        boardLink.href = pinterestBoardUrl;
        boardLink.target = '_blank';
        boardLink.rel = 'noopener';
        boardLink.className = 'block';
        
        // Create Pinterest save button
        const pinButton = document.createElement('a');
        pinButton.href = pinterestSaveUrl;
        pinButton.target = '_blank';
        pinButton.rel = 'noopener';
        pinButton.setAttribute('data-pin-do', 'buttonPin');
        pinButton.setAttribute('data-pin-tall', 'true');
        pinButton.className = 'absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-red-600 text-white px-3 py-2 rounded-full hover:bg-red-700 text-sm font-medium shadow-lg flex items-center gap-1 z-10';
        pinButton.innerHTML = `
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.713-1.227s.179.34.889.34c1.917 0 3.289-1.755 3.289-4.097 0-1.771-1.5-3.463-3.773-3.463-2.834 0-4.265 2.028-4.265 3.719 0 1.023.388 1.929 1.222 2.27.137.056.21.031.243-.085l.173-.688c.015-.058.007-.112-.041-.167-.282-.337-.463-.772-.463-1.39 0-1.79 1.338-3.393 3.488-3.393 1.902 0 2.948 1.162 2.948 2.713 0 2.042-1.031 3.763-2.562 3.763-.846 0-1.479-.699-1.276-1.559.243-1.027.714-2.135.714-2.877 0-.664-.356-1.218-1.093-1.218-.867 0-1.563.897-1.563 2.099 0 .766.259 1.284.259 1.284s-.888 3.761-1.044 4.421c-.184.779-.027 1.855-.013 1.952C6.157 21.395 2 17.143 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Pin
        `;
        
        // Create CTA text
        const cta = document.createElement('span');
        cta.className = 'text-blue-600 underline mt-2 inline-block text-sm text-center block';
        cta.textContent = 'View More on Pinterest →';
        
        // Wrap image
        const parent = imgElement.parentNode;
        parent?.insertBefore(wrapper, imgElement);
        boardLink.appendChild(imgElement);
        wrapper.appendChild(boardLink);
        wrapper.appendChild(pinButton);
        wrapper.appendChild(cta);
      });

      // Re-initialize Pinterest widgets
      if (window.PinUtils) {
        window.PinUtils.build();
      }
    };

    // Wait for images to load
    setTimeout(initializePinterest, 500);
    
    // Also run when images are added dynamically
    const observer = new MutationObserver(initializePinterest);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

// Type declaration for Pinterest
declare global {
  interface Window {
    PinUtils?: {
      build: () => void;
    };
  }
}
