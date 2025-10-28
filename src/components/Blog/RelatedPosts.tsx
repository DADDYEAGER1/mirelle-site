import { getRelatedPosts } from '@/lib/blog';
import { BlogPost } from '@/types/blog';
import Image from 'next/image';

interface RelatedPostsProps {
  currentPost: BlogPost;
  limit?: number;
}

export default async function RelatedPosts({ currentPost, limit = 3 }: RelatedPostsProps) {
  const relatedPosts = await getRelatedPosts(currentPost.slug, limit);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Related Articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              {post.image ? (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                  <span className="text-4xl">💅</span>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                {post.category && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-pink-600 bg-pink-100 rounded-full mb-3">
                    {post.category}
                  </span>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.readTime}</span>
                  <span className="text-pink-600 font-medium group-hover:underline">
                    Read more →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
