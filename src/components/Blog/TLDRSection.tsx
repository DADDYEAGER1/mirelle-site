'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface TLDRProps {
  summary: string | string[];
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
  
  const summaryText = Array.isArray(summary) ? summary.join(' ') : summary;
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  return (
    <section 
      className="bg-[#f9fafb] border border-gray-200 rounded-sm p-6 mb-8"
      aria-label="Article overview"
    >
      {/* Main Heading */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-200">
        <h2 
          className="text-xl"
          style={{ fontFamily: 'Jeremiah, Georgia, serif' }}
        >
          <span className="text-xl mr-2">⚡</span>
          Wrap Up
        </h2>
        <span 
          className="text-xs text-gray-600 bg-white px-3 py-1 border border-gray-200"
          style={{ fontFamily: 'Boriboon, system-ui, sans-serif' }}
        >
          {readTime}
        </span>
      </div>
      
      {/* Summary */}
      <div className="mb-5">
        <h3 
          className="text-sm font-semibold mb-2"
          style={{ fontFamily: 'Boriboon, system-ui, sans-serif' }}
        >
          Quick Glance
        </h3>
        <p 
          className="text-gray-700 text-sm leading-relaxed"
          style={{ fontFamily: 'Crimson Text, Georgia, serif' }}
        >
          {summaryText}
        </p>
      </div>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <div className="mb-5">
          <div className="space-y-2">
            {faqs.slice(0, 3).map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openFAQ === index}
                >
                  <span 
                    className="text-sm pr-3"
                    style={{ fontFamily: 'Boriboon, system-ui, sans-serif' }}
                  >
                    {faq.question}
                  </span>
                  <span 
                    className={`text-lg transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  >
                    ↓
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-4 pb-3 pt-1 bg-gray-50">
                    <p 
                      className="text-gray-600 text-sm leading-relaxed"
                      style={{ fontFamily: 'Crimson Text, Georgia, serif' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Creative Line */}
      {creativeLine && (
        <div className="mb-5 bg-white border border-gray-200 p-4">
          <p 
            className="text-sm italic text-center"
            style={{ fontFamily: 'Crimson Text, Georgia, serif' }}
          >
            "{creativeLine}"
          </p>
        </div>
      )}

      {/* Key Takeaways */}
      {keyTakeaways.length > 0 && (
        <div>
          <h3 
            className="text-sm font-semibold mb-2"
            style={{ fontFamily: 'Boriboon, system-ui, sans-serif' }}
          >
            Key Takeaways
          </h3>
          <div className="flex flex-wrap gap-2">
            {keyTakeaways.map((takeaway, index) => (
              <span 
                key={index} 
                className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 text-xs"
                style={{ fontFamily: 'Boriboon, system-ui, sans-serif' }}
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