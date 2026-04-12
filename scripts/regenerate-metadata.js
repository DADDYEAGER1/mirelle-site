#!/user/bin/env node

/**
 * ═══════════════════════════════════════════════════════════════
 * 🟢 UPDATED VERSION - PHASE 4 WITH NEW SEO FIELDS
 * ═══════════════════════════════════════════════════════════════
 * 
 * Regenerate Metadata Script (Phase 4 - Smart Merge + New Fields)
 * 
 * ✅ PRESERVES existing JSON data (no overwrites)
 * ✅ ONLY ADDS new posts from MD files
 * ✅ Enhanced images.json with width/height/alt/caption
 * ✅ NEW: topicalMaps.json, keywordStrategies.json, contentRelations.json, seoMetrics.json
 * 
 * Usage:
 *   node scripts/regenerate-metadata.js --dry-run
 *   node scripts/regenerate-metadata.js
 *   node scripts/regenerate-metadata.js --force (overwrites all)
 *   node scripts/regenerate-metadata.js --no-backup
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// ✅ Configuration
const BLOG_DIR = path.join(process.cwd(), 'src/content/blogs');
const METADATA_DIR = path.join(process.cwd(), 'src/content/metadata');
const BACKUP_DIR = path.join(METADATA_DIR, 'backups');

// 🆕 PHASE 4: Added new metadata files
const METADATA_FILES = [
  'titles.json',
  'excerpts.json',
  'tags.json',
  'images.json',
  'dateModified.json',
  'tldr.json',
  'faqItems.json',
  'events.json',
  'topicalMaps.json',
  'keywordStrategies.json',
  'contentRelations.json',
  'seoMetrics.json'
];

// ✅ Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const noBackup = args.includes('--no-backup');
const forceOverwrite = args.includes('--force');

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

    // Also backup old imageAlts.json if it exists
    const oldImageAltsPath = path.join(METADATA_DIR, 'imageAlts.json');
    if (fs.existsSync(oldImageAltsPath)) {
      const destPath = path.join(backupSubDir, 'imageAlts.json');
      fs.copyFileSync(oldImageAltsPath, destPath);
      console.log(`✅ Backed up: imageAlts.json (legacy)`);
    }

    console.log(`\n📁 Backup saved to: ${backupSubDir}\n`);

  } catch (error) {
    console.error('❌ Error creating backup:', error.message);
    process.exit(1);
  }
}

// 🆕 PHASE 4: Load existing JSON data to preserve manual edits
function loadExistingMetadata() {
  const existing = {};
  
  METADATA_FILES.forEach(file => {
    const filepath = path.join(METADATA_DIR, file);
    if (fs.existsSync(filepath)) {
      try {
        const content = fs.readFileSync(filepath, 'utf8');
        const key = file.replace('.json', '');
        existing[key] = JSON.parse(content);
      } catch (error) {
        console.warn(`⚠️  Could not load ${file}, will create fresh`);
        existing[file.replace('.json', '')] = {};
      }
    }
  });
  
  return existing;
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

// 🆕 PHASE 3: Generate enhanced image alt text based on title and tags
function generateImageAlt(title, tags, category) {
  // Remove common words for cleaner alt text
  const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'with', 'for', 'on', 'at', 'to', 'from'];
  
  const titleWords = title
    .toLowerCase()
    .split(/\s+/)
    .filter(word => !stopWords.includes(word) && word.length > 2);
  
  // Take first 2-3 relevant tags
  const relevantTags = (tags || []).slice(0, 3);
  
  // Build descriptive alt text
  let alt = title;
  
  if (relevantTags.length > 0) {
    const tagText = relevantTags.join(', ');
    alt += ` featuring ${tagText}`;
  }
  
  if (category) {
    alt += ` for ${category.toLowerCase()}`;
  }
  
  return alt;
}

// 🆕 PHASE 3: Generate caption from excerpt or title
function generateImageCaption(excerpt, title) {
  if (excerpt && excerpt.length > 20) {
    // Take first sentence of excerpt
    const firstSentence = excerpt.split(/[.!?]/)[0].trim();
    return firstSentence.length > 80 
      ? firstSentence.substring(0, 80) + '...' 
      : firstSentence;
  }
  return title;
}

// ✅ Main regeneration function
async function regenerateMetadata() {
  console.log('🔄 Regenerating Metadata (Smart Merge Mode with New SEO Fields)...\n');

  if (isDryRun) {
    console.log('🧪 DRY RUN MODE - No files will be modified\n');
  }

  if (forceOverwrite) {
    console.log('⚠️  FORCE MODE - Will overwrite all existing data\n');
  } else {
    console.log('✅ PRESERVE MODE - Will keep existing JSON data, only add new posts\n');
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

    // 🆕 Load existing metadata (unless force mode)
    const existingMetadata = forceOverwrite ? {} : loadExistingMetadata();

    // Initialize metadata objects with existing data
    const metadata = {
      titles: existingMetadata.titles || {},
      excerpts: existingMetadata.excerpts || {},
      tags: existingMetadata.tags || {},
      images: existingMetadata.images || {},
      dateModified: existingMetadata.dateModified || {},
      tldr: existingMetadata.tldr || {},
      faqItems: existingMetadata.faqItems || {},
      events: existingMetadata.events || {},
      topicalMaps: existingMetadata.topicalMaps || {},
      keywordStrategies: existingMetadata.keywordStrategies || {},
      contentRelations: existingMetadata.contentRelations || {},
      seoMetrics: existingMetadata.seoMetrics || {}
    };

    let newPosts = 0;
    let skippedPosts = 0;
    let updatedFields = {
      topicalMap: 0,
      keywordStrategy: 0,
      contentRelations: 0,
      seoMetrics: 0
    };

    // Extract metadata from each post
    files.forEach(file => {
      const slug = file.replace('.md', '');
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      // 🆕 Check if post already exists in JSON
      const isNewPost = !metadata.titles[slug] || forceOverwrite;

      if (isNewPost) {
        newPosts++;
        
        // Extract basic metadata
        metadata.titles[slug] = data.title || 'Untitled';
        metadata.excerpts[slug] = data.excerpt || '';
        metadata.tags[slug] = data.tags || [];
        metadata.dateModified[slug] = data.dateModified || data.updatedDate || data.date || new Date().toISOString().split('T')[0];
        
        // 🆕 PHASE 3: Enhanced image metadata object
        if (data.image) {
          const imageAlt = data.imageAlt || generateImageAlt(
            data.title,
            data.tags,
            data.category
          );
          
          const imageCaption = data.imageCaption || generateImageCaption(
            data.excerpt,
            data.title
          );

          metadata.images[slug] = {
            url: data.image,
            width: data.imageWidth || 1200,
            height: data.imageHeight || 630,
            alt: imageAlt,
            caption: imageCaption
          };
        }

        // Extract TLDR if exists
        const tldr = extractTLDR(content);
        if (tldr) {
          metadata.tldr[slug] = tldr;
        }

        // Extract FAQ items if exists
        if (data.faqItems && Array.isArray(data.faqItems)) {
          metadata.faqItems[slug] = data.faqItems;
        }

        // 🆕 PHASE 4: Extract event data if exists
        if (data.eventData) {
          metadata.events[slug] = data.eventData;
        }

        // 🆕 PHASE 4: Extract topicalMap if exists
        if (data.topicalMap) {
          metadata.topicalMaps[slug] = data.topicalMap;
          updatedFields.topicalMap++;
        }

        // 🆕 PHASE 4: Extract keywordStrategy if exists
        if (data.keywordStrategy) {
          metadata.keywordStrategies[slug] = data.keywordStrategy;
          updatedFields.keywordStrategy++;
        }

        // 🆕 PHASE 4: Extract contentRelations if exists
        if (data.contentRelations) {
          metadata.contentRelations[slug] = data.contentRelations;
          updatedFields.contentRelations++;
        }

        // 🆕 PHASE 4: Extract seoMetrics if exists
        if (data.seoMetrics) {
          metadata.seoMetrics[slug] = data.seoMetrics;
          updatedFields.seoMetrics++;
        }

        console.log(`✅ Added new: ${slug}`);
      } else {
        skippedPosts++;
        console.log(`⏭️  Skipped existing: ${slug}`);
      }
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

      // 🆕 PHASE 3: Remove old imageAlts.json if it exists
      const oldImageAltsPath = path.join(METADATA_DIR, 'imageAlts.json');
      if (fs.existsSync(oldImageAltsPath)) {
        fs.unlinkSync(oldImageAltsPath);
        console.log(`🗑️  Removed: imageAlts.json (migrated to images.json)`);
      }

    } else {
      // Dry run: just show what would be created
      Object.entries(metadata).forEach(([key, data]) => {
        const filename = `${key}.json`;
        console.log(`💾 Would save: ${filename} (${Object.keys(data).length} entries)`);
      });
    }

    console.log('\n═══════════════════════════════════════════════');
    console.log(`✅ Total posts: ${files.length}`);
    console.log(`🆕 New posts added: ${newPosts}`);
    console.log(`💾 Existing posts preserved: ${skippedPosts}`);
    console.log(`📝 Generated: ${Object.keys(metadata).length} metadata files`);
    console.log(`🆕 Enhanced: images.json now includes width/height/alt/caption`);
    console.log('\n🔍 New SEO Fields Extracted:');
    console.log(`   • topicalMaps: ${updatedFields.topicalMap} posts`);
    console.log(`   • keywordStrategies: ${updatedFields.keywordStrategy} posts`);
    console.log(`   • contentRelations: ${updatedFields.contentRelations} posts`);
    console.log(`   • seoMetrics: ${updatedFields.seoMetrics} posts`);
    
    if (isDryRun) {
      console.log('\n🧪 DRY RUN COMPLETE - Run without --dry-run to apply changes');
    } else {
      console.log('\n✨ Metadata regenerated successfully!');
      if (!noBackup) {
        console.log('💡 Previous metadata backed up to:', BACKUP_DIR);
      }
      if (!forceOverwrite) {
        console.log('💡 To overwrite all data, use --force flag');
      }
    }
    console.log('═══════════════════════════════════════════════\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// ✅ Run script
regenerateMetadata();
