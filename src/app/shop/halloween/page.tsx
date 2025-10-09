import { Metadata } from 'next';
import HalloweenClient from './HalloweenClient';

export const metadata: Metadata = {
  title: 'Halloween Nails - 50+ Spooky Nail Designs & Press-Ons | Mirelle',
  description: 'Shop 50+ premium Halloween nail designs featuring pumpkins, ghosts, spiders, and spooky themes. Party-ready press-on nails starting at $3.99.',
  keywords: 'halloween nails, spooky nail designs, pumpkin nails, halloween press-on nails, ghost nails, halloween party nails, october nail art, scary nails',
  authors: [{ name: 'Mirelle' }],
  creator: 'Mirelle',
  publisher: 'Mirelle',
  alternates: {
    canonical: 'https://mirelleinspo.com/shop/halloween',
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
    title: 'Halloween Nails - 50+ Spooky Nail Designs & Press-Ons | Mirelle',
    description: 'Shop 50+ premium Halloween nail designs featuring pumpkins, ghosts, spiders, and spooky themes. Party-ready press-on nails starting at $3.99.',
    type: 'website',
    url: 'https://mirelleinspo.com/shop/halloween',
    siteName: 'Mirelle',
    locale: 'en_US',
    images: [{
      url: 'https://mirelleinspo.com/halloweenbannerimg.jpg',
      width: 1200,
      height: 630,
      alt: 'Halloween Nails Collection - Spooky Press-On Nail Designs',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Halloween Nails - 50+ Spooky Designs | Mirelle',
    description: 'Shop Halloween nail designs from $3.99',
    images: ['https://mirelleinspo.com/halloweenbannerimg.jpg'],
  },
};

export default function HalloweenPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Halloween Nails Collection',
    description: '50+ premium Halloween and spooky nail designs',
    url: 'https://mirelleinspo.com/shop/halloween',
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
        name: 'Halloween Nails',
        item: 'https://mirelleinspo.com/shop/halloween',
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
      <HalloweenClient />
    </>
  );
}
