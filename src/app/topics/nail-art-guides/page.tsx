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
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 mb-16 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ Premium Art Course Available
            </div>
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">
              Master Professional Nail Art
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Get our comprehensive <strong>Nail Art Masterclass</strong> with 
              downloadable templates, tool recommendations, and 
              advanced techniques from professional artists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <a
                href="https://hatake21.gumroad.com/l/mirellenailartguide1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Masterclass - $19.99
              </a>
              <span className="text-sm text-gray-500">or read free content below ↓</span>
            </div>
            <p className="text-sm text-gray-500">
              💡 <strong>Tip:</strong> Read our free content first, then upgrade for professional techniques!
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-6">
              From Canvas to Masterpiece: The Science of Nail Art
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nail art isn't just creative expression—it's a precise blend of chemistry, technique, and artistic vision. Discover the professional methods that separate amateur attempts from gallery-worthy designs.
            </p>
          </div>

          {/* Foundation Techniques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-3 text-center">Precision Foundation</h3>
              <p className="text-gray-600 text-center mb-4">Master the mathematical precision behind flawless nail art. Professional artists use exact ratios and measurements—never guess work.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Golden ratio proportions for balanced designs</li>
                <li>• Symmetry mapping techniques</li>
                <li>• Paint consistency formulas</li>
                <li>• Temperature-controlled application</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚗️</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-3 text-center">Color Chemistry Mastery</h3>
              <p className="text-gray-600 text-center mb-4">Understanding pigment science transforms your color mixing from trial-and-error to predictable, professional results every time.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Undertone compatibility charts</li>
                <li>• Opacity and translucency control</li>
                <li>• pH-balanced medium selection</li>
                <li>• Light-fastness preservation methods</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-800 mb-3 text-center">Professional Timing Protocols</h3>
              <p className="text-gray-600 text-center mb-4">Nail art success depends on precise timing intervals. Learn the exact seconds that separate amateur smudges from gallery-quality finishes.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Layer-specific drying requirements</li>
                <li>• Humidity compensation techniques</li>
                <li>• Multi-step coordination systems</li>
                <li>• Emergency correction windows</li>
              </ul>
            </div>
          </div>

          {/* Advanced Technique Breakdown */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 mb-16">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 text-center">
              The Professional's Secret: Layered Depth Technique
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/nailart2.jpg"
                  alt="Professional layered depth nail art technique"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-6">
                  This advanced method creates the illusion of three-dimensional depth on a flat surface. Used by nail artists charging $200+ per session, this technique transforms simple designs into museum-quality art pieces.
                </p>
                <h4 className="font-semibold text-gray-800 mb-4">The Five-Layer System:</h4>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-rose-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                    <span><strong>Foundation Layer:</strong> Mathematically calculated base opacity for light refraction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-rose-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                    <span><strong>Shadow Mapping:</strong> Strategic darker tones to create dimensional illusion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-rose-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                    <span><strong>Core Design:</strong> Primary elements with precise viscosity control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-rose-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                    <span><strong>Highlight Integration:</strong> Light placement following optical physics principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-rose-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">5</span>
                    <span><strong>Protective Seal:</strong> UV-resistant topcoat with refractive index matching</span>
                  </li>
                </ol>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Professional Secret:</strong> Our premium masterclass reveals the exact brush angles and pressure points that make this technique foolproof, plus troubleshooting for 15+ common mistakes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tool Science and Selection */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-8 text-center">
              Professional Tool Engineering
            </h3>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional nail artists don't just use different tools—they understand the engineering behind each instrument. Tool selection impacts every aspect of your final result.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8">
                <h4 className="font-serif text-xl font-bold text-gray-800 mb-4">Brush Engineering Science</h4>
                <p className="text-gray-600 mb-6">
                  The difference between amateur and professional results often comes down to brush selection. Each brush type serves specific fluid dynamics purposes.
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-amber-200">
                    <p className="font-medium text-gray-800 mb-1">Natural vs Synthetic Bristles</p>
                    <p className="text-sm text-gray-600">Natural absorbs excess, synthetic maintains consistent flow</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-amber-200">
                    <p className="font-medium text-gray-800 mb-1">Ferule Construction Impact</p>
                    <p className="text-sm text-gray-600">Metal type affects paint temperature and flow consistency</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-amber-200">
                    <p className="font-medium text-gray-800 mb-1">Size-to-Viscosity Ratios</p>
                    <p className="text-sm text-gray-600">Mathematical formulas for brush size and paint thickness</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8">
                <h4 className="font-serif text-xl font-bold text-gray-800 mb-4">Precision Instrument Selection</h4>
                <p className="text-gray-600 mb-6">
                  Beyond brushes, professional nail artists use precision instruments designed for specific artistic challenges and medium properties.
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-purple-200">
                    <p className="font-medium text-gray-800 mb-1">Dotting Tool Metallurgy</p>
                    <p className="text-sm text-gray-600">Ball bearing grade affects paint pickup and release</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-purple-200">
                    <p className="font-medium text-gray-800 mb-1">Liner Brush Flexibility Index</p>
                    <p className="text-sm text-gray-600">Spring rate determines line consistency and control</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-purple-200">
                    <p className="font-medium text-gray-800 mb-1">Clean-up Brush Chemistry</p>
                    <p className="text-sm text-gray-600">Solvent compatibility prevents brush deterioration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Psychology and Color Theory */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl p-8 mb-16">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 text-center">
              The Psychology of Nail Art Design
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-100 p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🧠</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-3 text-center">Visual Perception Rules</h4>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Human eyes process nail art using predictable patterns. Understanding these creates more impactful designs.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Rule of thirds application to nails</li>
                  <li>• Color contrast thresholds</li>
                  <li>• Movement direction psychology</li>
                  <li>• Focal point optimization</li>
                </ul>
              </div>

              <div className="bg-slate-100 p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🎨</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-3 text-center">Color Harmony Mathematics</h4>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Professional color combinations aren't accidents—they follow mathematical relationships that create emotional responses.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Complementary angle calculations</li>
                  <li>• Saturation progression formulas</li>
                  <li>• Temperature balance equations</li>
                  <li>• Emotional impact predictions</li>
                </ul>
              </div>

              <div className="bg-slate-100 p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">✨</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-3 text-center">Cultural Symbolism Code</h4>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Different cultures interpret symbols and colors uniquely. Professional artists consider cultural context for maximum impact.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Cross-cultural color meanings</li>
                  <li>• Symbol interpretation variations</li>
                  <li>• Regional trend adaptations</li>
                  <li>• Universal appeal elements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Failures and Solutions */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 text-center">
              The 8 Most Expensive Mistakes (And How to Avoid Them)
            </h3>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              These critical errors destroy hours of work and waste expensive materials. Professional artists know exactly how to prevent and fix each one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  mistake: 'Paint Bleeding Between Layers', 
                  cause: 'Incorrect drying time calculation',
                  solution: 'Use humidity-adjusted timing charts',
                  cost: '$15-30 in wasted materials per incident'
                },
                { 
                  mistake: 'Color Mudding in Gradients', 
                  cause: 'Incompatible paint chemistry',
                  solution: 'pH matching and viscosity balancing',
                  cost: 'Complete design restart required'
                },
                { 
                  mistake: 'Premature Design Lifting', 
                  cause: 'Improper surface preparation',
                  solution: 'Multi-stage nail dehydration protocol',
                  cost: '$20-40 in time and materials'
                },
                { 
                  mistake: 'Asymmetrical Pattern Placement', 
                  cause: 'Eyeball measuring instead of templates',
                  solution: 'Mathematical grid system implementation',
                  cost: 'Client dissatisfaction and redo time'
                },
                { 
                  mistake: 'Brush Stroke Visibility', 
                  cause: 'Wrong brush-to-viscosity ratio',
                  solution: 'Engineering-based tool selection',
                  cost: 'Unprofessional appearance'
                },
                { 
                  mistake: 'Topcoat Incompatibility Reactions', 
                  cause: 'Chemical interaction ignorance',
                  solution: 'Compatibility matrix reference',
                  cost: '$25-50 in product replacement'
                }
              ].map((error, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-xl border-l-4 border-red-300">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-800">{error.mistake}</h4>
                    <p className="text-sm text-red-600"><strong>Root Cause:</strong> {error.cause}</p>
                    <p className="text-sm text-gray-600"><strong>Professional Fix:</strong> {error.solution}</p>
                    <p className="text-xs text-gray-500 italic">{error.cost}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Workflow Systems */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-16 text-white">
            <h3 className="font-serif text-2xl font-bold mb-6 text-center text-white">Professional Workflow Optimization</h3>
            <p className="text-center text-gray-200 mb-8 max-w-2xl mx-auto">
              Professional nail artists don't just create art—they engineer efficient workflows that maximize quality while minimizing time and material waste.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-pink-300">Mise en Place Setup Protocol</h4>
                <div className="space-y-3">
                  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                    <p className="font-medium text-white mb-1">Temperature Staging</p>
                    <p className="text-xs text-gray-200">All materials equilibrated to optimal working temperature range (68-72°F).</p>
                  </div>
                  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                    <p className="font-medium text-white mb-1">Tool Accessibility Mapping</p>
                    <p className="text-xs text-gray-200">Strategic placement based on usage frequency and hand dominance.</p>
                  </div>
                  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                    <p className="font-medium text-white mb-1">Color Sequence Pre-Planning</p>
                    <p className="text-xs text-gray-200">Light-to-dark progression prevents contamination and saves brush cleaning time.</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-purple-300">Quality Control Checkpoints</h4>
                <div className="space-y-3">
                  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                    <p className="font-medium text-white mb-1">Layer Integrity Verification</p>
                    <p className="text-xs text-gray-200">Systematic checking for air bubbles, thickness uniformity, and edge sealing.</p>
                  </div>
                  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                    <p className="font-medium text-white mb-1">Symmetry Validation System</p>
                    <p className="text-xs text-gray-200">Mathematical measurement techniques ensuring perfect bilateral balance.</p>
                  </div>
                  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                    <p className="font-medium text-white mb-1">Durability Pre-Testing</p>
                    <p className="text-xs text-gray-200">Stress testing protocols that predict real-world wear patterns.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Unlock Complete Masterclass System */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 mb-16 text-center border-2 border-dashed border-pink-300">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                🎨 Ready to Master Professional Nail Art?
              </div>
              <h3 className="font-serif text-3xl font-bold text-gray-800 mb-4">
                Unlock the Complete Professional System
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                What you've learned here is just the foundation. Our comprehensive masterclass contains the complete professional system used by nail artists charging $200+ per session.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-pink-200">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 Master-Level Techniques:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 50+ professional design templates with measurements</li>
                    <li>• Color chemistry formulas and mixing ratios</li>
                    <li>• Advanced 3D illusion techniques</li>
                    <li>• Client consultation and pricing strategies</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-pink-200">
                  <h4 className="font-semibold text-gray-800 mb-2">💎 Professional Resources:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Tool engineering specifications and sources</li>
                    <li>• Troubleshooting guide for 30+ common issues</li>
                    <li>• Time optimization workflows and checklists</li>
                    <li>• Professional portfolio development system</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-green-800 font-medium">
                  🚀 <strong>Professional Investment:</strong> Join 8,500+ nail artists who've transformed their skills and earning potential through our proven system.
                </p>
              </div>

              <a
                href="https://example.gumroad.com/premium-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Access Complete Masterclass System →
              </a>
              
              <p className="text-xs text-gray-500 mt-4">
                ⚡ Instant access to 200+ pages • Video tutorials • Lifetime updates • 60-day guarantee
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 text-center">
              Continue Your Artistic Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/topics/at-home-hacks" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                    Professional At-Home Setup Guide
                  </h4>
                  <p className="text-sm text-gray-600">
                    Transform your home workspace into a professional nail art studio with the right tools and environment setup.
                  </p>
                </div>
              </Link>
              <Link href="/topics/seasonal-trends" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                    Advanced Color Theory Applications
                  </h4>
                  <p className="text-sm text-gray-600">
                    Master the mathematical principles behind professional color selection and seasonal trend adaptation.
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
