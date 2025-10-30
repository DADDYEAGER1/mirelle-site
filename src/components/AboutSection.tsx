import ScrollReveal from '@/components/ui/ScrollReveal';
import PremiumButton from '@/components/ui/PremiumButton';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-nude-50 to-blush-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ✅ Content with ScrollReveal */}
          <ScrollReveal delay={100}>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
                Your Nail Discovery Platform
              </h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                Mirellé curates the best nail trends, artist features, and product 
                recommendations from across the internet. We spend hours researching 
                so you don't have to—finding hidden gems, testing viral products, and 
                spotting trends before they explode.
              </p>
              <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
                From seasonal inspiration galleries to honest product comparisons, we're 
                your trusted source for discovering what's actually worth your time (and money). 
                Think of us as your nail-obsessed friend who does all the research and sends 
                you only the best finds.
              </p>
              <PremiumButton
                href="/about"
                variant="primary"
                size="md"
              >
                Learn How We Curate →
              </PremiumButton>
            </div>
          </ScrollReveal>

          {/* ✅ Image with ScrollReveal + Hover Tilt */}
          <ScrollReveal delay={300}>
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                <img
                  src="/media/aboutme.png"
                  alt="Curated nail design inspiration and trending manicure styles"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* ✅ Animated decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blush-200 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '4s' }}></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
