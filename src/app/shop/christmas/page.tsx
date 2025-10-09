import { Metadata } from 'next';
import XmasClient from './XmasClient';

// SEO Metadata - Server Side
export const metadata: Metadata = {
  title: 'Christmas Nails - 50+ Festive Holiday Nail Designs | Mirelle',
  description: 'Shop 50+ premium Christmas nail designs with Santa, snowflakes, reindeer, and holiday themes. Festive press-on nails starting at $3.99 with fast shipping.',
  keywords: 'christmas nails, holiday nail designs, festive nails, xmas press-on nails, santa nails, snowflake nails, winter holiday nails, christmas manicure',
  authors: [{ name: 'Mirelle' }],
  creator: 'Mirelle',
  publisher: 'Mirelle',
  alternates: {
    canonical: 'https://mirelleinspo.com/shop/christmas',
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
    title: 'Christmas Nails - 50+ Festive Holiday Nail Designs | Mirelle',
    description: 'Shop 50+ premium Christmas nail designs with Santa, snowflakes, reindeer, and holiday themes. Festive press-on nails starting at $3.99 with fast shipping.',
    type: 'website',
    canonical: 'https://mirelleinspo.com/shop/christmas',
    siteName: 'Mirelle',
    locale: 'en_US',
    images: [{
      url: 'https://mirelleinspo.com/christmas-nails-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Christmas Nails Collection - Festive Holiday Press-On Designs',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christmas Nails - 50+ Festive Holiday Nail Designs | Mirelle',
    description: 'Shop premium Christmas nail designs from $3.99',
    images: ['https://mirelleinspo.com/christmas-nails-hero.jpg'],
  },
};

// Server Component - Just wraps the client
export default function FallPage() {
  // JSON-LD Schema for Products
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Christmas Nails Collection',
    description: '50+ premium Christmas and holiday nail designs',
    url: 'https://mirelleinspo.com/shop/christmas',
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
        name: 'Christmas Nails',
        item: 'https://mirelleinspo.com/shop/christmas',
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Client Component with all interactivity */}
      <FallClient />
    </>
  );
}
