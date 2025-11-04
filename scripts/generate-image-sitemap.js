const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://mirelleinspo.com';
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Exclude these directories/patterns
const EXCLUDE_PATTERNS = [
  'images/blog', // Blog images handled separately in blog posts
  '_next',
  'static',
  'fonts',
  'favicon',
  '.ico',
  '.svg', // Exclude SVGs if you want
];

function shouldExclude(filePath) {
  return EXCLUDE_PATTERNS.some(pattern => filePath.includes(pattern));
}

function getAllImages(dir, baseDir = dir) {
  let images = [];
  
  if (!fs.existsSync(dir)) {
    return images;
  }
  
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      
      // Skip if excluded
      if (shouldExclude(filePath)) {
        return;
      }
      
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        images = images.concat(getAllImages(filePath, baseDir));
      } else if (/\.(jpg|jpeg|png|webp|gif)$/i.test(file)) {
        // Get relative path from public directory
        const relativePath = filePath
          .replace(PUBLIC_DIR, '')
          .replace(/\\/g, '/')
          .replace(/^\//, '');
        
        // Generate alt text from filename
        const altText = file
          .replace(/\.(jpg|jpeg|png|webp|gif)$/i, '')
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase());
        
        images.push({
          loc: `${SITE_URL}/${relativePath}`,
          title: altText,
          caption: altText,
        });
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return images;
}

function generateImageSitemap() {
  console.log('🔍 Scanning for images in public directory...');
  
  const allImages = getAllImages(PUBLIC_DIR);
  
  if (allImages.length === 0) {
    console.warn('⚠️  No images found. Skipping image sitemap generation.');
    return;
  }
  
  console.log(`📸 Found ${allImages.length} images`);
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allImages.map(img => `  <url>
    <loc>${SITE_URL}</loc>
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>
  </url>`).join('\n')}
</urlset>`;
  
  const outputPath = path.join(process.cwd(), 'public', 'sitemap-images.xml');
  fs.writeFileSync(outputPath, xml);
  
  console.log(`✅ Generated image sitemap: ${outputPath}`);
  console.log(`📊 Total images: ${allImages.length}`);
}

// Only run if called directly
if (require.main === module) {
  generateImageSitemap();
}

module.exports = { generateImageSitemap };
