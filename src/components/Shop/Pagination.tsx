'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-6 mt-16 mb-12">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-6 py-3 bg-foreground text-background font-body text-sm uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80 transition-opacity min-w-[120px]"
        aria-label="Previous page"
      >
        Previous
      </button>

      {/* Page Counter */}
      <span className="font-body text-sm text-foreground">
        {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-6 py-3 bg-foreground text-background font-body text-sm uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80 transition-opacity min-w-[120px]"
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
}