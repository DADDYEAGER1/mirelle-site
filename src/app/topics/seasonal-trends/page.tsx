import Link from 'next/link';

export default function SeasonalTrends() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/nailtrends.jpg"
            alt="Seasonal nail trends"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Seasonal Trends
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Stay Updated with the Latest Seasonal Nail Trends
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premium CTA Section */}
          <div className="bg-gradient-to-r from-blush-100 to-purple-100 rounded-2xl p-8 mb-16 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-blush-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ Premium Trend Guide Available
            </div>
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
              Stay Ahead of Every Season
            </h2>
            <p className="text-lg text-charcoal-600 mb-6 max-w-2xl mx-auto">
              Get our exclusive <strong>Seasonal Trend Forecast</strong> with 
              early access to upcoming trends, seasonal color palettes, and 
              professional styling tips for every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <a
                href="https://example.com/seasonal-trend-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blush-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blush-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Trend Guide - $15.99
              </a>
              <span className="text-sm text-charcoal-500">or read free content below ↓</span>
            </div>
            <p className="text-sm text-charcoal-500">
              💡 <strong>Tip:</strong> Read our free content first, then upgrade for exclusive trends!
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-6">
              Seasonal Nail Inspiration
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Discover the hottest nail trends for every season. From spring florals to 
              winter metallics, stay ahead of the curve with these seasonal inspirations.
            </p>
          </div>

          {/* Seasonal Categories */}
          <div className="space-y-16">
            {/* Spring */}
            <div className="bg-gradient-to-r from-green-100 to-pink-100 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6">🌸 Spring Trends</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src="/springnail.jpg"
                    alt="Spring nail trends"
                    className="rounded-2xl shadow-lg w-full mb-4"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-800 mb-4">Trending This Spring:</h4>
                  <ul className="space-y-2 text-charcoal-600">
                    <li>• Pastel ombre designs</li>
                    <li>• Floral nail art</li>
                    <li>• Soft pink and lavender tones</li>
                    <li>• Minimalist botanical patterns</li>
                    <li>• Pearl and iridescent finishes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Summer */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6">☀️ Summer Trends</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-charcoal-800 mb-4">Hot Summer Styles:</h4>
                  <ul className="space-y-2 text-charcoal-600">
                    <li>• Bright neon colors</li>
                    <li>• Tropical fruit designs</li>
                    <li>• Sunset gradient nails</li>
                    <li>• Beach-inspired textures</li>
                    <li>• Glitter and chrome finishes</li>
                  </ul>
                </div>
                <div>
                  <img
                    src="/summernail.jpg"
                    alt="Summer nail trends"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>

            {/* Fall */}
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6">🍂 Fall Trends</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src="/fallnail.jpg"
                    alt="Fall nail trends"
                    className="rounded-2xl shadow-lg w-full mb-4"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-800 mb-4">Autumn Favorites:</h4>
                  <ul className="space-y-2 text-charcoal-600">
                    <li>• Warm burgundy and wine tones</li>
                    <li>• Leaf and pumpkin designs</li>
                    <li>• Cozy sweater textures</li>
                    <li>• Deep jewel tones</li>
                    <li>• Matte finish nails</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Winter */}
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6">❄️ Winter Trends</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-charcoal-800 mb-4">Winter Wonderland:</h4>
                  <ul className="space-y-2 text-charcoal-600">
                    <li>• Metallic silver and gold</li>
                    <li>• Snowflake and ice designs</li>
                    <li>• Deep navy and emerald</li>
                    <li>• Holographic effects</li>
                    <li>• Glitter and sequin accents</li>
                  </ul>
                </div>
                <div>
                  <img
                    src="/winternail.jpg"
                    alt="Winter nail trends"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Current Season Highlight */}
          <div className="mt-16 bg-gradient-to-br from-blush-50 to-purple-50 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Current Season Spotlight
            </h3>
            <div className="text-center">
              <p className="text-lg text-charcoal-600 mb-6">
                This season, we're seeing a beautiful blend of minimalist elegance and bold statements. 
                Think clean lines, unexpected color combinations, and textures that tell a story.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {['Nude with Gold Accents', 'Deep Berry Tones', 'Minimalist French', 'Textured Metallics'].map((trend) => (
                  <div key={trend} className="bg-white p-4 rounded-xl shadow-lg">
                    <p className="font-semibold text-charcoal-800 text-sm text-center">{trend}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 bg-gradient-to-r from-blush-100 to-purple-100 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/topics/skin-tones" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                    Seasonal Colors for Your Skin Tone
                  </h4>
                  <p className="text-sm text-charcoal-600">
                    Find the perfect seasonal nail colors that complement your unique skin tone.
                  </p>
                </div>
              </Link>
              <Link href="/topics/nail-art-guides" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                    Seasonal Nail Art Techniques
                  </h4>
                  <p className="text-sm text-charcoal-600">
                    Learn how to create seasonal nail art designs that capture the essence of each season.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
