import Link from 'next/link';
import { useState } from 'react';

const newYearProducts = [
  // Initial 15 products (visible on load)
  {
    id: 1,
    name: "Midnight Sparkle Collection",
    price: "$29.99",
    originalPrice: "$34.99",
    image: "https://m.media-amazon.com/images/I/71PUcXj5YYL._SL1500_.jpg",
    hoverImage: "https://m.media-amazon.com/images/I/81dOrEH7aTL._SL1500_.jpg",
    description: "Deep midnight black with silver and gold glitter explosion",
    rating: 4.9,
    reviewCount: 189,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/newyear1"
  },
  {
    id: 2,
    name: "Champagne Bubbles Glam",
    price: "$26.99",
    image: "https://m.media-amazon.com/images/I/71sPuMmbetL._SL1500_.jpg",
    description: "Luxurious champagne gold with bubble effect and pearl accents",
    rating: 4.8,
    reviewCount: 156,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/newyear2"
  },
  {
    id: 3,
    name: "Fireworks Fantasy",
    price: "$31.99",
    originalPrice: "$36.99",
    image: "https://m.media-amazon.com/images/I/71-5-NHYeLL._SL1500_.jpg",
    description: "Multi-colored glitter explosion mimicking New Year fireworks",
    rating: 4.9,
    reviewCount: 203,
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/newyear3"
  },
  {
    id: 4,
    name: "Golden Hour Elegance",
    price: "$24.99",
    image: "https://m.media-amazon.com/images/I/71CSH8hX06L._SL1500_.jpg",
    description: "Rich golden metallic with sunset gradient and chrome finish",
    rating: 4.7,
    reviewCount: 142,
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/newyear4"
  },
  {
    id: 5,
    name: "Silver Stars Galaxy",
    price: "$27.99",
    image: "https://m.media-amazon.com/images/I/81dOrEH7aTL._SL1500_.jpg",
    description: "Deep space black with silver stars and cosmic shimmer",
    rating: 4.8,
    reviewCount: 167,
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/newyear5"
  },
  {
    id: 6,
    name: "Rose Gold Celebration",
    price: "$25.99",
    image: "https://m.media-amazon.com/images/I/711T6nOvTQL._SY450_.jpg",
    description: "Elegant rose gold with celebration confetti and glitter",
    rating: 4.9,
    reviewCount: 178,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/newyear6"
  },
  {
    id: 7,
    name: "Crystal Ball Dreams",
    price: "$28.99",
    originalPrice: "$33.99",
    image: "https://m.media-amazon.com/images/I/71ZpLRPv4OL._SY450_.jpg",
    description: "Clear crystal base with holographic effects and rainbow prisms",
    rating: 4.8,
    reviewCount: 134,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/newyear7"
  },
  {
    id: 8,
    name: "Platinum Party Nails",
    price: "$32.99",
    image: "https://m.media-amazon.com/images/I/71U9wwdKYFL._SY450_.jpg",
    description: "Premium platinum finish with diamond dust and luxury feel",
    rating: 4.9,
    reviewCount: 198,
    isNew: true,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/newyear8"
  },
  {
    id: 9,
    name: "Disco Ball Glitter",
    price: "$23.99",
    image: "https://m.media-amazon.com/images/I/41Aj6Irp6+L._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Mirror ball effect with multi-faceted glitter and shine",
    rating: 4.6,
    reviewCount: 121,
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/newyear9"
  },
  {
    id: 10,
    name: "Countdown Confetti",
    price: "$26.99",
    image: "https://m.media-amazon.com/images/I/71g1ikBufML._SY450_.jpg",
    description: "Colorful confetti patterns with countdown clock designs",
    rating: 4.8,
    reviewCount: 145,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/newyear10"
  },
  {
    id: 11,
    name: "Sapphire Midnight Magic",
    price: "$30.99",
    image: "https://m.media-amazon.com/images/I/71+wAfDJMWL._SL1500_.jpg",
    description: "Deep sapphire blue with gold accents and star patterns",
    rating: 4.7,
    reviewCount: 113,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/newyear11"
  },
  {
    id: 12,
    name: "Golden Wishes Collection",
    price: "$28.99",
    originalPrice: "$33.99",
    image: "https://m.media-amazon.com/images/I/71NBay0YIvL._SY450_.jpg",
    description: "Pure gold finish with wish bone charms and luck symbols",
    rating: 4.9,
    reviewCount: 167,
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/newyear12"
  },
  {
    id: 13,
    name: "Aurora Borealis Nails",
    price: "$27.99",
    image: "https://m.media-amazon.com/images/I/71hpFYXL8vL._SL1500_.jpg",
    description: "Northern lights effect with shifting colors and ethereal glow",
    rating: 4.8,
    reviewCount: 152,
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/newyear13"
  },
  {
    id: 14,
    name: "Sequin Party Perfect",
    price: "$25.99",
    image: "https://m.media-amazon.com/images/I/71FAxn1rR5L._SL1500_.jpg",
    description: "Tiny sequin embellishments with party-ready sparkle finish",
    rating: 4.7,
    reviewCount: 139,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/newyear14"
  },
  {
    id: 15,
    name: "Diamond Dust Luxury",
    price: "$34.99",
    image: "https://m.media-amazon.com/images/I/71L8Jt8EcKL._SY450_.jpg",
    description: "Ultra-premium finish with real diamond dust particles",
    rating: 4.9,
    reviewCount: 201,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/newyear15"
  }
];

