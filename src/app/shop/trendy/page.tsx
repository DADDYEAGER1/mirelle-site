'use client';
import Link from 'next/link';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  hoverImage?: string;
  description: string;
  isNew: boolean;
  isTrending: boolean;
  stockStatus: "in-stock" | "low-stock" | "out-of-stock";
  cta: string;
  affiliateUrl: string;
}

const trendyProducts: Product[] = [
  // Initial 15 products
  {
    id: 1,
    name: "Holographic French Riviera",
    price: "$24.99",
    originalPrice: "$39.99",
    image: "https://m.media-amazon.com/images/I/611GPwYMy-L._SX679_.jpg",
    description: "Semi-transparent navy with holographic tips for ultimate sophistication",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/42s3MZ0"
  },
  {
    id: 2,
    name: "Iridescent Pink Cat Eye",
    price: "$27.99",
    originalPrice: "$42.99",
    image: "https://m.media-amazon.com/images/I/71X5aKMakpL._SL1500_.jpg",
    description: "Magnetic cat eye with pastel holographic shimmer that changes with light",
    isNew: false,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/46Hj6Du"
  },
  {
    id: 3,
    name: "Galaxy Purple Chrome",
    price: "$22.99",
    originalPrice: "$35.99",
    image: "https://m.media-amazon.com/images/I/71G26eMHFnL._SY450_.jpg",
    description: "Deep space purple with chrome finish and holographic French tips",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/41ZDIEy"
  },
  {
    id: 4,
    name: "Rose Gold Magnetic Effect",
    price: "$29.99",
    originalPrice: "$45.99",
    image: "https://m.media-amazon.com/images/I/71kWahC51nL._SY450_.jpg",
    description: "Luxurious rose gold with magnetic cat eye and glitter accents",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/47GuZe2"
  },
  {
    id: 5,
    name: "Matte Black Halloween Chic",
    price: "$25.99",
    originalPrice: "$38.99",
    image: "https://m.media-amazon.com/images/I/41IfNEh3mrL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Sophisticated matte black with subtle Halloween-inspired accents",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/41SJ8kD"
  },
  {
    id: 6,
    name: "Cloud White Minimalist",
    price: "$26.99",
    originalPrice: "$41.99",
    image: "https://m.media-amazon.com/images/I/616flXkXiVL._SX679_.jpg",
    description: "Clean white French tips with soft gel finish for effortless elegance",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/46vgoQr"
  },
  {
    id: 7,
    name: "Ruby Glitter Gradient",
    price: "$28.99",
    originalPrice: "$43.99",
    image: "https://m.media-amazon.com/images/I/81Dy58yGEfL._SX679_.jpg",
    description: "Bold red base with cascading glitter that catches every light",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/4nhvH6n"
  },
  {
    id: 8,
    name: "Cherry Jelly Dreams",
    price: "$23.99",
    originalPrice: "$36.99",
    image: "https://m.media-amazon.com/images/I/61xZBWKjDSL._SX679_.jpg",
    description: "Translucent cherry red with jelly finish for that fresh, modern look",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/4nasNjV"
  },
  {
    id: 9,
    name: "Crimson Ombre Chrome",
    price: "$31.99",
    originalPrice: "$47.99",
    image: "https://m.media-amazon.com/images/I/412W1CTlRgL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Deep red to black ombre with mirror chrome finish and UV cure",
    isNew: true,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/46iGY0p"
  },
  {
    id: 10,
    name: "Golden Hour Nude",
    price: "$24.99",
    originalPrice: "$37.99",
    image: "https://m.media-amazon.com/images/I/51ZvHra4gSL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Warm nude base with 3D gold line art and cloudy white tips",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/3K4Hw16"
  },
  {
    id: 11,
    name: "Trendy Nail Art Collection",
    price: "$19.99",
    originalPrice: "$32.99",
    image: "https://m.media-amazon.com/images/I/61LgGnIaL5L._SX679_.jpg",
    description: "Mix and match stickers for endless trendy combinations",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/3KrAMdC"
  },
  {
    id: 12,
    name: "Ocean Blue Florals",
    price: "$21.99",
    originalPrice: "$34.99",
    image: "https://m.media-amazon.com/images/I/61LgGnIaL5L._SX679_.jpg",
    description: "Deep ocean blue with delicate floral patterns and matte topcoat",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/3Vm51VU"
  },
  {
    id: 13,
    name: "Mystical Pentagram Mix",
    price: "$20.99",
    originalPrice: "$33.99",
    image: "https://m.media-amazon.com/images/I/71O69jvtK2L._SX679_.jpg",
    description: "Sparkling pentagram designs with mixed cat eye effects",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/3VlifSQ"
  },
  {
    id: 14,
    name: "Bubblegum Gradient Glam",
    price: "$23.99",
    originalPrice: "$36.99",
    image: "https://m.media-amazon.com/images/I/71sAX6WBV+L._SX679_.jpg",
    description: "Pink to white gradient with rhinestone accents and glossy finish",
    isNew: true,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/46n2Vdh"
  },
  {
    id: 15,
    name: "Elegance Gold French",
    price: "$27.99",
    originalPrice: "$42.99",
    image: "https://m.media-amazon.com/images/I/41rzn5oPvnL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Classic French with gold tips and thick gel finish for durability",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/4mdDjW5"
  },
  // Additional 35 products for load more
  {
    id: 16,
    name: "Neon Sunset Ombre",
    price: "$29.99",
    originalPrice: "$44.99",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    description: "Electric gradient from coral to hot pink with UV reactive finish",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://example.com/16"
  },
  {
    id: 17,
    name: "Metallic Mirror Chrome",
    price: "$32.99",
    originalPrice: "$49.99",
    image: "https://images.unsplash.com/photo-1583833500400-1ac2de7d7226?w=400",
    description: "Ultra-reflective chrome finish that creates perfect mirror effect",
    isNew: false,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Style Statement",
    affiliateUrl: "https://example.com/17"
  },
  {
    id: 18,
    name: "Velvet Matte Burgundy",
    price: "$26.99",
    originalPrice: "$39.99",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400",
    description: "Rich burgundy with velvet matte finish and gold foil accents",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://example.com/18"
  },
  {
    id: 19,
    name: "Crystal Clear Glamour",
    price: "$24.99",
    originalPrice: "$37.99",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400",
    description: "Clear base with embedded crystals and holographic top coat",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://example.com/19"
  },
  {
    id: 20,
    name: "Electric Blue Lightning",
    price: "$28.99",
    originalPrice: "$43.99",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
    description: "Neon blue base with lightning bolt designs and glow effect",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://example.com/20"
  },
  {
    id: 21,
    name: "Pastel Rainbow Dreams",
    price: "$25.99",
    originalPrice: "$38.99",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
    description: "Soft pastel rainbow gradient with cloud-like finish",
    isNew: true,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://example.com/21"
  },
  {
    id: 22,
    name: "Midnight Marble Magic",
    price: "$30.99",
    originalPrice: "$46.99",
    image: "https://images.unsplash.com/photo-1574273384019-ff66c65d7e8c?w=400",
    description: "Black marble effect with silver veining and glossy topcoat",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://example.com/22"
  },
  {
    id: 23,
    name: "Holographic Galaxy Swirl",
    price: "$33.99",
    originalPrice: "$49.99",
    image: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?w=400",
    description: "Deep space colors with holographic swirls and star accents",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://example.com/23"
  },
  {
    id: 24,
    name: "Coral Reef Texture",
    price: "$27.99",
    originalPrice: "$41.99",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400",
    description: "Textured coral finish with sea glass accents and shimmer",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://example.com/24"
  },
  {
    id: 25,
    name: "Emerald Green Goddess",
    price: "$26.99",
    originalPrice: "$39.99",
    image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6b?w=400",
    description: "Rich emerald with goddess-inspired gold leaf detailing",
    isNew: false,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://example.com/25"
  },
  {
    id: 26,
    name: "Champagne Bubble Effect",
    price: "$31.99",
    originalPrice: "$47.99",
    image: "https://images.unsplash.com/photo-1599305090598-b1923e3fdb8a?w=400",
    description: "Luxurious champagne with 3D bubble texture and pearl finish",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://example.com/26"
  },
  {
    id: 27,
    name: "Cosmic Purple Nebula",
    price: "$29.99",
    originalPrice: "$44.99",
    image: "https://images.unsplash.com/photo-1607348882870-75b6c2c5b5a6?w=400",
    description: "Deep purple nebula effect with glitter stars and cosmic dust",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://example.com/27"
  },
  {
    id: 28,
    name: "Rose Quartz Serenity",
    price: "$24.99",
    originalPrice: "$37.99",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba6fe65?w=400",
    description: "Soft pink quartz effect with healing crystal-inspired design",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://example.com/28"
  },
  {
    id: 29,
    name: "Electric Violet Storm",
    price: "$28.99",
    originalPrice: "$43.99",
    image: "https://images.unsplash.com/photo-1588282322673-c31965ee3c97?w=400",
    description: "Vibrant violet with electric storm patterns and lightning effects",
    isNew: false,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Style Statement",
    affiliateUrl: "https://example.com/29"
  },
  {
    id: 30,
    name: "Golden Hour Glow",
    price: "$25.99",
    originalPrice: "$38.99",
    image: "https://images.unsplash.com/photo-1566669813536-acfe09f1a5b5?w=400",
    description: "Warm golden gradient that mimics perfect sunset lighting",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://example.com/30"
  },
  {
    id: 31,
    name: "Ice Queen Frost",
    price: "$30.99",
    originalPrice: "$46.99",
    image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=400",
    description: "Icy blue with frosted texture and crystalline sparkle finish",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://example.com/31"
  },
  {
    id: 32,
    name: "Magenta Magnetic Pull",
    price: "$32.99",
    originalPrice: "$49.99",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
    description: "Bold magenta with magnetic cat eye that shifts with movement",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://example.com/32"
  },
  {
    id: 33,
    name: "Autumn Maple Gradient",
    price: "$26.99",
    originalPrice: "$39.99",
    image: "https://images.unsplash.com/photo-1607110139170-6af9c2c6ab87?w=400",
    description: "Warm autumn colors in maple leaf gradient with gold flakes",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://example.com/33"
  },
  {
    id: 34,
    name: "Ocean Depths Mystery",
    price: "$27.99",
    originalPrice: "$41.99",
    image: "https://images.unsplash.com/photo-1583833500400-1ac2de7d7226?w=400",
    description: "Deep ocean blue with mysterious depth effects and pearl shimmer",
    isNew: true,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://example.com/34"
  },
  {
    id: 35,
    name: "Silver Stardust Dreams",
    price: "$29.99",
    originalPrice: "$44.99",
    image: "https://images.unsplash.com/photo-1584302179602-e4b3d415347c?w=400",
    description: "Shimmering silver base with stardust glitter and cosmic finish",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://example.com/35"
  },
  {
    id: 36,
    name: "Peacock Feather Luxe",
    price: "$34.99",
    originalPrice: "$49.99",
    image: "https://images.unsplash.com/photo-1588282322673-c31965ee3c97?w=400",
    description: "Iridescent teal with peacock feather patterns and gold accents",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://example.com/36"
  },
  {
    id: 37,
    name: "Lavender Fields Forever",
    price: "$23.99",
    originalPrice: "$36.99",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400",
    description: "Soft lavender with field-inspired texture and matte finish",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://example.com/37"
  },
  {
    id: 38,
    name: "Fire Opal Intensity",
    price: "$31.99",
    originalPrice: "$47.99",
    image: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?w=400",
    description: "Fiery opal effect with intense color-shifting properties",
    isNew: true,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Style Statement",
    affiliateUrl: "https://example.com/38"
  },
  {
    id: 39,
    name: "Mint Chocolate Chip",
    price: "$25.99",
    originalPrice: "$38.99",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba6fe65?w=400",
    description: "Fresh mint base with chocolate brown chip accents",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://example.com/39"
  },
  {
    id: 40,
    name: "Sunset Boulevard Glam",
    price: "$28.99",
    originalPrice: "$43.99",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    description: "Hollywood glamour with sunset colors and golden hour sparkle",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://example.com/40"
  },
  {
    id: 41,
    name: "Tropical Storm Energy",
    price: "$30.99",
    originalPrice: "$46.99",
    image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6b?w=400",
    description: "Electric tropical colors with storm cloud effects and lightning",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://example.com/41"
  },
  {
    id: 42,
    name: "Cherry Blossom Spring",
    price: "$26.99",
    originalPrice: "$39.99",
    image: "https://images.unsplash.com/photo-1599305090598-b1923e3fdb8a?w=400",
    description: "Delicate pink with cherry blossom art and pearl finish",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://example.com/42"
  },
  {
    id: 43,
    name: "Cosmic Black Hole",
    price: "$33.99",
    originalPrice: "$49.99",
    image: "https://images.unsplash.com/photo-1574273384019-ff66c65d7e8c?w=400",
    description: "Deep space black with gravitational swirl effects and stars",
    isNew: true,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://example.com/43"
  },
  {
    id: 44,
    name: "Golden Goddess Aura",
    price: "$32.99",
    originalPrice: "$48.99",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
    description: "Radiant gold with goddess aura effects and divine shimmer",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://example.com/44"
  },
  {
    id: 45,
    name: "Crystalline Ice Cave",
    price: "$27.99",
    originalPrice: "$41.99",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
    description: "Translucent blue with crystalline formations and ice effects",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://example.com/45"
  },
  {
    id: 46,
    name: "Neon Cyber Punk",
    price: "$29.99",
    originalPrice: "$44.99",
    image: "https://images.unsplash.com/photo-1607348882870-75b6c2c5b5a6?w=400",
    description: "Futuristic neon colors with cyber punk grid patterns",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://example.com/46"
  },
  {
    id: 47,
    name: "Royal Amethyst Crown",
    price: "$31.99",
    originalPrice: "$47.99",
    image: "https://images.unsplash.com/photo-1588282322673-c31965ee3c97?w=400",
    description: "Deep amethyst purple with royal crown patterns and gems",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://example.com/47"
  },
  {
    id: 48,
    name: "Mermaid Scale Shimmer",
    price: "$28.99",
    originalPrice: "$43.99",
    image: "https://images.unsplash.com/photo-1566669813536-acfe09f1a5b5?w=400",
    description: "Iridescent scale pattern with ocean depths color shifting",
    isNew: true,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://example.com/48"
  },
  {
    id: 49,
    name: "Desert Sunset Mirage",
    price: "$25.99",
    originalPrice: "$38.99",
    image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=400",
    description: "Warm desert colors with mirage heat wave effects",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://example.com/49"
  },
  {
    id: 50,
    name: "Electric Rainbow Prism",
    price: "$34.99",
    originalPrice: "$49.99",
    image: "https://images.unsplash.com/photo-1584302179602-e4b3d415347c?w=400",
    description: "Prismatic rainbow with electric intensity and holographic finish",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://example.com/50"
  }
];

