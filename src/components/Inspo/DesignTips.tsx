// src/components/Inspo/DesignTips.tsx
'use client';

interface Tip {
  icon: string;
  title: string;
  description: string;
}

interface DesignTipsProps {
  categoryName: string;
  tips: Tip[];
}

export default function DesignTips({ categoryName, tips }: DesignTipsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-burgundy-100 text-burgundy-700 rounded-full text-sm font-bold uppercase tracking-wide">
              Pro Tips
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Master {categoryName}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert advice to achieve the perfect look at home or in the salon
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-cream-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-burgundy-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-burgundy-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <span className="text-4xl">{tip.icon}</span>
              </div>

              <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-burgundy-700 transition-colors">
                {tip.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        {/* Related Resources */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-burgundy-50 to-pink-50 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="font-bold text-xl text-gray-900 mb-4">
              Want More Expert Advice?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore our comprehensive nail care guides and tutorials
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/topics/nail-art-guides"
                className="px-6 py-3 bg-burgundy-600 text-white rounded-full font-semibold hover:bg-burgundy-700 transition-colors inline-flex items-center gap-2"
              >
                Nail Art Guides
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/topics/nail-care-guide"
                className="px-6 py-3 bg-white text-burgundy-600 border-2 border-burgundy-600 rounded-full font-semibold hover:bg-burgundy-50 transition-colors"
              >
                Nail Care Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
