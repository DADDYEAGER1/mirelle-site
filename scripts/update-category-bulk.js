#!/usr/bin/env node

/**
 * Bulk Update Categories Script
 * 
 * Updates category field across multiple posts
 * 
 * Usage:
 *   node scripts/update-categories-bulk.js --from "Old Category" --to "New Category" --dry-run
 *   node scripts/update-categories-bulk.js --from "Seasonal Nail Trends" --to "Seasonal Trends"
 *   node scripts/update-categories-bulk.js --list (shows all categories)
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// ✅ Configuration
const BLOG_DIR = path.join(process.cwd(), 'src/content/blogs');

// ✅ Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const showList = args.includes('--list');

function getArgValue(argName) {
  const index = args.indexOf(argName);
  return index !== -1 && args[index + 1] ? args[index + 1] : null;
}

const fromCategory = getArgValue('--from');
const toCategory = getArgValue('--to');

// ✅ List all categories
function listCategories() {
  console.log('📁 Listing All Categories...\n');

  try {
    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
    const categories = {};

    files.forEach(file => {
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      const category = data.category || 'Uncategorized';
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(file.replace('.md', ''));
    });

    console.log('═══════════════════════════════════════════════');
    Object.entries(categories)
      .sort((a, b) => b[1].length - a[1].length)
      .forEach(([category, posts]) => {
        console.log(`\n📂 ${category} (${posts.length} posts)`);
        posts.slice(0, 5).forEach(slug => {
          console.log(`   - ${slug}`);
        });
        if (posts.length > 5) {
          console.log(`   ... and ${posts.length - 5} more`);
        }
      });
    console.log('\n═══════════════════════════════════════════════\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// ✅ Bulk update categories
async function updateCategories() {
  console.log('🔄 Bulk Updating Categories...\n');

  // Validate arguments
  if (!fromCategory || !toCategory) {
    console.error('❌ Error: Both --from and --to arguments are required');
    console.log('\nUsage:');
    console.log('  node scripts/update-categories-bulk.js --from "Old Category" --to "New Category"');
    console.log('  Add --dry-run to preview changes without applying them');
    console.log('  Use --list to see all current categories\n');
    process.exit(1);
  }

  if (isDryRun) {
    console.log('🧪 DRY RUN MODE - No files will be modified\n');
  }

  console.log(`🔍 Searching for: "${fromCategory}"`);
  console.log(`➡️  Replacing with: "${toCategory}"\n`);

  try {
    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
    let matchedCount = 0;
    const matchedPosts = [];

    files.forEach(file => {
      const slug = file.replace('.md', '');
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content: markdownContent } = matter(fileContent);

      // Check if category matches
      if (data.category === fromCategory) {
        matchedCount++;
        matchedPosts.push(slug);

        console.log(`✅ ${slug}`);
        console.log(`   Current: "${data.category}"`);
        console.log(`   New:     "${toCategory}"\n`);

        if (!isDryRun) {
          // Update category
          data.category = toCategory;

          // Write back to file
          const newContent = matter.stringify(markdownContent, data);
          fs.writeFileSync(filePath, newContent, 'utf8');
        }
      }
    });

    console.log('═══════════════════════════════════════════════');
    if (matchedCount === 0) {
      console.log(`⚠️  No posts found with category: "${fromCategory}"`);
      console.log('\n💡 Tip: Use --list to see all available categories');
    } else {
      console.log(`✅ Updated: ${matchedCount} posts`);
      
      if (isDryRun) {
        console.log('\n🧪 DRY RUN COMPLETE - Run without --dry-run to apply changes');
      } else {
        console.log('\n✨ Categories updated successfully!');
      }
    }
    console.log('═══════════════════════════════════════════════\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// ✅ Main execution
if (showList) {
  listCategories();
} else {
  updateCategories();
}
