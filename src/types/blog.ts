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
  position: string;
  parentPillar: string;
  relatedClusters: string[];
  primaryKeyword: string;
  searchIntent: string;
  topicalBoundary: string;
  hierarchyLevel: number;
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