// src/app/page.tsx
import type { Metadata } from 'next';
import SubscribeSection from '@/components/Homepage/SubscribeSection';
import TrendTimelineHero from '@/components/Homepage/TrendTimelineHero';
import Hero1Section from '@/components/Homepage/Hero1Section';
import Hero2Section from '@/components/Homepage/Hero2Section';
import BlogCarousel from '@/components/Homepage/BlogCarousel';
import MustReadSection from '@/components/Homepage/MustReadSection';
import InspoCategoriesCarousel from '@/components/Homepage/InspoCategoriesCarousel';
import InspoMasonryGrid from '@/components/Homepage/InspoMasonryGrid';
import { getAllBlogPosts } from '@/lib/blog';
import { getAllDesignSlugs, getDesignData, getDesignImages } from '@/lib/inspo';

export const metadata: Metadata = {
  title: 'Mirellé - Premium Nail Design & Inspiration',
  description: 'Discover trending nail designs, expert tutorials, and premium press-ons. Your destination for nail art inspiration.',
  keywords: 'nail designs, nail art, press on nails, nail inspiration, nail tutorials, trending nails',
  openGraph: {
    title: 'Mirellé - Premium Nail Design & Inspiration',
    description: 'Discover trending nail designs, expert tutorials, and premium press-ons.',
    type: 'website',
    url: 'https://mirelleinspo.com',
    siteName: 'Mirellé Inspo',
  },
};

export default async function Home() {
  // Fetch all data
  const allBlogPosts = await getAllBlogPosts();
  
  // Get 6 inspo categories with null checking
  const inspoSlugs = getAllDesignSlugs();
  const inspoCategories = inspoSlugs
    .slice(0, 6)
    .map(slug => getDesignData(slug))
    .filter((cat): cat is NonNullable<typeof cat> => cat !== null);
  
  // Get masonry grid images (using first category) with safety check
  const masonryImages = inspoSlugs.length > 0 
    ? await getDesignImages(inspoSlugs[0]) 
    : [];

  return (
    <div className="font-body bg-background text-foreground">
      {/* 1. Subscribe Section */}
      <SubscribeSection />

      {/* <TrendTimelineHero posts={allBlogPosts} /> */}
      
      {/* 2. Hero1 - Single Featured Blog Post */}
      <Hero1Section />
      
      {/* 3. Hero2 - Mixed Content Grid */}
      <Hero2Section />
      
      {/* 4. Subscribe Section (Duplicate) */}
      {/* <SubscribeSection /> */}
      
      {/* 5. Blog Carousel - 8 Featured Posts */}
      <BlogCarousel posts={allBlogPosts} />
      
      {/* 6. Must Read Section - 4 Topics */}
      <MustReadSection/>
      
      {/* 8. Inspo Categories Carousel - 6 Categories */}
      {inspoCategories.length > 0 && (
        <InspoCategoriesCarousel categories={inspoCategories} />
      )}
      
{/* 
      {masonryImages.length > 0 && (
        <InspoMasonryGrid images={masonryImages} />
      )} */}
      
      {/* 10. Subscribe Section (Final) */}
      <SubscribeSection />
    </div>
  );
}
