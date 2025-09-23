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

const FallNailsCategory = () => {
  const [activeFilter, setActiveFilter] = useState('All Products');
  const [showAllProducts, setShowAllProducts] = useState(false);

  const initialProducts: Product[] = [
    {
      id: 1,
      name: "Autumn Maple Glaze Collection",
      price: "$24.99",
      originalPrice: "$39.99",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=600&fit=crop",
      description: "Rich amber base with golden maple leaf shimmer finish",
      rating: 4.8,
      reviewCount: 156,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/fall-maple-glaze"
    },
    {
      id: 2,
      name: "Pumpkin Spice Matte Luxe",
      price: "$27.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1583847411558-66f1404bd9e2?w=400&h=600&fit=crop",
      description: "Warm terracotta matte with subtle copper undertones",
      rating: 4.7,
      reviewCount: 203,
      isNew: false,
      isTrending: true,
      stockStatus: "low-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/pumpkin-spice-matte"
    },
    {
      id: 3,
      name: "Burgundy Wine Velvet",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop",
      description: "Deep burgundy with velvet finish and wine-dark depth",
      rating: 4.9,
      reviewCount: 178,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/burgundy-wine-velvet"
    },
    {
      id: 4,
      name: "Golden Harvest Shimmer",
      price: "$23.99",
      originalPrice: "$37.99",
      image: "https://images.unsplash.com/photo-1607186425648-74e0ae0e8fa5?w=400&h=600&fit=crop",
      description: "Warm gold with harvest wheat shimmer particles",
      rating: 4.6,
      reviewCount: 134,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/golden-harvest-shimmer"
    },
    {
      id: 5,
      name: "Cinnamon Bark Chrome",
      price: "$29.99",
      originalPrice: "$45.99",
      image: "https://images.unsplash.com/photo-1618922710403-71b2b5aa9cb6?w=400&h=600&fit=crop",
      description: "Chrome finish with warm cinnamon and bark textures",
      rating: 4.8,
      reviewCount: 189,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/cinnamon-bark-chrome"
    },
    {
      id: 6,
      name: "Cranberry Jewel Tone",
      price: "$25.99",
      originalPrice: "$39.99",
      image: "https://images.unsplash.com/photo-1607822214992-0bb6eae35f16?w=400&h=600&fit=crop",
      description: "Rich cranberry with jewel-like depth and shine",
      rating: 4.7,
      reviewCount: 167,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/cranberry-jewel-tone"
    },
    {
      id: 7,
      name: "Forest Pine Magnetic",
      price: "$31.99",
      originalPrice: "$47.99",
      image: "https://images.unsplash.com/photo-1622737147521-49136a5761ed?w=400&h=600&fit=crop",
      description: "Deep forest green with magnetic cat-eye effect",
      rating: 4.9,
      reviewCount: 145,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/forest-pine-magnetic"
    },
    {
      id: 8,
      name: "Caramel Apple Gloss",
      price: "$24.99",
      originalPrice: "$38.99",
      image: "https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?w=400&h=600&fit=crop",
      description: "Sweet caramel with apple-red undertones and gloss",
      rating: 4.6,
      reviewCount: 198,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/caramel-apple-gloss"
    },
    {
      id: 9,
      name: "Chestnut Brown Satin",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1617554677508-94c1ec71a42f?w=400&h=600&fit=crop",
      description: "Warm chestnut brown with luxurious satin finish",
      rating: 4.8,
      reviewCount: 172,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/chestnut-brown-satin"
    },
    {
      id: 10,
      name: "Copper Penny Metallic",
      price: "$28.99",
      originalPrice: "$43.99",
      image: "https://images.unsplash.com/photo-1610887439844-a07d22ad2065?w=400&h=600&fit=crop",
      description: "Brilliant copper metallic with penny-bright shimmer",
      rating: 4.7,
      reviewCount: 159,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/copper-penny-metallic"
    },
    {
      id: 11,
      name: "Plum Harvest Cream",
      price: "$25.99",
      originalPrice: "$40.99",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=600&fit=crop",
      description: "Deep plum with harvest cream undertones and smooth finish",
      rating: 4.9,
      reviewCount: 184,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/plum-harvest-cream"
    },
    {
      id: 12,
      name: "Rust Orange Matte",
      price: "$23.99",
      originalPrice: "$36.99",
      image: "https://images.unsplash.com/photo-1615739675564-16e4f0b7c5c6?w=400&h=600&fit=crop",
      description: "Warm rust orange with velvety matte texture",
      rating: 4.6,
      reviewCount: 141,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/rust-orange-matte"
    },
    {
      id: 13,
      name: "Mahogany Wood Stain",
      price: "$27.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1618213837799-25d5552820d3?w=400&h=600&fit=crop",
      description: "Rich mahogany with wood-stain depth and warmth",
      rating: 4.8,
      reviewCount: 167,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/mahogany-wood-stain"
    },
    {
      id: 14,
      name: "Amber Honey Glaze",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1619266465172-02a7c59d8819?w=400&h=600&fit=crop",
      description: "Golden amber with honey-sweet glaze and warmth",
      rating: 4.7,
      reviewCount: 195,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/amber-honey-glaze"
    },
    {
      id: 15,
      name: "Burnt Sienna Clay",
      price: "$24.99",
      originalPrice: "$38.99",
      image: "https://images.unsplash.com/photo-1620804993944-fa9b5d382bb5?w=400&h=600&fit=crop",
      description: "Earthy burnt sienna with clay-like matte finish",
      rating: 4.9,
      reviewCount: 153,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/burnt-sienna-clay"
    }
  ];

  const additionalProducts: Product[] = [
    {
      id: 16,
      name: "Spiced Wine Velvet",
      price: "$29.99",
      originalPrice: "$45.99",
      image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=600&fit=crop",
      description: "Deep spiced wine with luxurious velvet texture",
      rating: 4.8,
      reviewCount: 176,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/spiced-wine-velvet"
    },
    {
      id: 17,
      name: "Nutmeg Spice Shimmer",
      price: "$25.99",
      originalPrice: "$40.99",
      image: "https://images.unsplash.com/photo-1622401896088-27e8c2c0ef3c?w=400&h=600&fit=crop",
      description: "Warm nutmeg with spice-infused shimmer particles",
      rating: 4.7,
      reviewCount: 164,
      isNew: false,
      isTrending: true,
      stockStatus: "low-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/nutmeg-spice-shimmer"
    },
    {
      id: 18,
      name: "Persimmon Sunset Glow",
      price: "$27.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1623243899947-c2e99b7d18f6?w=400&h=600&fit=crop",
      description: "Vibrant persimmon with sunset glow finish",
      rating: 4.6,
      reviewCount: 188,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/persimmon-sunset-glow"
    },
    {
      id: 19,
      name: "Smoky Quartz Chrome",
      price: "$31.99",
      originalPrice: "$47.99",
      image: "https://images.unsplash.com/photo-1624287911901-c1c7fa7c4e8a?w=400&h=600&fit=crop",
      description: "Smoky quartz with mirror chrome finish and depth",
      rating: 4.9,
      reviewCount: 142,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/smoky-quartz-chrome"
    },
    {
      id: 20,
      name: "Pecan Pie Bronze",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1625052896114-05b6a4d7c9ef?w=400&h=600&fit=crop",
      description: "Rich pecan bronze with pie-crust warmth",
      rating: 4.8,
      reviewCount: 171,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/pecan-pie-bronze"
    },
    {
      id: 21,
      name: "Mulberry Wine Stain",
      price: "$28.99",
      originalPrice: "$43.99",
      image: "https://images.unsplash.com/photo-1626183404694-c2dbf6db4c24?w=400&h=600&fit=crop",
      description: "Deep mulberry with wine-stain richness and depth",
      rating: 4.7,
      reviewCount: 156,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/mulberry-wine-stain"
    },
    {
      id: 22,
      name: "Acorn Cap Brown",
      price: "$24.99",
      originalPrice: "$38.99",
      image: "https://images.unsplash.com/photo-1627423067780-c5b9e7f02c6a?w=400&h=600&fit=crop",
      description: "Natural acorn brown with cap-like matte finish",
      rating: 4.6,
      reviewCount: 143,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/acorn-cap-brown"
    },
    {
      id: 23,
      name: "Pear Brandy Gloss",
      price: "$27.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1628485568925-e67a5d6e8f43?w=400&h=600&fit=crop",
      description: "Golden pear with brandy warmth and high gloss",
      rating: 4.8,
      reviewCount: 179,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/pear-brandy-gloss"
    },
    {
      id: 24,
      name: "Cedar Wood Satin",
      price: "$25.99",
      originalPrice: "$40.99",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=600&fit=crop",
      description: "Warm cedar wood with smooth satin texture",
      rating: 4.9,
      reviewCount: 162,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/cedar-wood-satin"
    },
    {
      id: 25,
      name: "Butterscotch Swirl",
      price: "$23.99",
      originalPrice: "$36.99",
      image: "https://images.unsplash.com/photo-1630728923585-c4f4e6b3e1aa?w=400&h=600&fit=crop",
      description: "Sweet butterscotch with creamy swirl patterns",
      rating: 4.7,
      reviewCount: 187,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/butterscotch-swirl"
    },
    {
      id: 26,
      name: "Espresso Bean Matte",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1631789235464-2c2e5c8b1f8d?w=400&h=600&fit=crop",
      description: "Rich espresso bean with perfect matte finish",
      rating: 4.8,
      reviewCount: 154,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/espresso-bean-matte"
    },
    {
      id: 27,
      name: "Hazelnut Cream Shimmer",
      price: "$28.99",
      originalPrice: "$43.99",
      image: "https://images.unsplash.com/photo-1632847895123-f4d5c6e7b8aa?w=400&h=600&fit=crop",
      description: "Creamy hazelnut with delicate shimmer finish",
      rating: 4.6,
      reviewCount: 168,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/hazelnut-cream-shimmer"
    },
    {
      id: 28,
      name: "Cognac Leather Chrome",
      price: "$30.99",
      originalPrice: "$46.99",
      image: "https://images.unsplash.com/photo-1633912345678-c4f5e6b9d2aa?w=400&h=600&fit=crop",
      description: "Rich cognac with leather-like chrome finish",
      rating: 4.9,
      reviewCount: 139,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/cognac-leather-chrome"
    },
    {
      id: 29,
      name: "Walnut Shell Brown",
      price: "$24.99",
      originalPrice: "$38.99",
      image: "https://images.unsplash.com/photo-1634976543987-a1b2c3d4e5f6?w=400&h=600&fit=crop",
      description: "Natural walnut shell with earthy brown tones",
      rating: 4.7,
      reviewCount: 175,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/walnut-shell-brown"
    },
    {
      id: 30,
      name: "Cider Spice Glaze",
      price: "$27.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1635041234567-b8c9d0e1f2aa?w=400&h=600&fit=crop",
      description: "Warm cider with spice-infused glaze finish",
      rating: 4.8,
      reviewCount: 161,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/cider-spice-glaze"
    },
    {
      id: 31,
      name: "Rust Leaf Metallic",
      price: "$29.99",
      originalPrice: "$45.99",
      image: "https://images.unsplash.com/photo-1636105678901-d2e3f4b5c6aa?w=400&h=600&fit=crop",
      description: "Autumn rust with fallen leaf metallic shimmer",
      rating: 4.6,
      reviewCount: 192,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/rust-leaf-metallic"
    },
    {
      id: 32,
      name: "Bittersweet Chocolate",
      price: "$25.99",
      originalPrice: "$40.99",
      image: "https://images.unsplash.com/photo-1637170123456-e7f8b9c0d1aa?w=400&h=600&fit=crop",
      description: "Rich bittersweet chocolate with deep brown finish",
      rating: 4.9,
      reviewCount: 148,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/bittersweet-chocolate"
    },
    {
      id: 33,
      name: "Smoky Topaz Gem",
      price: "$31.99",
      originalPrice: "$47.99",
      image: "https://images.unsplash.com/photo-1638234567890-f5g6h7i8j9aa?w=400&h=600&fit=crop",
      description: "Smoky topaz with precious gem-like depth",
      rating: 4.8,
      reviewCount: 173,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/smoky-topaz-gem"
    },
    {
      id: 34,
      name: "Clove Spice Satin",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1639298901234-g6h7i8j9k0aa?w=400&h=600&fit=crop",
      description: "Warm clove spice with luxurious satin finish",
      rating: 4.7,
      reviewCount: 159,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/clove-spice-satin"
    },
    {
      id: 35,
      name: "Maple Syrup Gloss",
      price: "$24.99",
      originalPrice: "$38.99",
      image: "https://images.unsplash.com/photo-1640362345678-h8i9j0k1l2aa?w=400&h=600&fit=crop",
      description: "Sweet maple syrup with rich golden gloss",
      rating: 4.6,
      reviewCount: 186,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/maple-syrup-gloss"
    },
    {
      id: 36,
      name: "Burnt Umber Clay",
      price: "$23.99",
      originalPrice: "$36.99",
      image: "https://images.unsplash.com/photo-1641426789012-i9j0k1l2m3aa?w=400&h=600&fit=crop",
      description: "Natural burnt umber with earthy clay texture",
      rating: 4.8,
      reviewCount: 164,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/burnt-umber-clay"
    },
    {
      id: 37,
      name: "Toffee Caramel Chrome",
      price: "$28.99",
      originalPrice: "$43.99",
      image: "https://images.unsplash.com/photo-1642490123456-j0k1l2m3n4aa?w=400&h=600&fit=crop",
      description: "Rich toffee caramel with mirror chrome finish",
      rating: 4.9,
      reviewCount: 151,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/toffee-caramel-chrome"
    },
    {
      id: 38,
      name: "Sage Leaf Matte",
      price: "$25.99",
      originalPrice: "$40.99",
      image: "https://images.unsplash.com/photo-1643554567890-k1l2m3n4o5aa?w=400&h=600&fit=crop",
      description: "Muted sage leaf with natural matte finish",
      rating: 4.7,
      reviewCount: 177,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/sage-leaf-matte"
    },
    {
      id: 39,
      name: "Brandy Alexander Shimmer",
      price: "$27.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1644618901234-l2m3n4o5p6aa?w=400&h=600&fit=crop",
      description: "Classic brandy alexander with golden shimmer",
      rating: 4.8,
      reviewCount: 145,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/brandy-alexander-shimmer"
    },
    {
      id: 40,
      name: "Chestnut Velvet Luxe",
      price: "$30.99",
      originalPrice: "$46.99",
      image: "https://images.unsplash.com/photo-1645682345678-m3n4o5p6q7aa?w=400&h=600&fit=crop",
      description: "Premium chestnut with luxury velvet texture",
      rating: 4.6,
      reviewCount: 163,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/chestnut-velvet-luxe"
    },
    {
      id: 41,
      name: "Paprika Spice Dust",
      price: "$24.99",
      originalPrice: "$38.99",
      image: "https://images.unsplash.com/photo-1646746789012-n4o5p6q7r8aa?w=400&h=600&fit=crop",
      description: "Warm paprika with spice dust finish",
      rating: 4.9,
      reviewCount: 189,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/paprika-spice-dust"
    },
    {
      id: 42,
      name: "Autumn Leaf Gradient",
      price: "$29.99",
      originalPrice: "$45.99",
      image: "https://images.unsplash.com/photo-1647810123456-o5p6q7r8s9aa?w=400&h=600&fit=crop",
      description: "Multi-tone autumn leaf with gradient effect",
      rating: 4.8,
      reviewCount: 172,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/autumn-leaf-gradient"
    },
    {
      id: 43,
      name: "Cocoa Bean Matte",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1648874567890-p6q7r8s9t0aa?w=400&h=600&fit=crop",
      description: "Rich cocoa bean with perfect matte texture",
      rating: 4.7,
      reviewCount: 155,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/cocoa-bean-matte"
    },
    {
      id: 44,
      name: "Honey Oak Stain",
      price: "$25.99",
      originalPrice: "$40.99",
      image: "https://images.unsplash.com/photo-1649938901234-q7r8s9t0u1aa?w=400&h=600&fit=crop",
      description: "Golden honey oak with wood-stain depth",
      rating: 4.6,
      reviewCount: 168,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/honey-oak-stain"
    },
    {
      id: 45,
      name: "Ginger Snap Chrome",
      price: "$28.99",
      originalPrice: "$43.99",
      image: "https://images.unsplash.com/photo-1650002345678-r8s9t0u1v2aa?w=400&h=600&fit=crop",
      description: "Spicy ginger snap with mirror chrome finish",
      rating: 4.8,
      reviewCount: 174,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/ginger-snap-chrome"
    },
    {
      id: 46,
      name: "Saffron Gold Shimmer",
      price: "$31.99",
      originalPrice: "$47.99",
      image: "https://images.unsplash.com/photo-1651066789012-s9t0u1v2w3aa?w=400&h=600&fit=crop",
      description: "Precious saffron with gold shimmer particles",
      rating: 4.9,
      reviewCount: 141,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/saffron-gold-shimmer"
    },
    {
      id: 47,
      name: "Pumpkin Patch Gloss",
      price: "$24.99",
      originalPrice: "$38.99",
      image: "https://images.unsplash.com/photo-1652130123456-t0u1v2w3x4aa?w=400&h=600&fit=crop",
      description: "Warm pumpkin patch with glossy orange finish",
      rating: 4.7,
      reviewCount: 187,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/pumpkin-patch-gloss"
    },
    {
      id: 48,
      name: "Tobacco Leaf Satin",
      price: "$27.99",
      originalPrice: "$42.99",
      image: "https://images.unsplash.com/photo-1653194567890-u1v2w3x4y5aa?w=400&h=600&fit=crop",
      description: "Rich tobacco leaf with smooth satin finish",
      rating: 4.8,
      reviewCount: 159,
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/tobacco-leaf-satin"
    },
    {
      id: 49,
      name: "Burgundy Merlot Velvet",
      price: "$29.99",
      originalPrice: "$45.99",
      image: "https://images.unsplash.com/photo-1654258901234-v2w3x4y5z6aa?w=400&h=600&fit=crop",
      description: "Deep burgundy merlot with luxury velvet texture",
      rating: 4.6,
      reviewCount: 165,
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/burgundy-merlot-velvet"
    },
    {
      id: 50,
      name: "Caramel Macchiato Swirl",
      price: "$26.99",
      originalPrice: "$41.99",
      image: "https://images.unsplash.com/photo-1655322345678-w3x4y5z6a7aa?w=400&h=600&fit=crop",
      description: "Creamy caramel macchiato with swirl patterns",
      rating: 4.9,
      reviewCount: 193,
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/caramel-macchiato-swirl"
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1604991405679-98d08f7fbb08?w=1200&h=800&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 opacity-70" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce delay-100">
          <div className="text-orange-300 text-4xl">🍂</div>
        </div>
        <div className="absolute top-32 right-20 animate-bounce delay-300">
          <div className="text-amber-300 text-3xl">🍁</div>
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-500">
          <div className="text-red-300 text-3xl">🎃</div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-700">
          <div className="text-yellow-300 text-4xl">🌰</div>
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
              Fall Nails
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-amber-100">
              Embrace autumn's warmth with rich, cozy nail colors that capture the season's beauty
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold">
                Autumn Elegance
              </span>
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold">
                Cozy Vibes
              </span>
              <span className="bg-gradient-to-r from-red-500 to-amber-500 text-white px-6 py-3 rounded-full font-semibold">
                Fall Glamour
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
                    ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-300'
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
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      NEW
                    </span>
                  )}
                  {product.isTrending && (
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
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
                <div className="price-display flex items-center gap-2 mb-3">
                  <span className="original-price text-gray-400 line-through text-sm">
                    {product.originalPrice}
                  </span>
                  <span className="discounted-price text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-500">({product.reviewCount})</span>
                </div>

                {/* CTA Button */}
                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-center block"
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
              className="cta-button bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-semibold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Load More Products ({additionalProducts.length} more)
            </button>
          ) : (
            <a
              href="https://example-affiliate-store.com/fall-nails"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-semibold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
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
                name: "Sarah M.",
                review: "The Autumn Maple Glaze is absolutely stunning! Perfect fall color that lasts for weeks.",
                product: "Autumn Maple Glaze Collection"
              },
              {
                name: "Jessica R.",
                review: "Love the Burgundy Wine Velvet! The finish is so smooth and the color is rich and elegant.",
                product: "Burgundy Wine Velvet"
              },
              {
                name: "Amanda K.",
                review: "Pumpkin Spice Matte is my new favorite! Perfect for the season and gets so many compliments.",
                product: "Pumpkin Spice Matte Luxe"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-lg">
                <div className="flex mb-3">
                  {renderStars(5)}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Winter Nails",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                name: "Holiday Nails",
                image: "https://images.unsplash.com/photo-1577628921313-67b5b0a4bcd1?w=400&h=300&fit=crop",
                gradient: "from-green-500 to-red-600"
              },
              {
                name: "Classic Nails",
                image: "https://images.unsplash.com/photo-1599948128020-9a44be2b0040?w=400&h=300&fit=crop",
                gradient: "from-gray-600 to-gray-800"
              }
            ].map((category, index) => (
              <Link
                key={index}
                href={`/shop/${category.name.toLowerCase().replace(' ', '-')}`}
                className="category-card relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 group"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-60`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center">
                      {category.name}
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

export default FallNailsCategory;
