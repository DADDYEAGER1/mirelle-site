import Link from 'next/link';

export default function AtHomeHacks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/athome.jpg"
            alt="At-home nail hacks"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            At-Home Nail Hacks
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Professional Techniques You Can Master at Home
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premium CTA Section */}
          <div className="bg-gradient-to-r from-blush-100 to-purple-100 rounded-2xl p-8 mb-16 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-blush-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ Premium guide Available
            </div>
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
              Master Salon Techniques at Home
            </h2>
            <p className="text-lg text-charcoal-600 mb-6 max-w-2xl mx-auto">
              Get our comprehensive <strong>At-Home DIY Guide</strong> with
              professional tool guides, and insider secrets 
              from top nail technicians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <a
                href="https://hatake21.gumroad.com/l/nailcareguide"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blush-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blush-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Home Course - $15.99
              </a>
              <span className="text-sm text-charcoal-500">or read free content below ↓</span>
            </div>
            <p className="text-sm text-charcoal-500">
              💡 <strong>Tip:</strong> Read our free content first, then upgrade for professional techniques!
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-6">
              Salon-Quality Results at Home
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Master these professional techniques and hacks to achieve salon-quality 
              nail results from the comfort of your own home.
            </p>
          </div>

          {/* Essential Hacks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Perfect Cuticles</h3>
              <p className="text-charcoal-600 text-center mb-4">Soak nails in warm water, then gently push back cuticles with an orange stick.</p>
              <ul className="text-sm text-charcoal-500 space-y-1">
                <li>• Use cuticle oil daily</li>
                <li>• Never cut cuticles</li>
                <li>• Push back gently</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Clean Application</h3>
              <p className="text-charcoal-600 text-center mb-4">Use a small brush dipped in acetone to clean up polish around the edges.</p>
              <ul className="text-sm text-charcoal-500 space-y-1">
                <li>• Work in thin layers</li>
                <li>• Clean up mistakes quickly</li>
                <li>• Use a steady hand</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Quick Drying</h3>
              <p className="text-charcoal-600 text-center mb-4">Spray with cooking oil or use ice water to speed up drying time.</p>
              <ul className="text-sm text-charcoal-500 space-y-1">
                <li>• Use quick-dry top coat</li>
                <li>• Avoid thick layers</li>
                <li>• Be patient between coats</li>
              </ul>
            </div>
          </div>

          {/* Step-by-Step Guide */}
          <div className="bg-gradient-to-br from-nude-50 to-blush-50 rounded-2xl p-8 mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Professional At-Home Manicure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/athome2.jpg"
                  alt="At-home manicure"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-800 mb-4">Step-by-Step Process:</h4>
                <ol className="space-y-3 text-charcoal-600">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blush-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                    <span>Remove old polish and shape nails</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blush-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                    <span>Soak hands in warm, soapy water</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blush-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                    <span>Gently push back cuticles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blush-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                    <span>Apply base coat and let dry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blush-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">5</span>
                    <span>Apply 2 thin coats of polish</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-blush-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">6</span>
                    <span>Finish with top coat</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Tools & Products */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Essential At-Home Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Nail File', icon: '📏', desc: 'Fine grit for shaping' },
                { name: 'Cuticle Pusher', icon: '🔧', desc: 'Orange stick or metal tool' },
                { name: 'Base Coat', icon: '🛡️', desc: 'Protects natural nails' },
                { name: 'Top Coat', icon: '✨', desc: 'Seals and adds shine' },
                { name: 'Cuticle Oil', icon: '💧', desc: 'Keeps cuticles healthy' },
                { name: 'Nail Polish Remover', icon: '🧴', desc: 'Acetone-free preferred' },
                { name: 'Cotton Pads', icon: '🩹', desc: 'For cleanup and removal' },
                { name: 'Small Brush', icon: '🖌️', desc: 'For detailed cleanup' }
              ].map((tool, index) => (
                <div key={index} className="bg-white p-4 rounded-xl text-center shadow-lg">
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <p className="font-semibold text-charcoal-800 text-sm mb-1">{tool.name}</p>
                  <p className="text-xs text-charcoal-500">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tips */}
          <div className="bg-gradient-to-r from-charcoal-800 to-charcoal-900 rounded-2xl p-8 mb-16 text-white">
            <h3 className="font-serif text-2xl font-bold mb-6 text-center">Pro Tips for Success</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Timing is Everything</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Wait 2-3 minutes between coats</li>
                  <li>• Apply polish in thin layers</li>
                  <li>• Don't rush the drying process</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Quality Matters</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Invest in good quality brushes</li>
                  <li>• Use fresh polish (not old/thick)</li>
                  <li>• Keep tools clean and organized</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-gradient-to-r from-blush-100 to-purple-100 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/topics/nail-care-guide" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                    Essential Nail Care Routine
                  </h4>
                  <p className="text-sm text-charcoal-600">
                    Learn the fundamentals of nail care to keep your nails healthy and strong.
                  </p>
                </div>
              </Link>
              <Link href="/topics/nail-art-guides" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                    At-Home Nail Art Techniques
                  </h4>
                  <p className="text-sm text-charcoal-600">
                    Master nail art techniques you can do at home with simple tools.
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
