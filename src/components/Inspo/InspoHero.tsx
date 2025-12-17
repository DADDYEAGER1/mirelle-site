// src/components/Inspo/InspoHero.tsx
'use client';

import { useEffect, useState } from 'react';

export default function InspoHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-white to-pink-50">
      {/* Animated background waves */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fce7f3" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e9d5ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#d8b4fe" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          
          {/* Wave 1 */}
          <path
            d="M0,400 C480,300 960,500 1440,400 L1440,800 L0,800 Z"
            fill="url(#waveGradient1)"
            className="animate-wave-slow"
          />
          
          {/* Wave 2 */}
          <path
            d="M0,500 C360,400 1080,600 1440,500 L1440,800 L0,800 Z"
            fill="url(#waveGradient2)"
            className="animate-wave-slower"
            style={{
              animationDelay: '0.5s',
            }}
          />
        </svg>
      </div>

      {/* Floating emojis */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] text-4xl md:text-5xl animate-float" style={{ animationDelay: '0s' }}>
          💅
        </div>
        <div className="absolute top-[25%] right-[15%] text-3xl md:text-4xl animate-float" style={{ animationDelay: '0.5s' }}>
          ✨
        </div>
        <div className="absolute bottom-[20%] left-[20%] text-3xl md:text-4xl animate-float" style={{ animationDelay: '1s' }}>
          💖
        </div>
        <div className="absolute top-[40%] right-[10%] text-4xl md:text-5xl animate-float" style={{ animationDelay: '1.5s' }}>
          🎨
        </div>
        <div className="absolute bottom-[30%] right-[25%] text-3xl md:text-4xl animate-float" style={{ animationDelay: '2s' }}>
          💎
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-sm font-semibold text-gray-700">50K+ Saved This Week</span>
        </div>

        {/* Main title */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
          Nail Design
          <br />
          <span className="gradient-text">Inspiration Gallery</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Discover 1000+ curated nail designs from classic elegance to trending styles. Find your perfect manicure inspiration for every occasion.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="#categories"
            className="px-8 py-4 bg-accent text-white rounded-full font-semibold text-lg hover:bg-accent-dark transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-accent"
          >
            Browse Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Learn More
          </a>
        </div>

        {/* Floating emojis row */}
        <div className="flex items-center justify-center gap-6 text-4xl md:text-5xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <span className="hover:scale-125 transition-transform duration-300 cursor-pointer">💅</span>
          <span className="hover:scale-125 transition-transform duration-300 cursor-pointer">✨</span>
          <span className="hover:scale-125 transition-transform duration-300 cursor-pointer">💖</span>
          <span className="hover:scale-125 transition-transform duration-300 cursor-pointer">🎨</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes wave-slow {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-25%) translateY(-10px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes wave-slower {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(25%) translateY(15px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-wave-slow {
          animation: wave-slow 15s ease-in-out infinite;
        }

        .animate-wave-slower {
          animation: wave-slower 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}