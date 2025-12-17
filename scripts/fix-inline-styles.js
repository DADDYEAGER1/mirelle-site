const fs = require('fs');
const path = require('path');

// Color replacement mapping
const colorReplacements = {
  // Old burgundy to new accent
  '#8b1f42': '#E30088',
  '#cc2d5c': '#E30088',
  '#6b1833': '#B0006B',
  
  // Old cream to new background
  '#fcfaf5': '#F7F7F7',
  '#f8f4eb': '#F7F7F7',
  
  // Old charcoal to new text
  '#2a2a2a': '#252220',
  '#4a4a4a': '#252220',
};

// String replacements for color names in inline styles
const stringReplacements = {
  "color: 'burgundy'": "color: '#E30088'",
  'color: "burgundy"': 'color: "#E30088"',
  "color: 'pink'": "color: '#E30088'",
  'color: "pink"': 'color: "#E30088"',
};

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function replaceInlineColors(content) {
  let newContent = content;
  let changeCount = 0;
  
  // Replace hex colors
  for (const [oldColor, newColor] of Object.entries(colorReplacements)) {
    const regex = new RegExp(oldColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    const matches = newContent.match(regex);
    if (matches) {
      changeCount += matches.length;
      newContent = newContent.replace(regex, newColor);
    }
  }
  
  // Replace string color names
  for (const [oldString, newString] of Object.entries(stringReplacements)) {
    if (newContent.includes(oldString)) {
      changeCount++;
      newContent = newContent.replace(new RegExp(oldString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newString);
    }
  }
  
  return { newContent, changeCount };
}

function fixInlineStyles() {
  console.log('🔧 Fixing inline styles and hardcoded colors...\n');
  
  const scriptDir = __dirname;
  const projectRoot = path.resolve(scriptDir, '..');
  const srcDir = path.join(projectRoot, 'src');
  
  if (!fs.existsSync(srcDir)) {
    console.error(`❌ Error: src directory not found at ${srcDir}`);
    process.exit(1);
  }
  
  const files = getAllFiles(srcDir);
  let totalChanges = 0;
  let filesChanged = 0;
  
  files.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const { newContent, changeCount } = replaceInlineColors(content);
    
    if (changeCount > 0) {
      // Create backup
      const backupPath = `${filePath}.inline-backup`;
      fs.writeFileSync(backupPath, content);
      
      // Write new content
      fs.writeFileSync(filePath, newContent);
      
      console.log(`✅ ${path.relative(srcDir, filePath)}: ${changeCount} changes`);
      totalChanges += changeCount;
      filesChanged++;
    }
  });
  
  console.log(`\n🎉 Inline style fix complete!`);
  console.log(`📊 Files changed: ${filesChanged}`);
  console.log(`📊 Total replacements: ${totalChanges}`);
  console.log(`\n⚠️  Backups created with .inline-backup extension`);
  console.log(`\n🔍 Next steps:`);
  console.log(`1. Delete .next folder manually`);
  console.log(`2. Test your site: npm run dev`);
  console.log(`3. If everything looks good, delete backups`);
}

try {
  fixInlineStyles();
} catch (error) {
  console.error('❌ Fix failed:', error.message);
  process.exit(1);
}