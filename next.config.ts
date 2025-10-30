import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  // ✅ Image Optimization with specific domains
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mirelleinspo.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.media-amazon.com', // Amazon product images
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com', // Specific Amazon domain
      },
    ],
  },

  // ✅ Headers for SEO and Security
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
      // Cache static assets aggressively
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ✅ REMOVED - Sitemap rewrite (using next-sitemap instead)
  // The sitemap rewrite was causing conflicts with next-sitemap

  // Enable SWR for ISR with optimized settings
  onDemandEntries: {
    maxInactiveAge: 60 * 1000, // Keep pages in memory for 60s
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

  // Optimized fonts and package imports
  optimizeFonts: true,
  optimizePackageImports: [
    "@chakra-ui/react",
    "@headlessui/react",
    "date-fns",
    "lucide-react",
  ],

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lodash-es", "fuse.js"],
    optimizeCss: true,
  },

  // Bundle analyzer for production builds
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Common chunk
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
