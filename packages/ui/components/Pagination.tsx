import React from "react";

// Pagination Component
export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  className = "",
  ...props
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = maxVisiblePages;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // For mobile (3 pages), show current page and adjacent pages
      if (maxVisible === 3) {
        let start = Math.max(1, currentPage - 1);
        let end = Math.min(totalPages, currentPage + 1);

        // Adjust if we're near the beginning or end
        if (end - start < 2) {
          if (start === 1) {
            end = Math.min(totalPages, start + 2);
          } else {
            start = Math.max(1, end - 2);
          }
        }

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
      } else {
        // For desktop (5 pages), use the original logic
        const start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        const end = Math.min(totalPages, start + maxVisible - 1);

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  return (
    <nav className={`pagination ${className}`} {...props}>
      <ul>
        {showFirstLast && currentPage > 1 && (
          <li className="pagination-item">
            <button className="pagination-link" onClick={() => onPageChange(1)}>
              «
            </button>
          </li>
        )}

        {showPrevNext && currentPage > 1 && (
          <li className="pagination-item">
            <button className="pagination-link" onClick={() => onPageChange(currentPage - 1)}>
              ‹
            </button>
          </li>
        )}

        {getPageNumbers().map((page) => (
          <li key={page} className="pagination-item">
            <button
              className={`pagination-link ${page === currentPage ? "active" : ""}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        {showPrevNext && currentPage < totalPages && (
          <li className="pagination-item">
            <button className="pagination-link" onClick={() => onPageChange(currentPage + 1)}>
              ›
            </button>
          </li>
        )}

        {showFirstLast && currentPage < totalPages && (
          <li className="pagination-item">
            <button className="pagination-link" onClick={() => onPageChange(totalPages)}>
              »
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
