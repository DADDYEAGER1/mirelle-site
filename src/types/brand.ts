// Brand Type Definitions for Mirellé

export type BrandCategory = 
  | 'gel-polish'
  | 'press-on-nails'
  | 'nail-tools'
  | 'nail-care'
  | 'nail-art-supplies'
  | 'base-top-coats'
  | 'nail-treatments';

export type PartnershipTier = 'featured' | 'partner' | 'affiliate';

export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  heroImage: string;
  category: BrandCategory;
  partnershipTier: PartnershipTier;
  featured: boolean;
  website: string;
  affiliateLink?: string;
  socialMedia: {
    instagram?: string;
    pinterest?: string;
    tiktok?: string;
    twitter?: string;
  };
  products: BrandProduct[];
  dateAdded: string;
  stats?: {
    avgRating?: number;
    reviewCount?: number;
    popularityScore?: number;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface BrandProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  affiliateLink: string;
  featured: boolean;
}

export interface BrandMetadata {
  slug: string;
  name: string;
  tagline: string;
  logo: string;
  category: BrandCategory;
  partnershipTier: PartnershipTier;
  featured: boolean;
}

// Category display information
export const BRAND_CATEGORIES: Record<BrandCategory, { label: string; description: string }> = {
  'gel-polish': {
    label: 'Gel Polish',
    description: 'Long-lasting gel nail polish brands',
  },
  'press-on-nails': {
    label: 'Press-On Nails',
    description: 'Quick-apply press-on nail sets',
  },
  'nail-tools': {
    label: 'Nail Tools',
    description: 'Professional nail tools and equipment',
  },
  'nail-care': {
    label: 'Nail Care',
    description: 'Nail health and treatment products',
  },
  'nail-art-supplies': {
    label: 'Nail Art Supplies',
    description: 'Creative supplies for nail art',
  },
  'base-top-coats': {
    label: 'Base & Top Coats',
    description: 'Essential base and top coat products',
  },
  'nail-treatments': {
    label: 'Nail Treatments',
    description: 'Strengthening and repair treatments',
  },
};

// Partnership tier information
export const PARTNERSHIP_TIERS: Record<PartnershipTier, { label: string; badge: string }> = {
  featured: {
    label: 'Featured Partner',
    badge: '⭐',
  },
  partner: {
    label: 'Brand Partner',
    badge: '🤝',
  },
  affiliate: {
    label: 'Affiliate',
    badge: '🔗',
  },
};
