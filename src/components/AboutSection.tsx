import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-nude-50 to-blush-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
              About Mirellé
            </h2>
            <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
              Mirellé curates modern nail ideas, seasonal inspirations, nail care tips, 
              and favorite product picks. From Pinterest-worthy nail art to essential 
              care routines, discover everything you need to express your unique style 
              through beautiful, well-maintained nails.
            </p>
            <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
              Whether you're looking for the perfect seasonal look, want to master 
              at-home nail techniques, or need inspiration for your next salon visit, 
              Mirelle has you covered with expert tips and stunning visual guides.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-blush-600 hover:text-blush-700 font-semibold text-lg transition-colors group"
            >
              Read the Full Story
              <svg 
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/media/aboutme.png"
                alt="Mirelle - Nail artist and beauty expert"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blush-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
