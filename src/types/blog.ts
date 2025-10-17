import { FAQItem, TutorialStep, TutorialMetadata, VideoMetadata } from '@/lib/generateSchemas';

// ✅ NEW: Gallery image interface
export interface GalleryImage {
  url: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

// ✅ NEW: Rating interface for aggregate ratings
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
  readTime: number;
  canonical: string;
  updatedDate?: string;
  category?: string;
  faqItems?: FAQItem[];
  tutorialSteps?: TutorialStep[];
  tutorialMetadata?: TutorialMetadata;
  videoMetadata?: VideoMetadata;
  galleryImages?: GalleryImage[];  // ✅ NEW
  rating?: Rating;  // ✅ NEW
}

export interface BlogMetadata {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
  readTime: number;
  galleryImages?: GalleryImage[];  // ✅ NEW
  rating?: Rating;  // ✅ NEW
}
