import { getAllBlogPosts } from '@/lib/blog';
import BlogList from '@/components/Blog/BlogList';

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover insights, tips, and stories from our team. Stay updated with the latest trends and knowledge in our industry.
        </p>
      </div>
      
      <BlogList posts={posts} />
    </div>
  );
}
