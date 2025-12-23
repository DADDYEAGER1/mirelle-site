// src/app/inspo/page.tsx
import { Metadata } from 'next';
import InspoHero from '@/components/Inspo/InspoHero';
import CategoryFilterBar from '@/components/Inspo/CategoryFilterBar';
import FeaturedCarousel from '@/components/Inspo/FeaturedCarousel';
import CategoryGrid from '@/components/Inspo/CategoryGrid';
import AboutInspo from '@/components/Inspo/AboutInspo';
import ExploreSection from '@/components/Inspo/ExploreSection';
import { getAllDesignSlugs, getDesignData, getDesignsByCategory } from '@/lib/inspo';
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateInspoCollectionSchema,
  generateItemListSchema,
  generateBreadcrumbSchema,
} from '@/lib/inspoSchemas';

export const metadata: Metadata = {
  title: '1K+ Designs Taking Over 2026 (Chrome, Cat Claw, Square)',
  description: 'Browse 1,000+ trending designs with tutorials: chrome finishes, cat claw shapes, square tips, milky pastels, 3D art. New designs weekly. 50K+ saving daily. Find yours!',
  keywords: [
    'nail design inspiration 2026',
    'chrome nails 2026',
    'cat claw nail shape',
    'square nails trending',
    'milky nail designs',
    '3D nail art ideas',
    'trending nail inspiration',
  ],
  alternates: {
    canonical: 'https://mirelleinspo.com/inspo',
  },
  openGraph: {
    title: '1K+ Designs Dominating 2026 - Chrome, Cat Claw & More',
    description: 'Discover trending nail designs with step-by-step tutorials: chrome, cat claw, square, milky pastels. New designs weekly.',
    url: 'https://mirelleinspo.com/inspo',
    siteName: 'Mirellè Inspo',
    type: 'website',
    images: [
      {
        url: 'https://mirelleinspo.com/images/inspo-hero-2026-trending.jpg',
        width: 1200,
        height: 630,
        alt: 'Gallery of 1000+ trending nail designs for 2026',
      },
    ],
  },
};

export default async function InspoPage() {
  const designSlugs = getAllDesignSlugs();
  const designs = designSlugs.map((slug) => getDesignData(slug)).filter(Boolean) as any[];
  const designsByCategory = getDesignsByCategory();

  // Generate schemas
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  const collectionSchema = generateInspoCollectionSchema(designs.length);
  const itemListSchema = generateItemListSchema(designs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://mirelleinspo.com' },
    { name: 'Inspiration Gallery', url: 'https://mirelleinspo.com/inspo' },
  ]);

  return (
    <>
      {/* Schema markup - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#f9fafb]">
        {/* Hero Section */}
        <InspoHero />

        {/* Category Filter Bar */}
        <CategoryFilterBar />

        {/* This Week's Styles Carousel */}
        <FeaturedCarousel designs={designs.slice(0, 6)} />

        {/* Category Grid */}
        <CategoryGrid designs={designs} designsByCategory={designsByCategory} />

        {/* About Section */}
        <AboutInspo />

        {/* Explore Section */}
        <ExploreSection />
      </div>
    </>
  );
}