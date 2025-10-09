import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-26 bg-white">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image - Left side, larger */}
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden shadow-editorial-lg">
              <img
                src="/media/aboutme.png"
                alt="Mirelle - Nail artist and beauty expert"
                className="w-full h-[600px] object-cover"
              />
              {/* Subtle editorial overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            
            {/* Minimal accent element - Allure style */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-editorial-accent opacity-40"></div>
          </div>

          {/* Content - Right side */}
          <div className="lg:col-span-5">
            <p className="text-overline text-editorial-accent uppercase tracking-widest mb-6 font-semibold">
              Our Story
            </p>
            
            <h2 className="font-display text-display-md text-editorial-charcoal mb-8 tracking-magazine leading-tight">
              About Mirellé
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-body-lg text-editorial-slate leading-relaxed font-light">
                Mirellé curates modern nail ideas, seasonal inspirations, nail care tips, 
                and favorite product picks. From Pinterest-worthy nail art to essential 
                care routines, discover everything you need to express your unique style 
                through beautiful, well-maintained nails.
              </p>
              <p className="text-body-lg text-editorial-slate leading-relaxed font-light">
                Whether you're looking for the perfect seasonal look, want to master 
                at-home nail techniques, or need inspiration for your next salon visit, 
                Mirelle has you covered with expert tips and stunning visual guides.
              </p>
            </div>
            
            <Link
              href="/about"
              className="inline-flex items-center text-editorial-charcoal border-b-2 border-editorial-charcoal pb-1 font-sans text-body-sm uppercase tracking-wide font-medium hover:border-editorial-accent hover:text-editorial-accent transition-all duration-300 group"
            >
              Read the Full Story
              <svg 
                className="ml-3 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
