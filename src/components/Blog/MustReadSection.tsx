import CompactBlogCard from './CompactBlogCard';
import { BlogMetadata } from '@/types/blog';

interface MustReadSectionProps {
  posts: BlogMetadata[];
}

export default function MustReadSection({ posts }: MustReadSectionProps) {
  // Take first 3 posts
  const displayPosts = posts.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 lg:px-20">
        {/* Section Heading */}
        <h2 
          className="text-3xl md:text-4xl text-center mb-12"
          style={{ fontFamily: 'Jeremiah, Georgia, serif' }}
        >
          MUST READ
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {displayPosts.map((post) => (
            <CompactBlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}