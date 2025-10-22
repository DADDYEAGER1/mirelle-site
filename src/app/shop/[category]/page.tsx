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

// Main page component
export default async function ShopCategoryPage({ params }: { params: { category: string } }) {
  const categoryData = getCategoryData(params.category);
  
  if (!categoryData) {
    notFound();
  }

  const products = await getCategoryProducts(params.category);

  // JSON-LD Schema: CollectionPage
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryData.displayName} Collection`,
    description: `${products.length} premium ${categoryData.displayName.toLowerCase()} and ${categoryData.season.toLowerCase()} nail designs`,
    url: `https://mirelleinspo.com/shop/${params.category}`,
  };

  // JSON-LD Schema: BreadcrumbList
  const breadcrumbSchema = {
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
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Client Component with category data and products */}
      <ShopClient category={categoryData} products={products} />
    </>
  );
}
