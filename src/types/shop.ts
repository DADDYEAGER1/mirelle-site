// TypeScript interfaces for shop data structures

export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  hoverImage?: string;
  description: string;
  isNew: boolean;
  isTrending: boolean;
  stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock';
  cta: string;
  affiliateUrl: string;
}

export interface CategorySEO {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
}

export interface Testimonial {
  name: string;
  review: string;
  product: string;
}

export interface CategoryData {
  slug: string;
  displayName: string;
  season: string;
  year: number;
  description: string;
  heroImage: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  emojis: string[];
  ctas: string[];
  seo: CategorySEO;
  relatedCategories: string[];
  testimonials: Testimonial[];
}

export interface ProductsData {
  category: string;
  totalProducts: number;
  initialDisplay: number;
  products: Product[];
}

export interface CategoriesData {
  categories: {
    [slug: string]: CategoryData;
  };
}
