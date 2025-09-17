import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/aboutmebanner.jpg"
            alt="Mirelle - About background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            About Mirellé
          </h1>
          <p className="text-xl md:text-2xl font-light">
            The Story Behind the Brand
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <h2 className="font-serif text-3xl font-bold text-charcoal-800 mb-6">
                  Welcome to Mirellé
                </h2>
                <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                  Hi, I'm Mirelle, and I'm passionate about helping you discover the 
                  perfect nail looks that express your unique personality. What started 
                  as a personal journey to find the best nail care routines and most 
                  stunning designs has evolved into a comprehensive resource for nail 
                  enthusiasts everywhere.
                </p>
                <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                  My mission is simple: to curate modern nail ideas, seasonal inspirations, 
                  and essential care tips that make you feel confident and beautiful. 
                  Whether you're a nail art novice or a seasoned pro, I believe everyone 
                  deserves access to expert advice and stunning inspiration.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/aboutmeblogimg.jpg"
                  alt="Mirelle's workspace"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-nude-50 to-blush-50 rounded-2xl p-8 mb-16">
              <h3 className="font-serif text-2xl font-bold text-charcoal-800 mb-4">
                My Philosophy
              </h3>
              <p className="text-lg text-charcoal-600 leading-relaxed">
                Nails are more than just a beauty accessory – they're a form of self-expression, 
                a way to showcase your personality, and a small but powerful detail that can 
                complete any look. I believe that great nail care and beautiful designs should 
                be accessible to everyone, regardless of skill level or budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-4">
                  What You'll Find Here
                </h3>
                <ul className="space-y-3 text-charcoal-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blush-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Expert nail care tips and routines
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blush-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Seasonal trend guides and inspiration
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blush-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Step-by-step nail art tutorials
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blush-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Product recommendations and reviews
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blush-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    At-home nail techniques and hacks
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-4">
                  My Promise to You
                </h3>
                <p className="text-charcoal-600 mb-4">
                  Every piece of content I create is carefully researched, tested, and 
                  designed to help you achieve beautiful, healthy nails. I'm committed 
                  to providing honest, practical advice that you can trust and implement 
                  in your own nail care routine.
                </p>
                <p className="text-charcoal-600">
                  Whether you're looking for a quick fix or a complete nail transformation, 
                  I'm here to guide you every step of the way.
                </p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-blush-100 to-purple-100 rounded-2xl p-12">
              <h3 className="font-serif text-3xl font-bold text-charcoal-800 mb-4">
                Join the Mirellé Community
              </h3>
              <p className="text-lg text-charcoal-600 mb-8 max-w-2xl mx-auto">
                Follow along on Pinterest for daily inspiration, subscribe to our newsletter 
                for exclusive tips, and don't hesitate to reach out with your questions or 
                favorite nail looks!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.pinterest.com/mirelle_inspo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                  Follow on Pinterest
                </a>
                {/* <a
                  href="#subscribe"
                  className="border-2 border-charcoal-800 text-charcoal-800 px-8 py-3 rounded-full font-semibold hover:bg-charcoal-800 hover:text-white transition-colors duration-300"
                >
                  Subscribe to Newsletter
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
