
// src/components/Inspo/ShopCTA.tsx
'use client';

interface ShopCTAProps {
  categoryName?: string;
  categorySlug?: string;
}

export default function ShopCTA({ categoryName, categorySlug }: ShopCTAProps) {
  // Map category slugs to shop categories
  const shopCategoryMap: Record<string, string> = {
    'french-tips': 'trendy',
    'ombre': 'trendy',
    'chrome': 'trendy',
    'minimalist': 'trendy',
    'glitter': 'new-year',
    'summer': 'fall', // closest match
    'snowflake-winter-nails': 'winter',
    'chrome-metallic-winter-nails': 'winter',
    'burgundy-wine-winter-nails': 'winter',
    'chocolate-brown-winter-nails': 'winter',
    'velvet-cat-eye-winter-nails': 'winter',
    'minimalist-winter-nails': 'winter',
  };

  const shopCategory = categorySlug ? shopCategoryMap[categorySlug] || 'trendy' : 'trendy';
  const shopUrl = `/shop/${shopCategory}`;

  return (
    <section className="py-20 bg-gradient-to-br from-burgundy-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800"
                alt="Press-on nails collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-burgundy-900/80 to-transparent" />
              
              {/* Floating badges */}
              <div className="absolute top-6 left-6 space-y-3">
                <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-white text-sm font-bold">
                  ✨ Premium Quality
                </div>
                <div className="block bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-white text-sm font-bold">
                  🚀 Fast Shipping
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block w-fit px-4 py-2 bg-gradient-to-r from-burgundy-100 to-pink-100 text-accent rounded-full text-sm font-bold mb-6">
                🛍️ Shop the Look
              </span>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {categoryName 
                  ? `Get ${categoryName} Press-On Nails`
                  : 'Instant Salon-Quality Nails'}
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {categoryName
                  ? `Love these ${categoryName.toLowerCase()}? Skip the salon and get instant results with our curated press-on nail collection. Professional quality, reusable design, and application in under 5 minutes.`
                  : 'Skip the salon wait and achieve professional results instantly with our premium press-on nail collection. Reusable, easy to apply, and available in trending designs.'}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">Apply in 5 minutes – no glue, no damage</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">Reusable up to 10 times with proper care</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">Premium salon-quality materials</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={shopUrl}
                  className="flex-1 px-8 py-4 bg-accent/80 text-white text-center rounded-full font-bold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Shop {categoryName || 'Press-On Nails'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/shop"
                  className="flex-1 px-8 py-4 bg-white text-accent/80 text-center rounded-full font-bold border-2 border-accent/80 hover:bg-accent/10 transition-colors"
                >
                  View All Collections
                </a>
              </div>

              <p className="text-sm text-gray-500 mt-6 text-center sm:text-left">
                ✨ Free shipping on orders over $50 • 30-day returns
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
