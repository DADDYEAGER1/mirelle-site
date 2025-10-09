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
    name: "Cozy Winter Nail Art Ideas",
    price: "$3.99",
    originalPrice: "$6.99",
    image: "https://m.media-amazon.com/images/I/71ere-tv9LL._SX679_.jpg",
    description: "Chic seasonal nail designs to elevate your winter style effortlessly.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/42645sr"
  },
  {
    id: 2,
    name: "Frosted Winter Nail Design",
    price: "$11.20",
    originalPrice: "$16.99",
    image: "https://m.media-amazon.com/images/I/41diirIwGpL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Trendy winter nail inspiration with soft frosted hues for any occasion.",
    isNew: false,
    isTrending: true,
    stockStatus: "low-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/3Vzrgrl"
  },
  {
    id: 3,
    name: "Elegant Winter Nail Inspiration",
    price: "$11.20",
    originalPrice: "$16.99",
    image: "https://m.media-amazon.com/images/I/71DKUaIzBtL._SX679_.jpg",
    description: "Stylish cold-season nail looks that enhance your beauty every day.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/4gIk0mX"
  },
  {
    id: 4,
    name: "Snowy White Winter Nails",
    price: "$11.20",
    originalPrice: "$16.99",
    image: "https://m.media-amazon.com/images/I/71Vc13c3QOL._SX679_.jpg",
    description: "Classic snowy shades that bring timeless charm to your winter nails.",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/42asFbL"
  },
  {
    id: 5,
    name: "Modern Winter Nail Trends",
    price: "$11.20",
    originalPrice: "$16.99",
    image: "https://m.media-amazon.com/images/I/71IHhqVdUeL._SX679_.jpg",
    description: "Fresh nail ideas to keep your winter manicure updated and stylish.",
    isNew: true,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/485awjn"
  },
  {
    id: 6,
    name: "Simple Winter Nail Styles",
    price: "$5.98",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/81a3XbCzOvL._SY450_.jpg",
    description: "Easy winter nail inspirations that combine comfort, elegance, and charm.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/4pzjNWZ"
  },
  {
    id: 7,
    name: "Glamorous Winter Nail Looks",
    price: "$5.98",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/81IEzE5aDPL._SY450_.jpg",
    description: "Shiny and elegant nail options perfect for parties and celebrations.",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/4gL99bU"
  },
  {
    id: 8,
    name: "Chic Winter Nail Colors",
    price: "$5.98",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/81Z4K2c196L._SY450_.jpg",
    description: "Fashionable shades ideal for brightening up chilly winter months easily.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/4gE5QD7"
  },
  {
    id: 9,
    name: "Winter Nail Art Inspiration",
    price: "$6.36",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/715ZBzAzbJL._SX679_.jpg",
    description: "Beautiful designs to help express your personal style this winter.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/42JZBYH"
  },
  {
    id: 10,
    name: "Classic Winter Nail Shades",
    price: "$7.98",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71SqVKDpklL._SX679_.jpg",
    description: "Traditional colors that stay relevant and stunning all through winter.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/46Dek8S"
  },
  {
    id: 11,
    name: "Trendy Winter Nail Designs",
    price: "$7.60",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/719YqRuZyEL._SX679_.jpg",
    description: "Eye-catching patterns and shades for your perfect cold-season manicure.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/4nO0d7R"
  },
  {
    id: 12,
    name: "Minimalist Winter Nail Ideas",
    price: "$5.60",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/614DnjFLz1L._SX679_.jpg",
    description: "Simple yet elegant nail designs that bring sophistication to winter.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/4nksymh"
  },
  {
    id: 13,
    name: "Frosty Blue Winter Nails",
    price: "$6.36",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/71gu7-RqZnL._SX679_.jpg",
    description: "Cool blue tones that reflect the essence of frosty winter mornings.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/3IylEe6"
  },
  {
    id: 14,
    name: "Stylish Winter Nail Looks",
    price: "$4.60",
    originalPrice: "$8.99",
    image: "https://m.media-amazon.com/images/I/71QaEe2Z4zL._SX679_.jpg",
    description: "Chic designs to make your winter nails stand out gracefully.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/4nhjPRN"
  },
  {
    id: 15,
    name: "Seasonal Winter Nail Inspiration",
    price: "$6.36",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/71QcSH4PulL._SL1500_.jpg",
    description: "Perfectly curated nail designs suited for cozy winter days.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/4nmAgMQ"
  },
  // Additional 35 products (16-50)
  {
    id: 16,
    name: "Shimmery Winter Nail Styles",
    price: "$6.36",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/714f58-ImXL._SX679_.jpg",
    description: "Sparkling shades to make your nails dazzle during cold months.",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/46jAtua"
  },
  {
    id: 17,
    name: "Soft Winter Nail Colors",
    price: "$6.36",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/51Wib12LKbL.jpg",
    description: "Gentle tones designed to complement your everyday winter outfits beautifully.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/3Ki7fDn"
  },
  {
    id: 18,
    name: "Polished Winter Nail Designs",
    price: "$6.36",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/71McdeU-6DL._SX679_.jpg",
    description: "Refined nail inspirations for a stylish and professional winter look.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/4gDKvKd"
  },
  {
    id: 19,
    name: "Gleaming Winter Nail Ideas",
    price: "$6.36",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/714E0trqWWL._SX679_.jpg",
    description: "Radiant shades to highlight your nails with a winter-ready charm.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/3KhMpEa"
  },
  {
    id: 20,
    name: "Feminine Winter Nail Styles",
    price: "$7.50",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71MLgTt1-AL._SX679_.jpg",
    description: "Elegant nail choices crafted for a soft and feminine winter feel.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/4gZ3Pln"
  },
  {
    id: 21,
    name: "Modern Frost Nail Art",
    price: "$8.80",
    originalPrice: "$14.99",
    image: "https://m.media-amazon.com/images/I/71Kzp5C6j+L._SX679_.jpg",
    description: "Trendy frosted styles that perfectly capture the essence of winter.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/3If6iLz"
  },
  {
    id: 22,
    name: "Classy Winter Nail Inspiration",
    price: "$6.36",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/714lyzhqppL._SX679_.jpg",
    description: "Timeless nail looks that keep your manicure elegant all season.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/47UVUD1"
  },
  {
    id: 23,
    name: "Sparkling Winter Nail Trends",
    price: "$6.36",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/71Z-jPTxf3L._SX679_.jpg",
    description: "Shimmery nail designs that add glamour to your seasonal style.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/3VzrUVN"
  },
  {
    id: 24,
    name: "Neutral Winter Nail Ideas",
    price: "$6.36",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/710q8+yA1VL._SX679_.jpg",
    description: "Versatile shades that effortlessly match all winter fashion trends.",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/4819ViE"
  },
  {
    id: 25,
    name: "Cozy-Inspired Winter Nails",
    price: "$6.36",
    originalPrice: "$10.99",
    image: "https://m.media-amazon.com/images/I/719dd+kNWTL._SX679_.jpg",
    description: "Warm-toned nails that create a cozy feeling throughout colder days.",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/3IHAD5r"
  },
  {
    id: 26,
    name: "Delicate Winter Nail Art",
    price: "$5.50",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/71t0vKjNsGL._SX679_.jpg",
    description: "Subtle and stylish nail inspirations that elevate your everyday winter look.",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/3IylXWi"
  },
  {
    id: 27,
    name: "Frost Kissed Nail Designs",
    price: "$5.50",
    originalPrice: "$9.99",
    image: "https://m.media-amazon.com/images/I/71IpsgNn2TL._SX679_.jpg",
    description: "Soft icy touches bringing magical winter-inspired beauty to your nails.",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/3IAowXK"
  },
  {
    id: 28,
    name: "Christmas Press On Nails",
    price: "$8.99",
    originalPrice: "$14.99",
    image: "https://m.media-amazon.com/images/I/41gIkx7G6TL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Snowflake Rectangle Fake Nails, Reusable Artificial Nails For Women Glue On Nails 24 Pcs",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/4pMjuZd"
  },
  {
    id: 29,
    name: "Sparkling Rhinestones",
    price: "$8.99",
    originalPrice: "$14.99",
    image: "https://m.media-amazon.com/images/I/71E9I+QidKL._SY450_.jpg",
    description: "Sparkling Rhinestones, Black Reusable Artificial Nails, Women's Acrylic Nails for Christmas 24 pcs",
    isNew: true,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/46mcieD"
  },
  {
    id: 30,
    name: "Santa Claus Pattern",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71D4TdOXdmL._SY450_.jpg",
    description: "24 Pcs Red Long Pressed Nails, Santa Claus Pattern Acrylic Pressed Gel, Ballerina Manicure False Nails，Perfect for for Women and Girls Wear",
    isNew: false,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/4nhkqmv"
  },
  {
    id: 31,
    name: "Snowflake Pattern Nude Acrylic Fake Nails",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71ub7T4DLJL._SY450_.jpg",
    description: "Christmas Tip Nails, Almond Fake Short Nails, Snowflake Pattern Nude Acrylic Fake Nails, Christmas Nail Art",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/3VzseDZ"
  },
  {
    id: 32,
    name: "Flesh Color Press-On Nails",
    price: "$8.99",
    originalPrice: "$14.99",
    image: "https://m.media-amazon.com/images/I/71Aaows1WvL._SY450_.jpg",
    description: "Flesh Color Press-On Nails, Long Fake Nails with Sparkling Rhinestones, Reusable Artificial Nails, Women's Artificial Nails",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/47ZJCJv"
  },
  {
    id: 33,
    name: "Christmas Rectangle Fake Nails",
    price: "$8.99",
    originalPrice: "$14.99",
    image: "https://m.media-amazon.com/images/I/71QEKyrCUbL._SY450_.jpg",
    description: "Red Press On Nails, Christmas Rectangle Fake Nails, Reusable Artificial Nails For Women Glue On Nails 24 Pcs",
    isNew: true,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/3IEKlpa"
  },
  {
    id: 34,
    name: "Colorful Wave Fake Nails",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71yQgbqb8uL._SL1500_.jpg",
    description: "Medium Almond Nail, Colorful Wave Fake Nails, Glitter Artificial Nails for Women and Girls Daily Wear 24 Pcs",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/3Id2cna"
  },
  {
    id: 35,
    name: "Long Coffin French Pink Glitter Gel Fake Nails",
    price: "$8.99",
    originalPrice: "$14.99",
    image: "https://m.media-amazon.com/images/I/71k2CbQtfZL._SY450_.jpg",
    description: "Full Coverage Acrylic Fake Nails for Women Girls 24 pcs",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/4nDLsVD"
  },
  {
    id: 36,
    name: "Snowflake Deer Pattern Acrylic Nails",
    price: "$7.99",
    originalPrice: "$12.99",
    image: "https://m.media-amazon.com/images/I/71YiYYewsxL._SY450_.jpg",
    description: "Women's and Girls Glued Nails Suitable for Winter Christmas",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/4nMgxFY"
  },
  {
    id: 37,
    name: "Snowflake Pattern Acrylic Nails",
    price: "$8.99",
    originalPrice: "$14.99",
    image: "https://m.media-amazon.com/images/I/71ufZIjMOqL._SY450_.jpg",
    description: "Christmas Winter Ladies and Girls Glued Nails 24 pcs",
    isNew: true,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/3IFY7I6"
  },
  {
    id: 38,
    name: "Cute Fake Nails with Multiple Colors",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71rw8iU3QbL._SY450_.jpg",
    description: "Artificial Nails for Women and Girls for Daily and Christmas Wear 24 Pcs",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/4nSuouF"
  },
  {
    id: 39,
    name: "Christmas Press on Nails",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71hTIKw2iBL._SX679_.jpg",
    description: "Snowflake Star Designs Xmas Black French Tip False Nail Winter Acrylic Stick on Nail for Women 24 Pcs",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/4gE7m8h"
  },
  {
    id: 40,
    name: "Square Fake Nails with Snowflake Designs",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/61lcaVBlsLL._SX679_.jpg",
    description: "Snowflake Designs Pink Gradient Xmas False Nail Glitter Full Cover Winter Acrylic Stick on Nail for Women 24 Pcs",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/3IoZBqd"
  },
  {
    id: 41,
    name: "Gingerbread Man Candy Cane Designs",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/61P58BNs4-L._SX679_.jpg",
    description: "Xmas French Tip False Nails Full Cover Winter Stick on Nail for Women 24 Pcs",
    isNew: true,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/4nRpePB"
  },
  {
    id: 42,
    name: "Square Fake Nail with Snowflake Designs",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/61DbXNPwuLL._SX679_.jpg",
    description: "Xmas False Nails Pink Glitter Full Cover Winter Stick on Nail fo",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/46DmO00"
  },
  {
    id: 43,
    name: "False Nails White Glitter",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71L-1ex+HZL._SX679_.jpg",
    description: "Full Cover Winter Stick on Nail for Women",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/3IEKgll"
  },
  {
    id: 44,
    name: "Almond Fake Nails with Snowflake Designs",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71oy0bSC8RL._SX679_.jpg",
    description: "French Tip False Nail Winter Acrylic Stick on Nail for Women 24 Pcs",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/4nSuwdD"
  },
  {
    id: 45,
    name: "Coffin Fake Nail with Box Stripe",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/7175Me-zLEL._SX679_.jpg",
    description: "French Tip False Nails Glossy Full Cover Winter Stick on Nail for Women 24 Pcs",
    isNew: true,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/3ICgn5c"
  },
  {
    id: 46,
    name: "Medium Almond Fake Nail",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71j6ahWMnGL._SX679_.jpg",
    description: "Snowflake Designs Xmas Silver Glitter French Tip False Nails Winter Acrylic Stick on Nail for Women 24 Pcs",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/4nnWQVk"
  },
  {
    id: 47,
    name: "Snowflake Candy Gingerbread Man Bow Designs",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/610ER0NYcEL._SX679_.jpg",
    description: "Xmas False Nails Winter Acrylic Matte Stick on Nail for Women 24 Pcs",
    isNew: true,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/4mBvTMt"
  },
  {
    id: 48,
    name: "Snowflake Christmas Tree Designs",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/61+ixb7jKqL._SX679_.jpg",
    description: "Xmas False Nail Winter Acrylic Stick on Nail for Women 24 Pcs",
    isNew: false,
    isTrending: false,
    stockStatus: "in-stock",
    cta: "Ice Queen",
    affiliateUrl: "https://amzn.to/42OGm02"
  },
  {
    id: 49,
    name: "Short Square Fake Nails with Snowflake Box Designs",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/71oeaXQtEAL._SX679_.jpg",
    description: "Xmas Hat French Tip False Nail Winter Pink Glitter Stick on Nail",
    isNew: true,
    isTrending: false,
    stockStatus: "low-stock",
    cta: "Winter Wonder",
    affiliateUrl: "https://amzn.to/4gBVsvC"
  },
  {
    id: 50,
    name: "Green French Tip Medium Fake Nails",
    price: "$6.99",
    originalPrice: "$11.99",
    image: "https://m.media-amazon.com/images/I/81vLh62a+5L._SY450_.jpg",
    description: "Glossy Finished Reusable False Nails with Adhesive Glue Tabs",
    isNew: false,
    isTrending: true,
    stockStatus: "in-stock",
    cta: "Cozy Vibes",
    affiliateUrl: "https://amzn.to/3IhECpj"
  }
];

