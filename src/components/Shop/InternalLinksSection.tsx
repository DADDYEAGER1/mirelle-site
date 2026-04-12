// src/components/Shop/InternalLinksSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Sparkles, Lightbulb, ArrowRight } from 'lucide-react';

interface InternalLink {
  title: string;
  slug: string;
  image: string;
  excerpt?: string;
  description?: string;
  category?: string;
}

interface InternalLinksSectionProps {
  blog?: InternalLink;
  inspo?: InternalLink;
  topic?: InternalLink;
}

// Valid internal links - only these will be shown
const VALID_LINKS = {
  blog: [
    'christmas-nail-designs-2025',
    'goddess-nails-2025',
    'holiday-vacation-nails-travel-guide',
    'new-year-nails-2025',
    'valentine-nails-2026',
    'vampire-nails-2025',
    'wedding-nail-designs',
    'winter-nails-2025',
    'thanksgiving-nails-2025',
    'gold-silver-chrome-christmas-nails-2025',
    'short-christmas-nails-2025',
    'red-green-christmas-nails-2025',
    'white-christmas-nails-snowflake-designs-2025',
    'blooming-gel-nails'
  ],
  inspo: [
    'snowflake-winter-nails',
    'velvet-cat-eye-winter-nails',
    'minimalist-winter-nails',
    'chocolate-brown-winter-nails',
    'chrome-metallic-winter-nails',
    'burgundy-wine-winter-nails'
  ],
  topics: [
    'nail-care-guide',
    'skin-tones',
    'modern-women',
    'nail-art-guides',
    'seasonal-trends'
  ]
};

export default function InternalLinksSection({
  blog,
  inspo,
  topic,
}: InternalLinksSectionProps) {
  // Filter and validate links
  const links = [
    blog && VALID_LINKS.blog.includes(blog.slug) && {
      ...blog,
      href: `/blog/${blog.slug}`,
      icon: BookOpen,
      label: 'Related Article',
      gradient: 'from-blue-500 to-cyan-500',
    },
    inspo && VALID_LINKS.inspo.includes(inspo.slug) && {
      ...inspo,
      href: `/inspo/${inspo.slug}`,
      icon: Sparkles,
      label: 'Nail Inspiration',
      gradient: 'from-pink-500 to-rose-500',
    },
    topic && VALID_LINKS.topics.includes(topic.slug) && {
      ...topic,
      href: `/topics/${topic.slug}`,
      icon: Lightbulb,
      label: 'Learn More',
      gradient: 'from-purple-500 to-indigo-500',
    },
  ].filter(Boolean);

  if (links.length === 0) return null;

  return (
    <section className="container mx-auto px-4 pb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Discover More Inspiration
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {links.map((link) => {
          if (!link) return null;
          
          const Icon = link.icon;
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={link.image}
                  alt={link.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${link.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                
                {/* Label Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`flex items-center gap-2 bg-gradient-to-r ${link.gradient} text-white px-3 py-1.5 rounded-full shadow-lg`}>
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-semibold">{link.label}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {link.title}
                </h3>
                
                {link.excerpt && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {link.excerpt}
                  </p>
                )}
                
                {link.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {link.description}
                  </p>
                )}

                {/* CTA */}
                <div className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${link.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                  Read More <ArrowRight className="w-4 h-4 text-pink-500" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}