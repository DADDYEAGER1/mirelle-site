import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";  // ✅ Import Script here

export const metadata: Metadata = {
  title: "Mirelle - Modern Nail Ideas & Trends for Every Mood",
  description: "Discover modern nail ideas, seasonal inspirations, nail care tips, and favorite product picks curated by Mirelle.",
  keywords: "nail art, nail ideas, nail care, seasonal nails, nail trends, Pinterest nails, nail inspiration",
  authors: [{ name: "Mirelle" }],
  openGraph: {
    title: "Mirelle - Modern Nail Ideas & Trends for Every Mood",
    description: "Discover modern nail ideas, seasonal inspirations, nail care tips, and favorite product picks curated by Mirelle.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WPW9XBW8');</script>
        <!-- End Google Tag Manager -->

        {/* ✅ AdSense verification meta tag injected safely */}
        <Script id="adsense-meta" strategy="beforeInteractive">
          {`document.head.insertAdjacentHTML("beforeend", '<meta name="google-adsense-account" content="ca-pub-1145734682794444">')`}
        </Script>
      </head>
      <body className="antialiased">
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WPW9XBW8"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
