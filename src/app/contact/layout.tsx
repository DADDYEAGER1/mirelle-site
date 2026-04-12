// src/app/contact/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Got Questions? We Reply in 24hrs (Collabs Welcome!)",
  description: "Questions about 2026 nail trends? Brand collab ideas? Email contact@mirelleinspo.com. 24hr response guaranteed. Design requests, partnerships, press inquiries welcome!",
  keywords: [
    "contact Mirellé Inspo",
    "nail blog contact",
    "brand collaboration nails",
    "2026 nail trend inquiries",
    "partnership opportunities",
    "nail design requests",
    "press inquiries nails",
    "Mirellé Inspo email",
    "business inquiries",
    "nail influencer contact"
  ],
  authors: [{ name: "Mirellé Inspo Team" }],
  creator: "Mirellé Inspo",
  publisher: "Mirellé Inspo",
  alternates: {
    canonical: "https://mirelleinspo.com/contact",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Questions? Collabs? We Reply Within 24 Hours!",
    description: "Got 2026 nail trend questions? Brand collabs? Email contact@mirelleinspo.com. Fast replies guaranteed. Design requests, partnerships, press welcome. Let's chat!",
    type: "website",
    url: "https://mirelleinspo.com/contact",
    siteName: "Mirellé Inspo",
    locale: "en_US",
    images: [
      {
        url: "https://mirelleinspo.com/og-contact-mirelle.png",
        width: 1200,
        height: 630,
        alt: "Contact Mirellé Inspo for nail trend inquiries, brand collaborations, partnerships - 24hr response time",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mirellé Inspo - 24hr Response Guaranteed",
    description: "Questions? Collabs? Design ideas? We reply fast! Email contact@mirelleinspo.com. Partnerships welcome →",
    images: ["https://mirelleinspo.com/twitter-contact.png"],
    creator: "@mirelleinspo",
    site: "@mirelleinspo",
  },
  other: {
    "pin:description": "Contact Mirellé Inspo for nail questions, brand collabs, design requests. Fast 24hr response. Email contact@mirelleinspo.com. Partnerships welcome!",
    "pinterest-rich-pin": "true",
    "article:publisher": "https://www.pinterest.com/mirelle_inspo",
    "og:see_also": "https://mirelleinspo.com/contact",
  },
};


export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
