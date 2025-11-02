import type { Metadata } from 'next';
import { generateAboutPageSchema } from '@/lib/generateSchemas';

export const metadata: Metadata = {
  title: 'About Mirellé | Expert Nail Art Inspiration Platform',
  description: 'Mirellé is a premier digital platform delivering expert nail art inspiration, seasonal trends, and professional tutorials. Learn about our mission to make salon-quality nail care accessible to everyone.',
  openGraph: {
    title: 'About Mirellé | Expert Nail Art Inspiration Platform',
    description: 'Discover how Mirellé combines expert curation, trend analysis, and professional education to deliver world-class nail art inspiration.',
    url: 'https://mirelleinspo.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mirelleinspo.com/about',
  },
};

export default function AboutPage() {
  const baseUrl = 'https://mirelleinspo.com';
  const aboutPageSchema = generateAboutPageSchema();

  return (
    <>
      {/* AboutPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6">
              About Mirellé
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed">
              Your Premier Destination for Expert Nail Art Inspiration, Seasonal Trends, and Professional Education
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Who We Are */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-8">Who We Are</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">
                Mirellé is a leading digital content platform specializing in nail art inspiration, seasonal trend analysis, 
                and expert beauty education. We curate and create comprehensive guides that bridge the gap between 
                professional salon techniques and accessible at-home nail care.
              </p>
              <p>
                Founded on the principle that exceptional nail art should be accessible to everyone, we've built a 
                trusted resource that serves thousands of beauty enthusiasts, DIY practitioners, and nail care professionals 
                seeking reliable, trend-forward content.
              </p>
              <p>
                Our platform combines rigorous research, industry expertise, and creative vision to deliver content 
                that educates, inspires, and empowers our community to achieve salon-quality results.
              </p>
            </div>
          </section>

          {/* What We Do */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-8">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 border-l-4 border-pink-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Curation & Creation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We produce comprehensive guides, step-by-step tutorials, and trend analyses covering everything 
                  from seasonal nail designs to advanced techniques. Every piece of content is researched, tested, 
                  and crafted to meet professional standards.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Trend Analysis & Forecasting</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team monitors global beauty trends, seasonal patterns, and emerging techniques to deliver 
                  timely, relevant content. We identify what's trending, why it matters, and how to adapt it for 
                  real-world application.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Research & Recommendations</h3>
                <p className="text-gray-700 leading-relaxed">
                  We evaluate nail care products, tools, and accessories based on quality, performance, and value. 
                  Our recommendations are thoroughly vetted to ensure we're guiding our audience toward products 
                  that deliver results.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Resources</h3>
                <p className="text-gray-700 leading-relaxed">
                  From beginner basics to advanced techniques, we create educational content that breaks down 
                  complex processes into accessible, actionable steps. Our goal is to build confidence and 
                  competence in nail art practices.
                </p>
              </div>
            </div>
          </section>

          {/* Our Approach */}
<section className="mb-16 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 rounded-2xl p-12 border border-pink-200">
  <h2 className="text-4xl font-bold font-serif mb-8 text-gray-900">Our Approach</h2>
  <div className="space-y-6 text-lg leading-relaxed">
    <div className="flex items-start gap-4">
      <span className="text-3xl">🎯</span>
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">Expert-Driven Content</h3>
        <p className="text-gray-700">
                    Every guide, tutorial, and recommendation is backed by industry research, professional insights, 
                    and real-world testing to ensure accuracy and reliability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">🔍</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comprehensive Research</h3>
                  <p className="text-gray-300">
                    We invest significant time in researching techniques, testing products, and analyzing trends 
                    before publishing content. Quality and accuracy are non-negotiable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">✨</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Accessible Excellence</h3>
                  <p className="text-gray-300">
                    We believe exceptional nail art shouldn't require professional training or expensive equipment. 
                    Our content makes professional-quality techniques accessible to everyone.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">🌍</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Global Perspective</h3>
                  <p className="text-gray-300">
                    We draw inspiration from international trends, diverse cultural aesthetics, and global beauty 
                    movements to offer a rich, varied content experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Commitment */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-8">Our Commitment</h2>
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-10">
              <ul className="space-y-4 text-lg text-gray-800">
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold text-xl">✓</span>
                  <span><strong>Quality First:</strong> Every piece of content meets rigorous editorial standards before publication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold text-xl">✓</span>
                  <span><strong>Transparency:</strong> We clearly disclose partnerships, affiliations, and sponsored content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold text-xl">✓</span>
                  <span><strong>Safety Standards:</strong> Nail health and safety guidelines are prioritized in all recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold text-xl">✓</span>
                  <span><strong>Continuous Improvement:</strong> We regularly update content to reflect new research, techniques, and products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold text-xl">✓</span>
                  <span><strong>Community Focus:</strong> We listen to our audience and create content that addresses real needs and questions</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Our Expertise */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-8">Our Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-5xl font-bold text-pink-600 mb-2">50+</div>
                <p className="text-gray-700 font-semibold">Comprehensive Guides</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-5xl font-bold text-purple-600 mb-2">1000+</div>
                <p className="text-gray-700 font-semibold">Hours of Research</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-5xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-700 font-semibold">Content Availability</p>
              </div>
            </div>
          </section>

          {/* Partner With Us */}
          <section className="mb-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold font-serif mb-6">Partner With Mirellé</h2>
            <p className="text-xl mb-6 leading-relaxed">
              We collaborate with beauty brands, professional nail technicians, and industry partners who share 
              our commitment to quality and innovation. If you're interested in partnership opportunities, 
              collaborations, or content syndication, we'd love to hear from you.
            </p>
            <div className="space-y-3 text-lg">
              <p>📧 <strong>Business Inquiries:</strong>contact@mirelleinspo.com</p>
              <p>💼 <strong>Brand Collaborations:</strong> Available for select partnerships</p>
              <p>📝 <strong>Content Licensing:</strong> Professional content syndication options available</p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Have questions about our content, products we recommend, or partnership opportunities? 
              We're here to help.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Contact Us
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
