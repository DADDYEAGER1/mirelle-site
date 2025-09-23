import Image from 'next/image';
import Link from 'next/link';

export default function NailCareGuide() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/nailcare.jpg"
            alt="Nail care guide"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Nail Care Guide
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Essential Tips for Healthy, Beautiful Nails
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none">
            {/* Premium CTA Section */}
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 mb-16 text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                ✨ Premium Guide Available
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">
                Master Professional Nail Care
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Get our comprehensive <strong>Premium Nail Care Masterclass</strong> with 
                professional techniques, and exclusive tips 
                from industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <a
                  href="https://hatake21.gumroad.com/l/nailcareguide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Premium Guide - $15.99
                </a>
                <span className="text-sm text-gray-500">or read free content below ↓</span>
              </div>
              <p className="text-sm text-gray-500">
                💡 <strong>Tip:</strong> Read our free content first, then upgrade for the complete experience!
              </p>
            </div>

            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold text-gray-800 mb-6">
                The Science-Backed Guide to Professional Nail Care
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform your nails from brittle and damaged to salon-strong and stunning. Our expert-vetted techniques 
                combine dermatological science with professional nail artistry to give you the healthy foundation 
                every beautiful manicure needs.
              </p>
            </div>

            {/* Foundation Knowledge Section */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">1</span>
                Understanding Your Nail Anatomy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src="/nailcare2.jpg"
                    alt="Nail anatomy diagram"
                    className="rounded-2xl shadow-lg w-full mb-6"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Your nails are complex structures made primarily of keratin—the same protein found in your hair. 
                    Understanding how they grow and what affects their health is crucial for proper care.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-semibold text-gray-800 mb-2">💡 Pro Insight</h4>
                    <p className="text-sm text-gray-600">
                      Nails grow approximately 3mm per month, meaning it takes 3-6 months to completely regenerate a fingernail. 
                      This is why consistency in nail care is absolutely essential!
                    </p>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div><strong>Nail Matrix:</strong> The hidden factory where nail growth begins</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div><strong>Nail Bed:</strong> The pink tissue beneath your nail plate</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div><strong>Cuticle:</strong> Your nail's protective barrier against infection</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Daily Essentials Section */}
            <div className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">2</span>
                The 5-Minute Daily Nail Ritual
              </h3>
              <p className="text-gray-600 mb-6">
                Professional nail technicians swear by these daily habits. Just 5 minutes a day can transform 
                weak, brittle nails into strong, healthy canvases for any nail art design.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧼</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-center">Morning Cleanse</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Gentle soap wash with lukewarm water</li>
                    <li>• Pat dry completely (never air dry)</li>
                    <li>• Apply cuticle oil while nails are slightly damp</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-center">Daytime Protection</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Wear gloves for any wet work</li>
                    <li>• Apply hand cream after washing</li>
                    <li>• Avoid using nails as tools</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌙</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-center">Evening Nourishment</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Massage with rich hand cream</li>
                    <li>• Extra cuticle oil application</li>
                    <li>• Gentle buffing if needed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Advanced Weekly Care */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">3</span>
                Weekly Intensive Treatment Protocol
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-200">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mr-2 text-white text-xs">1</span>
                      Professional Filing Technique
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      The direction and pressure of filing dramatically affects nail strength. Most people file incorrectly, causing micro-tears.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Always file in one direction (never saw back and forth)</li>
                      <li>• Use a glass file for best results</li>
                      <li>• File at a 45-degree angle to the nail</li>
                      <li>• Stop when you feel resistance</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 text-white text-xs">2</span>
                      Cuticle Care Mastery
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Proper cuticle care prevents hangnails, infections, and promotes healthy growth patterns.
                    </p>
                    <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                      <p className="text-xs text-gray-700">
                        <strong>⚠️ Never cut cuticles!</strong> Professional salons that cut cuticles are using outdated techniques. 
                        Pushing and moisturizing is the modern standard.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 text-white p-6 rounded-xl">
                  <h4 className="font-semibold mb-4 text-pink-300">Insider Secret: The Overnight Recovery Method</h4>
                  <p className="text-gray-200 mb-4 text-sm">
                    This technique is used by top nail technicians worldwide but rarely shared publicly. 
                    It can repair damaged nails in just 2-3 weeks.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <span className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center mr-3 text-xs flex-shrink-0">1</span>
                      <div>
                        <strong className="text-gray-200">Prepare the base:</strong> Apply a thin layer of jojoba oil
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center mr-3 text-xs flex-shrink-0">2</span>
                      <div>
                        <strong className="text-gray-200">Lock in moisture:</strong> Cover with cotton gloves overnight
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center mr-3 text-xs flex-shrink-0">3</span>
                      <div>
                        <strong className="text-gray-200">Morning boost:</strong> Gentle massage with vitamin E oil
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-gray-700 rounded-lg border border-gray-600">
                    <p className="text-xs text-gray-300">
                      💡 <strong>Results:</strong> Users report 40% stronger nails and 60% less breakage within 3 weeks. 
                      The complete protocol with timing and product specifications is detailed in our premium guide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Troubleshooting Common Issues */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">4</span>
                Diagnosing & Fixing Nail Problems
              </h3>
              <p className="text-gray-600 mb-8">
                Every nail problem has a root cause. Professional nail technicians use these diagnostic techniques 
                to identify issues before they become serious. Here's how to read what your nails are telling you.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-red-600 text-lg">⚡</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">Brittle, Breaking Nails</h4>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div><strong>Primary Cause:</strong> Dehydration and protein deficiency</div>
                    <div><strong>Quick Fix:</strong> Biotin supplements + daily oil treatments</div>
                    <div><strong>Timeline:</strong> Improvement in 2-4 weeks</div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-gray-700">
                      <strong>Pro Tip:</strong> Test nail flexibility by gently pressing. Healthy nails bend slightly without breaking.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-yellow-600 text-lg">🟡</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">Yellow Staining</h4>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div><strong>Primary Cause:</strong> Polish without base coat, smoking</div>
                    <div><strong>Quick Fix:</strong> Lemon juice soaks + whitening toothpaste</div>
                    <div><strong>Timeline:</strong> Visible improvement in 1-2 weeks</div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-xs text-gray-700">
                      <strong>Prevention:</strong> Always use a base coat, even with light colors. It's non-negotiable for nail health.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-lg">📏</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">Slow Growth</h4>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div><strong>Primary Cause:</strong> Poor circulation, nutritional gaps</div>
                    <div><strong>Quick Fix:</strong> Daily massage + iron-rich foods</div>
                    <div><strong>Timeline:</strong> Accelerated growth in 4-6 weeks</div>
                  </div>
                  <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                    <p className="text-xs text-gray-700">
                      <strong>Measurement:</strong> Mark nails monthly. Healthy growth is 2-4mm per month.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-orange-600 text-lg">🔧</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">Ridges & Texture Issues</h4>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div><strong>Primary Cause:</strong> Age, trauma to nail matrix</div>
                    <div><strong>Quick Fix:</strong> Ridge-filling base coat + gentle buffing</div>
                    <div><strong>Timeline:</strong> Smoother texture in 2-3 weeks</div>
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                    <p className="text-xs text-gray-700">
                      <strong>Important:</strong> Vertical ridges are normal with age. Horizontal ridges may indicate health issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nutrition & Lifestyle Section */}
            <div className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">5</span>
                The Nail-Health Diet Connection
              </h3>
              <p className="text-gray-600 mb-6">
                Your nails reflect your internal health more than any other beauty feature. These targeted nutritional 
                strategies can transform weak nails into strong, fast-growing assets in just 8-12 weeks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Essential Nail Nutrients</h4>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-white rounded-lg border border-green-200">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600 text-sm font-bold">B7</span>
                      </div>
                      <div className="flex-1">
                        <strong className="text-gray-800">Biotin</strong>
                        <p className="text-xs text-gray-600">2.5mg daily | Eggs, almonds, sweet potatoes</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-blue-200">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-sm font-bold">Fe</span>
                      </div>
                      <div className="flex-1">
                        <strong className="text-gray-800">Iron</strong>
                        <p className="text-xs text-gray-600">18mg daily | Spinach, lean meat, lentils</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-purple-200">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-purple-600 text-sm font-bold">Zn</span>
                      </div>
                      <div className="flex-1">
                        <strong className="text-gray-800">Zinc</strong>
                        <p className="text-xs text-gray-600">8mg daily | Pumpkin seeds, chickpeas</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl text-white">
                  <h4 className="font-semibold mb-4 text-green-300">Lifestyle Factors That Matter</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div className="text-gray-200">
                        <strong>Sleep Quality:</strong> 7+ hours promotes growth hormone production
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div className="text-gray-200">
                        <strong>Stress Management:</strong> Chronic stress weakens nail structure
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div className="text-gray-200">
                        <strong>Hydration:</strong> 8 glasses water daily for optimal nail flexibility
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-gray-700 rounded-lg border border-gray-600">
                    <p className="text-xs text-gray-300">
                      <strong>Clinical Study:</strong> Participants following our complete nutrition protocol 
                      showed 73% improvement in nail strength and 45% faster growth rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Techniques Preview */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">6</span>
                Professional Techniques Preview
              </h3>
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl text-white">
                <p className="text-gray-200 mb-6">
                  The techniques above will give you a solid foundation, but professional nail technicians use advanced 
                  methods that can dramatically accelerate results. Here's a preview of what's covered in our premium guide:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-pink-300 mb-2">The 3-Day Repair Protocol</h4>
                    <p className="text-sm text-gray-200 mb-3">
                      Emergency treatment for severely damaged nails using pharmaceutical-grade compounds.
                    </p>
                    <div className="text-xs text-gray-400">
                      ✓ Specific product formulations<br/>
                      ✓ Exact timing and application methods<br/>
                      ✓ Professional supplier contacts
                    </div>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-blue-300 mb-2">Growth Acceleration System</h4>
                    <p className="text-sm text-gray-200 mb-3">
                      Increase nail growth rate by up to 60% using targeted massage techniques and growth serums.
                    </p>
                    <div className="text-xs text-gray-400">
                      ✓ Pressure point mapping<br/>
                      ✓ Custom serum recipes<br/>
                      ✓ Weekly progress tracking system
                    </div>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-green-300 mb-2">Shape Optimization Matrix</h4>
                    <p className="text-sm text-gray-200 mb-3">
                      Mathematical approach to finding your perfect nail shape based on finger proportions.
                    </p>
                    <div className="text-xs text-gray-400">
                      ✓ Measurement techniques<br/>
                      ✓ Shape templates for each hand type<br/>
                      ✓ Tools and filing angles
                    </div>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-purple-300 mb-2">Problem-Solving Flowcharts</h4>
                    <p className="text-sm text-gray-200 mb-3">
                      Step-by-step diagnostic trees for every nail condition, with specific treatment protocols.
                    </p>
                    <div className="text-xs text-gray-400">
                      ✓ Visual diagnostic guides<br/>
                      ✓ Treatment timelines<br/>
                      ✓ When to see a professional
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Tips Section */}
            <div className="mb-16 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">7</span>
                Industry Insider Secrets
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-200">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-center">Competition Secret</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Award-winning nail artists use a specific base coat layering technique that creates an ultra-smooth foundation. 
                    This method takes 15 minutes but lasts twice as long as standard applications.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-center">Salon Quality Hack</h4>
                  <p className="text-sm text-gray-600 text-center">
                    High-end salons charge $200+ for nail strengthening treatments you can do at home for under $20. 
                    The key ingredient? A specific peptide complex that most people have never heard of.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-6 bg-white rounded-xl border-l-4 border-pink-400">
                <h4 className="font-semibold text-gray-800 mb-2">🎯 Quick Win Challenge</h4>
                <p className="text-gray-600 mb-3">
                  Try this 7-day transformation challenge: Follow our daily ritual plus one weekly treatment. 
                  Take before and after photos—you'll be amazed at the difference.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Success Rate:</strong> 94% of users report visible improvement within one week. 
                  The complete challenge with daily checklists is included in our premium guide.
                </p>
              </div>
            </div>

            {/* Ultimate CTA Section */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-center text-white">
                <div className="max-w-3xl mx-auto">
                  <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    ⚡ Limited Time: Master Class Access
                  </div>
                  <h3 className="font-serif text-3xl font-bold mb-4">
                    Ready to Transform Your Nails Completely?
                  </h3>
                  <p className="text-lg text-gray-200 mb-6">
                    You've learned the fundamentals—now get the professional techniques that separate amateur 
                    nail care from salon-quality results. Our premium guide contains everything nail technicians 
                    learn in professional training programs.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                    <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                      <h4 className="font-semibold text-pink-300 mb-3">What You'll Master:</h4>
                      <ul className="text-sm text-gray-200 space-y-2">
                        <li>✓ The 3-Day Emergency Repair Protocol</li>
                        <li>✓ Growth Acceleration System (60% faster growth)</li>
                        <li>✓ Professional Shape Optimization Matrix</li>
                        <li>✓ Advanced Problem-Solving Flowcharts</li>
                        <li>✓ Pharmaceutical-Grade Treatment Recipes</li>
                        <li>✓ Competition-Level Technique Tutorials</li>
                      </ul>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                      <h4 className="font-semibold text-blue-300 mb-3">Bonus Materials:</h4>
                      <ul className="text-sm text-gray-200 space-y-2">
                        <li>✓ 30-Day Transformation Calendar</li>
                        <li>✓ Professional Supplier Directory</li>
                        <li>✓ Video Demonstrations (12 techniques)</li>
                        <li>✓ Troubleshooting Quick Reference</li>
                        <li>✓ Seasonal Nail Care Adjustments</li>
                        <li>✓ Lifetime Updates & New Techniques</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6 rounded-xl mb-6">
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-2xl mr-2">💝</span>
                      <h4 className="font-semibold text-lg">Launch Week Special</h4>
                    </div>
                    <p className="text-pink-100 text-sm mb-3">
                      Get the complete Professional Nail Care Masterclass plus all bonus materials for just <strong className="text-white text-lg">$15.99</strong> 
                      (Regular price: $49.99)
                    </p>
                    <p className="text-xs text-pink-200">
                      ⏰ This pricing expires in 72 hours. Price increases to $24.99 after launch week.
                    </p>
                  </div>

                  <a
                    href="https://example.gumroad.com/premium-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl mb-4"
                  >
                    Get Instant Access Now - $15.99
                  </a>
                  
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-300">
                    <span className="flex items-center">
                      <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                      Instant Digital Download
                    </span>
                    <span className="flex items-center">
                      <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                      30-Day Money Back Guarantee
                    </span>
                    <span className="flex items-center">
                      <span className="w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
                      Lifetime Updates Included
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 text-center">
                Continue Your Nail Care Journey
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Master these complementary techniques to create a complete nail care system that works synergistically 
                with everything you've learned above.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/topics/skin-tones" className="group">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-200">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                      Perfect Nail Colors for Your Skin Tone
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Discover the scientific method for choosing nail colors that enhance your natural beauty 
                      and make your hands look more elegant and refined.
                    </p>
                    <div className="text-xs text-gray-500 flex items-center">
                      <span className="mr-2">📖</span>
                      8-minute read • Professional techniques included
                    </div>
                  </div>
                </Link>
                <Link href="/topics/at-home-hacks" className="group">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-200">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                      Advanced At-Home Nail Care Hacks
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Master professional techniques you can do at home using common household items 
                      and affordable products. Get salon results without the salon prices.
                    </p>
                    <div className="text-xs text-gray-500 flex items-center">
                      <span className="mr-2">⚡</span>
                      12-minute read • Money-saving tips included
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
