import Link from 'next/link';

export default function SkinTones() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/skintone.jpg"
            alt="Nail colors for skin tones"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            For Skin Tones
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Find the Perfect Nail Colors for Your Skin Tone
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premium CTA Section */}
          <div className="bg-gradient-to-r from-blush-100 to-purple-100 rounded-2xl p-8 mb-16 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-blush-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ Premium Color Guide Available
            </div>
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
              Find Your Perfect Nail Colors
            </h2>
            <p className="text-lg text-charcoal-600 mb-6 max-w-2xl mx-auto">
              Get our exclusive <strong>Skin Tone Color Matching Guide</strong> with 
              personalized recommendations, seasonal color palettes, and professional 
              color theory insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <a
                href="https://example.com/skin-tone-color-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blush-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blush-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Color Guide - $15.99
              </a>
              <span className="text-sm text-charcoal-500">or read free content below ↓</span>
            </div>
            <p className="text-sm text-charcoal-500">
              💡 <strong>Tip:</strong> Read our free content first, then upgrade for personalized recommendations!
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-6">
              The Perfect Match
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Discover which nail colors will make your skin glow and enhance your natural beauty. 
              From warm to cool undertones, find your perfect nail color palette.
            </p>
          </div>

          {/* Skin Tone Categories */}
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-4">Warm Undertones</h3>
              <p className="text-charcoal-600 mb-6">
                If your skin has golden, peachy, or yellow undertones, these colors will complement you beautifully.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Coral', 'Peach', 'Gold', 'Warm Red'].map((color) => (
                  <div key={color} className="bg-white p-4 rounded-xl text-center shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full mx-auto mb-2"></div>
                    <p className="font-semibold text-charcoal-800">{color}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-4">Cool Undertones</h3>
              <p className="text-charcoal-600 mb-6">
                If your skin has pink, red, or blue undertones, these colors will make you shine.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Berry', 'Plum', 'Navy', 'Cool Pink'].map((color) => (
                  <div key={color} className="bg-white p-4 rounded-xl text-center shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full mx-auto mb-2"></div>
                    <p className="font-semibold text-charcoal-800">{color}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-4">Neutral Undertones</h3>
              <p className="text-charcoal-600 mb-6">
                If you have balanced undertones, you can pull off almost any color with confidence.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Nude', 'Rose Gold', 'Mauve', 'Taupe'].map((color) => (
                  <div key={color} className="bg-white p-4 rounded-xl text-center shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-pink-300 rounded-full mx-auto mb-2"></div>
                    <p className="font-semibold text-charcoal-800">{color}</p>
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
              <Link href="/topics/seasonal-trends" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                    Seasonal Color Trends
                  </h4>
                  <p className="text-sm text-charcoal-600">
                    Stay updated with the latest seasonal nail color trends and how to adapt them to your skin tone.
                  </p>
                </div>
              </Link>
              <Link href="/topics/nail-art-guides" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                    Nail Art Color Combinations
                  </h4>
                  <p className="text-sm text-charcoal-600">
                    Learn how to create stunning nail art using colors that complement your skin tone.
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
