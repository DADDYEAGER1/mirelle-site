import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedBrands } from '@/lib/brands';
import { PARTNERSHIP_TIERS } from '@/types/brand';

export default async function FeaturedBrandsSection() {
  const brands = await getFeaturedBrands(6); // Show top 6 featured brands

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-nude-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-800 mb-4">
            Brands We Love
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            We partner with brands that share our passion for quality, innovation, 
            and helping you achieve beautiful nails. Each brand is carefully curated 
            based on product quality, customer reviews, and real-world performance.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Brand Hero Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
                <Image
                  src={brand.heroImage}
                  alt={`${brand.name} - ${brand.tagline}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Partnership Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-charcoal-800 shadow-md">
                  {PARTNERSHIP_TIERS[brand.partnershipTier].badge} {PARTNERSHIP_TIERS[brand.partnershipTier].label}
                </div>
              </div>

              {/* Brand Content */}
              <div className="p-6">
                {/* Brand Logo */}
                <div className="mb-4 h-16 flex items-center">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </div>

                {/* Brand Name & Tagline */}
                <h3 className="text-xl font-bold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed mb-4">
                  {brand.tagline}
                </p>

                {/* Stats */}
                {brand.stats && (
                  <div className="flex items-center gap-4 text-sm text-charcoal-500 mb-4">
                    {brand.stats.avgRating && (
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">⭐</span>
                        <span className="font-semibold">{brand.stats.avgRating}</span>
                        <span className="ml-1">({brand.stats.reviewCount?.toLocaleString()})</span>
                      </div>
                    )}
                  </div>
                )}

                {/* CTA */}
                <div className="flex items-center text-blush-600 font-semibold group-hover:text-blush-700">
                  Explore Brand
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

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/brands"
            className="inline-flex items-center bg-gradient-to-r from-blush-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blush-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Brands
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-charcoal-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">✓</div>
              <h4 className="font-semibold text-charcoal-800 mb-2">Quality Verified</h4>
              <p className="text-sm text-charcoal-600">
                Every brand tested and reviewed by our team
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="font-semibold text-charcoal-800 mb-2">Direct Partnerships</h4>
              <p className="text-sm text-charcoal-600">
                Authentic relationships with each brand
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">💎</div>
              <h4 className="font-semibold text-charcoal-800 mb-2">Exclusive Offers</h4>
              <p className="text-sm text-charcoal-600">
                Special deals for Mirellé community members
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
