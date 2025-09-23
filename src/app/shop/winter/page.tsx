'use client';
import Link from 'next/link';
import { useState } from 'react';

// Product Interface
interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  hoverImage?: string;
  description: string;
  reviewCount: number;
  isNew: boolean;
  isTrending: boolean;
  stockStatus: "in-stock" | "low-stock" | "out-of-stock";
  cta: string;
  affiliateUrl: string;
}

// Testimonial Interface
interface Testimonial {
  name: string;
  review: string;
  verified: boolean;
}

// Winter-themed products data (50 total)
const allProducts: Product[] = [
  // Initial 15 products
  {
    id: 1,
    name: "Frosted Glacier Collection",
    price: "$24.99",
    originalPrice: "$39.99",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    hoverImage: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400",
    description: "Icy blue base with crystal shimmer and snowflake accents",
    reviewCount: 187,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-frosted-glacier"
  },
  {
    id: 2,
    name: "Midnight Snow Storm",
    price: "$27.99",
    originalPrice: "$42.99",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400",
    description: "Deep navy with silver glitter and holographic finish",
    reviewCount: 234,
    isNew: false,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-midnight-storm"
  },
  {
    id: 3,
    name: "Arctic Crystal Dreams",
    price: "$22.99",
    originalPrice: "$35.99",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400",
    description: "Clear base with iridescent crystals and winter sparkle",
    reviewCount: 156,
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-arctic-crystal"
  },
  {
    id: 4,
    name: "Snowy Pine Forest",
    price: "$26.99",
    originalPrice: "$41.99",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400",
    description: "Forest green with white tips and gold leaf details",
    reviewCount: 198,
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-snowy-pine"
  },
  {
    id: 5,
    name: "Blizzard Elegance",
    price: "$29.99",
    originalPrice: "$44.99",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=400",
    description: "White chrome finish with silver accents and pearl details",
    reviewCount: 167,
    isNew: true,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-blizzard-elegance"
  },
  {
    id: 6,
    name: "Frozen Lavender Dreams",
    price: "$25.99",
    originalPrice: "$38.99",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    description: "Soft lavender with ice crystal patterns and matte finish",
    reviewCount: 143,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-frozen-lavender"
  },
  {
    id: 7,
    name: "Winter Berry Frost",
    price: "$23.99",
    originalPrice: "$37.99",
    image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400",
    description: "Deep burgundy with frosted tips and gold shimmer",
    reviewCount: 211,
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-winter-berry"
  },
  {
    id: 8,
    name: "Icicle Magic",
    price: "$28.99",
    originalPrice: "$43.99",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400",
    description: "Translucent blue with hanging crystal drops effect",
    reviewCount: 189,
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-icicle-magic"
  },
  {
    id: 9,
    name: "Polar Star Collection",
    price: "$31.99",
    originalPrice: "$47.99",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400",
    description: "Black base with silver stars and holographic accents",
    reviewCount: 176,
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-polar-star"
  },
  {
    id: 10,
    name: "Snowflake Symphony",
    price: "$26.99",
    originalPrice: "$40.99",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=400",
    description: "Pearl white with delicate snowflake nail art designs",
    reviewCount: 203,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-snowflake-symphony"
  },
  {
    id: 11,
    name: "Frostbite Glam",
    price: "$24.99",
    originalPrice: "$36.99",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    description: "Icy pink with white gradient and crystal embellishments",
    reviewCount: 158,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-frostbite-glam"
  },
  {
    id: 12,
    name: "Winter Moon Glow",
    price: "$27.99",
    originalPrice: "$41.99",
    image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400",
    description: "Silver chrome with blue undertones and lunar sparkle",
    reviewCount: 192,
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-winter-moon"
  },
  {
    id: 13,
    name: "Alpine Adventure",
    price: "$25.99",
    originalPrice: "$39.99",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400",
    description: "Mountain-inspired design with snow caps and evergreen tips",
    reviewCount: 174,
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-alpine-adventure"
  },
  {
    id: 14,
    name: "Crystal Cave Collection",
    price: "$30.99",
    originalPrice: "$45.99",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400",
    description: "Deep purple with crystal formations and gem accents",
    reviewCount: 165,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-crystal-cave"
  },
  {
    id: 15,
    name: "Frozen Fire",
    price: "$28.99",
    originalPrice: "$42.99",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=400",
    description: "Orange-red gradient with ice crystal overlay effect",
    reviewCount: 147,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-frozen-fire"
  },
  // Additional 35 products (16-50)
  {
    id: 16,
    name: "Snowdrift Elegance",
    price: "$26.99",
    originalPrice: "$40.99",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    description: "Soft gray with white swirls and silver accents",
    reviewCount: 139,
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-snowdrift"
  },
  {
    id: 17,
    name: "Aurora Borealis",
    price: "$32.99",
    originalPrice: "$48.99",
    image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400",
    description: "Multi-colored shimmer mimicking northern lights display",
    reviewCount: 221,
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-aurora"
  },
  {
    id: 18,
    name: "Ice Palace Royal",
    price: "$29.99",
    originalPrice: "$44.99",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400",
    description: "Regal blue with silver crown designs and jewel accents",
    reviewCount: 183,
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-ice-palace"
  },
  {
    id: 19,
    name: "Cabin Fever Chic",
    price: "$24.99",
    originalPrice: "$37.99",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400",
    description: "Warm brown with plaid patterns and cozy texture",
    reviewCount: 156,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-cabin-fever"
  },
  {
    id: 20,
    name: "Glacier Mint Fresh",
    price: "$23.99",
    originalPrice: "$35.99",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=400",
    description: "Cool mint green with icy texture and fresh finish",
    reviewCount: 167,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-glacier-mint"
  },
  {
    id: 21,
    name: "Velvet Winter Night",
    price: "$27.99",
    originalPrice: "$41.99",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    description: "Deep plum velvet finish with gold star accents",
    reviewCount: 194,
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-velvet-night"
  },
  {
    id: 22,
    name: "Frozen Rose Garden",
    price: "$25.99",
    originalPrice: "$38.99",
    image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400",
    description: "Dusty rose with frost effect and dried flower details",
    reviewCount: 172,
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-frozen-rose"
  },
  {
    id: 23,
    name: "Icicle Drip Design",
    price: "$28.99",
    originalPrice: "$43.99",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400",
    description: "Clear tips with blue drip effect and crystal details",
    reviewCount: 148,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-icicle-drip"
  },
  {
    id: 24,
    name: "Winter Storm Warning",
    price: "$30.99",
    originalPrice: "$46.99",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400",
    description: "Stormy gray with lightning bolt designs and metallic finish",
    reviewCount: 186,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-storm-warning"
  },
  {
    id: 25,
    name: "Cozy Fireplace Glow",
    price: "$26.99",
    originalPrice: "$40.99",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=400",
    description: "Warm amber with flickering flame effect and gold flakes",
    reviewCount: 159,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-fireplace-glow"
  },
  {
    id: 26,
    name: "Midnight Blizzard",
    price: "$24.99",
    originalPrice: "$36.99",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    description: "Black base with white snowflake stamps and silver glitter",
    reviewCount: 203,
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-midnight-blizzard"
  },
  {
    id: 27,
    name: "Arctic Fox Luxury",
    price: "$33.99",
    originalPrice: "$49.99",
    image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400",
    description: "White chrome with fox fur texture and premium finish",
    reviewCount: 178,
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-arctic-fox"
  },
  {
    id: 28,
    name: "Frozen Waterfall",
    price: "$27.99",
    originalPrice: "$42.99",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400",
    description: "Blue gradient with cascading crystal effect design",
    reviewCount: 164,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-frozen-waterfall"
  },
  {
    id: 29,
    name: "Hot Cocoa Dreams",
    price: "$25.99",
    originalPrice: "$38.99",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400",
    description: "Rich brown with marshmallow tips and cream swirls",
    reviewCount: 191,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-hot-cocoa"
  },
  {
    id: 30,
    name: "Diamond Dust Collection",
    price: "$31.99",
    originalPrice: "$47.99",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=400",
    description: "Clear base with fine diamond dust particles and sparkle",
    reviewCount: 142,
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-diamond-dust"
  },
  {
    id: 31,
    name: "Winter Wonderland Scene",
    price: "$29.99",
    originalPrice: "$44.99",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    description: "Scenic nail art with snow-covered trees and village",
    reviewCount: 175,
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-wonderland-scene"
  },
  {
    id: 32,
    name: "Frost Kissed Petals",
    price: "$26.99",
    originalPrice: "$40.99",
    image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400",
    description: "Soft pink with frosted petal designs and pearl accents",
    reviewCount: 153,
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-frost-petals"
  },
  {
    id: 33,
    name: "Glacier Blue Depths",
    price: "$28.99",
    originalPrice: "$43.99",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400",
    description: "Deep ocean blue with ice formations and crystal depths",
    reviewCount: 168,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-glacier-depths"
  },
  {
    id: 34,
    name: "Snowy Owl Elegance",
    price: "$24.99",
    originalPrice: "$37.99",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400",
    description: "White and brown feather patterns with gold eye accents",
    reviewCount: 187,
    isNew: false,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-snowy-owl"
  },
  {
    id: 35,
    name: "Frozen Lightning",
    price: "$32.99",
    originalPrice: "$48.99",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=400",
    description: "Electric blue with silver lightning bolts and storm energy",
    reviewCount: 196,
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-frozen-lightning"
  },
  {
    id: 36,
    name: "Winter Solstice Magic",
    price: "$27.99",
    originalPrice: "$41.99",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    description: "Deep purple with gold sun designs and celestial sparkle",
    reviewCount: 161,
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-solstice-magic"
  },
  {
    id: 37,
    name: "Ice Castle Dreams",
    price: "$30.99",
    originalPrice: "$45.99",
    image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400",
    description: "Architectural nail art with crystal palace designs",
    reviewCount: 174,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-ice-castle"
  },
  {
    id: 38,
    name: "Powder Snow Fresh",
    price: "$23.99",
    originalPrice: "$35.99",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400",
    description: "Matte white with textured powder finish and subtle shimmer",
    reviewCount: 149,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-powder-snow"
  },
  {
    id: 39,
    name: "Frosted Berry Crush",
    price: "$25.99",
    originalPrice: "$39.99",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400",
    description: "Deep berry with frost overlay and crystal embellishments",
    reviewCount: 182,
    isNew: true,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-berry-crush"
  },
  {
    id: 40,
    name: "Winter Moon Phases",
    price: "$28.99",
    originalPrice: "$42.99",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=400",
    description: "Black base with silver moon phase progression design",
    reviewCount: 166,
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-moon-phases"
  },
  {
    id: 41,
    name: "Crystal Cavern Explorer",
    price: "$31.99",
    originalPrice: "$47.99",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    description: "Deep teal with crystal formations and gemstone accents",
    reviewCount: 157,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-crystal-cavern"
  },
  {
    id: 42,
    name: "Frozen Ocean Waves",
    price: "$26.99",
    originalPrice: "$40.99",
    image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400",
    description: "Blue-green waves with white foam and ice crystal tips",
    reviewCount: 193,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-frozen-waves"
  },
  {
    id: 43,
    name: "Starlit Snowfall",
    price: "$29.99",
    originalPrice: "$44.99",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400",
    description: "Dark navy with falling snow and twinkling star details",
    reviewCount: 171,
    isNew: true,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-starlit-snowfall"
  },
  {
    id: 44,
    name: "Cozy Cable Knit",
    price: "$24.99",
    originalPrice: "$36.99",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400",
    description: "Textured beige with cable knit pattern and matte finish",
    reviewCount: 145,
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-cable-knit"
  },
  {
    id: 45,
    name: "Glacier Mint Julep",
    price: "$27.99",
    originalPrice: "$41.99",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=400",
    description: "Refreshing mint with gold leaf and crystal ice cubes",
    reviewCount: 188,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-mint-julep"
  },
  {
    id: 46,
    name: "Winter Phoenix Fire",
    price: "$33.99",
    originalPrice: "$49.99",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
    description: "Orange-red flames with ice blue tips and mythical sparkle",
    reviewCount: 179,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-phoenix-fire"
  },
  {
    id: 47,
    name: "Ice Princess Crown",
    price: "$30.99",
    originalPrice: "$45.99",
    image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400",
    description: "Royal blue with crown designs and jeweled accents",
    reviewCount: 162,
    isNew: true,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-princess-crown"
  },
  {
    id: 48,
    name: "Frozen Time Capsule",
    price: "$26.99",
    originalPrice: "$39.99",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400",
    description: "Clear with suspended winter elements and vintage charm",
    reviewCount: 154,
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amazon.com/winter-nails-time-capsule"
  },
  {
    id: 49,
    name: "Alpine Snow Peak",
    price: "$28.99",
    originalPrice: "$43.99",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=400",
    description: "Mountain peak design with snow caps and evergreen details",
    reviewCount: 195,
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amazon.com/winter-nails-alpine-peak"
  },
  {
    id: 50,
    name: "Midnight Aurora",
    price: "$32.99",
    originalPrice: "$48.99",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=400",
    description: "Dark base with dancing northern lights and cosmic shimmer",
    reviewCount: 207,
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amazon.com/winter-nails-midnight-aurora"
  }
];