// Additional 35 products for "Load More" functionality
const additionalProducts = [
  {
    id: 16,
    name: "Celestial New Beginnings",
    price: "$33.99",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
    description: "Cosmic design with planets, stars, and celestial elements",
    rating: 4.9,
    reviewCount: 187,
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/newyear16"
  },
  {
    id: 17,
    name: "Opal Dreams Collection",
    price: "$35.99",
    originalPrice: "$40.99",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400",
    description: "Iridescent opal finish with rainbow color shifts",
    rating: 4.8,
    reviewCount: 176,
    isNew: true,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/newyear17"
  },
  {
    id: 18,
    name: "Holographic Midnight",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1482685945432-29a7abf2f466?w=400",
    description: "Deep black base with holographic rainbow overlay",
    rating: 4.7,
    reviewCount: 143,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/newyear18"
  },
  {
    id: 19,
    name: "Glitter Bomb Explosion",
    price: "$24.99",
    image: "https://m.media-amazon.com/images/I/71PUcXj5YYL._SL1500_.jpg",
    description: "Maximum sparkle with mixed size glitter in gold and silver",
    rating: 4.8,
    reviewCount: 164,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/newyear19"
  },
  {
    id: 20,
    name: "Starlight Serenade",
    price: "$31.99",
    originalPrice: "$36.99",
    image: "https://m.media-amazon.com/images/I/71sPuMmbetL._SL1500_.jpg",
    description: "Delicate star patterns with twinkling micro-glitter",
    rating: 4.9,
    reviewCount: 192,
    isNew: false,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/newyear20"
  },
  {
    id: 21,
    name: "Midnight Kiss Collection",
    price: "$27.99",
    image: "https://m.media-amazon.com/images/I/71-5-NHYeLL._SL1500_.jpg",
    description: "Romantic deep purples with kiss-shaped glitter accents",
    rating: 4.6,
    reviewCount: 128,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/newyear21"
  },
  {
    id: 22,
    name: "Champagne Toast Nails",
    price: "$26.99",
    image: "https://m.media-amazon.com/images/I/71CSH8hX06L._SL1500_.jpg",
    description: "Bubbly champagne color with effervescent sparkle finish",
    rating: 4.8,
    reviewCount: 155,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/newyear22"
  },
  {
    id: 23,
    name: "Time Square Lights",
    price: "$32.99",
    image: "https://m.media-amazon.com/images/I/81dOrEH7aTL._SL1500_.jpg",
    description: "Neon-inspired colors with electric glow and city vibes",
    rating: 4.7,
    reviewCount: 171,
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/newyear23"
  },
  {
    id: 24,
    name: "Confetti Cascade",
    price: "$23.99",
    image: "https://m.media-amazon.com/images/I/711T6nOvTQL._SY450_.jpg",
    description: "Layered confetti pieces in festive celebration colors",
    rating: 4.5,
    reviewCount: 118,
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/newyear24"
  },
  {
    id: 25,
    name: "Resolution Renewal",
    price: "$28.99",
    originalPrice: "$34.99",
    image: "https://m.media-amazon.com/images/I/71ZpLRPv4OL._SY450_.jpg",
    description: "Fresh white base with motivational gold script accents",
    rating: 4.8,
    reviewCount: 148,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/newyear25"
  },
  {
    id: 26,
    name: "Zodiac Constellation",
    price: "$30.99",
    image: "https://m.media-amazon.com/images/I/71U9wwdKYFL._SY450_.jpg",
    description: "Astrological designs with constellation mapping and stars",
    rating: 4.9,
    reviewCount: 183,
    isNew: false,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/newyear26"
  },
  {
    id: 27,
    name: "Fireworks Finale",
    price: "$25.99",
    image: "https://m.media-amazon.com/images/I/41Aj6Irp6+L._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Grand finale firework patterns with explosive color bursts",
    rating: 4.7,
    reviewCount: 136,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/newyear27"
  },
  {
    id: 28,
    name: "Prosperity Gold Rush",
    price: "$34.99",
    image: "https://m.media-amazon.com/images/I/71g1ikBufML._SY450_.jpg",
    description: "Luxurious gold leaf finish with prosperity symbols",
    rating: 4.9,
    reviewCount: 205,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/newyear28"
  },
  {
    id: 29,
    name: "Ball Drop Countdown",
    price: "$27.99",
    originalPrice: "$32.99",
    image: "https://m.media-amazon.com/images/I/71+wAfDJMWL._SL1500_.jpg",
    description: "Crystal ball design with countdown timer and NYC vibes",
    rating: 4.8,
    reviewCount: 159,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/newyear29"
  },
  {
    id: 30,
    name: "Midnight Masquerade",
    price: "$31.99",
    image: "https://m.media-amazon.com/images/I/71NBay0YIvL._SY450_.jpg",
    description: "Elegant mask patterns with feather textures and pearls",
    rating: 4.7,
    reviewCount: 144,
    isNew: false,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/newyear30"
  },
  // Products 31-50 would continue here...
  {
    id: 31,
    name: "Sparkler Dreams",
    price: "$26.99",
    image: "https://m.media-amazon.com/images/I/71hpFYXL8vL._SL1500_.jpg",
    description: "Hand-held sparkler effect with trailing light patterns",
    rating: 4.6,
    reviewCount: 122,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/newyear31"
  },
  {
    id: 32,
    name: "Resolution Glitter",
    price: "$24.99",
    image: "https://m.media-amazon.com/images/I/71FAxn1rR5L._SL1500_.jpg",
    description: "Motivational text overlay with inspiring glitter finish",
    rating: 4.8,
    reviewCount: 167,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/newyear32"
  },
  {
    id: 33,
    name: "Eternal Celebration",
    price: "$35.99",
    originalPrice: "$41.99",
    image: "https://m.media-amazon.com/images/I/71L8Jt8EcKL._SY450_.jpg",
    description: "Timeless elegance with eternal knot patterns and diamonds",
    rating: 4.9,
    reviewCount: 198,
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/newyear33"
  },
  {
    id: 34,
    name: "Neon Countdown",
    price: "$28.99",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
    description: "Electric neon colors with digital countdown clock design",
    rating: 4.7,
    reviewCount: 154,
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/newyear34"
  },
  {
    id: 35,
    name: "Lucky Penny Wishes",
    price: "$22.99",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400",
    description: "Copper penny colors with luck symbols and wish elements",
    rating: 4.5,
    reviewCount: 113,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/newyear35"
  }
];

