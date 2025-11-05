import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ShopClient from '@/components/Shop/ShopClient';
import {
  getCategoryData,
  getCategoryProducts,
  getAllCategorySlugs,
} from '@/lib/shop';

async function getFAQs(category: string) {
  try {
    const faqModule = await import(`@/content/shop-faqs/${category}.json`);
    return faqModule.default.faqs || faqModule.faqs || [];
  } catch {
    return [];
  }
}

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
  products: any[]
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
    '@id': `https://mirelleinspo.com/shop/${categoryData.slug}#collection`,
    name: `${displayName} Collection`,
    description: categoryData.seo.description,
    url: `https://mirelleinspo.com/shop/${categoryData.slug}`,
    numberOfItems: products.length,
    about: {
      '@type': 'Thing',
      name: displayName,
      description: categoryData.seo.description,
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://mirelleinspo.com/#website',
      name: 'Mirellé',
      url: 'https://mirelleinspo.com',
    },
  };
}

function generateItemListSchema(categoryData: any, products: any[]) {
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
        '@id': `https://mirelleinspo.com/shop/${categoryData.slug}#product-${product.id}`,
        name: product.name,
        description: product.description || `Beautiful ${displayName.toLowerCase()} press-on nail design`,
        image: product.image,
        url: product.affiliateUrl,
        brand: product.brand ? {
          '@type': 'Brand',
          name: product.brand
        } : undefined,
        offers: {
          '@type': 'Offer',
          url: product.affiliateUrl,
          price: product.price.toString().replace('$', ''),
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split('T')[0],
          seller: {
            '@type': 'Organization',
            name: 'Amazon'
          }
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

export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return slugs.map((slug) => ({
    category: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getCategoryData(category);

  if (!categoryData) {
    return { title: 'Category Not Found' };
  }

  const seo = categoryData.seo;
  const keywordsArray = Array.isArray(seo.keywords) 
    ? seo.keywords 
    : seo.keywords.split(',').map((k: string) => k.trim());
  
  const ogImageUrl = seo.ogImage || `https://mirelleinspo.com${categoryData.heroImage}`;
  
  // 🆕 Get products for aggregate data
  const products = await getCategoryProducts(category);
  const productCount = products.length;
  
  // 🆕 Calculate price range for Pinterest shopping
  const prices = products
    .map(p => parseFloat(p.price.toString().replace('$', '')))
    .filter(p => !isNaN(p) && p > 0);
  const minPrice = prices.length > 0 ? Math.min(...prices).toFixed(2) : '3.99';
  const maxPrice = prices.length > 0 ? Math.max(...prices).toFixed(2) : '29.99';

  return {
    title: seo.title,
    description: seo.description,
    keywords: keywordsArray,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'website',
      url: `https://mirelleinspo.com/shop/${category}`,
      siteName: 'Mirellé',
      locale: 'en_US',
      images: [{
        url: ogImageUrl,
        alt: seo.title,
        width: 1200,
        height: 630,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `https://mirelleinspo.com/shop/${category}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      // 🆕 MAXIMUM PINTEREST SHOPPING OPTIMIZATION
      'pin:description': seo.description,
      'pin:media': ogImageUrl,
      'pinterest-rich-pin': 'true',
      
      // 🆕 Product catalog meta
      'product:category': categoryData.slug,
      'product:availability': 'in stock',
      'product:condition': 'new',
      'product:retailer': 'Amazon',
      
      // 🆕 Price range for Pinterest Product Pins
      'product:price:amount': minPrice,
      'product:price:currency': 'USD',
      'product:price_range:min': minPrice,
      'product:price_range:max': maxPrice,
      
      // 🆕 Inventory signals
      'product:item_group_id': category,
      'product:plural_title': `${categoryData.name} Collection`,
      
      // 🆕 Pinterest shopping category
      'og:type': 'product.group',
      'pinterest:category': 'Beauty > Nail Care',
      
      // 🆕 Collection size (helps Pinterest rank)
      'og:product:count': productCount.toString(),
      
      // 🆕 Enhanced image data
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:alt': seo.title,
      'og:image:type': 'image/jpeg',
      
      // 🆕 Pinterest board suggestion
      'pinterest:board_suggestion': categoryData.name,
      
      // 🆕 Shopping-specific labels
      'twitter:label1': 'Products',
      'twitter:data1': `${productCount} items`,
      'twitter:label2': 'Price Range',
      'twitter:data2': `$${minPrice} - $${maxPrice}`,
    },
  };
}

export default async function ShopCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const categoryData = getCategoryData(category);
  const products = await getCategoryProducts(category);
  const faqs = await getFAQs(category);
  const description = await getCategoryDescription(category);

  if (!categoryData) {
    notFound();
  }

  const collectionSchema = generateCollectionPageSchema(categoryData, products);
  const itemListSchema = generateItemListSchema(categoryData, products);
  const breadcrumbSchema = generateBreadcrumbSchema(categoryData);
  const faqSchema = generateFAQSchema(category, faqs);

  // Breadcrumb items for component
  const breadcrumbItems = [
    { label: 'Shop', href: '/shop' }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <ShopClient
        categoryData={categoryData}
        initialProducts={products}
        faqs={faqs}
        description={description}
        breadcrumbItems={breadcrumbItems}
      />
    </>
  );
}
