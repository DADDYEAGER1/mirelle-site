// src/components/Posts/Pagination.tsx
'use client';

import { useRouter } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  category?: string | null;
}

export default function Pagination({
  currentPage,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  category,
}: PaginationProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    const url = category 
      ? `/posts?page=${page}&category=${category}`
      : `/posts?page=${page}`;
    router.push(url);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-6 mt-16">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!hasPreviousPage}
        className={`px-12 py-4 font-ui text-sm uppercase tracking-wide transition-colors ${
          hasPreviousPage
            ? 'bg-gray-300 text-gray-800 hover:bg-gray-400'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        PREVIOUS
      </button>

      {/* Page Counter */}
      <span className="font-ui text-sm">
        {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!hasNextPage}
        className={`px-12 py-4 font-ui text-sm uppercase tracking-wide transition-colors ${
          hasNextPage
            ? 'bg-foreground text-background hover:bg-gray-800'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        NEXT
      </button>
    </div>
  );
}