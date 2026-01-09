// src/components/Homepage/Hero2Section.tsx
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import { getCategoryData } from '@/lib/shop';
import { getDesignData } from '@/lib/inspo';

export default async function Hero2Section() {
  const allPosts = await getAllBlogPosts();
  
  // Left: 1 shop + 1 inspo category
  const shopCategory = getCategoryData('christmas');
  const inspoCategory = getDesignData('french-tips');
  
  // Middle: Define the pillar post slug here
  const PILLAR_SLUG = 'valentine-nails-2026'; // Change this to your desired pillar post slug
  const pillarPost = allPosts.find(p => p.slug === PILLAR_SLUG) || allPosts[0];
  
  // Right: Get cluster posts related to the pillar (max 3)
  const clusterPosts = allPosts
    .filter(post => 
      post.topicalMap?.position === 'cluster' && 
      (post.topicalMap?.parentPillar === `/blog/${pillarPost.slug}` || 
       post.topicalMap?.parentPillar === pillarPost.slug)
    )
    .slice(0, 3);

  return (
    <section className="bg-background pt-16 md:pt-24 pb-8">
      {/* Desktop: 3 Column Grid - 1:2:1 ratio */}
      <div className="hidden md:flex gap-4 max-w-7xl mx-auto px-3 md:px-6 lg:px-12">
        {/* Left: 1 Shop + 1 Inspo Stacked - 1 unit */}
        <div className="flex-1 flex flex-col gap-4">
          {shopCategory && (
            <Link href={`/shop/${shopCategory.slug}`} className="block group">
              <div className="relative w-full aspect-square mb-2 overflow-hidden">
                <img
                  src={shopCategory.heroImage}
                  alt={shopCategory.displayName}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-sm text-foreground group-hover:opacity-70 transition-opacity">
                {shopCategory.displayName}
              </h3>
            </Link>
          )}
          
          {inspoCategory && (
            <Link href={`/inspo/${inspoCategory.slug}`} className="block group">
              <div className="relative w-full aspect-square mb-2 overflow-hidden">
                <img
                  src={inspoCategory.heroImage}
                  alt={inspoCategory.displayName}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-sm text-foreground group-hover:opacity-70 transition-opacity">
                {inspoCategory.displayName}
              </h3>
            </Link>
          )}
        </div>
        
        {/* Middle: 1 Pillar Blog Post - 2 units */}
        <div className="flex-[2]">
          {pillarPost && (
            <Link href={`/blog/${pillarPost.slug}`} className="block group h-full">
              <div className="relative w-full h-full mb-3 overflow-hidden">
                {pillarPost.image && (
                  <img
                    src={pillarPost.image}
                    alt={pillarPost.imageAlt || pillarPost.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <h3 className="font-heading text-xl text-foreground group-hover:opacity-70 transition-opacity">
                {pillarPost.title}
              </h3>
            </Link>
          )}
        </div>
        
        {/* Right: 3 Cluster Blog Posts - 1 unit - IMAGE ON RIGHT */}
        <div className="flex-1 flex flex-col gap-6">
          {clusterPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="flex gap-3 items-start">
                {/* Text Left */}
                <div className="flex-1 min-w-0">
                  {post.category && (
                    <p className="font-ui text-xs uppercase tracking-wider text-foreground/70 mb-1">
                      {post.category}
                    </p>
                  )}
                  <h4 className="font-heading text-sm text-foreground group-hover:opacity-70 transition-opacity line-clamp-3">
                    {post.title}
                  </h4>
                  {post.author && (
                    <p className="font-ui text-xs text-foreground/70 mt-1 uppercase tracking-wider">
                      BY {post.author.toUpperCase()}
                    </p>
                  )}
                </div>
                
                {/* Square Image Right */}
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Mobile: Vertical Stack */}
      <div className="md:hidden flex flex-col gap-6 px-3 md:px-6 lg:px-12">
        {/* Pillar Post First */}
        {pillarPost && (
          <Link href={`/blog/${pillarPost.slug}`} className="block group">
            <div className="relative w-full aspect-[4/5] mb-3 overflow-hidden">
              {pillarPost.image && (
                <img
                  src={pillarPost.image}
                  alt={pillarPost.imageAlt || pillarPost.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <h3 className="font-heading text-xl text-foreground group-hover:opacity-70 transition-opacity">
              {pillarPost.title}
            </h3>
          </Link>
        )}
        
        {/* Shop Category */}
        {shopCategory && (
          <Link href={`/shop/${shopCategory.slug}`} className="block group">
            <div className="relative w-full aspect-[4/3] mb-2 overflow-hidden">
              <img
                src={shopCategory.heroImage}
                alt={shopCategory.displayName}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-heading text-base text-foreground group-hover:opacity-70 transition-opacity">
              {shopCategory.displayName}
            </h3>
          </Link>
        )}
        
        {/* Inspo Category */}
        {inspoCategory && (
          <Link href={`/inspo/${inspoCategory.slug}`} className="block group">
            <div className="relative w-full aspect-[4/3] mb-2 overflow-hidden">
              <img
                src={inspoCategory.heroImage}
                alt={inspoCategory.displayName}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-heading text-base text-foreground group-hover:opacity-70 transition-opacity">
              {inspoCategory.displayName}
            </h3>
          </Link>
        )}
        
        {/* Cluster Blog Posts */}
        {clusterPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <div className="relative w-full aspect-[4/3] mb-2 overflow-hidden">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="w-full h-full object-cover"
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