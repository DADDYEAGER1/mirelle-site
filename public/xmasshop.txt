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

const ChristmasNailsCategory = () => {
  const [activeFilter, setActiveFilter] = useState('All Products');
  const [showAllProducts, setShowAllProducts] = useState(false);

  const initialProducts: Product[] = [
    {
      id: 1,
      name: "Red French Tip Fake Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71CBJuoT6rL._SX679_.jpg",
      description: "False Nails with Designs Cute Christmas Hat Snowflake Bow Glossy Glue on Nails for Women Girls 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/3W95haQ"
    },
    {
      id: 2,
      name: "Full Cover Elk Holly False Nails",
      price: "$6.99",
      originalPrice: "$11.99",
      image: "https://m.media-amazon.com/images/I/71EVLUzXlNL._SX679_.jpg",
      description: "Full Cover Elk Holly False Nails with Designs Glossy Glue on Nails Cute Acrylic Nails Manicure Artificial Nails for Women Girls 24Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/46ShK95"
    },
    {
      id: 3,
      name: "Medium Almond Winter Fake Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71EaoVoCteL._SX679_.jpg",
      description: "French Tip Fake Nails with Xmas Hat Designs Glossy Glue on Nails Cute Acrylic Manicure",
      isNew: true,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/46lXwVf"
    },
    {
      id: 4,
      name: "Christmas Press on Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71v-89ByXIL._SX679_.jpg",
      description: "Fake Nails Full Cover Red French Tip Fake Nails with Xmas Hat Designs Glossy Glue on Nails Cute Acrylic Manicure",
      isNew: false,
      isTrending: true,
      stockStatus: "low-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/46GTvtp"
    },
    {
      id: 5,
      name: "Xmas Hat Designs Glossy Glue on Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71p4yAwhD4L._SX679_.jpg",
      description: "French Tip Fake Nails with Xmas Hat Designs Glossy Glue on Nails Cute Acrylic Nails Artificial Nails for Women Girls 24Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/4myfmZM"
    },
    {
      id: 6,
      name: "Christmas Tree Snowflake Swirl",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/719prULbaRL._SX679_.jpg",
      description: "Red Fake Nails False Nails with Designs Christmas Tree Snowflake Swirl Glossy Glue on Nails Stick on Nails for Women Girls 24 Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/3IrIRi4"
    },
    {
      id: 7,
      name: "Snowflake Shimmer Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71SYbKM4pPL._SX679_.jpg",
      description: "French Tip Fake Nails Green False Nails with Designs Snowflake Shimmer Nails Glossy Glue on Nails Stick on Nails for Women Girls 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/4pEm1o8"
    },
    {
      id: 8,
      name: "Cute Cake Candy Full Cover",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71xesbf7BxL._SX679_.jpg",
      description: "Brown French Tip Fake Nails False Nails with Designs Cute Cake Candy Full Cover Glossy Glue on Nails Stick on Nails for Women Girls 24 Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/46mFqlS"
    },
    {
      id: 9,
      name: "White Bow Gingerbread Man",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71d5N2BQWJL._SX679_.jpg",
      description: "Almond MABKJLF Cute Fake Nails False Nails with Designs White Bow Gingerbread Man Glossy Glue on Nails Stick on Nails for Women Girls 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/47XtY1p"
    },
    {
      id: 10,
      name: "Candy Cane Glitter Glossy Glue on Nails",
      price: "$7.77",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/71bK2wPRpCL._SX679_.jpg",
      description: "Full Cover White Snow False Nails with Designs Candy Cane Glitter Glossy Glue on Nails Acrylic Manicure Artificial Nails for Women Girls",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/4gCe6nj"
    },
    {
      id: 11,
      name: "Snowflake Rhinestones Glossy Glue on Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/61GNYqpBJQL._SX679_.jpg",
      description: "Pink & White Ombre Fake Nails False Nails with Designs Snowflake Rhinestones Glossy Glue on Nails Stick on Nails for Women Girls 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/4mszyMD"
    },
    {
      id: 12,
      name: "Cute Christmas Hat",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/61SQxbJZJqL._SX679_.jpg",
      description: "Christmas Press on Nails Medium Almond MABKJLF Red French Tip",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/46v2g9O"
    },
    {
      id: 13,
      name: "Designs Silver Glitter Swirl Glossy Glue on Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71QiUKO-nVL._SX679_.jpg",
      description: "Christmas Press on Nails Medium Almond MABKJLF Red French Tip Fake Nails False Nails with Designs Silver Glitter Swirl Glossy Glue on Nails",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/46J4kv8"
    },
    {
      id: 14,
      name: "Almond MABKJLF White French Tip",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71gyg085s7L._SX679_.jpg",
      description: "Fake Nails False Nails with Designs Full Cover Glossy Glue on Nails Stick on Nails Acrylic Nails for Women Girls 24 Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/4mwR7v5"
    },
    {
      id: 15,
      name: "Snowflake Rhinestones",
      price: "$7.99",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/710prCczxCL._SX679_.jpg",
      description: "Christmas Press on Nails Short Almond MABKJLF French Tip Fake Nails Pink False Nails with Designs Snowflake Rhinestones Full Cover Glossy",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/4muIIbm"
    }
  ];

  const additionalProducts: Product[] = [
    {
      id: 16,
      name: "Wine Red Fake Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71FzNfKZKQL._SX679_.jpg",
      description: "Christmas Press on Nails Short Almond MABKJLF Wine Red Fake Nails False Nails with Christmas Tree Designs Winter False Nails Glossy Glue on Nails Xmas Acrylic Nails for Women Girls 24 Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/42FYLvV"
    },
    {
      id: 17,
      name: "Swirl Snowflake Red & White",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71PVXHeF6PL._SX679_.jpg",
      description: "Christmas Press on Nails Medium Almond MABKJLF French Tip Fake Nails False Nails with Designs Swirl Snowflake Red & White Glossy Glue on Nails",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/4mQpEox"
    },
    {
      id: 18,
      name: "Santa Hat Bow",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71DHBVnVTVL._SX679_.jpg",
      description: "Christmas Press on Nails Medium Almond MABKJLF Red French Tip",
      isNew: false,
      isTrending: true,
      stockStatus: "low-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/4mwReqv"
    },
    {
      id: 19,
      name: "Nightmare Christmas Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71bdgB15-hL._SX679_.jpg",
      description: "Christmas Press on Nails Medium Almond Winter Fake Nails Red Matte Full Cover Nightmare Christmas Nails",
      isNew: true,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/427kFIv"
    },
    {
      id: 20,
      name: "Snowflake Reindeer Glossy Glue on Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71hxowxKcyL._SX679_.jpg",
      description: "Christmas Press on Nails Medium Almond MABKJLF Winter Fake Nails Nude Red False Nails with Designs Snowflake Reindeer Glossy Glue on Nails",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/4ndmXOF"
    },
    {
      id: 21,
      name: "Reindeer Designs",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/716cur08RaL._SX679_.jpg",
      description: "Winter Press on Nails - Medium Almond Nude Pink False Nails with Heart & Reindeer Designs, Silver Glitter, Glossy Finish",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/4nmHznM"
    },
    {
      id: 22,
      name: "Stars Gnome Full Cover Glossy Glue on Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71qt-mIiALL._SX679_.jpg",
      description: "Purple Shimmer French Tip Fake Nails False Nails with Designs Stars Gnome Full Cover Glossy Glue on Nails Stick on Nails for Women",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/4mwRfe3"
    },
    {
      id: 23,
      name: "Candy Stars Full Cover Glossy Glue on Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71zyjYWtJ3L._SX679_.jpg",
      description: "Christmas Press on Nails Short Almond MABKJLF French Tip Fake Nails",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/4pEsPBY"
    },
    {
      id: 24,
      name: "Cover Candy Cane",
      price: "$7.77",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/61PAybIalLL._SX679_.jpg",
      description: "Christmas Press on Nails Short Almond Winter French Tip Fake Nails Red Full Cover Candy Cane False Nails with Designs Glossy Glue on Nails",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/46PsbdA"
    },
    {
      id: 25,
      name: "Christmas Hat Snowflake Glossy Glue on Nails",
      price: "$7.77",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/61zDTSQkOZL._SX679_.jpg",
      description: "Red Fake Nails Winter False Nails with Designs Christmas Hat Snowflake Glossy Glue on Nails Xmas Acrylic Nails for Women Girls 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/46CmJJZ"
    },
    {
      id: 26,
      name: "Candy Cane Holly False Nails with Xmas Lights",
      price: "$7.77",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/71sK-E9116L._SX679_.jpg",
      description: "Christmas Press on Nails Medium Almond Winter French Tip Fake Nails Candy Cane Holly False Nails with Xmas Lights",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/42NMx4v"
    },
    {
      id: 27,
      name: "Cover Pink Swirl False Nails",
      price: "$7.77",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/71u7SXnUFUL._SX679_.jpg",
      description: "Cover Pink Swirl False Nails with Designs Glossy Glue on Nails White Acrylic Nails Artificial Nails for Women Girls 24Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/48sqFiQ"
    },
    {
      id: 28,
      name: "Christmas Hat Snowflake Bow Flames",
      price: "$6.99",
      originalPrice: "$11.99",
      image: "https://m.media-amazon.com/images/I/61zDTSQkOZL._SX679_.jpg",
      description: "Christmas Hat Snowflake Bow Flames Glossy Glue on Nails Acrylic Nails for Women Girls 24 Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/46GUmu7"
    },
    {
      id: 29,
      name: "Cane Candy Bow Full Cover",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71VhR5-HDOL._SX679_.jpg",
      description: "Winter False Nails with Designs Cane Candy Bow Full Cover Glossy Glue on Nails Xmas Acrylic Nails for Women Girls 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/46wvjK4"
    },
    {
      id: 30,
      name: "Snowflake Glitter Blue White Glossy Glue on Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/61P+c6iNJML._SX679_.jpg",
      description: "French Tip Fake Nails Winter False Nails with Designs Snowflake Glitter Blue White Glossy Glue on Nails Xmas Acrylic Nails for Women Girls 24 Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/4mAafbA"
    },
    {
      id: 31,
      name: "Colorful Designs & Christmas Tree",
      price: "$7.99",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/71+LAUHAt3L._SX679_.jpg",
      description: "Christmas & Winter Glossy Glue on Nails - Medium Almond Acrylic French Tip False Nails with Colorful Designs",
      isNew: true,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/48y2PCd"
    },
    {
      id: 32,
      name: "Evergreen Bough Snowflake Mistletoe Glossy Glue on Nails",
      price: "$7.99",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/7164iNvfQwL._SX679_.jpg",
      description: "Evergreen Bough Snowflake Mistletoe Glossy Glue on Nails Xmas Acrylic Nails for Women Girls 24 Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/46GUoCf"
    },
    {
      id: 33,
      name: "Christmas Tree Designs Glitter Full Cover",
      price: "$7.99",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/71DIV+gUN3L._SX679_.jpg",
      description: "Green French Tip False Nails with Christmas Tree Designs Glitter Full Cover Glossy Glue on Nails Xmas Acrylic Nails for Women Girls 24 Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/4nNDdG1"
    },
    {
      id: 34,
      name: "Sliver Glitter",
      price: "$7.99",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/712O25QpuLL._SX679_.jpg",
      description: "Fake Nude Full Cover White Snow False With Designs Sliver Glitter Glossy Glue on Acrylic Manicure Artificial for Women Girls 24Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/46F93hb"
    },
    {
      id: 35,
      name: "Silver Glitter Snowflake",
      price: "$7.99",
      originalPrice: "$12.99",
      image: "https://m.media-amazon.com/images/I/71pxOxGi9UL._SX679_.jpg",
      description: "Christmas Press on Nails Medium Almond MABKJLF French Tip Fake Nails Winter False Nails with Designs Silver Glitter Snowflake Glossy Glue on Nails Xmas Acrylic Nails for Women",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/4nJDWYy"
    },
    {
      id: 36,
      name: "Snow Tree False Nails with Swirl",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/71tMpOkV+zL._SX679_.jpg",
      description: "French Winter Fake Nails Nude Full Cover Gnome Snow Tree False Nails with Swirl Designs Glitter Glossy Glue on Nails Acrylic Artificial Nails",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/3Vupgkj"
    },
    {
      id: 37,
      name: "Pink Full Cover Holly False Nails",
      price: "$6.99",
      originalPrice: "$11.99",
      image: "https://m.media-amazon.com/images/I/71jTBKR0thL._SX679_.jpg",
      description: "French Fake Nails Pink Full Cover Holly False Nails with Designs Glossy Glue on Nails Acrylic Nails Manicure Artificial Nails for Women Girls 24Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/4nSgZTr"
    },
    {
      id: 38,
      name: "White Snowflake False Nails",
      price: "$5.99",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/61q7Bk3R-DL._SX679_.jpg",
      description: "Christmas Press on Nails Medium Almond French Tip Winter Fake Nails Nude Full Cover White Snowflake False Nails with Designs Glossy Glue on Nails",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/426QwJf"
    },
    {
      id: 39,
      name: "Gingerbread Man Cane Nude Pink",
      price: "$6.99",
      originalPrice: "$11.99",
      image: "https://m.media-amazon.com/images/I/51GBBP-XS1L._SX679_.jpg",
      description: "Christmas Gingerbread Man Cane Nude Pink Nails Press ons Medium Square Fake Nails for Women Full Cover Cute Christmas Glue on Nails Holiday Nails",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/4nFTWuM"
    },
    {
      id: 40,
      name: "Rhinestone and Snowflake",
      price: "$4.99",
      originalPrice: "$8.99",
      image: "https://m.media-amazon.com/images/I/61GsbwH17aL._SX679_.jpg",
      description: "Rhinestone and Snowflake Designs Full Cover Gradient Stick on Nails Reusable Nails Black Glue on Nails Manicure Decor 24Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/4pz3SYV"
    },
    {
      id: 41,
      name: "Square False Nails with Snowflake",
      price: "$4.99",
      originalPrice: "$8.99",
      image: "https://m.media-amazon.com/images/I/61ijVRQIpFL._SX679_.jpg",
      description: "Glitter Short Square False Nails with Snowflake Designs for Christmas DIY Art Decoration",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/4gJzyH4"
    },
    {
      id: 42,
      name: "Square Snowflake Silver Glitter False Nails",
      price: "$4.99",
      originalPrice: "$8.99",
      image: "https://m.media-amazon.com/images/I/61lNKtOjtbL._SX679_.jpg",
      description: "24PCs Christmas Tree Press On Nails: Square Snowflake Silver Glitter False Nails, Full Cover Glossy Artificial, Christmas Glue On",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/3KjdB5l"
    },
    {
      id: 43,
      name: "Christmas Snowflake Press on Nails",
      price: "$5.88",
      originalPrice: "$9.99",
      image: "https://m.media-amazon.com/images/I/61Y9PAe2saL._SX679_.jpg",
      description: "Red Glitter Christmas Snowflake Press on Nails French Tip False Winter Acrylic Cute Bling Stick on Full Cover With Stripe Designs Glue on",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/46r8wza"
    },
    {
      id: 44,
      name: "Short Square French Fake Nails",
      price: "$4.99",
      originalPrice: "$8.99",
      image: "https://m.media-amazon.com/images/I/71IGIcdxsEL._SX679_.jpg",
      description: "French Fake Nails with EIK & Bow Designs Full Cover Glossy Stick on Nails Sliver Glitter French Tip False Nails Cute Artificial Fake Nails for Women",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/46AY5sS"
    },
    {
      id: 45,
      name: "Snowflake Winter False Nails",
      price: "$4.33",
      originalPrice: "$7.99",
      image: "https://m.media-amazon.com/images/I/61zxQpXJYcL._SX679_.jpg",
      description: "False Nails Gold Glitter Stick on Nails Xmas Glue on Nails for Women Holiday Manicure 24Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/4njErsR"
    },
    {
      id: 46,
      name: "Elk Designs Xmas Acrylic Full Cover Reusable Artificial Nail",
      price: "$7.19",
      originalPrice: "$11.99",
      image: "https://m.media-amazon.com/images/I/61c6wlyGb-L._SY450_.jpg",
      description: "Cute Elk Designs Xmas Acrylic Full Cover Reusable Artificial Nail for Women Girls 24Pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/48sZSCX"
    },
    {
      id: 47,
      name: "h Snowflake White Pink Stripes Designs",
      price: "$6.99",
      originalPrice: "$11.99",
      image: "https://m.media-amazon.com/images/I/61XpG8kKZgL._SY450_.jpg",
      description: "French Tip Acrylic Nails Christmas Tree False Nails with Snowflake White Pink Stripes Designs Glossy Stick on Nail for Women Girls 24Pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "in-stock",
      cta: "Holiday Glam",
      affiliateUrl: "https://amzn.to/4nmiQQv"
    },
    {
      id: 48,
      name: "Red French Grid Pattern Stick on Nail",
      price: "$6.99",
      originalPrice: "$11.99",
      image: "https://m.media-amazon.com/images/I/61zc6DkmSTL._SY450_.jpg",
      description: "Glossy Rhinestones Glue on Nail Xmas Reusable Full Cover False Nails for Women 24pcs",
      isNew: false,
      isTrending: true,
      stockStatus: "in-stock",
      cta: "Christmas Magic",
      affiliateUrl: "https://amzn.to/3KABRQq"
    },
    {
      id: 49,
      name: "Gift Design Green Glitter French Tips",
      price: "$6.99",
      originalPrice: "$11.99",
      image: "https://m.media-amazon.com/images/I/71XzoaBb78L._SY450_.jpg",
      description: "French Tips Glue on Nails Red Canes Stick on Nail Winter Xmas False Nail for Women Girls Holiday Manicure 24pcs",
      isNew: true,
      isTrending: false,
      stockStatus: "low-stock",
      cta: "Festive Nails",
      affiliateUrl: "https://amzn.to/46BWovo"
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
            <p className="text-sm text-green-200 mb-4 italic">
              Prices may vary with time - Shop now for best deals
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
              href="https://amzn.to/4mCIoaN"
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
                review: "The Red French Tip Fake Nails are absolutely perfect for the holidays!",
                product: "Red French Tip Fake Nails"
              },
              {
                name: "Rachel T.",
                review: "Full Cover Elk Holly False Nails are stunning! The designs are so festive.",
                product: "Full Cover Elk Holly False Nails"
              },
              {
                name: "Lisa K.",
                review: "Medium Almond Winter Fake Nails make my nails look like winter wonderland!",
                product: "Medium Almond Winter Fake Nails"
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
                image: "https://m.media-amazon.com/images/I/51fr34JFqbL._SY300_SX300_QL70_FMwebp_.jpg",
                gradient: "from-orange-600 to-purple-700"
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
                image: "https://m.media-amazon.com/images/I/71M4N-EtTtL._SX679_.jpg",
                gradient: "from-pink-500 to-violet-600"
              },
              {
                name: "winter",
                displayName: "Winter Nails",
                image: "https://m.media-amazon.com/images/I/5110tzvHbOL._SY300_SX300_QL70_FMwebp_.jpg",
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

export default function ChristmasPage() {
  return <ChristmasNailsCategory />;
}
