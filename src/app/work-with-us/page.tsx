import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Nail Salon & Artist Collaboration Opportunities | Partner with Mirellé",
  description: "Collaborate with Mirellé - 1M weekly Pinterest views, 50K monthly site visits. Nail salon partnerships, artist features, brand campaigns, guest posting opportunities for beauty professionals.",
  keywords: "nail salon collaboration, partner with nail salon, nail artist collaboration opportunities, beauty blog guest posting, nail brand partnerships, get featured on nail blog, nail salon marketing partnerships, Pinterest collaboration for nail salons, submit nail art for publication, beauty influencer partnerships",
  alternates: {
    canonical: 'https://mirelleinspo.com/work-with-us',
  },
  openGraph: {
    title: "Collaborate with Mirellé | Nail Salon & Artist Partnership Opportunities",
    description: "Professional collaboration for nail salons, artists, and brands. 1M weekly Pinterest views, 50K monthly website visitors. Get featured, run campaigns, submit content.",
    url: 'https://mirelleinspo.com/work-with-us',
    siteName: 'Mirellé Inspo',
    type: 'website',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Nail Salon & Artist Collaboration Opportunities",
  "description": "Professional partnership opportunities for nail salons, artists, brands, and content creators",
  "url": "https://mirelleinspo.com/work-with-us",
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I get my nail salon featured on Mirellé?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact us at contact@mirelleinspo.com with your salon information, services offered, and high-quality images. We review all submissions and feature salons that align with our editorial standards and audience interests."
        }
      },
      {
        "@type": "Question",
        "name": "What are the requirements for nail artist collaboration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nail artists can submit original work for blog features, get listed on our creators page, or have their designs featured on our Pinterest (1M weekly views). Quality photography and original designs are essential. No minimum follower count required."
        }
      },
      {
        "@type": "Question",
        "name": "Can beauty brands run campaigns on Mirellé?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Brands can run sponsored campaigns on our Pinterest account (1M weekly views) and website (50K monthly visitors). We offer product features in our shop section, sponsored blog content, and social media partnerships."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a cost to get featured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Organic features based on editorial merit are free. Sponsored placements, guaranteed features, and branded campaigns are paid opportunities. Contact us for specific pricing and partnership packages."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the collaboration process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Review time is typically 5-7 business days. Once approved, features are scheduled based on our editorial calendar. Urgent requests and paid partnerships can be expedited."
        }
      },
      {
        "@type": "Question",
        "name": "What content formats do you accept for guest posting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept tutorial articles, trend analyses, salon business guides, product reviews, and nail art showcases. Content must be original, well-written, and include high-quality images. Word count minimum is 800 words."
        }
      },
      {
        "@type": "Question",
        "name": "How can I measure the results of a partnership?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide analytics for all partnerships including page views, Pinterest impressions, click-through rates, and engagement metrics. Branded partnerships receive detailed monthly reports."
        }
      },
      {
        "@type": "Question",
        "name": "Do I retain rights to my submitted content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Creators retain full rights to their work. We request non-exclusive publishing rights for submitted content. You may republish your work elsewhere while maintaining proper attribution."
        }
      }
    ]
  }
};

