import Link from 'next/link';
import Image from 'next/image';
import { BlogMetadata } from '@/types/blog';

interface SpotlightCardProps {
  post: BlogMetadata;
}

export default function SpotlightCard({ post }: SpotlightCardProps) {
  const displayTitle = post.title.split(':')[0].trim();

  return (
    <Link
      href={`/spotlight/${post.slug}`}
      className="group block"
    >
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

      <div className="space-y-2">
        <div
          className="text-xs uppercase tracking-wider"
          style={{ fontFamily: 'General Sans, system-ui, sans-serif' }}
        >
          {post.category || 'SPOTLIGHT'}
        </div>

        <h3
          className="text-xl md:text-2xl leading-tight"
          style={{ fontFamily: 'Larken, Georgia, serif' }}
        >
          {displayTitle}
        </h3>

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
