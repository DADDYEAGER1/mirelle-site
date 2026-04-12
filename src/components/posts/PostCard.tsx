// src/components/Posts/PostCard.tsx
import Link from 'next/link';
import { PostMetadata } from '@/types/posts';

interface PostCardProps {
  post: PostMetadata;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/Posts/${post.slug}`} className="group block">
      <article className="space-y-3">
        {/* Square Image */}
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Category */}
        <p className="font-ui text-xs uppercase tracking-wider text-gray-600">
          {post.category}
        </p>

        {/* Title */}
        <h2 className="font-heading text-4xl md:text-[42px] leading-tight group-hover:text-gray-600 transition-colors line-clamp-2">
          {post.title}
        </h2>

        {/* Author */}
        <p className="font-ui text-sm uppercase tracking-wide text-gray-700">
          BY {post.author}
        </p>
      </article>
    </Link>
  );
}