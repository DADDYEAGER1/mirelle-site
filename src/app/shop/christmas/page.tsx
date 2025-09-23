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
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isTrending: boolean;
  stockStatus: "in-stock" | "low-stock" | "out-of-stock";
  cta: string;
  affiliateUrl: string;
}

const ChristmasNailsCategory = () => {
  const [activeFilter, setActiveFilter] = useState('All Products');
  const [showAllProducts, setShowAllProducts] = useState(false);

  const initialProducts: Product[] = [
    {
      id: 1,
      name: "Festive Holly Glitter",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1607729853044-1b3d6b0fcbe8?w=400&h=600&fit=crop",
      description: "Deep forest green with sparkling holly leaf glitter",
      rating: 4.8,
      reviewCount: 189,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/festive-holly-glitter"
    },
    {
      id: 2,
      name: "Christmas Red Velvet",
      price: "$28.99",
      originalPrice: "$44.99",
      image: "https://images.unsplash.com/photo-1609304668842-d65f19e39b7c?w=400&h=600&fit=crop",
      description: "Rich crimson red with luxurious velvet finish",
      rating: 4.9,
      reviewCount: 234,
      isNew: false,
      isTrending: true,
      stockStatus: "low-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/christmas-red-velvet"
    },
    {
      id: 3,
      name: "Snowflake Chrome Magic",
      price: "$32.99",
      originalPrice: "$49.99",
      image: "https://images.unsplash.com/photo-1606473062459-1cf6e1b3cb27?w=400&h=600&fit=crop",
      description: "Icy chrome base with holographic snowflake shimmer",
      rating: 4.7,
      reviewCount: 156,
      isNew: true,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/snowflake-chrome-magic"
    },
    {
      id: 4,
      name: "Gold Christmas Star Dust",
      price: "$29.99",
      originalPrice: "$45.99",
      image: "https://images.unsplash.com/photo-1608001639896-8a3c17c7df78?w=400&h=600&fit=crop",
      description: "Brilliant gold with star-shaped micro glitter",
      rating: 4.8,
      reviewCount: 198,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/gold-christmas-star-dust"
    },
    {
      id: 5,
      name: "Peppermint Candy Stripe",
      price: "$25.99",
      originalPrice: "$39.99",
      image: "https://images.unsplash.com/photo-1610547978536-4c1c1e0bc3a2?w=400&h=600&fit=crop",
      description: "White base with red candy cane stripe design",
      rating: 4.6,
      reviewCount: 167,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/peppermint-candy-stripe"
    },
    {
      id: 6,
      name: "Evergreen Pine Matte",
      price: "$24.99",
      originalPrice: "$38.99",
      image: "https://images.unsplash.com/photo-1611601564456-3d2c17b4b3c2?w=400&h=600&fit=crop",
      description: "Deep evergreen with matte pine needle texture",
      rating: 4.9,
      reviewCount: 143,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/evergreen-pine-matte"
    },
    {
      id: 7,
      name: "Silver Bell Shimmer",
      price: "$27.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1612655467234-a5d6e7f8b9c3?w=400&h=600&fit=crop",
      description: "Metallic silver with bell-shaped glitter accents",
      rating: 4.7,
      reviewCount: 176,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/silver-bell-shimmer"
    },
    {
      id: 8,
      name: "Burgundy Wine Christmas",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1613719890123-d4e5f6b7c8aa?w=400&h=600&fit=crop",
      description: "Rich burgundy wine with festive shimmer finish",
      rating: 4.8,
      reviewCount: 201,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/burgundy-wine-christmas"
    },
    {
      id: 9,
      name: "Frosted Winter White",
      price: "$23.99",
      originalPrice: "$36.99",
      image: "https://images.unsplash.com/photo-1614783456789-e8f9b0c1d2aa?w=400&h=600&fit=crop",
      description: "Pure winter white with frosted glass finish",
      rating: 4.6,
      reviewCount: 159,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/frosted-winter-white"
    },
    {
      id: 10,
      name: "Cranberry Sparkle Gloss",
      price: "$28.99",
      originalPrice: "$44.99",
      image: "https://images.unsplash.com/photo-1615847012345-f0a1b2c3d4aa?w=400&h=600&fit=crop",
      description: "Deep cranberry with sparkling gloss finish",
      rating: 4.9,
      reviewCount: 187,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/cranberry-sparkle-gloss"
    },
    {
      id: 11,
      name: "Christmas Tree Green Chrome",
      price: "$31.99",
      originalPrice: "$47.99",
      image: "https://images.unsplash.com/photo-1616910456789-a1b2c3d4e5aa?w=400&h=600&fit=crop",
      description: "Christmas tree green with mirror chrome finish",
      rating: 4.7,
      reviewCount: 164,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/christmas-tree-green-chrome"
    },
    {
      id: 12,
      name: "Champagne Celebration",
      price: "$30.99",
      originalPrice: "$46.99",
      image: "https://images.unsplash.com/photo-1617974123456-b2c3d4e5f6aa?w=400&h=600&fit=crop",
      description: "Golden champagne with celebration bubble effect",
      rating: 4.8,
      reviewCount: 192,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/champagne-celebration"
    },
    {
      id: 13,
      name: "Midnight Christmas Blue",
      price: "$25.99",
      originalPrice: "$40.99",
      image: "https://images.unsplash.com/photo-1619037890123-c3d4e5f6g7aa?w=400&h=600&fit=crop",
      description: "Deep midnight blue with silver star accents",
      rating: 4.6,
      reviewCount: 138,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/midnight-christmas-blue"
    },
    {
      id: 14,
      name: "Ruby Red Gemstone",
      price: "$29.99",
      originalPrice: "$45.99",
      image: "https://images.unsplash.com/photo-1620101456789-d4e5f6g7h8aa?w=400&h=600&fit=crop",
      description: "Precious ruby red with gemstone-like depth",
      rating: 4.9,
      reviewCount: 215,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/ruby-red-gemstone"
    },
    {
      id: 15,
      name: "Snowy Mountain Peak",
      price: "$27.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1621165123456-e5f6g7h8i9aa?w=400&h=600&fit=crop",
      description: "Pearl white with mountain peak shimmer texture",
      rating: 4.7,
      reviewCount: 171,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/snowy-mountain-peak"
    }
  ];

  const additionalProducts: Product[] = [
    {
      id: 16,
      name: "Gingerbread Spice Brown",
      price: "$24.99",
      originalPrice: "$38.99",
      image: "https://images.unsplash.com/photo-1622228789012-f6g7h8i9j0aa?w=400&h=600&fit=crop",
      description: "Warm gingerbread brown with spice shimmer",
      rating: 4.8,
      reviewCount: 155,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/gingerbread-spice-brown"
    },
    {
      id: 17,
      name: "Mistletoe Kiss Green",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1623292345678-g7h8i9j0k1aa?w=400&h=600&fit=crop",
      description: "Fresh mistletoe green with kiss-soft finish",
      rating: 4.6,
      reviewCount: 182,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/mistletoe-kiss-green"
    },
    {
      id: 18,
      name: "Cinnamon Stick Glaze",
      price: "$25.99",
      originalPrice: "$40.99",
      image: "https://images.unsplash.com/photo-1624356789012-h8i9j0k1l2aa?w=400&h=600&fit=crop",
      description: "Warm cinnamon stick with glazed finish",
      rating: 4.7,
      reviewCount: 167,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/cinnamon-stick-glaze"
    },
    {
      id: 19,
      name: "Crystal Icicle Chrome",
      price: "$33.99",
      originalPrice: "$50.99",
      image: "https://images.unsplash.com/photo-1625420123456-i9j0k1l2m3aa?w=400&h=600&fit=crop",
      description: "Crystal clear base with icicle chrome effect",
      rating: 4.9,
      reviewCount: 129,
      isNew: true,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/crystal-icicle-chrome"
    },
    {
      id: 20,
      name: "Poinsettia Petal Red",
      price: "$27.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1626484567890-j0k1l2m3n4aa?w=400&h=600&fit=crop",
      description: "Vibrant poinsettia red with petal-soft texture",
      rating: 4.8,
      reviewCount: 194,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/poinsettia-petal-red"
    },
    {
      id: 21,
      name: "Winter Berry Crush",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1627548901234-k1l2m3n4o5aa?w=400&h=600&fit=crop",
      description: "Deep winter berry with crushed shimmer finish",
      rating: 4.7,
      reviewCount: 173,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/winter-berry-crush"
    },
    {
      id: 22,
      name: "Golden Ornament Shine",
      price: "$30.99",
      originalPrice: "$46.99",
      image: "https://images.unsplash.com/photo-1628612345678-l2m3n4o5p6aa?w=400&h=600&fit=crop",
      description: "Rich golden ornament with high-shine finish",
      rating: 4.9,
      reviewCount: 186,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/golden-ornament-shine"
    },
    {
      id: 23,
      name: "Snowstorm White Matte",
      price: "$24.99",
      originalPrice: "$38.99",
      image: "https://images.unsplash.com/photo-1629676789012-m3n4o5p6q7aa?w=400&h=600&fit=crop",
      description: "Pure snowstorm white with matte blizzard finish",
      rating: 4.6,
      reviewCount: 148,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/snowstorm-white-matte"
    },
    {
      id: 24,
      name: "Emerald Pine Velvet",
      price: "$28.99",
      originalPrice: "$44.99",
      image: "https://images.unsplash.com/photo-1630740123456-n4o5p6q7r8aa?w=400&h=600&fit=crop",
      description: "Rich emerald pine with luxurious velvet texture",
      rating: 4.8,
      reviewCount: 161,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/emerald-pine-velvet"
    },
    {
      id: 25,
      name: "Copper Bell Metallic",
      price: "$29.99",
      originalPrice: "$45.99",
      image: "https://images.unsplash.com/photo-1631804567890-o5p6q7r8s9aa?w=400&h=600&fit=crop",
      description: "Warm copper bell with metallic ring finish",
      rating: 4.7,
      reviewCount: 175,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/copper-bell-metallic"
    },
    {
      id: 26,
      name: "Plum Pudding Purple",
      price: "$25.99",
      originalPrice: "$40.99",
      image: "https://images.unsplash.com/photo-1632868901234-p6q7r8s9t0aa?w=400&h=600&fit=crop",
      description: "Rich plum pudding purple with festive warmth",
      rating: 4.8,
      reviewCount: 157,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/plum-pudding-purple"
    },
    {
      id: 27,
      name: "Frosty Morning Shimmer",
      price: "$27.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1633932345678-q7r8s9t0u1aa?w=400&h=600&fit=crop",
      description: "Frosty morning silver with delicate shimmer",
      rating: 4.6,
      reviewCount: 189,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/frosty-morning-shimmer"
    },
    {
      id: 28,
      name: "Candy Apple Red Gloss",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1634996789012-r8s9t0u1v2aa?w=400&h=600&fit=crop",
      description: "Classic candy apple red with high-gloss finish",
      rating: 4.9,
      reviewCount: 203,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/candy-apple-red-gloss"
    },
    {
      id: 29,
      name: "Pine Cone Brown Satin",
      price: "$24.99",
      originalPrice: "$38.99",
      image: "https://images.unsplash.com/photo-1636060123456-s9t0u1v2w3aa?w=400&h=600&fit=crop",
      description: "Natural pine cone brown with smooth satin finish",
      rating: 4.7,
      reviewCount: 164,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/pine-cone-brown-satin"
    },
    {
      id: 30,
      name: "Holly Berry Burst",
      price: "$28.99",
      originalPrice: "$44.99",
      image: "https://images.unsplash.com/photo-1637124567890-t0u1v2w3x4aa?w=400&h=600&fit=crop",
      description: "Vibrant holly berry red with burst of shimmer",
      rating: 4.8,
      reviewCount: 178,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/holly-berry-burst"
    },
    {
      id: 31,
      name: "Arctic Frost Chrome",
      price: "$32.99",
      originalPrice: "$49.99",
      image: "https://images.unsplash.com/photo-1638188901234-u1v2w3x4y5aa?w=400&h=600&fit=crop",
      description: "Arctic frost blue with mirror chrome finish",
      rating: 4.9,
      reviewCount: 142,
      isNew: true,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/arctic-frost-chrome"
    },
    {
      id: 32,
      name: "Mulled Wine Warmth",
      price: "$27.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1639252345678-v2w3x4y5z6aa?w=400&h=600&fit=crop",
      description: "Warm mulled wine red with cozy finish",
      rating: 4.7,
      reviewCount: 191,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/mulled-wine-warmth"
    },
    {
      id: 33,
      name: "Sugar Cookie Cream",
      price: "$23.99",
      originalPrice: "$36.99",
      image: "https://images.unsplash.com/photo-1640316789012-w3x4y5z6a7aa?w=400&h=600&fit=crop",
      description: "Sweet sugar cookie cream with soft matte finish",
      rating: 4.6,
      reviewCount: 156,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/sugar-cookie-cream"
    },
    {
      id: 34,
      name: "Garland Green Shimmer",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1641380123456-x4y5z6a7b8aa?w=400&h=600&fit=crop",
      description: "Festive garland green with holiday shimmer",
      rating: 4.8,
      reviewCount: 183,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/garland-green-shimmer"
    },
    {
      id: 35,
      name: "Christmas Morning Gold",
      price: "$31.99",
      originalPrice: "$47.99",
      image: "https://images.unsplash.com/photo-1642444567890-y5z6a7b8c9aa?w=400&h=600&fit=crop",
      description: "Bright Christmas morning gold with joy finish",
      rating: 4.9,
      reviewCount: 167,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/christmas-morning-gold"
    },
    {
      id: 36,
      name: "Velvet Ribbon Red",
      price: "$28.99",
      originalPrice: "$44.99",
      image: "https://images.unsplash.com/photo-1643508901234-z6a7b8c9d0aa?w=400&h=600&fit=crop",
      description: "Luxurious velvet ribbon red with silk texture",
      rating: 4.8,
      reviewCount: 195,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/velvet-ribbon-red"
    },
    {
      id: 37,
      name: "Starlight Silver Dust",
      price: "$29.99",
      originalPrice: "$45.99",
      image: "https://images.unsplash.com/photo-1644572345678-a7b8c9d0e1aa?w=400&h=600&fit=crop",
      description: "Sparkling starlight silver with cosmic dust",
      rating: 4.7,
      reviewCount: 174,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/starlight-silver-dust"
    },
    {
      id: 38,
      name: "Eggnog Cream Gloss",
      price: "$25.99",
      originalPrice: "$40.99",
      image: "https://images.unsplash.com/photo-1645636789012-b8c9d0e1f2aa?w=400&h=600&fit=crop",
      description: "Rich eggnog cream with glossy holiday finish",
      rating: 4.6,
      reviewCount: 162,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/eggnog-cream-gloss"
    },
    {
      id: 39,
      name: "Festive Wreath Green",
      price: "$27.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1646700123456-c9d0e1f2g3aa?w=400&h=600&fit=crop",
      description: "Traditional wreath green with festive depth",
      rating: 4.8,
      reviewCount: 188,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/festive-wreath-green"
    },
    {
      id: 40,
      name: "Sparkly Snow Globe",
      price: "$30.99",
      originalPrice: "$46.99",
      image: "https://images.unsplash.com/photo-1647764567890-d0e1f2g3h4aa?w=400&h=600&fit=crop",
      description: "Clear base with snow globe sparkle effect",
      rating: 4.9,
      reviewCount: 151,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/sparkly-snow-globe"
    },
    {
      id: 41,
      name: "Cranberry Sauce Matte",
      price: "$24.99",
      originalPrice: "$38.99",
      image: "https://images.unsplash.com/photo-1648828901234-e1f2g3h4i5aa?w=400&h=600&fit=crop",
      description: "Rich cranberry sauce with smooth matte finish",
      rating: 4.7,
      reviewCount: 169,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/cranberry-sauce-matte"
    },
    {
      id: 42,
      name: "Tinsel Town Silver",
      price: "$28.99",
      originalPrice: "$44.99",
      image: "https://images.unsplash.com/photo-1649892345678-f2g3h4i5j6aa?w=400&h=600&fit=crop",
      description: "Glamorous tinsel silver with Hollywood finish",
      rating: 4.8,
      reviewCount: 185,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/tinsel-town-silver"
    },
    {
      id: 43,
      name: "Candy Cane Swirl",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1650956789012-g3h4i5j6k7aa?w=400&h=600&fit=crop",
      description: "Sweet candy cane with red and white swirl",
      rating: 4.6,
      reviewCount: 172,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/candy-cane-swirl"
    },
    {
      id: 44,
      name: "Winter Solstice Deep Blue",
      price: "$27.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1652020123456-h4i5j6k7l8aa?w=400&h=600&fit=crop",
      description: "Deep winter solstice blue with mystical finish",
      rating: 4.8,
      reviewCount: 158,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/winter-solstice-blue"
    },
    {
      id: 45,
      name: "Hot Cocoa Brown Velvet",
      price: "$25.99",
      originalPrice: "$40.99",
      image: "https://images.unsplash.com/photo-1653084567890-i5j6k7l8m9aa?w=400&h=600&fit=crop",
      description: "Warm hot cocoa brown with velvet texture",
      rating: 4.7,
      reviewCount: 184,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/hot-cocoa-brown-velvet"
    },
    {
      id: 46,
      name: "Angel Wing Pearl",
      price: "$31.99",
      originalPrice: "$47.99",
      image: "https://images.unsplash.com/photo-1654148901234-j6k7l8m9n0aa?w=400&h=600&fit=crop",
      description: "Ethereal pearl white with angel wing shimmer",
      rating: 4.9,
      reviewCount: 139,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/angel-wing-pearl"
    },
    {
      id: 47,
      name: "Nutcracker Gold Chrome",
      price: "$32.99",
      originalPrice: "$49.99",
      image: "https://images.unsplash.com/photo-1655212345678-k7l8m9n0o1aa?w=400&h=600&fit=crop",
      description: "Regal nutcracker gold with mirror chrome finish",
      rating: 4.8,
      reviewCount: 166,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/nutcracker-gold-chrome"
    },
    {
      id: 48,
      name: "Fireplace Ember Glow",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1656276789012-l8m9n0o1p2aa?w=400&h=600&fit=crop",
      description: "Warm fireplace ember with cozy glow finish",
      rating: 4.7,
      reviewCount: 193,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/fireplace-ember-glow"
    },
    {
      id: 49,
      name: "Christmas Rose Pink",
      price: "$28.99",
      originalPrice: "$44.99",
      image: "https://images.unsplash.com/photo-1657340123456-m9n0o1p2q3aa?w=400&h=600&fit=crop",
      description: "Elegant Christmas rose pink with petal finish",
      rating: 4.6,
      reviewCount: 177,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/christmas-rose-pink"
    },
    {
      id: 50,
      name: "Midnight Mass Black Shimmer",
      price: "$29.99",
      originalPrice: "$45.99",
      image: "https://images.unsplash.com/photo-1658404567890-n0o1p2q3r4aa?w=400&h=600&fit=crop",
      description: "Elegant midnight black with subtle shimmer",
      rating: 4.9,
      reviewCount: 201,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/midnight-mass-black-shimmer"
    }
  ];

  const allProducts = [...initialProducts, ...additionalProducts];

  const getFilteredProducts = () => {
    const productsToShow = showAllProducts ? allProducts : initialProducts;
    
    switch (activeFilter) {
      case 'New Arrivals':
        return productsToShow.filter(product => product.isNew);
      case 'Trending':
        return productsToShow.filter(product => product.isTrending);
      case 'On Sale':
        return productsToShow.filter(product => product.originalPrice);
      default:
        return productsToShow;
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1608312594799-9c5aef5b39fb?w=1200&h=800&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-red-700 to-green-800 opacity-70" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce delay-100">
          <div className="text-red-300 text-4xl">🎄</div>
        </div>
        <div className="absolute top-32 right-20 animate-bounce delay-300">
          <div className="text-yellow-300 text-3xl">⭐</div>
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-500">
          <div className="text-green-300 text-3xl">🎁</div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-700">
          <div className="text-white text-4xl">❄️</div>
        </div>

        {/* Back Button */}
        <Link 
          href="/shop"
          className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
        >
          ← Back to Shop
        </Link>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white backdrop-blur-md bg-white/10 p-8 rounded-3xl max-w-2xl mx-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-200 to-green-200 bg-clip-text text-transparent">
              Christmas Nails
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-green-100">
              Celebrate the magic of Christmas with festive, sparkling nail colors
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="bg-gradient-to-r from-green-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold">
                Festive Nails
              </span>
              <span className="bg-gradient-to-r from-red-500 to-green-500 text-white px-6 py-3 rounded-full font-semibold">
                Holiday Glam
              </span>
              <span className="bg-gradient-to-r from-green-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold">
                Christmas Magic
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {['All Products', 'New Arrivals', 'Trending', 'On Sale'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-green-500 via-red-500 to-green-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-red-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] border border-gray-100 hover:border-gray-200">
              <div className="relative overflow-hidden rounded-t-2xl aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                
                {/* Status Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-gradient-to-r from-green-500 to-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      NEW
                    </span>
                  )}
                  {product.isTrending && (
                    <span className="bg-gradient-to-r from-red-500 to-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      TRENDING
                    </span>
                  )}
                  {product.stockStatus === 'low-stock' && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      LOW STOCK
                    </span>
                  )}
                </div>

                {/* Stock Status Indicator */}
                <div className="absolute bottom-3 right-3">
                  <div className={`w-3 h-3 rounded-full ${
                    product.stockStatus === 'in-stock' 
                      ? 'bg-green-400' 
                      : product.stockStatus === 'low-stock'
                      ? 'bg-yellow-400'
                      : 'bg-red-400'
                  }`} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Price Display */}
                <div className="price-display flex items-center gap-2 mb-4">
                  <span className="original-price text-gray-400 line-through text-sm">
                    {product.originalPrice}
                  </span>
                  <span className="discounted-price text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                </div>

                {/* CTA Button */}
                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button w-full bg-gradient-to-r from-green-500 via-red-500 to-green-500 text-white font-semibold py-3 px-6 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-center block"
                >
                  {product.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Complete Catalog Button */}
        <div className="text-center mt-12">
          {!showAllProducts ? (
            <button
              onClick={() => setShowAllProducts(true)}
              className="cta-button bg-gradient-to-r from-green-500 via-red-500 to-green-500 text-white font-semibold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Load More Products ({additionalProducts.length} more)
            </button>
          ) : (
            <a
              href="https://example-affiliate-store.com/christmas-nails"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button bg-gradient-to-r from-green-500 via-red-500 to-green-500 text-white font-semibold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
            >
              Shop Complete Collection →
            </a>
          )}
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emma S.",
                review: "The Festive Holly Glitter is absolutely magical! Perfect for Christmas parties.",
                product: "Festive Holly Glitter"
              },
              {
                name: "Rachel T.",
                review: "Christmas Red Velvet is stunning! The color is so rich and festive.",
                product: "Christmas Red Velvet"
              },
              {
                name: "Lisa K.",
                review: "Snowflake Chrome Magic makes my nails look like winter wonderland!",
                product: "Snowflake Chrome Magic"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-lg">
                <div className="flex mb-3">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">Verified Purchase • {testimonial.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Categories */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Explore More Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "halloween",
                displayName: "Halloween Nails",
                image: "https://images.unsplash.com/photo-1603893781141-b67498723e83?w=400&h=300&fit=crop",
                gradient: "from-orange-600 to-purple-700"
              },
              {
                name: "new-year",
                displayName: "New Year Nails",
                image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop",
                gradient: "from-yellow-400 to-pink-600"
              },
              {
                name: "trendy",
                displayName: "Trendy Nails",
                image: "https://images.unsplash.com/photo-1604991405679-98d08f7fbb08?w=400&h=300&fit=crop",
                gradient: "from-pink-500 to-violet-600"
              },
              {
                name: "winter",
                displayName: "Winter Nails",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
                gradient: "from-blue-500 to-indigo-600"
              }
            ].map((category, index) => (
              <Link
                key={index}
                href={`/shop/${category.name}`}
                className="category-card relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 group"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={category.image}
                    alt={category.displayName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-60`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center">
                      {category.displayName}
                    </h3>
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

export default ChristmasNailsCategory;
