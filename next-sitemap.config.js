/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mirelleinspo.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  
  // Exclude admin/private pages from sitemap
  exclude: [
    '/api/*',
    '/admin/*',
    '/server-sitemap.xml',
  ],

  // Robot.txt configuration - optimized for AI bots
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly allow AI crawlers
      {
        userAgent: 'GPTBot', // OpenAI's GPT crawler
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User', // ChatGPT user agent
        allow: '/',
      },
      {
        userAgent: 'Claude-Web', // Anthropic's Claude crawler
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot', // Anthropic's bot
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai', // Anthropic AI
        allow: '/',
      },
      {
        userAgent: 'Googlebot', // Google
        allow: '/',
      },
      {
        userAgent: 'Bingbot', // Bing
        allow: '/',
      },
      {
        userAgent: 'CCBot', // Common Crawl (used by many AI models)
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot', // Perplexity AI
        allow: '/',
      },
      {
        userAgent: 'YouBot', // You.com AI search
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://mirelleinspo.com/sitemap.xml',
    ],
  },

  // Transform function to modify URLs before adding to sitemap
  transform: async (config, path) => {
    // Custom priority for important pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/blog')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/topics')) {
      priority = 0.9;
      changefreq: 'weekly';
    } else if (path.startsWith('/shop')) {
      priority = 0.7;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
}
