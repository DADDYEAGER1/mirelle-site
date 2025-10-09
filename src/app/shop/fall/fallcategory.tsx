import { Metadata } from 'next';
import FallNailsCategory from './FallNailsCategory';

export const metadata: Metadata = {
  title: 'Fall Nails - 50+ Autumn Nail Designs & Press-Ons | Mirelle',
  description: 'Shop 50+ premium fall nail designs featuring maple leaves, pumpkins, and warm autumn colors. Affordable press-on nails starting at $3.99 with free shipping.',
  keywords: 'fall nails, autumn nail designs, maple leaf nails, thanksgiving nails, fall press-on nails, seasonal nail art, fall manicure ideas',
  authors: [{ name: 'Mirelle' }],
  creator: 'Mirelle',
  publisher: 'Mirelle',
  alternates: {
    canonical: 'https://mirelleinspo.com/shop/fall',
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
    title: 'Fall Nails - 50+ Autumn Nail Designs & Press-Ons | Mirelle',
    description: 'Shop 50+ premium fall nail designs featuring maple leaves, pumpkins, and warm autumn colors. Affordable press-on nails starting at $3.99.',
    type: 'website',
    url: 'https://mirelleinspo.com/shop/fall',
    siteName: 'Mirelle',
    locale: 'en_US',
    images: [{
      url: 'https://mirelleinspo.com/fall-nails-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Fall Nails Collection - Autumn Press-On Nail Designs',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fall Nails - 50+ Autumn Designs | Mirelle',
    description: 'Shop premium fall nail designs from $3.99',
    images: ['https://mirelleinspo.com/fall-nails-hero.jpg'],
    creator: '@mirelleinspo',
    site: '@mirelleinspo',
  },
};

export default function FallPage() {
  return <FallNailsCategory />;
}
