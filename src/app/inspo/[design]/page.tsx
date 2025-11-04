// src/app/inspo/[design]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import InspoClient from '@/components/Inspo/InspoClient';
import {
  getDesignData,
  getDesignImages,
  getAllDesignSlugs,
  getRelatedDesigns,
} from '@/lib/inspo';

// Generate static params for all design pages
export async function generateStaticParams() {
  const slugs = getAllDesignSlugs();
  return slugs.map((slug) => ({
    design: slug,
  }));
}

// Generate metadata for each design page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ design: string }>;
}): Promise<Metadata> {
  const { design } = await params;
  const designData = getDesignData(design);

  if (!designData) {
    return {
      title: 'Design Not Found',
    };
  }

  const seo = designData.seo;
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
      url: `https://mirelleinspo.com/inspo/${design}`,
      siteName: 'Mirelle',
      locale: 'en_US',
      images: [
        {
          url: seo.ogImage || `https://mirelleinspo.com${designData.heroImage}`,
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
      images: [seo.ogImage || `https://mirelleinspo.com${designData.heroImage}`],
    },
    alternates: {
      canonical: `https://mirelleinspo.com/inspo/${design}`,
    },
  };
}

// Schema generation functions
function generateImageGallerySchema(designData: any, images: any[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `https://mirelleinspo.com/inspo/${designData.slug}#gallery`,
    name: `${designData.displayName} Nail Design Gallery`,
    description: designData.seo.description,
    url: `https://mirelleinspo.com/inspo/${designData.slug}`,
    image: images.slice(0, 20).map(img => ({
      '@type': 'ImageObject',
      contentUrl: img.url,
      name: img.alt,
      description: img.alt,
    })),
  };
}

function generateCollectionPageSchema(designData: any, images: any[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `https://mirelleinspo.com/inspo/${designData.slug}#collection`,
    name: `${designData.displayName} Collection`,
    description: designData.seo.description,
    url: `https://mirelleinspo.com/inspo/${designData.slug}`,
    numberOfItems: images.length,
    about: {
      '@type': 'Thing',
      name: designData.displayName,
      description: designData.description,
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://mirelleinspo.com/#website',
      name: 'Mirellé',
      url: 'https://mirelleinspo.com',
    },
  };
}

function generateBreadcrumbSchema(designData: any) {
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
        name: 'Inspiration',
        item: 'https://mirelleinspo.com/inspo',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: designData.displayName,
        item: `https://mirelleinspo.com/inspo/${designData.slug}`,
      },
    ],
  };
}

export default async function InspoDesignPage({
  params,
}: {
  params: Promise<{ design: string }>;
}) {
  const { design } = await params;

  const designData = getDesignData(design);
  const images = await getDesignImages(design);
  const relatedDesigns = getRelatedDesigns(design, 3);

  if (!designData) {
    notFound();
  }

  const imageGallerySchema = generateImageGallerySchema(designData, images);
  const collectionSchema = generateCollectionPageSchema(designData, images);
  const breadcrumbSchema = generateBreadcrumbSchema(designData);

  // Breadcrumb items for component
  const breadcrumbItems = [
    { label: 'Inspiration', href: '/inspo' }
  ];

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(imageGallerySchema),
        }}
      />

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

      <InspoClient
        designData={designData}
        initialImages={images}
        relatedDesigns={relatedDesigns}
        breadcrumbItems={breadcrumbItems}
      />
    </>
  );
}
