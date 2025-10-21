interface BreadcrumbItem {
  label: string;
  href: string;
}

// Category name mappings for better labels
const CATEGORY_LABELS: Record<string, string> = {
  'blog': 'Blog',
  'shop': 'Shop',
  'topics': 'Topics',
  'brands': 'Brands',
  'about': 'About',
  'contact': 'Contact',
  
  // Shop categories
  'christmas': 'Christmas Nails',
  'winter': 'Winter Designs',
  'halloween': 'Halloween Styles',
  'fall': 'Fall Collection',
  'new-year': 'New Year',
  'trendy': 'Trendy Collections',
  
  // Topic categories
  'seasonal-trends': 'Seasonal Trends',
  'nail-care-guide': 'Nail Care Guide',
  'at-home-hacks': 'At-Home Hacks',
  'modern-women': 'Modern Women',
  'nail-art-guides': 'Nail Art Guides',
  'skin-tones': 'Skin Tones',
};

/**
 * Convert URL slug to readable title
 */
export function slugToTitle(slug: string): string {
  // Check if we have a predefined label
  if (CATEGORY_LABELS[slug]) {
    return CATEGORY_LABELS[slug];
  }
  
  // Otherwise, convert slug to title case
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Generate breadcrumb items from URL path
 * Example: /blog/christmas-nail-designs-2025
 * Returns: [{ label: 'Blog', href: '/blog' }]
 */
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  // Remove trailing slash and split path
  const pathSegments = pathname.replace(/\/$/, '').split('/').filter(Boolean);
  
  const breadcrumbs: BreadcrumbItem[] = [];
  let currentPath = '';
  
  // Build breadcrumbs from path segments (excluding the last one - that's the current page)
  for (let i = 0; i < pathSegments.length - 1; i++) {
    const segment = pathSegments[i];
    currentPath += `/${segment}`;
    
    breadcrumbs.push({
      label: slugToTitle(segment),
      href: currentPath,
    });
  }
  
  return breadcrumbs;
}

/**
 * Get breadcrumb data for blog posts
 */
export function getBlogBreadcrumbs(postSlug: string): BreadcrumbItem[] {
  return [
    { label: 'Blog', href: '/blog' }
  ];
}

/**
 * Get breadcrumb data for shop pages
 */
export function getShopBreadcrumbs(category: string): BreadcrumbItem[] {
  return [
    { label: 'Shop', href: '/shop' }
  ];
}

/**
 * Get breadcrumb data for topic pages
 */
export function getTopicBreadcrumbs(topic: string): BreadcrumbItem[] {
  return [
    { label: 'Topics', href: '/topics' }
  ];
}
