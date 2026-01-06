const fs = require('fs');
const path = require('path');

// Configuration
const MD_FOLDERS = [
  'C:\\Users\\gaurav verma\\mirelle baby\\mirelle-site\\src\\content\\blogs',
  'C:\\Users\\gaurav verma\\mirelle baby\\mirelle-site\\src\\content\\topics'
];
const IMAGE_FOLDERS = [
  'C:\\Users\\gaurav verma\\mirelle baby\\mirelle-site\\public\\images\\blog',
  'C:\\Users\\gaurav verma\\mirelle baby\\mirelle-site\\public\\images\\topic'
];
const OUTPUT_JSON = 'C:\\Users\\gaurav verma\\mirelle baby\\missing-images.json';

// Get all files in a directory (recursive)
function getFilesInDir(dir, fileList = []) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        getFilesInDir(filePath, fileList);
      } else {
        fileList.push(file);
      }
    });
  } catch (error) {
    console.log(`Warning: Could not read directory ${dir}`);
  }
  return fileList;
}

// Get all MD files recursively
function getAllMdFiles(dir, fileList = []) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        getAllMdFiles(filePath, fileList);
      } else if (file.endsWith('.md')) {
        fileList.push(filePath);
      }
    });
  } catch (error) {
    console.log(`Warning: Could not read directory ${dir}`);
  }
  return fileList;
}

// Extract image paths from markdown content
function extractImages(content) {
  const images = new Set();
  
  // Match ![alt](path) format
  const markdownRegex = /!\[.*?\]\((.*?)\)/g;
  let match;
  while ((match = markdownRegex.exec(content)) !== null) {
    images.add(match[1]);
  }
  
  // Match <img src="path"> format
  const htmlRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  while ((match = htmlRegex.exec(content)) !== null) {
    images.add(match[1]);
  }
  
  // Match url: "path" from frontmatter (YAML format)
  const urlRegex = /url:\s*["']([^"']+)["']/g;
  while ((match = urlRegex.exec(content)) !== null) {
    images.add(match[1]);
  }
  
  return Array.from(images);
}

// Extract filename from path
function getFilename(imgPath) {
  // Remove leading/trailing quotes and whitespace
  let clean = imgPath.trim().replace(/^["']|["']$/g, '');
  // Get just the filename
  return path.basename(clean);
}

// Main function
function checkMissingImages() {
  console.log('Starting image check...\n');
  
  // Get all image filenames from specified folders
  console.log('Scanning image folders...');
  const imageFilenames = new Set();
  
  IMAGE_FOLDERS.forEach(folder => {
    const files = getFilesInDir(folder);
    console.log(`Found ${files.length} files in ${folder}`);
    files.forEach(file => imageFilenames.add(file));
  });
  
  console.log(`\nTotal unique image files: ${imageFilenames.size}\n`);
  
  const results = [];
  
  // Process each MD folder
  MD_FOLDERS.forEach(folder => {
    console.log(`Scanning: ${folder}`);
    const mdFiles = getAllMdFiles(folder);
    console.log(`Found ${mdFiles.length} markdown files\n`);
    
    mdFiles.forEach(mdFile => {
      const content = fs.readFileSync(mdFile, 'utf-8');
      const imagePaths = extractImages(content);
      
      if (imagePaths.length === 0) return;
      
      const missingImages = [];
      
      imagePaths.forEach(imgPath => {
        // Skip external URLs
        if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
          return;
        }
        
        const filename = getFilename(imgPath);
        
        // Exact filename match only
        if (!imageFilenames.has(filename)) {
          missingImages.push(filename);
        }
      });
      
      if (missingImages.length > 0) {
        // Remove duplicates
        const uniqueMissing = [...new Set(missingImages)];
        results.push({
          mdFile: mdFile,
          missingImages: uniqueMissing
        });
      }
    });
  });
  
  // Write results to JSON
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(results, null, 2));
  
  console.log('\n=== RESULTS ===');
  console.log(`Total MD files with missing images: ${results.length}`);
  console.log(`Output saved to: ${OUTPUT_JSON}\n`);
  
  if (results.length > 0) {
    console.log('Files with missing images:');
    results.forEach(r => {
      console.log(`\n${r.mdFile}`);
      console.log(`  Missing (${r.missingImages.length}): ${r.missingImages.join(', ')}`);
    });
  } else {
    console.log('✓ All images found!');
  }
}

// Run
try {
  checkMissingImages();
} catch (error) {
  console.error('Error:', error.message);
  console.error(error.stack);
}