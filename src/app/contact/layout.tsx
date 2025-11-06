// src/app/contact/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Mirellé - Questions? Collaborations? We Reply Fast",
  description: "Got nail questions or collab ideas? Email team.mirelle@gmail.com. 24-48hr response time. Business inquiries, design requests, partnerships welcome. Let's chat!",
  keywords: [
    "contact Mirellé",
    "nail design inquiries",
    "brand collaboration nails",
    "nail blog contact",
    "partnership opportunities",
    "nail design requests",
    "business inquiries nails",
    "Mirellé email",
    "nail inspiration contact"
  ],
  authors: [{ name: "Mirelle" }],
  creator: "Mirelle",
  publisher: "Mirelle",
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
    title: "Contact Mirellé - We Reply Within 24-48 Hours",
    description: "Questions about nails? Want to collaborate? Email team.mirelle@gmail.com. Business inquiries, design requests, partnerships welcome. Fast response guaranteed!",
    type: "website",
    url: "https://mirelleinspo.com/contact",
    siteName: "Mirelle",
    locale: "en_US",
    images: [
      {
        url: "https://mirelleinspo.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "Contact Mirellé for nail design inquiries, brand collaborations, and partnership opportunities",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mirellé - Fast Response Guaranteed",
    description: "Questions? Collabs? Design requests? We reply in 24-48hrs. Email team.mirelle@gmail.com",
    images: ["https://mirelleinspo.com/og-default.png"],
    creator: "@mirelleinspo",
    site: "@mirelleinspo",
  },
  other: {
    "pin:description": "Contact Mirellé for nail questions, collaborations, design requests. Fast 24-48hr response. Email team.mirelle@gmail.com",
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
