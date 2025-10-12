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
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group block relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
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
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400" />
                  )}
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
                </div>

                {/* Content Overlay */}
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
                    <h3 className={`font-bold mb-2 line-clamp-2 text-gray-900 group-hover:text-pink-600 transition-colors ${
                      index === 0 ? 'text-2xl' : 'text-lg'
                    }`}>
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
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
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
