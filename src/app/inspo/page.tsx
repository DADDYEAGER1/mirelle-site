// src/app/inspo/page.tsx
import { Metadata } from 'next';
import InspoHero from '@/components/Inspo/InspoHero';
import StatsBar from '@/components/Inspo/StatsBar';
import FeaturedCarousel from '@/components/Inspo/FeaturedCarousel';
import CategoryGrid from '@/components/Inspo/CategoryGrid';
import AboutInspo from '@/components/Inspo/AboutInspo';
import FAQSection from '@/components/Inspo/FAQSection';
import RelatedContent from '@/components/Inspo/RelatedContent';
import { getAllDesignSlugs, getDesignData, getDesignsByCategory } from '@/lib/inspo';
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateInspoCollectionSchema,
  generateItemListSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/lib/inspoSchemas';

export const metadata: Metadata = {
  title: '1,000+ Nail Designs 2025 - French, Chrome, Ombre & More | Mirellé',
  description: 'Get 1,000+ nail designs with step-by-step tutorials. French tips, chrome, ombre, glitter - every style, every skill level. New designs added weekly. Save yours now!',
  keywords: [
    'nail design inspiration 2025',
    'nail ideas 2025',
    'trending nail designs',
    'french tip nails',
    'ombre nail ideas',
    'chrome nails tutorial',
    'minimalist nail art',
    'glitter nails designs',
    'summer nail inspiration',
    'winter nail designs',
  ],
  alternates: {
    canonical: 'https://mirelleinspo.com/inspo',
  },
  openGraph: {
    title: '1,000+ Nail Designs 2025 - French, Chrome, Ombre & More',
    description: 'Browse 1,000+ nail designs with tutorials. Every style, skill level. New designs weekly!',
    url: 'https://mirelleinspo.com/inspo',
    siteName: 'Mirellé',
    type: 'website',
    images: [
      {
        url: 'https://mirelleinspo.com/images/inspo-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Gallery of 1000+ nail designs including French tips, chrome, ombre and more',
      },
    ],
  },
};

// Main FAQ content
const mainFAQs = [
  {
    question: 'How many nail designs are in your gallery?',
    answer: 'We currently feature over 1,000 curated nail designs across 25+ style categories, from classic French tips to trending chrome finishes. New designs are added daily to keep you inspired with the latest trends.',
  },
  {
    question: 'Are the nail designs suitable for beginners?',
    answer: 'Yes! Our gallery includes designs for all skill levels. Each category features beginner-friendly options with step-by-step tutorials, as well as more advanced designs for experienced nail artists. Filter by difficulty level to find designs that match your skills.',
  },
  {
    question: 'Can I save my favorite nail designs?',
    answer: 'Absolutely! Click the heart icon on any design to save it to your personal collection. Your saved designs are stored locally on your device and available anytime you visit our gallery.',
  },
  {
    question: 'How often is the gallery updated?',
    answer: 'We add new nail designs daily and update trending collections weekly. Follow us for notifications when fresh inspiration drops, especially during seasonal transitions and major fashion events.',
  },
  {
    question: 'What nail shapes work best for winter designs?',
    answer: 'Winter designs look stunning on almond, coffin, and squoval shapes. Almond and coffin shapes provide great canvas for intricate snowflake art, while squoval is perfect for minimalist winter looks. Short nails work beautifully with simple winter colors and accents.',
  },
  {
    question: 'Do you offer nail art tutorials?',
    answer: 'Yes! Many of our featured designs include detailed tutorials or technique guides. Look for the "Tutorial Available" badge on design cards. We also link to step-by-step video tutorials for complex designs.',
  },
  {
    question: 'What are the trending nail colors for 2025?',
    answer: 'For 2025, trending colors include Pantone\'s Mocha Mousse (warm chocolate brown), icy chrome finishes, deep burgundy wines, and soft milky whites. Winter sees a surge in jewel tones like emerald, sapphire, and ruby reds.',
  },
  {
    question: 'Can I request specific nail design styles?',
    answer: 'We love hearing from our community! While we can\'t guarantee specific requests, we actively monitor trending searches and user feedback to guide our content curation. Share your ideas via our contact form.',
  },
];

export default async function InspoPage() {
  const designSlugs = getAllDesignSlugs();
  const designs = designSlugs.map((slug) => getDesignData(slug)).filter(Boolean) as any[];
  const designsByCategory = getDesignsByCategory();

  // Generate schemas
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  const collectionSchema = generateInspoCollectionSchema(designs.length);
  const itemListSchema = generateItemListSchema(designs);
  const faqSchema = generateFAQSchema(mainFAQs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://mirelleinspo.com' },
    { name: 'Inspiration Gallery', url: 'https://mirelleinspo.com/inspo' },
  ]);

  return (
    <>
      {/* Schema markup - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white">
        {/* Hero Section */}
        <InspoHero />

        {/* Stats Bar */}
        <StatsBar />

        {/* Featured Carousel */}
        <FeaturedCarousel designs={designs.slice(0, 6)} />

        {/* Category Grid */}
        <CategoryGrid designs={designs} designsByCategory={designsByCategory} />

        {/* About Inspo Section */}
        <AboutInspo />

        {/* Features Section */}
        <section className="bg-white py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Mirellé for Nail Inspiration?
              </h2>
              <p className="text-xl text-gray-600">
                Your go-to destination for trending nail designs and expert tutorials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-burgundy-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-burgundy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">1000+ Designs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Constantly updated with latest trends and timeless classics from professional nail artists worldwide
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Step-by-Step Guides</h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed tutorials for recreating every design, from beginner-friendly to advanced techniques
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">All Skill Levels</h3>
                <p className="text-gray-600 leading-relaxed">
                  From beginner-friendly to advanced nail art, with filters to match your experience level
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={mainFAQs} />

        {/* Related Content */}
        <RelatedContent />

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-burgundy-50 to-pink-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="inline-block mb-4">
                <span className="text-5xl">💌</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
                Get Weekly Nail Inspiration
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join 100k+ nail enthusiasts and get trending designs delivered to your inbox every week
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-burgundy-500 focus:outline-none text-gray-900"
                />
                <button className="px-8 py-4 bg-burgundy-600 text-white rounded-full font-semibold hover:bg-burgundy-700 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No spam, unsubscribe anytime. Your email is safe with us.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
