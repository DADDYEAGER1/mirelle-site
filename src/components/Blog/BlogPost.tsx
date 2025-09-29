import Image from 'next/image';
import Link from 'next/link';
import { BlogPost as BlogPostType } from '@/types/blog';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link 
          href="/blog"
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← Back to Blog
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.readTime} min read</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {post.image && (
          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
      
      {/* HTML Content with Tailwind styling */}
      <div 
        className="prose prose-lg max-w-none [&_h2]:text-pink-600 [&_h2]:text-3xl [&_h2]:mt-10 [&_h2]:mb-5 [&_h2]:border-l-4 [&_h2]:border-pink-400 [&_h2]:pl-4 [&_h3]:text-purple-600 [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-4 [&_.trend-card]:bg-gray-50 [&_.trend-card]:rounded-lg [&_.trend-card]:p-6 [&_.trend-card]:my-6 [&_.trend-card]:border-l-4 [&_.trend-card]:border-pink-400 [&_.trend-card]:shadow-lg [&_.tip-box]:bg-blue-50 [&_.tip-box]:border [&_.tip-box]:border-blue-200 [&_.tip-box]:rounded-lg [&_.tip-box]:p-5 [&_.tip-box]:my-5 [&_.cta-section]:bg-gradient-to-r [&_.cta-section]:from-indigo-500 [&_.cta-section]:to-purple-600 [&_.cta-section]:text-white [&_.cta-section]:p-8 [&_.cta-section]:rounded-2xl [&_.cta-section]:text-center [&_.cta-section]:my-10"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
