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
                href="https://hatake21.gumroad.com/l/mirellenailartguide1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blush-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blush-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Style Guide - $19.99
              </a>
              <span className="text-sm text-charcoal-500">or read free content below ↓</span>
            </div>
            <p className="text-sm text-charcoal-500">
              💡 <strong>Tip:</strong> Read our free content first, then upgrade for professional styling!
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-6">
              Your Nails Speak Before You Do
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              In today's competitive landscape, your manicure is a powerful tool of non-verbal communication. Discover how successful women leverage nail styling to enhance their professional presence and personal brand.
            </p>
          </div>

          {/* Psychology of Professional Nails */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-8 text-center">
              The Psychology Behind Power Nails
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-6">
                <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">First Impression Impact</h4>
                <p className="text-charcoal-600 text-center mb-4">Research shows people form judgments within 7 seconds of meeting you. Well-groomed nails signal attention to detail and professionalism.</p>
                <ul className="text-sm text-charcoal-500 space-y-1">
                  <li>• 73% notice hands during handshakes</li>
                  <li>• Grooming affects perceived competence</li>
                  <li>• Clean nails = organizational skills</li>
                  <li>• Color choice influences trustworthiness</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6">
                <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💪</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Confidence Amplifier</h4>
                <p className="text-charcoal-600 text-center mb-4">The right manicure acts as psychological armor, boosting self-assurance in high-stakes situations like interviews and presentations.</p>
                <ul className="text-sm text-charcoal-500 space-y-1">
                  <li>• Personal grooming = self-respect</li>
                  <li>• Perfect nails reduce anxiety</li>
                  <li>• Red increases assertiveness by 12%</li>
                  <li>• Well-maintained = self-control</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-6">
                <div className="w-16 h-16 bg-violet-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-charcoal-800 mb-3 text-center">Industry Intelligence</h4>
                <p className="text-charcoal-600 text-center mb-4">Different industries have unspoken nail etiquette rules. Understanding these codes helps you navigate professional hierarchies effectively.</p>
                <ul className="text-sm text-charcoal-500 space-y-1">
                  <li>• Finance: Conservative neutrals</li>
                  <li>• Tech: Creative freedom accepted</li>
                  <li>• Healthcare: Short, natural only</li>
                  <li>• Creative: Bold statements welcomed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Color Psychology */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Color Psychology for Career Success
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/modern2.jpg"
                  alt="Professional nail color psychology"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <p className="text-charcoal-600 mb-6">
                  Color psychology in professional settings isn't just theory—it's a strategic advantage. Executive coaches and image consultants use specific color formulas to help women project desired qualities in boardrooms and client meetings.
                </p>
                <h4 className="font-semibold text-charcoal-800 mb-4">Strategic Color Choices:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-charcoal-800">Classic Red</p>
                      <p className="text-sm text-charcoal-600">Projects confidence, leadership, and decisiveness</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div>
                      <p className="font-medium text-charcoal-800">Navy Blue</p>
                      <p className="text-sm text-charcoal-600">Communicates trustworthiness and reliability</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-4 h-4 bg-pink-200 rounded-full"></div>
                    <div>
                      <p className="font-medium text-charcoal-800">Nude Tones</p>
                      <p className="text-sm text-charcoal-600">Signals sophistication and attention to detail</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                    <div>
                      <p className="font-medium text-charcoal-800">Deep Neutrals</p>
                      <p className="text-sm text-charcoal-600">Conveys authority and executive presence</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-charcoal-600">
                    <strong>Executive Insight:</strong> Our premium guide includes the exact color formulas used by Fortune 500 executives and the psychological reasoning behind each choice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Length and Shape Strategy */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-8 text-center">
              Strategic Length and Shape Selection
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8">
                <h4 className="font-serif text-xl font-bold text-charcoal-800 mb-4">The Executive Short</h4>
                <p className="text-charcoal-600 mb-6">
                  The most powerful women in business overwhelmingly choose short, perfectly shaped nails. This isn't coincidence—it's strategic communication about priorities, practicality, and professional focus.
                </p>
                <div className="space-y-3">
                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <p className="font-medium text-charcoal-800 mb-1">Square Shape</p>
                    <p className="text-sm text-charcoal-600">Projects strength and decisiveness</p>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <p className="font-medium text-charcoal-800 mb-1">Rounded Square</p>
                    <p className="text-sm text-charcoal-600">Balances authority with approachability</p>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <p className="font-medium text-charcoal-800 mb-1">Oval</p>
                    <p className="text-sm text-charcoal-600">Classic elegance, works for all nail beds</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8">
                <h4 className="font-serif text-xl font-bold text-charcoal-800 mb-4">Creative Professional Length</h4>
                <p className="text-charcoal-600 mb-6">
                  In creative industries, slightly longer nails can signal artistic sensibility and attention to aesthetic detail. The key is maintaining impeccable shape and finish to avoid appearing unprofessional.
                </p>
                <div className="space-y-3">
                  <div className="bg-rose-50 p-3 rounded-lg border border-rose-200">
                    <p className="font-medium text-charcoal-800 mb-1">Almond Shape</p>
                    <p className="text-sm text-charcoal-600">Elongates fingers, appears sophisticated</p>
                  </div>
                  <div className="bg-rose-50 p-3 rounded-lg border border-rose-200">
                    <p className="font-medium text-charcoal-800 mb-1">Coffin/Ballerina</p>
                    <p className="text-sm text-charcoal-600">Modern, trendy but requires perfect execution</p>
                  </div>
                  <div className="bg-rose-50 p-3 rounded-lg border border-rose-200">
                    <p className="font-medium text-charcoal-800 mb-1">Stiletto</p>
                    <p className="text-sm text-charcoal-600">High-impact but limited professional settings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industry-Specific Guidelines */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Industry Insider Guidelines
            </h3>
            <p className="text-center text-charcoal-600 mb-8 max-w-3xl mx-auto">
              Each industry has unwritten rules about professional appearance. Understanding these nuances can be the difference between fitting in and standing out for the right reasons.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  industry: 'Corporate Finance', 
                  do: 'Nude, clear, or classic red', 
                  dont: 'Bright colors, nail art, long length',
                  insight: 'Conservative = trustworthy with money'
                },
                { 
                  industry: 'Tech/Startups', 
                  do: 'Creative freedom, trendy colors', 
                  dont: 'Overly formal or outdated styles',
                  insight: 'Innovation-forward appearance expected'
                },
                { 
                  industry: 'Healthcare', 
                  do: 'Short, natural, well-maintained', 
                  dont: 'Any length that could harbor bacteria',
                  insight: 'Patient safety overrides all style choices'
                },
                { 
                  industry: 'Legal', 
                  do: 'Classic, understated elegance', 
                  dont: 'Distracting colors or designs',
                  insight: 'Credibility depends on traditional professionalism'
                },
                { 
                  industry: 'Creative/Advertising', 
                  do: 'Artistic expression, bold choices', 
                  dont: 'Boring or overly conservative looks',
                  insight: 'Personal style reflects creative capacity'
                },
                { 
                  industry: 'Real Estate', 
                  do: 'Polished, approachable colors', 
                  dont: 'Anything that distracts from property',
                  insight: 'Professional but personable builds trust'
                },
                { 
                  industry: 'Education', 
                  do: 'Appropriate length, professional colors', 
                  dont: 'Overly flashy or long nails',
                  insight: 'Role model appearance for students'
                },
                { 
                  industry: 'Sales', 
                  do: 'Confident colors, well-groomed', 
                  dont: 'Chipped or unkempt appearance',
                  insight: 'Personal presentation = product quality'
                }
              ].map((guideline, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-blush-400">
                  <h5 className="font-semibold text-charcoal-800 mb-3">{guideline.industry}</h5>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-green-600 font-medium">✓ Do:</span> {guideline.do}</p>
                    <p><span className="text-red-600 font-medium">✗ Don't:</span> {guideline.dont}</p>
                    <p className="text-xs text-charcoal-500 italic">{guideline.insight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Confidence Building Techniques */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 mb-16">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              The Confidence Connection
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-100 p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🎭</span>
                </div>
                <h4 className="font-semibold text-charcoal-800 mb-3 text-center">The Armor Effect</h4>
                <p className="text-sm text-charcoal-600 text-center mb-4">
                  Perfect nails create psychological armor, making you feel prepared for any professional challenge.
                </p>
                <ul className="text-xs text-charcoal-500 space-y-1">
                  <li>• Pre-meeting manicure ritual builds confidence</li>
                  <li>• Well-groomed hands reduce self-consciousness</li>
                  <li>• Perfect polish = feeling put-together</li>
                </ul>
              </div>

              <div className="bg-slate-100 p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🗣️</span>
                </div>
                <h4 className="font-semibold text-charcoal-800 mb-3 text-center">Power Gesturing</h4>
                <p className="text-sm text-charcoal-600 text-center mb-4">
                  Beautiful nails make you more likely to use expressive hand gestures, enhancing communication effectiveness.
                </p>
                <ul className="text-xs text-charcoal-500 space-y-1">
                  <li>• Increased gesture frequency by 23%</li>
                  <li>• Enhanced storytelling through hand movement</li>
                  <li>• Greater audience engagement</li>
                </ul>
              </div>

              <div className="bg-slate-100 p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h4 className="font-semibold text-charcoal-800 mb-3 text-center">Presence Amplifier</h4>
                <p className="text-sm text-charcoal-600 text-center mb-4">
                  Attention to nail detail signals overall attention to quality, enhancing your professional presence.
                </p>
                <ul className="text-xs text-charcoal-500 space-y-1">
                  <li>• Others notice grooming standards</li>
                  <li>• Perceived attention to detail increases</li>
                  <li>• Professional credibility enhanced</li>
                </ul>
              </div>
            </div>
          </div>

         {/* Seasonal Professional Strategies */}
<div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-16 text-white">
  <h3 className="font-serif text-2xl font-bold mb-6 text-center text-white">Seasonal Professional Strategies</h3>
  <p className="text-center text-gray-200 mb-8 max-w-2xl mx-auto">
    Strategic seasonal adjustments keep your professional image fresh while maintaining appropriate boundaries for your industry.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h4 className="font-semibold mb-4 text-pink-300">Spring/Summer Professional Palette</h4>
      <div className="space-y-3">
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-medium text-white mb-1">Warm Weather Neutrals</p>
          <p className="text-xs text-gray-200">Lighter nudes and soft pinks that complement summer attire while maintaining professionalism.</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-medium text-white mb-1">Coral and Peach Tones</p>
          <p className="text-xs text-gray-200">Sophisticated alternatives to bright colors that add warmth without compromising authority.</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-medium text-white mb-1">Classic Red Updates</p>
          <p className="text-xs text-gray-200">Slightly brighter or coral-based reds that feel fresh and current.</p>
        </div>
      </div>
    </div>
    <div>
      <h4 className="font-semibold mb-4 text-purple-300">Fall/Winter Authority Colors</h4>
      <div className="space-y-3">
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-medium text-white mb-1">Deep Berry Tones</p>
          <p className="text-xs text-gray-200">Rich burgundies and deep plums that project confidence and sophistication.</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-medium text-white mb-1">Sophisticated Grays</p>
          <p className="text-xs text-gray-200">Modern neutrals that complement fall/winter wardrobes and project contemporary style.</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
          <p className="font-medium text-white mb-1">Classic Burgundy</p>
          <p className="text-xs text-gray-200">The power color of autumn, commanding respect while remaining appropriately professional.</p>
        </div>
      </div>
    </div>
  </div>
</div>

          {/* Unlock Complete Professional System */}
          <div className="bg-gradient-to-br from-blush-50 to-purple-50 rounded-2xl p-8 mb-16 text-center border-2 border-dashed border-blush-300">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center bg-gradient-to-r from-blush-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                👑 Transform Your Professional Presence
              </div>
              <h3 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
                Master the Complete Modern Woman System
              </h3>
              <p className="text-lg text-charcoal-600 mb-6">
                Ready to leverage nail psychology for career advancement? Our comprehensive guide reveals the insider strategies used by executive image consultants and Fortune 500 leaders.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-charcoal-800 mb-2">🎯 Executive-Level Strategies:</h4>
                  <ul className="text-sm text-charcoal-600 space-y-1">
                    <li>• Industry-specific color psychology formulas</li>
                    <li>• C-suite presentation guidelines and techniques</li>
                    <li>• Confidence-building pre-meeting rituals</li>
                    <li>• Personal brand alignment through nail choices</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-charcoal-800 mb-2">💎 Professional Image Secrets:</h4>
                  <ul className="text-sm text-charcoal-600 space-y-1">
                    <li>• 50+ situation-specific nail recommendations</li>
                    <li>• Color matching for different skin tones and outfits</li>
                    <li>• Maintenance schedules for busy professionals</li>
                    <li>• Emergency fixes for important meetings</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-green-800 font-medium">
                  💼 <strong>Career Investment:</strong> Join 15,000+ professional women who've enhanced their executive presence through strategic nail styling.
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
                ⚡ Instant digital access • 30-day satisfaction guarantee • Mobile-friendly format
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-gradient-to-r from-blush-100 to-purple-100 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6 text-center">
              Continue Your Professional Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/topics/skin-tones" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                    Professional Colors for Your Skin Tone
                  </h4>
                  <p className="text-sm text-charcoal-600">
                    Discover the exact color formulas that complement your skin tone while maintaining professional authority and presence.
                  </p>
                </div>
              </Link>
              <Link href="/topics/seasonal-trends" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                    Executive Presence Through Seasons
                  </h4>
                  <p className="text-sm text-charcoal-600">
                    Master seasonal professional styling that keeps your image fresh while respecting industry expectations and hierarchies.
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
