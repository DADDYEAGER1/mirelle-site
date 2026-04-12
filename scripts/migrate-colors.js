const fs = require('fs');
const path = require('path');

// Color mapping rules
const colorMappings = {
  // Charcoal to text-primary
  'bg-charcoal-50': 'bg-gray-100',
  'bg-charcoal-100': 'bg-gray-100',
  'bg-charcoal-200': 'bg-gray-200',
  'bg-charcoal-300': 'bg-gray-300',
  'bg-charcoal-400': 'bg-gray-400',
  'bg-charcoal-500': 'bg-gray-500',
  'bg-charcoal-600': 'bg-gray-600',
  'bg-charcoal-700': 'bg-gray-700',
  'bg-charcoal-800': 'bg-gray-800',
  'bg-charcoal-900': 'bg-text-primary',
  
  'text-charcoal-50': 'text-gray-100',
  'text-charcoal-100': 'text-gray-100',
  'text-charcoal-200': 'text-gray-200',
  'text-charcoal-300': 'text-gray-300',
  'text-charcoal-400': 'text-gray-400',
  'text-charcoal-500': 'text-gray-500',
  'text-charcoal-600': 'text-gray-600',
  'text-charcoal-700': 'text-gray-700',
  'text-charcoal-800': 'text-gray-800',
  'text-charcoal-900': 'text-text-primary',
  
  'border-charcoal-50': 'border-gray-100',
  'border-charcoal-100': 'border-gray-100',
  'border-charcoal-200': 'border-gray-200',
  'border-charcoal-300': 'border-gray-300',
  'border-charcoal-400': 'border-gray-400',
  'border-charcoal-500': 'border-gray-500',
  'border-charcoal-600': 'border-gray-600',
  'border-charcoal-700': 'border-gray-700',
  'border-charcoal-800': 'border-gray-800',
  'border-charcoal-900': 'border-text-primary',
  
  // Cream to background
  'bg-cream-50': 'bg-background',
  'bg-cream-100': 'bg-background',
  'bg-cream-200': 'bg-background',
  'bg-cream-300': 'bg-background',
  'bg-cream-400': 'bg-background',
  'bg-cream-500': 'bg-background',
  'bg-cream-600': 'bg-background',
  'bg-cream-700': 'bg-background',
  'bg-cream-800': 'bg-background',
  'bg-cream-900': 'bg-background',
  
  'text-cream-50': 'text-background',
  'text-cream-100': 'text-background',
  'text-cream-200': 'text-background',
  'text-cream-300': 'text-background',
  'text-cream-400': 'text-background',
  'text-cream-500': 'text-background',
  'text-cream-600': 'text-background',
  'text-cream-700': 'text-background',
  'text-cream-800': 'text-background',
  'text-cream-900': 'text-background',
  
  // Burgundy to accent
  'bg-burgundy-50': 'bg-accent/10',
  'bg-burgundy-100': 'bg-accent/20',
  'bg-burgundy-200': 'bg-accent/30',
  'bg-burgundy-300': 'bg-accent/40',
  'bg-burgundy-400': 'bg-accent/50',
  'bg-burgundy-500': 'bg-accent/70',
  'bg-burgundy-600': 'bg-accent/80',
  'bg-burgundy-700': 'bg-accent',
  'bg-burgundy-800': 'bg-accent',
  'bg-burgundy-900': 'bg-accent',
  'bg-burgundy-950': 'bg-accent',
  
  'text-burgundy-50': 'text-accent/10',
  'text-burgundy-100': 'text-accent/20',
  'text-burgundy-200': 'text-accent/30',
  'text-burgundy-300': 'text-accent/40',
  'text-burgundy-400': 'text-accent/50',
  'text-burgundy-500': 'text-accent/70',
  'text-burgundy-600': 'text-accent/80',
  'text-burgundy-700': 'text-accent',
  'text-burgundy-800': 'text-accent',
  'text-burgundy-900': 'text-accent',
  'text-burgundy-950': 'text-accent',
  
  'border-burgundy-50': 'border-accent/10',
  'border-burgundy-100': 'border-accent/20',
  'border-burgundy-200': 'border-accent/30',
  'border-burgundy-300': 'border-accent/40',
  'border-burgundy-400': 'border-accent/50',
  'border-burgundy-500': 'border-accent/70',
  'border-burgundy-600': 'border-accent/80',
  'border-burgundy-700': 'border-accent',
  'border-burgundy-800': 'border-accent',
  'border-burgundy-900': 'border-accent',
  
  'hover:bg-burgundy-700': 'hover:bg-accent',
  'hover:bg-burgundy-800': 'hover:bg-accent',
  'hover:text-burgundy-700': 'hover:text-accent',
  
  // Blog colors
  'bg-blog-primary': 'bg-accent',
  'text-blog-primary': 'text-accent',
  'bg-blog-secondary': 'bg-background',
  'text-blog-secondary': 'text-background',
  'bg-blog-accent': 'bg-accent',
  'text-blog-accent': 'text-accent',
  
  // Editorial colors
  'bg-editorial-cream': 'bg-background',
  'bg-editorial-sand': 'bg-background',
  'bg-editorial-accent': 'bg-accent',
  'text-editorial-charcoal': 'text-text-primary',
  'text-editorial-accent': 'text-accent',
};

// Function to recursively get all .tsx files
function getAllTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.css')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to replace colors in content
function replaceColors(content) {
  let newContent = content;
  let changeCount = 0;
  
  // Replace each color mapping
  for (const [oldColor, newColor] of Object.entries(colorMappings)) {
    const regex = new RegExp(oldColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = newContent.match(regex);
    if (matches) {
      changeCount += matches.length;
      newContent = newContent.replace(regex, newColor);
    }
  }
  
  return { newContent, changeCount };
}

// Main migration function
function migrateColors() {
  console.log('🎨 Starting color migration...\n');
  
  // Get the correct src path
  const scriptDir = __dirname;
  const projectRoot = path.resolve(scriptDir, '..');
  const srcDir = path.join(projectRoot, 'src');
  
  console.log(`📁 Script location: ${scriptDir}`);
  console.log(`📁 Project root: ${projectRoot}`);
  console.log(`📁 Looking for src at: ${srcDir}\n`);
  
  if (!fs.existsSync(srcDir)) {
    console.error(`❌ Error: src directory not found at ${srcDir}`);
    console.error(`Please run this script from the project root or adjust the path.`);
    process.exit(1);
  }
  
  const files = getAllTsxFiles(srcDir);
  
  let totalChanges = 0;
  let filesChanged = 0;
  
  files.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const { newContent, changeCount } = replaceColors(content);
    
    if (changeCount > 0) {
      // Create backup
      const backupPath = `${filePath}.backup`;
      fs.writeFileSync(backupPath, content);
      
      // Write new content
      fs.writeFileSync(filePath, newContent);
      
      console.log(`✅ ${path.relative(srcDir, filePath)}: ${changeCount} changes`);
      totalChanges += changeCount;
      filesChanged++;
    }
  });
  
  console.log(`\n🎉 Migration complete!`);
  console.log(`📊 Files changed: ${filesChanged}`);
  console.log(`📊 Total replacements: ${totalChanges}`);
  console.log(`\n⚠️  Backups created with .backup extension`);
  console.log(`\n🔍 Next steps:`);
  console.log(`1. Test your site: npm run dev`);
  console.log(`2. If everything looks good, delete backups: find src -name "*.backup" -delete`);
  console.log(`3. If issues found, restore backups manually`);
}

// Run migration
try {
  migrateColors();
} catch (error) {
  console.error('❌ Migration failed:', error.message);
  process.exit(1);
}