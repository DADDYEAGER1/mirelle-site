// SEO helper functions

export function generateImageAlt(keyword: string, description: string): string {
  const alt = `${keyword} ${description}`;
  return alt.length > 125 ? alt.substring(0, 122) + '...' : alt;
}

export function calculateReadTime(wordCount: number): string {
  const minutes = Math.ceil(wordCount / 200); // 200 WPM average
  return `${minutes} min`;
}

export function extractKeywords(content: string, primaryKeyword: string): {
  count: number;
  density: number;
  locations: string[];
} {
  // Count primary keyword usage
  const regex = new RegExp(primaryKeyword, 'gi');
  const matches = content.match(regex) || [];
  const wordCount = content.split(/\s+/).length;
  
  return {
    count: matches.length,
    density: (matches.length / wordCount) * 100,
    locations: [] // Could extract H2 headings containing keyword
  };
}

export function optimizeTitle(title: string, maxLength: number = 60): string {
  if (title.length <= maxLength) return title;
  return title.substring(0, maxLength - 3) + '...';
}

export function optimizeDescription(description: string, maxLength: number = 160): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + '...';
}

export function validateSlug(slug: string): boolean {
  // Valid slug: lowercase, hyphens, numbers only
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
