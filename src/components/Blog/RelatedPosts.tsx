import Link from 'next/link';
import Image from 'next/image';
import { getRelatedPosts } from '@/lib/blog';

interface RelatedArticlesProps {
  currentSlug: string;
}

export default async function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const relatedPosts = await getRelatedPosts(currentSlug, 6);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
        {/* Heading */}
        <h2 
          className="text-3xl md:text-4xl text-center mb-12"
          className="font-heading"
        >
          Related Articles
        </h2>

        {/* Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden mb-4">
                <div className="relative w-full pb-[75%]">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-200" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                {/* Category */}
                {post.category && (
                  <div 
                    className="text-xs uppercase tracking-wider"
                    className="font-ui"
                  >
                    {post.category}
                  </div>
                )}

                {/* Title */}
                <h3 
                  className="text-lg leading-tight line-clamp-2 group-hover:opacity-70 transition-opacity"
                  className="font-heading"
                >
                  {post.title}
                </h3>

                {/* Author & Read Time */}
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <span className="font-ui">
                    BY {post.author?.toUpperCase() || 'MIRELLÈ INSPO TEAM'}
                  </span>
                  {post.readTime && (
                    <>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}