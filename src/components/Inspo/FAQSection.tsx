// src/components/Inspo/FAQSection.tsx
'use client';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: FAQ[];
}

export default function FAQSection({ 
  title = 'Frequently Asked Questions',
  description = 'Everything you need to know about our nail design gallery',
  faqs 
}: FAQSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold uppercase tracking-wide">
              FAQ
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {description}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-accent/40 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <summary className="cursor-pointer px-6 py-5 flex justify-between items-center touch-target list-none">
                <h3 className="font-semibold text-gray-900 pr-4 text-lg">
                  {faq.question}
                </h3>
                <svg
                  className="w-6 h-6 text-accent/80 transform group-open:rotate-45 transition-transform flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>

              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent/80 text-white rounded-full font-semibold hover:bg-accent transition-colors"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
