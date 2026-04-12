const fs = require('fs');
const path = require('path');

// Configuration
const MD_FILES_PATH = 'C:\\Users\\gaurav verma\\mirelle baby\\mirelle-site\\src\\content\\topics';
const PUBLIC_IMAGES_PATH = 'C:\\Users\\gaurav verma\\mirelle baby\\mirelle-site\\public\\images\\topic';
const OUTPUT_PATH = 'C:\\Users\\gaurav verma\\mirelle baby\\missing-images.json';

// Function to extract frontmatter and body from MD file
function parseMdFile(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (match) {
    return {
      frontmatter: match[1],
      body: match[2]
    };
  }
  
  return {
    frontmatter: '',
    body: content
  };
}

// Function to extract image paths from content
function extractImagePaths(content) {
  const images = new Set();
  
  // Match markdown images: ![alt](path)
  const mdImageRegex = /!\[.*?\]\((.*?)\)/g;
  let match;
  while ((match = mdImageRegex.exec(content)) !== null) {
    images.add(match[1]);
  }
  
  // Match HTML img tags: <img src="path">
  const htmlImageRegex = /<img[^>]+src=["']([^"']+)["']/g;
  while ((match = htmlImageRegex.exec(content)) !== null) {
    images.add(match[1]);
  }
  
  // Match frontmatter image fields (common patterns)
  const frontmatterImageRegex = /(?:image|thumbnail|cover|hero|banner):\s*["']?([^\s"']+)["']?/gi;
  while ((match = frontmatterImageRegex.exec(content)) !== null) {
    images.add(match[1]);
  }
  
  return Array.from(images);
}

// Function to get all files recursively
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (path.extname(file).toLowerCase() === '.md') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to get all image files in public folder
function getAllImageFiles(dir) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp', '.ico'];
  const imageFiles = new Set();
  
  if (!fs.existsSync(dir)) {
    return imageFiles;
  }
  
  function scanDir(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    files.forEach(file => {
      const filePath = path.join(currentDir, file);
      if (fs.statSync(filePath).isDirectory()) {
        scanDir(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          // Store relative path from PUBLIC_IMAGES_PATH
          const relativePath = path.relative(PUBLIC_IMAGES_PATH, filePath);
          imageFiles.add(relativePath.replace(/\\/g, '/'));
          // Also add just the filename
          imageFiles.add(file);
        }
      }
    });
  }
  
  scanDir(dir);
  return imageFiles;
}

// Main function
function checkMissingImages() {
  console.log('🔍 Starting image check...\n');
  
  // Get all MD files
  const mdFiles = getAllFiles(MD_FILES_PATH);
  console.log(`📄 Found ${mdFiles.length} MD files\n`);
  
  // Get all images in public folder
  const publicImages = getAllImageFiles(PUBLIC_IMAGES_PATH);
  console.log(`🖼️  Found ${publicImages.size} images in public folder\n`);
  
  const results = {
    summary: {
      totalMdFiles: mdFiles.length,
      totalPublicImages: publicImages.size,
      filesWithMissingImages: 0,
      totalMissingImages: 0
    },
    missingImages: []
  };
  
  // Check each MD file
  mdFiles.forEach(mdFile => {
    const content = fs.readFileSync(mdFile, 'utf-8');
    const { frontmatter, body } = parseMdFile(content);
    
    // Extract images from both frontmatter and body
    const allImages = extractImagePaths(frontmatter + '\n' + body);
    
    if (allImages.length > 0) {
      const missingInFile = [];
      
      allImages.forEach(imgPath => {
        // Clean up the path
        let cleanPath = imgPath.trim();
        
        // Remove leading slashes and common path prefixes
        cleanPath = cleanPath.replace(/^\/+/, '');
        cleanPath = cleanPath.replace(/^(\.\.\/)+/, '');
        cleanPath = cleanPath.replace(/^(\.\/)+/, '');
        cleanPath = cleanPath.replace(/^(images\/topic\/?)/, '');
        cleanPath = cleanPath.replace(/^(public\/images\/topic\/?)/, '');
        
        // Check if image exists
        const fileName = path.basename(cleanPath);
        const imageExists = publicImages.has(cleanPath) || publicImages.has(fileName);
        
        if (!imageExists) {
          missingInFile.push({
            pathInMd: imgPath,
            expectedFileName: fileName,
            cleanPath: cleanPath
          });
        }
      });
      
      if (missingInFile.length > 0) {
        results.missingImages.push({
          mdFile: path.relative(MD_FILES_PATH, mdFile),
          fullPath: mdFile,
          totalImages: allImages.length,
          missingCount: missingInFile.length,
          missing: missingInFile
        });
        
        results.summary.filesWithMissingImages++;
        results.summary.totalMissingImages += missingInFile.length;
      }
    }
  });
  
  // Write results to JSON
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2), 'utf-8');
  
  console.log('✅ Analysis complete!\n');
  console.log('📊 Summary:');
  console.log(`   - Total MD files scanned: ${results.summary.totalMdFiles}`);
  console.log(`   - Total images in public folder: ${results.summary.totalPublicImages}`);
  console.log(`   - Files with missing images: ${results.summary.filesWithMissingImages}`);
  console.log(`   - Total missing images: ${results.summary.totalMissingImages}`);
  console.log(`\n📝 Results saved to: ${OUTPUT_PATH}`);
}

// Run the script
try {
  checkMissingImages();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}