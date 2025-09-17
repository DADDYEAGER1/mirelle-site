import Link from 'next/link';

export default function ModernWomen() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/modern.jpg"
            alt="Modern women nail inspiration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Modern Women Inspiration
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Empowering Nail Looks for the Modern Woman
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premium CTA Section */}
          <div className="bg-gradient-to-r from-blush-100 to-purple-100 rounded-2xl p-8 mb-16 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-blush-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ Premium Style Guide Available
            </div>
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
              Elevate Your Professional Image
            </h2>
            <p className="text-lg text-charcoal-600 mb-6 max-w-2xl mx-auto">
              Get our exclusive <strong>Modern Woman Style Guide</strong> with 
              professional nail looks, confidence-building tips, and curated 
              styles for every career and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <a
                href="https://example.com/modern-woman-style-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blush-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blush-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Style Guide - $15.99
              </a>
              <span className="text-sm text-charcoal-500">or read free content below ↓</span>
            </div>
            <p className="text-sm text-charcoal-500">
              💡 <strong>Tip:</strong> Read our free content first, then upgrade for professional styling!
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-6">
              Nails That Define Your Success
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Discover nail looks that complement your professional life, personal style, 
              and the confidence that comes with being a modern woman.
            </p>
          </div>

          {/* Professional Styles */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-8 text-center">
              Professional & Polished
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Corporate Chic</h4>
                <p className="text-charcoal-600 text-center mb-4">Classic, sophisticated looks perfect for the boardroom.</p>
                <ul className="text-sm text-charcoal-500 space-y-1">
                  <li>• Neutral nude tones</li>
                  <li>• French manicure</li>
                  <li>• Subtle shimmer</li>
                  <li>• Clean, short length</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl p-6">
                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Creative Professional</h4>
                <p className="text-charcoal-600 text-center mb-4">Expressive yet professional styles for creative industries.</p>
                <ul className="text-sm text-charcoal-500 space-y-1">
                  <li>• Bold accent nails</li>
                  <li>• Geometric patterns</li>
                  <li>• Modern metallics</li>
                  <li>• Artistic touches</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Entrepreneur Edge</h4>
                <p className="text-charcoal-600 text-center mb-4">Confident, statement-making nails for business leaders.</p>
                <ul className="text-sm text-charcoal-500 space-y-1">
                  <li>• Deep jewel tones</li>
                  <li>• Minimalist art</li>
                  <li>• Chrome finishes</li>
                  <li>• Power colors</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Lifestyle Categories */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-8 text-center">
              Lifestyle & Occasion
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8">
                <h4 className="font-serif text-xl font-bold text-charcoal-800 mb-4">Weekend Warrior</h4>
                <p className="text-charcoal-600 mb-4">Fun, playful styles for your time off and social events.</p>
                <div className="grid grid-cols-2 gap-4">
                  {['Bright Colors', 'Glitter Accents', 'Fun Patterns', 'Bold Art'].map((style) => (
                    <div key={style} className="bg-white p-3 rounded-xl text-center shadow-sm">
                      <p className="font-semibold text-charcoal-800 text-sm">{style}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-8">
                <h4 className="font-serif text-xl font-bold text-charcoal-800 mb-4">Date Night Glam</h4>
                <p className="text-charcoal-600 mb-4">Elegant, romantic styles for special occasions and evenings out.</p>
                <div className="grid grid-cols-2 gap-4">
                  {['Deep Reds', 'Rose Gold', 'Pearl Finishes', 'Classic French'].map((style) => (
                    <div key={style} className="bg-white p-3 rounded-xl text-center shadow-sm">
                      <p className="font-semibold text-charcoal-800 text-sm">{style}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Empowerment Section */}
          <div className="bg-gradient-to-br from-blush-50 to-purple-50 rounded-2xl p-8 mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Nails as Self-Expression
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/modern2.jpg"
                  alt="Empowering nail art"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-800 mb-4">Your Nails, Your Story</h4>
                <p className="text-charcoal-600 mb-4">
                  Your nail choices can reflect your personality, mood, and aspirations. 
                  Whether you prefer subtle elegance or bold statements, your nails are 
                  a canvas for self-expression.
                </p>
                <ul className="space-y-2 text-charcoal-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blush-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Choose colors that make you feel confident</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blush-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Experiment with different styles and lengths</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blush-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Don't be afraid to try new trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blush-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Remember: confidence is the best accessory</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Style Guide */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Quick Style Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { occasion: 'Job Interview', color: 'Nude or Light Pink', length: 'Short to Medium' },
                { occasion: 'Client Meeting', color: 'Classic Red or Neutral', length: 'Short' },
                { occasion: 'Creative Presentation', color: 'Bold or Artistic', length: 'Medium' },
                { occasion: 'Networking Event', color: 'Sophisticated Dark', length: 'Medium' },
                { occasion: 'Casual Friday', color: 'Fun or Trendy', length: 'Any' },
                { occasion: 'Date Night', color: 'Romantic or Glam', length: 'Medium to Long' },
                { occasion: 'Weekend Brunch', color: 'Bright or Pastel', length: 'Any' },
                { occasion: 'Formal Event', color: 'Elegant or Classic', length: 'Medium' }
              ].map((style, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-lg">
                  <h5 className="font-semibold text-charcoal-800 mb-2">{style.occasion}</h5>
                  <p className="text-sm text-charcoal-600 mb-1"><strong>Color:</strong> {style.color}</p>
                  <p className="text-sm text-charcoal-600"><strong>Length:</strong> {style.length}</p>
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
              <Link href="/topics/skin-tones" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                    Professional Colors for Your Skin Tone
                  </h4>
                  <p className="text-sm text-charcoal-600">
                    Find the perfect professional nail colors that complement your skin tone and enhance your confidence.
                  </p>
                </div>
              </Link>
              <Link href="/topics/seasonal-trends" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                    Seasonal Professional Styles
                  </h4>
                  <p className="text-sm text-charcoal-600">
                    Stay on-trend with seasonal nail styles that work for the modern professional woman.
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
