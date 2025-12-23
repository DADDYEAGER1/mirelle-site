// src/components/Homepage/Hero2Section.tsx
import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import { getCategoryData } from '@/lib/shop';

export default async function Hero2Section() {
  const allPosts = await getAllBlogPosts();
  
  // Left: 2 small items stacked (Shop/Inspo categories)
  const shopCategory1 = getCategoryData('christmas');
  const shopCategory2 = getCategoryData('fall');
  
  // Middle: 1 tall blog post
  const tallPost = allPosts[0];
  
  // Right: 3 horizontal blog posts
  const horizontalPosts = allPosts.slice(1, 4);

  return (
    <section className="bg-background pt-16 md:pt-24 pb-8">
      {/* Desktop: 3 Column Grid */}
      <div className="hidden md:grid md:grid-cols-12 gap-4 max-w-7xl mx-auto px-3 md:px-6 lg:px-12">
        {/* Left: 2 Square Categories Stacked */}
        <div className="col-span-3 flex flex-col gap-4">
          {shopCategory1 && (
            <Link href={`/shop/${shopCategory1.slug}`} className="block group">
              <div className="relative w-full aspect-square mb-2">
                <Image
                  src={shopCategory1.heroImage}
                  alt={shopCategory1.displayName}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <h3 className="font-heading text-sm text-foreground group-hover:opacity-70 transition-opacity">
                {shopCategory1.displayName}
              </h3>
            </Link>
          )}
          
          {shopCategory2 && (
            <Link href={`/shop/${shopCategory2.slug}`} className="block group">
              <div className="relative w-full aspect-square mb-2">
                <Image
                  src={shopCategory2.heroImage}
                  alt={shopCategory2.displayName}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <h3 className="font-heading text-sm text-foreground group-hover:opacity-70 transition-opacity">
                {shopCategory2.displayName}
              </h3>
            </Link>
          )}
        </div>
        
        {/* Middle: 1 Tall Blog Post */}
        <div className="col-span-6">
          {tallPost && (
            <Link href={`/blog/${tallPost.slug}`} className="block group h-full">
              <div className="relative w-full h-full mb-3">
                {tallPost.image && (
                  <Image
                    src={tallPost.image}
                    alt={tallPost.imageAlt || tallPost.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                )}
              </div>
              <h3 className="font-heading text-xl text-foreground group-hover:opacity-70 transition-opacity">
                {tallPost.title}
              </h3>
            </Link>
          )}
        </div>
        
        {/* Right: 3 Horizontal Blog Posts */}
        <div className="col-span-3 flex flex-col gap-6">
          {horizontalPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="flex gap-3 items-start">
                {/* Square Image Left */}
                <div className="relative w-24 h-24 flex-shrink-0">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  )}
                </div>
                
                {/* Text Right */}
                <div className="flex-1 min-w-0">
                  {post.category && (
                    <p className="font-ui text-xs uppercase tracking-wider text-foreground mb-1">
                      {post.category}
                    </p>
                  )}
                  <h4 className="font-heading text-sm text-foreground group-hover:opacity-70 transition-opacity line-clamp-3">
                    {post.title}
                  </h4>
                  {post.author && (
                    <p className="font-ui text-xs text-foreground mt-1">
                      BY {post.author.toUpperCase()}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Mobile: Vertical Stack */}
      <div className="md:hidden flex flex-col gap-6 px-3 md:px-6 lg:px-12">
        {/* Tall Post First */}
        {tallPost && (
          <Link href={`/blog/${tallPost.slug}`} className="block group">
            <div className="relative w-full aspect-[4/5] mb-3">
              {tallPost.image && (
                <Image
                  src={tallPost.image}
                  alt={tallPost.imageAlt || tallPost.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              )}
            </div>
            <h3 className="font-heading text-xl text-foreground group-hover:opacity-70 transition-opacity">
              {tallPost.title}
            </h3>
          </Link>
        )}
        
        {/* Shop Categories */}
        {shopCategory1 && (
          <Link href={`/shop/${shopCategory1.slug}`} className="block group">
            <div className="relative w-full aspect-[4/3] mb-2">
              <Image
                src={shopCategory1.heroImage}
                alt={shopCategory1.displayName}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <h3 className="font-heading text-base text-foreground group-hover:opacity-70 transition-opacity">
              {shopCategory1.displayName}
            </h3>
          </Link>
        )}
        
        {shopCategory2 && (
          <Link href={`/shop/${shopCategory2.slug}`} className="block group">
            <div className="relative w-full aspect-[4/3] mb-2">
              <Image
                src={shopCategory2.heroImage}
                alt={shopCategory2.displayName}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <h3 className="font-heading text-base text-foreground group-hover:opacity-70 transition-opacity">
              {shopCategory2.displayName}
            </h3>
          </Link>
        )}
        
        {/* Horizontal Blog Posts */}
        {horizontalPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <div className="relative w-full aspect-[4/3] mb-2">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              )}
            </div>
            <h4 className="font-heading text-base text-foreground group-hover:opacity-70 transition-opacity">
              {post.title}
            </h4>
          </Link>
        ))}
      </div>
    </section>
  );
}
