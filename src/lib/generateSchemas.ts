import type { BlogPost } from '@/types/blog';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TutorialStep {
  position: number;
  name: string;
  text: string;
  image?: string;
}

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

export interface VideoMetadata {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  embedUrl?: string;
}

export interface GalleryImage {
  url: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface SchemaConfig {
  post: BlogPost;
  slug: string;
  faqItems?: FAQItem[];
  tutorialSteps?: TutorialStep[];
  tutorialMetadata?: TutorialMetadata;
  videoMetadata?: VideoMetadata;
  galleryImages?: GalleryImage[];
}

// Product Schema Interfaces
export interface ProductSchemaConfig {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export interface CollectionSchemaConfig {
  name: string;
  description: string;
  url: string;
  breadcrumbs: Array<{
    name: string;
    url: string;
  }>;
}

// Generate schemas for blog posts
export function generateSchemas(config: SchemaConfig) {
  const { post, slug, faqItems, tutorialSteps, tutorialMetadata, videoMetadata, galleryImages } = config;
  const baseUrl = 'https://mirelleinspo.com';
  const currentDate = new Date().toISOString();
  const imageUrl = post.image ? `${baseUrl}${post.image}` : `${baseUrl}/og-default.png`;

  // Enhanced Article Schema with rich metadata
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${baseUrl}/blog/${slug}#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${slug}`,
    },
    headline: post.title,
    name: post.title,
    description: post.excerpt || post.title,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
      caption: post.title,
    },
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: post.author || 'Mirelle',
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Mirelle',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 250,
        height: 60,
      },
    },
    articleSection: post.category || 'Nail Care',
    keywords: post.tags?.join(', ') || 'nail art, nail care, nail design',
    wordCount: post.content?.split(' ').length || 800,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    isPartOf: {
      '@type': 'Blog',
      '@id': `${baseUrl}/blog#blog`,
      name: 'Mirelle Blog',
      description: 'Expert nail care tips, trends, and inspiration',
    },
  };

  // Enhanced Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${baseUrl}/blog/${slug}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        // item: `${baseUrl}/blog/${slug}`,
      },
    ],
  };

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Mirelle',
    description: 'Your ultimate destination for nail inspiration, care tips, and trending designs',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  };

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Mirelle',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.png`,
      width: 250,
      height: 60,
    },
    description: 'Expert nail care, inspiration, and beauty content',
    sameAs: [
      'https://www.instagram.com/mirelleinspo',
      'https://www.pinterest.com/mirelleinspo',
      'https://www.facebook.com/mirelleinspo',
      'https://twitter.com/mirelleinspo',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@mirelleinspo.com',
    },
  };

  // Generate Image Gallery Schema if gallery images exist
  const imageGallerySchema = galleryImages && galleryImages.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    'name': `${post.title} - Image Gallery`,
    'description': post.excerpt,
    'image': galleryImages.map(img => ({
      '@type': 'ImageObject',
      'url': img.url,
      'caption': img.caption || '',
      'contentUrl': img.url,
      'width': img.width || 1200,
      'height': img.height || 800
    }))
  } : null;

  // Enhanced FAQ Schema
  let faqSchema = null;
  if (faqItems && faqItems.length > 0) {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${baseUrl}/blog/${slug}#faq`,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  }

  // Enhanced HowTo Schema with images
  let howToSchema = null;
  if (tutorialSteps && tutorialMetadata) {
    howToSchema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      '@id': `${baseUrl}/blog/${slug}#howto`,
      name: tutorialMetadata.name,
      description: tutorialMetadata.description,
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
        width: 1200,
        height: 630,
      },
      totalTime: tutorialMetadata.totalTime,
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: tutorialMetadata.estimatedCost.currency,
        value: tutorialMetadata.estimatedCost.value,
      },
      tool: tutorialMetadata.tools.map((tool) => ({
        '@type': 'HowToTool',
        name: tool,
      })),
      supply: tutorialMetadata.supplies.map((supply) => ({
        '@type': 'HowToSupply',
        name: supply,
      })),
      step: tutorialSteps.map((step) => ({
        '@type': 'HowToStep',
        position: step.position,
        name: step.name,
        text: step.text,
        url: `${baseUrl}/blog/${slug}#step-${step.position}`,
        ...(step.image && {
          image: {
            '@type': 'ImageObject',
            url: `${baseUrl}${step.image}`,
          },
        }),
      })),
      inLanguage: 'en-US',
    };
  }

  // Video Schema (if video content exists)
  let videoSchema = null;
  if (videoMetadata) {
    videoSchema = {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      '@id': `${baseUrl}/blog/${slug}#video`,
      name: videoMetadata.name,
      description: videoMetadata.description,
      thumbnailUrl: videoMetadata.thumbnailUrl,
      uploadDate: videoMetadata.uploadDate,
      contentUrl: `${baseUrl}/blog/${slug}`,
      embedUrl: videoMetadata.embedUrl,
      ...(videoMetadata.duration && { duration: videoMetadata.duration }),
    };
  }

  return {
    articleSchema,
    breadcrumbSchema,
    websiteSchema,
    organizationSchema,
    faqSchema,
    howToSchema,
    videoSchema,
    imageGallerySchema,
  };
}

// Generate schemas for product/collection pages
export function generateProductSchemas(config: ProductSchemaConfig) {
  const baseUrl = 'https://mirelleinspo.com';
  
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: config.name,
    description: config.description,
    url: config.url,
    ...(config.image && {
      image: {
        '@type': 'ImageObject',
        url: config.image,
      },
    }),
  };

  return { productSchema };
}

// Generate schemas for collection pages (shop categories)
export function generateCollectionSchemas(config: CollectionSchemaConfig) {
  const baseUrl = 'https://mirelleinspo.com';
  
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: config.name,
    description: config.description,
    url: config.url,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: config.breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  return {
    collectionSchema,
    breadcrumbSchema,
  };
}
