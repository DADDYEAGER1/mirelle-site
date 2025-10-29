#!/usr/bin/env node

/**
 * Regenerate Metadata Script
 * 
 * Re-extracts metadata from markdown files to JSON files
 * Useful after bulk edits to markdown frontmatter
 * Creates backup before overwriting
 * 
 * Usage:
 *   node scripts/regenerate-metadata.js --dry-run
 *   node scripts/regenerate-metadata.js
 *   node scripts/regenerate-metadata.js --no-backup
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// ✅ Configuration
const BLOG_DIR = path.join(process.cwd(), 'src/content/blogs');
const METADATA_DIR = path.join(process.cwd(), 'src/content/metadata');
const BACKUP_DIR = path.join(METADATA_DIR, 'backups');

// ✅ Metadata JSON files to regenerate
const METADATA_FILES = [
  'titles.json',
  'excerpts.json',
  'tags.json',
  'images.json',
  'imageAlts.json',
  'dateModified.json',
  'tldr.json',
  'faqItems.json'
];

// ✅ Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const noBackup = args.includes('--no-backup');

// ✅ Create backup of existing metadata
function createBackup() {
  if (noBackup) {
    console.log('⚠️  Skipping backup (--no-backup flag)\n');
    return;
  }

  console.log('💾 Creating backup of existing metadata...\n');

  try {
    // Create backup directory if it doesn't exist
    if (!fs.existsSync(BACKUP_DIR)) {
      fs.mkdirSync(BACKUP_DIR, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
    const backupSubDir = path.join(BACKUP_DIR, `backup-${timestamp}`);
    fs.mkdirSync(backupSubDir, { recursive: true });

    // Copy each metadata file
    METADATA_FILES.forEach(file => {
      const sourcePath = path.join(METADATA_DIR, file);
      if (fs.existsSync(sourcePath)) {
        const destPath = path.join(backupSubDir, file);
        fs.copyFileSync(sourcePath, destPath);
        console.log(`✅ Backed up: ${file}`);
      }
    });

    console.log(`\n📁 Backup saved to: ${backupSubDir}\n`);

  } catch (error) {
    console.error('❌ Error creating backup:', error.message);
    process.exit(1);
  }
}

// ✅ Extract TLDR from content
function extractTLDR(content) {
  // Look for TLDR section in markdown
  const tldrMatch = content.match(/## (?:TLDR|TL;DR|Quick Summary)[\s\S]*?\n\n([\s\S]*?)(?=\n##|\n---|\Z)/i);
  if (tldrMatch) {
    return tldrMatch[1].trim().substring(0, 300);
  }
  return null;
}

// ✅ Main regeneration function
async function regenerateMetadata() {
  console.log('🔄 Regenerating Metadata from Markdown Files...\n');

  if (isDryRun) {
    console.log('🧪 DRY RUN MODE - No files will be modified\n');
  }

  try {
    // Create backup first (unless dry-run or no-backup)
    if (!isDryRun && !noBackup) {
      createBackup();
    }

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
    
    if (files.length === 0) {
      console.log('❌ No blog posts found');
      return;
    }

    console.log(`📊 Processing ${files.length} blog posts...\n`);

    // Initialize metadata objects
    const metadata = {
      titles: {},
      excerpts: {},
      tags: {},
      images: {},
      imageAlts: {},
      dateModified: {},
      tldr: {},
      faqItems: {}
    };

    // Extract metadata from each post
    files.forEach(file => {
      const slug = file.replace('.md', '');
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      // Extract each metadata field
      metadata.titles[slug] = data.title || 'Untitled';
      metadata.excerpts[slug] = data.excerpt || '';
      metadata.tags[slug] = data.tags || [];
      metadata.images[slug] = data.image || '';
      metadata.imageAlts[slug] = data.imageAlt || '';
      metadata.dateModified[slug] = data.dateModified || data.updatedDate || data.date || new Date().toISOString().split('T')[0];
      
      // Extract TLDR if exists
      const tldr = extractTLDR(content);
      if (tldr) {
        metadata.tldr[slug] = tldr;
      }

      // Extract FAQ items if exists
      if (data.faqItems && Array.isArray(data.faqItems)) {
        metadata.faqItems[slug] = data.faqItems;
      }

      console.log(`✅ Processed: ${slug}`);
    });

    console.log('\n');

    // Write metadata to JSON files
    if (!isDryRun) {
      // Ensure metadata directory exists
      if (!fs.existsSync(METADATA_DIR)) {
        fs.mkdirSync(METADATA_DIR, { recursive: true });
      }

      Object.entries(metadata).forEach(([key, data]) => {
        const filename = `${key}.json`;
        const filepath = path.join(METADATA_DIR, filename);
        fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`💾 Saved: ${filename} (${Object.keys(data).length} entries)`);
      });
    } else {
      // Dry run: just show what would be created
      Object.entries(metadata).forEach(([key, data]) => {
        const filename = `${key}.json`;
        console.log(`💾 Would save: ${filename} (${Object.keys(data).length} entries)`);
      });
    }

    console.log('\n═══════════════════════════════════════════════');
    console.log(`✅ Processed: ${files.length} posts`);
    console.log(`📝 Generated: ${Object.keys(metadata).length} metadata files`);
    
    if (isDryRun) {
      console.log('\n🧪 DRY RUN COMPLETE - Run without --dry-run to apply changes');
    } else {
      console.log('\n✨ Metadata regenerated successfully!');
      if (!noBackup) {
        console.log('💡 Previous metadata backed up to:', BACKUP_DIR);
      }
    }
    console.log('═══════════════════════════════════════════════\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// ✅ Run script
regenerateMetadata();regeeg
