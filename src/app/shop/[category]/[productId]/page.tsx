// src/app/shop/[category]/[productId]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductPageContent from '@/components/Shop/ProductPageContent';
import {
  getProductData,
  getCategoryProductIds,
  generateProductSchema,
  generateProductBreadcrumbSchema,
  generateProductFAQSchema,
  getCategoryDisplayName,
} from '@/lib/shopProducts';
import { getAllCategorySlugs } from '@/lib/shop';

// Generate static params for all products
export async function generateStaticParams() {
  const categorySlugs = getAllCategorySlugs();
  const params: Array<{ category: string; productId: string }> = [];

  for (const category of categorySlugs) {
    const productIds = await getCategoryProductIds(category);
    
    for (const productId of productIds) {
      const productData = await getProductData(category, productId);
      if (productData) {
        params.push({
          category,
          productId: productData.slug,
        });
      }
    }
  }

  return params;
}

// Generate metadata for each product page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; productId: string }>;
}): Promise<Metadata> {
  const { category, productId } = await params;
  
  // Find product by slug
  const productIds = await getCategoryProductIds(category);
  let product = null;
  
  for (const id of productIds) {
    const p = await getProductData(category, id);
    if (p && p.slug === productId) {
      product = p;
      break;
    }
  }

  if (!product) {
    return { title: 'Product Not Found' };
  }

  const seo = product.seo;
  const productUrl = `https://mirelleinspo.com/shop/${category}/${productId}`;
  const ogImageUrl = seo.ogImage || `https://mirelleinspo.com${product.image}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'product',
      url: productUrl,
      siteName: 'Mirellé',
      locale: 'en_US',
      images: [
        {
          url: ogImageUrl,
          alt: product.imageAlt || product.name,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: productUrl,
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
      // Pinterest Product Pin optimization
      'pin:description': seo.description,
      'pin:media': ogImageUrl,
      'pinterest-rich-pin': 'true',
      
      // Product-specific meta
      'product:price:amount': product.price.replace('$', ''),
      'product:price:currency': 'USD',
      'product:availability': product.stockStatus === 'in-stock' ? 'in stock' : 'limited',
      'product:condition': 'new',
      'product:retailer': 'Amazon',
      'product:brand': product.brand || 'Premium',
      
      // Enhanced image data
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:alt': product.imageAlt || product.name,
      'og:image:type': 'image/jpeg',
      
      // Shopping labels
      'twitter:label1': 'Price',
      'twitter:data1': product.price,
      'twitter:label2': 'Availability',
      'twitter:data2': product.stockStatus === 'in-stock' ? 'In Stock' : 'Limited',
    },
  };
}

// Main product page component
export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; productId: string }>;
}) {
  const { category, productId } = await params;

  // Find product by slug
  const productIds = await getCategoryProductIds(category);
  let product = null;
  
  for (const id of productIds) {
    const p = await getProductData(category, id);
    if (p && p.slug === productId) {
      product = p;
      break;
    }
  }

  if (!product) {
    notFound();
  }

  const categoryName = getCategoryDisplayName(category);

  // Generate schemas
  const productSchema = generateProductSchema(product, category);
  const breadcrumbSchema = generateProductBreadcrumbSchema(
    product,
    category,
    categoryName
  );
  const faqSchema = product.faqs
    ? generateProductFAQSchema(product.faqs)
    : null;

  // Breadcrumb items for component
  const breadcrumbItems = [
    { label: 'Shop', href: '/shop' },
    { label: categoryName, href: `/shop/${category}` },
  ];

  return (
    <>
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* FAQ Schema (if applicable) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {/* Main product content */}
      <ProductPageContent
        product={product}
        category={category}
        categoryName={categoryName}
        breadcrumbItems={breadcrumbItems}
      />
    </>
  );
}
