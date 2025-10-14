'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Section - Larger */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image 
                src="/logo.png" 
                alt="Mirellé" 
                width={50} 
                height={50}
              />
              <span className="font-serif text-2xl font-bold">Mirellé</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Your trusted source for curated nail trends, honest product reviews, 
              and artist discoveries. We find the best so you don't have to scroll for hours.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Stay Inspired</h4>
              <p className="text-gray-400 text-xs mb-3">
                Get weekly trend reports and exclusive finds
              </p>
              <Link 
                href="/#newsletter"
                className="inline-block bg-blush-500 hover:bg-blush-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              >
                Subscribe Now
              </Link>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://in.pinterest.com/mirelle_inspo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blush-400 transition-colors"
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
                  className="text-gray-300 hover:text-blush-400 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/mirelle_inspo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blush-400 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Explore Section */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blush-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-blush-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-gray-300 hover:text-blush-400 transition-colors text-sm">
                  Featured Brands
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-blush-400 transition-colors text-sm">
                  Shop Favorites
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blush-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Trending Topics */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Trending Topics</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/goddess-nails-2025" className="text-gray-300 hover:text-blush-400 transition-colors text-sm">
                  Goddess Nails 2025
                </Link>
              </li>
              <li>
                <Link href="/blog/vampire-nails-2025" className="text-gray-300 hover:text-blush-400 transition-colors text-sm">
                  Vampire Nails 2025
                </Link>
              </li>
              <li>
                <Link href="/blog/easy-halloween-nail-designs" className="text-gray-300 hover:text-blush-400 transition-colors text-sm">
                  Easy Halloween Nail Designs
                </Link>
              </li>
              <li>
                <Link href="/blog/thanksgiving-nails-2025" className="text-gray-300 hover:text-blush-400 transition-colors text-sm">
                  Thanksgiving Nails 2025
                </Link>
              </li>
            </ul>
          </div>

          {/* Partner With Us */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Work With Us</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link 
                  href="/contact?subject=advertise"
                  className="text-gray-300 hover:text-blush-400 transition-colors text-sm flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                  Advertise
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact?subject=featured"
                  className="text-gray-300 hover:text-blush-400 transition-colors text-sm flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Get Featured
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact?subject=partnership"
                  className="text-gray-300 hover:text-blush-400 transition-colors text-sm flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Partnership
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-gray-300 hover:text-blush-400 transition-colors text-sm flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Legal Links - Compact */}
            <div className="pt-4 border-t border-gray-700">
              <h4 className="font-semibold text-xs uppercase tracking-wider mb-3 text-gray-400">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-gray-300 transition-colors text-xs">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-gray-300 transition-colors text-xs">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Mirellé. All rights reserved. | Curated Nail Trends & Product Reviews
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Made with 💅 for nail enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
