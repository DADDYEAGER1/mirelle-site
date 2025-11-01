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
      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Hero Image Section */}
      <div className="relative h-56 overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400" />
        )}
        
        {/* Subtle overlay for better tag visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        
        {/* Tags on image */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map(tag => (
            <span 
              key={tag}
              className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* White Content Card */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors">
          {post.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
          {post.excerpt}
        </p>

        {/* Footer - Date, Read Time, and CTA */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {post.readTime} min
          </span>
          
          <span className="inline-flex items-center text-pink-600 font-semibold text-sm group-hover:text-pink-700 transition-colors">
            Read more
            <svg 
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
