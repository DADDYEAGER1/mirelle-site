#!/usr/bin/env node

/**
 * Content Audit Script
 * 
 * Scans all blog posts and identifies:
 * - Posts older than 12 months
 * - Posts missing critical metadata fields
 * - Posts without images
 * - Category/tag distribution
 * 
 * Usage:
 *   node scripts/content-audit.js
 *   node scripts/content-audit.js --output report.json
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// ✅ Configuration
const BLOG_DIR = path.join(process.cwd(), 'src/content/blogs');
const METADATA_DIR = path.join(process.cwd(), 'src/content/metadata');
const TWELVE_MONTHS_MS = 365 * 24 * 60 * 60 * 1000;

// ✅ Required fields for schema validation
const REQUIRED_FIELDS = [
  'title',
  'excerpt',
  'date',
  'author',
  'category',
  'tags',
  'image',
  'imageAlt',
  'canonical',
  'readTime'
];

// ✅ Parse command line arguments
const args = process.argv.slice(2);
const outputFile = args.includes('--output') 
  ? args[args.indexOf('--output') + 1] 
  : 'content-audit-report.json';

// ✅ Main audit function
async function auditContent() {
  console.log('🔍 Starting Content Audit...\n');
  
  try {
    // Get all markdown files
    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
    
    if (files.length === 0) {
      console.log('❌ No blog posts found in', BLOG_DIR);
      return;
    }

    console.log(`📊 Found ${files.length} blog posts\n`);

    const results = {
      totalPosts: files.length,
      timestamp: new Date().toISOString(),
      postsNeedingUpdate: [],
      postsMissingFields: [],
      postsWithoutImages: [],
      categoryDistribution: {},
      tagDistribution: {},
      summary: {}
    };

    // Load dateModified.json if exists
    let dateModifiedData = {};
    const dateModifiedPath = path.join(METADATA_DIR, 'dateModified.json');
    if (fs.existsSync(dateModifiedPath)) {
      dateModifiedData = JSON.parse(fs.readFileSync(dateModifiedPath, 'utf8'));
    }

    // Audit each post
    files.forEach(file => {
      const slug = file.replace('.md', '');
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      // Check age (use dateModified or date)
      const lastModified = dateModifiedData[slug] || data.updatedDate || data.date;
      const ageInDays = lastModified 
        ? Math.floor((Date.now() - new Date(lastModified).getTime()) / (24 * 60 * 60 * 1000))
        : null;

      if (ageInDays && ageInDays > 365) {
        results.postsNeedingUpdate.push({
          slug,
          lastModified,
          ageInDays,
          recommendation: ageInDays > 730 ? 'URGENT: Update or archive' : 'Consider updating'
        });
      }

      // Check missing fields
      const missingFields = REQUIRED_FIELDS.filter(field => !data[field]);
      if (missingFields.length > 0) {
        results.postsMissingFields.push({
          slug,
          missingFields,
          severity: missingFields.includes('canonical') || missingFields.includes('image') ? 'HIGH' : 'MEDIUM'
        });
      }

      // Check image presence
      if (!data.image || data.image === '') {
        results.postsWithoutImages.push({
          slug,
          title: data.title || 'Untitled'
        });
      }

      // Category distribution
      const category = data.category || 'Uncategorized';
      results.categoryDistribution[category] = (results.categoryDistribution[category] || 0) + 1;

      // Tag distribution
      if (data.tags && Array.isArray(data.tags)) {
        data.tags.forEach(tag => {
          results.tagDistribution[tag] = (results.tagDistribution[tag] || 0) + 1;
        });
      }
    });

    // Generate summary
    results.summary = {
      postsNeedingUpdate: results.postsNeedingUpdate.length,
      postsMissingFields: results.postsMissingFields.length,
      postsWithoutImages: results.postsWithoutImages.length,
      categoriesUsed: Object.keys(results.categoryDistribution).length,
      tagsUsed: Object.keys(results.tagDistribution).length,
      healthScore: calculateHealthScore(results)
    };

    // Output results
    displayResults(results);
    saveResults(results, outputFile);

  } catch (error) {
    console.error('❌ Error during audit:', error.message);
    process.exit(1);
  }
}

// ✅ Calculate health score (0-100)
function calculateHealthScore(results) {
  const total = results.totalPosts;
  let score = 100;

  // Deduct points for issues
  score -= (results.postsNeedingUpdate.length / total) * 30;
  score -= (results.postsMissingFields.length / total) * 40;
  score -= (results.postsWithoutImages.length / total) * 30;

  return Math.max(0, Math.round(score));
}

// ✅ Display results in console
function displayResults(results) {
  console.log('═══════════════════════════════════════════════');
  console.log('📋 CONTENT AUDIT RESULTS');
  console.log('═══════════════════════════════════════════════\n');

  console.log(`📊 Total Posts: ${results.totalPosts}`);
  console.log(`💯 Health Score: ${results.summary.healthScore}/100\n`);

  // Posts needing update
  if (results.postsNeedingUpdate.length > 0) {
    console.log(`⏰ Posts Needing Update (${results.postsNeedingUpdate.length}):`);
    results.postsNeedingUpdate
      .sort((a, b) => b.ageInDays - a.ageInDays)
      .slice(0, 10)
      .forEach(post => {
        const urgency = post.ageInDays > 730 ? '🔴' : '🟡';
        console.log(`  ${urgency} ${post.slug} - ${post.ageInDays} days old - ${post.recommendation}`);
      });
    if (results.postsNeedingUpdate.length > 10) {
      console.log(`  ... and ${results.postsNeedingUpdate.length - 10} more\n`);
    }
  } else {
    console.log('✅ All posts are up to date!\n');
  }

  // Missing fields
  if (results.postsMissingFields.length > 0) {
    console.log(`\n🚨 Posts Missing Fields (${results.postsMissingFields.length}):`);
    results.postsMissingFields
      .slice(0, 10)
      .forEach(post => {
        const severity = post.severity === 'HIGH' ? '🔴' : '🟡';
        console.log(`  ${severity} ${post.slug} - Missing: ${post.missingFields.join(', ')}`);
      });
    if (results.postsMissingFields.length > 10) {
      console.log(`  ... and ${results.postsMissingFields.length - 10} more\n`);
    }
  } else {
    console.log('✅ All posts have required fields!\n');
  }

  // Posts without images
  if (results.postsWithoutImages.length > 0) {
    console.log(`\n🖼️  Posts Without Images (${results.postsWithoutImages.length}):`);
    results.postsWithoutImages
      .slice(0, 5)
      .forEach(post => {
        console.log(`  - ${post.slug}`);
      });
    if (results.postsWithoutImages.length > 5) {
      console.log(`  ... and ${results.postsWithoutImages.length - 5} more\n`);
    }
  }

  // Category distribution
  console.log('\n📁 Category Distribution:');
  Object.entries(results.categoryDistribution)
    .sort((a, b) => b[1] - a[1])
    .forEach(([category, count]) => {
      const bar = '█'.repeat(Math.ceil(count / 2));
      console.log(`  ${category.padEnd(30)} ${bar} (${count})`);
    });

  // Top tags
  console.log('\n🏷️  Top 10 Tags:');
  Object.entries(results.tagDistribution)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([tag, count]) => {
      const bar = '█'.repeat(Math.ceil(count / 2));
      console.log(`  ${tag.padEnd(30)} ${bar} (${count})`);
    });

  console.log('\n═══════════════════════════════════════════════\n');
}

// ✅ Save results to JSON file
function saveResults(results, filename) {
  try {
    const outputPath = path.join(process.cwd(), filename);
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log(`💾 Full report saved to: ${filename}\n`);
  } catch (error) {
    console.error('❌ Error saving report:', error.message);
  }
}

// ✅ Run audit
auditContent();
