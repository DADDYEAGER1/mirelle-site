import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mirelle - Modern Nail Ideas & Trends for Every Mood",
  description: "Discover modern nail ideas, seasonal inspirations, nail care tips, and favorite product picks curated by Mirelle. Your go-to destination for Pinterest-worthy nail art and trends.",
  keywords: "nail art, nail ideas, nail care, seasonal nails, nail trends, Pinterest nails, nail inspiration",
  authors: [{ name: "Mirelle" }],
  openGraph: {
    title: "Mirelle - Modern Nail Ideas & Trends for Every Mood",
    description: "Discover modern nail ideas, seasonal inspirations, nail care tips, and favorite product picks curated by Mirelle.",
    type: "website",
  },
  verification: {
    google: "ca-pub-1145734682794444", // ← Paste your Google site verification code here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
