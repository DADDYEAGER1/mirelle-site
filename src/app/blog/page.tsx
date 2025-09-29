import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import FeaturedTopicsSection from '@/components/FeaturedTopicsSection';
import ShopSection from '@/components/ShopSection';
import PinterestShowcaseSection from '@/components/PinterestShowcaseSection';
import SubscribeSection from '@/components/SubscribeSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <FeaturedTopicsSection />
      <ShopSection />
      <PinterestShowcaseSection />
      <SubscribeSection />
    </div>
  );
}
