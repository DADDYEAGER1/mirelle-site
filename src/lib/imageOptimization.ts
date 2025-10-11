export interface ImageMetadata {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export function validateImageAlt(alt: string, primaryKeyword: string): {
  valid: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  
  if (alt.length > 125) issues.push('Alt text too long (>125 chars)');
  if (alt.length < 10) issues.push('Alt text too short (<10 chars)');
  if (!alt.toLowerCase().includes(primaryKeyword.toLowerCase())) {
    issues.push(`Missing primary keyword: "${primaryKeyword}"`);
  }
  
  return {
    valid: issues.length === 0,
    issues
  };
}

export function generateOptimizedFilename(title: string, index: number): string {
  const slug = title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `${slug}-${index}.webp`;
}

export function validateImageDimensions(width: number, height: number): {
  valid: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  
  // Check for OG image dimensions
  if (width < 1200) issues.push('Width should be at least 1200px for OG images');
  if (height < 630) issues.push('Height should be at least 630px for OG images');
  
  // Check aspect ratio (should be close to 1.91:1 for OG)
  const aspectRatio = width / height;
  if (aspectRatio < 1.85 || aspectRatio > 1.95) {
    issues.push('Aspect ratio should be close to 1.91:1 (1200x630) for optimal display');
  }
  
  return {
    valid: issues.length === 0,
    issues
  };
}

export function extractImagesFromContent(content: string): ImageMetadata[] {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  const images: ImageMetadata[] = [];
  let match;
  
  while ((match = imageRegex.exec(content)) !== null) {
    images.push({
      src: match[2],
      alt: match[1],
      width: 1200, // Default, should be updated based on actual image
      height: 630
    });
  }
  
  return images;
}
