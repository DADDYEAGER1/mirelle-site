import { BlogPost, BlogMetadata } from '@/types/blog';
import { generateAboutEntities } from './entityMapping';

const baseUrl = 'https://mirelleinspo.com';

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
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface SchemaConfig {
  post: BlogPost;
  slug: string;
  faqItems?: FAQItem[];
  tutorialSteps?: TutorialStep[];
  tutorialMetadata?: TutorialMetadata;
  videoMetadata?: VideoMetadata;
  galleryImages?: GalleryImage[];
  // rating?: {
  //   value: number;
  //   count: number;
  // }; // ✅ NEW: For aggregate rating
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

// ============================================
// PERSON SCHEMA (Author)
// ============================================
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#mirelle-team`,
    'name': 'Mirellé Team',
    'url': `${baseUrl}/about`,
    'sameAs': [
      'https://x.com/mirelleinspo',
      'https://www.instagram.com/mirelle_inspo/',
      'https://www.pinterest.com/mirelle_inspo/'
    ],
    'jobTitle': 'Nail Art Content Creator',
    'worksFor': {
      '@id': `${baseUrl}/#organization`
    },
    'knowsAbout': [
      'Nail Art',
      'Nail Care',
      'Beauty Trends',
      'DIY Manicures',
      'Seasonal Nail Designs',
      'Product Recommendations'
    ],
    'description': 'Expert nail art content team specializing in seasonal trends and accessible beauty techniques'
  };
}

// ============================================
// BLOG ENTITY SCHEMA
// ============================================
export function generateBlogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${baseUrl}/blog#blog`,
    'url': `${baseUrl}/blog`,
    'name': 'Mirellé Blog',
    'description': 'Expert nail art inspiration, tutorials, and beauty tips for modern women. Discover seasonal trends, at-home techniques, and Pinterest-worthy nail designs.',
    'inLanguage': 'en-US',
    'publisher': {
      '@id': `${baseUrl}/#organization`
    },
    'author': {
      '@id': `${baseUrl}/#mirelle-team`
    },
    'audience': {
      '@type': 'Audience',
      'audienceType': 'Women aged 18-45 interested in beauty and nail art'
    },
    'about': [
      {
        '@type': 'Thing',
        'name': 'Nail Art',
        'sameAs': 'https://en.wikipedia.org/wiki/Nail_art'
      },
      {
        '@type': 'Thing',
        'name': 'Beauty',
        'sameAs': 'https://en.wikipedia.org/wiki/Beauty'
      },
      {
        '@type': 'Thing',
        'name': 'Fashion',
        'sameAs': 'https://en.wikipedia.org/wiki/Fashion'
      }
    ]
  };
}

// ============================================
// BLOG ITEMLIST SCHEMA
// ============================================
export function generateBlogListSchema(posts: BlogMetadata[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Mirellé Blog Posts',
    'description': 'Complete collection of nail art tutorials, seasonal trends, and beauty inspiration',
    'url': `${baseUrl}/blog`,
    'numberOfItems': posts.length,
    'itemListElement': posts.map((post, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'url': `${baseUrl}/blog/${post.slug}`,
      'name': post.title,
      'description': post.excerpt,
      'image': `${baseUrl}${post.image}`
    }))
  };
}

// ============================================
// ENHANCED BLOGPOSTING SCHEMA
// ============================================
export function generateArticleSchema(post: BlogPost) {
  const articleUrl = `${baseUrl}/blog/${post.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    'headline': post.title,
    'description': post.excerpt,
    'abstract': post.tldr?.summary.join(' ') || post.excerpt,
    'image': {
      '@type': 'ImageObject',
      'url': `${baseUrl}${post.image}`,
      'width': post.imageWidth || 1200,
      'height': post.imageHeight || 630,
      'caption': post.imageAlt
    },
    'author': {
      '@type': 'Person',
      '@id': `${baseUrl}/#mirelle-team`,
      'name': post.author || 'Mirellé Team',
      'url': `${baseUrl}/about`
    },
    'publisher': {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      'name': 'Mirellé',
      'logo': {
        '@type': 'ImageObject',
        'url': `${baseUrl}/logo.png`
      }
    },
    'datePublished': post.date,
    'dateModified': post.dateModified || post.date,
    'url': articleUrl,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': articleUrl
    },
    'wordCount': post.wordCount,
    'articleBody': post.content,
    'inLanguage': 'en-US',
    'isPartOf': {
      '@type': 'Blog',
      '@id': `${baseUrl}/blog#blog`,
      'name': 'Mirellé Blog'
    },
    'about': generateAboutEntities(post.tags || []),
    'keywords': post.tags?.join(', '),
    'speakable': post.tldr ? {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['.tldr-section'],
      'xpath': ['/html/body//section[@class~="tldr-section"]']
    } : undefined
  };
}

