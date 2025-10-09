import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://mirelleinspo.com'),
  title: {
    default: "Mirellé Inspo | Nail Art Ideas, Trends & Tutorials 2025",
    template: "%s | Mirellé Inspo"
  },
  description: "Explore 2025's top nail art trends, DIY tutorials, seasonal nail designs, and expert tips. Get inspired for Pinterest-worthy nails every mood and occasion.",
  keywords: [
    "nail art ideas 2025",
    "nail trends 2025",
    "DIY nail tutorials",
    "seasonal nail designs",
    "Pinterest nails",
    "modern nail inspiration",
    "nail care tips",
    "winter nails 2025",
    "Christmas nails",
    "acrylic nails",
    "gel nail designs",
    "nail art for beginners",
    "salon nail ideas",
    "at-home manicure"
  ],
  authors: [{ name: "Avery chen", url: "https://mirelleinspo.com/about" }],
  creator: "Avery chen",
  publisher: "Mirellé Inspo",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mirelleinspo.com",
    siteName: "Mirellé Inspo",
    title: "Mirellé Inspo | Nail Art Ideas, Trends & Tutorials 2025",
    description: "Discover the latest nail art trends, creative tutorials, seasonal designs, and Pinterest-inspired nail ideas curated by Mirelle.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mirellé Inspo - Nail Art Inspiration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirellé Inspo | Nail Art Ideas & Tutorials 2025",
    description: "Stay ahead with 2025 nail trends, seasonal designs, and Pinterest-worthy tutorials. Expert tips and inspiration for every mood.",
    images: ["/twitter-image.jpg"],
    creator: "@mirelleinspo",
    site: "@mirelleinspo",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://mirelleinspo.com",
  },
  category: "Beauty & Fashion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Enhanced structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mirellé Inspo",
    "alternateName": "Mirelle",
    "url": "https://mirelleinspo.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mirelleinspo.com/apple-touch-icon.png",
      "width": 512,
      "height": 512
    },
    "description": "Expert nail art inspiration, tutorials, and beauty tips for modern women",
    "sameAs": [
      "https://www.pinterest.com/mirelle_inspo",
      "https://www.instagram.com/mirelle_inspo"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://mirelleinspo.com/contact"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mirellé Inspo",
    "url": "https://mirelleinspo.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mirelleinspo.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Fonts with display=swap for better performance */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* AdSense verification meta tag */}
        <meta name="google-adsense-account" content="ca-pub-1145734682794444" />
      </head>

      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPW9XBW8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>

        {/* GA4 Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4BZ9QKQZ73"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4BZ9QKQZ73', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1145734682794444"
          crossOrigin="anonymous"
        />

        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Header />
        <main className="min-h-screen" id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
