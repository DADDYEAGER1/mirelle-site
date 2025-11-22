// src/lib/inspoSchemas.ts
import type { DesignData, DesignImage } from '@/types/inspo';

const SITE_URL = 'https://mirelleinspo.com';
const SITE_NAME = 'Mirellé';

/**
 * Generate Organization Schema (Site-wide)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 250,
      height: 60,
    },
    sameAs: [
      'https://www.pinterest.com/mirelle',
      'https://www.instagram.com/mirelle',
      'https://twitter.com/mirelle',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
  };
}

/**
 * Generate WebSite Schema
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/inspo?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate Breadcrumb Schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate CollectionPage Schema for main inspo page
 */
export function generateInspoCollectionSchema(totalDesigns: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/inspo#collection`,
    name: 'Nail Design Inspiration Gallery 2025',
    description: 'Explore 1000+ stunning nail designs from classic elegance to trending styles. Find your perfect manicure inspiration for every occasion.',
    url: `${SITE_URL}/inspo`,
    numberOfItems: totalDesigns,
    about: {
      '@type': 'Thing',
      name: 'Nail Design Inspiration',
      description: 'Curated collection of nail art designs, manicure ideas, and trending nail styles',
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
    },
  };
}

/**
 * Generate CollectionPage Schema for category pages
 */
export function generateCategoryCollectionSchema(designData: DesignData, imageCount: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/inspo/${designData.slug}#collection`,
    name: `${designData.displayName} Nail Design Collection`,
    description: designData.seo.description,
    url: `${SITE_URL}/inspo/${designData.slug}`,
    numberOfItems: imageCount,
    about: {
      '@type': 'Thing',
      name: designData.displayName,
      description: designData.description,
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
    },
  };
}

/**
 * Generate ImageGallery Schema
 */
export function generateImageGallerySchema(
  designData: DesignData,
  images: DesignImage[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `${SITE_URL}/inspo/${designData.slug}#gallery`,
    name: `${designData.displayName} Nail Design Gallery`,
    description: designData.seo.description,
    url: `${SITE_URL}/inspo/${designData.slug}`,
    associatedMedia: images.slice(0, 50).map((img) => ({
      '@type': 'ImageObject',
      contentUrl: img.url,
      name: img.alt,
      description: img.alt,
      encodingFormat: 'image/webp',
      thumbnail: {
        '@type': 'ImageObject',
        contentUrl: img.url,
      },
    })),
  };
}

/**
 * Generate ItemList Schema for category grid
 */
export function generateItemListSchema(designs: DesignData[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Nail Design Categories',
    numberOfItems: designs.length,
    itemListOrder: 'Unordered',
    itemListElement: designs.map((design, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        name: design.displayName,
        description: design.description,
        url: `${SITE_URL}/inspo/${design.slug}`,
        image: design.heroImage,
      },
    })),
  };
}

/**
 * Generate Article Schema for category pages
 */
export function generateArticleSchema(designData: DesignData) {
  const publishDate = new Date().toISOString();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}/inspo/${designData.slug}#article`,
    headline: designData.seo.title,
    description: designData.seo.description,
    image: {
      '@type': 'ImageObject',
      url: designData.heroImage,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: publishDate,
    dateModified: publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/inspo/${designData.slug}`,
    },
  };
}

/**
 * Generate FAQPage Schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate WebPage Schema
 */
export function generateWebPageSchema(
  title: string,
  description: string,
  url: string,
  imageUrl?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name: title,
    description: description,
    url: url,
    ...(imageUrl && {
      primaryImageOfPage: {
        '@type': 'ImageObject',
        contentUrl: imageUrl,
      },
    }),
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  };
}

/**
 * Render all schemas as script tags (helper for server components)
 */
export function renderSchemas(schemas: Array<Record<string, any>>) {
  return schemas.map((schema, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}
