#!/usr/bin/env node

/**
 * Bulk Update Image Paths Script
 * 
 * Updates image paths across all blog posts and metadata
 * Useful for reorganizing image directories or CDN migrations
 * 
 * Usage:
 *   node scripts/update-image-paths.js --from "/old/path/" --to "/new/path/" --dry-run
 *   node scripts/update-image-paths.js --from "/images/blog/" --to "/cdn/images/"
 *   node scripts/update-image-paths.js --prefix "https://cdn.example.com"
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// ✅ Configuration
const BLOG_DIR = path.join(process.cwd(), 'src/content/blogs');
const METADATA_DIR = path.join(process.cwd(), 'src/content/metadata');

// ✅ Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');

function getArgValue(argName) {
  const index = args.indexOf(argName);
  return index !== -1 && args[index + 1] ? args[index + 1] : null;
}

const fromPath = getArgValue('--from');
const toPath = getArgValue('--to');
const prefixPath = getArgValue('--prefix');

// ✅ Validate arguments
function validateArguments() {
  if (prefixPath) {
    return true; // Prefix mode
  }
  
  if (!fromPath || !toPath) {
    console.error('❌ Error: Either --prefix OR both --from and --to are required\n');
    console.log('Usage Examples:');
    console.log('  # Replace path:');
    console.log('  node scripts/update-image-paths.js --from "/old/" --to "/new/" --dry-run\n');
    console.log('  # Add CDN prefix:');
    console.log('  node scripts/update-image-paths.js --prefix "https://cdn.example.com"\n');
    return false;
  }
  
  return true;
}

// ✅ Update image path
function updateImagePath(imagePath) {
  if (!imagePath) return imagePath;

  if (prefixPath) {
    // Add prefix if not already present
    if (!imagePath.startsWith('http')) {
      return prefixPath + imagePath;
    }
    return imagePath;
  } else {
    // Replace path
    return imagePath.replace(fromPath, toPath);
  }
}

// ✅ Update markdown files
async function updateMarkdownFiles() {
  console.log('📄 Updating Markdown Files...\n');

  try {
    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
    let modifiedCount = 0;

    files.forEach(file => {
      const slug = file.replace('.md', '');
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content: markdownContent } = matter(fileContent);

      let modified = false;
      const changes = [];

      // Update image field
      if (data.image) {
        const oldImage = data.image;
        const newImage = updateImagePath(data.image);
        
        if (oldImage !== newImage) {
          data.image = newImage;
          changes.push(`image: ${oldImage} → ${newImage}`);
          modified = true;
        }
      }

      // Update galleryImages if exists
      if (data.galleryImages && Array.isArray(data.galleryImages)) {
        data.galleryImages = data.galleryImages.map(img => {
          if (img.url) {
            const oldUrl = img.url;
            const newUrl = updateImagePath(img.url);
            if (oldUrl !== newUrl) {
              changes.push(`gallery: ${oldUrl} → ${newUrl}`);
              modified = true;
            }
            return { ...img, url: newUrl };
          }
          return img;
        });
      }

      if (modified) {
        modifiedCount++;
        console.log(`✅ ${slug}`);
        changes.forEach(change => console.log(`   ${change}`));
        console.log('');

        if (!isDryRun) {
          const newContent = matter.stringify(markdownContent, data);
          fs.writeFileSync(filePath, newContent, 'utf8');
        }
      }
    });

    return modifiedCount;

  } catch (error) {
    console.error('❌ Error updating markdown files:', error.message);
    return 0;
  }
}

// ✅ Update images.json metadata file
async function updateMetadataFile() {
  console.log('📋 Updating images.json Metadata...\n');

  try {
    const imagesPath = path.join(METADATA_DIR, 'images.json');
    
    if (!fs.existsSync(imagesPath)) {
      console.log('⚠️  images.json not found, skipping metadata update\n');
      return 0;
    }

    const imagesData = JSON.parse(fs.readFileSync(imagesPath, 'utf8'));
    let modifiedCount = 0;

    Object.entries(imagesData).forEach(([slug, imagePath]) => {
      const newPath = updateImagePath(imagePath);
      
      if (imagePath !== newPath) {
        imagesData[slug] = newPath;
        modifiedCount++;
        console.log(`✅ ${slug}`);
        console.log(`   ${imagePath} → ${newPath}\n`);
      }
    });

    if (modifiedCount > 0 && !isDryRun) {
      fs.writeFileSync(imagesPath, JSON.stringify(imagesData, null, 2), 'utf8');
    }

    return modifiedCount;

  } catch (error) {
    console.error('❌ Error updating metadata:', error.message);
    return 0;
  }
}

// ✅ Main function
async function updateImagePaths() {
  console.log('🖼️  Bulk Updating Image Paths...\n');

  if (!validateArguments()) {
    process.exit(1);
  }

  if (isDryRun) {
    console.log('🧪 DRY RUN MODE - No files will be modified\n');
  }

  if (prefixPath) {
    console.log(`➕ Adding prefix: "${prefixPath}"\n`);
  } else {
    console.log(`🔍 Finding: "${fromPath}"`);
    console.log(`➡️  Replacing with: "${toPath}"\n`);
  }

  const mdCount = await updateMarkdownFiles();
  const metaCount = await updateMetadataFile();

  console.log('═══════════════════════════════════════════════');
  console.log(`✅ Markdown files updated: ${mdCount}`);
  console.log(`✅ Metadata entries updated: ${metaCount}`);
  console.log(`📊 Total changes: ${mdCount + metaCount}`);
  
  if (isDryRun) {
    console.log('\n🧪 DRY RUN COMPLETE - Run without --dry-run to apply changes');
  } else {
    console.log('\n✨ Image paths updated successfully!');
  }
  console.log('═══════════════════════════════════════════════\n');
}

// ✅ Run script
updateImagePaths();
