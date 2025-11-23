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
  title: '1,000+ Nail Designs 50K+ Are Obsessed With (Save Before Gone)',
  description: 'Get chrome, cat claw & square nails dominating 2026. Press-ons from $3.99, trending tutorials, 2.5M Pinterest saves. 50K+ trust us. Your next mani starts here!',
  keywords: 'trending nail designs 2026, chrome nails, cat claw nails, square nails 2026, press on nails cheap, nail inspiration Pinterest, DIY nail tutorials, seasonal nail collections, milky nails trend, 3D nail art, popsicle nail colors, pearl nails, TikTok viral nails, affordable press-ons, nail designs under $10',
  alternates: {
    canonical: 'https://mirelleinspo.com/topics',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Complete 2026 Nail Guides: Chrome, Cat Claw, Square & More',
    description: 'Expert guides for trending 2026 techniques: chrome finishes, cat claw shapes, square filing, milky pastels. Step-by-step for every level. Master trending nails!',
    type: 'website',
    url: 'https://mirelleinspo.com/topics',
    siteName: 'Mirellè Inspo',
    locale: 'en_US',
    images: [{
      url: 'https://mirelleinspo.com/featuretopicbanner-2026.jpg',
      width: 1200,
      height: 630,
      alt: 'Mirellè Inspo Complete Nail Guides for 2026 Trending Techniques',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 Nail Guides: Chrome, Cat Claw & Square (Expert Tips)',
    description: 'Master trending techniques with step-by-step guides. Every skill level. Pro secrets inside →',
    images: ['https://mirelleinspo.com/twitter-topics-2026.jpg'],
    creator: '@mirelleinspo',
    site: '@mirelleinspo',
  },
  other: {
    'pin:description': 'Complete 2026 nail guides! Master chrome, cat claw, square & milky techniques. Expert step-by-step tutorials for every skill level. Save these guides!',
    'pinterest-rich-pin': 'true',
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
