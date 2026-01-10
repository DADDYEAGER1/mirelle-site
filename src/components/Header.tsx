'use client';
import { useState } from 'react';
import Link from 'next/link';

const ARTICLES_LINKS = [
  { label: "Valentine's Trends", href: '/blog/valentine-nails-2026' },
  { label: 'Younger-Looking Hands', href: '/blog/nail-polish-colors-make-hands-look-younger' },
  { label: 'Blooming Gel Nails', href: '/blog/blooming-gel-nails' },
  { label: 'Tomato Red Valentine Nails', href: '/blog/tomato-red-valentine-nails' },
  { label: 'Browse All Articles', href: '/blog' },
];

const SHOP_LINKS = [
  // { label: 'Valentine Designs', href: '/shop/valentine' },
  { label: 'Winter Designs', href: '/shop/winter' },
  { label: 'Trendy Collections', href: '/shop/trendy' },
  { label: 'Fall Styles', href: '/shop/fall' },
  { label: 'View All Collections', href: '/shop' },
];

const DESIGNS_LINKS = [
  { label: 'Valentine Nails 2026', href: '/inspo/valentine-nails-2026' },
  { label: 'French Tip Nails 2026', href: '/inspo/french-tip-nails-2026' },
  { label: 'Almond Nails 2026', href: '/inspo/almond-nails-2026' },
  { label: 'Coffin Ballerina Nails 2026', href: '/inspo/coffin-ballerina-nails-2026' },
  { label: 'View All Collections', href: '/inspo' },
];

const LONG_READS_LINKS = [
  { label: 'Seasonal Trends', href: '/topics/seasonal-trends' },
  { label: 'Nail Care Guide', href: '/topics/nail-care-guide' },
  { label: 'Nail Art Guide', href: '/topics/nail-art-guides' },
  { label: 'Professional Nails', href: '/topics/modern-women' },
  { label: 'Browse All Long Reads', href: '/topics' },
];