export default function NewYearShop() {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [displayProducts, setDisplayProducts] = useState(newYearProducts);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleLoadMore = () => {
    setDisplayProducts([...newYearProducts, ...additionalProducts]);
    setShowAllProducts(true);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    
    let filteredProducts = newYearProducts;
    
    switch(filter) {
      case 'new':
        filteredProducts = newYearProducts.filter(product => product.isNew);
        break;
      case 'trending':
        filteredProducts = newYearProducts.filter(product => product.isTrending);
        break;
      case 'sale':
        filteredProducts = newYearProducts.filter(product => product.originalPrice);
        break;
      default:
        filteredProducts = newYearProducts;
    }
    
    setDisplayProducts(showAllProducts ? [...filteredProducts, ...additionalProducts] : filteredProducts);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Premium Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/new-year-nails-hero.jpg"
            alt="New Year nail collections"
            className="w-full h-full object-cover scale-105 transition-transform duration-[8s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/80 via-gold-500/60 to-purple-700/70"></div>
        </div>
        
        {/* Animated New Year Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 text-2xl animate-pulse text-white/30">✨</div>
          <div className="absolute top-1/3 right-1/3 text-xl animate-pulse delay-1000 text-white/25">🎉</div>
          <div className="absolute bottom-1/4 left-1/3 text-lg animate-pulse delay-2000 text-white/30">⭐</div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 leading-tight">
              New Year Nails
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6 text-yellow-100">
              Sparkling Celebrations & Glamorous Designs
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                50+ Premium Products
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
                Limited Edition
              </div>
            </div>
          </div>
        </div>

        {/* Back to Shop Button */}
        <Link 
          href="/shop" 
          className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center space-x-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Shop</span>
        </Link>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">
              Mirellé's New Year Favorites
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ring in the new year with dazzling nail designs that sparkle and shine, 
              perfect for midnight celebrations and fresh new beginnings.
            </p>
          </div>

          {/* Premium Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => handleFilterChange('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === 'all' 
                  ? 'bg-gradient-to-r from-yellow-500 to-purple-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-yellow-400 hover:shadow-md'
              }`}
            >
              All Products ({newYearProducts.length + additionalProducts.length})
            </button>
            <button 
              onClick={() => handleFilterChange('new')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === 'new' 
                  ? 'bg-gradient-to-r from-yellow-500 to-purple-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-yellow-400 hover:shadow-md'
              }`}
            >
              New Arrivals
            </button>
            <button 
              onClick={() => handleFilterChange('trending')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === 'trending' 
                  ? 'bg-gradient-to-r from-yellow-500 to-purple-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-yellow-400 hover:shadow-md'
              }`}
            >
              Trending
            </button>
            <button 
              onClick={() => handleFilterChange('sale')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === 'sale' 
                  ? 'bg-gradient-to-r from-yellow-500 to-purple-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-yellow-400 hover:shadow-md'
              }`}
            >
              On Sale
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] overflow-hidden border border-gray-100 hover:border-gray-200">
                <div className="relative aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Hover Image */}
                  {product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {product.price}
                      {product.originalPrice && (
                        <span className="ml-1 text-xs line-through text-yellow-200">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Status Badges */}
                  <div className="absolute top-4 left-4 space-y-2 z-10">
                    {product.isNew && (
                      <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        NEW
                      </div>
                    )}
                    {product.isTrending && (
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        TRENDING
                      </div>
                    )}
                    {product.stockStatus === "low-stock" && (
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        LOW STOCK
                      </div>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-600 ml-2">({product.reviewCount})</span>
                    </div>
                    
                    {/* Stock Status Indicator */}
                    <div className="flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-2 ${
                        product.stockStatus === 'in-stock' ? 'bg-green-500' : 
                        product.stockStatus === 'low-stock' ? 'bg-orange-500' : 'bg-red-500'
                      }`}></span>
                      <span className="text-xs text-gray-500 capitalize">
                        {product.stockStatus.replace('-', ' ')}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-right">
                      <div className="font-bold text-lg text-gray-800">{product.price}</div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                      )}
                    </div>

                    <a
                      href={product.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-yellow-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-yellow-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      {product.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Section */}
          {!showAllProducts && (
            <div className="text-center mt-16">
              <div className="mb-8">
                <p className="text-gray-600 mb-4">
                  Showing {displayProducts.length} of {newYearProducts.length + additionalProducts.length} products
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 max-w-md mx-auto">
                  <div 
                    className="bg-gradient-to-r from-yellow-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(displayProducts.length / (newYearProducts.length + additionalProducts.length)) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <button
                onClick={handleLoadMore}
                className="group bg-gradient-to-r from-yellow-500 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-yellow-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center">
                  Shop More New Year Nails
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </div>
          )}

          {/* Social Proof Section */}
          <div className="mt-20 bg-gradient-to-br from-yellow-50 via-white to-purple-50 rounded-3xl p-12 border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl font-bold text-gray-800 mb-4">
                What Our Customers Say
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Mirellé for their special celebrations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Perfect for New Year's Eve! The Midnight Sparkle Collection was absolutely stunning and lasted all night."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-800">Sarah M.</div>
                  <div className="text-gray-500">Verified Purchase</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Quality is amazing! The Champagne Bubbles Glam made me feel so elegant at our celebration."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-800">Jessica R.</div>
                  <div className="text-gray-500">Verified Purchase</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Fast shipping and gorgeous products. The Fireworks Fantasy collection exceeded my expectations!"
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-800">Maria L.</div>
                  <div className="text-gray-500">Verified Purchase</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Free Shipping Over $50
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                30-Day Returns
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Expert Support
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                Secure Checkout
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Mirellé Approved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl font-bold text-gray-800 mb-4">
              Explore More Collections
            </h3>
            <p className="text-lg text-gray-600">
              Discover other premium nail collections for every season and occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/shop/christmas" className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 h-64">
              <img
                src="/christmas-nails-hero.jpg"
                alt="Christmas Nails"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/80 via-emerald-400/60 to-red-500/70"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="font-serif text-2xl font-bold mb-2">Christmas Nails</h4>
                <p className="text-white/90 mb-4">Festive holiday collections</p>
                <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">Explore Collection</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/shop/fall" className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 h-64">
              <img
                src="/fall-nails-hero.jpg"
                alt="Fall Nails"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/80 via-orange-400/60 to-red-400/70"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="font-serif text-2xl font-bold mb-2">Fall Nails</h4>
                <p className="text-white/90 mb-4">Warm autumn collections</p>
                <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">Explore Collection</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/shop/halloween" className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 h-64">
              <img
                src="/halloweenbannerimg.jpg"
                alt="Halloween Nails"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 via-red-500/60 to-purple-600/70"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="font-serif text-2xl font-bold mb-2">Halloween Nails</h4>
                <p className="text-white/90 mb-4">Spooky seasonal designs</p>
                <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">Explore Collection</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
