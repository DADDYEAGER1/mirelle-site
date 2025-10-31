/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mirelleinspo.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  
  // ✅ UPDATED: Exclude admin/private pages from sitemap
  exclude: [
    '/api/*',
    '/admin/*',
    '/server-sitemap.xml',
    '/_next/*',
    '/static/*',
    '/404',
    '/500',
  ],

  // ✅ ENHANCED: Robot.txt configuration - optimized for AI bots
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/static/'], // ✅ NEW: Explicit disallow
      },
      // ✅ AI Crawlers - explicitly allow
      {
        userAgent: 'GPTBot', // OpenAI's GPT crawler
        allow: '/',
        crawlDelay: 1, // ✅ NEW: Be nice to servers
      },
      {
        userAgent: 'ChatGPT-User', // ChatGPT user agent
        allow: '/',
      },
      {
        userAgent: 'Claude-Web', // Anthropic's Claude crawler
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'ClaudeBot', // Anthropic's bot
        allow: '/',
        crawlDelay: 1,
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
        crawlDelay: 2,
      },
      {
        userAgent: 'PerplexityBot', // Perplexity AI
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'YouBot', // You.com AI search
        allow: '/',
      },
      // ✅ NEW: Pinterest crawler (important for your site)
      {
        userAgent: 'Pinterestbot',
        allow: '/',
      },
      // ✅ NEW: Facebook crawler (for OG tags)
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      // ✅ NEW: Block bad bots
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
    ],
    additionalSitemaps: [
      // 'https://mirelleinspo.com/sitemap.xml',
      // ✅ NEW: Add blog-specific sitemap if you want to separate it
      // https://mirelleinspo.com/blog-sitemap.xml',
    ],
  },

  // ✅ ENHANCED: Transform function with blog post date awareness
  transform: async (config, path) => {
    // Custom priority for important pages
    let priority = config.priority;
    let changefreq = config.changefreq;
    let lastmod = config.autoLastmod ? new Date().toISOString() : undefined;

    // Homepage - highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } 
    // Blog posts - high priority with date-based frequency
    else if (path.startsWith('/blog/') && !path.includes('/category/') && !path.includes('/tag/')) {
      priority = 0.8;
      
      // ✅ NEW: Adjust changefreq based on post age (you can enhance this with actual dates)
      const slug = path.replace('/blog/', '');
      
      // For now, use weekly - you can load dateModified.json here for more accuracy
      changefreq = 'weekly';
      
      // ✅ ENHANCEMENT: Load actual lastmod from dateModified.json
      try {
        const fs = require('fs');
        const pathModule = require('path');
        const dateModifiedPath = pathModule.join(process.cwd(), 'src/content/metadata/dateModified.json');
        
        if (fs.existsSync(dateModifiedPath)) {
          const dateModified = JSON.parse(fs.readFileSync(dateModifiedPath, 'utf8'));
          if (dateModified[slug]) {
            lastmod = new Date(dateModified[slug]).toISOString();
          }
        }
      } catch (error) {
        console.warn('Could not load dateModified.json:', error.message);
      }
    }
    // Blog category pages
    else if (path.startsWith('/blog/category/')) {
      priority = 0.7;
      changefreq = 'weekly';
    }
    // Blog tag pages
    else if (path.startsWith('/blog/tag/')) {
      priority = 0.6;
      changefreq = 'weekly';
    }
    // Blog listing page
    else if (path === '/blog') {
      priority = 0.9;
      changefreq = 'daily';
    }
    // Topics pages
    else if (path.startsWith('/topics')) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // Shop pages
    else if (path.startsWith('/shop')) {
      priority = 0.7;
      changefreq = 'weekly';
    }
    // About/static pages
    else if (['/about', '/contact', '/privacy', '/terms'].includes(path)) {
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

  // ✅ NEW: Additional paths to include (if using dynamic routes)
  additionalPaths: async (config) => {
    const result = [];

    // ✅ Load blog posts and generate sitemap entries with accurate lastmod
    try {
      const fs = require('fs');
      const pathModule = require('path');
      
      const blogDir = pathModule.join(process.cwd(), 'src/content/blogs');
      const dateModifiedPath = pathModule.join(process.cwd(), 'src/content/metadata/dateModified.json');
      
      if (fs.existsSync(blogDir)) {
        const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
        
        // Load dateModified data
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

      // // ✅ Generate category pages
      // const categoriesPath = pathModule.join(process.cwd(), 'src/content/metadata/categories.json');
      // if (fs.existsSync(categoriesPath)) {
      //   const categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));
      //   Object.keys(categories).forEach(category => {
      //     result.push({
      //       loc: `/blog/category/${category}`,
      //       changefreq: 'weekly',
      //       priority: 0.7,
      //       lastmod: new Date().toISOString(),
      //     });
      //   });
      // }

      // // ✅ Generate tag pages
      // const tagsPath = pathModule.join(process.cwd(), 'src/content/metadata/tags.json');
      // if (fs.existsSync(tagsPath)) {
      //   const tags = JSON.parse(fs.readFileSync(tagsPath, 'utf8'));
      //   // Get unique tags
      //   const uniqueTags = new Set();
      //   Object.values(tags).forEach(tagArray => {
      //     if (Array.isArray(tagArray)) {
      //       tagArray.forEach(tag => uniqueTags.add(tag));
      //     }
      //   });
        
      //   uniqueTags.forEach(tag => {
      //     const slugifiedTag = tag.toLowerCase().replace(/\s+/g, '-');
      //     result.push({
      //       loc: `/blog/tag/${slugifiedTag}`,
      //       changefreq: 'weekly',
      //       priority: 0.6,
      //       lastmod: new Date().toISOString(),
      //     });
      //   });
      // }

    } catch (error) {
      console.warn('Error generating additional sitemap paths:', error.message);
    }

    return result;
  },
}
