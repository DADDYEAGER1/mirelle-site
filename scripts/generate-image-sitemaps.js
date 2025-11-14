const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://mirelleinspo.com';

function generateImageSitemap(imageUrls, type) {
  const urls = imageUrls.map(url => `
  <url>
    <loc>https://mirelleinspo.com/${type}</loc>
    <image:image>
      <image:loc>${url}</image:loc>
    </image:image>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;
}

function generateImageSitemaps() {
  console.log('🖼️  Generating image sitemaps...');
  
  let totalGenerated = 0;

  try {
    // Generate blog images sitemap
    const blogImagesDir = path.join(process.cwd(), 'public/images/blog');
    if (fs.existsSync(blogImagesDir)) {
      const blogImages = fs.readdirSync(blogImagesDir)
        .filter(f => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f))
        .map(img => `${SITE_URL}/images/blog/${img}`);
      
      if (blogImages.length > 0) {
        const blogImagesSitemap = generateImageSitemap(blogImages, 'blog');
        fs.writeFileSync(
          path.join(process.cwd(), 'public/sitemap-blog-images.xml'),
          blogImagesSitemap
        );
        console.log(`✅ Generated sitemap-blog-images.xml (${blogImages.length} images)`);
        totalGenerated++;
      } else {
        console.log('⚠️  No blog images found');
      }
    } else {
      console.log('⚠️  Blog images directory not found');
    }

    // Generate shop images sitemap
    const shopImagesDir = path.join(process.cwd(), 'public/images/shop');
    if (fs.existsSync(shopImagesDir)) {
      const shopImages = fs.readdirSync(shopImagesDir)
        .filter(f => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f))
        .map(img => `${SITE_URL}/images/shop/${img}`);
      
      if (shopImages.length > 0) {
        const shopImagesSitemap = generateImageSitemap(shopImages, 'shop');
        fs.writeFileSync(
          path.join(process.cwd(), 'public/sitemap-shop-images.xml'),
          shopImagesSitemap
        );
        console.log(`✅ Generated sitemap-shop-images.xml (${shopImages.length} images)`);
        totalGenerated++;
      } else {
        console.log('⚠️  No shop images found');
      }
    } else {
      console.log('⚠️  Shop images directory not found');
    }

    if (totalGenerated > 0) {
      console.log(`\n🎉 Successfully generated ${totalGenerated} image sitemap(s)`);
    } else {
      console.log('\n⚠️  No image sitemaps were generated');
    }
  } catch (error) {
    console.error('❌ Error generating image sitemaps:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  generateImageSitemaps();
}

module.exports = { generateImageSitemaps };
