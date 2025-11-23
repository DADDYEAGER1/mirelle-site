'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Star, Sparkles, Heart, ShoppingBag } from 'lucide-react';
import type { Product } from '@/types/shop';
import { calculateDiscount } from '@/lib/shop';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  category: string;
}

export default function ProductModal({ product, onClose, category }: ProductModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const discount = calculateDiscount(product.originalPrice, product.price);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-[85vh] overflow-hidden rounded-3xl shadow-2xl modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.imageAlt || product.name}
            fill
            className="object-cover"
            quality={95}
            priority
            onLoad={() => setImageLoaded(true)}
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Floating Badges */}
        <div className="absolute top-6 left-6 flex gap-2 z-40">
          {product.isNew && (
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold shadow-lg backdrop-blur-sm animate-pulse-subtle">
              ✨ NEW
            </span>
          )}
          {product.isTrending && (
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold shadow-lg backdrop-blur-sm">
              🔥 TRENDING
            </span>
          )}
          {discount > 0 && (
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold shadow-lg backdrop-blur-sm">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Content - Bottom Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-30">
          {/* Glass Card Container */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
            {/* Category Badge */}
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium">
              {category.charAt(0).toUpperCase() + category.slice(1)} Collection
            </div>

            {/* Product Name */}
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating!) ? 'fill-yellow-400 text-yellow-400' : 'text-white/30'}`}
                    />
                  ))}
                </div>
                <span className="text-white/90 text-lg font-medium">{product.rating}</span>
              </div>
            )}

            {/* Price & CTA Row */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {product.price}
                </span>
                {product.originalPrice !== product.price && (
                  <span className="text-2xl text-white/50 line-through">{product.originalPrice}</span>
                )}
              </div>

              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex-1 md:flex-initial"
              >
                <button className="w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:via-rose-600 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group">
                  <ShoppingBag className="w-5 h-5" />
                  <span>{product.cta || 'Shop Now'}</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 line-clamp-2">
              {product.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '💎', text: 'Premium Quality' },
                { icon: '⏱️', text: 'Lasts 7-14 Days' },
                { icon: '✨', text: 'Salon Finish' }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-white/80 text-xs text-center font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Trust Signals */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-white/60 text-sm">
                ✓ Free Shipping • ✓ Easy Returns • ✓ Secure Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
