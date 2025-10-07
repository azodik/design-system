import React from "react";

// Pagination Component
export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  className = "",
  ...props
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisible - 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
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