// Testimonials data
const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    review: "The Frosted Glacier Collection is absolutely stunning! The quality exceeded my expectations and lasted weeks.",
    verified: true
  },
  {
    name: "Emma L.",
    review: "Perfect winter vibes! The Arctic Crystal Dreams set got so many compliments at holiday parties.",
    verified: true
  },
  {
    name: "Jessica R.",
    review: "Amazing customer service and beautiful packaging. The Winter Wonder designs are so unique and elegant.",
    verified: true
  }
];

// Related categories data
const relatedCategories = [
  {
    name: "Fall",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    link: "/shop/fall",
    description: "Autumn-inspired nail designs"
  },
  {
    name: "Trendy", 
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500",
    link: "/shop/trendy",
    description: "Latest trending nail styles"
  },
  {
    name: "Christmas",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=500", 
    link: "/shop/christmas",
    description: "Festive holiday nail collections"
  }
];

const WinterNailsCategory = () => {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(allProducts.slice(0, 15));
  const [currentFilter, setCurrentFilter] = useState<string>("All Products");
  const [showLoadMore, setShowLoadMore] = useState<boolean>(true);
  const [showAffiliateButton, setShowAffiliateButton] = useState<boolean>(false);

  // Calculate discount percentage
  const calculateDiscount = (original: string, discounted: string): number => {
    const originalPrice = parseFloat(original.slice(1));
    const discountedPrice = parseFloat(discounted.slice(1));
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  };

  // Filter products based on selected filter
  const filterProducts = (filter: string): void => {
    let filtered: Product[] = [];
    
    switch(filter) {
      case "New Arrivals":
        filtered = allProducts.filter(product => product.isNew);
        break;
      case "Trending":
        filtered = allProducts.filter(product => product.isTrending);
        break;
      case "On Sale":
        filtered = allProducts; // All products are on sale with original prices
        break;
      default:
        filtered = allProducts;
    }
    
    setCurrentFilter(filter);
    setDisplayedProducts(filtered.slice(0, 15));
    setShowLoadMore(filtered.length > 15);
    setShowAffiliateButton(false);
  };

  // Load more products
  const loadMoreProducts = (): void => {
    if (displayedProducts.length < allProducts.length) {
      setDisplayedProducts(allProducts);
      setShowLoadMore(false);
      setShowAffiliateButton(true);
    }
  };

  // Get stock status color
  const getStockColor = (status: string): string => {
    switch(status) {
      case "in-stock": return "bg-green-500";
      case "low-stock": return "bg-yellow-500";
      case "out-of-stock": return "bg-red-500";
      default: return "bg-green-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-70" />
        
        {/* Floating winter elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 animate-bounce">
            <div className="w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
          </div>
          <div className="absolute top-32 right-32 animate-pulse">
            <div className="w-12 h-12 bg-blue-300/30 rounded-full blur-sm"></div>
          </div>
          <div className="absolute bottom-40 left-1/4 animate-bounce" style={{ animationDelay: '1s' }}>
            <div className="w-10 h-10 bg-purple-300/30 rounded-full blur-sm"></div>
          </div>
          <div className="absolute top-16 right-16 animate-pulse" style={{ animationDelay: '2s' }}>
            <div className="w-6 h-6 bg-indigo-300/30 rounded-full blur-sm"></div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white backdrop-blur-sm bg-white/10 p-8 rounded-3xl border border-white/20">
            <Link 
              href="/shop"
              className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              ← Back to Shop
            </Link>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Winter Nails
            </h1>
            <p className="text-xl mb-6 text-blue-100">
              Embrace the magic of winter with our crystalline collection of icy elegance and cozy sophistication
            </p>
            <div className="flex items-center justify-center bg-white/20 px-6 py-2 rounded-full text-white text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              50+ Winter Designs Available
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-4">
            {["All Products", "New Arrivals", "Trending", "On Sale"].map((filter) => (
              <button
                key={filter}
                onClick={() => filterProducts(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 min-w-[120px] ${
                  currentFilter === filter
                    ? "bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">
            Mirelle's Winter Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Embrace the magic of winter with our crystalline collection of icy elegance and cozy sophistication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {displayedProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-gray-200">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.hoverImage && (
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} alternate`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                )}
                
                {/* Status badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                  {product.isTrending && (
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      TRENDING
                    </span>
                  )}
                  {product.stockStatus === "low-stock" && (
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      LOW STOCK
                    </span>
                  )}
                </div>

                {/* Stock status indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getStockColor(product.stockStatus)}`}></div>
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

                {/* Price display with strikethrough and discount */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 line-through text-sm">
                      {product.originalPrice}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price}
                    </span>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    SAVE {Math.round(((parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.originalPrice.slice(1))) * 100)}%

                  </span>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  {product.reviewCount} reviews
                </div>

                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-blue-700 hover:via-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center block"
                >
                  {product.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Affiliate Button */}
        <div className="text-center">
          {showLoadMore ? (
            <button
              onClick={loadMoreProducts}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:via-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Load More Winter Collections
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => window.open('https://example-affiliate-store.com/winter-nails', '_blank')}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:via-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              ❄️ Shop Complete Winter Collection
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {testimonial.verified && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                <p className="font-semibold text-gray-800">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Categories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Explore More Collections
          </h2>
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
                    <span className="text-sm">{category.description}</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterNailsCategory;
