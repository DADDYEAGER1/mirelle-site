import Link from 'next/link';

const pinterestPins = [
  {
    id: 1,
    image: "/pinterest-showcase/pin1.jpg",
    title: "Cherry Red Nails Trends for 2025",
    href: "https://www.pinterest.com/pin/913034524499317377/"
  },
  {
    id: 2,
    image: "/pinterest-showcase/pin2.jpg",
    title: "Easy pastel french tips Ideas for Daily Wear",
    href: "https://www.pinterest.com/pin/913034524499287921/"
  },
  {
    id: 3,
    image: "/pinterest-showcase/pin3.jpg",
    title: "Easy cherry red nails Ideas for Daily Wear",
    href: "https://www.pinterest.com/pin/913034524499287818/"
  },
  {
    id: 4,
    image: "/pinterest-showcase/pin4.jpg",
    title: "Subtle chrome nails That Feel Timeless",
    href: "https://www.pinterest.com/pin/913034524499287762/"
  },
  {
    id: 5,
    image: "/pinterest-showcase/pin5.jpg",
    title: "Pinterest-Worthy cherry red nails for 2025",
    href: "https://www.pinterest.com/pin/913034524499287625/"
  },
  {
    id: 6,
    image: "/pinterest-showcase/pin6.jpg",
    title: "glossy manicure trends Inspiration" ,
    href: "https://www.pinterest.com/pin/913034524499287555/"
  },
  {
    id: 7,
    image: "/pinterest-showcase/pin7.jpg",
    title: "Everyday trendy manicure ideas with Modern Twist",
    href: "https://www.pinterest.com/pin/913034524499287409/"
  },
  {
    id: 8,
    image: "/pinterest-showcase/pin8.jpg",
    title: "Pinterest-Worthy aura nails for 2025",
    href: "http://pinterest.com/pin/913034524499287280/"
  },
  {
    id: 9,
    image: "/pinterest-showcase/xxyyzz.jpg",
    title: "Hot Nail Art Inspiration for 2025",
    href: "https://www.pinterest.com/pin/913034524499322600/"
  }
];

export default function PinterestShowcaseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-800 mb-4">
            Mirellé's Showcase
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto mb-8">
            Follow Mirellé on Pinterest for daily nail inspiration, trending designs, 
            and creative ideas that will transform your nail game.
          </p>
        </div>

        {/* Pinterest Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {pinterestPins.map((pin) => (
            <Link
              key={pin.id}
              href={pin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block break-inside-avoid mb-6"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={pin.image}
                  alt={pin.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300/25 via-transparent to-blush-300/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/70 via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-charcoal-800 font-semibold text-sm drop-shadow">
                    {pin.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://www.pinterest.com/mirelle_inspo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
            </svg>
            Follow Mirellé on Pinterest
          </Link>
        </div>
      </div>
    </section>
  );
}
