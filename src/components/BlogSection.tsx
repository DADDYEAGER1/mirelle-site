import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/Blog/BlogCard';

export default async function BlogSection() {
  const posts = await getAllBlogPosts();
  const recentPosts = posts.slice(0, 3); // Show only 3 recent posts

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest insights, tips, and trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {recentPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/blog"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
