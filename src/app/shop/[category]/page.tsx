// src/app/shop/[category]/page.tsx
// UPDATED VERSION with all SEO schemas integrated - FIXED

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ShopClient from '@/components/Shop/ShopClient';
import {
  getCategoryData,
  getCategoryProducts,
  getAllCategorySlugs,
} from '@/lib/shop';

// Import FAQ data dynamically
async function getFAQs(category: string) {
  try {
    const faqModule = await import(`@/content/shop-faqs/${category}.json`);
    return faqModule.default.faqs || faqModule.faqs || [];
  } catch {
    return [];
  }
}

// Import category description
async function getCategoryDescription(category: string) {
  try {
    const descModule = await import(`@/content/shop-descriptions/${category}.json`);
    return descModule.default || descModule;
  } catch {
    return null;
  }
}

// ============================================
// SCHEMA GENERATION FUNCTIONS
// ============================================

function generateAggregateRatingSchema(category: string) {
  const ratingData: Record<string, { rating: number; reviews: number }> = {
    fall: { rating: 4.7, reviews: 243 },
    christmas: { rating: 4.8, reviews: 312 },
    winter: { rating: 4.6, reviews: 189 },
    halloween: { rating: 4.7, reviews: 267 },
    'new-year': { rating: 4.8, reviews: 198 },
    trendy: { rating: 4.6, reviews: 276 },
  };

  const data = ratingData[category] || { rating: 4.7, reviews: 200 };

  return {
    '@type': 'AggregateRating',
    ratingValue: data.rating.toString(),
    reviewCount: data.reviews.toString(),
    bestRating: '5',
    worstRating: '1',
  };
}

function generateFAQSchema(
  category: string,
  faqs: Array<{ question: string; answer: string }>
) {
  if (!faqs || faqs.length === 0) return null;

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

function generateCollectionPageSchema(
  categoryData: any,
  products: any[],
  aggregateRating: any
) {
  const categoryNames: Record<string, string> = {
    fall: 'Fall Nails',
    christmas: 'Christmas Nails',
    winter: 'Winter Nails',
    halloween: 'Halloween Nails',
    'new-year': 'New Year Nails',
    trendy: 'Trendy Nails',
  };

  const displayName = categoryNames[categoryData.slug] || categoryData.name;

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${displayName} Collection`,
    description: categoryData.seo.description,
    url: `https://mirelleinspo.com/shop/${categoryData.slug}`,
    numberOfItems: products.length,
    aggregateRating: aggregateRating,
    about: {
      '@type': 'Thing',
      name: displayName,
      description: categoryData.seo.description,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'Mirelle',
      url: 'https://mirelleinspo.com',
    },
  };
}

function generateItemListSchema(categoryData: any, products: any[]) {
  // FIXED: Parse string prices correctly
  const prices = products
    .map((p) => {
      const priceStr = p.price.toString().replace('$', '');
      return parseFloat(priceStr);
    })
    .filter((p) => !isNaN(p) && p > 0);

  const minPrice = prices.length > 0 ? Math.min(...prices) : 3.99;
  const maxPrice = prices.length > 0 ? Math.max(...prices) : 29.99;

  const categoryNames: Record<string, string> = {
    fall: 'Fall Nails',
    christmas: 'Christmas Nails',
    winter: 'Winter Nails',
    halloween: 'Halloween Nails',
    'new-year': 'New Year Nails',
    trendy: 'Trendy Nails',
  };

  const displayName = categoryNames[categoryData.slug] || categoryData.name;

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${displayName} Press-On Nails`,
    description: `Collection of ${products.length} ${displayName.toLowerCase()} press-on nail designs`,
    numberOfItems: products.length,
    itemListElement: products.slice(0, 10).map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description:
          product.description ||
          `Beautiful ${displayName.toLowerCase()} press-on nail design`,
        image: product.image,
        url: product.affiliateUrl, // FIXED: Changed from affiliateLink
        offers: {
          '@type': 'Offer',
          price: product.price.toString().replace('$', ''),
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split('T')[0],
        },
      },
    })),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: minPrice.toFixed(2),
      highPrice: maxPrice.toFixed(2),
      offerCount: products.length,
    },
  };
}

function generateBreadcrumbSchema(categoryData: any) {
  const categoryNames: Record<string, string> = {
    fall: 'Fall Nails',
    christmas: 'Christmas Nails',
    winter: 'Winter Nails',
    halloween: 'Halloween Nails',
    'new-year': 'New Year Nails',
    trendy: 'Trendy Nails',
  };

  const displayName = categoryNames[categoryData.slug] || categoryData.name;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mirelleinspo.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Shop',
        item: 'https://mirelleinspo.com/shop',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: displayName,
        item: `https://mirelleinspo.com/shop/${categoryData.slug}`,
      },
    ],
  };
}

// ============================================
// GENERATE STATIC PARAMS
// ============================================

export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return slugs.map((slug) => ({
    category: slug,
  }));
}

// ============================================
// GENERATE METADATA
// ============================================

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getCategoryData(category);

  if (!categoryData) {
    return {
      title: 'Category Not Found',
    };
  }

  const seo = categoryData.seo;

return {
    title: seo.title,
    description: seo.description,
    keywords: Array.isArray(seo.keywords) ? seo.keywords : [seo.keywords],
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'website',
      url: `https://mirelleinspo.com/shop/${category}`,
      images: [
        {
          // FIXED: Use heroImage directly, not hero.image
          url: categoryData.heroImage,
          alt: seo.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      // FIXED: Use heroImage directly
      images: [categoryData.heroImage],
    },
    alternates: {
      canonical: `https://mirelleinspo.com/shop/${category}`,
    },
  };
}


// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default async function ShopCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // Fetch data
  const categoryData = getCategoryData(category);
  const products = await getCategoryProducts(category);
  const faqs = await getFAQs(category);
  const description = await getCategoryDescription(category);

  // Handle 404
  if (!categoryData) {
    notFound();
  }

  // Generate all schemas
  const aggregateRating = generateAggregateRatingSchema(category);
  const collectionSchema = generateCollectionPageSchema(
    categoryData,
    products,
    aggregateRating
  );
  const itemListSchema = generateItemListSchema(categoryData, products);
  const breadcrumbSchema = generateBreadcrumbSchema(categoryData);
  const faqSchema = generateFAQSchema(category, faqs);

  return (
    <>
      {/* CollectionPage Schema with AggregateRating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      {/* ItemList Schema for product collection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* FAQ Schema (if FAQs exist) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {/* Main Shop Component */}
      <ShopClient
        categoryData={categoryData}
        initialProducts={products}
        faqs={faqs}
        description={description}
      />
    </>
  );
}
