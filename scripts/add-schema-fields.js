#!/usr/bin/env node

/**
 * Add Schema Fields Script
 * 
 * Adds missing schema.org fields to all blog posts:
 * - imageWidth, imageHeight (for ImageObject schema)
 * - wordCount (for Article schema)
 * - canonical (for SEO)
 * - dateModified (if missing)
 * 
 * Usage:
 *   node scripts/add-schema-fields.js --dry-run
 *   node scripts/add-schema-fields.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// ✅ Configuration
const BLOG_DIR = path.join(process.cwd(), 'src/content/blogs');
const DEFAULT_IMAGE_WIDTH = 1200;
const DEFAULT_IMAGE_HEIGHT = 630;

// ✅ Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');

// ✅ Calculate word count from markdown content
function calculateWordCount(content) {
  // Remove YAML frontmatter
  const cleanContent = content.replace(/^---[\s\S]*?---/, '');
  
  // Remove markdown syntax
  const text = cleanContent
    .replace(/!\[.*?\]\(.*?\)/g, '') // Images
    .replace(/\[.*?\]\(.*?\)/g, '') // Links
    .replace(/[#*_`~]/g, '') // Markdown formatting
    .replace(/<[^>]*>/g, '') // HTML tags
    .trim();
  
  // Count words
  const words = text.split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

// ✅ Main function
async function addSchemaFields() {
  console.log('🔧 Adding Schema.org Fields to Blog Posts...\n');
  
  if (isDryRun) {
    console.log('🧪 DRY RUN MODE - No files will be modified\n');
  }

  try {
    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
    
    if (files.length === 0) {
      console.log('❌ No blog posts found');
      return;
    }

    console.log(`📊 Processing ${files.length} blog posts...\n`);

    let modifiedCount = 0;
    let skippedCount = 0;

    files.forEach(file => {
      const slug = file.replace('.md', '');
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content: markdownContent } = matter(fileContent);

      let modified = false;
      const changes = [];

      // ✅ Add canonical if missing
      if (!data.canonical) {
        data.canonical = `https://mirelleinspo.com/blog/${slug}`;
        changes.push('canonical');
        modified = true;
      }

      // ✅ Add imageWidth if missing and image exists
      if (data.image && !data.imageWidth) {
        data.imageWidth = DEFAULT_IMAGE_WIDTH;
        changes.push('imageWidth');
        modified = true;
      }

      // ✅ Add imageHeight if missing and image exists
      if (data.image && !data.imageHeight) {
        data.imageHeight = DEFAULT_IMAGE_HEIGHT;
        changes.push('imageHeight');
        modified = true;
      }

      // ✅ Add wordCount if missing
      if (!data.wordCount) {
        data.wordCount = calculateWordCount(fileContent);
        changes.push('wordCount');
        modified = true;
      }

      // ✅ Add dateModified if missing (use updatedDate or date)
      if (!data.dateModified) {
        data.dateModified = data.updatedDate 
          ? new Date(data.updatedDate).toISOString().split('T')[0]
          : new Date(data.date).toISOString().split('T')[0];
        changes.push('dateModified');
        modified = true;
      }

      if (modified) {
        modifiedCount++;
        console.log(`✅ ${slug}`);
        console.log(`   Added: ${changes.join(', ')}\n`);

        if (!isDryRun) {
          // Write back to file
          const newContent = matter.stringify(markdownContent, data);
          fs.writeFileSync(filePath, newContent, 'utf8');
        }
      } else {
        skippedCount++;
      }
    });

    console.log('═══════════════════════════════════════════════');
    console.log(`✅ Modified: ${modifiedCount} posts`);
    console.log(`⏭️  Skipped: ${skippedCount} posts (already complete)`);
    
    if (isDryRun) {
      console.log('\n🧪 DRY RUN COMPLETE - Run without --dry-run to apply changes');
    } else {
      console.log('\n✨ Schema fields added successfully!');
    }
    console.log('═══════════════════════════════════════════════\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// ✅ Run script
addSchemaFields();
