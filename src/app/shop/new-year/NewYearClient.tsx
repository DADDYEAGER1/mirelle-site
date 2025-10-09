'use client';
import Link from 'next/link';
import { useState } from 'react';

const newYearProducts = [
  // All 36 products from Google Sheet
  {
    id: 1,
    name: "New Year Nails To Shine",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/41u-DhfQE3L._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Shine bright with trendy New Year nails.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/3Ki6fz6"
  },
  {
    id: 2,
    name: "Sparkling Nails For Celebration",
    price: "$6.83",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/71hOlKNWs3L._SY450_.jpg",
    description: "Celebrate moments with sparkling nail designs.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/46E1sj5"
  },
  {
    id: 3,
    name: "Chic Nails For New Year",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71NImJe1uVL._SY450_.jpg",
    description: "Chic nails perfect for your New Year look.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/4nNkeev"
  },
  {
    id: 4,
    name: "Trendy Nails For Party Nights",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/61Kmsy54exL._SY450_.jpg",
    description: "Trendy nails styled for festive parties.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/3W7BX4C"
  },
  {
    id: 5,
    name: "Stylish Nails For Countdown",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/717hWzQnkuL._SY450_.jpg",
    description: "Nails ready to shine for the countdown.",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/480MTIK"
  },
  {
    id: 6,
    name: "Elegant Nails For New Year",
    price: "$6.83",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/71669MZxgsL._SY450_.jpg",
    description: "Elegant nails to celebrate new beginnings.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/3IEQUrO"
  },
  {
    id: 7,
    name: "Festive Nails For Special Moments",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71-2wbBCGXL._SY450_.jpg",
    description: "Festive nail designs for your special moments.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/4no2s1Q"
  },
  {
    id: 8,
    name: "Nail Trends For New Year Eve",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71mZ3Rq7x1L._SY450_.jpg",
    description: "Fresh nail trends styled for New Year eve.",
    isNew: true,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/4nnW7Ub"
  },
  {
    id: 9,
    name: "Glitter Nails For New Year",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/61hzKX3tFRL._SY450_.jpg",
    description: "Glittery nails that sparkle with style.",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/42I0TU1"
  },
  {
    id: 10,
    name: "Fresh Nails For New Beginnings",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71Rr1Ua4EEL._SY450_.jpg",
    description: "Fresh nails styled for new beginnings.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/42DhV5K"
  },
  {
    id: 11,
    name: "Modern Nails For New Year Party",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71FASr5wjzL._SY450_.jpg",
    description: "Modern nails ready for party vibes.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/3Itrb5G"
  },
  {
    id: 12,
    name: "Celebrate With Sparkly Nail Designs",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71tUVR5v9xL._SY450_.jpg",
    description: "Celebrate the night with sparkling nails.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/4pFFzbI"
  },
  {
    id: 13,
    name: "New Year Glow For Your Nails",
    price: "$5.86",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/61FE547tfHL._SY450_.jpg",
    description: "Nails glowing with New Year fashion.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/3KlUzv6"
  },
  {
    id: 14,
    name: "Trendy Party Nails For You",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/41-uxUy3r2L._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Trendy party-ready nails styled for you.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/3Kk08dF"
  },
  {
    id: 15,
    name: "Nails That Sparkle In Style",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/612oSpgFsZL._SX679_.jpg",
    description: "Sparkling chic nails that shine bright.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/4pvGHyu"
  },
  {
    id: 16,
    name: "Classic Yet Festive Nail Ideas",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/61LQqJMjG9L._SX679_.jpg",
    description: "Classic yet festive looks for your nails.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/4gD0rw2"
  },
  {
    id: 17,
    name: "Nails To Match New Year Mood",
    price: "$5.36",
    originalPrice: "$8.99",
    image: "https://m.media-amazon.com/images/I/51bfFszAg3L._SY450_.jpg",
    description: "Nails styled to match New Year mood.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/46mXSuO"
  },
  {
    id: 18,
    name: "Creative Looks For Festive Nails",
    price: "$5.99",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/71uq456lbDL._SY450_.jpg",
    description: "Creative designs styled for festive nails.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/46vWTIR"
  },
  {
    id: 19,
    name: "Elegant New Year Nail Styles",
    price: "$8.54",
    originalPrice: "$13.99",
    image: "https://m.media-amazon.com/images/I/71ze-6tO1ZL._SX679_.jpg",
    description: "Elegant designs made for New Year style.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/480T9A2"
  },
  {
    id: 20,
    name: "Trendy Nails For Fresh Start",
    price: "$5.55",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/51xcnfuyqSL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Trendy nails styled for fresh beginnings.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/47Z6Yz5"
  },
  {
    id: 21,
    name: "Nails To Shine Through Night",
    price: "$5.55",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/71Ct2wmarVL._SX679_.jpg",
    description: "Celebrate night with nails that shine.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/46E1OGr"
  },
  {
    id: 22,
    name: "Festive Touch For New Year Nails",
    price: "$5.55",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/71-jslN7JTL._SX679_.jpg",
    description: "Festive designs perfect for party nails.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/46Po1m1"
  },
  {
    id: 23,
    name: "Bright Sparkly Nails For You",
    price: "$5.55",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/6127EXGLQvL._SX679_.jpg",
    description: "Bright sparkling nails styled for chic vibe.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/3W7CaVs"
  },
  {
    id: 24,
    name: "Stylish New Year Nail Designs",
    price: "$4.35",
    originalPrice: "$7.99",
    image: "https://m.media-amazon.com/images/I/61GBw7xcVSL._SX679_.jpg",
    description: "Stylish nails perfect for the big night.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/46GZDlv"
  },
  {
    id: 25,
    name: "Nail Art For Celebration Mood",
    price: "$5.55",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/71yZpU9Q+eL._SX679_.jpg",
    description: "Nail art styled to suit celebrations.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/46wFpuw"
  },
  {
    id: 26,
    name: "Fresh Festive Looks For Nails",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71rlFKkVYbL._SX679_.jpg",
    description: "Fresh chic designs for festive nails.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/4mA6yTl"
  },
  {
    id: 27,
    name: "Nails To Glow On New Year",
    price: "$4.85",
    originalPrice: "$8.99",
    image: "https://m.media-amazon.com/images/I/61UpHfTPBML._SX679_.jpg",
    description: "Glow with nails styled for New Year.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/3KksrIL"
  },
  {
    id: 28,
    name: "Trendy Party Looks For Nails",
    price: "$3.99",
    originalPrice: "$6.99",
    image: "https://m.media-amazon.com/images/I/51cQmqjxkbL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Trendy looks perfect for party-ready nails.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/3Vw9xBh"
  },
  {
    id: 29,
    name: "Creative Festive Nail Art Ideas",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/619+H66mcnL._SX679_.jpg",
    description: "Creative designs for chic festive nails.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/3KkRJXh"
  },
  {
    id: 30,
    name: "New Year Trends For Chic Nails",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/61whagXRZLL._SX679_.jpg",
    description: "New Year nail trends styled with flair.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/4pKmrJQ"
  },
  {
    id: 31,
    name: "Celebrate With Stylish Nail Art",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/61H8qsI8MAL._SX679_.jpg",
    description: "Celebrate fresh beginnings with stylish nails.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/4pG0jA8"
  },
  {
    id: 32,
    name: "Elegant Festive Nails To Try",
    price: "$8.16",
    originalPrice: "$13.99",
    image: "https://m.media-amazon.com/images/I/71mZAg7wHxL._SX679_.jpg",
    description: "Elegant festive nails styled for parties.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/4nM2DUr"
  },
  {
    id: 33,
    name: "Chic Sparkly Nails For Night",
    price: "$10.66",
    originalPrice: "$16.99",
    image: "https://m.media-amazon.com/images/I/61glum3iVPS._SX679_.jpg",
    description: "Chic sparkling nails for stylish nights.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/3KkoUug"
  },
  {
    id: 34,
    name: "Trendy Designs For Party Nails",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/61V0dpU7jhS._SX679_.jpg",
    description: "Trendy chic designs styled for your nails.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Sparkle Now",
    affiliateUrl: "https://amzn.to/4pFAnEE"
  },
  {
    id: 35,
    name: "Nails That Shine On Countdown",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/61roaEvAfEL._SX679_.jpg",
    description: "Countdown-ready nails that shine bright.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "New Year Glow",
    affiliateUrl: "https://amzn.to/4mx9P5G"
  },
  {
    id: 36,
    name: "Premium New Year Collection",
    price: "$9.99",
    originalPrice: "$15.99",
    image: "https://m.media-amazon.com/images/I/71PUcXj5YYL._SL1500_.jpg",
    description: "Premium collection for New Year celebrations.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ring It In",
    affiliateUrl: "https://amzn.to/newyear36"
  }
];

