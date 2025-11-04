// src/lib/inspo.ts
import type { DesignData, DesignImage, DesignsData, ImagesData } from '@/types/inspo';
import designsData from '@/content/inspo-categories.json';

/**
 * Get design metadata by slug
 */
export function getDesignData(slug: string): DesignData | null {
  const data = designsData as any;
  const design = data.designs?.[slug];
  
  if (!design) return null;
  
  if (design.seo && typeof design.seo.keywords === 'string') {
    design.seo.keywords = design.seo.keywords.split(',').map((k: string) => k.trim());
  }
  
  return design as DesignData;
}

/**
 * Get all images for a specific design category
 */
export async function getDesignImages(slug: string): Promise<DesignImage[]> {
  try {
    const imagesData = await import(`@/content/inspo-images/${slug}.json`) as ImagesData;
    return imagesData.images || [];
  } catch (error) {
    console.error(`Error loading images for design: ${slug}`, error);
    return [];
  }
}

/**
 * Get all design slugs for static generation
 */
export function getAllDesignSlugs(): string[] {
  const data = designsData as DesignsData;
  return Object.keys(data.designs);
}

/**
 * Get related designs with their metadata
 */
export function getRelatedDesigns(slug: string, limit: number = 3): DesignData[] {
  const currentDesign = getDesignData(slug);
  if (!currentDesign) return [];

  const relatedSlugs = currentDesign.relatedDesigns.slice(0, limit);
  const relatedDesigns: DesignData[] = [];

  for (const relatedSlug of relatedSlugs) {
    const design = getDesignData(relatedSlug);
    if (design) {
      relatedDesigns.push(design);
    }
  }

  return relatedDesigns;
}

/**
 * Get total image count for a design category
 */
export async function getDesignImageCount(slug: string): Promise<number> {
  const images = await getDesignImages(slug);
  return images.length;
}

/**
 * Get showcase designs for homepage (6 featured designs)
 */
export function getShowcaseDesigns(limit: number = 6): DesignData[] {
  const allSlugs = getAllDesignSlugs();
  const showcaseDesigns: DesignData[] = [];
  
  // Prioritize certain designs for homepage
  const priority = ['french-tips', 'chrome', 'ombre', 'summer', 'glitter', 'minimalist'];
  
  for (const slug of priority) {
    if (showcaseDesigns.length >= limit) break;
    const design = getDesignData(slug);
    if (design) showcaseDesigns.push(design);
  }
  
  // Fill remaining spots with other designs
  for (const slug of allSlugs) {
    if (showcaseDesigns.length >= limit) break;
    if (!priority.includes(slug)) {
      const design = getDesignData(slug);
      if (design) showcaseDesigns.push(design);
    }
  }
  
  return showcaseDesigns.slice(0, limit);
}

/**
 * Get all designs grouped by category
 */
export function getDesignsByCategory(): { [category: string]: DesignData[] } {
  const allSlugs = getAllDesignSlugs();
  const grouped: { [category: string]: DesignData[] } = {};
  
  for (const slug of allSlugs) {
    const design = getDesignData(slug);
    if (design) {
      if (!grouped[design.category]) {
        grouped[design.category] = [];
      }
      grouped[design.category].push(design);
    }
  }
  
  return grouped;
}

/**
 * Filter images by category/tag
 */
export function filterImages(
  images: DesignImage[], 
  filter: 'all' | 'premium' | string
): DesignImage[] {
  switch (filter) {
    case 'premium':
      return images.filter(img => img.isPremium);
    case 'all':
    default:
      return images;
  }
}