// Testimonials data
const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    review: "The Cozy Winter Nail Art Ideas are absolutely stunning! The quality exceeded my expectations and lasted weeks.",
    verified: true
  },
  {
    name: "Emma L.",
    review: "Perfect winter vibes! The Frosted Winter Nail Design set got so many compliments at holiday parties.",
    verified: true
  },
  {
    name: "Jessica R.",
    review: "Amazing customer service and beautiful packaging. The Elegant Winter Nail Inspiration designs are so unique and elegant.",
    verified: true
  }
];

// Related categories data
const relatedCategories = [
  {
    name: "Fall",
    image: "https://m.media-amazon.com/images/I/61n1fQ4Em7L._SY450_.jpg",
    link: "/shop/fall",
    description: "Autumn-inspired nail designs"
  },
  {
    name: "Trendy", 
    image: "https://m.media-amazon.com/images/I/41o9b6VRcmL._SY300_SX300_QL70_FMwebp_.jpg",
    link: "/shop/trendy",
    description: "Latest trending nail styles"
  },
  {
    name: "Christmas",
    image: "https://m.media-amazon.com/images/I/41XKiwAdVYL._SY300_SX300_QL70_FMwebp_.jpg", 
    link: "/shop/christmas",
    description: "Festive holiday nail collections"
  }
];

const WinterNailsCategory = () => {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(allProducts.slice(0, 15));
  const [currentFilter, setCurrentFilter] = useState<string>("All Products");
  const [showLoadMore, setShowLoadMore] = useState<boolean>(true);
  const [showAffiliateButton, setShowAffiliateButton] = useState<boolean>(false);

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
            <p className="text-sm text-blue-200 mb-4 italic">
              Prices may vary with time - Shop now for best deals
            </p>
            <div className="flex items-center justify-center bg-white/20 px-6 py-2 rounded-full text-white text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              50 Winter Designs Available
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

                {/* Discount Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    SAVE {Math.round(((parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                  </span>
                </div>

                {/* Stock status indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
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
              onClick={() => window.open('https://amzn.to/46wNejL')}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:via-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Shop Complete Winter Collection
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
