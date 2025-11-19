// import type { Metadata } from 'next';
// import { generateAboutPageSchema } from '@/lib/generateSchemas';

// export const metadata: Metadata = {
  
//   title: "About Mirellé - 50K+ Nail Lovers Trust Our Expert Tips",
//   description: "Meet the team behind 1,000+ nail designs, 2.5M Pinterest views, and trusted tips. Our mission: Make salon-quality nails accessible to everyone. Join 50K+ DIY-ers!",
//   keywords: [
//     "about Mirellé",
//     "nail inspiration platform",
//     "nail art community",
//     "trusted nail tips",
//     "DIY nail experts",
//     "nail design curators",
//     "Mirellé mission",
//     "nail care education"
//   ],
//   authors: [{ name: "Mirelle" }],
//   creator: "Mirelle",
//   publisher: "Mirelle",
//   alternates: {
//     canonical: 'https://mirelleinspo.com/about',
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   openGraph: {
//     title: "About Mirellé - The Team Behind 1,000+ Nail Designs",
//     description: "Discover how we curate 1,000+ designs, reach 2.5M on Pinterest, and help 50K+ achieve salon nails at home. Our story, mission, and nail obsession explained!",
//     url: 'https://mirelleinspo.com/about',
//     type: 'website',
//     siteName: "Mirelle",
//     locale: "en_US",
//     images: [
//       {
//         url: "https://mirelleinspo.com/og-default.png",
//         width: 1200,
//         height: 630,
//         alt: "About Mirellé nail inspiration platform trusted by 50K+ nail enthusiasts for expert DIY tips and trending designs",
//         type: "image/png",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "About Mirellé - 50K+ Trust Our Nail Expertise",
//     description: "Meet the team behind 1,000+ designs, 2.5M Pinterest views. Our mission: Salon nails for everyone!",
//     images: ["https://mirelleinspo.com/og-default.png"],
//     creator: "@mirelleinspo",
//     site: "@mirelleinspo",
//   },
//   other: {
//     "pin:description": "Learn about Mirellé - trusted by 50K+ for expert nail tips, 1,000+ designs, 2.5M Pinterest views. Our mission: Make salon nails accessible to everyone!",
//     "pinterest-rich-pin": "true",
//     "article:publisher": "https://www.pinterest.com/mirelle_inspo",
//     "og:see_also": "https://mirelleinspo.com/about",
//   },
// };
// export default function AboutPage() {
//   const baseUrl = 'https://mirelleinspo.com';
//   const aboutPageSchema = generateAboutPageSchema();

//   return (
//     <>
//       {/* AboutPage Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(aboutPageSchema),
//         }}
//       />

//       <div className="min-h-screen bg-white">
//         {/* Hero Section */}
//         <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-white py-20">
//           <div className="max-w-4xl mx-auto px-4 text-center">
//             <h1 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6">
//               About Mirellé
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed">
//               Your Premier Destination for Expert Nail Art Inspiration, Seasonal Trends, and Professional Education
//             </p>
//           </div>
//         </section>

//         <div className="max-w-4xl mx-auto px-4 py-16">
//           {/* Who We Are */}
//           <section className="mb-16">
//             <h2 className="text-4xl font-bold font-serif text-gray-900 mb-8">Who We Are</h2>
//             <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
//               <p className="text-xl">
//                 Mirellé is a leading digital content platform specializing in nail art inspiration, seasonal trend analysis, 
//                 and expert beauty education. We curate and create comprehensive guides that bridge the gap between 
//                 professional salon techniques and accessible at-home nail care.
//               </p>
//               <p>
//                 Founded on the principle that exceptional nail art should be accessible to everyone, we've built a 
//                 trusted resource that serves thousands of beauty enthusiasts, DIY practitioners, and nail care professionals 
//                 seeking reliable, trend-forward content.
//               </p>
//               <p>
//                 Our platform combines rigorous research, industry expertise, and creative vision to deliver content 
//                 that educates, inspires, and empowers our community to achieve salon-quality results.
//               </p>
//             </div>
//           </section>

//           {/* What We Do */}
//           <section className="mb-16">
//             <h2 className="text-4xl font-bold font-serif text-gray-900 mb-8">What We Do</h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 border-l-4 border-pink-500">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Curation & Creation</h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   We produce comprehensive guides, step-by-step tutorials, and trend analyses covering everything 
//                   from seasonal nail designs to advanced techniques. Every piece of content is researched, tested, 
//                   and crafted to meet professional standards.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border-l-4 border-purple-500">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Trend Analysis & Forecasting</h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   Our team monitors global beauty trends, seasonal patterns, and emerging techniques to deliver 
//                   timely, relevant content. We identify what's trending, why it matters, and how to adapt it for 
//                   real-world application.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-l-4 border-blue-500">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Research & Recommendations</h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   We evaluate nail care products, tools, and accessories based on quality, performance, and value. 
//                   Our recommendations are thoroughly vetted to ensure we're guiding our audience toward products 
//                   that deliver results.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-l-4 border-green-500">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Resources</h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   From beginner basics to advanced techniques, we create educational content that breaks down 
//                   complex processes into accessible, actionable steps. Our goal is to build confidence and 
//                   competence in nail art practices.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* Our Approach */}
// <section className="mb-16 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 rounded-2xl p-12 border border-pink-200">
//   <h2 className="text-4xl font-bold font-serif mb-8 text-gray-900">Our Approach</h2>
//   <div className="space-y-6 text-lg leading-relaxed">
//     <div className="flex items-start gap-4">
//       <span className="text-3xl">🎯</span>
//       <div>
//         <h3 className="text-xl font-bold mb-2 text-gray-900">Expert-Driven Content</h3>
//         <p className="text-gray-700">
//                     Every guide, tutorial, and recommendation is backed by industry research, professional insights, 
//                     and real-world testing to ensure accuracy and reliability.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <span className="text-3xl">🔍</span>
//                 <div>
//                   <h3 className="text-xl font-bold mb-2">Comprehensive Research</h3>
//                   <p className="text-gray-300">
//                     We invest significant time in researching techniques, testing products, and analyzing trends 
//                     before publishing content. Quality and accuracy are non-negotiable.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <span className="text-3xl">✨</span>
//                 <div>
//                   <h3 className="text-xl font-bold mb-2">Accessible Excellence</h3>
//                   <p className="text-gray-300">
//                     We believe exceptional nail art shouldn't require professional training or expensive equipment. 
//                     Our content makes professional-quality techniques accessible to everyone.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <span className="text-3xl">🌍</span>
//                 <div>
//                   <h3 className="text-xl font-bold mb-2">Global Perspective</h3>
//                   <p className="text-gray-300">
//                     We draw inspiration from international trends, diverse cultural aesthetics, and global beauty 
//                     movements to offer a rich, varied content experience.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Our Commitment */}
//           <section className="mb-16">
//             <h2 className="text-4xl font-bold font-serif text-gray-900 mb-8">Our Commitment</h2>
//             <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-10">
//               <ul className="space-y-4 text-lg text-gray-800">
//                 <li className="flex items-start gap-3">
//                   <span className="text-pink-600 font-bold text-xl">✓</span>
//                   <span><strong>Quality First:</strong> Every piece of content meets rigorous editorial standards before publication</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-pink-600 font-bold text-xl">✓</span>
//                   <span><strong>Transparency:</strong> We clearly disclose partnerships, affiliations, and sponsored content</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-pink-600 font-bold text-xl">✓</span>
//                   <span><strong>Safety Standards:</strong> Nail health and safety guidelines are prioritized in all recommendations</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-pink-600 font-bold text-xl">✓</span>
//                   <span><strong>Continuous Improvement:</strong> We regularly update content to reflect new research, techniques, and products</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-pink-600 font-bold text-xl">✓</span>
//                   <span><strong>Community Focus:</strong> We listen to our audience and create content that addresses real needs and questions</span>
//                 </li>
//               </ul>
//             </div>
//           </section>

//           {/* Our Expertise */}
//           <section className="mb-16">
//             <h2 className="text-4xl font-bold font-serif text-gray-900 mb-8">Our Expertise</h2>
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="text-center p-6 bg-white rounded-xl shadow-md">
//                 <div className="text-5xl font-bold text-pink-600 mb-2">50+</div>
//                 <p className="text-gray-700 font-semibold">Comprehensive Guides</p>
//               </div>
//               <div className="text-center p-6 bg-white rounded-xl shadow-md">
//                 <div className="text-5xl font-bold text-purple-600 mb-2">1000+</div>
//                 <p className="text-gray-700 font-semibold">Hours of Research</p>
//               </div>
//               <div className="text-center p-6 bg-white rounded-xl shadow-md">
//                 <div className="text-5xl font-bold text-blue-600 mb-2">24/7</div>
//                 <p className="text-gray-700 font-semibold">Content Availability</p>
//               </div>
//             </div>
//           </section>

//           {/* Partner With Us */}
//           <section className="mb-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-12 text-white">
//             <h2 className="text-4xl font-bold font-serif mb-6">Partner With Mirellé</h2>
//             <p className="text-xl mb-6 leading-relaxed">
//               We collaborate with beauty brands, professional nail technicians, and industry partners who share 
//               our commitment to quality and innovation. If you're interested in partnership opportunities, 
//               collaborations, or content syndication, we'd love to hear from you.
//             </p>
//             <div className="space-y-3 text-lg">
//               <p>📧 <strong>Business Inquiries:</strong>contact@mirelleinspo.com</p>
//               <p>💼 <strong>Brand Collaborations:</strong> Available for select partnerships</p>
//               <p>📝 <strong>Content Licensing:</strong> Professional content syndication options available</p>
//             </div>
//           </section>

//           {/* Contact Section */}
//           <section className="text-center">
//             <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">Get In Touch</h2>
//             <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
//               Have questions about our content, products we recommend, or partnership opportunities? 
//               We're here to help.
//             </p>
//             <a 
//               href="/contact" 
//               className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
//             >
//               Contact Us
//             </a>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }


import type { Metadata } from 'next';
import { generateAboutPageSchema } from '@/lib/generateSchemas';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Mirellé Inspo | Nail Trend Analyst & Inspiration Curator",
  description: "Meet the team behind Mirellé Inspo - your trusted source for data-driven nail trends, curated inspiration, and seasonal forecasting. Discover how we analyze 10,000+ designs monthly.",
  keywords: [
    "nail trends",
    "nail art inspiration",
    "nail design trends",
    "seasonal nail trends",
    "nail industry expert",
    "nail trend analyst",
    "about Mirellé",
    "nail art community"
  ],
  authors: [{ name: "Mirellé Team" }],
  creator: "Mirellé",
  publisher: "Mirellé",
  alternates: {
    canonical: 'https://mirelleinspo.com/about',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "About Mirellé Inspo | Nail Trend Analyst & Curator",
    description: "Discover how we curate and analyze nail trends using data, search patterns, and consumer behavior. Your go-to source for trending nail inspiration.",
    url: 'https://mirelleinspo.com/about',
    type: 'website',
    siteName: "Mirellé",
    locale: "en_US",
    images: [
      {
        url: "https://mirelleinspo.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "About Mirellé Inspo - Nail trend analyst and inspiration curator",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mirellé Inspo | Nail Trend Analyst",
    description: "Your trusted source for data-driven nail trends and curated inspiration. Discover our approach to trend forecasting.",
    images: ["https://mirelleinspo.com/og-default.png"],
    creator: "@mirelleinspo",
    site: "@mirelleinspo",
  },
};

export default function AboutPage() {
  const baseUrl = 'https://mirelleinspo.com';
  const aboutPageSchema = generateAboutPageSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold font-serif text-gray-900 mb-6">
                Spotting Nail Trends<br />Before They Peak
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                I'm not a nail artist—I'm a trend analyst and curator who understands the nail industry through data, patterns, and consumer behavior.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <Link 
                href="#collaborate" 
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Work With Me
              </Link>
            </div>

            {/* Hero Image Placeholder */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[16/9] bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                  <p className="text-gray-500 text-lg">Hero Image: Workspace or branded graphic (1200x675px)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MY STORY SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">My Story</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    I didn't start Mirellé Inspo because I'm a nail tech—I started it because I saw a massive gap in how nail trends were being covered online. Everyone was sharing pretty pictures, but no one was explaining why certain designs were blowing up or when they'd peak.
                  </p>
                  <p>
                    As someone who's always been fascinated by consumer behavior and search trends, I realized the nail industry was ripe for a data-driven approach. I spent months analyzing Pinterest boards, tracking Instagram hashtags, monitoring Google search volumes, and cross-referencing seasonal patterns to understand what makes a nail trend go viral.
                  </p>
                  <p>
                    What makes Mirellé Inspo different? I'm not here to teach you techniques—I'm here to help you discover trends early, understand why they matter, and find the best inspiration before everyone else does. I curate, analyze, and forecast so you can stay ahead of the curve.
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-[4/5] bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                    <p className="text-gray-500 text-center px-4">Personal photo or workspace image<br />(800x1000px, right-aligned)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT MAKES MIRELLÉ INSPO DIFFERENT */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 text-center mb-16">
              What Makes Mirellé Inspo Different
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Trend Forecasting</h3>
                <p className="text-gray-700 leading-relaxed">
                  I analyze search data, social signals, and seasonal patterns to predict what's about to trend. By monitoring Google Trends, Pinterest analytics, and Instagram engagement, I can tell you what's gaining traction weeks before it peaks.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Research</h3>
                <p className="text-gray-700 leading-relaxed">
                  I don't just scroll social media—I dig deep. I research emerging techniques, track viral moments across platforms, and understand what's gaining traction in different demographics and regions before it becomes mainstream.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Curation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every design featured on Mirellé Inspo is hand-picked for quality and relevance. I find the best nail inspiration from across the web, credit the original artists, and organize it in a way that actually makes sense for your search.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Insights</h3>
                <p className="text-gray-700 leading-relaxed">
                  My approach is rooted in numbers—search volumes, engagement metrics, seasonal behavior patterns, and consumer sentiment. I combine qualitative creativity with quantitative analysis to deliver insights you can trust.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Seasonal Strategy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nail trends are highly seasonal. I track when specific designs peak (holiday nails in November, wedding nails in spring) and help you plan your manicure calendar so you're never behind the curve.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Perspective</h3>
                <p className="text-gray-700 leading-relaxed">
                  Trends don't start in one place anymore. I monitor international platforms, track K-beauty influences, European minimalism, and American maximalism to give you a truly global view of what's trending.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BY THE NUMBERS */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 text-center mb-16">
              Mirellé Inspo Impact
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-pink-600 mb-2">50K+</div>
                <p className="text-gray-700 font-medium">Monthly Visitors</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">2.5M+</div>
                <p className="text-gray-700 font-medium">Pinterest Monthly Views</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">10K+</div>
                <p className="text-gray-700 font-medium">Designs Curated Monthly</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-rose-600 mb-2">40+</div>
                <p className="text-gray-700 font-medium">Hours Weekly Research</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-indigo-600 mb-2">12+</div>
                <p className="text-gray-700 font-medium">Seasonal Reports Published</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU'LL FIND HERE */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 text-center mb-16">
              What You'll Discover on Mirellé Inspo
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border-l-4 border-pink-500 shadow-md">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trend Reports</h3>
                <p className="text-gray-700">Monthly deep-dives into what's hot right now and what's coming next based on search data and social signals.</p>
              </div>

              <div className="bg-white p-8 rounded-xl border-l-4 border-purple-500 shadow-md">
                <div className="text-4xl mb-4">💅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Seasonal Guides</h3>
                <p className="text-gray-700">Comprehensive collections for holidays, wedding season, summer vibes, and every occasion that demands fresh nails.</p>
              </div>

              <div className="bg-white p-8 rounded-xl border-l-4 border-blue-500 shadow-md">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Design Inspiration</h3>
                <p className="text-gray-700">Curated galleries from minimalist elegance to maximalist drama—organized by style, color, and occasion.</p>
              </div>

              <div className="bg-white p-8 rounded-xl border-l-4 border-rose-500 shadow-md">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Insights</h3>
                <p className="text-gray-700">Data-backed analysis explaining why certain trends go viral, when they peak, and how long they last.</p>
              </div>

              <div className="bg-white p-8 rounded-xl border-l-4 border-green-500 shadow-md">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Product Recommendations</h3>
                <p className="text-gray-700">Honest reviews based on research, testing, and community feedback—not just sponsored fluff.</p>
              </div>

              <div className="bg-white p-8 rounded-xl border-l-4 border-indigo-500 shadow-md">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trend Forecasts</h3>
                <p className="text-gray-700">Predictions for upcoming seasons based on historical data, search trends, and emerging social patterns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* COLLABORATION OPPORTUNITIES */}
        <section id="collaborate" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 text-center mb-16">
              Let's Work Together
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* FOR NAIL ARTISTS */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Nail Artists & Creators</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I'm always looking to feature talented nail artists! Submit your designs and get featured with full credit, backlinks, and Pinterest promotion.
                </p>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 mt-1">✓</span>
                    <span>Exposure to 50K+ monthly visitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 mt-1">✓</span>
                    <span>Proper attribution & backlinks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 mt-1">✓</span>
                    <span>Pinterest board features</span>
                  </li>
                </ul>
                <Link 
                  href="/contact?type=artist" 
                  className="inline-block w-full text-center bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Submit Your Work
                </Link>
              </div>

              {/* FOR BRANDS */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Brands</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Open to product reviews, sponsored content, and brand partnerships with companies that align with our quality standards.
                </p>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span>Engaged audience of nail enthusiasts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span>Product features & honest reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">✓</span>
                    <span>Seasonal campaign integration</span>
                  </li>
                </ul>
                <Link 
                  href="/work-with-us" 
                  className="inline-block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  View Media Kit
                </Link>
              </div>

              {/* FOR PUBLISHERS */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Publishers & Media</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Available for expert quotes, trend commentary, and data insights for articles, podcasts, and media features.
                </p>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>HARO responses & expert quotes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Podcast & interview opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Trend data & insights</span>
                  </li>
                </ul>
                <Link 
                  href="/contact?type=media" 
                  className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Media Inquiries
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl">
              <p className="text-gray-700 text-lg">
                <strong>Note:</strong> When submitting content or collaborating with shared data, your contributions may be visible to other users of this platform.
              </p>
            </div>
          </div>
        </section>

        {/* MY PROCESS */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 text-center mb-16">
              How I Spot Trends Before They Peak
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Monitor Search Trends</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I track search queries across Google Trends, Pinterest analytics, and Instagram hashtags to identify what people are actively looking for before it becomes mainstream.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Analyze Engagement Patterns</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I study which designs get the most saves, shares, and comments to understand what's resonating with different audiences and why certain styles are gaining momentum.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-Reference Historical Data</h3>
                  <p className="text-gray-700 leading-relaxed">
                    By comparing current patterns with past seasonal trends and cyclical behavior, I can predict when specific designs will peak and how long they'll stay relevant.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Curate & Present Insights</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I organize findings into actionable trend reports, seasonal guides, and curated galleries that make it easy for you to discover what's next without the research overwhelm.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Track & Refine Predictions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I continuously monitor how trends perform after forecasting, refining my methodology based on real-world results to improve accuracy over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              Stay Ahead of Nail Trends
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Get weekly trend alerts, seasonal forecasts, and curated inspiration delivered straight to your inbox. Join 10,000+ nail enthusiasts who never miss a trend.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link 
                href="/#newsletter" 
                className="inline-block bg-white text-pink-600 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Weekly Trend Alerts
              </Link>
              <Link 
                href="/contact" 
                className="inline-block border-2 border-white text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-white hover:text-pink-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <a href="https://in.pinterest.com/mirelle_inspo/" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://instagram.com/mirelle_inspo" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://x.com/mirelle_inspo" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
