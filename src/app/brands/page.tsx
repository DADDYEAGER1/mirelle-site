import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllBrands } from '@/lib/brands';
import { BRAND_CATEGORIES, PARTNERSHIP_TIERS } from '@/types/brand';

export const metadata: Metadata = {
  title: 'Featured Brands - Curated Nail Product Partners | Mirellé',
  description: 'Discover our curated collection of nail care brands. From gel polish to press-ons, tools to treatments—each brand is tested and trusted by Mirellé.',
  keywords: 'nail brands, gel polish brands, press on nails, nail tools, nail care products, professional nail products',
  alternates: {
    canonical: 'https://mirelleinspo.com/brands',
  },
  openGraph: {
    title: 'Featured Brands - Curated Nail Product Partners | Mirellé',
    description: 'Discover trusted nail brands curated by Mirellé. Quality tested, professionally reviewed.',
    url: 'https://mirelleinspo.com/brands',
    type: 'website',
    siteName: 'Mirellé',
    images: [{
      url: 'https://mirelleinspo.com/og-brands.jpg',
      width: 1200,
      height: 630,
      alt: 'Mirellé Featured Brands Collection',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Featured Brands | Mirellé',
    description: 'Curated nail brands tested and trusted by Mirellé.',
    images: ['https://mirelleinspo.com/og-brands.jpg'],
    creator: '@mirelleinspo',
  },
};

export default async function BrandsPage() {
  const brands = await getAllBrands();
  
  // Group brands by category
  const brandsByCategory = brands.reduce((acc, brand) => {
    if (!acc[brand.category]) {
      acc[brand.category] = [];
    }
    acc[brand.category].push(brand);
    return acc;
  }, {} as Record<string, typeof brands>);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Featured Nail Brands',
            description: 'Curated collection of professional nail care brands, tested and reviewed by Mirellé.',
            url: 'https://mirelleinspo.com/brands',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: brands.length,
              itemListElement: brands.map((brand, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'Brand',
                  name: brand.name,
                  url: `https://mirelleinspo.com/brands/${brand.slug}`,
                },
              })),
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blush-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Our Featured Brands
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
              Every brand on Mirellé is hand-selected, tested, and trusted. 
              We partner with companies that share our commitment to quality, 
              innovation, and helping you achieve beautiful nails.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blush-600 mb-2">{brands.length}</div>
              <div className="text-charcoal-600">Trusted Brands</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blush-600 mb-2">
                {brands.filter(b => b.featured).length}
              </div>
              <div className="text-charcoal-600">Featured Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blush-600 mb-2">
                {Object.keys(brandsByCategory).length}
              </div>
              <div className="text-charcoal-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blush-600 mb-2">100%</div>
              <div className="text-charcoal-600">Quality Tested</div>
            </div>
          </div>

          {/* Partnership Info */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-charcoal-800 mb-4">
              How We Choose Brands
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-charcoal-700">
              <div>
                <h3 className="font-semibold mb-2">✓ Quality Testing</h3>
                <p className="text-sm">
                  We test products extensively, analyzing ingredients, performance, 
                  and durability before featuring any brand.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">✓ Customer Reviews</h3>
                <p className="text-sm">
                  We analyze thousands of real customer reviews to verify 
                  consistent quality and satisfaction.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">✓ Brand Values</h3>
                <p className="text-sm">
                  We partner with brands that prioritize transparency, 
                  sustainability, and customer care.
                </p>
              </div>
            </div>
          </div>

          {/* Brands by Category */}
          {Object.entries(brandsByCategory).map(([category, categoryBrands]) => (
            <div key={category} className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-charcoal-800 mb-2">
                  {BRAND_CATEGORIES[category as keyof typeof BRAND_CATEGORIES].label}
                </h2>
                <p className="text-charcoal-600">
                  {BRAND_CATEGORIES[category as keyof typeof BRAND_CATEGORIES].description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryBrands.map((brand) => (
                  <Link
                    key={brand.slug}
                    href={`/brands/${brand.slug}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                  >
                    {/* Brand Logo Section */}
                    <div className="relative h-32 bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-6">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        width={150}
                        height={50}
                        className="object-contain"
                      />
                      {/* Partnership Badge */}
                      {brand.featured && (
                        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-xs font-semibold text-charcoal-800 shadow-md">
                          {PARTNERSHIP_TIERS[brand.partnershipTier].badge}
                        </div>
                      )}
                    </div>

                    {/* Brand Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                        {brand.name}
                      </h3>
                      <p className="text-charcoal-600 text-sm leading-relaxed mb-4">
                        {brand.tagline}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center text-blush-600 font-semibold group-hover:text-blush-700 text-sm">
                        View Products
                        <svg 
                          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Partnership CTA */}
          <div className="mt-20 bg-gradient-to-r from-blush-500 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Want to Partner with Mirellé?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              We're always looking for quality nail brands to feature. 
              Reach engaged customers who trust our curation.
            </p>
            <a
              href="mailto:partnerships@mirelleinspo.com"
              className="inline-flex items-center bg-white text-blush-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get in Touch
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
