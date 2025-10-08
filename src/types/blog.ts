import { FAQItem, TutorialStep, TutorialMetadata } from '@/lib/generateSchemas';


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
  faqItems?: FAQItem[];
  tutorialSteps?: TutorialStep[];
  tutorialMetadata?: TutorialMetadata;
  updatedDate?: string; // For dateModified
  category?: string; // For article section
  faqItems?: FAQItem[]; // Already in generateSchemas
  tutorialSteps?: TutorialStep[]; // Already in generateSchemas
  tutorialMetadata?: TutorialMetadata; // Already in generateSchemas
  videoMetadata?: VideoMetadata; // NEW - for video schema
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
}
