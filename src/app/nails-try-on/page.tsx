import type { Metadata } from 'next';
import ARNailTryOn from '@/components/AR/ARNailTryOn';

export const metadata: Metadata = {
  title: 'Virtual Nail Try-On | AR Nail Designer',
  description: 'Try on any nail design virtually with our AR technology. Upload your favorite nail art and see how it looks on your hands in real-time.',
  keywords: [
    'virtual nail try on',
    'AR nail art',
    'nail design try on',
    'virtual manicure',
    'nail art simulator',
    'try on press on nails',
  ],
  openGraph: {
    title: 'Virtual Nail Try-On - See Any Design on Your Hands',
    description: 'Upload any nail design and see it on your hands instantly with AR technology',
    type: 'website',
  },
};

export default function NailsTryOnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-purple-500/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-accent/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-accent">AR Technology</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal-900 mb-4">
            Try On Any Nail Design
            <span className="block text-accent mt-2">Instantly on Your Hands</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Upload your favorite nail art design and see how it looks on your fingers in real-time with our advanced AR technology
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Real-time AR</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Hand tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Upload any design</span>
            </div>
          </div>
        </div>
      </section>

      {/* AR Component */}
      <section className="pb-20">
        <ARNailTryOn />
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-charcoal-900 mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-accent">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Upload Design</h3>
              <p className="text-text-secondary">Choose any nail design image from your device or gallery</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-accent">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Show Your Hand</h3>
              <p className="text-text-secondary">Allow camera access and show your palm to the camera</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-accent">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">See It Live</h3>
              <p className="text-text-secondary">Watch as the nail design appears on your fingers in real-time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-accent/10 shadow-editorial">
            <h3 className="text-2xl font-heading font-bold text-charcoal-900 mb-6">
              💡 Tips for Best Results
            </h3>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Use good lighting - natural daylight works best for hand detection</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Hold your hand steady and flat with fingers spread for accurate tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Use high-quality nail design images for the most realistic results</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Keep your hand within the camera frame at a comfortable distance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}