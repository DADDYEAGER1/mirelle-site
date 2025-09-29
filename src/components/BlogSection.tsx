import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/blog';

export default async function BlogSection() {
  const posts = await getAllBlogPosts();
  const recentPosts = posts.slice(0, 6); // Show 6 recent posts in grid

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with expert nail care tips, latest trends, and step-by-step tutorials for beautiful, healthy nails.
          </p>
        </div>

        {/* Blog Grid */}
        {recentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {recentPosts.map((post, index) => (
              <div 
                key={post.slug}
                className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  index === 0 ? 'md:col-span-2 md:row-span-2 h-96' : 'h-64'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400" />
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full p-6 flex flex-col justify-between text-white">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map(tag => (
                      <span 
                        key={tag}
                        className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <h3 className={`font-bold mb-2 line-clamp-2 group-hover:text-pink-200 transition-colors ${
                      index === 0 ? 'text-2xl' : 'text-lg'
                    }`}>
                      {post.title}
                    </h3>
                    
                    <p className="text-white/90 mb-3 line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>

                    <div className="flex justify-between items-center text-xs text-white/80 mb-3">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime} min read</span>
                    </div>

                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-all duration-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mb-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Coming Soon</h3>
            <p className="text-gray-500">We're crafting amazing content for you. Check back soon!</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/blog"
            className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
