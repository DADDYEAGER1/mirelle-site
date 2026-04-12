// src/types/posts.ts

export interface PostMetadata {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  carouselImages?: { url: string; alt: string }[];
  products?: {
    image: string;
    title: string;
    price: string;
    brand: string;
    url: string;
  }[];
  readTime?: number | string;
  canonical?: string;
  dateModified?: string;
}

export interface Post extends PostMetadata {
  content: string;
}

export interface Category {
  name: string;
  slug: string;
  count: number;
}