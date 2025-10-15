
'use client';
import Link from 'next/link';
import { useState } from 'react';

useEffect(() => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mirelleinspo.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Shop",
        "item": "https://mirelleinspo.com/shop"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Fall Nails", // Change per page
        "item": "https://mirelleinspo.com/shop/fall" // Change per page
      }
    ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(script);

  return () => document.head.removeChild(script);
}, []);

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

const FallNailsCategory = () => {
  const [activeFilter, setActiveFilter] = useState('All Products');
  const [showAllProducts, setShowAllProducts] = useState(false);

  const initialProducts: Product[] = [
    {
      id: 1,
      name: "Maple Leaf Design Autumn False Nail",
      price: "$6.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/61n1fQ4Em7L._SY450_.jpg",
      description: "Fall Press on Nails Medium Square Fake Nails with Maple Leaf Design Autumn False Nail Gloss Full Cover Thanksgiving Maple Leaves Acrylic Stick on Nail for Women 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/4mwUeDq"
    },
    {
      id: 2,
      name: "Fall Maple Leaf Press on Nails",
      price: "$6.99",
      originalPrice: "$11.99",
      image: "https://m.media-amazon.com/images/I/71tJavkmfmL._SY450_.jpg",
      description: "Medium Coffin Fake Nails with Gold Glitter Designs Dark Red False Nail Acrylic Autumn Maple Leaves Stick on Nail",
      isNew: false,
      isTrending: true,
      stockStatus: "low-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/3KaTeaC"
    },
    {
      id: 3,
      name: "Short Square Fake Nails with Maple Leaf Design",
      price: "$6.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/61sxz4od20L._SY450_.jpg",
      description: "Maple Leaf Design Black French Tip False Nail Thanksgiving Autumn Maple Leaves Acrylic Stick on Nail for Women 24 Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/46Co5Ez"
    },
    {
      id: 4,
      name: "Pinecone Design Autumn Brown False Nails",
      price: "$6.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71l0Zz5At7L._SY450_.jpg",
      description: "Pinecone Design Autumn Brown False Nails Thanksgiving Maple Leaves Stick on Nail for Women 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/3KkcL8o"
    },
    {
      id: 5,
      name: "Pinecone Pumpkin Design Autumn Maple Leaf",
      price: "$6.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71Wu5fsBpFL._SY450_.jpg",
      description: "Pinecone Pumpkin Design Autumn Maple Leaf False Nail Acrylic Thanksgiving Maple Leaves Stick on Nail for Women 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/3VtJJ8O"
    },
    {
      id: 6,
      name: "Maple Leaves Design Autumn Glitter False Nail",
      price: "$6.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71cFPu6G4yL._SY450_.jpg",
      description: "Maple Leaves Design Autumn Glitter False Nail Thanksgiving Maple Leaves Stick on Nail for Women 24 Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/4pB1ctA"
    },
    {
      id: 7,
      name: "Maple Leaf Design Gold Brown Glitter Gradient False Nail",
      price: "$6.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/714VltzX2VL._SY450_.jpg",
      description: "Thanksgiving Autumn Maple Leaves Stick on Nail for Women 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/3Kgwrdq"
    },
    {
      id: 8,
      name: "Gold Maple Leaves Design",
      price: "$6.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/51AV2Tg2isL._SY300_SX300_QL70_FMwebp_.jpg",
      description: "White False Nail Glossy Full Cover Thanksgiving Acrylic Stick on Nail for Women 24 Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/46hWzNC"
    },
    {
      id: 9,
      name: "Red Maple Leaf Design Autumn Gold",
      price: "$6.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71MHvSOrOsL._SY450_.jpg",
      description: "Autumn Gold White False Nail Glossy Full Cover Thanksgiving Acrylic Stick on Nail for Women 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/3IyVVSE"
    },
    {
      id: 10,
      name: "Fall Maple Leaf Press on Nails",
      price: "$6.99",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/71A4OXvXTLL._SY450_.jpg",
      description: "Autumn Maple Leaves False Nail Thanksgiving Acrylic Stick on Nails for Women 24Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/3KDBEvO"
    },
    {
      id: 11,
      name: "Medium Square Fake Nails with Glitter Designs",
      price: "$6.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/6120nhSkB4L._SY450_.jpg",
      description: "Glitter Designs Brown Gradient False Nails Thanksgiving Autumn Acrylic Stick on Nail for Women24 pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/4mzN0OZ"
    },
    {
      id: 12,
      name: "Gold Line Marble Texture Designs",
      price: "$6.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/61sPobzzuRL._SX679_.jpg",
      description: "Almond Press Nails - Brown False Nails With Gold Line Marble Texture Designs, Full Cover Stick on Acrylic Artificial Nails for Women Girls, 24Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/3W4dg9f"
    },
    {
      id: 13,
      name: "Gold Line Designs Brown Matte",
      price: "$6.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/61cVHrDTNUL._SX679_.jpg",
      description: "Brown Matte False Nails Full Cover Stick on Nails Reusable Artificial Nails Glue on Nails for Women Girls Nails Decorations 24Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/4mt3Q1J"
    },
    {
      id: 14,
      name: "Glitter French Tip Press on Nails",
      price: "$6.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/61sutLLGRwL._SX679_.jpg",
      description: "Fake Nails Full Cover False Nails Reusable Stick on Nails Acrylic Glossy Artificial Nails for Women Girls Glue on Nails 24Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/3W2RH91"
    },
    {
      id: 15,
      name: "Nails Nude Fake Nail With Leaf Designs",
      price: "$6.99",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/61OKKefe3XL._SX679_.jpg",
      description: "Almond Press on Nails Nude Fake Nail With Leaf Designs Glitter False Nails Glossy Full Cover Stick on Nails Acrylic Reusable Artificial Glue on Nail for Women",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/3IEmwOe"
    }
  ];

  const additionalProducts: Product[] = [
    {
      id: 16,
      name: "Medium Almond Press on Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/61+ha6Y+nGL._SX679_.jpg",
      description: "Gold Line Designs Full Cover False Nails Acrylic Stick on Nails Wine Red Artificial Nails for Women Girls Glue on Nails 24Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/4njhRAk"
    },
    {
      id: 17,
      name: "Fall Press on Nails Meidum Chrome Nails",
      price: "$14.97",
      originalPrice: "$19.99",
      image: "https://m.media-amazon.com/images/I/61t5GhSpExL._SX679_.jpg",
      description: "Chrome Nails, Light Weight & Fit Perfectly, Fake Nail with Nail Glue, Brown Glue On Nails in 15 Sizes, Chocolate Glazed",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/4nPgxFj"
    },
    {
      id: 18,
      name: "Soft Gel Press on Nails Almond",
      price: "$14.97",
      originalPrice: "$19.99",
      image: "https://m.media-amazon.com/images/I/71c-qtacSgL._SX679_.jpg",
      description: "Soft Gel Press on Nails Almond, White Glue on Nails with Nail Glue, Reusable Stick on Nails in 16 Sizes, Cream Puff",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/46iX3TF"
    },
    {
      id: 19,
      name: "Maple Leaves False Nails",
      price: "$3.99",
      originalPrice: "$6.99",
      image: "https://m.media-amazon.com/images/I/71P0fJL8XbL._SX679_.jpg",
      description: "Thanksgiving Maple Leaves False Nails - Nude Autumn Stick On Nails - Holiday Artificial Acrylic Nails",
      isNew: true,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/4nimLh0"
    },
    {
      id: 20,
      name: "Maple Leaf False Nails",
      price: "$7.99",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/71vZHtdbKtL._SX679_.jpg",
      description: "French Tip Nails with Nail Rhinestones Design Maple Leaves Autumn Full Cover Stick on Nails Artificial Nails for Thanksgiving",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/428Ywtn"
    },
    {
      id: 21,
      name: "Long Square Fake Nails",
      price: "$7.99",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/81kgVkq7FNL._SX679_.jpg",
      description: "Fall Maple Leaf Press on Nails Long Square Fake Nails Black French Tip with Maple Leaves Design False Nails Full Cover",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/46NMZ5f"
    },
    {
      id: 22,
      name: "Maple Leaves Acrylic Nail",
      price: "$7.99",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/61IAelbvSWL._SX679_.jpg",
      description: "Thanksgiving Maple Leaves Acrylic Nail Full Cover Glossy Artificial on Nail for Holiday Nail Decoration Accessories 24Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/46ixCBE"
    },
    {
      id: 23,
      name: "Maple Leaf Full Cover False Nails",
      price: "$7.99",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/61uRoEDkPuL._SX679_.jpg",
      description: "Full Cover False Nails Autumn Stick on Nails Artificial Nails Acrylic Maple Leaves French Nails Thanksgiving Nail Accessories for Women",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/4pKL5Kj"
    },
    {
      id: 24,
      name: "Maple Leaf Press on Nails",
      price: "$7.99",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/71skyZ2Gl1L._SX679_.jpg",
      description: "Maple Leaves Glitter Full Cover Tips Stick on Nail Artificial Nude Acrylic False Nail for Thanksgiving Manicure Art Accessories",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/47YdwxS"
    },
    {
      id: 25,
      name: "Autumn False Nails with Maple Leaves Glitter",
      price: "$3.99",
      originalPrice: "$6.99",
      image: "https://m.media-amazon.com/images/I/718Jo+9r+1L._SX679_.jpg",
      description: "Fake Nails Autumn False Nails with Maple Leaves Glitter Designs Cute Glue on Nails Thanksgiving Stick on Nails Full Cover Acrylic Nails for Women 24Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/3KBNCpL"
    },
    {
      id: 26,
      name: "Long Coffin Maple Leaf Fake",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71RGL0ybc5L._SX679_.jpg",
      description: "Thanksgiving Acrylic Artificial Full Cover Autumn Leaves Gradient Design Stick on Holiday Nail Decoration for Women",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/3KmhJ4u"
    },
    {
      id: 27,
      name: "Maple Leaf Designs French Tip",
      price: "$6.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71bSUgXlb4L._SX679_.jpg",
      description: "False Nails with Maple Leaf Designs French Tip Maple Leaves Acrylic Nails Thanksgiving Holiday Nail Decoration Accessories for Women",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/3KDC712"
    },
    {
      id: 28,
      name: "Maple Leaf Press On Nails",
      price: "$6.99",
      originalPrice: "$11.99",
      image: "https://m.media-amazon.com/images/I/81yKH4K+mFL._SX679_.jpg",
      description: "Thanksgiving & Autumn Glossy Holiday Nail Decoration Accessories for Women & Girls",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/4nLHABd"
    },
    {
      id: 29,
      name: "Fall Maple Leaf Press On Nails",
      price: "$3.99",
      originalPrice: "$6.99",
      image: "https://m.media-amazon.com/images/I/71P0fJL8XbL._SL1500_.jpg",
      description: "Short Square Fake Nails With Gold Glitter Design - Thanksgiving Maple Leaves False Nails - Nude Autumn Stick On Nails",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/4nK8E3T"
    },
    {
      id: 30,
      name: "Maple Leaves Acrylic Nails",
      price: "$6.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71wdZ4-ZQXL._SX679_.jpg",
      description: "Maple Leaves Acrylic Nails Thanksgiving Stick on Nails Full Cover Autumn False Nails Designs or Women Manicure Decoration 24Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/3KpjePr"
    },
    {
      id: 31,
      name: "Nails Autumn Fake Nail",
      price: "$5.98",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71Ur1fM4EqL._SX679_.jpg",
      description: "Medium French Nails Handmade Thanksgiving Nail Art for Holiday, Vacation, Birthday Nail Decoration for Women",
      isNew: true,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/4pxN9oF"
    },
    {
      id: 32,
      name: "Flower Press on Nails Short",
      price: "$4.59",
      originalPrice: "$7.99",
      image: "https://m.media-amazon.com/images/I/71jGCB4NcwL._SX679_.jpg",
      description: "Almond Fall Nails Press ons Short Fake Nails with Floral Design Glue on Nails Glossy Floral False Nails Reusable Full Cover Acrylic Stick on Nails for Women Girls 30 Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/4nratTS"
    },
    {
      id: 33,
      name: "Colorful Floral Full Cover",
      price: "$5.98",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71s4YxUMdML._SX679_.jpg",
      description: "Floral Full Cover Glossy Spring and Summer Stick Glue on Nails for Women Girls 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/4pzbpqJ"
    },
    {
      id: 34,
      name: "Short Fake Nails Colorful Flower Heart",
      price: "$6.98",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71fGpir2vDL._SX679_.jpg",
      description: "Red Full Cover False Nails Glossy Artificial Stick on Nails Women Girls 24 Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/423CnN2"
    },
    {
      id: 35,
      name: "Rose Red Yellow Flowers Design",
      price: "$6.56",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/61emr0kxzSL._SX679_.jpg",
      description: "Acrylic Nails Press ons Rose Red Full Cover False Nails Glossy Stick on Nails for Women Girls 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/46RAaXE"
    },
    {
      id: 36,
      name: "Fall Press on Nails Short Square Fake Nails",
      price: "$6.90",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71TOhnNpGHL._SX679_.jpg",
      description: "Floral Designs Yellow Nails Press ons Grey Acrylic Nails Glossy Glue on Nails Fall Flower Leaves Artificial Stick on Nails for Women Girls 24 Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/46GXrdF"
    },
    {
      id: 37,
      name: "Pink Fake Nails with 3D Gold Stripes Designs",
      price: "$5.98",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71ta31hsiWL._SX679_.jpg",
      description: "White French Tips Fall Nails Press ons Winter False Nails Acrylic Glue on Nails Glossy Stick on Nails for Women 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/4gGSnL1"
    },
    {
      id: 38,
      name: "Almond Fake Green Full Cover",
      price: "$8.49",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/41IMI97CquL._SY300_SX300_QL70_FMwebp_.jpg",
      description: "Fall Press on Nails Long Acrylic Almond Fake Green Full Cover For Women",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/47U2GZL"
    },
    {
      id: 39,
      name: "White Almond Press on Nails",
      price: "$8.49",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/51PYmzASCsL._SX679_.jpg",
      description: "White Almond Press on Nails Medium Fake Nails Nude Stick on Nails Embossed Nails with Daisy Design",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/3KaV6Aa"
    },
    {
      id: 40,
      name: "Fake Nails with Flowers Design",
      price: "$8.49",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/51gSLjFwTvL._SX679_.jpg",
      description: "Almond Press on Nails Medium Fake Nails with Flowers Design Green Nails for Women 24 PCs/Set",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/3VxjGNX"
    },
    {
      id: 41,
      name: "Almond White Stick on Nails",
      price: "$8.49",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/51JZnSV55bL._SX679_.jpg",
      description: "French Tip Press on Nails Medium Fake Nails Almond White Stick on Nails with Butterfly Design",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/3VtpdoR"
    },
    {
      id: 42,
      name: "French Tip Press on Nails",
      price: "$8.49",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/51NKJ4kY9dL._SX679_.jpg",
      description: "French Tip Press on Nails Medium Acrylic Nails White Nails Black Stick on Nails with Rhinestones Coffin Fake Nails",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/4mshH8B"
    },
    {
      id: 43,
      name: "Flowers Design Almond Fake nails",
      price: "$7.91",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/51PjR7yu7eL._SX679_.jpg",
      description: "French Tip Press on Nails Medium Acrylic Nails with Flowers Design Almond Fake Nails Nude Nails for Women",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/3KheTOi"
    },
    {
      id: 44,
      name: "White Press on Nails with Flowers Design",
      price: "$8.49",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/51SPkr8BFAL._SX679_.jpg",
      description: "French Tip Press on Nails Medium Fake Nails White Press on Nails with Flowers Design Almond Acrylic Nails",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/3KmK0b7"
    },
    {
      id: 45,
      name: "Gold Leaf Press on Nails",
      price: "$6.49",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/61s9JUqiVNL._SX679_.jpg",
      description: "Full Cover Nude False Nails with Matte Designs Autumn Acrylic Nails Leaf Glue on Nails for Women Girls Nail Supplies",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/4mzV6H7"
    },
    {
      id: 46,
      name: "Long Stiletto Gold Bow Fake Nails",
      price: "$3.99",
      originalPrice: "$6.99",
      image: "https://m.media-amazon.com/images/I/71+rzc5tf4L._SX679_.jpg",
      description: "Bows Charms False Nails with Glossy Reusable Red French Acrylic Nails Full Cover Nail Tips for Women Girl Nail Designs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/46klOPq"
    },
    {
      id: 47,
      name: "Cherry Press-On Nails",
      price: "$3.99",
      originalPrice: "$6.99",
      image: "https://m.media-amazon.com/images/I/61OxR2aV3XL._SX679_.jpg",
      description: "Short Square Shape, Wine Red, Full Cover False Nails with Designs, Reusable, Solid Color Acrylic, French, Press-Ons for Women & Girls",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Cozy Vibes",
      affiliateUrl: "https://amzn.to/48x01p0"
    },
    {
      id: 48,
      name: "Autumn Flower Press on Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/61G0KjQwzSL._SX679_.jpg",
      description: "Grid Designs Cute Mushroom Floral False Nails Glue on Nails Full Cover Solid Color Acrylic Nails for Women Girls Manicure Art 24Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Fall Glamour",
      affiliateUrl: "https://amzn.to/4pzbMBD"
    },
    {
      id: 49,
      name: "Autumn Maple Leaves Press On",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/619Wx6jQ+ZL._SX679_.jpg",
      description: "French Tip Square Shape Thanksgiving False Nails with Glitter Designs Reusable Maple Leaf Acrylic Stick On Nails",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Autumn Elegance",
      affiliateUrl: "https://amzn.to/3VzSsX1"
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
            <p className="text-sm text-amber-200 mb-4 italic">
              Prices may vary with time - Shop now for best deals
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

                {/* Discount Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    SAVE {Math.round(((parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                  </span>
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
              href="https://amzn.to/46v6tdC"
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
                review: "The Maple Leaf Design Autumn False Nail are absolutely perfect for fall! Love the seasonal vibes.",
                product: "Maple Leaf Design Autumn False Nail"
              },
              {
                name: "Jessica R.",
                review: "Fall Maple Leaf Press on Nails are stunning! The finish is so smooth and elegant.",
                product: "Fall Maple Leaf Press on Nails"
              },
              {
                name: "Amanda K.",
                review: "Short Square Fake Nails with Maple Leaf Design are my new favorite! Perfect for autumn and gets so many compliments.",
                product: "Short Square Fake Nails with Maple Leaf Design"
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
                name: "christmas",
                displayName: "Christmas Nails",
                image: "https://m.media-amazon.com/images/I/41y5EdmY7-L._SY300_SX300_QL70_FMwebp_.jpg",
                gradient: "from-green-600 to-red-600"
              },
              {
                name: "new-year",
                displayName: "New Year Nails",
                image: "https://m.media-amazon.com/images/I/51ohp79t54L._SY300_SX300_QL70_FMwebp_.jpg",
                gradient: "from-yellow-400 to-pink-600"
              },
              {
                name: "trendy",
                displayName: "Trendy Nails",
                image: "https://m.media-amazon.com/images/I/41DFcu1W7QL._SY300_SX300_QL70_FMwebp_.jpg",
                gradient: "from-pink-500 to-violet-600"
              },
              {
                name: "winter",
                displayName: "Winter Nails",
                image: "https://m.media-amazon.com/images/I/71ere-tv9LL._AC_UL480_FMwebp_QL65_.jpg",
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

export default FallNailsCategory;
