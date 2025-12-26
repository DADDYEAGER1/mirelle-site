const fs = require('fs');
const path = require('path');

const CLOUDINARY_BASE = 'https://res.cloudinary.com/de1yf0iuo/image/upload';
const INSPO_IMAGES_DIR = 'src/content/inspo-images';

function updateInspoJSON() {
  console.log('🚀 Updating inspo JSON files with Cloudinary URLs...\n');
  
  if (!fs.existsSync(INSPO_IMAGES_DIR)) {
    console.error('❌ Inspo images directory not found:', INSPO_IMAGES_DIR);
    return;
  }
  
  const jsonFiles = fs.readdirSync(INSPO_IMAGES_DIR).filter(f => f.endsWith('.json'));
  
  if (jsonFiles.length === 0) {
    console.error('❌ No JSON files found');
    return;
  }
  
  console.log(`📄 Found ${jsonFiles.length} JSON files\n`);
  
  let totalUpdated = 0;
  
  jsonFiles.forEach(file => {
    const filePath = path.join(INSPO_IMAGES_DIR, file);
    console.log(`\n📝 Processing: ${file}`);
    
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      if (!data.images || !Array.isArray(data.images)) {
        console.warn(`⚠️  No images array found in ${file}`);
        return;
      }
      
      let updatedCount = 0;
      
      data.images.forEach(image => {
        if (image.url && image.url.startsWith('/inspo/')) {
          // Convert /inspo/category/image.webp to Cloudinary URL
          const cloudinaryPath = image.url.substring(1); // Remove leading /
          image.url = `${CLOUDINARY_BASE}/mirelleinspo/${cloudinaryPath}`;
          updatedCount++;
        }
      });
      
      if (updatedCount > 0) {
        // Save updated JSON
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`✅ Updated ${updatedCount} image URLs`);
        totalUpdated += updatedCount;
      } else {
        console.log(`⏭️  No URLs to update`);
      }
      
    } catch (err) {
      console.error(`❌ Failed to process ${file}:`, err.message);
    }
  });
  
  console.log(`\n\n✅ Total images updated: ${totalUpdated}`);
}

function main() {
  console.log('📂 Inspo JSON Cloudinary URL Updater\n');
  console.log('This will:');
  console.log('1. Read all JSON files in src/content/inspo-images/');
  console.log('2. Convert /inspo/... URLs to Cloudinary URLs');
  console.log('3. Save updated JSON files\n');
  
  updateInspoJSON();
  
  console.log('\n📋 Next steps:');
  console.log('1. Test locally: npm run dev');
  console.log('2. Verify inspo images load from Cloudinary');
  console.log('3. Delete images from public/inspo/ (optional, saves space)');
  console.log('4. Deploy');
}

main().catch(err => {
  console.error('❌ Fatal error:', err);
  process.exit(1);
});