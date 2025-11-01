import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface TLDRProps {
  summary: string[];
  readTime: string;
  faqs?: FAQ[];
  creativeLine?: string;
  keyTakeaways?: string[];
}

export default function TLDRSection({ 
  summary, 
  readTime, 
  faqs = [],
  creativeLine = '',
  keyTakeaways = []
}: TLDRProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section 
      className="tldr-section bg-gradient-to-br from-rose-50 to-pink-100 border-l-4 border-pink-500 rounded-xl p-5 sm:p-6 mb-8 shadow-sm"
      itemProp="abstract"
      aria-label="Article overview"
    >
      {/* Main Heading */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-pink-200">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">💅</span>
          Nail the Details
        </h2>
        <span className="text-xs sm:text-sm text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm whitespace-nowrap">{readTime}</span>
      </div>

      {/* Summary */}
      <div className="mb-5">
        <h3 className="text-xs font-semibold text-pink-600 uppercase tracking-wide mb-2">Quick Glance</h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {summary.join(' ')}
        </p>
      </div>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <div className="mb-5">
          <div className="space-y-2">
            {faqs.slice(0, 3).map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-pink-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-pink-50 transition-colors"
                  aria-expanded={openFAQ === index}
                >
                  <span className="text-gray-800 font-medium text-sm pr-3">{faq.question}</span>
                  <span 
                    className={`text-pink-500 text-lg flex-shrink-0 transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-4 pb-3 pt-1 bg-pink-50/50">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Creative Line */}
      {creativeLine && (
        <div className="mb-5 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg p-4 border-l-3 border-pink-400">
          <p className="text-gray-800 font-medium text-sm sm:text-base italic text-center">
            "{creativeLine}"
          </p>
        </div>
      )}

      {/* Key Takeaways */}
      {keyTakeaways.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold text-pink-600 uppercase tracking-wide mb-2">Key Takeaways</h3>
          <div className="flex flex-wrap gap-2">
            {keyTakeaways.map((takeaway, index) => (
              <span 
                key={index} 
                className="bg-white border border-pink-300 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm"
              >
                {takeaway}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

/* Demo Usage:
<TLDRSection 
  summary={[
    "Discover 50+ trending Valentine's Day nail designs perfect for 2026.",
    "Learn expert tips for long-lasting manicures and DIY techniques.",
    "Get step-by-step guides for recreating Instagram-worthy nail art."
  ]}
  readTime="8 min"
  faqs={[
    {
      question: "What nail colors are trending for Valentine's 2026?",
      answer: "Cherry red, rose gold chrome, and soft pink ombré are dominating this season."
    },
    {
      question: "Can I do these designs at home?",
      answer: "Yes! Most designs include beginner-friendly alternatives with detailed instructions."
    }
  ]}
  creativeLine="Your nails are your best accessory—make them unforgettable this Valentine's Day"
  keyTakeaways={["50+ Design Ideas", "DIY Tutorials", "Expert Tips", "Trend Forecasts"]}
/>
*/
