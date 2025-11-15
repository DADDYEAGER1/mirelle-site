import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  // ✅ Image Optimization - LOCAL IMAGES PRIORITY + Remote fallback
  images: {
    // Local images from public folder (PRIORITY)
    localPatterns: [
      {
        pathname: '/images/shop/**',
        search: '',
      },
      {
        pathname: '/images/**',
        search: '',
      },
    ],
    
    // Modern image formats (60-70% smaller files)
    formats: ['image/avif', 'image/webp'],
    
    // Cache optimized images for 1 year
    minimumCacheTTL: 31536000,
    
    // Responsive image sizes for different devices
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Image quality (85 = good balance between size and quality)
    quality: 85,
    
    // Remote patterns (fallback for external images)
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
        hostname: '*.media-amazon.com', // Amazon product images (legacy)
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com', // Specific Amazon domain (legacy)
      },
    ],
    
    // Don't disable optimization (we want Next.js to optimize)
    unoptimized: false,
    
    // Dangerous allow SVG (only if you trust the source)
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ✅ Headers for SEO, Security, and Caching
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
      // ✅ AGGRESSIVE CACHING for shop images (they rarely change)
      {
        source: "/images/shop/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 year cache
          },
        ],
      },
      // Cache all other images
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache Next.js static assets
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // ✅ Cache optimized Next.js images (from /_next/image)
      {
        source: "/_next/image/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Enable SWR for ISR with optimized settings
  onDemandEntries: {
    maxInactiveAge: 60 * 1000, // Keep pages in memory for 60s
    pagesBufferLength: 5,
  },

  // ✅ Performance optimizations
  compress: true,
  generateEtags: true,
  trailingSlash: false,
  reactStrictMode: true,
  optimizeFonts: true,
  
  // Optimize package imports
  optimizePackageImports: [
    "@chakra-ui/react",
    "@headlessui/react",
    "date-fns",
    "lucide-react",
  ],

  // ✅ Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lodash-es", "fuse.js"],
    optimizeCss: true,
    // ✅ NEW: Turbopack for faster dev builds (Next.js 14+)
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // ✅ Webpack optimization for production builds
  webpack: (config, { isServer, dev }) => {
    // Only optimize in production
    if (!isServer && !dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk (node_modules)
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Common chunk (shared code)
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
            // ✅ NEW: Separate chunk for large libraries
            lib: {
              test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
              name: 'lib',
              chunks: 'all',
              priority: 30,
            },
          },
        },
        // ✅ Minimize bundle size
        minimize: true,
      };
    }

    // ✅ Handle SVGs as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // ✅ Enable source maps in production (for debugging)
  productionBrowserSourceMaps: false, // Set to true only if needed (increases build size)

  // ✅ Redirect old URLs if needed
  async redirects() {
    return [
      // Example: Redirect old Amazon image paths to new local paths (if needed)
      // {
      //   source: '/old-path/:path*',
      //   destination: '/new-path/:path*',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