export default function WorkWithUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-white border-b border-foreground/10">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
              Collaboration Opportunities for Nail Salons, Artists, and Brands
            </h1>
            <p className="font-body text-xl text-foreground/70 leading-relaxed mb-8">
              Partner with Mirellé to reach a dedicated audience of nail enthusiasts. Our platform serves 50,000 monthly website visitors and generates 1 million weekly Pinterest views, connecting professional nail salons, independent artists, beauty brands, and content creators with an engaged community.
            </p>
            <div className="flex flex-wrap gap-4 font-ui text-sm text-foreground/60">
              <span>1M Weekly Pinterest Views</span>
              <span className="text-foreground/20">•</span>
              <span>50K Monthly Website Visitors</span>
              <span className="text-foreground/20">•</span>
              <span>Professional Editorial Platform</span>
            </div>
          </div>
        </section>

        {/* Salon Owners Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="font-heading text-4xl text-foreground mb-12">
              For Nail Salon Owners
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 border border-foreground/10">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Salon Directory Listing
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                  Get your nail salon featured in our curated directory. Showcase your services, specialties, location, and contact information to potential clients actively searching for professional nail care.
                </p>
                <ul className="space-y-3 font-body text-base text-foreground/70">
                  <li>• Dedicated salon profile page</li>
                  <li>• High-quality image gallery</li>
                  <li>• Service menu and pricing visibility</li>
                  <li>• Direct booking link integration</li>
                </ul>
              </div>

              <div className="bg-white p-8 border border-foreground/10">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Pinterest Feature Opportunities
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                  Amplify your salon's visibility with features on our Pinterest account reaching 1 million weekly views. Showcase your best work to a highly engaged audience of nail art enthusiasts and potential clients.
                </p>
                <ul className="space-y-3 font-body text-base text-foreground/70">
                  <li>• Featured pins with salon attribution</li>
                  <li>• Direct traffic to your salon website</li>
                  <li>• Increased brand awareness</li>
                  <li>• Access to trending nail design audiences</li>
                </ul>
              </div>

              <div className="bg-white p-8 border border-foreground/10">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Blog Feature Articles
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                  Position your salon as an industry authority through editorial blog features. Share your expertise, signature techniques, and business insights with our audience of 50,000 monthly readers.
                </p>
                <ul className="space-y-3 font-body text-base text-foreground/70">
                  <li>• In-depth salon spotlight articles</li>
                  <li>• Behind-the-scenes content</li>
                  <li>• Owner interviews and success stories</li>
                  <li>• SEO benefits and backlinks</li>
                </ul>
              </div>

              <div className="bg-white p-8 border border-foreground/10">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Cross-Promotion Partnerships
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                  Collaborate on seasonal campaigns, trend launches, and promotional content. Leverage our platform's reach to attract new clients and establish your salon as a trendsetter in nail design.
                </p>
                <ul className="space-y-3 font-body text-base text-foreground/70">
                  <li>• Seasonal trend collaborations</li>
                  <li>• Exclusive service launch features</li>
                  <li>• Social media content partnerships</li>
                  <li>• Event coverage and promotion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nail Artists Section */}
        <section className="py-20 bg-white border-y border-foreground/10">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="font-heading text-4xl text-foreground mb-12">
              For Nail Artists & Technicians
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background p-8 border border-foreground/10">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Creator Portfolio Listings
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                  Independent nail artists can establish a professional presence on our dedicated creators page. Build your portfolio, connect with potential clients, and grow your personal brand within the nail art community.
                </p>
                <ul className="space-y-3 font-body text-base text-foreground/70">
                  <li>• Individual artist profile page</li>
                  <li>• Portfolio gallery showcasing your work</li>
                  <li>• Contact information and booking links</li>
                  <li>• Specialties and technique highlights</li>
                </ul>
              </div>

              <div className="bg-background p-8 border border-foreground/10">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Blog Content Submissions
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                  Submit original nail art designs, tutorials, and technique articles for publication on our blog. Share your expertise with thousands of engaged readers and establish yourself as a thought leader.
                </p>
                <ul className="space-y-3 font-body text-base text-foreground/70">
                  <li>• Tutorial and how-to articles</li>
                  <li>• Design inspiration showcases</li>
                  <li>• Technique breakdowns and tips</li>
                  <li>• Author byline and bio inclusion</li>
                </ul>
              </div>

              <div className="bg-background p-8 border border-foreground/10">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Pinterest Design Features
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                  Get your nail art designs featured on our high-traffic Pinterest account. Reach 1 million weekly views and gain exposure to an audience actively seeking nail inspiration and booking services.
                </p>
                <ul className="space-y-3 font-body text-base text-foreground/70">
                  <li>• Featured pins with creator credit</li>
                  <li>• Traffic directed to your social profiles</li>
                  <li>• Exposure to trend-seeking audiences</li>
                  <li>• Potential viral reach for standout designs</li>
                </ul>
              </div>

              <div className="bg-background p-8 border border-foreground/10">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Guest Artist Collaborations
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                  Participate in themed content series, seasonal collections, and trend forecasting articles. Collaborate with our editorial team to create valuable content that showcases your unique artistic perspective.
                </p>
                <ul className="space-y-3 font-body text-base text-foreground/70">
                  <li>• Seasonal trend collaborations</li>
                  <li>• Expert roundup features</li>
                  <li>• Technique demonstration content</li>
                  <li>• Interview and spotlight opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="font-heading text-4xl text-foreground mb-12">
              For Beauty & Nail Brands
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 border border-foreground/10">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Shop Section Product Features
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                  Showcase your products in our curated shop section. Reach beauty consumers actively researching and purchasing nail care products, tools, and accessories.
                </p>
                <ul className="space-y-3 font-body text-base text-foreground/70">
                  <li>• Featured product listings with images</li>
                  <li>• Detailed product descriptions and specs</li>
                  <li>• Direct purchase links to your store</li>
                  <li>• Category placement for discoverability</li>
                </ul>
              </div>

              <div className="bg-white p-8 border border-foreground/10">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Sponsored Blog Content
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                  Create branded editorial content that educates and engages our audience. Sponsored articles receive prominent placement and drive traffic directly to your product pages or website.
                </p>
                <ul className="space-y-3 font-body text-base text-foreground/70">
                  <li>• Product review and tutorial content</li>
                  <li>• Brand story features</li>
                  <li>• Launch announcements and coverage</li>
                  <li>• Clear sponsored disclosure standards</li>
                </ul>
              </div>

              <div className="bg-white p-8 border border-foreground/10">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Pinterest Campaign Management
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                  Run targeted brand campaigns on our Pinterest account reaching 1 million weekly engaged viewers. Drive awareness, consideration, and conversions through strategic pin placements and content.
                </p>
                <ul className="space-y-3 font-body text-base text-foreground/70">
                  <li>• Sponsored pin placements</li>
                  <li>• Product-focused content creation</li>
                  <li>• Campaign performance analytics</li>
                  <li>• Multi-pin campaign packages available</li>
                </ul>
              </div>

              <div className="bg-white p-8 border border-foreground/10">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Brand Ambassador Programs
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                  Establish long-term partnerships with integrated brand presence across our platform. Benefit from consistent visibility, authentic product integration, and ongoing audience engagement.
                </p>
                <ul className="space-y-3 font-body text-base text-foreground/70">
                  <li>• Multi-channel brand integration</li>
                  <li>• Regular product features and mentions</li>
                  <li>• Exclusive partnership benefits</li>
                  <li>• Performance tracking and reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Creators Section */}
        <section className="py-20 bg-white border-y border-foreground/10">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="font-heading text-4xl text-foreground mb-12">
              For Content Creators & Publishers
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background p-8 border border-foreground/10">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Guest Posting Opportunities
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                  Writers and content creators can contribute high-quality articles to our blog. Build your portfolio, earn backlinks, and reach our engaged audience of nail care enthusiasts.
                </p>
                <ul className="space-y-3 font-body text-base text-foreground/70">
                  <li>• Editorial guidelines and submission process</li>
                  <li>• Author byline and bio with social links</li>
                  <li>• SEO-optimized content placement</li>
                  <li>• Minimum 800 words, original content only</li>
                </ul>
              </div>

              <div className="bg-background p-8 border border-foreground/10">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Content Partnerships
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed mb-6">
                  Informational websites and nail-focused publications can collaborate on content syndication, cross-promotion, and joint editorial projects to expand reach and authority.
                </p>
                <ul className="space-y-3 font-body text-base text-foreground/70">
                  <li>• Content syndication agreements</li>
                  <li>• Co-created editorial projects</li>
                  <li>• Cross-promotional opportunities</li>
                  <li>• Link exchange and SEO collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Submission Requirements */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="font-heading text-4xl text-foreground mb-12">
              Submission Requirements & Guidelines
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Image Quality Standards
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  All submissions must include high-resolution images (minimum 1200px width). Photos should be well-lit, properly focused, and professionally composed. Images must be original work or used with proper licensing and attribution.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Content Originality
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  We only accept original, unpublished content. Submitted articles must not have been previously published elsewhere. Creators retain full rights to their work but grant non-exclusive publishing rights to Mirellé.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Editorial Review Process
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  All submissions undergo editorial review for quality, relevance, and alignment with our audience. Review typically takes 5-7 business days. Approved content is scheduled according to our editorial calendar. We reserve the right to edit submissions for clarity, length, and style consistency.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Partnership Pricing
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  Organic features based on editorial merit are provided at no cost. Sponsored placements, guaranteed features, and branded campaigns are paid opportunities. Contact us for detailed pricing information and partnership packages tailored to your specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white border-t border-foreground/10">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="font-heading text-4xl text-foreground mb-12">
              Your Questions Answered
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-ui text-lg text-foreground mb-3 uppercase tracking-wide">
                  How do I get my nail salon featured on Mirellé?
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  Contact us at contact@mirelleinspo.com with your salon information, services offered, and high-quality images. We review all submissions and feature salons that align with our editorial standards and audience interests.
                </p>
              </div>

              <div>
                <h3 className="font-ui text-lg text-foreground mb-3 uppercase tracking-wide">
                  What are the requirements for nail artist collaboration?
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  Nail artists can submit original work for blog features, get listed on our creators page, or have their designs featured on our Pinterest (1M weekly views). Quality photography and original designs are essential. No minimum follower count required.
                </p>
              </div>

              <div>
                <h3 className="font-ui text-lg text-foreground mb-3 uppercase tracking-wide">
                  Can beauty brands run campaigns on Mirellé?
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  Yes. Brands can run sponsored campaigns on our Pinterest account (1M weekly views) and website (50K monthly visitors). We offer product features in our shop section, sponsored blog content, and social media partnerships.
                </p>
              </div>

              <div>
                <h3 className="font-ui text-lg text-foreground mb-3 uppercase tracking-wide">
                  Is there a cost to get featured?
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  Organic features based on editorial merit are free. Sponsored placements, guaranteed features, and branded campaigns are paid opportunities. Contact us for specific pricing and partnership packages.
                </p>
              </div>

              <div>
                <h3 className="font-ui text-lg text-foreground mb-3 uppercase tracking-wide">
                  How long does the collaboration process take?
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  Review time is typically 5-7 business days. Once approved, features are scheduled based on our editorial calendar. Urgent requests and paid partnerships can be expedited.
                </p>
              </div>

              <div>
                <h3 className="font-ui text-lg text-foreground mb-3 uppercase tracking-wide">
                  What content formats do you accept for guest posting?
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  We accept tutorial articles, trend analyses, salon business guides, product reviews, and nail art showcases. Content must be original, well-written, and include high-quality images. Word count minimum is 800 words.
                </p>
              </div>

              <div>
                <h3 className="font-ui text-lg text-foreground mb-3 uppercase tracking-wide">
                  How can I measure the results of a partnership?
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  We provide analytics for all partnerships including page views, Pinterest impressions, click-through rates, and engagement metrics. Branded partnerships receive detailed monthly reports.
                </p>
              </div>

              <div>
                <h3 className="font-ui text-lg text-foreground mb-3 uppercase tracking-wide">
                  Do I retain rights to my submitted content?
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  Yes. Creators retain full rights to their work. We request non-exclusive publishing rights for submitted content. You may republish your work elsewhere while maintaining proper attribution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background border-t border-foreground/10">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="font-heading text-4xl text-foreground mb-6">
              Start Your Partnership Today
            </h2>
            <p className="font-body text-lg text-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to collaborate? Send us your proposal, portfolio, or partnership inquiry. We review all submissions and respond within 5-7 business days.
            </p>
            <a 
              href="mailto:contact@mirelleinspo.com"
              className="inline-block bg-foreground text-background px-8 py-4 font-ui text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              contact@mirelleinspo.com
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