// ============================================
// FAQ PAGE SCHEMA
// ============================================
export function generateFAQSchema(faqItems: Array<{ question: string; answer: string }>) {
  if (!faqItems || faqItems.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

// ============================================
// ABOUTPAGE SCHEMA
// ============================================
export function generateAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${baseUrl}/about#page`,
    'url': `${baseUrl}/about`,
    'name': 'About Mirellé',
    'description': 'Learn about Mirellé, your go-to destination for nail art inspiration, tutorials, and beauty tips',
    'mainEntity': {
      '@id': `${baseUrl}/#organization`
    },
    'inLanguage': 'en-US',
    'publisher': {
      '@id': `${baseUrl}/#organization`
    }
  };
}

// ============================================
// CONTACTPAGE SCHEMA
// ============================================
export function generateContactPageSchema(email: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${baseUrl}/contact#page`,
    'url': `${baseUrl}/contact`,
    'name': 'Contact Mirellé',
    'description': 'Get in touch with the Mirellé team for collaborations, questions, or feedback',
    'mainEntity': {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Service',
        'email': email,
        'availableLanguage': 'English',
        'areaServed': 'Worldwide'
      }
    },
    'inLanguage': 'en-US'
  };
}

// ============================================
// BREADCRUMB SCHEMA
// ============================================
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}

// ============================================
// EXISTING SCHEMAS FUNCTION (KEPT FOR COMPATIBILITY)
// ============================================
export function generateSchemas(config: SchemaConfig) {
  const { post, slug, faqItems, tutorialSteps, tutorialMetadata, videoMetadata, galleryImages } = config;
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
      '@id': `${baseUrl}/blog/${slug}#primaryimage`,
      url: imageUrl,
      width: post.imageWidth || 1200,
      height: post.imageHeight || 630,
      caption: post.imageAlt || post.title,
      ...(post.imageAlt && { name: post.imageAlt }),
    },
    datePublished: post.date,
    dateModified: post.dateModified || post.updatedDate || post.date,
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: post.author || 'Mirelle',
      url: `${baseUrl}/about`,
      image: `${baseUrl}/team/${(post.author || 'mirelle').toLowerCase()}.jpg`,
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
    wordCount: post.wordCount || post.content?.split(' ').length || 800,
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
      ...(post.category ? [{
        '@type': 'ListItem',
        position: 3,
        name: post.category,
        item: `${baseUrl}/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`,
      }] : []),
      {
        '@type': 'ListItem',
        position: post.category ? 4 : 3,
        name: post.title,
        item: `${baseUrl}/blog/${slug}`,
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
  // ✅ ENHANCED: FAQ Schema with better formatting
  let faqSchema = null;
  if (faqItems && faqItems.length > 0) {
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${baseUrl}/blog/${slug}#faq`,
      mainEntity: faqItems.map((item, index) => ({
        '@type': 'Question',
        '@id': `${baseUrl}/blog/${slug}#faq-${index + 1}`,
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
          // ✅ NEW: Add author to answer
          author: {
            '@type': 'Person',
            name: post.author || 'Mirelle',
          },
        },
      })),
    };
  }

  // ✅ ENHANCED: HowTo Schema with better structure
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
        width: post.imageWidth || 1200,
        height: post.imageHeight || 630,
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
        '@id': `${baseUrl}/blog/${slug}#step-${step.position}`,
        position: step.position,
        name: step.name,
        text: step.text,
        url: `${baseUrl}/blog/${slug}#step-${step.position}`,
        ...(step.image && {
          image: {
            '@type': 'ImageObject',
            url: `${baseUrl}${step.image}`,
            width: 800,
            height: 600,
          },
        }),
      })),
      inLanguage: 'en-US',
      // ✅ NEW: Add author to tutorial
      author: {
        '@type': 'Person',
        name: post.author || 'Mirelle',
      },
    };
  }

    // ✅ NEW: Image Gallery Schema
  let imageGallerySchema = null;
  if (galleryImages && galleryImages.length > 0) {
    imageGallerySchema = {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      '@id': `${baseUrl}/blog/${slug}#gallery`,
      name: `${post.title} - Image Gallery`,
      description: `Visual guide for ${post.title}`,
      associatedMedia: galleryImages.map((img, index) => ({
        '@type': 'ImageObject',
        '@id': `${baseUrl}/blog/${slug}#gallery-image-${index + 1}`,
        url: `${baseUrl}${img.url}`,
        width: img.width || 1200,
        height: img.height || 800,
        caption: img.caption || img.alt,
        name: img.alt,
        ...(img.caption && { description: img.caption }),
      })),
      about: {
        '@type': 'Article',
        '@id': `${baseUrl}/blog/${slug}#article`,
      },
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

// ✅ NEW: Validation helper to ensure all required schema fields exist
export function validateSchemaData(post: BlogPost): {
  valid: boolean;
  missing: string[];
} {
  const required = ['title', 'excerpt', 'date', 'author', 'canonical'];
  const missing: string[] = [];

  required.forEach(field => {
    if (!post[field as keyof BlogPost]) {
      missing.push(field);
    }
  });

  return {
    valid: missing.length === 0,
    missing,
  };
}

// Generate schemas for collection pages (shop categories)
export function generateCollectionSchemas(config: CollectionSchemaConfig) {
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
