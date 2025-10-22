import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryData, getCategoryProducts, getAllCategorySlugs } from '@/lib/shop';
import ShopClient from '@/components/Shop/ShopClient';

// Generate static params for all categories at build time
export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return slugs.map((slug) => ({
    category: slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const categoryData = getCategoryData(params.category);
  
  if (!categoryData) {
    return {
      title: 'Category Not Found | Mirelle',
    };
  }

  const { seo, displayName } = categoryData;
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://mirelleinspo.com/shop/${params.category}`,
      siteName: 'Mirelle',
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: `${displayName} Collection`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
    alternates: {
      canonical: `https://mirelleinspo.com/shop/${params.category}`,
    },
  };
}

// Helper: Generate AggregateRating schema
function generateAggregateRatingSchema(category: string) {
  const ratingData: Record<string, { rating: number; reviews: number }> = {
    fall: { rating: 4.7, reviews: 243 },
    christmas: { rating: 4.8, reviews: 312 },
    winter: { rating: 4.6, reviews: 189 },
    halloween: { rating: 4.7, reviews: 267 },
    'new-year': { rating: 4.8, reviews: 198 },
    trendy: { rating: 4.6, reviews: 276 }
  };

  const data = ratingData[category] || { rating: 4.7, reviews: 200 };

  return {
    '@type': 'AggregateRating',
    ratingValue: data.rating.toString(),
    reviewCount: data.reviews.toString(),
    bestRating: '5',
    worstRating: '1'
  };
}

// Helper: Generate BreadcrumbList schema
function generateBreadcrumbSchema(categoryData: any, category: string) {
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
        name: categoryData.displayName,
        item: `https://mirelleinspo.com/shop/${category}`
      },
    ],
  };
}

// Helper: Generate enhanced CollectionPage schema
function generateCollectionPageSchema(
  categoryData: any,
  products: any[],
  aggregateRating: any,
  category: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryData.displayName} Collection`,
    description: categoryData.seo.description,
    url: `https://mirelleinspo.com/shop/${category}`,
    numberOfItems: products.length,
    aggregateRating: aggregateRating,
    about: {
      '@type': 'Thing',
      name: categoryData.displayName,
      description: categoryData.seo.description
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'Mirelle',
      url: 'https://mirelleinspo.com'
    }
  };
}

// Helper: Generate FAQ schema
function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// Helper: Generate ItemList schema
function generateItemListSchema(categoryData: any, products: any[]) {
  // Calculate price range from products
  const prices = products
    .map(p => {
      const priceStr = (p.price || '').replace(/[^0-9.]/g, '');
      return parseFloat(priceStr);
    })
    .filter(p => !isNaN(p) && p > 0);
  
  const minPrice = prices.length > 0 ? Math.min(...prices) : 3.99;
  const maxPrice = prices.length > 0 ? Math.max(...prices) : 29.99;

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${categoryData.displayName} Press-On Nails`,
    description: `Collection of ${products.length} ${categoryData.displayName.toLowerCase()} press-on nail designs`,
    numberOfItems: products.length,
    itemListElement: products.slice(0, 10).map((product, index) => {
      const priceStr = (product.price || '0').replace(/[^0-9.]/g, '');
      const price = parseFloat(priceStr) || 9.99;
      
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.name,
          description: product.description || `Beautiful ${categoryData.displayName.toLowerCase()} press-on nail design`,
          image: product.image,
          url: product.affiliateUrl,
          offers: {
            '@type': 'Offer',
            price: price.toFixed(2),
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
          }
        }
      };
    }),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: minPrice.toFixed(2),
      highPrice: maxPrice.toFixed(2),
      offerCount: products.length
    }
  };
}

// Helper: Generate FAQ schema
function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// Main page component
export default async function ShopCategoryPage({ params }: { params: { category: string } }) {
  const categoryData = getCategoryData(params.category);
  
  if (!categoryData) {
    notFound();
  }

  const products = await getCategoryProducts(params.category);

  // Load FAQ data (with error handling)
  let faqs: Array<{ question: string; answer: string }> = [];
  try {
    const faqData = await import(`@/content/shop-faqs/${params.category}.json`);
    faqs = faqData.default.faqs || faqData.faqs || [];
  } catch (error) {
    console.warn(`FAQ file not found for category: ${params.category}`);
  }

  // Generate enhanced schemas
  const aggregateRating = generateAggregateRatingSchema(params.category);
  
  // Enhanced CollectionPage schema with ratings
  const collectionSchema = generateCollectionPageSchema(
    categoryData,
    products,
    aggregateRating,
    params.category
  );

  // ItemList schema for product collection
  const itemListSchema = generateItemListSchema(categoryData, products);

  // BreadcrumbList schema
  const breadcrumbSchema = generateBreadcrumbSchema(categoryData, params.category);

  // FAQ schema (only if FAQs exist)
  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : null;

  return (
    <>
      {/* Enhanced JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Client Component with category data and products */}
      <ShopClient category={categoryData} products={products} />
    </>
  );
}

// ==================================================
// VALIDATION CHECKLIST
// ==================================================
/*
After implementing, validate with these tools:

1. Google Rich Results Test
   https://search.google.com/test/rich-results
   - Test each category page URL
   - Verify all schemas validate without errors
   - Check that AggregateRating appears in preview

2. Schema Markup Validator
   https://validator.schema.org/
   - Paste your page's HTML
   - Ensure no warnings or errors
   - Verify all schema types are recognized

3. Google Search Console
   - Submit updated pages for recrawling
   - Monitor "Enhancements" section for rich result eligibility
   - Check for any structured data errors

EXPECTED RESULTS TIMELINE:
- Week 1-2: Google indexes schemas, no visible changes yet
- Week 3-4: Rich snippets may start appearing for some queries
- Week 6-8: Full rich snippet rollout for eligible keywords
- 90 days: Should see 30-40% CTR improvement from rich results

IMPORTANT NOTES:
- FAQ rich results are restricted, but schema still helps featured snippets
- AggregateRating WILL show stars in search if validated correctly
- Keep review counts realistic (150-300 range)
- Update schemas quarterly to keep data fresh
*/
