export interface ContentValidation {
  passed: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    wordCount: number;
    primaryKeywordCount: number;
    primaryKeywordDensity: number;
    lsiKeywordCount: number;
    internalLinks: number;
    externalLinks: number;
    images: number;
    imagesWithKeywordAlt: number;
    h2Headings: number;
    h2WithKeyword: number;
  };
}

export function validatePost(
  content: string,
  frontmatter: any,
  primaryKeyword: string,
  lsiKeywords: string[]
): ContentValidation {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Word count
  const wordCount = content.split(/\s+/).length;
  if (wordCount < 1500) errors.push('Word count too low (<1500)');
  if (wordCount < 2000) warnings.push('Consider adding more content (target: 2000-3000)');
  
  // Primary keyword
  const pkRegex = new RegExp(primaryKeyword, 'gi');
  const pkMatches = content.match(pkRegex) || [];
  const pkDensity = (pkMatches.length / wordCount) * 100;
  
  if (pkMatches.length < 15) errors.push(`Primary keyword usage too low (${pkMatches.length}/15 minimum)`);
  if (pkDensity > 3) warnings.push(`Primary keyword density high (${pkDensity.toFixed(2)}%, keep under 2.5%)`);
  
  // LSI keywords
  let lsiKeywordCount = 0;
  lsiKeywords.forEach(lsi => {
    const lsiRegex = new RegExp(lsi, 'gi');
    const matches = content.match(lsiRegex) || [];
    lsiKeywordCount += matches.length;
  });
  
  if (lsiKeywordCount < 10) {
    warnings.push(`LSI keyword usage low (${lsiKeywordCount}/10+ recommended)`);
  }
  
  // H2 headings
  const h2Regex = /^## (.+)$/gm;
  const h2Matches = content.match(h2Regex) || [];
  const h2WithKeyword = h2Matches.filter(h => 
    h.toLowerCase().includes(primaryKeyword.toLowerCase())
  ).length;
  
  if (h2WithKeyword < 4) {
    warnings.push(`Primary keyword in only ${h2WithKeyword} H2 headings (target: 4+)`);
  }
  
  // Images
  const imgRegex = /!\[([^\]]*)\]\([^)]+\)/g;
  const images = content.match(imgRegex) || [];
  const imagesWithKeyword = images.filter(img => 
    img.toLowerCase().includes(primaryKeyword.toLowerCase())
  ).length;
  
  if (images.length > 0) {
    const keywordAltPercent = (imagesWithKeyword / images.length) * 100;
    if (keywordAltPercent < 60) {
      warnings.push(`Only ${keywordAltPercent.toFixed(0)}% of images have keyword in alt text (target: 60%)`);
    }
  } else {
    warnings.push('No images found in content');
  }
  
  // Internal links
  const internalLinkRegex = /<a href=['"]\/[^'"]+['"]/g;
  const internalLinks = (content.match(internalLinkRegex) || []).length;
  if (internalLinks < 10) {
    warnings.push(`Only ${internalLinks} internal links (target: 10-15)`);
  }
  
  // External links
  const externalLinkRegex = /<a href=['"]https?:\/\/[^'"]+['"]/g;
  const externalLinks = (content.match(externalLinkRegex) || []).length;
  if (externalLinks < 4) {
    warnings.push(`Only ${externalLinks} external links (target: 4-6)`);
  }
  
  // Check frontmatter
  if (!frontmatter.imageAlt) errors.push('Missing imageAlt in frontmatter');
  if (!frontmatter.ogImage) warnings.push('Missing ogImage in frontmatter');
  if (!frontmatter.dateModified) warnings.push('Missing dateModified in frontmatter');
  if (!frontmatter.wordCount) warnings.push('Missing wordCount in frontmatter');
  
  return {
    passed: errors.length === 0,
    errors,
    warnings,
    stats: {
      wordCount,
      primaryKeywordCount: pkMatches.length,
      primaryKeywordDensity: pkDensity,
      lsiKeywordCount,
      internalLinks,
      externalLinks,
      images: images.length,
      imagesWithKeywordAlt: imagesWithKeyword,
      h2Headings: h2Matches.length,
      h2WithKeyword
    }
  };
}

export function generateSEOReport(validation: ContentValidation): string {
  let report = '=== SEO CONTENT VALIDATION REPORT ===\n\n';
  
  report += `Status: ${validation.passed ? '✅ PASSED' : '❌ FAILED'}\n\n`;
  
  if (validation.errors.length > 0) {
    report += '🔴 ERRORS (Must Fix):\n';
    validation.errors.forEach(err => report += `  - ${err}\n`);
    report += '\n';
  }
  
  if (validation.warnings.length > 0) {
    report += '⚠️  WARNINGS (Recommended):\n';
    validation.warnings.forEach(warn => report += `  - ${warn}\n`);
    report += '\n';
  }
  
  report += '📊 STATS:\n';
  report += `  Word Count: ${validation.stats.wordCount}\n`;
  report += `  Primary Keyword: ${validation.stats.primaryKeywordCount} times (${validation.stats.primaryKeywordDensity.toFixed(2)}% density)\n`;
  report += `  LSI Keywords: ${validation.stats.lsiKeywordCount} occurrences\n`;
  report += `  H2 Headings: ${validation.stats.h2Headings} total, ${validation.stats.h2WithKeyword} with keyword\n`;
  report += `  Images: ${validation.stats.images} total, ${validation.stats.imagesWithKeywordAlt} with keyword in alt\n`;
  report += `  Internal Links: ${validation.stats.internalLinks}\n`;
  report += `  External Links: ${validation.stats.externalLinks}\n`;
  
  return report;
}