const testimonials = [
  {
    name: "Sarah M.",
    review: "The holographic effects are absolutely stunning! Better quality than salon nails.",
    rating: 5
  },
  {
    name: "Jessica L.",
    review: "Perfect for staying on-trend without breaking the bank. Love the variety!",
    rating: 5
  },
  {
    name: "Maria K.",
    review: "These trendy designs get me so many compliments. Quality is amazing!",
    rating: 5
  }
];

const relatedCategories = [
  {
    name: "Fall Collection",
    image: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?w=400",
    link: "/shop/fall"
  },
  {
    name: "Halloween Specials",
    image: "https://images.unsplash.com/photo-1574273384019-ff66c65d7e8c?w=400",
    link: "/shop/halloween"
  },
  {
    name: "Winter Wonderland",
    image: "https://images.unsplash.com/photo-1605798577917-a65157d3320a?w=400",
    link: "/shop/winter"
  }
];

export default function TrendyShop() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showAllProducts, setShowAllProducts] = useState<boolean>(false);
  const [productsToShow, setProductsToShow] = useState<number>(15);

  const filterProducts = (filter: string): Product[] => {
    switch (filter) {
      case 'new':
        return trendyProducts.filter(product => product.isNew);
      case 'trending':
        return trendyProducts.filter(product => product.isTrending);
      case 'sale':
        return trendyProducts; // All products have original + discounted prices
      default:
        return trendyProducts;
    }
  };

  const filteredProducts = filterProducts(activeFilter);
  const displayedProducts = filteredProducts.slice(0, productsToShow);

  const handleLoadMore = () => {
    if (productsToShow >= 50) {
      // Redirect to complete collection
      window.open('https://example-affiliate-store.com/trendy', '_blank');
    } else {
      setProductsToShow(50);
      setShowAllProducts(true);
    }
  };

  const getStockStatusColor = (status: string) => {
    switch (status) {
      case 'low-stock':
        return 'bg-yellow-500';
      case 'out-of-stock':
        return 'bg-red-500';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to Shop Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link 
          href="/shop"
          className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Shop
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/trendynailbanner.jpg"
            alt="Trendy nail products"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/60 via-purple-500/60 to-blue-500/60"></div>
        </div>
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 animate-bounce">
            <div className="w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
          </div>
          <div className="absolute top-32 right-32 animate-pulse">
            <div className="w-12 h-12 bg-pink-300/30 rounded-full blur-sm"></div>
          </div>
          <div className="absolute bottom-32 left-32 animate-bounce" style={{ animationDelay: '1s' }}>
            <div className="w-10 h-10 bg-purple-300/30 rounded-full blur-sm"></div>
          </div>
          <div className="absolute bottom-20 right-20 animate-pulse" style={{ animationDelay: '2s' }}>
            <div className="w-6 h-6 bg-blue-300/30 rounded-full blur-sm"></div>
          </div>
        </div>

        <div className="relative z-10 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl px-12 py-8 border border-white/20">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-white">
              Trendy Nails
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 mb-6">
              Latest Trends & Must-Have Nail Products
            </p>
            <div className="inline-flex items-center bg-white/20 px-6 py-2 rounded-full text-white text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              50+ Trending Designs Available
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { key: 'all', label: 'All Products' },
              { key: 'new', label: 'New Arrivals' },
              { key: 'trending', label: 'Trending' },
              { key: 'sale', label: 'On Sale' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => {
                  setActiveFilter(filter.key);
                  setProductsToShow(15);
                  setShowAllProducts(false);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 min-w-[120px] ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-pink-300 hover:text-pink-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">
              Mirelle's Trendy Favorites
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with these cutting-edge nail products that are 
              taking the beauty world by storm.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {displayedProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-gray-200">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Status Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        NEW
                      </span>
                    )}
                    {product.isTrending && (
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        TRENDING
                      </span>
                    )}
                    {product.stockStatus === 'low-stock' && (
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        LOW STOCK
                      </span>
                    )}
                  </div>

                  {/* Stock Status Indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getStockStatusColor(product.stockStatus)}`}></div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price Display */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gray-400 line-through text-sm">
                      {product.originalPrice}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      SAVE {Math.round(((parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                    </span>
                  </div>
                  
                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-6 rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center block"
                  >
                    {product.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Load More / Shop Complete Collection Button */}
          <div className="text-center">
            {productsToShow < 50 ? (
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Load More Trendy Products
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                🛍️ Shop Complete Trendy Collection
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Real reviews from verified purchases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Verified Purchase
                  </span>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                <p className="font-semibold text-gray-800">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">
              Explore More Collections
            </h2>
            <p className="text-lg text-gray-600">
              Discover nail art for every season and occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedCategories.map((category, index) => (
              <Link 
                key={index}
                href={category.link}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 aspect-[4/3]"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <div className="flex items-center text-white/90">
                    <span className="text-sm">Explore Collection</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
