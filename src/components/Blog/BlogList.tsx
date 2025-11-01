
import { BlogMetadata } from '@/types/blog';
import BlogCard from './BlogCard';

interface BlogListProps {
  posts: BlogMetadata[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">No blog posts found</h2>
        <p className="text-gray-500">Check back later for new content!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
