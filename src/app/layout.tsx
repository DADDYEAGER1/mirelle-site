import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Html, Head, Main, NextScript } from 'next/document'


export const metadata: Metadata = {
  title: "Mirelle - Modern Nail Ideas & Trends for Every Mood",
  description:
    "Discover modern nail ideas, seasonal inspirations, nail care tips, and favorite product picks curated by Mirelle.",
  keywords:
    "nail art, nail ideas, nail care, seasonal nails, nail trends, Pinterest nails, nail inspiration",
  authors: [{ name: "Mirelle" }],
  openGraph: {
    title: "Mirelle - Modern Nail Ideas & Trends for Every Mood",
    description:
      "Discover modern nail ideas, seasonal inspirations, nail care tips, and favorite product picks curated by Mirelle.",
    type: "website",
    url: "https://mirelleinspo.com",
    images: [
      {
        url: "https://mirelleinspo.com/apple-touch-icon.png",
        width: 512,
        height: 512,
        alt: "Mirelle Logo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicon & App Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ Schema.org Logo JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mirelle",
              url: "https://mirelleinspo.com",
              logo: "https://mirelleinspo.com/apple-touch-icon.png",
            }),
          }}
        />

        {/* ✅ Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased">
        {/* ✅ Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPW9XBW8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ GA4 gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4BZ9QKQZ73"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4BZ9QKQZ73');
          `}
        </Script>

        {/* ✅ AdSense meta */}
        <Script id="adsense-meta" strategy="beforeInteractive">
        {`document.head.insertAdjacentHTML("beforeend", '<meta name="google-adsense-account" content="ca-pub-7363450946693589">')`}
        </Script>

        <Script
        id="adsense-script"
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7363450946693589"
        crossOrigin="anonymous"
        />

                {/* ✅ Required for AdSense verification */}
        <meta
          name="google-adsense-account"
          content="ca-pub-7363450946693589"
        />


        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
