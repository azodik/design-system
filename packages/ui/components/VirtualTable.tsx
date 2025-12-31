import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";
import Table, {
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  DataTableProps,
} from "./Table";

export interface VirtualTableProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> extends Omit<DataTableProps<T>, "data"> {
  data: T[];
  /**
   * Estimated row height in pixels (default: 50)
   */
  estimatedRowHeight?: number;
  /**
   * Container height in pixels (required)
   */
  height: number;
  /**
   * Overscan - number of items to render outside visible area (default: 5)
   */
  overscan?: number;
}

/**
 * VirtualTable component with virtual scrolling for large datasets
 *
 * @example
 * ```tsx
 * <VirtualTable
 *   data={largeDataset}
 *   columns={columns}
 *   height={600}
 *   estimatedRowHeight={50}
 * />
 * ```
 */
export function VirtualTable<T extends Record<string, unknown> = Record<string, unknown>>({
  data,
  columns,
  height,
  estimatedRowHeight = 50,
  overscan = 5,
  sortBy,
  sortDirection,
  onSort,
  onRowClick,
  selectedRows = [],
  onRowSelect,
  onSelectAll,
  selectable = false,
  className = "",
  ...props
}: VirtualTableProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(height);

  // Update container height if height prop changes
  useEffect(() => {
    setContainerHeight(height);
  }, [height]);

  // Calculate visible range
  const { startIndex, endIndex, totalHeight, offsetY } = useMemo(() => {
    const itemCount = data.length;
    const visibleCount = Math.ceil(containerHeight / estimatedRowHeight);
    const start = Math.max(0, Math.floor(scrollTop / estimatedRowHeight) - overscan);
    const end = Math.min(itemCount, start + visibleCount + overscan * 2);

    const totalHeight = itemCount * estimatedRowHeight;
    const offsetY = start * estimatedRowHeight;

    return {
      startIndex: start,
      endIndex: end,
      totalHeight,
      offsetY,
    };
  }, [scrollTop, containerHeight, estimatedRowHeight, data.length, overscan]);

  // Handle scroll
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  // Visible items
  const visibleItems = useMemo(() => {
    return data.slice(startIndex, endIndex);
  }, [data, startIndex, endIndex]);

  // Handle row selection
  const isRowSelected = useCallback(
    (row: T) => {
      return selectedRows.indexOf(row) !== -1;
    },
    [selectedRows],
  );

  const handleRowSelect = useCallback(
    (row: T, selected: boolean) => {
      onRowSelect?.(row, selected);
    },
    [onRowSelect],
  );

  const handleSort = useCallback(
    (key: keyof T) => {
      onSort?.(key);
    },
    [onSort],
  );

  const allSelected = useMemo(() => {
    return selectedRows.length === data.length && data.length > 0;
  }, [selectedRows.length, data.length]);

  return (
    <div
      ref={containerRef}
      className={`virtual-table-container ${className}`}
      style={{
        height: containerHeight,
        overflow: "auto",
        position: "relative",
      }}
      onScroll={handleScroll}
    >
      <div
        style={{
          height: totalHeight,
          position: "relative",
        }}
      >
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <Table className={className} {...props}>
            <TableHeader>
              <TableRow>
                {selectable && (
                  <TableHeaderCell>
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={(e) => {
                        if (onSelectAll) {
                          onSelectAll(e.target.checked);
                        } else {
                          data.forEach((row) => handleRowSelect(row, e.target.checked));
                        }
                      }}
                      aria-label="Select all rows"
                    />
                  </TableHeaderCell>
                )}
                {columns.map((column) => (
                  <TableHeaderCell
                    key={String(column.key)}
                    sortable={column.sortable}
                    sortDirection={sortBy === column.key ? sortDirection : undefined}
                    onSort={() => column.sortable && handleSort(column.key)}
                  >
                    {column.label}
                  </TableHeaderCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {visibleItems.map((row, index) => {
                const actualIndex = startIndex + index;
                return (
                  <TableRow
                    key={actualIndex}
                    selected={isRowSelected(row)}
                    onClick={() => onRowClick?.(row)}
                    style={{ cursor: onRowClick ? "pointer" : "default" }}
                  >
                    {selectable && (
                      <TableCell>
                        <input
                          type="checkbox"
                          checked={isRowSelected(row)}
                          onChange={(e) => handleRowSelect(row, e.target.checked)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </TableCell>
                    )}
                    {columns.map((column) => (
                      <TableCell key={String(column.key)}>
                        {column.render
                          ? column.render(row[column.key], row)
                          : String(row[column.key])}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default VirtualTable;
