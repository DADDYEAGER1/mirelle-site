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
      
      {/* HTML Content - no processing needed */}
      <div 
        className="prose prose-lg max-w-none blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <style jsx>{`
        .blog-content h2 {
          color: #d63384;
          font-size: 1.8em;
          margin-top: 40px;
          margin-bottom: 20px;
          border-left: 4px solid #ff9a9e;
          padding-left: 15px;
        }
        
        .blog-content h3 {
          color: #6f42c1;
          font-size: 1.4em;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        
        .blog-content .trend-card {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 25px;
          margin: 25px 0;
          border-left: 5px solid #ff9a9e;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .blog-content .tip-box {
          background: #e7f3ff;
          border: 1px solid #b3d9ff;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
        }
        
        .blog-content .cta-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          margin: 40px 0;
        }
      `}</style>
    </article>
  );
}
