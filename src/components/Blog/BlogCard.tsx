
import Link from 'next/link';
import Image from 'next/image';
import { BlogMetadata } from '@/types/blog';

interface BlogCardProps {
  post: BlogMetadata;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {post.image && (
        <div className="relative h-48 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-2">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h2 className="text-xl font-bold mb-2 line-clamp-2">
          {post.title}
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span>By {post.author}</span>
          <span>{post.readTime} min read</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString()}
          </span>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
