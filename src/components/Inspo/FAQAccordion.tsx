// src/components/Inspo/FAQAccordion.tsx
'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  defaultOpenIndex?: number;
}

export default function FAQAccordion({ 
  faqs, 
  title = "Frequently Asked Questions",
  defaultOpenIndex = -1 
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (faqs.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/20 text-accent/80 rounded-full text-sm font-bold uppercase tracking-wide">
              FAQ
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about nail designs
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'rotate-180 bg-accent/80' : ''
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-colors ${isOpen ? 'text-white' : 'text-accent/80'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA at bottom */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent/80 hover:bg-accent text-white rounded-full font-semibold transition-colors duration-300"
          >
            <span>Contact Us</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Category-specific FAQ generator
export function generateCategoryFAQs(categorySlug: string): FAQ[] {
  const faqData: { [key: string]: FAQ[] } = {
    'almond-nails-2026': [
      {
        question: 'What nail shapes work best for almond nails?',
        answer: 'Almond nails work beautifully for all finger types and nail beds. They\'re especially flattering for shorter fingers as the tapered shape creates visual length. The soft point is more practical than stiletto while more elegant than round or square shapes. Natural nails, gel extensions, and acrylics all adapt well to almond shaping.'
      },
      {
        question: 'How do I file perfect almond shape at home?',
        answer: 'Start with square-shaped nails at your desired length. File both sides at a gentle angle toward the center, creating symmetrical taper. Round the tip to create soft point rather than sharp stiletto. Use fine-grit file (180-240 grit) and file in one direction to prevent splitting. Check symmetry frequently by comparing both hands side-by-side.'
      },
      {
        question: 'Are almond nails good for typing and everyday activities?',
        answer: 'Yes! Almond nails are practical for typing when kept at moderate length. The tapered shape prevents snagging better than square nails while being less prone to breakage than stiletto. Many professionals choose almond shape specifically for this balance of elegance and functionality. Keep length at or slightly beyond fingertip for optimal practicality.'
      },
      {
        question: 'What nail designs look best on almond-shaped nails?',
        answer: 'Almond nails showcase chrome finishes, cat-eye effects, and aura nails beautifully due to the elongated canvas. The shape flatters French tips, vertical ombré gradients, and minimalist line art. Longer almond nails work well for intricate nail art, while shorter lengths look elegant with nude bases and single accent designs.'
      },
      {
        question: 'How long should almond nails be?',
        answer: 'Almond nails can range from just past fingertip (short almond) to 1-2 inches beyond (long almond). The 2026 trend favors shorter, healthier lengths around 1/4 to 1/2 inch past fingertip. This length maintains the elegant almond taper while ensuring practicality for daily activities. Choose length based on lifestyle and personal preference.'
      }
    ],
    'coffin-ballerina-nails-2026': [
      {
        question: 'What is the difference between coffin and ballerina nails?',
        answer: 'Coffin nails have sharper, more defined squared edges at the tip, while ballerina nails feature slightly softer, rounded corners. Both shapes have straight sides that taper to a flat tip. The difference is subtle coffin is more dramatic and edgy, ballerina is softer and more feminine. Many people use the terms interchangeably.'
      },
      {
        question: 'Can I get coffin nails with short natural nails?',
        answer: 'Coffin shape requires medium to long length for best results, typically at least 1/4 inch past fingertip. Short natural nails work better with square or squoval shapes. However, gel or acrylic extensions can create coffin shape at any desired length. Extensions provide strength needed to support the dramatic squared tip without breakage.'
      },
      {
        question: 'Are coffin nails hard to maintain?',
        answer: 'Coffin nails require more maintenance than rounded shapes due to the flat tip being prone to catching and breaking. Professional application with gel or acrylic provides necessary reinforcement. Expect fills every 2-3 weeks. Avoid using nails as tools, wear gloves for household tasks, and apply cuticle oil daily to maintain health and strength.'
      },
      {
        question: 'What nail designs work best on coffin-shaped nails?',
        answer: 'Coffin nails excel at showcasing intricate designs due to extended flat tip. They\'re perfect for 3D embellishments, chrome finishes, ombré gradients, geometric patterns, and statement nail art. The shape provides stable surface for rhinestones, pearls, and sculptural elements. Bold colors and dramatic contrasts look especially striking on coffin nails.'
      },
      {
        question: 'How much do coffin nails cost at a salon?',
        answer: 'Basic acrylic coffin nails typically cost $40-70, gel extensions $50-80, and coffin nails with elaborate designs $80-150+. Prices vary by location, salon tier, and design complexity. Maintenance fills cost $30-50 every 2-3 weeks. At-home press-on coffin nails offer budget-friendly alternative at $10-30 per set.'
      }
    ],
    'valentine-nails-2026': [
      {
        question: 'When should I get Valentine\'s Day nails done?',
        answer: 'Book your Valentine\'s nail appointment 3-7 days before February 14th for freshest look. Gel nails last 2-3 weeks, so you can schedule up to a week early. Regular polish lasts 5-7 days, so plan accordingly. Early booking (late January) secures preferred appointment times as salons book quickly before Valentine\'s Day.'
      },
      {
        question: 'Are Valentine\'s nails only pink and red?',
        answer: 'No! 2026 Valentine\'s trends include burgundy, nude with heart accents, chrome finishes, and even black with red details. Popular alternatives include rose gold, soft lavender, champagne beige, and cream bases with romantic accents. The key is creating romantic aesthetic through design elements like hearts, pearls, and bows rather than strict color palette.'
      },
      {
        question: 'Can I wear Valentine\'s nails for work?',
        answer: 'Yes! Choose subtle Valentine\'s designs like nude base with single heart accent nail, micro French tips with pink tone, or soft pink with pearl embellishments. Conservative workplaces appreciate understated romantic touches. Save dramatic red nails with 3D embellishments for date nights and special occasions outside work.'
      },
      {
        question: 'What are aura Valentine\'s nails?',
        answer: 'Aura Valentine\'s nails feature heart designs with soft gradient halos in multiple colors, creating ethereal glowing effect. Technique uses 2-3 complementary shades (like pink-to-burgundy or nude-to-red) blended around heart motifs. The dimensional glow catches light beautifully, making hearts appear to radiate from within. It\'s the hottest Valentine\'s trend for 2026.'
      },
      {
        question: 'How do I make Valentine\'s nails last through the holiday?',
        answer: 'Use gel polish for 2-3 week wear. Apply quality base coat, cure properly if using gel, and seal with thick top coat. Avoid hot water for first 24 hours. Use cuticle oil daily, wear gloves for cleaning, and avoid using nails as tools. Touch up any chips immediately. Proper prep and sealing are key to longevity.'
      }
    ],
    'ombre-gradient-nails-2026': [
      {
        question: 'What is the easiest ombré nail technique for beginners?',
        answer: 'The makeup sponge technique is most beginner-friendly. Apply 2-3 polish colors side-by-side on dense makeup sponge, dab onto nails in bouncing motion, blend where colors meet. Use 2 colors maximum for your first attempts. Practice on paper or fake nails first. Quick-dry polish works best for beginners to prevent smudging during application.'
      },
      {
        question: 'Can I do ombré nails with regular polish?',
        answer: 'Absolutely! Regular polish works great for ombré using sponge technique. Work quickly before polish dries on sponge. Use quick-dry formula to minimize smudging. Clean up edges with brush dipped in acetone. Regular ombré lasts 5-7 days compared to 2-3 weeks for gel. Set with quick-dry top coat for best results and shine.'
      },
      {
        question: 'What are aura nails and how are they different from regular ombré?',
        answer: 'Aura nails create multi-dimensional glowing effect using 2-4 complementary colors blended in concentric halos, resembling Northern Lights. Regular ombré transitions from one color to another. Aura nails have multiple color layers radiating outward or around focal point, creating ethereal glow. The dimensional effect catches light differently than simple two-color gradients.'
      },
      {
        question: 'Do ombré nails work on short nails?',
        answer: 'Yes! Vertical ombré (gradient from cuticle to tip) elongates short nails visually. Use 2 colors maximum for cleaner look on shorter lengths. Light to dark gradient makes nails appear longer. Horizontal ombré works better on longer nails. Subtle nude to pink gradients look particularly natural and professional on short lengths.'
      },
      {
        question: 'What colors work best for ombré nails?',
        answer: 'Colors in the same family create smoothest transitions: pink-to-burgundy, nude-to-brown, blue-to-navy. Complementary colors add drama: purple-to-pink, orange-to-red. Popular 2026 combinations include sunset ombré (orange-pink-purple), mocha to cream, and galaxy gradients (navy-purple with glitter). Stick to 2-3 colors for harmonious blends.'
      }
    ],
    'french-tip-nails-2026': [
      {
        question: 'What are micro French tips?',
        answer: 'Micro French tips feature whisper-thin 1-2mm tip lines, representing quiet luxury trend in 2026. This refined, barely-there approach creates subtle elegance perfect for professionals and minimalists. Micro tips work on any nail length and pair beautifully with nude, sheer pink, or milky white bases. They elongate nails visually while maintaining understated sophistication.'
      },
      {
        question: 'How do I create perfect straight French tip lines?',
        answer: 'Use striping tape or French tip guides for perfectly straight lines. Apply base color first, let dry completely, then position guides at desired tip line. Paint tip color, let dry, remove guides gently. For freehand, use thin nail art brush and steady hand. Practice on paper first. Gel polish allows cleanup before curing for forgiving application.'
      },
      {
        question: 'Can I do French tips on short nails?',
        answer: 'Absolutely! Short French tips look chic and professional. Use thinner tip lines (1-2mm) for proportional look, or try micro French with barely-there tips. Nude base with white tips elongates short nails visually. Oval or squoval shapes work best for short French manicures. Avoid thick tips that overwhelm shorter lengths.'
      },
      {
        question: 'What are colored French tips?',
        answer: 'Colored French tips replace traditional white with vibrant shades like chrome pink, chocolate brown, navy blue, sage green, or black. Popular 2026 variations include glitter tips, ombré French (gradient tips), reverse French (color at cuticle), and double-line French. This modern twist honors classic French silhouette while allowing creative color expression.'
      },
      {
        question: 'How long do French tip nails last?',
        answer: 'Regular polish French tips last 5-7 days. Gel French manicure lasts 2-3 weeks with proper application and care. Acrylic French tips with extensions last 3-4 weeks before requiring fills. Longevity depends on nail growth rate, daily activities, and proper maintenance. Using base coat, capping free edge, and sealing with thick top coat maximizes wear time.'
      }
    ]
  };

  return faqData[categorySlug] || faqData['almond-nails-2026'];
}