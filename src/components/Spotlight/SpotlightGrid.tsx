import SpotlightCard from './SpotlightCard';
import { BlogMetadata } from '@/types/blog';

interface SpotlightGridProps {
  posts: BlogMetadata[];
}

export default function SpotlightGrid({ posts }: SpotlightGridProps) {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 md:pr-[15%]">
          {posts.map((post) => (
            <SpotlightCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}