import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Mirellé | Your Nail Trend Discovery Platform',
  description: 'Mirellé curates the best nail trends, artist features, and product recommendations from top creators worldwide. Discover what\'s trending before it explodes.',
  openGraph: {
    title: 'About Mirellé | Your Nail Trend Discovery Platform',
    description: 'We curate the best nail content so you don\'t have to scroll for hours. Trending designs, honest product tests, and hidden artist gems.',
    url: 'https://mirelleinspo.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src="/aboutmeblogimg.jpg"
          alt="Curated nail art inspiration and trending designs collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">
            We Find the Best.<br />You Get the Goods.
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Let's be real: finding good nail content on the internet is exhausting. 
              You scroll for hours, save 47 pins you'll never look at again, and still 
              don't know which gel polish actually lasts or which trend is worth trying.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That's where we come in. Mirellé is a discovery platform that curates the best 
              nail trends, products, and artists from across Instagram, Pinterest, TikTok, and beyond. 
              We do the research, testing, and trend-spotting so you get only the good stuff—no 
              fluff, no sponsored BS, just what actually works and looks amazing.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-pink-400">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Actually Do</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong className="text-pink-600">Trend Research:</strong> We analyze thousands of nail designs weekly 
              from top artists to identify what's actually trending (not just what brands want you to think is trending).
            </p>
            <p>
              <strong className="text-pink-600">Product Testing:</strong> We compare products across hundreds of reviews, 
              professional recommendations, and real-world wear tests to tell you what's worth buying.
            </p>
            <p>
              <strong className="text-pink-600">Artist Features:</strong> We spotlight talented nail artists who deserve 
              more recognition, connecting you with creators making truly innovative work.
            </p>
            <p>
              <strong className="text-pink-600">Seasonal Curation:</strong> Before every holiday and season, we compile 
              the best designs 6-8 weeks ahead so you're never scrambling for last-minute inspiration.
            </p>
            <p>
              <strong className="text-pink-600">Community Building:</strong> We're building partnerships with nail brands 
              and artists to bring you exclusive insights, early trend access, and honest collaborations.
            </p>
          </div>
        </section>

        {/* Our Curation Standards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Choose What to Feature</h2>
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Not everything that's popular makes the cut. We prioritize:
            </p>
            <ul className="space-y-3 text-lg text-gray-800">
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 font-bold">→</span>
                <span><strong>Wearability:</strong> Does this actually work for real life, or is it just Instagram bait?</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 font-bold">→</span>
                <span><strong>Skill Accessibility:</strong> Can someone actually recreate this, or do you need 10 years of experience?</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 font-bold">→</span>
                <span><strong>Trend Momentum:</strong> Is this growing or already played out?</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 font-bold">→</span>
                <span><strong>Value:</strong> For products, does the quality justify the price?</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 font-bold">→</span>
                <span><strong>Originality:</strong> Is this bringing something fresh, or just copying what everyone else is doing?</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What You'll Find */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Find on Mirellé</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">💅 Seasonal Design Galleries</h3>
              <p className="text-gray-600">
                We curate 25-40 designs for every holiday and season, posted 6-8 weeks early 
                so you're always ahead of the trend curve. No last-minute Pinterest panic.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">🔬 Honest Product Comparisons</h3>
              <p className="text-gray-600">
                We test and compare 10-15 products at a time, ranking them by real criteria: 
                durability, application ease, value for money. No affiliate-only recommendations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">✨ Weekly Trend Reports</h3>
              <p className="text-gray-600">
                What's blowing up on TikTok? Which Instagram artist just went viral? We track 
                it all and distill the signal from the noise every single week.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">🎨 Artist Spotlights</h3>
              <p className="text-gray-600">
                We feature talented nail artists you should be following—from established pros 
                to rising stars creating innovative techniques and designs.
              </p>
            </div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="mb-16 bg-gray-900 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">Our Promise</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-pink-400 mr-3">✓</span>
              <span>We always credit the original artist or source—no stealing content</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-3">✓</span>
              <span>Product recommendations are based on testing and reviews, not just affiliate potential</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-3">✓</span>
              <span>If a trend is overhyped or a product is overpriced, we'll tell you</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-3">✓</span>
              <span>We're transparent about affiliate links—we earn if you buy, but we only recommend what we'd actually use</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-3">✓</span>
              <span>We update content regularly—seasonal posts get refreshed annually, product reviews when new options emerge</span>
            </li>
          </ul>
        </section>

        {/* Our Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Where We're Headed</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Right now, we're a small team obsessively curating the best nail content on the internet. 
              Our goal? To become <em>the</em> go-to discovery platform for nail trends—the place brands 
              partner with to showcase their products, where artists get discovered, and where you find 
              your next nail obsession before your friends even know it exists.
            </p>
            <p>
              We're working on:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Building partnerships with emerging nail brands for exclusive product features</li>
              <li>Creating an artist network for collaboration opportunities</li>
              <li>Developing more comprehensive buying guides and comparison tools</li>
              <li>Expanding our trend forecasting to predict what's next before it hits mainstream</li>
            </ul>
            <p>
              Want to be part of the journey? We're always looking for talented artists to feature 
              and brands who want authentic exposure to an engaged audience.
            </p>
          </div>
        </section>

        {/* For Brands & Artists */}
        <section className="mb-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">For Nail Brands & Artists</h2>
          <div className="space-y-4 text-gray-800">
            <p className="text-lg">
              Interested in partnering with Mirellé? We feature:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">→</span>
                <span><strong>Emerging nail brands</strong> looking to reach an engaged, conversion-ready audience</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">→</span>
                <span><strong>Talented nail artists</strong> who deserve more visibility (no follower minimums)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 font-bold">→</span>
                <span><strong>Product launches</strong> that we can authentically integrate into seasonal or trend content</span>
              </li>
            </ul>
            <p className="text-lg mt-6">
              We're building a platform where authentic partnerships benefit everyone: brands get real 
              exposure, artists get discovered, and our audience gets genuinely useful recommendations.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              Reach out via <a href="mailto:team.mirelle@gmail.com" className="text-purple-600 hover:text-purple-800 underline">team.mirelle@gmail.com</a> to discuss opportunities.
            </p>
          </div>
        </section>

        {/* Community CTA */}
        <section className="text-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl mb-6">
            Follow along for curated trend reports, honest product reviews, and artist discoveries 
            that'll fill your inspiration folder (in a good way).
          </p>
          <div className="space-y-2 text-lg opacity-90">
            <p>📌 <strong>Pinterest:</strong> Daily inspiration + seasonal galleries</p>
            <p>📧 <strong>Newsletter:</strong> Weekly trend roundups (launching soon)</p>
            <p>💬 <strong>Contact:</strong> team.mirelle@gmail.com</p>
          </div>
        </section>

        {/* Organization Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Mirellé',
              url: 'https://mirelleinspo.com',
              logo: 'https://mirelleinspo.com/logo.png',
              description: 'Nail trend discovery platform curating the best designs, products, and artists from across the internet. Honest reviews, seasonal galleries, and weekly trend reports.',
              sameAs: [
                'https://pinterest.com/mirelle_inspo',
                'https://instagram.com/mirelle_inspo',
                'https://facebook.com/mirelleinspo',
                'https://twitter.com/mirelle_inspo'
              ],
              knowsAbout: [
                'Nail Trends',
                'Nail Art Curation',
                'Product Testing',
                'Beauty Trends',
                'Seasonal Nail Designs',
                'Nail Artist Features'
              ],
              '@id': 'https://mirelleinspo.com/#organization'
            }),
          }}
        />
      </div>
    </div>
  );
}
