import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import FeaturedTopicsSection from '@/components/FeaturedTopicsSection';
import ShopSection from '@/components/ShopSection';
import SubscribeSection from '@/components/SubscribeSection';
import StickyBottomNav from '@/components/ui/StickyBottomNav'; // ✅ NEW: Phase 4
import InspoShowcase from '@/components/InspoShowcase'; // ✅ NEW


export const metadata: Metadata = {
  title: 'Mirellé - 500+ Nail Designs & Press-Ons from $3.99',
  description: 'Get 500+ trending nail designs, premium press-ons from $3.99, and salon secrets. DIY tutorials, seasonal collections, expert tips. Join 50K+ nail lovers!',
  keywords: 'nail inspiration 2025, press on nails, nail art ideas, trending nail designs, seasonal nails, DIY nail tutorials, cheap press ons, nail care tips, chrome nails, gel nail designs, holiday nails, nail products under $10',
  alternates: {
    canonical: 'https://mirelleinspo.com',
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ShopSection />
      <FeaturedTopicsSection />
      {/* <InspoShowcase />  */}
      <BlogSection />
      <SubscribeSection />
      
      <StickyBottomNav /> {/* ✅ NEW: Phase 4 - Mobile sticky nav */}
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
