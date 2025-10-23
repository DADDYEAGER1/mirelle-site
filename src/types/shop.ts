// src/types/shop.ts
// UPDATED VERSION with FAQ and Description interfaces

export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  affiliateLink: string;
  category: string;
  isNew?: boolean;
  isTrending?: boolean;
  rating?: number;
  description?: string;
}

export interface CategorySEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface HeroSection {
  title: string;
  subtitle: string;
  image: string;
  gradient: string;
  floatingEmojis: string[];
}

export interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

export interface RelatedCategory {
  name: string;
  slug: string;
  image: string;
}

// NEW: FAQ interface
export interface FAQ {
  question: string;
  answer: string;
  keywords?: string[];
}

// NEW: FAQ Data structure
export interface FAQData {
  category: string;
  faqs: FAQ[];
}

// NEW: Category Description interface
export interface CategoryDescription {
  category: string;
  html: string;
  perfectFor?: string[];
}

// NEW: Rating data for schema
export interface CategoryRating {
  rating: number;
  reviews: number;
}

export interface CategoryData {
  slug: string;
  name: string;
  seo: CategorySEO;
  heroImage: string;  // Add this line
  hero: HeroSection;
  testimonials: Testimonial[];
  relatedCategories: RelatedCategory[];
}

export interface ProductCollection {
  category: string;
  totalProducts: number;
  initialDisplay: number;
  products: Product[];
}

// NEW: Complete category page data (for future optimization)
export interface CompleteCategoryData extends CategoryData {
  faqs?: FAQ[];
  description?: CategoryDescription;
  rating?: CategoryRating;
  productCount?: number;
  priceRange?: {
    min: number;
    max: number;
  };
}
