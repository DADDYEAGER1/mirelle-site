import { Metadata } from 'next';
import { getAllCategorySlugs, getCategoryData, getShowcaseProducts } from '@/lib/shop';
import HeroCarousel from '@/components/Shop/HeroCarousel';
import ShopCategoryNav from '@/components/Shop/ShopCategoryNav';
import CategoryCard from '@/components/Shop/CategoryCard';

export const metadata: Metadata = {
  title: 'Press-Ons from $3.99: Chrome, Cat Claw & 2026 Trends',
  description: 'Salon-quality press-ons in 10min. Chrome, cat claw, square & milky 2026 trends. Last 2-3 weeks, reusable 5-10x, zero damage. 200+ designs. Ships 24hrs. From $3.99!',
  keywords: [
    'press-on nails 2026',
    'chrome press-ons',
    'cat claw press-on nails',
    'square press-on nails',
    'cheap press-on nails',
    'reusable press-ons',
    'trending nail designs',
    'salon quality press-ons',
    'milky press-on nails',
    'affordable nail art',
  ],
  openGraph: {
    title: 'Press-Ons from $3.99: 2026 Trending Styles (Chrome, Cat Claw, Square)',
    description: 'Salon nails in 10min! Chrome, cat claw, square & milky trends. Last 2-3 weeks, reusable 5-10x, zero damage. 200+ designs. Ships 24hrs.',
    url: 'https://mirelleinspo.com/shop',
    siteName: 'Mirellé Inspo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mirelleinspo.com/shop',
  },
};

export default async function ShopPage() {
  const categorySlugs = getAllCategorySlugs();
  const categories = categorySlugs
    .map(slug => getCategoryData(slug))
    .filter(Boolean);

  // Get showcase products for carousel
  const showcaseProducts = await getShowcaseProducts();
  
  // Map to carousel format with 8 images
  const carouselImages = showcaseProducts.slice(0, 8).map(product => ({
    url: product.image,
    name: product.name,
  }));

  // Category hero images
  const categoryHeroImages: { [key: string]: string } = {
    'fall': showcaseProducts[0]?.image || '/fallsection.jpg',
    'christmas': showcaseProducts[1]?.image || '/christmassection.jpg',
    'winter': showcaseProducts[2]?.image || '/wintersection.jpg',
    'halloween': showcaseProducts[3]?.image || '/halloweenbannerimg.jpg',
    'new-year': showcaseProducts[4]?.image || '/newyearsection.jpeg',
    'trendy': showcaseProducts[5]?.image || '/trendsection.jpg',
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container-standard pt-20 pb-16 sm:pt-24 sm:pb-20">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-[36px] sm:text-[42px] leading-tight tracking-tight mb-4">
            Press-On Nails
          </h1>
          <p className="font-body text-base sm:text-lg text-foreground/80 max-w-[800px] mx-auto leading-relaxed">
            60+ curated designs starting at $3.99 • 2-week wear guaranteed • 
            Free shipping on orders $35+ • Easy 5-minute application
            <br />
            <span className="text-sm">Curated by Mirellé editors</span>
          </p>
        </div>

        {/* Vogue-style Carousel */}
        <HeroCarousel images={carouselImages} />
      </section>

      {/* Horizontal Category Navigation */}
      <ShopCategoryNav 
        categories={categories.map(c => ({
          slug: c!.slug,
          displayName: c!.displayName,
        }))} 
      />

      {/* Category Grid */}
      <section className="container-wide py-20 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {categories.map((category) => {
            if (!category) return null;
            
            const categoryImage = categoryHeroImages[category.slug] || category.heroImage;
            
            return (
              <CategoryCard
                key={category.slug}
                slug={category.slug}
                displayName={category.displayName}
                imageUrl={categoryImage}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}