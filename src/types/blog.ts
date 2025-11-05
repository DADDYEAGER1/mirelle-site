// src/types/blog.ts
import { FAQItem, TutorialStep, TutorialMetadata, VideoMetadata } from '@/lib/generateSchemas';

export interface BlogMetadata {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  imageWidth?: number;       // 🆕 PHASE 3
  imageHeight?: number;      // 🆕 PHASE 3
  imageCaption?: string;     // 🆕 PHASE 3
  dateModified?: string;
  tldr?: TLDR;
  faqItems?: FAQItem[];
  
  // Optional fields for backward compatibility
  date: string;
  author: string;
  readTime: number | string;
  category?: string;
  galleryImages?: GalleryImage[];
  rating?: Rating;
  canonical?: string;
  updatedDate?: string;
  wordCount?: number;
}

// Add this interface after imports, BEFORE BlogPost
export interface TLDR {
  summary: string[];
  faqs?: FAQ[];           // Optional
  creativeLine?: string;  // Optional  
  keyTakeaways: string[];
}

// Also add FAQ interface
export interface FAQ {
  question: string;
  answer: string;
}

// Rest of your types...
export interface Category {
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface Tag {
  name: string;
  slug: string;
  count: number;
}

export interface GalleryImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface Rating {
  value: number;
  count: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  imageWidth?: number;       // 🆕 PHASE 3
  imageHeight?: number;      // 🆕 PHASE 3
  imageCaption?: string;     // 🆕 PHASE 3
  readTime: number | string;
  canonical: string;
  updatedDate?: string;
  category?: string;
  dateModified?: string;
  wordCount?: number;
  faqItems?: FAQItem[];
  tutorialSteps?: TutorialStep[];
  tutorialMetadata?: TutorialMetadata;
  videoMetadata?: VideoMetadata;
  galleryImages?: GalleryImage[];
  tldr?: TLDR;
}
