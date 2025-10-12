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
      className="group block relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400" />
        )}
        {/* Dark overlay for image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
      </div>

      {/* Content with Premium White Overlay */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map(tag => (
            <span 
              key={tag}
              className="bg-white/90 backdrop-blur-md text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Content with Premium White Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg">
          <h3 className="text-xl font-bold mb-2 line-clamp-2 text-gray-900 group-hover:text-pink-600 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-700 mb-3 line-clamp-2 text-sm">
            {post.excerpt}
          </p>

          <div className="flex justify-between items-center text-xs text-gray-600 mb-3">
            <span className="font-medium">{new Date(post.date).toLocaleDateString()}</span>
            <span className="font-medium">{post.readTime} min read</span>
          </div>

          <div className="inline-flex items-center text-pink-600 font-semibold text-sm group-hover:text-pink-700 transition-colors">
            Read More 
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
