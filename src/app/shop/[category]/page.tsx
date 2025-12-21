import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryClient from '@/components/Shop/CategoryClient';
import {
  getCategoryData,
  getCategoryProducts,
  getAllCategorySlugs,
} from '@/lib/shop';

// Schema generation functions (keep existing ones)
function generateCollectionPageSchema(categoryData: any, products: any[]) {
  const categoryNames: Record<string, string> = {
    fall: 'Fall Nails',
    christmas: 'Christmas Nails',
    winter: 'Winter Nails',
    halloween: 'Halloween Nails',
    'new-year': 'New Year Nails',
    trendy: 'Trendy Nails',
  };

  const displayName = categoryNames[categoryData.slug] || categoryData.slug;

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `https://mirelleinspo.com/shop/${categoryData.slug}#collection`,
    name: `${displayName} Collection`,
    description: categoryData.seo.description,
    url: `https://mirelleinspo.com/shop/${categoryData.slug}`,
    numberOfItems: products.length,
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

  const displayName = categoryNames[categoryData.slug] || categoryData.slug;

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

  return {
    title: seo.title,
    description: seo.description,
    keywords: keywordsArray,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'website',
      url: `https://mirelleinspo.com/shop/${category}`,
    },
    alternates: {
      canonical: `https://mirelleinspo.com/shop/${category}`,
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

  if (!categoryData) {
    notFound();
  }

  // Get related categories with images
  const relatedCategories = categoryData.relatedCategories
    .slice(0, 3)
    .map((slug) => {
      const relatedCat = getCategoryData(slug);
      return relatedCat
        ? {
            slug: relatedCat.slug,
            displayName: relatedCat.displayName,
            imageUrl: relatedCat.heroImage,
          }
        : null;
    })
    .filter(Boolean) as Array<{
    slug: string;
    displayName: string;
    imageUrl: string;
  }>;

  const collectionSchema = generateCollectionPageSchema(categoryData, products);
  const breadcrumbSchema = generateBreadcrumbSchema(categoryData);

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
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <CategoryClient
        categorySlug={category}
        categoryData={categoryData}
        products={products}
        relatedCategories={relatedCategories}
      />
    </>
  );
}