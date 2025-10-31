/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mirelleinspo.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,

  // ✅ Exclude non-public pages
  exclude: [
    '/api/*',
    '/admin/*',
    '/server-sitemap.xml',
    '/_next/*',
    '/static/*',
    '/404',
    '/500',
  ],

  // ✅ Optimized robots.txt rules
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/static/'],
      },
      // AI + crawler specific rules
      { userAgent: 'GPTBot', allow: '/', crawlDelay: 1 },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/', crawlDelay: 1 },
      { userAgent: 'ClaudeBot', allow: '/', crawlDelay: 1 },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'CCBot', allow: '/', crawlDelay: 2 },
      { userAgent: 'PerplexityBot', allow: '/', crawlDelay: 1 },
      { userAgent: 'YouBot', allow: '/' },
      { userAgent: 'Pinterestbot', allow: '/' },
      { userAgent: 'facebookexternalhit', allow: '/' },
      // Block unwanted scrapers
      { userAgent: 'SemrushBot', disallow: '/' },
      { userAgent: 'AhrefsBot', disallow: '/' },
    ],
    additionalSitemaps: [
      // Add extra sitemaps here if you create them later
    ],
  },

  // ✅ Intelligent transform for existing pages only
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;
    let lastmod = config.autoLastmod ? new Date().toISOString() : undefined;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/blog') {
      priority = 0.9;
      changefreq = 'daily';
    } else if (path.startsWith('/blog/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/shop')) {
      priority = 0.7;
      changefreq = 'weekly';
    } else if (['/about', '/contact', '/privacy', '/terms'].includes(path)) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod,
      alternateRefs: config.alternateRefs ?? [],
    };
  },

  // ✅ Generate blog posts only (no category/tag URLs)
  additionalPaths: async (config) => {
    const result = [];

    try {
      const fs = require('fs');
      const pathModule = require('path');

      const blogDir = pathModule.join(process.cwd(), 'src/content/blogs');
      const dateModifiedPath = pathModule.join(process.cwd(), 'src/content/metadata/dateModified.json');

      if (fs.existsSync(blogDir)) {
        const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

        let dateModified = {};
        if (fs.existsSync(dateModifiedPath)) {
          dateModified = JSON.parse(fs.readFileSync(dateModifiedPath, 'utf8'));
        }

        files.forEach(file => {
          const slug = file.replace('.md', '');
          const lastmod = dateModified[slug]
            ? new Date(dateModified[slug]).toISOString()
            : new Date().toISOString();

          result.push({
            loc: `/blog/${slug}`,
            changefreq: 'weekly',
            priority: 0.8,
            lastmod,
          });
        });
      }
    } catch (error) {
      console.warn('Error generating additional sitemap paths:', error.message);
    }

    return result;
  },
};
