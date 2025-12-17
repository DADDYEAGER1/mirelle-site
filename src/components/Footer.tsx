'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Accordion Section Component for Mobile
function AccordionSection({ 
  title, 
  children, 
  defaultOpen = false 
}: { 
  title: string; 
  children: React.ReactNode; 
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-700 lg:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left lg:cursor-default"
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-base uppercase tracking-wider">
          {title}
        </h3>
        <svg
          className={`w-5 h-5 transition-transform duration-200 lg:hidden ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:block lg:max-h-none ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
       {/* Logo & Description - Always Visible */}
        <div className="mb-8 pb-6 border-b border-gray-700">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <Image 
              src="/logo.png" 
              alt="Mirellé Inspo" 
              width={32} 
              height={32}
              className="lg:w-10 lg:h-10"
            />
            <span className="font-serif text-xl lg:text-2xl font-bold">Mirellé Inspo</span>
          </Link>

          <p className="text-gray-400 text-sm lg:text-base max-w-md leading-relaxed">
            Your trusted source for curated nail trends, honest product reviews, and artist discoveries. 
            We find the best so you don't have to scroll for hours.
          </p>
        </div>

        {/* Social Icons - Always Visible on Mobile */}
        <div className="mb-6 pb-6 border-b border-gray-700">
          <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-5">
            <a 
              href="https://in.pinterest.com/mirelle_inspo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Pinterest"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com/mirelle_inspo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/mirelleinspo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Collapsible Sections - Mobile / Multi-Column Desktop */}
        <div className="lg:grid lg:grid-cols-5 lg:gap-8">
          
          {/* Explore Section */}
          <AccordionSection title="Explore">
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/topics" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Topics
                </Link>
              </li>
              <li>
                <Link href="/inspo" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Inspo Gallery
                </Link>
              </li>
            </ul>
          </AccordionSection>

          {/* Inspo Section (NEW) */}
          <AccordionSection title="Inspo Gallery">
            <ul className="space-y-3">
              <li>
                <Link href="/inspo/chrome-metallic-winter-nails" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Chrome Metallic
                </Link>
              </li>
              <li>
                <Link href="/inspo/burgundy-wine-winter-nails" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Burgundy Wine
                </Link>
              </li>
              <li>
                <Link href="/inspo/chocolate-brown-winter-nails" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Chocolate Brown
                </Link>
              </li>
              <li>
                <Link href="/inspo/velvet-cat-eye-winter-nails" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Velvet Cat Eye
                </Link>
              </li>
            </ul>
          </AccordionSection>

          {/* Popular Topics Section */}
          <AccordionSection title="Popular Topics">
            <ul className="space-y-3">
              <li>
                <Link href="/topics/seasonal-trends" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Seasonal Trends
                </Link>
              </li>
              <li>
                <Link href="/topics/nail-care-guide" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Nail Care Guide
                </Link>
              </li>
              <li>
                <Link href="/topics/at-home-hacks" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  At-Home Hacks
                </Link>
              </li>
              <li>
                <Link href="/topics/modern-women" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Modern Women
                </Link>
              </li>
            </ul>
          </AccordionSection>

          {/* Company Section */}
          <AccordionSection title="Company">
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/work-with-us" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Work With Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </AccordionSection>

          {/* Trending Topics Section (UPDATED) */}
          <AccordionSection title="Trending Topics">
            <ul className="space-y-3">
              <li>
                <Link href="/blog/christmas-nail-designs-2025" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Christmas Nail Designs
                </Link>
              </li>
              <li>
                <Link href="/blog/short-christmas-nails-2025" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Short Christmas Nails
                </Link>
              </li>
              <li>
                <Link href="/blog/candy-cane-christmas-nails-2025-sweet-holiday-designs" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Candy Cane Designs
                </Link>
              </li>
              <li>
                <Link href="/blog/santa-reindeer-gingerbread-christmas-nails-2025-character-nail-art" className="text-gray-400 hover:text-white transition-colors text-sm block">
                  Character Nail Art
                </Link>
              </li>
            </ul>
          </AccordionSection>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center lg:text-left">
            <p className="text-gray-500 text-xs lg:text-sm">
              © {currentYear} Mirellé Inspo. All rights reserved. | Curated Nail Trends & Product Reviews
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Made with 💅 for nail enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
