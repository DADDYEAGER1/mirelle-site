import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/blog';

export default async function BlogSection() {
  const posts = await getAllBlogPosts();
  const recentPosts = posts.slice(0, 6); // Show 6 recent posts in grid

  return (
    <section className="py-26 bg-editorial-cream">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header - Editorial style */}
        <div className="max-w-3xl mb-18">
          <p className="text-overline text-editorial-accent uppercase tracking-widest mb-4 font-semibold">
            The Journal
          </p>
          <h2 className="font-display text-display-md text-editorial-charcoal mb-6 tracking-magazine">
            Latest from Our Blog
          </h2>
          <p className="text-body-lg text-editorial-slate leading-relaxed font-light">
            Stay updated with expert nail care tips, latest trends, and step-by-step tutorials for beautiful, healthy nails.
          </p>
        </div>

        {/* Blog Grid - Asymmetric Allure layout */}
        {recentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-18">
            {recentPosts.map((post, index) => (
              <div 
                key={post.slug}
                className={`group relative overflow-hidden bg-white shadow-editorial hover:shadow-editorial-lg transition-all duration-500 ${
                  index === 0 ? 'md:col-span-8 md:row-span-2 h-[600px]' : 
                  index === 1 ? 'md:col-span-4 h-[600px]' :
                  'md:col-span-4 h-[400px]'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-editorial-sand via-editorial-stone to-editorial-accent" />
                  )}
                  {/* Editorial gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full p-8 flex flex-col justify-between text-white">
                  {/* Tags - Minimal style */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map(tag => (
                      <span 
                        key={tag}
                        className="border border-white/30 text-white px-3 py-1 text-caption uppercase tracking-wide font-medium backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <h3 className={`font-display mb-4 line-clamp-2 group-hover:text-editorial-accent transition-colors duration-300 tracking-magazine ${
                      index === 0 ? 'text-headline-xl' : 'text-headline-lg'
                    }`}>
                      {post.title}
                    </h3>
                    
                    <p className={`text-white/90 mb-6 line-clamp-2 font-sans font-light leading-relaxed ${
                      index === 0 ? 'text-body-lg' : 'text-body'
                    }`}>
                      {post.excerpt}
                    </p>

                    <div className="flex justify-between items-center text-caption text-white/70 mb-6 font-sans uppercase tracking-wide">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>{post.readTime} min read</span>
                    </div>

                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-white border-b border-white/50 pb-1 text-body-sm font-sans font-medium uppercase tracking-wide hover:border-editorial-accent hover:text-editorial-accent transition-all duration-300"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 mb-18 bg-white shadow-editorial">
            <h3 className="font-display text-headline-md text-editorial-charcoal mb-4">Coming Soon</h3>
            <p className="text-body-lg text-editorial-slate font-light">We're crafting amazing content for you. Check back soon!</p>
          </div>
        )}

        {/* View All Button - Editorial minimal */}
        <div className="text-center">
          <Link 
            href="/blog"
            className="inline-block bg-editorial-charcoal text-white px-12 py-4 font-sans text-caption uppercase tracking-widest font-medium hover:bg-editorial-accent transition-all duration-500 shadow-editorial"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
