'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BlogMetadata } from '@/types/blog';

interface BlogSearchProps {
  posts: BlogMetadata[];
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  // Debounced search - updates URL after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      
      if (searchQuery.trim() === '') {
        params.delete('search');
        params.delete('page'); // Reset to page 1
      } else {
        params.set('search', searchQuery.trim());
        params.delete('page'); // Reset to page 1 when searching
      }

      const newUrl = params.toString() ? `/blog?${params.toString()}` : '/blog';
      router.push(newUrl, { scroll: false });
    }, 500); // 500ms debounce - adjust as needed

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleClear = () => {
    setSearchQuery('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('search');
    params.delete('page');
    const newUrl = params.toString() ? `/blog?${params.toString()}` : '/blog';
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="relative">
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles by title, tags, category..."
          className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />

        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Search Tip */}
      <div className="mt-2 text-xs text-gray-500">
        💡 Tip: Use the search bar to find articles or click tags/categories to filter
      </div>
    </div>
  );
}
