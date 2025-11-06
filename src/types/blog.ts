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
  url: string;
  
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

export interface TutorialStep {
  position: number;
  name: string;
  text: string;
  image?: string;
  url?: string;
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
  
  // 🆕 TOPICAL MAPPING FIELDS (ADD THESE)
  topicalMap?: {
    position: 'pillar' | 'cluster' | 'standalone';
    parentPillar?: string;              // Slug of parent pillar post
    relatedClusters?: string[];         // Slugs of related cluster posts
    primaryKeyword: string;             // THIS post's unique primary keyword
    searchIntent: 'informational' | 'commercial' | 'transactional' | 'navigational';
    topicalBoundary: string;            // Description of what this post covers
    hierarchyLevel?: number;            // 1=pillar, 2=cluster, 3=supporting
  };
  
  // 🆕 CANNIBALIZATION PREVENTION FIELDS (ADD THESE)
  keywordStrategy?: {
    avoidKeywords?: string[];           // Primary keywords from OTHER posts (do NOT target)
    clusteredWith?: string[];           // Keywords verified same intent (safe to use)
    serpVerified?: boolean;             // Was SERP analysis done?
    serpOverlapScore?: number;          // 0-100, how much SERP overlaps with related posts
    lastCannibalCheck?: string;         // Date of last cannibalization check (YYYY-MM-DD)
  };
  
  // 🆕 CONTENT RELATIONSHIP FIELDS (ADD THESE)
  contentRelations?: {
    linksToPostsCount?: number;         // How many internal links to other posts
    linksFromPostsCount?: number;       // How many posts link TO this one
    relatedPostSlugs?: string[];        // Slugs of related posts for "Related Posts" section
    competingPosts?: string[];          // Slugs of posts that might cannibalize (for monitoring)
  };
  
  // 🆕 SEO PERFORMANCE TRACKING (OPTIONAL BUT RECOMMENDED)
  seoMetrics?: {
    targetRankPosition?: number;        // Desired ranking position
    currentRankPosition?: number;       // Current ranking (update manually/via API)
    estimatedMonthlySearches?: number;  // Search volume for primary keyword
    difficulty?: number;                // Keyword difficulty score (0-100)
    lastRankCheck?: string;             // Date of last rank check (YYYY-MM-DD)
  };
}
