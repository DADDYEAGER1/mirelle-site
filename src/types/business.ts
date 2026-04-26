// src/types/business.ts

export interface BusinessFAQ {
  question: string;
  answer: string;
}

export interface BusinessService {
  title: string;
  description: string;
}

export interface BusinessContact {
  email: string;
  whatsapp?: string;
  instagram?: string;
}

export interface BusinessGalleryImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface BusinessMetadata {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateModified?: string;
  author: string;

  // Region
  region: string;
  regionCode: string;
  language: string;
  locale: string;
  city: string;
  country: string;

  // SEO
  canonical: string;
  targetKeyword: string;
  secondaryKeywords?: string[];
  searchIntent?: 'informational' | 'transactional' | 'navigational' | 'commercial';
  noIndex?: boolean;

  // GEO/AEO
  tldr: string;
  entityType?: string;
  speakable?: boolean;

  // Contact
  contact: BusinessContact;

  // Services
  services: BusinessService[];

  // Schema
  schemaType?: 'ProfessionalService' | 'LocalBusiness';

  // Display
  template?: 'business';
  image: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;

  url: string;
}

export interface BusinessPost extends BusinessMetadata {
  content: string;
  isMDX?: boolean;
  faqSchema: BusinessFAQ[];
  galleryImages?: BusinessGalleryImage[];
}