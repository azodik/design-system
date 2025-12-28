import React, { useMemo, useCallback } from "react";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  size?: "1" | "2" | "3";
  responsive?: boolean;
}

export default function Table({
  children,
  striped = false,
  bordered = false,
  hover = true,
  size = "2",
  responsive = true,
  className = "",
  ...props
}: TableProps) {
  const tableClasses = [
    "table",
    striped && "table-striped",
    bordered && "table-bordered",
    hover && "table-hover",
    size !== "2" && `table-size-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const tableElement = (
    <table className={tableClasses} {...props}>
      {children}
    </table>
  );

  if (responsive) {
    return <div className="table-responsive">{tableElement}</div>;
  }

  return tableElement;
}

// Table Header Component
export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export function TableHeader({ children, className = "", ...props }: TableHeaderProps) {
  return (
    <thead className={className} {...props}>
      {children}
    </thead>
  );
}

// Table Body Component
export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export function TableBody({ children, className = "", ...props }: TableBodyProps) {
  return (
    <tbody className={className} {...props}>
      {children}
    </tbody>
  );
}

// Table Footer Component
export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export function TableFooter({ children, className = "", ...props }: TableFooterProps) {
  return (
    <tfoot className={className} {...props}>
      {children}
    </tfoot>
  );
}

// Table Row Component
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
  selected?: boolean;
}

export function TableRow({ children, selected = false, className = "", ...props }: TableRowProps) {
  const rowClasses = [selected && "table-row-selected", className].filter(Boolean).join(" ");

  return (
    <tr className={rowClasses} {...props}>
      {children}
    </tr>
  );
}

// Table Header Cell Component
export interface TableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
  children: React.ReactNode;
  sortable?: boolean;
  sortDirection?: "asc" | "desc";
  onSort?: () => void;
}

export function TableHeaderCell({
  children,
  sortable = false,
  sortDirection,
  onSort,
  className = "",
  ...props
}: TableHeaderCellProps) {
  const headerClasses = [
    sortable && "table-header-sortable",
    sortDirection && `table-header-${sortDirection}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <th className={headerClasses} {...props}>
      {sortable ? (
        <button type="button" className="table-header-sort" onClick={onSort}>
          {children}
          {sortDirection && (
            <span className="table-header-sort-icon">{sortDirection === "asc" ? "↑" : "↓"}</span>
          )}
        </button>
      ) : (
        children
      )}
    </th>
  );
}

// Table Cell Component
export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
  children: React.ReactNode;
  numeric?: boolean;
}

export function TableCell({ children, numeric = false, className = "", ...props }: TableCellProps) {
  const cellClasses = [numeric && "table-cell-numeric", className].filter(Boolean).join(" ");

  return (
    <td className={cellClasses} {...props}>
      {children}
    </td>
  );
}

// Data Table Component with built-in features
export interface DataTableProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> extends Omit<TableProps, "children"> {
  data: T[];
  columns: Array<{
    key: keyof T;
    label: string;
    sortable?: boolean;
    render?: (value: T[keyof T], row: T) => React.ReactNode;
  }>;
  sortBy?: keyof T;
  sortDirection?: "asc" | "desc";
  onSort?: (key: keyof T) => void;
  onRowClick?: (row: T) => void;
  selectedRows?: T[];
  onRowSelect?: (row: T, selected: boolean) => void;
  onSelectAll?: (selected: boolean) => void;
  selectable?: boolean;
}

/**
 * DataTable component with built-in sorting, selection, and row click handling
 *
 * @template T - Type of data objects in the table
 * @param data - Array of data objects
 * @param columns - Array of column definitions
 * @param sortBy - Currently sorted column key
 * @param sortDirection - Sort direction ("asc" | "desc")
 * @param onSort - Callback when column is sorted
 * @param onRowClick - Callback when row is clicked
 * @param selectedRows - Array of selected rows
 * @param onRowSelect - Callback when row selection changes
 * @param onSelectAll - Callback when select all is toggled
 * @param selectable - Enable row selection
 */
export function DataTable<T extends Record<string, unknown> = Record<string, unknown>>({
  data,
  columns,
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
}: DataTableProps<T>) {
  const handleSort = useCallback(
    (key: keyof T) => {
      onSort?.(key);
    },
    [onSort],
  );

  const handleRowClick = useCallback(
    (row: T) => {
      onRowClick?.(row);
    },
    [onRowClick],
  );

  const handleRowSelect = useCallback(
    (row: T, selected: boolean) => {
      onRowSelect?.(row, selected);
    },
    [onRowSelect],
  );

  const isRowSelected = useCallback(
    (row: T) => {
      return selectedRows.indexOf(row) !== -1;
    },
    [selectedRows],
  );

  const allSelected = useMemo(() => {
    return selectedRows.length === data.length && data.length > 0;
  }, [selectedRows.length, data.length]);

  return (
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
        {data.map((row, index) => (
          <TableRow
            key={index}
            selected={isRowSelected(row)}
            onClick={() => handleRowClick(row)}
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
                {column.render ? column.render(row[column.key], row) : String(row[column.key])}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
