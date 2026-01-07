const fs = require('fs');
const path = require('path');

const CLOUDINARY_BASE = 'https://res.cloudinary.com/de1yf0iuo/image/upload/mirelleinspo';
const BLOGS_DIR = 'C:\\Users\\gaurav verma\\mirelle baby\\mirelle-site\\src\\content\\blogs';

function updateBlogImages() {
  console.log('🚀 Updating blog markdown files with Cloudinary URLs...\n');
  
  if (!fs.existsSync(BLOGS_DIR)) {
    console.error('❌ Blogs directory not found:', BLOGS_DIR);
    return;
  }
  
  const mdFiles = getAllMdFiles(BLOGS_DIR);
  
  if (mdFiles.length === 0) {
    console.error('❌ No .md files found');
    return;
  }
  
  console.log(`📄 Found ${mdFiles.length} markdown files\n`);
  
  let totalFilesUpdated = 0;
  let totalImagesUpdated = 0;
  
  mdFiles.forEach(filePath => {
    const fileName = path.basename(filePath);
    console.log(`\n📝 Processing: ${fileName}`);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let updatedCount = 0;
      
      // Regex to match <img> tags with src attributes
      const imgRegex = /<img[^>]*src=['"]([^'"]+)['"][^>]*>/g;
      
      const newContent = content.replace(imgRegex, (match, srcUrl) => {
        // Skip if already a Cloudinary URL
        if (srcUrl.includes('res.cloudinary.com')) {
          return match;
        }
        
        // Skip if external URL (http/https but not cloudinary)
        if (srcUrl.startsWith('http://') || srcUrl.startsWith('https://')) {
          return match;
        }
        
        // Process local paths (both with and without leading slash)
        if (srcUrl.startsWith('/') || srcUrl.startsWith('images/')) {
          // Add leading slash if missing, then convert to Cloudinary URL
          const normalizedPath = srcUrl.startsWith('/') ? srcUrl : `/${srcUrl}`;
          const cloudinaryUrl = `${CLOUDINARY_BASE}${normalizedPath}`;
          updatedCount++;
          return match.replace(srcUrl, cloudinaryUrl);
        }
        
        // Skip other relative paths
        return match;
      });
      
      if (updatedCount > 0) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`✅ Updated ${updatedCount} image URLs`);
        totalFilesUpdated++;
        totalImagesUpdated += updatedCount;
      } else {
        console.log(`⭐️ No URLs to update (already using CDN or no local images)`);
      }
      
    } catch (err) {
      console.error(`❌ Failed to process ${fileName}:`, err.message);
    }
  });
  
  console.log(`\n\n✅ Summary:`);
  console.log(`   Files updated: ${totalFilesUpdated}`);
  console.log(`   Total images updated: ${totalImagesUpdated}`);
}

function getAllMdFiles(dir) {
  let results = [];
  
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      results = results.concat(getAllMdFiles(fullPath));
    } else if (item.endsWith('.md')) {
      results.push(fullPath);
    }
  });
  
  return results;
}

function main() {
  console.log('📂 Blog Images Cloudinary URL Updater\n');
  console.log('This will:');
  console.log('1. Scan all .md files in src/content/blogs/');
  console.log('2. Find <img> tags with local paths');
  console.log('3. Convert local URLs to Cloudinary CDN URLs');
  console.log('4. Skip images already using Cloudinary');
  console.log('5. Save updated markdown files\n');
  
  updateBlogImages();
  
  console.log('\n📋 Next steps:');
  console.log('1. Test locally: npm run dev');
  console.log('2. Verify blog images load from Cloudinary');
  console.log('3. Commit and deploy');
}

main();