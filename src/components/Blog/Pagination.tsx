interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  // ✅ NEW - Generate page numbers with ellipsis for large page counts
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showEllipsisThreshold = 7;

    if (totalPages <= showEllipsisThreshold) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);

      // Show ellipsis or pages around current page
      if (currentPage > 3) {
        pages.push('...');
      }

      // Show pages around current page
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }

      // Show ellipsis before last page
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // Show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav className="flex justify-center items-center gap-2 mt-12" aria-label="Pagination">
      {/* Previous Button */}
      {prevPage ? (
        <a
          href={`${baseUrl}?page=${prevPage}`}
          className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-medium"
          aria-label="Previous page"
        >
          ← Previous
        </a>
      ) : (
        <button
          disabled
          className="px-4 py-2 bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed font-medium"
          aria-label="Previous page (disabled)"
        >
          ← Previous
        </button>
      )}

      {/* Page Numbers */}
      <div className="flex gap-2">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className="px-4 py-2 text-gray-500">
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <a
              key={pageNum}
              href={`${baseUrl}?page=${pageNum}`}
              className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                isActive
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label={`Page ${pageNum}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {pageNum}
            </a>
          );
        })}
      </div>

      {/* Next Button */}
      {nextPage ? (
        <a
          href={`${baseUrl}?page=${nextPage}`}
          className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-medium"
          aria-label="Next page"
        >
          Next →
        </a>
      ) : (
        <button
          disabled
          className="px-4 py-2 bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed font-medium"
          aria-label="Next page (disabled)"
        >
          Next →
        </button>
      )}
    </nav>
  );
}
