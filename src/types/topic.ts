export interface TopicMetadata {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateModified: string;
  author: string;
  category: string;
  image: string | null;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  readTime: string;
  canonical: string;
  url: string;
}

export interface Topic extends TopicMetadata {
  content: string;
  tutorial?: TutorialStep[];
  faqItems?: FAQItem[];
  relatedPosts?: string[];
  sameAs?: string[];
}

export interface TutorialStep {
  step: string;
  description: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}