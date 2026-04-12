import Link from 'next/link';
import Image from 'next/image';
import { BlogMetadata } from '@/types/blog';

interface CompactBlogCardProps {
  post: BlogMetadata;
}

export default function CompactBlogCard({ post }: CompactBlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group flex gap-4 items-start hover:opacity-70 transition-opacity duration-300"
    >
      {/* Small Thumbnail - Left */}
      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="96px"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>

      {/* Content - Right */}
      <div className="flex-1 space-y-1">
        {/* Category - Boriboon Font */}
        <div 
          className="text-xs uppercase tracking-wider"
          style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}
        >
          {post.category || 'NAIL CARE'}
        </div>

        {/* Title - Jeremiah Font */}
        <h3 
          className="text-base leading-tight line-clamp-2"
          style={{ fontFamily: 'Larken, Georgia, serif' }}
        >
          {post.title}
        </h3>

        {/* Author - Boriboon Font */}
        <div 
          className="text-xs uppercase tracking-wide text-gray-600"
          style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}
        >
          BY {post.author || 'Mirellé INSPO TEAM'}
        </div>
      </div>
    </Link>
  );
}