import { FAQItem, TutorialStep, TutorialMetadata, VideoMetadata } from '@/lib/generateSchemas';

// ✅ NEW: Category interface for category pages
export interface Category {
  name: string;
  slug: string;
  description: string;
  count: number;
}

// ✅ NEW: Tag interface for tag pages
export interface Tag {
  name: string;
  slug: string;
  count: number;
}

// ✅ EXISTING: Gallery image interface
export interface GalleryImage {
  url: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

// ✅ EXISTING: Rating interface for aggregate ratings
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
  readTime: number | string;
  canonical: string;
  updatedDate?: string;
  category?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  dateModified?: string;
  wordCount?: number;
  faqItems?: FAQItem[];
  tutorialSteps?: TutorialStep[];
  tutorialMetadata?: TutorialMetadata;
  videoMetadata?: VideoMetadata;
  galleryImages?: GalleryImage[];
  tldr?: {
    summary: string[];
    keyTakeaways?: string[];
  };
}

export interface BlogMetadata {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
  galleryImages?: GalleryImage[];
  rating?: Rating;
  readTime: number | string;
  imageAlt?: string;
  category?: string;
}
