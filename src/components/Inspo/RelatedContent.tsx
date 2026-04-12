// src/components/Inspo/RelatedContent.tsx
'use client';

interface RelatedLink {
  title: string;
  description: string;
  url: string;
  icon: string;
  badge?: string;
}

interface RelatedContentProps {
  categorySlug?: string;
}

export default function RelatedContent({ categorySlug }: RelatedContentProps) {
  // Smart internal linking based on category
  const getRelatedLinks = (): RelatedLink[] => {
    const baseLinks: RelatedLink[] = [
      {
        title: 'Nail Care Guide',
        description: 'Essential tips for healthy, strong nails',
        url: '/topics/nail-care-guide',
        icon: '💅',
      },
      {
        title: 'Nail Art Guides',
        description: 'Step-by-step tutorials for every skill level',
        url: '/topics/nail-art-guides',
        icon: '🎨',
      },
      {
        title: 'Seasonal Trends',
        description: 'Latest nail trends for every season',
        url: '/topics/seasonal-trends',
        icon: '📅',
      },
    ];

    // Add category-specific links
    if (categorySlug?.includes('winter') || categorySlug?.includes('snowflake') || categorySlug?.includes('christmas')) {
      baseLinks.unshift({
        title: 'Winter Nails 2025',
        description: 'Complete guide to winter nail designs',
        url: '/blog/winter-nails-2025',
        icon: '❄️',
        badge: 'Trending',
      });
      baseLinks.push({
        title: 'White Christmas Snowflake Nails',
        description: 'Perfect snowflake designs for the holidays',
        url: '/blog/white-christmas-nails-snowflake-designs-2025',
        icon: '⛄',
      });
    }

    if (categorySlug?.includes('chrome') || categorySlug?.includes('metallic')) {
      baseLinks.push({
        title: 'Gold & Silver Chrome Christmas Nails',
        description: 'Metallic nail inspiration for the holidays',
        url: '/blog/gold-silver-chrome-christmas-nails-2025',
        icon: '✨',
      });
    }

    if (categorySlug?.includes('burgundy') || categorySlug?.includes('wine') || categorySlug === 'french-tips') {
      baseLinks.push({
        title: 'Red & Green Christmas Nails',
        description: 'Classic holiday color combinations',
        url: '/blog/red-green-christmas-nails-2025',
        icon: '🎄',
      });
      baseLinks.push({
        title: 'Valentine Nails 2026',
        description: 'Romantic nail designs for Valentine\'s Day',
        url: '/blog/valentine-nails-2026',
        icon: '💖',
      });
    }

    if (categorySlug === 'summer' || categorySlug?.includes('bright')) {
      baseLinks.push({
        title: 'Holiday Vacation Nails Travel Guide',
        description: 'Perfect nail designs for summer getaways',
        url: '/blog/holiday-vacation-nails-travel-guide',
        icon: '🏖️',
      });
    }

    if (categorySlug?.includes('velvet') || categorySlug?.includes('cat-eye')) {
      baseLinks.push({
        title: 'Blooming Gel Nails',
        description: 'Master the trending blooming gel technique',
        url: '/blog/blooming-gel-nails',
        icon: '🌸',
        badge: 'Technique',
      });
    }

    if (categorySlug?.includes('minimalist') || categorySlug === 'french-tips') {
      baseLinks.push({
        title: 'Wedding Nail Designs',
        description: 'Elegant nail ideas for your special day',
        url: '/blog/wedding-nail-designs',
        icon: '💍',
      });
    }

    return baseLinks.slice(0, 6); // Limit to 6 links
  };

  const relatedLinks = getRelatedLinks();

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Continue Your Journey
          </h2>
          <p className="text-xl text-gray-600">
            Explore more nail inspiration and expert guides
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="group relative bg-gradient-to-br from-cream-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Badge */}
              {link.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent/80 text-white text-xs font-bold rounded-full">
                  {link.badge}
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-burgundy-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{link.icon}</span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-accent transition-colors">
                {link.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {link.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center text-accent/80 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-burgundy-50 to-pink-50 rounded-3xl p-8">
          <h3 className="font-bold text-2xl text-gray-900 mb-3">
            Looking for More Nail Inspiration?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore our complete blog with hundreds of nail design ideas, tutorials, and expert tips
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/blog"
              className="px-8 py-3 bg-accent/80 text-white rounded-full font-bold hover:bg-accent transition-colors inline-flex items-center gap-2"
            >
              Browse All Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/topics"
              className="px-8 py-3 bg-white text-accent/80 border-2 border-accent/80 rounded-full font-bold hover:bg-accent/10 transition-colors"
            >
              View Topics
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
