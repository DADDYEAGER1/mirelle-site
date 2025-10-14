'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <Link href="/blog" className="text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/shop" className="text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              shop
            </Link>
            <Link href="/about" className="text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              Contact
            </Link>
            <Link 
              href="/#newsletter" 
              className="text-charcoal-700 hover:text-blush-400 transition-colors font-medium"
            >
              Subscribe
            </Link>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
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
              href="https://x.com/mirelle_inspo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal-600 hover:text-blush-400 transition-colors"
              aria-label="X"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="mailto:team.mirelle@gmail.com" 
              className="text-charcoal-600 hover:text-blush-400 transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
            {/* LinkedIn - Commented out for future use */}
            {/* <a 
              href="https://linkedin.com/company/mirelle-inspo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal-600 hover:text-blush-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a> */}
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
          <div className="md:hidden py-4 space-y-4 border-t border-blush-200">
            <Link href="/" className="block text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/blog" className="block text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/shop" className="block text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              Shop
            </Link>
            <Link href="/about" className="block text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="block text-charcoal-700 hover:text-blush-400 transition-colors font-medium">
              Contact
            </Link>
            <Link href="/#newsletter" className="block text-blush-400 font-semibold">
              Subscribe to Newsletter
            </Link>
            
            {/* Mobile Social Links */}
            <div className="flex space-x-6 pt-4 border-t border-blush-200">
              <a href="https://instagram.com/mirelle_inspo" target="_blank" rel="noopener noreferrer" className="text-charcoal-600">
                Instagram
              </a>
              <a href="https://x.com/mirelle_inspo" target="_blank" rel="noopener noreferrer" className="text-charcoal-600">
                X
              </a>
              <a href="mailto:team.mirelle@gmail.com" className="text-charcoal-600">
                Email
              </a>
              {/* <a href="https://linkedin.com/company/mirelle-inspo" target="_blank" rel="noopener noreferrer" className="text-charcoal-600">
                LinkedIn
              </a> */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
