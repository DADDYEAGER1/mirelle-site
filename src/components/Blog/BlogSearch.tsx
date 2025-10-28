
'use client';

import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { BlogMetadata } from '@/types/blog';

interface BlogSearchProps {
  posts: BlogMetadata[];
  onSearchResults?: (results: BlogMetadata[]) => void;
}

export default function BlogSearch({ posts, onSearchResults }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<BlogMetadata[]>(posts);
  const [isSearching, setIsSearching] = useState(false);

  // ✅ NEW - Initialize Fuse.js with optimized options
  const fuse = new Fuse(posts, {
    keys: [
      { name: 'title', weight: 0.7 },
      { name: 'excerpt', weight: 0.3 },
      { name: 'tags', weight: 0.5 },
      { name: 'category', weight: 0.4 },
    ],
    threshold: 0.3,
    includeScore: true,
    minMatchCharLength: 2,
  });

  // ✅ NEW - Debounced search handler
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim() === '') {
        setSearchResults(posts);
        setIsSearching(false);
        onSearchResults?.(posts);
      } else {
        setIsSearching(true);
        const results = fuse.search(searchQuery);
        const filteredPosts = results.map(result => result.item);
        setSearchResults(filteredPosts);
        setIsSearching(false);
        onSearchResults?.(filteredPosts);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [searchQuery, posts]);

  const handleClear = () => {
    setSearchQuery('');
    setSearchResults(posts);
    onSearchResults?.(posts);
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
          placeholder="Search articles..."
          className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />

        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
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

      {/* Search Status */}
      {searchQuery && (
        <div className="mt-2 text-sm text-gray-600">
          {isSearching ? (
            <span>Searching...</span>
          ) : (
            <span>
              Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'}
              {searchQuery && ` for "${searchQuery}"`}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
