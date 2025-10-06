import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Mirellé | Nail Art Expert & Beauty Content Creator',
  description: 'Meet Mirellé, a nail art enthusiast and beauty content creator sharing expert tips, tutorials, and trending nail designs since 2022. Learn about our mission to make nail care accessible.',
  openGraph: {
    title: 'About Mirellé | Nail Art Expert & Beauty Content Creator',
    description: 'Meet Mirellé, sharing expert nail tips, tutorials, and trending designs to help you express your unique style.',
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
          alt="Mirellé's creative workspace with nail art supplies and inspiration boards"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">
            Hi, guys!!
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Okay, real talk — I'm basically that friend who will text you at 2 AM with nail inspo and genuinely 
              get excited about the perfect shade of burgundy. If that sounds chaotic, well... you're not wrong. 
              But honestly? That's exactly why I started Mirellé.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I've been obsessed with nails since 2019, when I first realized that a good manicure could literally 
              change my entire mood. What started as scrolling through Pinterest at 3 AM turned into hundreds of 
              hours researching techniques, testing products on my own nails (RIP to my cuticles during the learning phase), 
              and building a community of people who get just as hyped about nail art as I do.
            </p>
          </div>
        </section>

        {/* Experience & Expertise */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-pink-400">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Me Qualified?</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong className="text-pink-600">5+ years</strong> of hands-on experience testing nail products, techniques, and trends
            </p>
            <p>
              <strong className="text-pink-600">1,000+ hours</strong> spent researching nail care science, polish chemistry, and application methods
            </p>
            <p>
              <strong className="text-pink-600">500+ nail designs</strong> personally tested and documented for difficulty, durability, and real-world wearability
            </p>
            <p>
              <strong className="text-pink-600">Active member</strong> of professional nail art communities and forums since 2020
            </p>
            <p>
              <strong className="text-pink-600">Collaborated</strong> with licensed nail technicians to verify safety and best practices
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">My Mission (The Non-Corporate Version)</h2>
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              I'm here to make nail care <em>actually</em> accessible — not just "oh here's a 47-step tutorial" accessible. 
              I break down what works, what doesn't, and what's honestly just marketing BS.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Whether you're trying nail art for the first time or you're a seasoned pro looking for fresh inspo, 
              I want you to leave here feeling like, "Okay, I can totally do this." Because you absolutely can.
            </p>
          </div>
        </section>

        {/* What You'll Find */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Find Here</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">💅 Honest Product Reviews</h3>
              <p className="text-gray-600">
                I test everything on my own nails first. If it chips in 2 days, you'll know. If it's worth the hype, 
                I'll tell you exactly why.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">🎨 Step-by-Step Tutorials</h3>
              <p className="text-gray-600">
                No skipped steps, no "just do this simple thing" that's actually impossible. Real instructions 
                for real people.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">✨ Trend Analysis</h3>
              <p className="text-gray-600">
                What's actually trending vs. what's just Pinterest bait. Plus, how to adapt trends for your 
                actual lifestyle.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-pink-600 mb-3">🔬 Nail Care Science</h3>
              <p className="text-gray-600">
                The actual chemistry behind why certain products work (or don't). Knowledge is power, and 
                healthier nails are the goal.
              </p>
            </div>
          </div>
        </section>

        {/* My Promise */}
        <section className="mb-16 bg-gray-900 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">My Promise to You</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-pink-400 mr-3">✓</span>
              <span>Every tutorial is tested multiple times before publishing</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-3">✓</span>
              <span>I'll always tell you if something is difficult, expensive, or not worth it</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-3">✓</span>
              <span>Product recommendations are based on actual testing, not sponsorship dollars</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-3">✓</span>
              <span>Safety and nail health come before aesthetics, always</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-400 mr-3">✓</span>
              <span>You'll get the truth — even when it's messy or imperfect (like me)</span>
            </li>
          </ul>
        </section>

        {/* Credentials & Verification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How I Stay Informed</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              I'm constantly learning from licensed nail technicians, dermatologists' research on nail health, 
              cosmetic chemists who break down product ingredients, and real users in nail art communities who 
              share what actually works in day-to-day life.
            </p>
            <p>
              Every piece of advice I share is cross-referenced with industry standards, safety guidelines from 
              professional organizations, and real-world testing. If I'm not 100% sure about something, I'll 
              tell you that too — because honestly? We're all learning.
            </p>
          </div>
        </section>

        {/* Community CTA */}
        <section className="text-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Join the Mirellé Community</h2>
          <p className="text-xl mb-6">
            Follow along for daily nail inspiration, honest product reviews, and a community that celebrates 
            creativity over perfection.
          </p>
          <p className="text-lg opacity-90">
            📧 Subscribe to our newsletter for exclusive tips<br />
            📌 Follow on Pinterest for endless inspiration<br />
            💬 Got questions? I actually read and respond to messages!
          </p>
        </section>

        {/* Author Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mirellé',
              url: 'https://mirelleinspo.com/about',
              image: 'https://mirelleinspo.com/aboutmeblogimg.jpg',
              jobTitle: 'Nail Art Content Creator & Beauty Expert',
              description: 'Nail art enthusiast and beauty content creator with 5+ years of experience in nail care, product testing, and trend analysis.',
              knowsAbout: [
                'Nail Art',
                'Nail Care',
                'Beauty Trends',
                'Product Testing',
                'DIY Nail Techniques',
                'Nail Health',
              ],
              sameAs: [
                'https://pinterest.com/mirelleinspo',
              ],
            }),
          }}
        />
      </div>
    </div>
  );
}
