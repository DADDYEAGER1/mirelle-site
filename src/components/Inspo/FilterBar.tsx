// src/components/Inspo/FilterBar.tsx
'use client';

import { useState } from 'react';

interface FilterBarProps {
  currentFilter: string;
  onFilterChange: (filter: 'all' | 'premium' | string) => void;
  totalImages: number;
  filteredCount: number;
}

export default function FilterBar({
  currentFilter,
  onFilterChange,
  totalImages,
  filteredCount,
}: FilterBarProps) {
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'trending'>('newest');

  const filters = [
    { id: 'all', label: 'All Designs', icon: '🎨' },
    { id: 'premium', label: 'Premium', icon: '⭐' },
  ];

  const handleSortChange = (sort: 'newest' | 'popular' | 'trending') => {
    setSortBy(sort);
    setShowSortMenu(false);
    // TODO: Implement actual sorting logic
  };

  return (
    <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Filter buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => onFilterChange(filter.id as 'all' | 'premium')}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  currentFilter === filter.id
                    ? 'bg-accent/80 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
                {filter.id === 'all' && (
                  <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    {totalImages}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Sort and results */}
          <div className="flex items-center gap-4">
            {/* Results count */}
            <div className="text-sm text-gray-600">
              Showing <span className="font-bold text-gray-900">{filteredCount}</span> of{' '}
              <span className="font-bold text-gray-900">{totalImages}</span> designs
            </div>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                  />
                </svg>
                <span className="capitalize">{sortBy}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${showSortMenu ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Sort menu */}
              {showSortMenu && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl p-2 min-w-[160px] border border-gray-100 animate-in slide-in-from-top-2 duration-200">
                  <button
                    onClick={() => handleSortChange('newest')}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-left ${
                      sortBy === 'newest' ? 'bg-accent/10 text-accent/80' : 'text-gray-700'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium">Newest</span>
                  </button>
                  <button
                    onClick={() => handleSortChange('popular')}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-left ${
                      sortBy === 'popular' ? 'bg-accent/10 text-accent/80' : 'text-gray-700'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    <span className="text-sm font-medium">Most Popular</span>
                  </button>
                  <button
                    onClick={() => handleSortChange('trending')}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-left ${
                      sortBy === 'trending' ? 'bg-accent/10 text-accent/80' : 'text-gray-700'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span className="text-sm font-medium">Trending</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Active filter indicator */}
        {currentFilter !== 'all' && (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm text-gray-600">Active filter:</span>
            <span className="px-3 py-1 bg-accent/10 text-accent/80 rounded-full text-sm font-semibold flex items-center gap-2">
              {currentFilter === 'premium' ? '⭐ Premium' : currentFilter}
              <button
                onClick={() => onFilterChange('all')}
                className="hover:bg-accent/20 rounded-full p-0.5 transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          </div>
        )}
      </div>
    </section>
  );
}