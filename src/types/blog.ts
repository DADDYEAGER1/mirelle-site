// src/types/blog.ts
import { FAQItem, TutorialMetadata, VideoMetadata } from '@/lib/generateSchemas';

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
  url: string;

  topicalMap?: any;           // Replace 'any' with proper type if you have one
  keywordStrategy?: any;      // Replace 'any' with proper type if you have one
  contentRelations?: any;     // Replace 'any' with proper type if you have one
  seoMetrics?: any;  
  
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
  eventData?: {              // 🆕 ADD THIS
    name: string;
    startDate: string;
    endDate: string;
    eventStatus: string;
    eventAttendanceMode: string;
    isVirtual: boolean;
  };
}


export interface KeywordStrategy {
  avoidKeywords: string[];
  clusteredWith: string[];
  serpVerified: boolean;
  serpOverlapScore: number;
  lastCannibalCheck: string;
}

export interface ContentRelations {
  linksToPostsCount: number;
  relatedPostSlugs: string[];
  competingPosts: string[];
}

export interface TutorialStep {
  position: number;
  name: string;
  text: string;
  image?: string;
  url?: string;
}

export interface SeoMetrics {
  targetRankPosition: number;
  estimatedMonthlySearches: number;
  difficulty: number;
  lastRankCheck: string;
}

export interface TutorialMetadata {
  name: string;
  description: string;
  totalTime?: string;          // ISO 8601 duration format (PT45M)
  estimatedCost?: {
    currency: string;
    value: string;
  };
  tools?: string[];
  supplies?: string[];
}

export interface VideoMetadata {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;            // ISO 8601 duration format (PT10M30S)
  contentUrl: string;
}

export interface TopicalMap {
  position: string;
  parentPillar: string;
  relatedClusters: string[];
  primaryKeyword: string;
  searchIntent: string;
  topicalBoundary: string;
  hierarchyLevel: number;
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
  imageWidth?: number;
  imageHeight?: number;
  imageCaption?: string;
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
  eventData?: {
    name: string;
    startDate: string;
    endDate: string;
    eventStatus: string;
    eventAttendanceMode: string;
    isVirtual: boolean;
  };
  topicalMap?: TopicalMap;
  keywordStrategy?: KeywordStrategy;
  contentRelations?: ContentRelations;
  seoMetrics?: SeoMetrics;
}
