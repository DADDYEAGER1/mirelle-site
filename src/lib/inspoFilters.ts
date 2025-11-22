// src/lib/inspoFilters.ts
import type { DesignImage } from '@/types/inspo';

export interface FilterState {
  color?: string;
  style?: string;
  length?: string;
  occasion?: string;
  difficulty?: string;
}

export type SortOption = 'trending' | 'newest' | 'popular' | 'viewed';

/**
 * Filter options for each category
 */
export const filterOptions = {
  color: [
    { value: 'all', label: 'All Colors' },
    { value: 'white', label: 'White' },
    { value: 'nude', label: 'Nude' },
    { value: 'pink', label: 'Pink' },
    { value: 'red', label: 'Red' },
    { value: 'burgundy', label: 'Burgundy' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'green', label: 'Green' },
    { value: 'black', label: 'Black' },
    { value: 'silver', label: 'Silver' },
    { value: 'gold', label: 'Gold' },
    { value: 'chrome', label: 'Chrome' },
  ],
  style: [
    { value: 'all', label: 'All Styles' },
    { value: 'classic', label: 'Classic' },
    { value: 'modern', label: 'Modern' },
    { value: 'minimalist', label: 'Minimalist' },
    { value: 'glam', label: 'Glam' },
    { value: 'artistic', label: 'Artistic' },
    { value: 'seasonal', label: 'Seasonal' },
  ],
  length: [
    { value: 'all', label: 'All Lengths' },
    { value: 'short', label: 'Short' },
    { value: 'medium', label: 'Medium' },
    { value: 'long', label: 'Long' },
    { value: 'extra-long', label: 'Extra Long' },
  ],
  occasion: [
    { value: 'all', label: 'All Occasions' },
    { value: 'everyday', label: 'Everyday' },
    { value: 'office', label: 'Office' },
    { value: 'party', label: 'Party' },
    { value: 'wedding', label: 'Wedding' },
    { value: 'vacation', label: 'Vacation' },
    { value: 'formal', label: 'Formal' },
  ],
  difficulty: [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ],
};

/**
 * Sort options
 */
export const sortOptions = [
  { value: 'trending', label: '🔥 Trending' },
  { value: 'newest', label: '🆕 Newest' },
  { value: 'popular', label: '💖 Most Liked' },
  { value: 'viewed', label: '👁️ Most Viewed' },
];

/**
 * Filter images based on active filters
 */
export function filterImages(images: DesignImage[], filters: FilterState): DesignImage[] {
  let filtered = [...images];

  // Filter by color
  if (filters.color && filters.color !== 'all') {
    filtered = filtered.filter((img) =>
      img.category?.toLowerCase().includes(filters.color!.toLowerCase())
    );
  }

  // Add more filter logic as needed based on image metadata

  return filtered;
}

/**
 * Sort images based on sort option
 */
export function sortImages(images: DesignImage[], sortBy: SortOption): DesignImage[] {
  const sorted = [...images];

  switch (sortBy) {
    case 'trending':
      // Could be based on recent engagement, for now random
      return sorted.sort(() => Math.random() - 0.5);
    
    case 'newest':
      // Reverse order (assuming newer images are added last)
      return sorted.reverse();
    
    case 'popular':
      // Would need likes metadata
      return sorted;
    
    case 'viewed':
      // Would need views metadata
      return sorted;
    
    default:
      return sorted;
  }
}

/**
 * Get active filter count
 */
export function getActiveFilterCount(filters: FilterState): number {
  return Object.values(filters).filter(
    (value) => value && value !== 'all'
  ).length;
}

/**
 * Get filter chips for display
 */
export function getActiveFilterChips(filters: FilterState): Array<{
  id: string;
  label: string;
  icon: string;
  value: string;
}> {
  const chips: Array<{ id: string; label: string; icon: string; value: string }> = [];

  Object.entries(filters).forEach(([key, value]) => {
    if (value && value !== 'all') {
      const option = filterOptions[key as keyof typeof filterOptions]?.find(
        (opt) => opt.value === value
      );
      
      if (option) {
        const icons: Record<string, string> = {
          color: '🎨',
          style: '✨',
          length: '💅',
          occasion: '🎉',
          difficulty: '⭐',
        };
        
        chips.push({
          id: key,
          label: option.label,
          icon: icons[key] || '•',
          value: value,
        });
      }
    }
  });

  return chips;
}
