
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Headers for SEO and Security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: "/new year nails",
        destination: "/shop/new-year",
        permanent: true,
      },
      // Add more redirects if you have duplicate routes
    ];
  },

  // Rewrites for clean URLs
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/sitemap.xml",
          destination: "/api/sitemap",
        },
      ],
    };
  },

  // Enable SWR (Stale While Revalidate) for ISR
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },

  // Compression
  compress: true,

  // Generate ETags for better caching
  generateEtags: true,

  // Trailing slashes for consistency
  trailingSlash: false,

  // React strict mode for better error detection
  reactStrictMode: true,

  // Optimized builds
  optimizeFonts: true,
  optimizePackageImports: [
    "@chakra-ui/react",
    "@headlessui/react",
    "date-fns",
  ],

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lodash-es"],
  },
};

export default nextConfig;
