'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Mirellé Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="font-serif text-2xl font-bold text-charcoal-800">Mirellé</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-charcoal-600 hover:text-blush-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-charcoal-600 hover:text-blush-500 transition-colors">
              About
            </Link>
            <Link href="/topics" className="text-charcoal-600 hover:text-blush-500 transition-colors">
              Topics
            </Link>
            <Link href="/shop" className="text-charcoal-600 hover:text-blush-500 transition-colors">
              Shop
            </Link>
            <Link href="/pinterest" className="text-charcoal-600 hover:text-blush-500 transition-colors">
              Pinterest
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal-600 hover:text-blush-500 transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-charcoal-600 hover:text-blush-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-charcoal-600 hover:text-blush-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/topics"
                className="block px-3 py-2 text-charcoal-600 hover:text-blush-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Topics
              </Link>
              <Link
                href="/shop"
                className="block px-3 py-2 text-charcoal-600 hover:text-blush-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/pinterest"
                className="block px-3 py-2 text-charcoal-600 hover:text-blush-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pinterest
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
