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
    name: "Trendy Nails For Fresh Look",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/41XKiwAdVYL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Upgrade nails with trendy style looks.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/4nRgoRS"
  },
  {
    id: 2,
    name: "Chic Nail Designs To Try",
    price: "$9.99",
    originalPrice: "$15.99",
    image: "https://m.media-amazon.com/images/I/71mXN+S4YqL._SY450_.jpg",
    description: "Fresh chic nail designs for you.",
    isNew: false,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/4mAADlQ"
  },
  {
    id: 3,
    name: "Stylish Nails For Everyday",
    price: "$8.54",
    originalPrice: "$14.99",
    image: "https://m.media-amazon.com/images/I/4134NAOXcAL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Modern nails that match your vibe.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/4gIo2f5"
  },
  {
    id: 4,
    name: "Modern Nail Trends To Follow",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71kXyvrxQeL._SX679_.jpg",
    description: "Try trendy nails for stylish appeal.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/4pvDPBI"
  },
  {
    id: 5,
    name: "Elegant Nail Styles For You",
    price: "$8.54",
    originalPrice: "$14.99",
    image: "https://m.media-amazon.com/images/I/71FCxS2K4HL._SX679_.jpg",
    description: "Nails designed to keep you trendy.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/46nFZfn"
  },
  {
    id: 6,
    name: "Trendy Nails That Shine Bright",
    price: "$7.59",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71WjT+O+JjL._SX679_.jpg",
    description: "Catchy nail styles that look amazing.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/4gBXWtW"
  },
  {
    id: 7,
    name: "Simple Yet Trendy Nail Art",
    price: "$7.59",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71smY6TnuRL._SX679_.jpg",
    description: "Stay trendy with unique nail ideas.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/46Di4XY"
  },
  {
    id: 8,
    name: "Bold Nails For Fashion Lovers",
    price: "$7.59",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/61+sFRklxtL._SX679_.jpg",
    description: "Bold chic nails for daily fashion.",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/4ne3gWU"
  },
  {
    id: 9,
    name: "Fresh Nail Looks This Season",
    price: "$5.97",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/71xzgsGJ8vL._SX679_.jpg",
    description: "Fresh seasonal nail trends to try.",
    isNew: true,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/4pMn0mn"
  },
  {
    id: 10,
    name: "Trendy Nails For Any Mood",
    price: "$7.59",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/61kpGCf0euL._SX679_.jpg",
    description: "Trendy nail designs that inspire style.",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/3IHERKl"
  },
  {
    id: 11,
    name: "Classic Meets Trendy Nail Art",
    price: "$7.59",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71QIvhskHXL._SX679_.jpg",
    description: "Classic yet trendy looks for nails.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/48x278g"
  },
  {
    id: 12,
    name: "Stylish Nails For Daily Wear",
    price: "$7.59",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/713OkAwgtUL._SX679_.jpg",
    description: "Nails styled for daily chic wear.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/3IGY0vZ"
  },
  {
    id: 13,
    name: "Trendy Designs For Your Nails",
    price: "$8.54",
    originalPrice: "$14.99",
    image: "https://m.media-amazon.com/images/I/71QYRJ6gyzL._SX679_.jpg",
    description: "Creative trendy designs for perfect nails.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/3VTkzkh"
  },
  {
    id: 14,
    name: "Elegant Nails To Elevate Style",
    price: "$7.59",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/61FdNGklcdL._SX679_.jpg",
    description: "Elevate fashion with trendy nail ideas.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/46DZ8Zp"
  },
  {
    id: 15,
    name: "Nail Trends You'll Love",
    price: "$8.99",
    originalPrice: "$14.99",
    image: "https://m.media-amazon.com/images/I/61zF-d6E9jL._SY450_.jpg",
    description: "Trendy nail styles you will love.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/42axaTH"
  },
  // Additional 35 products for load more
  {
    id: 16,
    name: "Trendy Looks For Your Nails",
    price: "$7.59",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71XFSSGDE0L._SX679_.jpg",
    description: "New trendy nail looks for everyone.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/42cvTLP"
  },
  {
    id: 17,
    name: "Everyday Chic Nail Designs",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71uCqZQYFtL._SX679_.jpg",
    description: "Everyday nails styled with chic design.",
    isNew: false,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/428Ylyb"
  },
  {
    id: 18,
    name: "Fashion Nails With Trendy Touch",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71MwrH8qWeL._SX679_.jpg",
    description: "Fashion-forward nails with trendy ideas.",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/42cvRUd"
  },
  {
    id: 19,
    name: "Polished Nails For Modern Look",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71GToEpeNgL._SX679_.jpg",
    description: "Polished nails with a modern touch.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/4pDWuLP"
  },
  {
    id: 20,
    name: "Trendy Nail Ideas To Inspire",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71N7mS3dOEL._SX679_.jpg",
    description: "Get inspired with trendy nail looks.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/3KqSQER"
  },
  {
    id: 21,
    name: "Creative Trends For Your Nails",
    price: "$7.59",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/711ylX3kvqL._SX679_.jpg",
    description: "Creative designs that keep nails trendy.",
    isNew: true,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/4nSyeUB"
  },
  {
    id: 22,
    name: "Trendy Nails Made Simple",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/61m+FJrTI7L._SX679_.jpg",
    description: "Simple trendy styles for all nails.",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/4gLe5xs"
  },
  {
    id: 23,
    name: "Bright And Trendy Nail Styles",
    price: "$7.79",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71cwkhj4uEL._SX679_.jpg",
    description: "Bright stylish nail trends you'll love.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/3IiHouu"
  },
  {
    id: 24,
    name: "Cool Nail Designs To Try",
    price: "$5.55",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/71xHgO9M1WL._SX679_.jpg",
    description: "Cool nail designs for everyday looks.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/46GJc8B"
  },
  {
    id: 25,
    name: "Chic Nails That Catch Eyes",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71VAuKI96zL._SX679_.jpg",
    description: "Catch eyes with trendy chic nails.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/46TYAQb"
  },
  {
    id: 26,
    name: "Trendy Styles For Your Nails",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71KT8QWO1cL._SX679_.jpg",
    description: "Keep nails fresh with stylish designs.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/46zxRXU"
  },
  {
    id: 27,
    name: "Modern And Chic Nail Ideas",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/61yz-2+Aq6L._SX679_.jpg",
    description: "Modern chic nails for trendy vibes.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/46oAWve"
  },
  {
    id: 28,
    name: "Nail Trends That Stay Fresh",
    price: "$5.55",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/613vyqsX6oL._SX679_.jpg",
    description: "Trendy nails that suit your style.",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/48xijXa"
  },
  {
    id: 29,
    name: "Unique Nail Designs For You",
    price: "$7.99",
    originalPrice: "$13.99",
    image: "https://m.media-amazon.com/images/I/71wHappbOqL._SX679_.jpg",
    description: "Unique nail designs made for trends.",
    isNew: true,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/48zUUo3"
  },
  {
    id: 30,
    name: "Trendy Nails With Minimal Effort",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71K5fmvAphL._SX679_.jpg",
    description: "Stay stylish with minimal trendy effort.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/4myE4cz"
  },
  {
    id: 31,
    name: "Stylish Nail Art To Try",
    price: "$7.99",
    originalPrice: "$13.99",
    image: "https://m.media-amazon.com/images/I/712wYA-QmWL._SX679_.jpg",
    description: "Try chic nail art that's trendy.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/3IDylUR"
  },
  {
    id: 32,
    name: "Trendy Ideas For Bold Nails",
    price: "$7.99",
    originalPrice: "$13.99",
    image: "https://m.media-amazon.com/images/I/71Pcl3DvcYL._SX679_.jpg",
    description: "Bold trendy nails for unique fashion.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/3IBrrPV"
  },
  {
    id: 33,
    name: "Nails That Define Your Trend",
    price: "$7.99",
    originalPrice: "$13.99",
    image: "https://m.media-amazon.com/images/I/61wSldR7hIL._SX679_.jpg",
    description: "Nail designs that define your style.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/42MYfwa"
  },
  {
    id: 34,
    name: "Creative Nail Looks To Try",
    price: "$7.99",
    originalPrice: "$13.99",
    image: "https://m.media-amazon.com/images/I/610KoSgOmeL._SX679_.jpg",
    description: "Creative nail looks for trendy wear.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/3Vz6EQc"
  },
  {
    id: 35,
    name: "Elegant Yet Trendy Nail Ideas",
    price: "$8.99",
    originalPrice: "$14.99",
    image: "https://m.media-amazon.com/images/I/71Zdd+FUBqL._SX679_.jpg",
    description: "Elegant nail styles that stay trendy.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/46DZGhV"
  },
  {
    id: 36,
    name: "Fresh Nail Trends Every Day",
    price: "$8.99",
    originalPrice: "$14.99",
    image: "https://m.media-amazon.com/images/I/71WiD9NhDgL._SX679_.jpg",
    description: "Trendy fresh nails for every day.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/47ZNmL3"
  },
  {
    id: 37,
    name: "Simple And Stylish Nail Designs",
    price: "$6.96",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/61F7MgFw8QL._SX679_.jpg",
    description: "Simple chic designs to style nails.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/3VzbnkI"
  },
  {
    id: 38,
    name: "Trendy Nails For Every Outfit",
    price: "$6.96",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71670W5wHKL._SX679_.jpg",
    description: "Outfit-ready nails with trendy appeal.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/4mxAaAy"
  },
  {
    id: 39,
    name: "Chic Nail Styles That Last",
    price: "$4.96",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/61cbLNtFuzL._SX679_.jpg",
    description: "Chic styles that last on nails.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/4pvEFOS"
  },
  {
    id: 40,
    name: "Modern Nail Looks To Copy",
    price: "$6.96",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71gw5tFfR8L._SX679_.jpg",
    description: "Modern trendy nails for your look.",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/4nGR4hc"
  },
  {
    id: 41,
    name: "Trendy Touch For Perfect Nails",
    price: "$4.96",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/719JZ2ACqgL._SX679_.jpg",
    description: "Perfect nail touch with trendy designs.",
    isNew: true,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/3IyqxUu"
  },
  {
    id: 42,
    name: "Nail Trends With Extra Shine",
    price: "$5.96",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/61+kBuoVppL._SX679_.jpg",
    description: "Trendy shiny looks for nail lovers.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/4nDPYn3"
  },
  {
    id: 43,
    name: "Fresh Nail Styles To Inspire",
    price: "$6.29",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71Zkma7dYsL._SX679_.jpg",
    description: "Fresh inspiration for trendy nail art.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/4pKkixM"
  },
  {
    id: 44,
    name: "Creative Looks For Trendy Nails",
    price: "$6.96",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/7142Ne4-M1L._SX679_.jpg",
    description: "Creative trendy nails made just right.",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/429EwGY"
  },
  {
    id: 45,
    name: "Trendy Nails Made For You",
    price: "$7.68",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/51kiFrMLsUL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Trendy nails styled for your fashion.",
    isNew: false,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/46zy7WS"
  },
  {
    id: 46,
    name: "Nails That Match The Trends",
    price: "$6.80",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/41+E-NSc1sL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Nail looks made for trendy vibes.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/3IeNgoz"
  },
  {
    id: 47,
    name: "Trendy Vibes For Nail Lovers",
    price: "$7.56",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/81hnjIvkSlL._SX679_.jpg",
    description: "Trendy chic vibes for nail lovers.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/46UchP6"
  },
  {
    id: 48,
    name: "Stylish Nail Trends That Pop",
    price: "$7.56",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71sFbHxVcoL._SX679_.jpg",
    description: "Pop with stylish trendy nail ideas.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Nail Goals",
    affiliateUrl: "https://amzn.to/47UbrTz"
  },
  {
    id: 49,
    name: "Trendy Nail Ideas For All",
    price: "$7.56",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71dbGnhn-HL._SX679_.jpg",
    description: "Trendy nail designs made for all.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Trendy Vibes",
    affiliateUrl: "https://amzn.to/3KgK10t"
  },
  {
    id: 50,
    name: "Nail Looks That Stay Chic",
    price: "$7.56",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71-2idM70iL._SX679_.jpg",
    description: "Stay chic with nail trend looks.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Style Statement",
    affiliateUrl: "https://amzn.to/48w33K6"
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
    image: "https://m.media-amazon.com/images/I/61n1fQ4Em7L._SY450_.jpg",
    link: "/shop/fall"
  },
  {
    name: "Halloween Specials",
    image: "https://m.media-amazon.com/images/I/71PUcXj5YYL._SL1500_.jpg",
    link: "/shop/halloween"
  },
  {
    name: "Winter Wonderland",
    image: "https://m.media-amazon.com/images/I/5110tzvHbOL._SY300_SX300_QL70_FMwebp_.jpg",
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
      window.open('https://amzn.to/4nN0gk8');
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
