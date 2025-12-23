import FeatureBlogCard from './FeatureBlogCard';
import { BlogMetadata } from '@/types/blog';

interface LatestStoriesSectionProps {
  posts: BlogMetadata[];
}

export default function LatestStoriesSection({ posts }: LatestStoriesSectionProps) {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
        {/* Section Heading */}
        <h2 
          className="text-3xl md:text-4xl text-center mb-12"
          style={{ fontFamily: 'Larken, Georgia, serif' }}
        >
          — LATEST STORIES —
        </h2>

        {/* Grid Layout - 3 columns on desktop with right whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 md:pr-[15%]">
          {posts.map((post) => (
            <FeatureBlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}