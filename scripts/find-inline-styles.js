const fs = require('fs');
const path = require('path');

// Function to recursively get all .tsx files
function getAllTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to find inline styles
function findInlineStyles(content, filePath) {
  const results = [];
  
  // Pattern 1: style={{ ... }}
  const styleRegex = /style=\{\{[^}]+\}\}/g;
  const styleMatches = content.match(styleRegex);
  if (styleMatches) {
    styleMatches.forEach(match => {
      results.push({
        type: 'inline-style-object',
        match: match.substring(0, 100), // Truncate long matches
        file: filePath
      });
    });
  }
  
  // Pattern 2: backgroundColor, color properties in style objects
  const colorPropsRegex = /(background|backgroundColor|color|borderColor):\s*['"`]([^'"`]+)['"`]/g;
  let colorMatch;
  while ((colorMatch = colorPropsRegex.exec(content)) !== null) {
    results.push({
      type: 'color-property',
      property: colorMatch[1],
      value: colorMatch[2],
      file: filePath
    });
  }
  
  // Pattern 3: Hardcoded hex colors
  const hexRegex = /#[0-9a-fA-F]{3,8}/g;
  const hexMatches = content.match(hexRegex);
  if (hexMatches) {
    const uniqueHex = [...new Set(hexMatches)];
    uniqueHex.forEach(hex => {
      results.push({
        type: 'hex-color',
        value: hex,
        file: filePath
      });
    });
  }
  
  return results;
}

// Main function
function scanForInlineStyles() {
  console.log('🔍 Scanning for inline styles and hardcoded colors...\n');
  
  const scriptDir = __dirname;
  const projectRoot = path.resolve(scriptDir, '..');
  const srcDir = path.join(projectRoot, 'src');
  
  if (!fs.existsSync(srcDir)) {
    console.error(`❌ Error: src directory not found at ${srcDir}`);
    process.exit(1);
  }
  
  const files = getAllTsxFiles(srcDir);
  const allResults = [];
  
  files.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const results = findInlineStyles(content, filePath);
    if (results.length > 0) {
      allResults.push(...results);
    }
  });
  
  // Group results by type
  const grouped = {
    'inline-style-object': [],
    'color-property': [],
    'hex-color': []
  };
  
  allResults.forEach(result => {
    grouped[result.type].push(result);
  });
  
  // Display results
  console.log('📊 RESULTS:\n');
  
  if (grouped['inline-style-object'].length > 0) {
    console.log(`⚠️  Found ${grouped['inline-style-object'].length} inline style objects:`);
    grouped['inline-style-object'].slice(0, 10).forEach(r => {
      console.log(`  - ${path.relative(srcDir, r.file)}`);
      console.log(`    ${r.match}...`);
    });
    if (grouped['inline-style-object'].length > 10) {
      console.log(`  ... and ${grouped['inline-style-object'].length - 10} more\n`);
    }
  }
  
  if (grouped['color-property'].length > 0) {
    console.log(`\n⚠️  Found ${grouped['color-property'].length} hardcoded color properties:`);
    const uniqueColorProps = {};
    grouped['color-property'].forEach(r => {
      const key = `${r.property}: ${r.value}`;
      if (!uniqueColorProps[key]) {
        uniqueColorProps[key] = [];
      }
      uniqueColorProps[key].push(r.file);
    });
    
    Object.entries(uniqueColorProps).slice(0, 10).forEach(([prop, files]) => {
      console.log(`  - ${prop}`);
      console.log(`    Found in: ${path.relative(srcDir, files[0])}`);
    });
  }
  
  if (grouped['hex-color'].length > 0) {
    console.log(`\n⚠️  Found ${grouped['hex-color'].length} hardcoded hex colors:`);
    const hexByFile = {};
    grouped['hex-color'].forEach(r => {
      if (!hexByFile[r.file]) {
        hexByFile[r.file] = new Set();
      }
      hexByFile[r.file].add(r.value);
    });
    
    Object.entries(hexByFile).slice(0, 10).forEach(([file, hexes]) => {
      console.log(`  - ${path.relative(srcDir, file)}`);
      console.log(`    Colors: ${[...hexes].join(', ')}`);
    });
    if (Object.keys(hexByFile).length > 10) {
      console.log(`  ... and ${Object.keys(hexByFile).length - 10} more files\n`);
    }
  }
  
  if (allResults.length === 0) {
    console.log('✅ No inline styles or hardcoded colors found!');
  } else {
    console.log(`\n📝 Total issues found: ${allResults.length}`);
    console.log('\n💡 Recommendation: Replace inline styles with Tailwind classes');
  }
}

// Run scan
try {
  scanForInlineStyles();
} catch (error) {
  console.error('❌ Scan failed:', error.message);
  process.exit(1);
}