'use client';

import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  slug: string;
  displayName: string;
  imageUrl: string;
}

export default function CategoryCard({
  slug,
  displayName,
  imageUrl,
}: CategoryCardProps) {
  return (
    <Link
      href={`/shop/${slug}`}
      className="group relative block aspect-[4/5] overflow-hidden"
    >
      {/* Image */}
      <Image
        src={imageUrl}
        alt={displayName}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Overlay - subtle on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

      {/* Text in corner */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-product text-2xl text-white mb-2">
          {displayName}
        </h3>
        <span className="inline-flex items-center text-white text-sm font-product tracking-wide">
          Shop now
          <svg
            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}