import Link from 'next/link';
import Image from 'next/image';
import { BlogMetadata } from '@/types/blog';

interface BlogCardProps {
  post: BlogMetadata;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group block bg-white"
    >
      {/* Large Featured Image */}
      <div className="relative w-full overflow-hidden mb-6">
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
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400" />
          )}
        </div>
      </div>

      {/* Content - Centered */}
      <div className="space-y-3 text-center">
        {/* Category Label */}
        <div className="text-xs font-bold tracking-widest text-burgundy-800 uppercase">
          {post.category || 'NAIL CARE'}
        </div>

        {/* Title - Smaller Font */}
        <h3 className="font-serif text-xl md:text-2xl leading-tight text-gray-900 group-hover:text-gray-600 transition-colors duration-300 px-2">
          {post.title}
        </h3>

        {/* Author Byline */}
        <div className="text-xs text-gray-600 uppercase tracking-wide font-medium">
          BY MIRELLÈ INSPO TEAM
        </div>
      </div>
    </Link>
  );
}
