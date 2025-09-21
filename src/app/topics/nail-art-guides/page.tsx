import Link from 'next/link';

export default function NailArtGuides() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/nailart.jpg"
            alt="Nail art guides"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Nail Art Guides
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Step-by-Step Tutorials & Inspiration
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premium CTA Section */}
          <div className="bg-gradient-to-r from-blush-100 to-purple-100 rounded-2xl p-8 mb-16 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-blush-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ Premium Art Course Available
            </div>
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
              Master Professional Nail Art
            </h2>
            <p className="text-lg text-charcoal-600 mb-6 max-w-2xl mx-auto">
              Get our comprehensive <strong>Nail Art Masterclass</strong> with 
              downloadable templates, tool recommendations, and 
              advanced techniques from professional artists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <a
                href="https://hatake21.gumroad.com/l/mirellenailartguide1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blush-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blush-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Masterclass - $19.99
              </a>
              <span className="text-sm text-charcoal-500">or read free content below ↓</span>
            </div>
            <p className="text-sm text-charcoal-500">
              💡 <strong>Tip:</strong> Read our free content first, then upgrade for professional techniques!
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-6">
              Master the Art of Nail Design
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              From beginner-friendly designs to advanced techniques, learn how to create 
              stunning nail art that expresses your unique style.
            </p>
          </div>

          {/* Tutorial Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌸</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Floral Designs</h3>
              <p className="text-charcoal-600 text-center mb-4">Learn to create delicate flower patterns and botanical nail art.</p>
              <ul className="text-sm text-charcoal-500 space-y-1">
                <li>• Cherry blossom nails</li>
                <li>• Rose petal designs</li>
                <li>• Daisy patterns</li>
                <li>• Tropical flowers</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Geometric Patterns</h3>
              <p className="text-charcoal-600 text-center mb-4">Master clean lines and modern geometric nail designs.</p>
              <ul className="text-sm text-charcoal-500 space-y-1">
                <li>• Chevron patterns</li>
                <li>• Abstract lines</li>
                <li>• Triangle designs</li>
                <li>• Minimalist shapes</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Glitter & Sparkle</h3>
              <p className="text-charcoal-600 text-center mb-4">Add glamour with glitter techniques and sparkly finishes.</p>
              <ul className="text-sm text-charcoal-500 space-y-1">
                <li>• Ombre glitter</li>
                <li>• Glitter gradients</li>
                <li>• Holographic effects</li>
                <li>• Chrome finishes</li>
              </ul>
            </div>
          </div>

          {/* Step-by-Step Tutorial */}
          <div className="bg-gradient-to-br from-nude-50 to-blush-50 rounded-2xl p-8 mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Featured Tutorial: French Manicure Twist
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/nailart2.jpg"
                  alt="French manicure tutorial"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-800 mb-4">Step-by-Step Guide:</h4>
                <ol className="space-y-3 text-charcoal-600">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blush-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                    <span>Apply base coat and let dry completely</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blush-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                    <span>Paint two coats of nude polish</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blush-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                    <span>Use a thin brush to create the tip line</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blush-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                    <span>Fill in the tip with white or colored polish</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blush-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">5</span>
                    <span>Apply top coat for shine and protection</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Tools & Supplies */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Essential Tools & Supplies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Dotting Tools', icon: '🔴' },
                { name: 'Thin Brushes', icon: '🖌️' },
                { name: 'Stamping Plates', icon: '🎨' },
                { name: 'Stripping Tape', icon: '📏' },
                { name: 'Glitter', icon: '✨' },
                { name: 'Rhinestones', icon: '💎' },
                { name: 'Top Coat', icon: '🧴' },
                { name: 'Base Coat', icon: '🛡️' }
              ].map((tool, index) => (
                <div key={index} className="bg-white p-4 rounded-xl text-center shadow-lg">
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <p className="font-semibold text-charcoal-800 text-sm">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-gradient-to-r from-blush-100 to-purple-100 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/topics/at-home-hacks" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                    At-Home Nail Art Hacks
                  </h4>
                  <p className="text-sm text-charcoal-600">
                    Professional techniques you can master at home for stunning nail art results.
                  </p>
                </div>
              </Link>
              <Link href="/topics/seasonal-trends" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                    Seasonal Nail Art Trends
                  </h4>
                  <p className="text-sm text-charcoal-600">
                    Stay ahead with the latest seasonal nail art trends and inspiration.
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
