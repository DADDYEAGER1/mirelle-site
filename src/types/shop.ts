// src/types/shop.ts
// FIXED VERSION with all necessary properties

export interface Product {
  id: string;
  name: string;
  price: string; // Changed to string to match "$X.XX" format
  originalPrice: string; // Added - was missing
  image: string;
  affiliateUrl: string; // Changed from affiliateLink
  category: string;
  isNew?: boolean;
  isTrending?: boolean;
  rating?: number;
  description?: string;
  cta: string; // Added - was missing
  stockStatus?: 'in-stock' | 'low-stock' | 'out-of-stock'; // Added - was missing
}

export interface CategorySEO {
  title: string;
  description: string;
  keywords: string[]; // Keep as array - we'll normalize in getCategoryData
  ogImage: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  image: string;
  gradient: string;
  floatingEmojis: string[];
}

export interface Testimonial {
  name: string; // Changed from author
  review: string; // Changed from text
  rating: number;
  product: string; // Added - was missing
}

export interface RelatedCategory {
  name: string;
  slug: string;
  image: string;
}

// FAQ interfaces
export interface FAQ {
  question: string;
  answer: string;
  keywords?: string[];
}

export interface FAQData {
  category: string;
  faqs: FAQ[];
}

// Category Description interface
export interface CategoryDescription {
  category: string;
  html: string;
  perfectFor?: string[];
}

// Rating data for schema
export interface CategoryRating {
  rating: number;
  reviews: number;
}

export interface CategoryData {
  slug: string;
  displayName: string;
  season: string; // Added - used in page.tsx
  year: number; // Added - used in ShopClient
  description: string;
  heroImage: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  emojis: string[];
  ctas: string[]; // Added - in JSON but not type
  seo: CategorySEO;
  relatedCategories: string[]; // Changed to string[] - actual slugs
  testimonials: Testimonial[];
}

// Complete category page data
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

// Added missing interfaces for shop.ts
export interface CategoriesData {
  categories: {
    [slug: string]: CategoryData;
  };
}

export interface ProductsData {
  products: Product[];
}
