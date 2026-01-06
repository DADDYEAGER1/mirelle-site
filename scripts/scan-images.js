const fs = require('fs');
const path = require('path');

// Configuration
const PROJECT_ROOT = 'C:\\Users\\gaurav verma\\mirelle baby\\mirelle-site\\';
const CONTENT_PATH = path.join(PROJECT_ROOT, 'src', 'content');
const PUBLIC_PATH = path.join(PROJECT_ROOT, 'public');

const BLOGS_FOLDER = path.join(CONTENT_PATH, 'blogs');
const TOPICS_FOLDER = path.join(CONTENT_PATH, 'topics');

function getAllMdFiles(directory) {
  const files = [];
  if (!fs.existsSync(directory)) {
    console.log(`⚠️  Directory not found: ${directory}`);
    return files;
  }
  
  const items = fs.readdirSync(directory);
  
  items.forEach(item => {
    const fullPath = path.join(directory, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllMdFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  });
  
  return files;
}

function extractFrontmatter(content) {
  // Extract content between --- markers
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return null;
  
  return match[1];
}

function extractImagePaths(frontmatter) {
  const images = [];
  
  // Find all image paths - look for /images/blog/ or /images/topic/
  const imageRegex = /["']?(\/images\/(?:blog|topic)\/[^"'\s]+\.(?:webp|jpg|jpeg|png))["']?/g;
  let match;
  
  while ((match = imageRegex.exec(frontmatter)) !== null) {
    images.push(match[1]);
  }
  
  return images;
}

function determineImageType(line) {
  if (line.includes('image:') && !line.includes('carouselImages') && !line.includes('galleryImages')) {
    return 'hero';
  } else if (line.includes('carouselImages') || line.includes('url:')) {
    return 'carousel';
  } else if (line.includes('galleryImages')) {
    return 'gallery';
  }
  return 'unknown';
}

function checkImageExists(imagePath) {
  // Remove leading slash and construct full path
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  const fullPath = path.join(PUBLIC_PATH, cleanPath);
  return fs.existsSync(fullPath);
}

function scanMdFile(filePath, folderType) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatter = extractFrontmatter(content);
  
  if (!frontmatter) {
    return null;
  }
  
  const results = [];
  const relativePath = path.relative(CONTENT_PATH, filePath);
  
  // Extract all image paths from frontmatter
  const imagePaths = extractImagePaths(frontmatter);
  
  // Split frontmatter into lines to determine image type
  const lines = frontmatter.split('\n');
  
  imagePaths.forEach(imagePath => {
    // Find which line contains this image path
    const containingLine = lines.find(line => line.includes(imagePath));
    let imageType = 'unknown';
    
    if (containingLine) {
      // Check context around the image
      const lineIndex = lines.indexOf(containingLine);
      const context = lines.slice(Math.max(0, lineIndex - 3), lineIndex + 1).join('\n');
      
      if (context.includes('image:') && !context.includes('carousel') && !context.includes('gallery')) {
        imageType = 'hero';
      } else if (context.includes('carouselImages')) {
        imageType = 'carousel';
      } else if (context.includes('galleryImages')) {
        imageType = 'gallery';
      }
    }
    
    results.push({
      mdFile: relativePath,
      imageType: imageType,
      imagePath: imagePath,
      exists: checkImageExists(imagePath)
    });
  });
  
  return results;
}

// Main execution
console.log('🚀 Starting frontmatter image scan...\n');

const allResults = [];
let totalFiles = 0;
let totalImages = 0;
let missingImages = 0;

// Scan blogs
console.log('📁 Scanning BLOGS folder...');
const blogFiles = getAllMdFiles(BLOGS_FOLDER);
totalFiles += blogFiles.length;

blogFiles.forEach(file => {
  const results = scanMdFile(file, 'blog');
  if (results) {
    results.forEach(result => {
      allResults.push(result);
      totalImages++;
      if (!result.exists) missingImages++;
    });
  }
});

console.log(`   Found ${blogFiles.length} blog files`);

// Scan topics
console.log('📁 Scanning TOPICS folder...');
const topicFiles = getAllMdFiles(TOPICS_FOLDER);
totalFiles += topicFiles.length;

topicFiles.forEach(file => {
  const results = scanMdFile(file, 'topic');
  if (results) {
    results.forEach(result => {
      allResults.push(result);
      totalImages++;
      if (!result.exists) missingImages++;
    });
  }
});

console.log(`   Found ${topicFiles.length} topic files`);

// Create summary
const summary = {
  scanDate: new Date().toISOString(),
  totalMdFiles: totalFiles,
  totalImages: totalImages,
  missingImages: missingImages,
  existingImages: totalImages - missingImages,
  images: allResults
};

// Only keep missing images
const missingImagesList = allResults.filter(img => !img.exists);

const output = {
  summary: {
    scanDate: summary.scanDate,
    totalMdFiles: summary.totalMdFiles,
    totalImages: summary.totalImages,
    missingImages: summary.missingImages,
    existingImages: summary.existingImages
  },
  missingImages: missingImagesList
};

// Write to JSON file
const outputPath = path.join(PROJECT_ROOT, 'frontmatter-images-scan.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8');

console.log('\n✨ Scan completed!');
console.log(`📊 Total MD files: ${totalFiles}`);
console.log(`🖼️  Total images found: ${totalImages}`);
console.log(`✅ Existing images: ${totalImages - missingImages}`);
console.log(`❌ Missing images: ${missingImages}`);
console.log(`\n💾 Results saved to: frontmatter-images-scan.json`);

if (missingImages > 0) {
  console.log(`\n⚠️  Missing images by file:`);
  const missingByFile = {};
  missingImagesList.forEach(img => {
    if (!missingByFile[img.mdFile]) {
      missingByFile[img.mdFile] = [];
    }
    missingByFile[img.mdFile].push(`${img.imageType}: ${path.basename(img.imagePath)}`);
  });
  
  Object.entries(missingByFile).forEach(([file, images]) => {
    console.log(`\n   ${file}:`);
    images.forEach(img => console.log(`      - ${img}`));
  });
}