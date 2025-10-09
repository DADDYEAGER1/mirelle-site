import { Metadata } from 'next';
import WinterClient from './WinterClient';

export const metadata: Metadata = {
  title: 'Winter Nails - 50+ Cozy Seasonal Nail Designs | Mirelle',
  description: 'Shop 50+ premium winter nail designs featuring snowflakes, icy blues, and elegant seasonal styles. Cozy press-on nails starting at $3.99 with free shipping.',
  keywords: 'winter nails, snowflake nail designs, winter press-on nails, icy nail art, seasonal winter nails, cozy nail designs, winter manicure ideas',
  authors: [{ name: 'Mirelle' }],
  creator: 'Mirelle',
  publisher: 'Mirelle',
  alternates: {
    canonical: 'https://mirelleinspo.com/shop/winter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Winter Nails - 50+ Cozy Seasonal Nail Designs | Mirelle',
    description: 'Shop 50+ premium winter nail designs featuring snowflakes, icy blues, and elegant seasonal styles. Cozy press-on nails starting at $3.99 with free shipping.',
    type: 'website',
    url: 'https://mirelleinspo.com/shop/winter',
    siteName: 'Mirelle',
    locale: 'en_US',
    images: [{
      url: 'https://mirelleinspo.com/winternail.jpg',
      width: 1200,
      height: 630,
      alt: 'Winter Nails Collection - Cozy Seasonal Press-On Designs',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winter Nails - 50+ Cozy Designs | Mirelle',
    description: 'Shop premium winter nail designs from $3.99',
    images: ['https://mirelleinspo.com/winternail.jpg'],
  },
};

export default function WinterPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Winter Nails Collection',
    description: '50+ premium winter and seasonal nail designs',
    url: 'https://mirelleinspo.com/shop/winter',
  };

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
        name: 'Winter Nails',
        item: 'https://mirelleinspo.com/shop/winter',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WinterClient />
    </>
  );
}
