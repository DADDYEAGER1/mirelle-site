const fs = require('fs');
const path = require('path');

// Configuration
const CONTENT_PATH = 'C:\\Users\\gaurav verma\\mirelle baby\\mirelle-site\\src\\content\\';
const BLOGS_FOLDER = path.join(CONTENT_PATH, 'blogs');
const TOPICS_FOLDER = path.join(CONTENT_PATH, 'topics');

function getAllMdFiles(directory) {
  const files = [];
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

function fixImagePaths(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return;
  }

  const fileName = path.basename(filePath);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changesCount = 0;
  
  // Pattern to match: "/image/" or "image/" but NOT "/images/" or "images/"
  // This regex looks for "image/" that is NOT preceded by 's'
  const pattern = /(?<!s)(["'\(\/])image\//g;
  
  // Replace image/ with images/ (keeping the prefix character)
  const newContent = content.replace(pattern, (match, prefix) => {
    changesCount++;
    return `${prefix}images/`;
  });

  if (changesCount > 0) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅ Updated: ${fileName} (${changesCount} changes)`);
  } else {
    console.log(`ℹ️  No changes: ${fileName}`);
  }
}

// Main execution
console.log('🚀 Starting image path fix (image/ → images/)...\n');

console.log('📁 Processing BLOGS folder...');
const blogFiles = getAllMdFiles(BLOGS_FOLDER);
blogFiles.forEach(file => fixImagePaths(file));

console.log('\n📁 Processing TOPICS folder...');
const topicFiles = getAllMdFiles(TOPICS_FOLDER);
topicFiles.forEach(file => fixImagePaths(file));

console.log(`\n✨ Process completed!`);
console.log(`📊 Total files processed: ${blogFiles.length + topicFiles.length}`);