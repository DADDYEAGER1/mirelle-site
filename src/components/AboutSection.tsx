// import ScrollReveal from '@/components/ui/ScrollReveal';
// import PremiumButton from '@/components/ui/PremiumButton';

// export default function AboutSection() {
//   return (
//     <section className="py-20 bg-gradient-to-br from-nude-50 to-blush-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* ✅ Content with ScrollReveal */}
//           <ScrollReveal delay={100}>
//             <div>
//               <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
//                 Your Nail Discovery Platform
//               </h2>
//               <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
//                 Mirellé curates the best nail trends, artist features, and product 
//                 recommendations from across the internet. We spend hours researching 
//                 so you don't have to—finding hidden gems, testing viral products, and 
//                 spotting trends before they explode.
//               </p>
//               <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
//                 From seasonal inspiration galleries to honest product comparisons, we're 
//                 your trusted source for discovering what's actually worth your time (and money). 
//                 Think of us as your nail-obsessed friend who does all the research and sends 
//                 you only the best finds.
//               </p>
//               <PremiumButton
//                 href="/about"
//                 variant="primary"
//                 size="md"
//               >
//                 Learn How We Curate →
//               </PremiumButton>
//             </div>
//           </ScrollReveal>

//           {/* ✅ Image with ScrollReveal + Hover Tilt */}
//           <ScrollReveal delay={300}>
//             <div className="relative group">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
//                 <img
//                   src="/media/aboutme.png"
//                   alt="Curated nail design inspiration and trending manicure styles"
//                   className="w-full h-96 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//               </div>
              
//               {/* ✅ Animated decorative elements */}
//               <div className="absolute -top-4 -right-4 w-24 h-24 bg-blush-200 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '3s' }}></div>
//               <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '4s' }}></div>
//             </div>
//           </ScrollReveal>
//         </div>
//       </div>
//     </section>
//   );
// }


import ScrollReveal from '@/components/ui/ScrollReveal';
import PremiumButton from '@/components/ui/PremiumButton';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-nude-50 to-blush-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content with ScrollReveal */}
          <ScrollReveal delay={100}>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
                Data-Driven Nail Trend Analysis
              </h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Mirellé Inspo isn't run by a nail artist—it's a trend analysis platform 
                that curates and forecasts nail trends using search data, social signals, 
                and consumer behavior patterns. I spend 40+ hours weekly researching so 
                you can discover what's trending before it peaks.
              </p>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                From analyzing Pinterest search volumes to tracking Instagram engagement 
                patterns, I combine data science with creative curation to help you stay 
                ahead of the curve. No guesswork—just insights backed by real numbers.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-1">50K+</div>
                  <div className="text-sm text-gray-600">Monthly Visitors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">2.5M+</div>
                  <div className="text-sm text-gray-600">Pinterest Views</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">10K+</div>
                  <div className="text-sm text-gray-600">Designs/Month</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <PremiumButton
                  href="/about"
                  variant="primary"
                  size="md"
                >
                  My Trend Analysis Process →
                </PremiumButton>
                <PremiumButton
                  href="/about#collaborate"
                  variant="secondary"
                  size="md"
                >
                  Work With Me
                </PremiumButton>
              </div>
            </div>
          </ScrollReveal>

          {/* Image with ScrollReveal + Hover Effects */}
          <ScrollReveal delay={300}>
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                <img
                  src="/media/aboutme.png"
                  alt="Nail trend analysis workspace with data visualization showing seasonal search patterns and viral design metrics"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Overlay Text on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <div className="text-white text-center px-4">
                    <p className="text-lg font-bold mb-2">📊 Trend Analyst | 🔍 Data Curator</p>
                    <p className="text-sm">Not a nail tech—just obsessed with patterns</p>
                  </div>
                </div>
              </div>
              
              {/* Animated Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-200 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-200 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-blue-200 rounded-full opacity-40 animate-pulse" style={{ animationDuration: '5s' }}></div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-8 bg-white px-6 py-3 rounded-full shadow-xl border-2 border-pink-200 animate-bounce" style={{ animationDuration: '3s' }}>
                <p className="text-sm font-bold text-gray-800">40+ hrs/week research 📈</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* What Makes Us Different - Mini Section */}
        <ScrollReveal delay={500}>
          <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold font-serif text-gray-900 text-center mb-8">
              What Makes Mirellé Inspo Different
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Trend Forecasting</h4>
                <p className="text-gray-700">
                  I analyze search data, social signals, and seasonal patterns to predict what's about to trend weeks before it peaks.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Content Curation</h4>
                <p className="text-gray-700">
                  Every design is hand-picked for quality. I find the best nail inspiration and organize it so you don't waste hours scrolling.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Data-Driven Insights</h4>
                <p className="text-gray-700">
                  My approach combines search volumes, engagement metrics, and consumer behavior to deliver insights you can trust.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/about" 
                className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold text-lg group"
              >
                Learn More About My Process 
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
