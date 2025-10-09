import { Metadata } from 'next';
import NewYearClient from './NewYearClient';

export const metadata: Metadata = {
  title: 'New Year Nails - 50+ Glamorous Party Nail Designs | Mirelle',
  description: 'Shop 50+ premium New Year nail designs with glitter, gold, and elegant party-ready styles. Sparkling press-on nails starting at $3.99 with fast shipping.',
  keywords: 'new year nails, party nail designs, glitter nails, gold nails, nye press-on nails, celebration nails, sparkly nail art, new years eve nails',
  authors: [{ name: 'Mirelle' }],
  creator: 'Mirelle',
  publisher: 'Mirelle',
  alternates: {
    canonical: 'https://mirelleinspo.com/shop/new-year',
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
    title: 'New Year Nails - 50+ Glamorous Party Nail Designs | Mirelle',
    description: 'Shop 50+ premium New Year nail designs with glitter, gold, and elegant party-ready styles. Sparkling press-on nails starting at $3.99 with fast shipping.',
    type: 'website',
    url: 'https://mirelleinspo.com/shop/new-year',
    siteName: 'Mirelle',
    locale: 'en_US',
    images: [{
      url: 'https://mirelleinspo.com/new-year-nails-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'New Year Nails Collection - Glamorous Party Press-On Designs',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Year Nails - 50+ Party Designs | Mirelle',
    description: 'Shop New Year nail designs from $3.99',
    images: ['https://mirelleinspo.com/new-year-nails-hero.jpg'],
  },
};

export default function NewYearPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'New Year Nails Collection',
    description: '50+ premium New Year and party nail designs',
    url: 'https://mirelleinspo.com/shop/new-year',
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
        name: 'New Year Nails',
        item: 'https://mirelleinspo.com/shop/new-year',
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
      <NewYearClient />
    </>
  );
}
