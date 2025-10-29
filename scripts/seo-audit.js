#!/usr/bin/env node

/**
 * SEO Audit Script
 * 
 * Comprehensive SEO validation for all blog posts:
 * - Title length (50-60 chars optimal)
 * - Meta description length (150-160 chars optimal)
 * - Image optimization (dimensions, alt text)
 * - Schema.org fields
 * - Internal linking
 * - Heading structure
 * 
 * Usage:
 *   node scripts/seo-audit.js
 *   node scripts/seo-audit.js --output seo-report.json
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// ✅ Configuration
const BLOG_DIR = path.join(process.cwd(), 'src/content/blogs');

// ✅ SEO Best Practices
const SEO_RULES = {
  title: {
    minLength: 30,
    maxLength: 60,
    optimalMin: 50,
    optimalMax: 60,
  },
  excerpt: {
    minLength: 120,
    maxLength: 160,
    optimalMin: 150,
    optimalMax: 160,
  },
  image: {
    optimalWidth: 1200,
    optimalHeight: 630,
    minWidth: 800,
    minHeight: 400,
  },
  wordCount: {
    minLength: 300,
    optimalMin: 1000,
  },
};

// ✅ Parse command line arguments
const args = process.argv.slice(2);
const outputFile = args.includes('--output') 
  ? args[args.indexOf('--output') + 1] 
  : null;

// ✅ Evaluate title
function evaluateTitle(title) {
  const length = title.length;
  
  if (length < SEO_RULES.title.minLength) {
    return { status: 'error', message: `Too short (${length} chars, min ${SEO_RULES.title.minLength})` };
  }
  if (length > SEO_RULES.title.maxLength) {
    return { status: 'warning', message: `Too long (${length} chars, max ${SEO_RULES.title.maxLength})` };
  }
  if (length >= SEO_RULES.title.optimalMin && length <= SEO_RULES.title.optimalMax) {
    return { status: 'optimal', message: `Optimal length (${length} chars)` };
  }
  return { status: 'ok', message: `Good length (${length} chars)` };
}

// ✅ Evaluate excerpt/description
function evaluateExcerpt(excerpt) {
  const length = excerpt.length;
  
  if (length < SEO_RULES.excerpt.minLength) {
    return { status: 'error', message: `Too short (${length} chars, min ${SEO_RULES.excerpt.minLength})` };
  }
  if (length > SEO_RULES.excerpt.maxLength) {
    return { status: 'warning', message: `Too long (${length} chars, max ${SEO_RULES.excerpt.maxLength})` };
  }
  if (length >= SEO_RULES.excerpt.optimalMin && length <= SEO_RULES.excerpt.optimalMax) {
    return { status: 'optimal', message: `Optimal length (${length} chars)` };
  }
  return { status: 'ok', message: `Good length (${length} chars)` };
}

// ✅ Evaluate image
function evaluateImage(post) {
  const issues = [];
  
  if (!post.image) {
    return { status: 'error', message: 'Missing image', issues: ['No featured image'] };
  }
  
  if (!post.imageAlt) {
    issues.push('Missing alt text');
  }
  
  if (!post.imageWidth || !post.imageHeight) {
    issues.push('Missing dimensions');
  } else {
    if (post.imageWidth < SEO_RULES.image.minWidth) {
      issues.push(`Width too small (${post.imageWidth}px, min ${SEO_RULES.image.minWidth}px)`);
    }
    if (post.imageHeight < SEO_RULES.image.minHeight) {
      issues.push(`Height too small (${post.imageHeight}px, min ${SEO_RULES.image.minHeight}px)`);
    }
  }
  
  if (issues.length > 0) {
    return { status: 'warning', message: issues.join(', '), issues };
  }
  
  return { status: 'ok', message: 'Image optimized', issues: [] };
}

// ✅ Evaluate schema fields
function evaluateSchema(post) {
  const missing = [];
  
  if (!post.canonical) missing.push('canonical');
  if (!post.dateModified) missing.push('dateModified');
  if (!post.wordCount) missing.push('wordCount');
  if (!post.category) missing.push('category');
  if (!post.tags || post.tags.length === 0) missing.push('tags');
  
  if (missing.length > 0) {
    return { status: 'warning', message: `Missing: ${missing.join(', ')}`, missing };
  }
  
  return { status: 'ok', message: 'All schema fields present', missing: [] };
}

// ✅ Analyze heading structure from content
function analyzeHeadings(content) {
  const h1Count = (content.match(/^# /gm) || []).length;
  const h2Count = (content.match(/^## /gm) || []).length;
  const h3Count = (content.match(/^### /gm) || []).length;
  
  const issues = [];
  
  if (h1Count > 1) {
    issues.push(`Multiple H1s (${h1Count})`);
  }
  if (h2Count === 0) {
    issues.push('No H2 headings (poor structure)');
  }
  
  return {
    status: issues.length > 0 ? 'warning' : 'ok',
    h1Count,
    h2Count,
    h3Count,
    issues,
  };
}

// ✅ Check internal linking
function analyzeInternalLinks(content) {
  const internalLinks = (content.match(/\[.*?\]\(\/.*?\)/g) || []).length;
  const externalLinks = (content.match(/\[.*?\]\(https?:\/\/.*?\)/g) || []).length;
  
  return {
    status: internalLinks > 0 ? 'ok' : 'warning',
    internalLinks,
    externalLinks,
    message: internalLinks === 0 ? 'No internal links' : `${internalLinks} internal links`,
  };
}

// ✅ Main audit function
async function auditSEO() {
  console.log('🔍 Starting SEO Audit...\n');
  
  try {
    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
    
    if (files.length === 0) {
      console.log('❌ No blog posts found');
      return;
    }

    console.log(`📊 Auditing ${files.length} blog posts...\n`);

    const results = {
      total: files.length,
      timestamp: new Date().toISOString(),
      posts: [],
      summary: {
        optimal: 0,
        warnings: 0,
        errors: 0,
      },
    };

    files.forEach(file => {
      const slug = file.replace('.md', '');
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      const postAudit = {
        slug,
        title: data.title || 'Untitled',
        titleAnalysis: evaluateTitle(data.title || ''),
        excerptAnalysis: evaluateExcerpt(data.excerpt || ''),
        imageAnalysis: evaluateImage(data),
        schemaAnalysis: evaluateSchema(data),
        headingAnalysis: analyzeHeadings(content),
        linkAnalysis: analyzeInternalLinks(content),
        wordCount: data.wordCount || content.split(/\s+/).length,
      };

      // Calculate overall status
      const statuses = [
        postAudit.titleAnalysis.status,
        postAudit.excerptAnalysis.status,
        postAudit.imageAnalysis.status,
        postAudit.schemaAnalysis.status,
        postAudit.headingAnalysis.status,
        postAudit.linkAnalysis.status,
      ];

      if (statuses.includes('error')) {
        postAudit.overallStatus = 'error';
        results.summary.errors++;
      } else if (statuses.includes('warning')) {
        postAudit.overallStatus = 'warning';
        results.summary.warnings++;
      } else {
        postAudit.overallStatus = 'optimal';
        results.summary.optimal++;
      }

      results.posts.push(postAudit);
    });

    // Display results
    displayResults(results);

    // Save to file if requested
    if (outputFile) {
      saveResults(results, outputFile);
    }

  } catch (error) {
    console.error('❌ Error during SEO audit:', error.message);
    process.exit(1);
  }
}

// ✅ Display results
function displayResults(results) {
  console.log('═══════════════════════════════════════════════');
  console.log('📋 SEO AUDIT RESULTS');
  console.log('═══════════════════════════════════════════════\n');

  console.log(`📊 Total Posts: ${results.total}`);
  console.log(`✅ Optimal: ${results.summary.optimal}`);
  console.log(`⚠️  Warnings: ${results.summary.warnings}`);
  console.log(`❌ Errors: ${results.summary.errors}\n`);

  // Show posts with errors first
  const errorPosts = results.posts.filter(p => p.overallStatus === 'error');
  if (errorPosts.length > 0) {
    console.log('🚨 CRITICAL ISSUES:\n');
    errorPosts.forEach(post => {
      console.log(`❌ ${post.slug}`);
      if (post.titleAnalysis.status === 'error') {
        console.log(`   Title: ${post.titleAnalysis.message}`);
      }
      if (post.excerptAnalysis.status === 'error') {
        console.log(`   Excerpt: ${post.excerptAnalysis.message}`);
      }
      if (post.imageAnalysis.status === 'error') {
        console.log(`   Image: ${post.imageAnalysis.message}`);
      }
      console.log('');
    });
  }

  // Show posts with warnings
  const warningPosts = results.posts.filter(p => p.overallStatus === 'warning');
  if (warningPosts.length > 0) {
    console.log('⚠️  WARNINGS (first 10):\n');
    warningPosts.slice(0, 10).forEach(post => {
      console.log(`⚠️  ${post.slug}`);
      
      const warnings = [];
      if (post.titleAnalysis.status === 'warning') warnings.push(`Title: ${post.titleAnalysis.message}`);
      if (post.excerptAnalysis.status === 'warning') warnings.push(`Excerpt: ${post.excerptAnalysis.message}`);
      if (post.imageAnalysis.status === 'warning') warnings.push(`Image: ${post.imageAnalysis.message}`);
      if (post.schemaAnalysis.status === 'warning') warnings.push(`Schema: ${post.schemaAnalysis.message}`);
      if (post.headingAnalysis.status === 'warning') warnings.push(`Headings: ${post.headingAnalysis.issues.join(', ')}`);
      if (post.linkAnalysis.status === 'warning') warnings.push(`Links: ${post.linkAnalysis.message}`);
      
      warnings.forEach(w => console.log(`   ${w}`));
      console.log('');
    });
    
    if (warningPosts.length > 10) {
      console.log(`   ... and ${warningPosts.length - 10} more\n`);
    }
  }

  console.log('═══════════════════════════════════════════════\n');
}

// ✅ Save results to JSON
function saveResults(results, filename) {
  try {
    const outputPath = path.join(process.cwd(), filename);
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log(`💾 Full SEO report saved to: ${filename}\n`);
  } catch (error) {
    console.error('❌ Error saving report:', error.message);
  }
}

// ✅ Run audit
auditSEO();