export default function NewYearShop() {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [displayProducts, setDisplayProducts] = useState(newYearProducts.slice(0, 15));
  const [activeFilter, setActiveFilter] = useState('all');

  const handleLoadMore = () => {
    setDisplayProducts(newYearProducts);
    setShowAllProducts(true);
  };

  const handleFilterChange = (filter: string) => {
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
    
    setDisplayProducts(showAllProducts ? filteredProducts : filteredProducts.slice(0, 15));
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
            <p className="text-sm text-yellow-200 mb-4 italic">
              Prices may vary with time - Shop now for best deals
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                36 Premium Products
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
              All Products ({newYearProducts.length})
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
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        SAVE {Math.round(((parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                      </div>
                    </div>
                  )}
                  
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
                  <div className="absolute bottom-4 left-4 space-y-2 z-10">
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
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
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
                  Showing {displayProducts.length} of {newYearProducts.length} products
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 max-w-md mx-auto">
                  <div 
                    className="bg-gradient-to-r from-yellow-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(displayProducts.length / newYearProducts.length) * 100}%` }}
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
                <p className="text-gray-700 mb-4 italic">
                  "Perfect for New Year's Eve! The New Year Nails To Shine was absolutely stunning and lasted all night."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-800">Sarah M.</div>
                  <div className="text-gray-500">Verified Purchase</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-gray-700 mb-4 italic">
                  "Quality is amazing! The Sparkling Nails For Celebration made me feel so elegant at our celebration."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-800">Jessica R.</div>
                  <div className="text-gray-500">Verified Purchase</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-gray-700 mb-4 italic">
                  "Fast shipping and gorgeous products. The Trendy Nails For Party Nights collection exceeded my expectations!"
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
