'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-editorial-cream/98 backdrop-blur-md border-b border-editorial-stone">
      <nav className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo - Editorial serif */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image 
              src="/logo.png" 
              alt="Mirelle Inspo" 
              width={50} 
              height={50}
              className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display text-headline-md text-editorial-charcoal tracking-magazine">
              Mirellé
            </span>
          </Link>

          {/* Desktop Navigation - Uppercase, spaced */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              href="/" 
              className="text-editorial-slate hover:text-editorial-charcoal transition-colors duration-300 font-sans text-caption uppercase tracking-widest font-medium"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="text-editorial-slate hover:text-editorial-charcoal transition-colors duration-300 font-sans text-caption uppercase tracking-widest font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/shop" 
              className="text-editorial-slate hover:text-editorial-charcoal transition-colors duration-300 font-sans text-caption uppercase tracking-widest font-medium"
            >
              Shop
            </Link>
            <Link 
              href="/about" 
              className="text-editorial-slate hover:text-editorial-charcoal transition-colors duration-300 font-sans text-caption uppercase tracking-widest font-medium"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-editorial-slate hover:text-editorial-charcoal transition-colors duration-300 font-sans text-caption uppercase tracking-widest font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Social Icons + Subscribe - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="https://in.pinterest.com/mirelle_inspo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-editorial-slate hover:text-editorial-accent transition-colors duration-300"
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
              className="text-editorial-slate hover:text-editorial-accent transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            {/* Subscribe button - minimal editorial style */}
            <Link 
              href="/#newsletter" 
              className="border border-editorial-charcoal text-editorial-charcoal px-6 py-2 font-sans text-caption uppercase tracking-widest font-medium hover:bg-editorial-charcoal hover:text-white transition-all duration-300"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-editorial-charcoal"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-8 space-y-6 border-t border-editorial-stone">
            <Link 
              href="/" 
              className="block text-editorial-slate hover:text-editorial-charcoal transition-colors font-sans text-body uppercase tracking-wide font-medium"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="block text-editorial-slate hover:text-editorial-charcoal transition-colors font-sans text-body uppercase tracking-wide font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/shop" 
              className="block text-editorial-slate hover:text-editorial-charcoal transition-colors font-sans text-body uppercase tracking-wide font-medium"
            >
              Shop
            </Link>
            <Link 
              href="/about" 
              className="block text-editorial-slate hover:text-editorial-charcoal transition-colors font-sans text-body uppercase tracking-wide font-medium"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block text-editorial-slate hover:text-editorial-charcoal transition-colors font-sans text-body uppercase tracking-wide font-medium"
            >
              Contact
            </Link>
            <Link 
              href="/#newsletter" 
              className="block text-editorial-accent font-sans text-body uppercase tracking-wide font-semibold pt-4 border-t border-editorial-stone"
            >
              Subscribe to Newsletter
            </Link>
            
            {/* Mobile Social Links */}
            <div className="flex space-x-8 pt-6">
              <a 
                href="https://in.pinterest.com/mirelle_inspo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-editorial-slate hover:text-editorial-accent font-sans text-body-sm uppercase tracking-wide"
              >
                Pinterest
              </a>
              <a 
                href="https://instagram.com/mirelle_inspo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-editorial-slate hover:text-editorial-accent font-sans text-body-sm uppercase tracking-wide"
              >
                Instagram
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
