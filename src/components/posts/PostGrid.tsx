// src/components/Posts/PostGrid.tsx
import { PostMetadata } from '@/types/posts';
import PostCard from './PostCard';

interface PostGridProps {
  posts: PostMetadata[];
}

export default function PostGrid({ posts }: PostGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="font-ui text-lg text-gray-600">No posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}