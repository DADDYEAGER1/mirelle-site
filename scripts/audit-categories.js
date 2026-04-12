const fs = require('fs');
const path = require('path');

// Configuration - adjust these paths if needed
const BLOGS_DIR = path.join(__dirname, '../src/content/blogs');

// Function to extract frontmatter from markdown
function extractFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return null;
  
  const frontmatter = {};
  const lines = match[1].split('\n');
  
  lines.forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim().replace(/['"]/g, '');
      frontmatter[key] = value;
    }
  });
  
  return frontmatter;
}

// Main audit function
function auditCategories() {
  console.log('🔍 Starting category audit...\n');
  
  // Check if blogs directory exists
  if (!fs.existsSync(BLOGS_DIR)) {
    console.error(`❌ Error: Directory not found: ${BLOGS_DIR}`);
    console.log('\n💡 Tip: Adjust the BLOGS_DIR path at the top of this script');
    return;
  }
  
  const files = fs.readdirSync(BLOGS_DIR).filter(f => f.endsWith('.md'));
  
  if (files.length === 0) {
    console.log('⚠️  No .md files found in blogs directory');
    return;
  }
  
  console.log(`📁 Found ${files.length} blog posts\n`);
  
  const categories = new Map();
  const postsWithoutCategory = [];
  const categoryExamples = new Map(); // Store one example post for each category
  
  files.forEach(file => {
    const filePath = path.join(BLOGS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const frontmatter = extractFrontmatter(content);
    
    if (!frontmatter) {
      console.log(`⚠️  Could not parse frontmatter: ${file}`);
      return;
    }
    
    const category = frontmatter.category;
    
    if (!category) {
      postsWithoutCategory.push(file);
    } else {
      const count = categories.get(category) || 0;
      categories.set(category, count + 1);
      
      // Store first example of each category
      if (!categoryExamples.has(category)) {
        categoryExamples.set(category, {
          file: file,
          title: frontmatter.title || 'No title'
        });
      }
    }
  });
  
  // Sort categories by count (descending)
  const sortedCategories = Array.from(categories.entries())
    .sort((a, b) => b[1] - a[1]);
  
  // Display results
  console.log('📊 CATEGORY AUDIT RESULTS\n');
  console.log('═══════════════════════════════════════════════\n');
  
  console.log('Current Categories (sorted by usage):\n');
  sortedCategories.forEach(([category, count]) => {
    const example = categoryExamples.get(category);
    console.log(`  ${category}`);
    console.log(`    └─ ${count} post${count > 1 ? 's' : ''}`);
    console.log(`    └─ Example: "${example.title}"`);
    console.log('');
  });
  
  console.log(`\n📈 Total unique categories: ${categories.size}`);
  console.log(`📝 Total posts with categories: ${files.length - postsWithoutCategory.length}`);
  
  if (postsWithoutCategory.length > 0) {
    console.log(`\n⚠️  Posts without category (${postsWithoutCategory.length}):\n`);
    postsWithoutCategory.forEach(file => {
      console.log(`  - ${file}`);
    });
  }
  
  console.log('\n═══════════════════════════════════════════════\n');
  console.log('✅ Audit complete!');
  console.log('\n💡 Next step: Copy this output and share it to create the migration mapping\n');
}

// Run the audit
try {
  auditCategories();
} catch (error) {
  console.error('❌ Error running audit:', error.message);
  console.log('\n💡 Make sure you run this from your project root directory');
}