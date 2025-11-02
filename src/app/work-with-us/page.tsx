import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work With Us | Mirellé Inspo - Brand Collaborations & Partnerships',
  description: 'Partner with Mirellé Inspo for brand collaborations, product features, sponsored content, and Pinterest promotions. Reach our engaged nail art and beauty community.',
  openGraph: {
    title: 'Work With Us | Mirellé Inspo',
    description: 'Partner with Mirellé Inspo for brand collaborations, product features, and sponsored content.',
    type: 'website',
  },
};

export default function WorkWithUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blush-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blush-400 to-blush-300 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Beautiful Together
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Partner with Mirellé Inspo to reach our passionate nail art community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@mirelleinspo.com&su=General%20Inquiry%20from%20Website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blush-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg cursor-pointer"
            >
              📧 General Inquiries
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=team.mirelleinspo@gmail.com&su=Brand%20Partnership%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-charcoal-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-charcoal-800 transition-all transform hover:scale-105 shadow-lg cursor-pointer"
            >
              🤝 Brand Partnerships
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blush-400 mb-2">50K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blush-400 mb-2">100K+</div>
              <div className="text-gray-600">Pinterest Followers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blush-400 mb-2">95%</div>
              <div className="text-gray-600">Engagement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blush-400 mb-2">25+</div>
              <div className="text-gray-600">Brand Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="py-16 bg-blush-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-charcoal-800 mb-12">
            How We Can Collaborate
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Brand Collaborations */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-charcoal-800 mb-4">Brand Collaborations</h3>
              <p className="text-gray-600 mb-4">
                Long-term partnerships to showcase your brand authentically to our engaged audience through multiple touchpoints.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Multi-channel promotion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Dedicated brand spotlight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Authentic storytelling</span>
                </li>
              </ul>
            </div>

            {/* Product Features */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💅</div>
              <h3 className="text-2xl font-bold text-charcoal-800 mb-4">Product Features</h3>
              <p className="text-gray-600 mb-4">
                Showcase your products in our curated shop section with affiliate links and honest reviews.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Shop section placement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Affiliate partnerships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Honest product reviews</span>
                </li>
              </ul>
            </div>

            {/* Sponsored Content */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold text-charcoal-800 mb-4">Sponsored Blog Posts</h3>
              <p className="text-gray-600 mb-4">
                High-quality, SEO-optimized blog content featuring your products naturally within trending nail art guides.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>SEO-optimized content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Product recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Evergreen content value</span>
                </li>
              </ul>
            </div>

            {/* Design Features */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-charcoal-800 mb-4">Design Features</h3>
              <p className="text-gray-600 mb-4">
                Dedicated pages showcasing your nail art designs and collections to inspire our community.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Exclusive design galleries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Collection spotlights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Artist collaborations</span>
                </li>
              </ul>
            </div>

            {/* Pinterest Promotion */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📌</div>
              <h3 className="text-2xl font-bold text-charcoal-800 mb-4">Pinterest Promotion</h3>
              <p className="text-gray-600 mb-4">
                Amplify your reach through our highly engaged Pinterest audience with custom pins and boards.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Custom pin designs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Branded board curation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Link back to your site</span>
                </li>
              </ul>
            </div>

            {/* Guest Posting */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-charcoal-800 mb-4">Guest Posting</h3>
              <p className="text-gray-600 mb-4">
                Share your expertise with our audience through high-quality guest posts with proper attribution.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Expert contributions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Author bio & backlinks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blush-400 mr-2">✓</span>
                  <span>Industry thought leadership</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-charcoal-800 mb-12">
            Why Partner With Mirellé Inspo?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal-800 mb-2">Targeted Audience</h3>
                <p className="text-gray-600">
                  Reach nail art enthusiasts, beauty lovers, and trend-conscious consumers actively seeking product recommendations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal-800 mb-2">Authentic Content</h3>
                <p className="text-gray-600">
                  We prioritize genuine recommendations and honest reviews that resonate with our community's trust.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal-800 mb-2">Growing Platform</h3>
                <p className="text-gray-600">
                  Join us as we expand across multiple channels including web, Pinterest, Instagram, and beyond.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal-800 mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  Professional photography, well-researched content, and strategic promotion for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blush-400 to-blush-300 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can create amazing content together and grow your brand visibility.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-white/80 mb-2">General Inquiries:</p>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@mirelleinspo.com&su=General%20Inquiry%20from%20Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold hover:underline inline-flex items-center gap-2 cursor-pointer"
                >
                  📧 contact@mirelleinspo.com
                </a>
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="text-sm text-white/80 mb-2">Brand Partnerships & Collaborations:</p>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=team.mirelleinspo@gmail.com&su=Brand%20Partnership%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold hover:underline inline-flex items-center gap-2 cursor-pointer"
                >
                  🤝 team.mirelleinspo@gmail.com
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm text-white/80">
            We typically respond within 24-48 hours during business days.
          </p>
        </div>
      </section>

      {/* Additional Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            Want to learn more about us first?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/about"
              className="text-blush-400 hover:text-blush-500 font-semibold underline"
            >
              About Mirellé Inspo
            </Link>
            <span className="text-gray-400">•</span>
            <Link 
              href="/blog"
              className="text-blush-400 hover:text-blush-500 font-semibold underline"
            >
              Read Our Blog
            </Link>
            <span className="text-gray-400">•</span>
            <Link 
              href="/pinterest"
              className="text-blush-400 hover:text-blush-500 font-semibold underline"
            >
              View Pinterest Showcase
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
