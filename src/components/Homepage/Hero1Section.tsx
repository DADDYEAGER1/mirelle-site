// src/components/Homepage/Hero1Section.tsx
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPost } from '@/lib/blog';

export default async function Hero1Section() {
  // Featured blog post - you can change the slug to feature different posts
  const heroPost = await getBlogPost('blooming-gel-nails');
  
  if (!heroPost) return null;

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-12">
        <Link href={`/blog/${heroPost.slug}`} className="block group">
          {/* Desktop: Full image */}
          <div className="hidden md:block relative w-full aspect-[16/9] mb-6">
            {heroPost.image && (
              <Image
                src={heroPost.image}
                alt={heroPost.imageAlt || heroPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            )}
          </div>
          
          {/* Mobile: Cropped center focus */}
          <div className="md:hidden relative w-full aspect-[4/5] mb-4 overflow-hidden">
            {heroPost.image && (
              <Image
                src={heroPost.image}
                alt={heroPost.imageAlt || heroPost.title}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
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
