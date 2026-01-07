const fs = require('fs');
const path = require('path');
const BLOGS_DIR = 'src/content/blogs';
const BACKUP_DIR = 'src/content/blogs_backup_captions';

// Get command line argument for dry run
const isDryRun = process.argv.includes('--dry-run') || process.argv.includes('-d');

function createBackup() {
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }
  
  const mdFiles = fs.readdirSync(BLOGS_DIR).filter(f => f.endsWith('.md'));
  mdFiles.forEach(file => {
    const src = path.join(BLOGS_DIR, file);
    const dest = path.join(BACKUP_DIR, file);
    fs.copyFileSync(src, dest);
  });
  
  console.log(`✅ Backup created in ${BACKUP_DIR}\n`);
}

function analyzeFile(filePath, fileName) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Pattern: <div> with <img> followed by <p> with link
  const pattern = /<div[^>]*>\s*<img[\s\S]*?\/?\s*>\s*<p[^>]*>[\s\S]*?<a[^>]*>[\s\S]*?<\/a>[\s\S]*?<\/p>\s*<\/div>/gi;
  
  const matches = content.match(pattern) || [];
  
  return {
    fileName,
    hasCaptionLinks: matches.length > 0,
    captionLinksCount: matches.length,
    examples: matches.slice(0, 2) // Show first 2 examples
  };
}

function removeCaptionLinks(applyChanges = false) {
  console.log(isDryRun ? '🔍 DRY RUN MODE - No files will be modified\n' : '🧹 Removing caption links from blog images...\n');
  
  if (!fs.existsSync(BLOGS_DIR)) {
    console.error('❌ Blogs directory not found:', BLOGS_DIR);
    return;
  }
  
  const mdFiles = fs.readdirSync(BLOGS_DIR).filter(f => f.endsWith('.md'));
  
  if (mdFiles.length === 0) {
    console.error('❌ No markdown files found');
    return;
  }
  
  console.log(`📄 Found ${mdFiles.length} markdown files\n`);
  
  // First, analyze all files
  console.log('📊 ANALYSIS REPORT:\n' + '='.repeat(60));
  
  const analyses = [];
  mdFiles.forEach(file => {
    const filePath = path.join(BLOGS_DIR, file);
    const analysis = analyzeFile(filePath, file);
    analyses.push(analysis);
    
    if (analysis.hasCaptionLinks) {
      console.log(`\n📌 ${file}:`);
      console.log(`   Images with caption links: ${analysis.captionLinksCount}`);
      
      if (analysis.examples.length > 0) {
        console.log(`   \n   Example of what will be changed:`);
        const preview = analysis.examples[0].substring(0, 300);
        console.log(`   ${preview}...`);
      }
    }
  });
  
  const filesWithCaptionLinks = analyses.filter(a => a.hasCaptionLinks);
  const totalCaptionLinks = analyses.reduce((sum, a) => sum + a.captionLinksCount, 0);
  
  console.log('\n' + '='.repeat(60));
  console.log(`📊 Summary:`);
  console.log(`   Files with caption links: ${filesWithCaptionLinks.length}`);
  console.log(`   Total images with caption links: ${totalCaptionLinks}`);
  console.log(`   Clean files (no changes needed): ${mdFiles.length - filesWithCaptionLinks.length}`);
  console.log('='.repeat(60) + '\n');
  
  if (isDryRun) {
    console.log('✅ Dry run complete! Run without --dry-run to apply changes.\n');
    console.log('Files that will be modified:');
    filesWithCaptionLinks.forEach(f => console.log(`   - ${f.fileName}`));
    return;
  }
  
  // Create backup before making changes
  if (applyChanges && totalCaptionLinks > 0) {
    createBackup();
  }
  
  // Now apply changes
  let totalFilesUpdated = 0;
  let totalRemoved = 0;
  
  mdFiles.forEach(file => {
    const filePath = path.join(BLOGS_DIR, file);
    const analysis = analyses.find(a => a.fileName === file);
    
    if (!analysis.hasCaptionLinks) {
      return; // Skip files without caption links
    }
    
    console.log(`\n🔧 Processing: ${file}`);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      let removed = 0;
      
      // Pattern: Match <div> with <img> and <p> containing link
      // Extract only the <img> tag
      const pattern = /<div[^>]*>\s*(<img[\s\S]*?\/?\s*>)\s*<p[^>]*>[\s\S]*?<a[^>]*>[\s\S]*?<\/a>[\s\S]*?<\/p>\s*<\/div>/gi;
      
      content = content.replace(pattern, (match, imgTag) => {
        removed++;
        return '\n' + imgTag + '\n'; // Keep only the img tag with clean formatting
      });
      
      if (removed > 0 && content !== originalContent) {
        if (applyChanges) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`✅ Removed ${removed} caption links`);
        }
        totalRemoved += removed;
        totalFilesUpdated++;
      }
      
    } catch (err) {
      console.error(`❌ Failed to process ${file}:`, err.message);
    }
  });
  
  console.log('\n' + '='.repeat(60));
  console.log(`✅ ${applyChanges ? 'Cleanup Complete!' : 'Preview Complete!'}`);
  console.log(`📊 Files to be updated: ${totalFilesUpdated}`);
  console.log(`📊 Total caption links to be removed: ${totalRemoved}`);
  console.log('='.repeat(60));
}

function main() {
  console.log('📂 Caption Link Remover for Blog Images\n');
  
  if (isDryRun) {
    console.log('🔍 Running in DRY RUN mode (no changes will be made)\n');
  }
  
  console.log('This will:');
  console.log('1. Analyze all .md files in src/content/blogs/');
  console.log('2. Find <div> with <img> + <p> caption containing links');
  console.log('3. Remove the <div> wrapper and <p> caption');
  console.log('4. Keep only the <img> tags');
  console.log('5. Skip files that already have clean images\n');
  
  removeCaptionLinks(!isDryRun);
  
  if (!isDryRun) {
    console.log('\n📋 Next steps:');
    console.log('1. Review the changes in your markdown files');
    console.log('2. Backup is saved in:', BACKUP_DIR);
    console.log('3. Test locally: npm run dev');
    console.log('4. Verify images display correctly');
    console.log('5. Commit and deploy');
  } else {
    console.log('\n📋 To apply changes:');
    console.log('Run: node remove-caption-links.js');
  }
}

main();