// src/lib/inspoFilters.ts
import type { DesignImage } from '@/types/inspo';

/**
 * Filter images by category/tag
 */
export function filterImages(
  images: DesignImage[],
  filter: 'all' | 'premium' | string
): DesignImage[] {
  switch (filter) {
    case 'all':
      return images;
    case 'premium':
      return images.filter(img => img.isPremium);
    default:
      // Filter by category if it's a custom filter
      return images.filter(img => img.category === filter);
  }
}

/**
 * Sort images by different criteria
 */
export function sortImages(
  images: DesignImage[],
  sortBy: 'newest' | 'popular' | 'trending' | 'random'
): DesignImage[] {
  const sorted = [...images];

  switch (sortBy) {
    case 'newest':
      // Sort by ID in reverse (assuming higher IDs are newer)
      return sorted.sort((a, b) => b.id.localeCompare(a.id));
    
    case 'popular':
      // Sort by premium first, then by ID
      return sorted.sort((a, b) => {
        if (a.isPremium && !b.isPremium) return -1;
        if (!a.isPremium && b.isPremium) return 1;
        return b.id.localeCompare(a.id);
      });
    
    case 'trending':
      // Same as popular for now - could add view counts later
      return sorted.sort((a, b) => {
        if (a.isPremium && !b.isPremium) return -1;
        if (!a.isPremium && b.isPremium) return 1;
        return 0;
      });
    
    case 'random':
      // Shuffle array
      return sorted.sort(() => Math.random() - 0.5);
    
    default:
      return sorted;
  }
}

/**
 * Search images by alt text
 */
export function searchImages(
  images: DesignImage[],
  query: string
): DesignImage[] {
  if (!query || query.trim() === '') return images;
  
  const lowerQuery = query.toLowerCase();
  return images.filter(img =>
    img.alt.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get unique categories from images
 */
export function getUniqueCategories(images: DesignImage[]): string[] {
  const categories = new Set<string>();
  images.forEach(img => {
    if (img.category) categories.add(img.category);
  });
  return Array.from(categories).sort();
}

/**
 * Count images by category
 */
export function countByCategory(images: DesignImage[]): Record<string, number> {
  const counts: Record<string, number> = {};
  
  images.forEach(img => {
    if (img.category) {
      counts[img.category] = (counts[img.category] || 0) + 1;
    }
  });
  
  return counts;
}

/**
 * Get premium images only
 */
export function getPremiumImages(images: DesignImage[]): DesignImage[] {
  return images.filter(img => img.isPremium);
}

/**
 * Get random images for featured section
 */
export function getRandomImages(
  images: DesignImage[],
  count: number = 6
): DesignImage[] {
  const shuffled = [...images].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * Paginate images
 */
export function paginateImages(
  images: DesignImage[],
  page: number = 1,
  perPage: number = 24
): {
  images: DesignImage[];
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
} {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedImages = images.slice(startIndex, endIndex);
  const totalPages = Math.ceil(images.length / perPage);

  return {
    images: paginatedImages,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
}