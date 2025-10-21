'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BLOG_LINKS = [
  { label: 'Latest Posts', href: '/blog' },
  { label: 'Seasonal Trends', href: '/topics/seasonal-trends' },
  { label: 'Browse All Topics', href: '/topics' },
];

const SHOP_LINKS = [
  { label: 'Christmas Nails', href: '/shop/christmas' },
  { label: 'Winter Designs', href: '/shop/winter' },
  { label: 'Halloween Styles', href: '/shop/halloween' },
  { label: 'Trendy Collections', href: '/shop/trendy' },
  { label: 'View All Collections', href: '/shop' },
];

const TOPICS_LINKS = [
  { label: 'Seasonal Trends', href: '/topics/seasonal-trends' },
  { label: 'Nail Care Guide', href: '/topics/nail-care-guide' },
  { label: 'At-Home Hacks', href: '/topics/at-home-hacks' },
  { label: 'Modern Women', href: '/topics/modern-women' },
  { label: 'Browse All Topics', href: '/topics' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    blog: false,
    shop: false,
    topics: false,
  });

  const toggleMobileDropdown = (key: 'blog' | 'shop' | 'topics') => {
    setMobileDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blush-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="Mirelle Inspo" 
              width={50} 
              height={50}
              className="h-12 w-auto"
            />
            <span className="font-serif text-2xl font-bold text-charcoal-800">
              Mirellé
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              Home
            </Link>

            {/* Blog Dropdown */}
            <div className="relative group">
              <button className="text-charcoal-700 hover:text-blush-400 transition-colors font-medium flex items-center gap-1">
                Blog
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out">
                <div className="bg-white rounded-lg shadow-editorial border border-charcoal-100 py-2">
                  {BLOG_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-[15px] text-charcoal-700 hover:text-blush-400 hover:bg-editorial-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Shop Dropdown */}
            <div className="relative group">
              <button className="text-charcoal-700 hover:text-blush-400 transition-colors font-medium flex items-center gap-1">
                Shop
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out">
                <div className="bg-white rounded-lg shadow-editorial border border-charcoal-100 py-2">
                  {SHOP_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-[15px] text-charcoal-700 hover:text-blush-400 hover:bg-editorial-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Topics Dropdown */}
            <div className="relative group">
              <button className="text-charcoal-700 hover:text-blush-400 transition-colors font-medium flex items-center gap-1">
                Topics
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out">
                <div className="bg-white rounded-lg shadow-editorial border border-charcoal-100 py-2">
                  {TOPICS_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-[15px] text-charcoal-700 hover:text-blush-400 hover:bg-editorial-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* <Link href="/brands" className="text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              Brands
            </Link> */}
            <Link href="/about" className="text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://in.pinterest.com/mirelle_inspo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal-600 hover:text-blush-400 transition-colors"
              aria-label="Pinterest"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com/mirelle_inspo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal-600 hover:text-blush-400 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://facebook.com/mirelleinspo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal-600 hover:text-blush-400 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-charcoal-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-blush-200">
            <Link href="/" className="block text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              Home
            </Link>

            {/* Blog Accordion */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('blog')}
                className="w-full flex items-center justify-between text-charcoal-700 hover:text-blush-400 transition-colors font-medium"
              >
                Blog
                <svg className={`w-4 h-4 transition-transform ${mobileDropdowns.blog ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdowns.blog && (
                <div className="mt-2 ml-4 space-y-2">
                  {BLOG_LINKS.map((link) => (
                    <Link key={link.href} href={link.href} className="block text-charcoal-600 hover:text-blush-400 transition-colors text-sm">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Shop Accordion */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('shop')}
                className="w-full flex items-center justify-between text-charcoal-700 hover:text-blush-400 transition-colors font-medium"
              >
                Shop
                <svg className={`w-4 h-4 transition-transform ${mobileDropdowns.shop ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdowns.shop && (
                <div className="mt-2 ml-4 space-y-2">
                  {SHOP_LINKS.map((link) => (
                    <Link key={link.href} href={link.href} className="block text-charcoal-600 hover:text-blush-400 transition-colors text-sm">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Topics Accordion */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('topics')}
                className="w-full flex items-center justify-between text-charcoal-700 hover:text-blush-400 transition-colors font-medium"
              >
                Topics
                <svg className={`w-4 h-4 transition-transform ${mobileDropdowns.topics ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdowns.topics && (
                <div className="mt-2 ml-4 space-y-2">
                  {TOPICS_LINKS.map((link) => (
                    <Link key={link.href} href={link.href} className="block text-charcoal-600 hover:text-blush-400 transition-colors text-sm">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/brands" className="block text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              Brands
            </Link>
            <Link href="/about" className="block text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="block text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              Contact
            </Link>
            
            {/* Mobile Social Links */}
            <div className="flex space-x-6 pt-4 border-t border-blush-200">
              <a href="https://in.pinterest.com/mirelle_inspo/" target="_blank" rel="noopener noreferrer" className="text-charcoal-600 hover:text-blush-400">
                Pinterest
              </a>
              <a href="https://instagram.com/mirelle_inspo" target="_blank" rel="noopener noreferrer" className="text-charcoal-600 hover:text-blush-400">
                Instagram
              </a>
              <a href="https://facebook.com/mirelleinspo" target="_blank" rel="noopener noreferrer" className="text-charcoal-600 hover:text-blush-400">
                Facebook
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
