import Link from 'next/link';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "2.5M+ Monthly Saves - Join 50K+ on Pinterest",
  description: "Follow @mirelle_inspo for 2026's hottest nail trends! 500+ boards: chrome, cat claw, square designs, milky pastels. 2.5M+ monthly views. Daily inspiration. Save now!",
  keywords: "Mirellè Inspo Pinterest, nail trends Pinterest 2026, chrome nails Pinterest, cat claw nails, square nails inspiration, trending nail boards, DIY nail tutorials Pinterest, seasonal nail ideas, viral nail designs, Pinterest nail community, TikTok trending nails, nail art inspiration boards",
  authors: [{ name: "Mirellè Inspo Team" }],
  creator: "Mirellè Inspo",
  publisher: "Mirellè Inspo",
  alternates: {
    canonical: "https://mirelleinspo.com/pinterest",
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
    title: "Follow Mirellè Inspo on Pinterest - 2.5M+ Monthly Views",
    description: "Join 50K+ on Pinterest for 2026's trending nails! 500+ boards: chrome, cat claw, square, milky pastels. 2.5M+ monthly views. Daily inspiration. Follow @mirelle_inspo!",
    type: "website",
    url: "https://mirelleinspo.com/pinterest",
    siteName: "Mirellè Inspo",
    locale: "en_US",
    images: [
      {
        url: "https://mirelleinspo.com/og-pinterest-mirelle.png",
        width: 1200,
        height: 630,
        alt: "Mirellè Inspo Pinterest profile featuring 2026 trending nail designs with 2.5M monthly views and 500+ boards",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2.5M+ Monthly Pin Views - Follow on Pinterest",
    description: "500+ boards. 2026 trending nails. Chrome, cat claw, square designs. Daily inspo. Follow @mirelle_inspo →",
    images: ["https://mirelleinspo.com/twitter-pinterest.png"],
    creator: "@mirelleinspo",
    site: "@mirelleinspo",
  },
  other: {
    "pin:description": "Follow @mirelle_inspo on Pinterest for 2026's trending nails! 500+ boards, 2.5M+ monthly views. Chrome, cat claw, square designs. Daily inspiration. Join 50K+ nail lovers!",
    "pinterest-rich-pin": "true",
    "article:publisher": "https://www.pinterest.com/mirelle_inspo",
    "pinterest:category": "Nail Art Inspiration 2026",
    "og:see_also": "https://mirelleinspo.com/pinterest",
  },
};


const pinterestBoards = [
  {
    id: 1,
    title: "Winter Nail Art inspo",
    pinCount: "70+ pins",
    image: "/pinboard1.jpg",
    href: "https://www.pinterest.com/mirelle_inspo/nail-art/winter-nail-inspo/"
  },
  {
    id: 2,
    title: "French Tip Nail Designs",
    pinCount: "30+ pins",
    image: "/pinboard2.jpg",
    href: "https://www.pinterest.com/mirelle_inspo/nail-art/french-tip-nail-designs/"
  },
  {
    id: 3,
    title: "Trendy Nail Designs 2025",
    pinCount: "60 pins",
    image: "/pinboard3.jpg",
    href: "https://www.pinterest.com/mirelle_inspo/nail-art/trendy-nail-designs-2025/"
  },
  {
    id: 4,
    title: "Coffin & Almond Nails",
    pinCount: "50+ pins",
    image: "/pinboard4.jpg",
    href: "https://www.pinterest.com/mirelle_inspo/nail-art/coffin-almond-nail-inspiration/"
  },
  {
    id: 5,
    title: "Short Nail Ideas",
    pinCount: "90+ pins",
    image: "/pinboard5.jpg",
    href: "https://www.pinterest.com/mirelle_inspo/nail-art/short-nail-ideas-that-look-chic/"
  },
  {
    id: 6,
    title: "Chrome & Glazed Donut Nail Art",
    pinCount: "40+ pins",
    image: "/pinboard6.jpg",
    href: "https://www.pinterest.com/mirelle_inspo/nail-art/chrome-glazed-donut-nails/"
  },
  {
    id: 7,
    title: "Beauty Tutorials & nail care guides",
    pinCount: "40+ pins",
    image: "/pinboard7.jpg",
    href: "https://www.pinterest.com/mirelle_inspo/nail-art/beauty-tutorials-nail-care-guides/"
  },
  {
    id: 8,
    title: "Halloween Nail Designs 2025",
    pinCount: "50+ pins",
    image: "/pinboard8.jpg",
    href: "https://www.pinterest.com/mirelle_inspo/halloween-nail-designs-2025-spooky-fall-nails/"
  },
  {
    id: 9,
    title: "Winter Wonderland Nail Ideas",
    pinCount: "40+ pins",
    image: "/pinboard9.jpg",
    href: "https://www.pinterest.com/mirelle_inspo/nail-art/winter-wonderland-nail-ideas/"
  }
];

export default function PinterestPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/pinboardbanner.jpg"
            alt="Pinterest inspiration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Pinterest Inspiration
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Follow Mirellé on Pinterest for Daily Nail Inspiration
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">
              Discover Mirellé's Pinterest Boards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore curated collections of nail art inspiration, care tips, and trending 
              designs. Follow along for daily doses of nail creativity and expert advice.
            </p>
          </div>

          {/* Pinterest Boards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pinterestBoards.map((board) => (
              <Link
                key={board.id}
                href={board.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-64">
                  <img
                    src={board.image}
                    alt={board.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-xl font-bold mb-2">
                    {board.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {board.pinCount}
                  </p>
                  <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 mt-2">
                    View Board
                    <svg 
                      className="ml-2 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Follow Button */}
          <div className="text-center mb-16">
            <a
              href="https://www.pinterest.com/mirelle_inspo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300 text-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
              Follow Mirellé on Pinterest
            </a>
          </div>

          {/* Why Follow Section */}
          <div className="bg-gradient-to-br from-blush-50 to-purple-50 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 text-center">
              Why Follow Mirellé on Pinterest?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blush-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📌</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Daily Inspiration</h4>
                <p className="text-sm text-gray-600">
                  Fresh nail art ideas and trending designs updated regularly
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Expert Tips</h4>
                <p className="text-sm text-gray-600">
                  Professional advice and techniques from nail care experts
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-nude-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Creative Ideas</h4>
                <p className="text-sm text-gray-600">
                  Unique and creative nail art concepts for every occasion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
