
// src/components/Inspo/FilterBar.tsx
'use client';

import { useState } from 'react';
import { filterOptions, sortOptions, type FilterState, type SortOption } from '@/lib/inspoFilters';

interface FilterBarProps {
  activeFilters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onClearFilters: () => void;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
  totalResults: number;
}

export default function FilterBar({
  activeFilters,
  onFilterChange,
  onClearFilters,
  sortBy,
  onSortChange,
  totalResults,
}: FilterBarProps) {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </button>

          {/* Desktop Filters */}
          <div className="hidden lg:flex items-center gap-3 flex-wrap">
            {Object.entries(filterOptions).map(([key, options]) => {
              const icons: Record<string, string> = {
                color: '🎨',
                style: '✨',
                length: '💅',
                occasion: '🎉',
                difficulty: '⭐',
              };

              return (
                <select
                  key={key}
                  value={activeFilters[key as keyof FilterState] || 'all'}
                  onChange={(e) => onFilterChange(key as keyof FilterState, e.target.value)}
                  className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {icons[key]} {option.label}
                    </option>
                  ))}
                </select>
              );
            })}

            {/* Clear Filters */}
            {Object.values(activeFilters).some((v) => v && v !== 'all') && (
              <button
                onClick={onClearFilters}
                className="px-4 py-2 text-burgundy-600 hover:text-burgundy-700 text-sm font-medium underline"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Sort & Results */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 hidden sm:block">
              {totalResults} designs
            </span>

            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium focus:ring-2 focus:ring-burgundy-500 focus:border-transparent cursor-pointer bg-white hover:bg-gray-50 transition-colors"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Filter Panel */}
        {mobileFilterOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="space-y-4">
              {Object.entries(filterOptions).map(([key, options]) => {
                const icons: Record<string, string> = {
                  color: '🎨',
                  style: '✨',
                  length: '💅',
                  occasion: '🎉',
                  difficulty: '⭐',
                };

                return (
                  <div key={key}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {icons[key]} {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <select
                      value={activeFilters[key as keyof FilterState] || 'all'}
                      onChange={(e) => onFilterChange(key as keyof FilterState, e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              })}

              <div className="flex gap-3 pt-4">
                <button
                  onClick={onClearFilters}
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="flex-1 px-4 py-3 bg-burgundy-600 text-white rounded-lg font-medium hover:bg-burgundy-700 transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
