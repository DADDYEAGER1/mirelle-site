// src/components/InspoShowcase.tsx
import Link from 'next/link';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { getShowcaseDesigns } from '@/lib/inspo';

export default function InspoShowcase() {
  const showcaseDesigns = getShowcaseDesigns(6);

  return (
    <section className="py-26 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-18">
          <p className="text-overline text-accent uppercase tracking-widest mb-4 font-semibold">
            Design Inspiration
          </p>
          <h2 className="font-display text-display-md text-text-primary mb-6 tracking-magazine">
            Nail Inspo Gallery
          </h2>
          <p className="text-body-lg text-editorial-slate leading-relaxed font-light">
            Explore hundreds of nail designs from classic French tips to trending chrome finishes. 
            Find your next manicure inspiration across every style and season.
          </p>
        </div>
        
        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {showcaseDesigns.map((design, index) => (
            <AnimatedCard 
              key={design.slug} 
              delay={index * 100}
              enableTilt={true}
              className="h-full"
            >
              <Link
                href={`/inspo/${design.slug}`}
                className="group relative overflow-hidden bg-white shadow-editorial hover:shadow-editorial-lg transition-all duration-500 block h-full"
              >
                <div className="relative h-96">
                  {/* Image with zoom effect */}
                  <img
                    src={design.heroImage}
                    alt={design.displayName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Editorial gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-6 right-6 border border-white/40 backdrop-blur-sm bg-white/20 px-4 py-2 text-caption uppercase tracking-wide font-semibold text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                    {design.category}
                  </div>

                  {/* Emoji decoration */}
                  <div className="absolute top-6 left-6 text-3xl opacity-80 group-hover:scale-125 transition-transform duration-300">
                    {design.emojis[0]}
                  </div>
                </div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-display text-headline-lg mb-3 text-white tracking-magazine">
                    {design.displayName}
                  </h3>
                  <p className="text-white/90 mb-6 text-body font-sans font-light leading-relaxed">
                    {design.description}
                  </p>
                  
                  {/* CTA with animated underline */}
                  <div className="inline-flex items-center text-white pb-1 text-body-sm font-sans uppercase tracking-wide font-medium relative">
                    <span className="mr-2">View Gallery</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    {/* Animated underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full origin-left"></span>
                  </div>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        {/* CTA to view all */}
        <div className="text-center">
          <Link
            href="/inspo"
            className="inline-flex items-center gap-3 bg-editorial-charcoal text-white px-8 py-4 hover:bg-accent transition-colors duration-300 font-sans uppercase tracking-wider text-sm font-semibold shadow-editorial hover:shadow-editorial-lg"
          >
            <span>Explore All Designs</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
