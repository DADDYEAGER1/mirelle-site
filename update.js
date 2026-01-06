const fs = require('fs');
const path = require('path');
const CLOUDINARY_BASE = 'https://res.cloudinary.com/de1yf0iuo/image/upload';
const BLOGS_DIR = 'src/content/blogs';

function updateBlogMarkdown() {
  console.log('🚀 Updating blog markdown files with Cloudinary URLs...\n');
  
  if (!fs.existsSync(BLOGS_DIR)) {
    console.error('❌ Blogs directory not found:', BLOGS_DIR);
    return;
  }
  
  const mdFiles = fs.readdirSync(BLOGS_DIR).filter(f => f.endsWith('.md'));
  
  if (mdFiles.length === 0) {
    console.error('❌ No markdown files found');
    return;
  }
  
  console.log(`📄 Found ${mdFiles.length} markdown files\n`);
  
  let totalUpdated = 0;
  let totalFilesUpdated = 0;
  
  mdFiles.forEach(file => {
    const filePath = path.join(BLOGS_DIR, file);
    console.log(`\n📝 Processing: ${file}`);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let updatedCount = 0;
      let originalContent = content;
      
      // Replace /images/blog/ URLs with Cloudinary URLs
      // But SKIP URLs that are already Cloudinary URLs
      const regex = /["']?(\/images\/blog\/[^"'\s]+)["']?/g;
      
      content = content.replace(regex, (match, url) => {
        // Skip if this is already a Cloudinary URL
        if (match.includes('cloudinary.com')) {
          return match;
        }
        
        // Remove leading slash and convert to Cloudinary URL
        const cloudinaryPath = url.substring(1); // Remove leading /
        const cloudinaryUrl = `${CLOUDINARY_BASE}/mirelleinspo/${cloudinaryPath}`;
        
        updatedCount++;
        
        // Preserve the quote style from original
        if (match.startsWith('"')) {
          return `"${cloudinaryUrl}"`;
        } else if (match.startsWith("'")) {
          return `'${cloudinaryUrl}'`;
        } else {
          return cloudinaryUrl;
        }
      });
      
      if (updatedCount > 0 && content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated ${updatedCount} image URLs`);
        totalUpdated += updatedCount;
        totalFilesUpdated++;
      } else {
        console.log(`⏭️  No URLs to update`);
      }
      
    } catch (err) {
      console.error(`❌ Failed to process ${file}:`, err.message);
    }
  });
  
  console.log('\n' + '='.repeat(60));
  console.log(`✅ Update Complete!`);
  console.log(`📊 Files updated: ${totalFilesUpdated}`);
  console.log(`📊 Total URLs updated: ${totalUpdated}`);
  console.log('='.repeat(60));
}

function main() {
  console.log('📂 Blog Markdown Cloudinary URL Updater\n');
  console.log('This will:');
  console.log('1. Read all .md files in src/content/blogs/');
  console.log('2. Convert /images/blog/... URLs to Cloudinary URLs');
  console.log('3. Update image:, galleryImages:, carouselImages: fields');
  console.log('4. Save updated markdown files\n');
  
  updateBlogMarkdown();
  
  console.log('\n📋 Next steps:');
  console.log('1. Test locally: npm run dev');
  console.log('2. Verify blog images load from Cloudinary');
  console.log('3. Delete public/images/blog/ (optional, saves space)');
  console.log('4. Deploy');
}

main();