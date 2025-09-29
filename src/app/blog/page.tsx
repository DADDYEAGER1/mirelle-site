import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/Blog/BlogCard';

export const metadata: Metadata = {
  title: 'Blog - Mirelle | Nail Care Tips, Trends & Tutorials',
  description: 'Discover expert nail care tips, latest trends, step-by-step tutorials, and seasonal nail inspiration. Everything you need for beautiful, healthy nails.',
  keywords: 'nail care, nail tips, nail trends, nail tutorials, nail art, nail health, manicure tips, nail inspiration',
  openGraph: {
    title: 'Blog - Mirelle | Nail Care Tips, Trends & Tutorials',
    description: 'Discover expert nail care tips, latest trends, step-by-step tutorials, and seasonal nail inspiration.',
    type: 'website',
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-200 to-purple-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything You Need to Know About Nails, Beauty & Wellness
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Our Articles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From nail care basics to advanced techniques, discover everything you need to know about beautiful, healthy nails.
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-600 mb-4">Coming Soon</h3>
              <p className="text-gray-500">We're working on amazing content for you. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
