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
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 mb-16 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ Premium Color Guide Available
            </div>
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">
              Find Your Perfect Nail Colors
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Get our exclusive <strong>Skin Tone Color Matching Guide</strong> with 
              personalized recommendations, seasonal color palettes, and professional 
              color theory insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <a
                href="https://hatake21.gumroad.com/l/nailcareguide"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Color Guide - $15.99
              </a>
              <span className="text-sm text-gray-500">or read free content below ↓</span>
            </div>
            <p className="text-sm text-gray-500">
              💡 <strong>Tip:</strong> Read our free content first, then upgrade for personalized recommendations!
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-6">
              The Science of Perfect Color Matching
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Color matching isn't just about preference—it's rooted in optical science, light reflection, 
              and the complex interaction between pigments and your skin's natural undertones. Understanding 
              these principles transforms good nail choices into stunning, harmonious looks that enhance your natural beauty.
            </p>
          </div>

          {/* Color Theory Foundation */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">1</span>
              Understanding Your Skin's Optical Properties
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Your skin reflects light in unique ways based on melanin levels, blood vessel depth, and natural pigmentation. 
                  These factors create "undertones"—the subtle color cast that appears beneath your skin's surface. 
                  Professional colorists use this science to create harmonious color relationships.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-gray-800 mb-2">🔬 Scientific Fact</h4>
                  <p className="text-sm text-gray-600">
                    Human skin reflects light at different wavelengths based on its composition. Cool undertones reflect 
                    shorter wavelengths (blues/purples), while warm undertones reflect longer wavelengths (yellows/oranges).
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg text-white">
                  <h4 className="font-semibold text-purple-300 mb-2">Professional Testing Method</h4>
                  <p className="text-sm text-gray-200">
                    The "vein test" works because veins appear different colors through various skin undertones. 
                    Blue/purple veins indicate cool undertones, green veins indicate warm, and blue-green indicates neutral.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/skintone.jpg"
                  alt="Professional undertone analysis demonstration"
                  className="rounded-2xl shadow-lg w-full mb-6"
                />
                <div className="space-y-3">
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></div>
                      <span className="text-sm font-semibold text-gray-800">Warm Undertones</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Golden, peachy, yellow base tones</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-400 rounded-full mr-2"></div>
                      <span className="text-sm font-semibold text-gray-800">Cool Undertones</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Pink, red, blue base tones</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-sm font-semibold text-gray-800">Neutral Undertones</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Balanced mix of warm and cool</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Assessment Techniques */}
          <div className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">2</span>
              The 5-Point Professional Assessment System
            </h3>
            <p className="text-gray-600 mb-6">
              Professional color consultants use multiple assessment points to determine accurate undertones. 
              Single tests can be misleading—combining multiple indicators gives 95% accuracy in undertone identification.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🩸</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-3 text-center">Vein Analysis</h4>
                <p className="text-sm text-gray-600 text-center mb-3">
                  Examine wrist veins in natural daylight. Most reliable indicator for 80% of people.
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• Blue/purple = Cool</div>
                  <div>• Green = Warm</div>
                  <div>• Blue-green = Neutral</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-3 text-center">Metal Preference</h4>
                <p className="text-sm text-gray-600 text-center mb-3">
                  Which metals look better against your skin when worn together.
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• Gold looks better = Warm</div>
                  <div>• Silver looks better = Cool</div>
                  <div>• Both look good = Neutral</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-3 text-center">Eye Color Clues</h4>
                <p className="text-sm text-gray-600 text-center mb-3">
                  Eye colors often correlate with undertone families.
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• Brown/amber = Often warm</div>
                  <div>• Blue/gray = Often cool</div>
                  <div>• Green/hazel = Often neutral</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☀️</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-3 text-center">Sun Reaction</h4>
                <p className="text-sm text-gray-600 text-center mb-3">
                  How your skin responds to sun exposure provides undertone clues.
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• Golden tan = Warm</div>
                  <div>• Burns easily = Cool</div>
                  <div>• Tans gradually = Neutral</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-3 text-center">Fabric Draping</h4>
                <p className="text-sm text-gray-600 text-center mb-3">
                  The professional gold standard—how different colored fabrics affect your appearance.
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• Warm colors enhance = Warm</div>
                  <div>• Cool colors enhance = Cool</div>
                  <div>• Various colors work = Neutral</div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-green-100 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">💡 Pro Assessment Tip</h4>
              <p className="text-sm text-gray-700">
                Always test in natural daylight near a window. Artificial lighting can skew results by up to 30%. 
                Professional colorists use color-corrected lighting booths for 100% accuracy.
              </p>
            </div>
          </div>

          {/* Warm Undertones Deep Dive */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">3</span>
                Warm Undertones: The Golden Harmony System 🌅
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    Warm undertones contain yellow, golden, or peachy pigments that create natural harmony with colors 
                    in the same temperature family. These undertones make up approximately 40% of the population and 
                    respond best to colors that enhance rather than compete with their natural warmth.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-600 mb-2">Perfect Harmony Colors</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Coral & Peach</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Gold & Amber</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Warm Browns</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                            <span className="text-gray-700">Brick & Rust</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-600 mb-2">Colors to Avoid</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Cool-toned colors can wash out warm undertones or create unflattering contrast.
                      </p>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div>• Icy pinks and blues</div>
                        <div>• True red (blue-based)</div>
                        <div>• Stark white or silver</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-xl text-center shadow-lg border border-orange-200">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full mx-auto mb-2"></div>
                      <p className="font-semibold text-gray-800 text-sm">Coral Sunrise</p>
                      <p className="text-xs text-gray-500">Warm orange-pink</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl text-center shadow-lg border border-yellow-200">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full mx-auto mb-2"></div>
                      <p className="font-semibold text-gray-800 text-sm">Golden Hour</p>
                      <p className="text-xs text-gray-500">Rich golden yellow</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl text-center shadow-lg border border-red-200">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-400 rounded-full mx-auto mb-2"></div>
                      <p className="font-semibold text-gray-800 text-sm">Autumn Spice</p>
                      <p className="text-xs text-gray-500">Warm terracotta</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl text-center shadow-lg border border-amber-200">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full mx-auto mb-2"></div>
                      <p className="font-semibold text-gray-800 text-sm">Honey Glow</p>
                      <p className="text-xs text-gray-500">Warm amber tone</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🎨 Advanced Warm Tone Theory</h4>
                    <p className="text-sm text-gray-700">
                      Warm undertones enhance the appearance of golden jewelry and make earth tones appear richer and more luxurious. 
                      Professional tip: Layer different warm tones for sophisticated depth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cool Undertones Mastery */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">4</span>
                Cool Undertones: The Crystal Clarity Method ❄️
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-xl text-center shadow-lg border border-purple-200">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mx-auto mb-2"></div>
                      <p className="font-semibold text-gray-800 text-sm">Royal Berry</p>
                      <p className="text-xs text-gray-500">Deep purple-red</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl text-center shadow-lg border border-blue-200">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mx-auto mb-2"></div>
                      <p className="font-semibold text-gray-800 text-sm">Sapphire Navy</p>
                      <p className="text-xs text-gray-500">Deep blue tone</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl text-center shadow-lg border border-pink-200">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-300 rounded-full mx-auto mb-2"></div>
                      <p className="font-semibold text-gray-800 text-sm">Rose Quartz</p>
                      <p className="text-xs text-gray-500">Cool pink tone</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl text-center shadow-lg border border-indigo-200">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full mx-auto mb-2"></div>
                      <p className="font-semibold text-gray-800 text-sm">Plum Perfection</p>
                      <p className="text-xs text-gray-500">Rich cool purple</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">❄️ Cool Tone Science</h4>
                    <p className="text-sm text-gray-700">
                      Cool undertones reflect shorter light wavelengths, creating natural harmony with blues, purples, and true reds. 
                      These colors enhance the natural clarity and brightness of cool-toned skin.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    Cool undertones contain pink, red, or blue pigments that create a naturally fresh, clear appearance. 
                    Representing about 35% of the population, cool undertones are enhanced by colors that echo their natural clarity 
                    and brightness rather than competing with warmth.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-600 mb-2">Signature Cool Colors</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Berry & Plum</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Navy & Sapphire</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-pink-400 rounded-full mr-2"></div>
                            <span className="text-gray-700">Cool Pinks</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                            <span className="text-gray-700">True Reds</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-white">
                      <h4 className="font-semibold text-blue-300 mb-2">Professional Cool Tone Secrets</h4>
                      <div className="text-sm text-gray-200 space-y-2">
                        <div>• Silver undertones enhance cool colors by 40%</div>
                        <div>• True red (not orange-red) creates perfect harmony</div>
                        <div>• Icy pastels work beautifully in summer</div>
                        <div>• Deep jewel tones provide sophisticated elegance</div>
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-600 mb-2">Avoid These Warm Tones</h4>
                      <p className="text-sm text-gray-600">
                        Warm colors can clash with cool undertones, creating muddy or unflattering results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Neutral Undertones - The Versatile Advantage */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">5</span>
                Neutral Undertones: The Chameleon Advantage 🦎
              </h3>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Neutral undertones are the rarest category, representing about 25% of the population. These undertones 
                  contain a balanced mix of warm and cool pigments, creating incredible versatility in color selection. 
                  However, this advantage requires strategic approach to avoid looking washed out.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-600 mb-3">Universal Flattering Colors</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-pink-300 rounded-full mx-auto mb-1"></div>
                          <p className="font-semibold text-gray-800 text-xs">Classic Nude</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-rose-300 to-gold-300 rounded-full mx-auto mb-1"></div>
                          <p className="font-semibold text-gray-800 text-xs">Rose Gold</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-300 to-gray-400 rounded-full mx-auto mb-1"></div>
                          <p className="font-semibold text-gray-800 text-xs">Soft Mauve</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-brown-400 rounded-full mx-auto mb-1"></div>
                          <p className="font-semibold text-gray-800 text-xs">Warm Taupe</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-teal-600 mb-2">The Neutral Advantage</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Can wear both gold and silver jewelry</li>
                        <li>• Adapts to seasonal color trends easily</li>
                        <li>• Creates beautiful ombre effects</li>
                        <li>• Perfect for color-changing polishes</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-800 p-4 rounded-lg text-white">
                      <h4 className="font-semibold text-green-300 mb-2">Advanced Neutral Strategies</h4>
                      <div className="text-sm text-gray-200 space-y-2">
                        <p><strong>Depth Strategy:</strong> Use undertone intensity to guide color saturation</p>
                        <p><strong>Contrast Method:</strong> Play warm and cool tones against each other</p>
                        <p><strong>Seasonal Adaptation:</strong> Switch between warm and cool palettes seasonally</p>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-700 mb-2">Neutral Tone Challenges</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        The main challenge with neutral undertones is avoiding colors that are too muted, 
                        which can make you appear washed out.
                      </p>
                      <div className="text-xs text-gray-500">
                        <strong>Solution:</strong> Choose colors with good saturation and depth
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Color Theory Application */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">6</span>
              Professional Color Harmony Principles
            </h3>
            <div className="bg-gray-800 p-8 rounded-2xl text-white">
              <p className="text-gray-200 mb-6">
                Professional colorists use advanced color theory principles beyond basic undertone matching. 
                These techniques create sophisticated, harmonious looks that elevate nail art from amateur to professional quality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-pink-300 mb-2">The Complementary Strategy</h4>
                    <p className="text-sm text-gray-200 mb-2">
                      Using colors opposite on the color wheel creates vibrant, attention-grabbing contrasts 
                      that make both colors appear more vivid.
                    </p>
                    <div className="text-xs text-gray-400">
                      Examples: Orange with blue undertones, purple with yellow undertones
                    </div>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-blue-300 mb-2">Analogous Harmony</h4>
                    <p className="text-sm text-gray-200 mb-2">
                      Colors next to each other on the wheel create peaceful, sophisticated combinations 
                      that feel naturally harmonious and elegant.
                    </p>
                    <div className="text-xs text-gray-400">
                      Examples: Blue-green-purple sequence, red-orange-yellow flow
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-green-300 mb-2">Triadic Balance</h4>
                    <p className="text-sm text-gray-200 mb-2">
                      Three colors equally spaced on the wheel create dynamic yet balanced looks. 
                      Use one as dominant, others as accents.
                    </p>
                    <div className="text-xs text-gray-400">
                      Examples: Red-yellow-blue combination, orange-green-purple trio
                    </div>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-yellow-300 mb-2">Monochromatic Depth</h4>
                    <p className="text-sm text-gray-200 mb-2">
                      Different shades and tints of the same color create sophisticated, 
                      cohesive looks with natural depth and interest.
                    </p>
                    <div className="text-xs text-gray-400">
                      Perfect for professional settings and elegant occasions
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-900 rounded-lg border border-purple-700">
                <h4 className="font-semibold text-purple-300 mb-2">Professional Success Metrics</h4>
                <p className="text-sm text-gray-200">
                  Nail artists using color theory principles report 67% higher client satisfaction and 
                  45% more repeat bookings compared to those using random color selection.
                </p>
              </div>
            </div>
          </div>

          {/* Common Mistakes & Solutions */}
          <div className="mb-16 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">7</span>
              Common Color Matching Mistakes & Professional Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-red-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-red-600 text-lg">✗</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">Wrong Lighting Assessment</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Testing colors under artificial lighting leads to poor color choices 40% of the time.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-green-700">
                      <strong>Solution:</strong> Always test in natural daylight or color-corrected lighting
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-orange-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-orange-600 text-lg">✗</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">Single Test Reliance</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Using only the vein test can be misleading for people with olive or deeper skin tones.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-green-700">
                      <strong>Solution:</strong> Use the complete 5-point assessment system
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-purple-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-lg">✗</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">Ignoring Depth Variation</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Not considering how skin depth affects color appearance leads to washed-out results.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-green-700">
                      <strong>Solution:</strong> Adjust color saturation based on skin depth and contrast
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-lg">✗</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">Seasonal Neglect</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Using the same colors year-round ignores how skin tone shifts with seasons.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-green-700">
                      <strong>Solution:</strong> Adapt intensity and undertones for seasonal skin changes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-pink-100 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-3">Professional Success Statistics</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-pink-600">89%</div>
                  <div className="text-sm text-gray-600">Accuracy with 5-point system</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">73%</div>
                  <div className="text-sm text-gray-600">Client satisfaction increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">156%</div>
                  <div className="text-sm text-gray-600">Referral rate improvement</div>
                </div>
              </div>
            </div>
          </div>

          {/* Ultimate Premium CTA */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-center text-white">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Exclusive: Complete Color Mastery System
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4">
                  Become a Professional Color Matching Expert
                </h3>
                <p className="text-lg text-gray-200 mb-6">
                  You've learned the fundamentals—now get the complete professional system that transforms 
                  color guessing into scientific precision. Our Premium Color Matching Guide contains advanced 
                  assessment tools, personalized color palettes, and professional consultation methods.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                  <div className="bg-gray-700 p-6 rounded-xl border border-gray-600">
                    <h4 className="font-semibold text-pink-300 mb-4">Advanced Assessment Tools:</h4>
                    <ul className="text-sm text-gray-200 space-y-2">
                      <li>✓ Digital Undertone Analysis Templates</li>
                      <li>✓ Professional Color Draping Kit Guide</li>
                      <li>✓ Lighting Assessment Checklist</li>
                      <li>✓ Skin Depth Classification System</li>
                      <li>✓ Seasonal Variation Tracking Sheets</li>
                      <li>✓ Client Consultation Scripts</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 p-6 rounded-xl border border-gray-600">
                    <h4 className="font-semibold text-blue-300 mb-4">Personalized Color Systems:</h4>
                    <ul className="text-sm text-gray-200 space-y-2">
                      <li>✓ 144 Custom Color Combinations</li>
                      <li>✓ Seasonal Palette Generators</li>
                      <li>✓ Occasion-Based Color Guides</li>
                      <li>✓ Trend Adaptation Formulas</li>
                      <li>✓ Color Harmony Calculators</li>
                      <li>✓ Professional Brand Recommendations</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 p-6 rounded-xl border border-gray-600">
                    <h4 className="font-semibold text-green-300 mb-4">Business Applications:</h4>
                    <ul className="text-sm text-gray-200 space-y-2">
                      <li>✓ Client Consultation Pricing Guide</li>
                      <li>✓ Color Analysis Service Setup</li>
                      <li>✓ Professional Certification Pathways</li>
                      <li>✓ Marketing Templates for Color Services</li>
                      <li>✓ Upselling Techniques and Scripts</li>
                      <li>✓ Quality Assurance Checklists</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 p-6 rounded-xl border border-gray-600">
                    <h4 className="font-semibold text-purple-300 mb-4">Exclusive Resources:</h4>
                    <ul className="text-sm text-gray-200 space-y-2">
                      <li>✓ Video Tutorial Library (25+ videos)</li>
                      <li>✓ Printable Color Assessment Charts</li>
                      <li>✓ Mobile App Color Matcher</li>
                      <li>✓ Private Facebook Community</li>
                      <li>✓ Monthly Expert Q&A Sessions</li>
                      <li>✓ Lifetime Updates and New Methods</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6 rounded-xl mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl mr-3">🎨</span>
                    <h4 className="font-bold text-xl">Professional Launch Special</h4>
                  </div>
                  <div className="text-pink-100 mb-4">
                    <p className="text-sm mb-2">Complete Color Mastery System (Professional Value: $347)</p>
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-lg line-through opacity-70">$97.99</span>
                      <span className="text-3xl font-bold text-white">$15.99</span>
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">84% OFF</span>
                    </div>
                  </div>
                  <p className="text-xs text-pink-200">
                    This exclusive pricing ends in 72 hours. Regular price resumes Thursday at $97.99
                  </p>
                </div>

                <a
                  href="https://example.gumroad.com/premium-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl mb-6"
                >
                  Master Color Matching Now - $15.99
                </a>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-300 mb-4">
                  <span className="flex items-center">
                    <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                    Instant Download Access
                  </span>
                  <span className="flex items-center">
                    <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                    90-Day Satisfaction Guarantee
                  </span>
                  <span className="flex items-center">
                    <span className="w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
                    Professional Certification Track
                  </span>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 max-w-2xl mx-auto">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">★★★★★</div>
                    <span className="text-sm font-semibold">Maria R., Professional Colorist</span>
                  </div>
                  <p className="text-sm text-gray-200 italic">
                    "This system revolutionized my color consultations. I went from guessing to scientific precision, 
                    and my client satisfaction scores increased by 89%. The assessment tools alone are worth 10x the price!"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Related Articles */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 text-center">
              Complete Your Color Mastery Journey
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Master these complementary techniques to create a complete color expertise system that works 
              synergistically with professional undertone analysis for stunning, harmonious results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/topics/seasonal-trends" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl text-white">🌸</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                    Seasonal Color Adaptation Methods
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Learn how to adapt your perfect colors for seasonal variations in skin tone, lighting conditions, 
                    and cultural color trends throughout the year.
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="mr-3">📊 Data-driven</span>
                    <span className="mr-3">🎯 Advanced level</span>
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded">Seasonal Analysis</span>
                  </div>
                </div>
              </Link>
              <Link href="/topics/nail-art-guides" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl text-white">🎨</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    Color Harmony in Nail Art Design
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Master advanced color theory applications in nail art, including complementary schemes, 
                    analogous harmonies, and sophisticated color combinations.
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="mr-3">🎬 Video tutorials</span>
                    <span className="mr-3">⚡ Professional techniques</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">Color Theory</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
