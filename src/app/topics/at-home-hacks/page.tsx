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
              Transform Your Nails with Professional DIY Secrets
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Discover the game-changing techniques that nail professionals use daily. These proven methods will revolutionize your at-home nail care routine and deliver results that rival expensive salon visits.
            </p>
          </div>

          {/* Foundation Techniques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Perfect Nail Preparation</h3>
              <p className="text-charcoal-600 text-center mb-4">The secret to long-lasting polish starts with proper nail preparation. Professional nail techs spend 70% of their time on prep work—here's why it matters.</p>
              <ul className="text-sm text-charcoal-500 space-y-1">
                <li>• Dehydrate nails with rubbing alcohol</li>
                <li>• File in one direction only</li>
                <li>• Remove all oils from nail bed</li>
                <li>• Shape before any treatments</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Temperature Control Method</h3>
              <p className="text-charcoal-600 text-center mb-4">Room temperature affects polish consistency more than most realize. This insider trick ensures smooth, even application every single time.</p>
              <ul className="text-sm text-charcoal-500 space-y-1">
                <li>• Warm polish between palms before use</li>
                <li>• Work in 68-72°F environment</li>
                <li>• Store polish upright, away from heat</li>
                <li>• Never shake—roll between hands instead</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-violet-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Professional Timing Secrets</h3>
              <p className="text-charcoal-600 text-center mb-4">Master the precise timing intervals that separate amateur from professional results. These time-tested intervals prevent smudging and ensure durability.</p>
              <ul className="text-sm text-charcoal-500 space-y-1">
                <li>• Wait exactly 90 seconds between coats</li>
                <li>• Test dryness with knuckle tap method</li>
                <li>• Apply thin coats for faster curing</li>
                <li>• Use LED light for 30-second quick cure</li>
              </ul>
            </div>
          </div>

          {/* Advanced Application Techniques */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-8 mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              The 3-Stroke Professional Application Method
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/athome2.jpg"
                  alt="Professional nail application technique"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <p className="text-charcoal-600 mb-6">
                  This technique, used in high-end salons worldwide, ensures flawless coverage with minimal cleanup. Master this method and you'll never struggle with uneven polish again.
                </p>
                <h4 className="font-semibold text-charcoal-800 mb-4">The Professional Process:</h4>
                <ol className="space-y-3 text-charcoal-600">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-rose-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                    <span><strong>Center Stroke:</strong> Start 2mm from cuticle, paint straight down the center</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-rose-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                    <span><strong>Left Side:</strong> Return to base, sweep left side in one smooth motion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-rose-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                    <span><strong>Right Side:</strong> Complete with right side stroke, maintaining consistent pressure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-rose-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                    <span><strong>Seal the Tip:</strong> Gently cap the free edge for chip-resistant wear</span>
                  </li>
                </ol>
                <div className="mt-6 p-4 bg-rose-100 rounded-lg">
                  <p className="text-sm text-charcoal-600">
                    <strong>Pro Insider Tip:</strong> Our premium guide reveals the pressure techniques and brush angles that make this method foolproof, plus advanced troubleshooting for tricky nail shapes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Mistakes Section */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              7 Costly Mistakes That Ruin Your Results
            </h3>
            <p className="text-center text-charcoal-600 mb-8 max-w-2xl mx-auto">
              These are the most common errors even experienced DIYers make. Avoiding these will instantly elevate your nail game.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  mistake: 'Skipping Base Coat', 
                  icon: '🚫', 
                  consequence: 'Staining & poor adhesion',
                  solution: 'Always use formaldehyde-free base'
                },
                { 
                  mistake: 'Thick Polish Layers', 
                  icon: '📏', 
                  consequence: 'Bubbling & slow drying',
                  solution: '3 thin coats beat 1 thick coat'
                },
                { 
                  mistake: 'Neglecting Cuticle Prep', 
                  icon: '✂️', 
                  consequence: 'Uneven application',
                  solution: 'Push back, never cut living tissue'
                },
                { 
                  mistake: 'Wrong File Direction', 
                  icon: '↔️', 
                  consequence: 'Nail splitting & weakness',
                  solution: 'File in one direction only'
                },
                { 
                  mistake: 'Inadequate Drying Time', 
                  icon: '⏱️', 
                  consequence: 'Smudges & dents',
                  solution: 'Wait minimum 2 minutes between coats'
                },
                { 
                  mistake: 'Ignoring Polish Consistency', 
                  icon: '🥤', 
                  consequence: 'Streaky, clumpy finish',
                  solution: 'Thin with 2 drops of thinner max'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-xl border-l-4 border-red-300">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">{item.mistake}</h4>
                      <p className="text-sm text-red-600 mb-2">Leads to: {item.consequence}</p>
                      <p className="text-sm text-charcoal-600 font-medium">Fix: {item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Tools & Setup */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Essential Professional Setup
            </h3>
            <p className="text-center text-charcoal-600 mb-8 max-w-3xl mx-auto">
              Your workspace and tools directly impact your results. Here's how to create a professional-grade setup at home that rivals any salon station.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'LED Desk Lamp', icon: '💡', desc: '5000K daylight for true color', priority: 'Essential' },
                { name: 'Glass File Set', icon: '🔷', desc: '240/280 grit combination', priority: 'Must-Have' },
                { name: 'Cuticle Nippers', icon: '✂️', desc: 'Professional-grade stainless steel', priority: 'Advanced' },
                { name: 'Polish Thinner', icon: '💧', desc: 'Butyl acetate formula only', priority: 'Essential' },
                { name: 'Lint-Free Wipes', icon: '🧻', desc: 'Cotton alternative for prep', priority: 'Must-Have' },
                { name: 'Acetone (100%)', icon: '🧴', desc: 'Pure formula, not drugstore blend', priority: 'Essential' },
                { name: 'Precision Brushes', icon: '🖌️', desc: 'Size 0 and 00 detail brushes', priority: 'Advanced' },
                { name: 'Hand Rest Pad', icon: '🤲', desc: 'Memory foam for stability', priority: 'Must-Have' }
              ].map((tool, index) => (
                <div key={index} className="bg-white p-4 rounded-xl text-center shadow-lg border-2 border-transparent hover:border-blush-300 transition-all">
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <p className="font-semibold text-charcoal-800 text-sm mb-1">{tool.name}</p>
                  <p className="text-xs text-charcoal-500 mb-2">{tool.desc}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    tool.priority === 'Essential' ? 'bg-red-100 text-red-600' :
                    tool.priority === 'Must-Have' ? 'bg-orange-100 text-orange-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {tool.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Longevity Secrets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">14-Day Wear Formula</h3>
              <p className="text-charcoal-600 text-center mb-4">
                This proven layering system extends wear time dramatically. Most people see 10-14 days of chip-free wear using this exact sequence.
              </p>
              <div className="bg-green-100 p-4 rounded-lg">
                <ol className="text-sm text-charcoal-600 space-y-2">
                  <li>1. Dehydrating base coat</li>
                  <li>2. Strengthening ridge filler</li>
                  <li>3. Color in 2-3 thin layers</li>
                  <li>4. Fast-dry top coat</li>
                  <li>5. Cuticle oil application</li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Chemistry Compatibility</h3>
              <p className="text-charcoal-600 text-center mb-4">
                Not all products work together. Understanding chemical compatibility prevents lifting, bubbling, and premature chipping.
              </p>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <ul className="text-sm text-charcoal-600 space-y-2">
                  <li>✓ Oil-free with oil-free only</li>
                  <li>✓ Same brand base/top coats</li>
                  <li>✗ Never mix gel with regular</li>
                  <li>✓ Test new combinations first</li>
                </ul>
              </div>
            </div>
          </div>

{/* Advanced Troubleshooting */}
<div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-16 text-white">
  <h3 className="font-serif text-2xl font-bold mb-6 text-center text-white">Professional Troubleshooting Guide</h3>
  <p className="text-center text-gray-200 mb-8 max-w-2xl mx-auto">
    When things go wrong, professionals know exactly how to fix them. Here are the most common issues and their instant solutions.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h4 className="font-semibold mb-3 text-pink-300">Polish Problems</h4>
      <div className="space-y-3">
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-medium text-sm text-white mb-1">Bubbles in Polish</p>
          <p className="text-xs text-gray-200">Roll bottle, don't shake. Apply thinner coats in cooler room.</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-medium text-sm text-white mb-1">Streaky Application</p>
          <p className="text-xs text-gray-200">Polish too thick. Add 1-2 drops thinner, work quickly in sections.</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-medium text-sm text-white mb-1">Chips Within 24 Hours</p>
          <p className="text-xs text-gray-200">Nail bed had oils. Prep with alcohol, use dehydrating base coat.</p>
        </div>
      </div>
    </div>
    <div>
      <h4 className="font-semibold mb-3 text-purple-300">Application Issues</h4>
      <div className="space-y-3">
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-medium text-sm text-white mb-1">Cuticle Flooding</p>
          <p className="text-xs text-gray-200">Use precision brush with acetone immediately. Work in good light.</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-medium text-sm text-white mb-1">Uneven Coverage</p>
          <p className="text-xs text-gray-200">Maintain consistent pressure. Use 3-stroke method religiously.</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-medium text-sm text-white mb-1">Dull Finish</p>
          <p className="text-xs text-gray-200">Top coat applied over wet color. Wait full 2 minutes between layers.</p>
        </div>
      </div>
    </div>
  </div>
</div>

          {/* Unlock Complete System CTA */}
          <div className="bg-gradient-to-br from-blush-50 to-purple-50 rounded-2xl p-8 mb-16 text-center border-2 border-dashed border-blush-300">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center bg-gradient-to-r from-blush-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 Ready for the Complete System?
              </div>
              <h3 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
                Unlock the Full Professional Method
              </h3>
              <p className="text-lg text-charcoal-600 mb-6">
                What you've learned here is just the foundation. Our comprehensive guide contains the complete professional system used in high-end salons worldwide.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-charcoal-800 mb-2">🎯 Advanced Techniques You'll Master:</h4>
                  <ul className="text-sm text-charcoal-600 space-y-1">
                    <li>• Salon-grade tool recommendations with exact model numbers</li>
                    <li>• Professional color mixing formulas and ratios</li>
                    <li>• Pressure point techniques for difficult nail shapes</li>
                    <li>• Emergency fixes for major mistakes</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-charcoal-800 mb-2">💎 Exclusive Professional Secrets:</h4>
                  <ul className="text-sm text-charcoal-600 space-y-1">
                    <li>• The "humidity hack" that prevents bubbling</li>
                    <li>• Temperature-specific timing adjustments</li>
                    <li>• Brand compatibility charts (save hundreds on mistakes)</li>
                    <li>• 30+ troubleshooting solutions with photo guides</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-green-800 font-medium">
                  ⚡ <strong>Limited Time:</strong> Get instant access to over 50 pages of professional techniques, video demonstrations, and downloadable reference guides.
                </p>
              </div>

              <a
                href="https://example.gumroad.com/premium-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blush-500 to-purple-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-blush-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Access Complete Professional System →
              </a>
              
              <p className="text-xs text-charcoal-500 mt-4">
                ⭐ Join 12,000+ nail enthusiasts who've transformed their at-home results
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-gradient-to-r from-blush-100 to-purple-100 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Continue Your Nail Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/topics/nail-care-guide" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                    Essential Nail Health Foundation
                  </h4>
                  <p className="text-sm text-charcoal-600">
                    Master the fundamentals of nail health that make all techniques more effective and longer-lasting.
                  </p>
                </div>
              </Link>
              <Link href="/topics/nail-art-guides" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                    Advanced Nail Art Techniques
                  </h4>
                  <p className="text-sm text-charcoal-600">
                    Take your skills to the next level with professional nail art methods and creative designs.
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
