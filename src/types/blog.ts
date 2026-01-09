// src/types/blog.ts
import { FAQItem, TutorialStep, VideoMetadata } from '@/lib/generateSchemas';

export interface TutorialMetadata {
  name: string;
  description: string;
  totalTime: string;
  estimatedCost: {
    currency: string;
    value: string;
  };
  tools: string[];
  supplies: string[];
}

export interface TLDR {
  summary: string[];
  faqs?: FAQ[];
  creativeLine?: string;
  keyTakeaways: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogMetadata {
  slug: string;
  title: string;
  excerpt: string;
  tags?: string[];
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageCaption?: string;
  dateModified?: string;
  url: string;
  topicalMap?: any;
  navigationContext?: NavigationContext;
  tldr?: TLDR;
  faqItems?: FAQItem[];
  eventData?: {
    name: string;
    startDate: string;
    endDate: string;
    eventStatus: string;
    eventAttendanceMode: string;
    isVirtual: boolean;
  };
  
  date: string;
  author: string;
  readTime: number | string;
  category?: string;
  canonical?: string;
  updatedDate?: string;
  wordCount?: number;
  
  template?: 'center' | 'split-left' | 'split-right' | 'grid';
  heroImages?: string[];
  carouselImages?: { url: string; alt: string }[];
  products?: {
    image: string;
    title: string;
    price: string;
    brand: string;
    url: string;
  }[];
}

export interface TopicalMap {
  position: 'pillar' | 'cluster' | 'standalone';
  parentPillar: string | null;
  relatedClusters: string[];
  primaryKeyword: string;
  searchIntent: 'informational' | 'transactional' | 'navigational' | 'commercial';
  topicalBoundary: string;
  hierarchyLevel: number;
  
  // NEW FIELDS - Add these
  secondaryKeywords?: string[];  // Optional - won't break existing posts
  contentType?: 'tutorial' | 'guide' | 'comparison' | 'showcase' | 'trend-analysis';
  semanticRelationships?: {
    technique?: string[];
    style?: string[];
    occasions?: string[];
    relatedTechniques?: string[];
  };
  contentMetrics?: {
    technicalComplexity?: 'beginner' | 'intermediate' | 'advanced';
    timeToImplement?: string;
    requiredSkills?: string[];
    requiredTools?: string[];
  };
  childClusters?: Array<{
    slug: string;
    relationship?: string;
    hierarchyLevel?: number;
  }>;
}

// Add this new interface for navigation
export interface NavigationContext {
  pillarPost?: {
    slug: string;
    title: string;
  };
  previousPost?: {
    slug: string;
    title: string;
  };
  nextPost?: {
    slug: string;
    title: string;
  };
}


export interface Category {
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface GalleryImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags?: string[];
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
  galleryImages?: GalleryImage[];
  topicalMap?: TopicalMap;
  navigationContext?: NavigationContext;
  tldr?: TLDR;
  faqItems?: FAQItem[];
  tutorialSteps?: TutorialStep[];
  tutorialMetadata?: TutorialMetadata;
  videoMetadata?: VideoMetadata;
  eventData?: {
    name: string;
    startDate: string;
    endDate: string;
    eventStatus: string;
    eventAttendanceMode: string;
    isVirtual: boolean;
  };
  
  template?: 'center' | 'split-left' | 'split-right' | 'grid';
  heroImages?: string[];
  carouselImages?: { url: string; alt: string }[];
  products?: {
    image: string;
    title: string;
    price: string;
    brand: string;
    url: string;
  }[];
  coverImage: string;
}
