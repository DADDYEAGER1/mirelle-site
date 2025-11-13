

export interface Product {
  id: string;
  name: string;
  price: string; // Changed to string to match "$X.XX" format
  originalPrice: string; // Added - was missing
  image: string;
  imageAlt?: string;  // ⬅️ ADD THIS
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
  keywords: string; // FIXED: Match actual JSON structure (comma-separated string)
  ogImage: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  image: string;
  gradient: string;
  floatingEmojis: string[];
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
  whyChooseUs?: string[];  
  tldr?: {
    summary: string[];
    keyTakeaways?: string[];
  };
}

// Complete category page data
export interface CompleteCategoryData extends CategoryData {
  faqs?: FAQ[];
  categoryDescription?: CategoryDescription; // FIXED: Renamed to avoid conflict with CategoryData.description
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
