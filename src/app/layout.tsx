<meta charSet="UTF-8" />
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Mirellé Inspo | Nail Art Ideas, Trends & Tutorials 2025",
  description:
    "Explore 2025's top nail art trends, DIY tutorials, seasonal nail designs, and expert tips. Get inspired for Pinterest-worthy nails every mood and occasion.",
  keywords:
    "nail art ideas, nail trends 2025, DIY nail tutorials, seasonal nail designs, Pinterest nails, modern nail inspiration, nail care tips",
  authors: [{ name: "Mirelle" }],
  openGraph: {
    title: "Mirelle Inspo | Nail Art Ideas, Trends & Tutorials 2025",
    description:
      "Discover the latest nail art trends, creative tutorials, seasonal designs, and Pinterest-inspired nail ideas curated by Mirelle.",
    type: "website",
    url: "https://mirelleinspo.com",
    images: [
      {
        url: "https://mirelleinspo.com/apple-touch-icon.png",
        width: 512,
        height: 512,
        alt: "Mirelle Logo - Nail Inspiration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirelle Inspo | Nail Art Ideas & Tutorials 2025",
    description:
      "Stay ahead with 2025 nail trends, seasonal designs, and Pinterest-worthy tutorials. Expert tips and inspiration for every mood.",
    images: ["https://mirelleinspo.com/apple-touch-icon.png"],
    creator: "@MirelleNails",
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

        {/* ✅ AdSense  */}
        <Script id="adsense-meta" strategy="beforeInteractive">
          {`document.head.insertAdjacentHTML("beforeend", '<meta name="google-adsense-account" content="ca-pub-1145734682794444">')`}
        </Script>
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1145734682794444"
          crossOrigin="anonymous"
        />

        {/* ✅ Required for AdSense verification */}
        <meta
          name="google-adsense-account"
          content="ca-pub-1145734682794444"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mirelle",
              "url": "https://mirelleinspo.com",
              "logo": "https://mirelleinspo.com/apple-touch-icon.png",
              "sameAs": [
                "https://www.instagram.com/yourprofile",
                "https://www.pinterest.com/mirelle_inspo"
              ]
            }`,
          }}
        />

        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