// Mobile Dropdown Component
function MobileDropdown({ 
  title, 
  links,
  isOpen,
  onToggle 
}: { 
  title: string; 
  links: Array<{ label: string; href: string }>;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        style={{ fontFamily: 'General Sans, sans-serif' }}
        className="text-xs tracking-wider uppercase text-[#f9fafb] hover:opacity-70 transition-opacity flex items-center gap-1"
      >
        {title}
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 z-[100]' : 'opacity-0 pointer-events-none -z-10'
        }`}
        onClick={onToggle}
      />
      {/* Dropdown with Animation */}
      <div 
        className={`fixed left-0 right-0 bg-[#252220] border-b border-[#f9fafb]/20 shadow-2xl transition-all duration-500 ease-out ${
          isOpen 
            ? 'opacity-100 translate-y-0 z-[101]' 
            : 'opacity-0 -translate-y-4 pointer-events-none -z-10'
        }`}
        style={{ top: '7.5rem' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onToggle}
                style={{ fontFamily: 'General Sans, sans-serif' }}
                className="block py-3 text-base text-[#f9fafb] hover:opacity-70 hover:pl-2 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="bg-[#252220]">
      {/* Desktop Header */}
      <div className="hidden md:block">
        {/* Top Row - Newsletter, Work With Us */}
        <div className="border-b border-[#f9fafb]/20">
          <div className="container-standard mx-auto px-16">
            <div className="flex justify-center items-center h-16 relative">
              {/* Brand - Centered */}
              <Link href="/" className="flex items-center">
                <span 
                  data-logo="true" 
                  style={{ fontFamily: 'Larken, Georgia, serif' }} 
                  className="text-3xl font-bold text-[#f9fafb]"
                >
                  Mirellé
                </span>
              </Link>

              {/* Right Links */}
              <div className="flex items-center gap-6 absolute right-0">
                <a 
                  href="https://mirelleinspo.com/subscribe" 
                  style={{ fontFamily: 'General Sans, sans-serif' }}
                  className="text-xs tracking-widest uppercase text-[#f9fafb] hover:opacity-70 transition-opacity border border-[#f9fafb] px-4 py-2"
                >
                  NEWSLETTER
                </a>
                <Link 
                  href="/work-with-us"
                  style={{ fontFamily: 'General Sans, sans-serif' }}
                  className="text-xs tracking-widest uppercase text-[#f9fafb] hover:opacity-70 transition-opacity"
                >
                  WORK WITH US
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Main Navigation Links */}
        <nav className="border-b border-[#f9fafb]/20">
          <div className="container-standard mx-auto px-16">
            <div className="flex justify-center items-center h-12 gap-10">
              
              <Link 
                href="/about"
                style={{ fontFamily: 'General Sans, sans-serif' }}
                className="text-sm tracking-wider uppercase text-[#f9fafb] hover:opacity-70 transition-opacity"
              >
                ABOUT
              </Link>

              {/* Articles Dropdown */}
              <div className="relative group">
                <Link 
                  href="/blog"
                  style={{ fontFamily: 'General Sans, sans-serif' }}
                  className="text-sm tracking-wider uppercase text-[#f9fafb] hover:opacity-70 transition-opacity"
                >
                  ARTICLES
                </Link>
                <div className="fixed left-0 right-0 top-[7.5rem] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-out z-50">
                  <div className="bg-[#252220] border-b border-[#f9fafb]/20 shadow-2xl">
                    <div className="max-w-7xl mx-auto px-16 py-12">
                      <div className="space-y-1">
                        {ARTICLES_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            style={{ fontFamily: 'General Sans, sans-serif' }}
                            className="block py-3 text-lg text-[#f9fafb] hover:opacity-70 hover:pl-2 transition-all duration-300"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shop Dropdown */}
              <div className="relative group">
                <Link 
                  href="/shop"
                  style={{ fontFamily: 'General Sans, sans-serif' }}
                  className="text-sm tracking-wider uppercase text-[#f9fafb] hover:opacity-70 transition-opacity"
                >
                  SHOP
                </Link>
                <div className="fixed left-0 right-0 top-[7.5rem] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-out z-50">
                  <div className="bg-[#252220] border-b border-[#f9fafb]/20 shadow-2xl">
                    <div className="max-w-7xl mx-auto px-16 py-12">
                      <div className="space-y-1">
                        {SHOP_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            style={{ fontFamily: 'General Sans, sans-serif' }}
                            className="block py-3 text-lg text-[#f9fafb] hover:opacity-70 hover:pl-2 transition-all duration-300"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Designs Dropdown */}
              <div className="relative group">
                <Link 
                  href="/inspo"
                  style={{ fontFamily: 'General Sans, sans-serif' }}
                  className="text-sm tracking-wider uppercase text-[#f9fafb] hover:opacity-70 transition-opacity"
                >
                  DESIGNS
                </Link>
                <div className="fixed left-0 right-0 top-[7.5rem] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-out z-50">
                  <div className="bg-[#252220] border-b border-[#f9fafb]/20 shadow-2xl">
                    <div className="max-w-7xl mx-auto px-16 py-12">
                      <div className="space-y-1">
                        {DESIGNS_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            style={{ fontFamily: 'General Sans, sans-serif' }}
                            className="block py-3 text-lg text-[#f9fafb] hover:opacity-70 hover:pl-2 transition-all duration-300"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Long Reads Dropdown */}
              <div className="relative group">
                <Link 
                  href="/topics"
                  style={{ fontFamily: 'General Sans, sans-serif' }}
                  className="text-sm tracking-wider uppercase text-[#f9fafb] hover:opacity-70 transition-opacity"
                >
                  LONG READS
                </Link>
                <div className="fixed left-0 right-0 top-[7.5rem] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-out z-50">
                  <div className="bg-[#252220] border-b border-[#f9fafb]/20 shadow-2xl">
                    <div className="max-w-7xl mx-auto px-16 py-12">
                      <div className="space-y-1">
                        {LONG_READS_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            style={{ fontFamily: 'General Sans, sans-serif' }}
                            className="block py-3 text-lg text-[#f9fafb] hover:opacity-70 hover:pl-2 transition-all duration-300"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts - No Dropdown */}
              {/* <Link 
                href="/posts"
                style={{ fontFamily: 'General Sans, sans-serif' }}
                className="text-sm tracking-wider uppercase text-[#f9fafb] hover:opacity-70 transition-opacity"
              >
                POSTS
              </Link> */}
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        {/* Top Row - Brand + Newsletter & Work With Us */}
        <div className="border-b border-[#f9fafb]/20">
          <div className="px-6 h-16 flex items-center justify-between">
            {/* Brand */}
            <Link href="/" className="flex items-center">
              <span style={{ fontFamily: 'Larken, Georgia, serif' }} className="text-2xl font-bold text-[#f9fafb]">
                Mirellé
              </span>
            </Link>

            {/* Right Side - Newsletter Box */}
            <div className="flex items-center gap-3">
              <a 
                href="https://mirelleinspo.com/subscribe"
                style={{ fontFamily: 'General Sans, sans-serif' }}
                className="text-[10px] tracking-wider uppercase text-[#f9fafb] hover:opacity-70 transition-opacity border border-[#f9fafb] px-3 py-1.5"
              >
                NEWSLETTER
              </a>
              <Link 
                href="/work-with-us"
                style={{ fontFamily: 'General Sans, sans-serif' }}
                className="text-[10px] tracking-wider uppercase text-[#f9fafb] hover:opacity-70 transition-opacity"
              >
                WORK WITH US
              </Link>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Navigation Row */}
        <div className="border-b border-[#f9fafb]/20 overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 px-6 h-12 items-center whitespace-nowrap">
            <Link 
              href="/about"
              style={{ fontFamily: 'General Sans, sans-serif' }}
              className="text-xs tracking-wider uppercase text-[#f9fafb] hover:opacity-70 transition-opacity"
            >
              ABOUT
            </Link>
            
            <MobileDropdown
              title="ARTICLES"
              links={ARTICLES_LINKS}
              isOpen={openDropdown === 'articles'}
              onToggle={() => toggleDropdown('articles')}
            />
            
            <MobileDropdown
              title="SHOP"
              links={SHOP_LINKS}
              isOpen={openDropdown === 'shop'}
              onToggle={() => toggleDropdown('shop')}
            />
            
            <MobileDropdown
              title="DESIGNS"
              links={DESIGNS_LINKS}
              isOpen={openDropdown === 'designs'}
              onToggle={() => toggleDropdown('designs')}
            />
            
            <MobileDropdown
              title="LONG READS"
              links={LONG_READS_LINKS}
              isOpen={openDropdown === 'longreads'}
              onToggle={() => toggleDropdown('longreads')}
            />
            
            {/* <Link 
              href="/posts"
              style={{ fontFamily: 'General Sans, sans-serif' }}
              className="text-xs tracking-wider uppercase text-[#f9fafb] hover:opacity-70 transition-opacity"
            >
              POSTS
            </Link> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
}