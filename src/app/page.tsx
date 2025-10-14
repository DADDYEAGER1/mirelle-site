import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
// import FeaturedBrandsSection from '@/components/FeaturedBrandsSection';
import BlogSection from '@/components/BlogSection';
import FeaturedTopicsSection from '@/components/FeaturedTopicsSection';
import ShopSection from '@/components/ShopSection';
// import PinterestShowcaseSection from '@/components/PinterestShowcaseSection';
import SubscribeSection from '@/components/SubscribeSection';

export const metadata: Metadata = {
  title: 'Mirelle - Premium Nail Care, Inspiration & Expert Tips',
  description: 'Your ultimate destination for nail inspiration, expert care tips, trending designs, and premium nail products. Discover seasonal collections, tutorials, and professional advice.',
  keywords: 'nail inspiration, nail care, press-on nails, nail art, nail trends 2025, seasonal nail designs, nail tips, nail products, nail beauty',
  alternates: {
    canonical: 'https://mirelleinspo.com',
  },
  // ... rest of metadata (same pattern as blog page)
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      {/* <FeaturedBrandsSection /> */}
      <BlogSection />
      <FeaturedTopicsSection />
      <ShopSection />
      {/* <PinterestShowcaseSection /> */}
      <SubscribeSection />
    </div>
  );
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mirelle',
  url: 'https://mirelleinspo.com',
  description: 'Premium nail care, inspiration & expert tips',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://mirelleinspo.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};
