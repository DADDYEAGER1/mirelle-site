// Brand utility functions - mirrors blog.ts pattern

import { Brand, BrandMetadata, BrandCategory } from '@/types/brand';
import { BRANDS } from '@/data/brands';

/**
 * Get all brands (lightweight metadata for listings)
 */
export async function getAllBrands(): Promise<BrandMetadata[]> {
  return BRANDS.map(brand => ({
    slug: brand.slug,
    name: brand.name,
    tagline: brand.tagline,
    logo: brand.logo,
    category: brand.category,
    partnershipTier: brand.partnershipTier,
    featured: brand.featured,
  }));
}

/**
 * Get full brand details by slug
 */
export async function getBrand(slug: string): Promise<Brand | null> {
  const brand = BRANDS.find(b => b.slug === slug);
  return brand || null;
}

/**
 * Get all brand slugs (for static generation)
 */
export async function getAllBrandSlugs(): Promise<string[]> {
  return BRANDS.map(brand => brand.slug);
}

/**
 * Get featured brands only
 */
export async function getFeaturedBrands(limit?: number): Promise<Brand[]> {
  const featured = BRANDS
    .filter(brand => brand.featured)
    .sort((a, b) => (b.stats?.popularityScore || 0) - (a.stats?.popularityScore || 0));
  
  return limit ? featured.slice(0, limit) : featured;
}

/**
 * Get brands by category
 */
export async function getBrandsByCategory(category: BrandCategory): Promise<Brand[]> {
  return BRANDS.filter(brand => brand.category === category);
}

/**
 * Search brands by name or description
 */
export async function searchBrands(query: string): Promise<Brand[]> {
  const lowerQuery = query.toLowerCase();
  return BRANDS.filter(brand => 
    brand.name.toLowerCase().includes(lowerQuery) ||
    brand.description.toLowerCase().includes(lowerQuery) ||
    brand.tagline.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get related brands (same category, excluding current)
 */
export async function getRelatedBrands(slug: string, limit: number = 3): Promise<Brand[]> {
  const currentBrand = await getBrand(slug);
  if (!currentBrand) return [];

  const related = BRANDS
    .filter(brand => 
      brand.slug !== slug && 
      brand.category === currentBrand.category
    )
    .sort((a, b) => (b.stats?.popularityScore || 0) - (a.stats?.popularityScore || 0))
    .slice(0, limit);

  return related;
}

/**
 * Get brand statistics
 */
export async function getBrandStats() {
  return {
    totalBrands: BRANDS.length,
    featuredBrands: BRANDS.filter(b => b.featured).length,
    categoriesCount: new Set(BRANDS.map(b => b.category)).size,
    totalProducts: BRANDS.reduce((sum, b) => sum + b.products.length, 0),
  };
}
