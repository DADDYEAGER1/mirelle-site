const fs = require('fs');
const path = require('path');

// Path to your blogs directory
const BLOGS_DIR = path.join(process.cwd(), 'src', 'content', 'blogs');

// Function to extract frontmatter from a markdown file
function extractFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return null;
  
  const frontmatterText = match[1];
  const frontmatter = {};
  
  // Parse YAML-like frontmatter
  const lines = frontmatterText.split('\n');
  let currentKey = null;
  let currentValue = '';
  
  lines.forEach(line => {
    const keyMatch = line.match(/^(\w+):\s*(.*)$/);
    if (keyMatch) {
      // Save previous key-value if exists
      if (currentKey) {
        frontmatter[currentKey] = parseValue(currentValue.trim());
      }
      currentKey = keyMatch[1];
      currentValue = keyMatch[2];
    } else if (currentKey && line.trim()) {
      // Multi-line value
      currentValue += '\n' + line;
    }
  });
  
  // Save last key-value
  if (currentKey) {
    frontmatter[currentKey] = parseValue(currentValue.trim());
  }
  
  return frontmatter;
}

// Parse value to appropriate type
function parseValue(value) {
  // Handle arrays
  if (value.startsWith('[') && value.endsWith(']')) {
    return value
      .slice(1, -1)
      .split(',')
      .map(v => v.trim().replace(/['"]/g, ''));
  }
  
  // Handle booleans
  if (value === 'true') return true;
  if (value === 'false') return false;
  
  // Handle numbers
  if (!isNaN(value) && value !== '') return Number(value);
  
  // Remove quotes from strings
  return value.replace(/^["']|["']$/g, '');
}

// Main extraction function
function extractAllFrontmatter() {
  const results = [];
  const allFields = new Set();
  
  // Read all markdown files
  const files = fs.readdirSync(BLOGS_DIR).filter(file => file.endsWith('.md'));
  
  console.log(`\nFound ${files.length} markdown files\n`);
  
  files.forEach(file => {
    const filePath = path.join(BLOGS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatter = extractFrontmatter(content);
    
    if (frontmatter) {
      results.push({
        file,
        frontmatter,
        fields: Object.keys(frontmatter)
      });
      
      // Collect all unique fields
      Object.keys(frontmatter).forEach(key => allFields.add(key));
    }
  });
  
  // Generate report
  console.log('='.repeat(80));
  console.log('ALL UNIQUE FRONTMATTER FIELDS FOUND:');
  console.log('='.repeat(80));
  console.log(Array.from(allFields).sort().join('\n'));
  console.log('\n');
  
  console.log('='.repeat(80));
  console.log('FIELD USAGE STATISTICS:');
  console.log('='.repeat(80));
  
  const fieldCount = {};
  allFields.forEach(field => {
    fieldCount[field] = results.filter(r => r.frontmatter[field] !== undefined).length;
  });
  
  Object.entries(fieldCount)
    .sort((a, b) => b[1] - a[1])
    .forEach(([field, count]) => {
      const percentage = ((count / files.length) * 100).toFixed(1);
      console.log(`${field.padEnd(30)} ${count}/${files.length} files (${percentage}%)`);
    });
  
  console.log('\n');
  console.log('='.repeat(80));
  console.log('SAMPLE FRONTMATTER FROM FIRST FILE:');
  console.log('='.repeat(80));
  if (results.length > 0) {
    console.log(`File: ${results[0].file}`);
    console.log(JSON.stringify(results[0].frontmatter, null, 2));
  }
  
  // Save detailed results to JSON
  const outputPath = path.join(__dirname, 'frontmatter-analysis.json');
  fs.writeFileSync(outputPath, JSON.stringify({
    totalFiles: files.length,
    allFields: Array.from(allFields).sort(),
    fieldUsage: fieldCount,
    detailedResults: results
  }, null, 2));
  
  console.log('\n');
  console.log('='.repeat(80));
  console.log(`✅ Full analysis saved to: ${outputPath}`);
  console.log('='.repeat(80));
}

// Run the extraction
try {
  extractAllFrontmatter();
} catch (error) {
  console.error('Error:', error.message);
  console.error('\nMake sure you run this script from your project root directory.');
}