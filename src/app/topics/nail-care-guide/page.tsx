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
            <div className="bg-gradient-to-r from-blush-100 to-purple-100 rounded-2xl p-8 mb-16 text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-blush-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                ✨ Premium Guide Available
              </div>
              <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
                Master Professional Nail Care
              </h2>s
              <p className="text-lg text-charcoal-600 mb-6 max-w-2xl mx-auto">
                Get our comprehensive <strong>Premium Nail Care Masterclass</strong> with 
                professional techniques, and exclusive tips 
                from industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <a
                  href="https://hatake21.gumroad.com/l/nailcareguide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blush-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blush-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Premium Guide - $15.99
                </a>
                <span className="text-sm text-charcoal-500">or read free content below ↓</span>
              </div>
              <p className="text-sm text-charcoal-500">
                💡 <strong>Tip:</strong> Read our free content first, then upgrade for the complete experience!
              </p>
            </div>

            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-6">
                The Complete Guide to Nail Care
              </h2>
              <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
                Healthy nails are the foundation of beautiful nail art. Follow these 
                expert tips to maintain strong, healthy nails that look amazing with 
                any design.
              </p>
            </div>

            {/* Daily Care Routine */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6">
                Daily Nail Care Routine
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src="/nailcare2.jpg"
                    alt="Daily nail care"
                    className="rounded-2xl shadow-lg w-full mb-6"
                  />
                </div>
                <div>
                  <ul className="space-y-4 text-charcoal-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blush-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Keep nails clean and dry:</strong> Wash hands regularly and dry thoroughly to prevent bacterial growth.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blush-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Moisturize daily:</strong> Apply hand cream and cuticle oil to keep nails and surrounding skin hydrated.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blush-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Protect your nails:</strong> Wear gloves when doing household chores or working with chemicals.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blush-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>File regularly:</strong> Use a fine-grit file to shape nails and prevent snags.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Weekly Care */}
            <div className="mb-16 bg-gradient-to-br from-nude-50 to-blush-50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6">
                Weekly Nail Care
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blush-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💅</span>
                  </div>
                  <h4 className="font-semibold text-charcoal-800 mb-2">Gentle Filing</h4>
                  <p className="text-sm text-charcoal-600">File in one direction to prevent splitting and weakening.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧴</span>
                  </div>
                  <h4 className="font-semibold text-charcoal-800 mb-2">Cuticle Care</h4>
                  <p className="text-sm text-charcoal-600">Gently push back cuticles and apply cuticle oil.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-nude-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h4 className="font-semibold text-charcoal-800 mb-2">Deep Moisturizing</h4>
                  <p className="text-sm text-charcoal-600">Apply a rich hand cream and let it absorb overnight.</p>
                </div>
              </div>
            </div>

            {/* Common Problems */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-6">
                Common Nail Problems & Solutions
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-semibold text-charcoal-800 mb-2">Brittle Nails</h4>
                  <p className="text-charcoal-600 mb-2">Nails that break or split easily</p>
                  <p className="text-sm text-charcoal-500">
                    <strong>Solution:</strong> Increase biotin intake, use strengthening base coats, and avoid harsh chemicals.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-semibold text-charcoal-800 mb-2">Yellow Nails</h4>
                  <p className="text-charcoal-600 mb-2">Discoloration from polish or other factors</p>
                  <p className="text-sm text-charcoal-500">
                    <strong>Solution:</strong> Use a base coat, limit dark polish wear time, and try whitening treatments.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-semibold text-charcoal-800 mb-2">Peeling Nails</h4>
                  <p className="text-charcoal-600 mb-2">Nails that peel in layers</p>
                  <p className="text-sm text-charcoal-500">
                    <strong>Solution:</strong> Keep nails short, use gentle files, and apply nail hardener.
                  </p>
                </div>
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
                      Finding the Perfect Nail Colors for Your Skin Tone
                    </h4>
                    <p className="text-sm text-charcoal-600">
                      Discover which nail colors complement your skin tone and enhance your natural beauty.
                    </p>
                  </div>
                </Link>
                <Link href="/topics/at-home-hacks" className="group">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h4 className="font-semibold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">
                      At-Home Nail Care Hacks
                    </h4>
                    <p className="text-sm text-charcoal-600">
                      Professional techniques you can master at home for salon-quality results.
                    </p>
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
