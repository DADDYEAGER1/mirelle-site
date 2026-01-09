'use client';

import Link from 'next/link';
import { BlogMetadata } from '@/types/blog';

interface MainHeroSectionProps {
  posts: BlogMetadata[];
}

export default function MainHeroSection({ posts }: MainHeroSectionProps) {
  // Ensure we have exactly 10 posts (pillar + 9 clusters)
  const displayPosts = posts.slice(0, 10);
  
  // Middle: Main pillar post (first post)
  const pillarPost = displayPosts[0];
  
  // Left: 3 square posts (posts 1-3)
  const leftPosts = displayPosts.slice(1, 4);
  
  // Right: 6 horizontal posts (posts 4-9)
  const rightPosts = displayPosts.slice(4, 10);

  return (
    <section className="py-16 bg-[#f9fafb] border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
        {/* Desktop: 3 Column Grid - 1:2:1 ratio */}
        <div className="hidden md:flex gap-4">
          {/* Left: 3 Square Posts Stacked - 1 unit */}
          <div className="flex-1 flex flex-col gap-4">
            {leftPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div className="relative w-full aspect-square mb-2 overflow-hidden">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                {post.category && (
                  <p className="text-xs uppercase tracking-wider text-gray-600 mb-1">
                    {post.category}
                  </p>
                )}
                <h3 className="text-sm font-medium text-gray-900 group-hover:opacity-70 transition-opacity line-clamp-2">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
          
          {/* Middle: 1 Tall Pillar Post - 2 units */}
          <div className="flex-[2]">
            {pillarPost && (
              <Link href={`/blog/${pillarPost.slug}`} className="block group h-full">
                <div className="relative w-full h-full mb-3 overflow-hidden">
                  {pillarPost.image && (
                    <img
                      src={pillarPost.image}
                      alt={pillarPost.imageAlt || pillarPost.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                {pillarPost.category && (
                  <p className="text-xs uppercase tracking-wider text-gray-600 mb-2">
                    {pillarPost.category}
                  </p>
                )}
                <h3 
                  className="text-2xl text-gray-900 group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'Larken, Georgia, serif' }}
                >
                  {pillarPost.title}
                </h3>
                {pillarPost.author && (
                  <p className="text-xs text-gray-600 mt-2 uppercase tracking-wider">
                    BY {pillarPost.author.toUpperCase()}
                  </p>
                )}
              </Link>
            )}
          </div>
          
          {/* Right: 6 Horizontal Posts - 1 unit - IMAGE ON RIGHT */}
          <div className="flex-1 flex flex-col gap-6">
            {rightPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div className="flex gap-3 items-start">
                  {/* Text Left */}
                  <div className="flex-1 min-w-0">
                    {post.category && (
                      <p className="text-xs uppercase tracking-wider text-gray-600 mb-1">
                        {post.category}
                      </p>
                    )}
                    <h4 className="text-sm font-medium text-gray-900 group-hover:opacity-70 transition-opacity line-clamp-3">
                      {post.title}
                    </h4>
                    {post.author && (
                      <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider">
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
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Mobile: Vertical Stack */}
        <div className="md:hidden flex flex-col gap-6">
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
              {pillarPost.category && (
                <p className="text-xs uppercase tracking-wider text-gray-600 mb-2">
                  {pillarPost.category}
                </p>
              )}
              <h3 
                className="text-xl text-gray-900"
                style={{ fontFamily: 'Larken, Georgia, serif' }}
              >
                {pillarPost.title}
              </h3>
            </Link>
          )}
          
          {/* Left Posts */}
          {leftPosts.map((post) => (
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
              {post.category && (
                <p className="text-xs uppercase tracking-wider text-gray-600 mb-1">
                  {post.category}
                </p>
              )}
              <h4 className="text-base font-medium text-gray-900">
                {post.title}
              </h4>
            </Link>
          ))}
          
          {/* Right Posts */}
          {rightPosts.map((post) => (
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
              {post.category && (
                <p className="text-xs uppercase tracking-wider text-gray-600 mb-1">
                  {post.category}
                </p>
              )}
              <h4 className="text-base font-medium text-gray-900">
                {post.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}