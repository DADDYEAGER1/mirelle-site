// src/components/Homepage/MustReadSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { BlogMetadata } from '@/types/blog';

interface MustReadSectionProps {
  posts: BlogMetadata[];
}

export default function MustReadSection({ posts }: MustReadSectionProps) {
  const topics = posts.slice(0, 4);

  return (
    <section className="bg-background py-8 md:py-12">
      {/* Section Title with Lines */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="w-full h-[1px] bg-border-color mb-4" />
        <h2 className="font-heading text-2xl md:text-3xl text-foreground text-center">
          MUST READ
        </h2>
        <div className="w-full h-[1px] bg-border-color mt-4" />
      </div>
      
      {/* Desktop: 4 Cards in Row */}
      <div className="hidden md:grid md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {topics.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <div className="flex flex-row gap-4">
              {/* Image Left */}
              <div className="relative w-24 h-24 flex-shrink-0">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                )}
              </div>
              
              {/* Text Right */}
              <div className="flex-1">
                {/* Category - Boriboon */}
                {post.category && (
                  <p className="font-product uppercase text-xs text-text-secondary mb-1 tracking-wider">
                    {post.category}
                  </p>
                )}
                
                {/* Title - Jeremiah */}
                <h3 className="font-heading text-sm text-foreground mb-2 group-hover:opacity-70 transition-opacity line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Author - Boriboon */}
                <p className="font-product text-xs text-text-secondary uppercase">
                  BY {post.author.toUpperCase()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Mobile: Vertical Stack */}
      <div className="md:hidden flex flex-col gap-6 px-6">
        {topics.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <div className="flex flex-row gap-4">
              {/* Image Left */}
              <div className="relative w-28 h-28 flex-shrink-0">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                )}
              </div>
              
              {/* Text Right */}
              <div className="flex-1">
                {/* Category */}
                {post.category && (
                  <p className="font-ui uppercase text-xs text-text-secondary mb-2 tracking-wider">
                    {post.category}
                  </p>
                )}
                
                {/* Title */}
                <h3 className="font-heading text-base text-foreground mb-2 group-hover:opacity-70 transition-opacity">
                  {post.title}
                </h3>
                
                {/* Author */}
                <p className="font-product text-xs text-text-secondary uppercase">
                  BY {post.author.toUpperCase()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}