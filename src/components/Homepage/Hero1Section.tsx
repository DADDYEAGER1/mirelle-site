// src/components/Homepage/Hero1Section.tsx
import Link from 'next/link';
import { getBlogPost } from '@/lib/blog';

export default async function Hero1Section() {
  const heroPost = await getBlogPost('valentine-nails-2026');
  
  if (!heroPost) return null;

  return (
    <section className="bg-background py-12 md:py-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link href={`/blog/${heroPost.slug}`} className="block group">
          {/* Desktop: Full image */}
          <div className="hidden md:block relative w-full aspect-[16/9] mb-6 overflow-hidden">
            {heroPost.image && (
              <img
                src={heroPost.image}
                alt={heroPost.imageAlt || heroPost.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            )}
          </div>
          
          {/* Mobile: Cropped center focus */}
          <div className="md:hidden relative w-full aspect-[4/5] mb-4 overflow-hidden">
            {heroPost.image && (
              <img
                src={heroPost.image}
                alt={heroPost.imageAlt || heroPost.title}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            )}
          </div>
          
          {/* Title - Centered */}
          <h2 className="font-heading text-center text-2xl md:text-4xl text-foreground group-hover:opacity-70 transition-opacity">
            {heroPost.title}
          </h2>
        </Link>
      </div>
    </section>
  );
}