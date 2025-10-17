import { FAQItem, TutorialStep, TutorialMetadata, VideoMetadata } from '@/lib/generateSchemas';

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
  rating?: {         // ✅ NEW - Add rating field
    value: number;
    count: number;
  };
  faqItems?: FAQItem[];
  tutorialSteps?: TutorialStep[];
  tutorialMetadata?: TutorialMetadata;
  videoMetadata?: VideoMetadata;
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
  category?: string;   // ✅ NEW - Add to metadata too
  rating?: {           // ✅ NEW - Add to metadata too
    value: number;
    count: number;
  };
}
