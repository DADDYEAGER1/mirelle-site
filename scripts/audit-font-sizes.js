const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  dirsToScan: ['src', 'components', 'app', 'pages'], // Adjust based on your structure
  fileExtensions: ['.tsx', '.jsx', '.ts', '.js'],
  excludeDirs: ['node_modules', '.next', 'dist', 'build', '.git']
};

// Store results
const fontSizes = new Map();
const inlineStyles = new Map();
const fileAnalysis = [];

// Regex patterns
const TAILWIND_TEXT_REGEX = /text-(?:xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/g;
const INLINE_FONTSIZE_REGEX = /fontSize:\s*['"`]([^'"`]+)['"`]/g;
const INLINE_FONTSIZE_REGEX2 = /font-size:\s*([^;}"']+)/g;

function shouldScanDirectory(dirName) {
  return !CONFIG.excludeDirs.some(excluded => dirName.includes(excluded));
}

function shouldScanFile(fileName) {
  return CONFIG.fileExtensions.some(ext => fileName.endsWith(ext));
}

function categorizeFile(filePath) {
  const lowerPath = filePath.toLowerCase();
  if (lowerPath.includes('nav')) return 'Navigation';
  if (lowerPath.includes('card')) return 'Cards';
  if (lowerPath.includes('button')) return 'Buttons';
  if (lowerPath.includes('hero')) return 'Hero/Landing';
  if (lowerPath.includes('header')) return 'Headers';
  if (lowerPath.includes('footer')) return 'Footer';
  if (lowerPath.includes('form')) return 'Forms';
  if (lowerPath.includes('modal')) return 'Modals';
  return 'Other';
}

function scanFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const category = categorizeFile(filePath);
    const findings = {
      path: filePath,
      category,
      tailwindSizes: [],
      inlineSizes: []
    };

    // Find Tailwind classes
    let match;
    while ((match = TAILWIND_TEXT_REGEX.exec(content)) !== null) {
      const size = match[0];
      findings.tailwindSizes.push(size);
      fontSizes.set(size, (fontSizes.get(size) || 0) + 1);
    }

    // Find inline fontSize styles
    const inlineRegexes = [INLINE_FONTSIZE_REGEX, INLINE_FONTSIZE_REGEX2];
    inlineRegexes.forEach(regex => {
      while ((match = regex.exec(content)) !== null) {
        const size = match[1].trim();
        findings.inlineSizes.push(size);
        inlineStyles.set(size, (inlineStyles.get(size) || 0) + 1);
      }
    });

    if (findings.tailwindSizes.length > 0 || findings.inlineSizes.length > 0) {
      fileAnalysis.push(findings);
    }
  } catch (error) {
    console.error(`Error reading ${filePath}: ${error.message}`);
  }
}

function scanDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath, { withFileTypes: true });

    items.forEach(item => {
      const fullPath = path.join(dirPath, item.name);

      if (item.isDirectory() && shouldScanDirectory(item.name)) {
        scanDirectory(fullPath);
      } else if (item.isFile() && shouldScanFile(item.name)) {
        scanFile(fullPath);
      }
    });
  } catch (error) {
    // Directory doesn't exist, skip silently
  }
}

function generateSummary() {
  console.log('\n🔍 FONT SIZE AUDIT SUMMARY\n');
  console.log('═'.repeat(60));
  
  // Tailwind font sizes
  console.log('\n📊 TAILWIND TEXT CLASSES USED:\n');
  const sortedTailwind = Array.from(fontSizes.entries())
    .sort((a, b) => b[1] - a[1]);
  
  if (sortedTailwind.length > 0) {
    sortedTailwind.forEach(([size, count]) => {
      console.log(`  ${size.padEnd(15)} → ${count} occurrences`);
    });
  } else {
    console.log('  No Tailwind text classes found');
  }

  // Inline styles
  if (inlineStyles.size > 0) {
    console.log('\n⚠️  INLINE FONT SIZES FOUND:\n');
    const sortedInline = Array.from(inlineStyles.entries())
      .sort((a, b) => b[1] - a[1]);
    
    sortedInline.forEach(([size, count]) => {
      console.log(`  ${size.padEnd(15)} → ${count} occurrences`);
    });
  }

  // Category breakdown
  console.log('\n📁 USAGE BY COMPONENT TYPE:\n');
  const categoryMap = new Map();
  
  fileAnalysis.forEach(file => {
    const current = categoryMap.get(file.category) || { tailwind: new Set(), inline: new Set() };
    file.tailwindSizes.forEach(size => current.tailwind.add(size));
    file.inlineSizes.forEach(size => current.inline.add(size));
    categoryMap.set(file.category, current);
  });

  Array.from(categoryMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([category, sizes]) => {
      console.log(`  ${category}:`);
      if (sizes.tailwind.size > 0) {
        console.log(`    Tailwind: ${Array.from(sizes.tailwind).join(', ')}`);
      }
      if (sizes.inline.size > 0) {
        console.log(`    Inline: ${Array.from(sizes.inline).join(', ')}`);
      }
    });

  // Statistics
  console.log('\n📈 STATISTICS:\n');
  console.log(`  Total files scanned: ${fileAnalysis.length}`);
  console.log(`  Unique Tailwind sizes: ${fontSizes.size}`);
  console.log(`  Unique inline sizes: ${inlineStyles.size}`);
  console.log(`  Total font size instances: ${Array.from(fontSizes.values()).reduce((a, b) => a + b, 0) + Array.from(inlineStyles.values()).reduce((a, b) => a + b, 0)}`);

  console.log('\n═'.repeat(60));
  console.log('\n💡 Next step: Review the sizes above and decide your standards\n');
}

// Main execution
console.log('🚀 Starting font size audit...\n');

const projectRoot = process.cwd();
CONFIG.dirsToScan.forEach(dir => {
  const fullPath = path.join(projectRoot, dir);
  scanDirectory(fullPath);
});

generateSummary();