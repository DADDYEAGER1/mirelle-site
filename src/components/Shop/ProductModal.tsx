'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Star, ShoppingBag } from 'lucide-react';
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
      {/* DESKTOP: Side by side layout | MOBILE: Stacked layout */}
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl modal-container flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all duration-300 hover:scale-110"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* LEFT SIDE: Product Image (Desktop) | TOP (Mobile) */}
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto md:min-h-[600px] bg-gray-100">
          <Image
            src={product.image}
            alt={product.imageAlt || product.name}
            fill
            className="object-cover"
            quality={95}
            priority
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Floating Badges - Only NEW and DISCOUNT */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            {product.isNew && (
              <span className="px-4 py-2 rounded-full bg-blue-500 text-white text-xs font-bold shadow-lg">
                ✨ NEW
              </span>
            )}
            {discount > 0 && (
              <span className="px-4 py-2 rounded-full bg-red-500 text-white text-xs font-bold shadow-lg">
                {discount}% OFF
              </span>
            )}
          </div>

          {/* Loading State */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* RIGHT SIDE: Product Details with Gray Overlay (Desktop) | BOTTOM (Mobile) */}
        <div className="w-full md:w-1/2 bg-gray-100 p-6 md:p-10 flex flex-col justify-between">
          {/* Content Wrapper with subtle overlay */}
          <div className="space-y-6">
            {/* Category Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-gray-800 text-white text-sm font-medium">
              {category.charAt(0).toUpperCase() + category.slice(1)} Collection
            </div>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating!) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-700 text-lg font-medium">{product.rating}</span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-5xl md:text-6xl font-bold text-gray-900">
                {product.price}
              </span>
              {product.originalPrice !== product.price && (
                <span className="text-2xl text-gray-500 line-through">{product.originalPrice}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
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
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-sm"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-gray-700 text-xs text-center font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section: CTA + Trust Signals */}
          <div className="space-y-4 mt-6">
            {/* CTA Button */}
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block"
            >
              <button className="w-full px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:via-rose-600 hover:to-orange-600 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group">
                <ShoppingBag className="w-5 h-5" />
                <span>{product.cta || 'Shop Now'}</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            {/* Trust Signals */}
            <div className="pt-4 border-t border-gray-300 text-center">
              <p className="text-gray-600 text-sm">
                ✓ Free Shipping • ✓ Easy Returns • ✓ Secure Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
