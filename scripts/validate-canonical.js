#!/usr/bin/env node

/**
 * Canonical URL Validation Script
 * 
 * Validates canonical URLs across all blog posts:
 * - Checks for missing canonical URLs
 * - Validates URL format
 * - Checks for duplicate canonicals
 * - Ensures correct domain
 * 
 * Usage:
 *   node scripts/validate-canonicals.js
 *   node scripts/validate-canonicals.js --fix (auto-fix issues)
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// ✅ Configuration
const BLOG_DIR = path.join(process.cwd(), 'src/content/blogs');
const EXPECTED_DOMAIN = 'https://mirelleinspo.com';

// ✅ Parse command line arguments
const args = process.argv.slice(2);
const autoFix = args.includes('--fix');

// ✅ Validate canonical URL format
function isValidCanonical(url) {
  if (!url) return false;
  
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && 
           parsed.hostname === 'mirelleinspo.com' &&
           parsed.pathname.startsWith('/blog/');
  } catch {
    return false;
  }
}

// ✅ Generate correct canonical URL
function generateCanonicalUrl(slug) {
  return `${EXPECTED_DOMAIN}/blog/${slug}`;
}

// ✅ Main validation function
async function validateCanonicals() {
  console.log('🔍 Validating Canonical URLs...\n');
  
  if (autoFix) {
    console.log('🔧 AUTO-FIX MODE - Issues will be corrected\n');
  }

  try {
    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
    
    if (files.length === 0) {
      console.log('❌ No blog posts found');
      return;
    }

    console.log(`📊 Checking ${files.length} blog posts...\n`);

    const results = {
      total: files.length,
      valid: 0,
      missing: [],
      invalid: [],
      wrongDomain: [],
      duplicates: {},
      fixed: 0,
    };

    const canonicalMap = new Map();

    // First pass: collect all canonicals and validate
    files.forEach(file => {
      const slug = file.replace('.md', '');
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      const canonical = data.canonical;
      const expectedCanonical = generateCanonicalUrl(slug);

      // Missing canonical
      if (!canonical) {
        results.missing.push({ slug, expected: expectedCanonical });
        return;
      }

      // Invalid format
      if (!isValidCanonical(canonical)) {
        results.invalid.push({ slug, current: canonical, expected: expectedCanonical });
        return;
      }

      // Wrong domain or path
      if (canonical !== expectedCanonical) {
        results.wrongDomain.push({ slug, current: canonical, expected: expectedCanonical });
        return;
      }

      // Track for duplicates
      if (canonicalMap.has(canonical)) {
        canonicalMap.get(canonical).push(slug);
      } else {
        canonicalMap.set(canonical, [slug]);
      }

      results.valid++;
    });

    // Check for duplicates
    canonicalMap.forEach((slugs, canonical) => {
      if (slugs.length > 1) {
        results.duplicates[canonical] = slugs;
      }
    });

    // Auto-fix if requested
    if (autoFix) {
      const toFix = [
        ...results.missing,
        ...results.invalid,
        ...results.wrongDomain,
      ];

      toFix.forEach(({ slug, expected }) => {
        const filePath = path.join(BLOG_DIR, `${slug}.md`);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        data.canonical = expected;
        const newContent = matter.stringify(content, data);
        fs.writeFileSync(filePath, newContent, 'utf8');
        
        results.fixed++;
      });
    }

    // Display results
    displayResults(results, autoFix);

  } catch (error) {
    console.error('❌ Error during validation:', error.message);
    process.exit(1);
  }
}

// ✅ Display validation results
function displayResults(results, fixed) {
  console.log('═══════════════════════════════════════════════');
  console.log('📋 CANONICAL URL VALIDATION RESULTS');
  console.log('═══════════════════════════════════════════════\n');

  console.log(`📊 Total Posts: ${results.total}`);
  console.log(`✅ Valid: ${results.valid}`);
  console.log(`❌ Issues: ${results.total - results.valid}\n`);

  // Missing canonicals
  if (results.missing.length > 0) {
    console.log(`🚨 Missing Canonicals (${results.missing.length}):`);
    results.missing.forEach(({ slug, expected }) => {
      console.log(`  ❌ ${slug}`);
      console.log(`     Expected: ${expected}\n`);
    });
  }

  // Invalid format
  if (results.invalid.length > 0) {
    console.log(`⚠️  Invalid Format (${results.invalid.length}):`);
    results.invalid.forEach(({ slug, current, expected }) => {
      console.log(`  ❌ ${slug}`);
      console.log(`     Current:  ${current}`);
      console.log(`     Expected: ${expected}\n`);
    });
  }

  // Wrong domain/path
  if (results.wrongDomain.length > 0) {
    console.log(`🔀 Wrong Domain/Path (${results.wrongDomain.length}):`);
    results.wrongDomain.forEach(({ slug, current, expected }) => {
      console.log(`  ⚠️  ${slug}`);
      console.log(`     Current:  ${current}`);
      console.log(`     Expected: ${expected}\n`);
    });
  }

  // Duplicates
  const duplicateCount = Object.keys(results.duplicates).length;
  if (duplicateCount > 0) {
    console.log(`⚠️  Duplicate Canonicals (${duplicateCount}):`);
    Object.entries(results.duplicates).forEach(([canonical, slugs]) => {
      console.log(`  🔴 ${canonical}`);
      console.log(`     Used by: ${slugs.join(', ')}\n`);
    });
  }

  console.log('═══════════════════════════════════════════════');

  if (fixed) {
    console.log(`✅ Fixed: ${results.fixed} posts`);
    console.log('\n✨ Canonicals updated successfully!\n');
  } else if (results.total - results.valid > 0) {
    console.log('\n💡 Run with --fix to automatically correct issues:\n');
    console.log('   node scripts/validate-canonicals.js --fix\n');
  } else {
    console.log('\n✅ All canonical URLs are valid!\n');
  }
}

// ✅ Run validation
validateCanonicals();
