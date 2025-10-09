import { Metadata } from 'next';
import TrendyClient from './TrendyClient';

export const metadata: Metadata = {
  title: 'Trendy Nails - 50+ Latest Fashion Nail Designs 2025 | Mirelle',
  description: 'Shop 50+ trending nail designs with chrome finishes, modern styles, and the hottest 2025 nail art. Fashion-forward press-on nails starting at $3.99.',
  keywords: 'trendy nails 2025, latest nail designs, fashion nails, chrome nails, modern nail art, trending press-on nails, viral nail designs, nail trends',
  authors: [{ name: 'Mirelle' }],
  creator: 'Mirelle',
  publisher: 'Mirelle',
  alternates: {
    canonical: 'https://mirelleinspo.com/shop/trendy',
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
    title: 'Trendy Nails - 50+ Latest Fashion Nail Designs 2025 | Mirelle',
    description: 'Shop 50+ trending nail designs with chrome finishes, modern styles, and the hottest 2025 nail art. Fashion-forward press-on nails starting at $3.99.',
    type: 'website',
    url: 'https://mirelleinspo.com/shop/trendy',
    siteName: 'Mirelle',
    locale: 'en_US',
    images: [{
      url: 'https://mirelleinspo.com/trendsection.jpg',
      width: 1200,
      height: 630,
      alt: 'Trendy Nails Collection - Latest Fashion Press-On Designs 2025',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trendy Nails - 50+ Fashion Designs | Mirelle',
    description: 'Shop trending nail designs from $3.99',
    images: ['https://mirelleinspo.com/trendsection.jpg'],
  },
};

export default function TrendyPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Trendy Nails Collection',
    description: '50+ premium trendy and fashion-forward nail designs',
    url: 'https://mirelleinspo.com/shop/trendy',
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
        name: 'Trendy Nails',
        item: 'https://mirelleinspo.com/shop/trendy',
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
      <TrendyClient />
    </>
  );
}
