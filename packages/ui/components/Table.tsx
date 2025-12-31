"use client";
import React, { useMemo, useCallback, useState, useEffect } from "react";
import type { SemanticSize } from "../utils/size-variant-mapping";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  size?: SemanticSize;
  responsive?: boolean;
}

export default function Table({
  children,
  striped = false,
  bordered = false,
  hover = true,
  size = "sm",
  responsive = true,
  className = "",
  ...props
}: TableProps) {
  const tableClasses = [
    "table",
    striped && "table-striped",
    bordered && "table-bordered",
    hover && "table-hover",
    size !== "sm" && `table-size-${size}`,
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
  /**
   * Enable column resizing
   */
  resizable?: boolean;
  /**
   * Initial column width
   */
  width?: number | string;
  /**
   * Minimum column width (for resizable columns)
   */
  minWidth?: number;
  /**
   * Maximum column width (for resizable columns)
   */
  maxWidth?: number;
  /**
   * Pin column to left or right
   */
  pinned?: "left" | "right";
  /**
   * Callback when column is resized
   */
  onResize?: (width: number) => void;
}

export function TableHeaderCell({
  children,
  sortable = false,
  sortDirection,
  onSort,
  resizable = false,
  width,
  minWidth = 50,
  maxWidth,
  pinned,
  onResize,
  className = "",
  style,
  ...props
}: TableHeaderCellProps) {
  const [columnWidth, setColumnWidth] = React.useState<number | string | undefined>(width);
  const [isResizing, setIsResizing] = React.useState(false);
  const headerRef = React.useRef<HTMLTableHeaderCellElement>(null);
  const startXRef = React.useRef(0);
  const startWidthRef = React.useRef(0);

  const headerClasses = [
    sortable && "table-header-sortable",
    sortDirection && `table-header-${sortDirection}`,
    resizable && "table-header-resizable",
    pinned && `table-header-pinned-${pinned}`,
    isResizing && "table-header-resizing",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleMouseDown = React.useCallback(
    (e: React.MouseEvent) => {
      if (!resizable || !headerRef.current) return;
      e.preventDefault();
      setIsResizing(true);
      startXRef.current = e.clientX;
      const currentWidth = headerRef.current.offsetWidth;
      startWidthRef.current = currentWidth;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.clientX - startXRef.current;
        let newWidth = startWidthRef.current + deltaX;

        if (minWidth && newWidth < minWidth) {
          newWidth = minWidth;
        }
        if (maxWidth && newWidth > maxWidth) {
          newWidth = maxWidth;
        }

        setColumnWidth(newWidth);
        onResize?.(newWidth);
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [resizable, minWidth, maxWidth, onResize],
  );

  const cellStyle: React.CSSProperties = {
    ...style,
    width: columnWidth || width,
    minWidth: minWidth,
    maxWidth: maxWidth,
    position: pinned ? "sticky" : undefined,
    left: pinned === "left" ? 0 : undefined,
    right: pinned === "right" ? 0 : undefined,
    zIndex: pinned ? 10 : undefined,
    backgroundColor: pinned ? "var(--color-background)" : undefined,
  };

  return (
    <th ref={headerRef} className={headerClasses} style={cellStyle} {...props}>
      <div className="table-header-content">
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
      </div>
      {resizable && (
        <button
          type="button"
          className="table-header-resizer"
          aria-label="Resize column"
          onMouseDown={handleMouseDown}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
              e.preventDefault();
              // Keyboard resizing could be implemented here
            }
          }}
        />
      )}
    </th>
  );
}

// Table Cell Component
export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
  children: React.ReactNode;
  numeric?: boolean;
  /**
   * Pin cell to left or right (must match header)
   */
  pinned?: "left" | "right";
}

export function TableCell({
  children,
  numeric = false,
  pinned,
  className = "",
  style,
  ...props
}: TableCellProps) {
  const cellClasses = [
    numeric && "table-cell-numeric",
    pinned && `table-cell-pinned-${pinned}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const cellStyle: React.CSSProperties = {
    ...style,
    position: pinned ? "sticky" : undefined,
    left: pinned === "left" ? 0 : undefined,
    right: pinned === "right" ? 0 : undefined,
    zIndex: pinned ? 5 : undefined,
    backgroundColor: pinned ? "var(--color-background)" : undefined,
  };

  return (
    <td className={cellClasses} style={cellStyle} {...props}>
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
    /**
     * Enable column resizing
     */
    resizable?: boolean;
    /**
     * Initial column width
     */
    width?: number | string;
    /**
     * Minimum column width
     */
    minWidth?: number;
    /**
     * Maximum column width
     */
    maxWidth?: number;
    /**
     * Pin column to left or right
     */
    pinned?: "left" | "right";
    /**
     * Hide column
     */
    hidden?: boolean;
    /**
     * Callback when column is resized
     */
    onResize?: (width: number) => void;
    /**
     * Enable inline editing for this column
     */
    editable?: boolean;
    /**
     * Custom editor component
     */
    editor?: (value: T[keyof T], row: T, onChange: (value: T[keyof T]) => void) => React.ReactNode;
  }>;
  sortBy?: keyof T;
  sortDirection?: "asc" | "desc";
  onSort?: (key: keyof T) => void;
  onRowClick?: (row: T) => void;
  selectedRows?: T[];
  onRowSelect?: (row: T, selected: boolean) => void;
  onSelectAll?: (selected: boolean) => void;
  selectable?: boolean;
  /**
   * Enable column visibility toggle
   */
  showColumnToggle?: boolean;
  /**
   * Group rows by column key
   */
  groupBy?: keyof T;
  /**
   * Group render function
   */
  renderGroup?: (groupKey: T[keyof T], rows: T[]) => React.ReactNode;
  /**
   * Enable inline editing
   */
  editable?: boolean;
  /**
   * Callback when cell is edited
   */
  onCellEdit?: (row: T, columnKey: keyof T, newValue: T[keyof T]) => void;
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
export const DataTable = React.memo(function DataTable<
  T extends Record<string, unknown> = Record<string, unknown>,
>({
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
  showColumnToggle: _showColumnToggle = false,
  groupBy,
  renderGroup,
  editable = false,
  onCellEdit,
  className = "",
  ...props
}: DataTableProps<T>) {
  const [columnWidths, setColumnWidths] = useState<Record<string, number | string>>({});
  const [visibleColumns, _setVisibleColumns] = useState<Set<keyof T>>(
    new Set(columns.filter((col) => !col.hidden).map((col) => col.key)),
  );
  const [editingCell, setEditingCell] = useState<{ rowIndex: number; columnKey: keyof T } | null>(
    null,
  );
  const [editedData, setEditedData] = useState<T[]>(data);

  useEffect(() => {
    setEditedData(data);
  }, [data]);

  const visibleColumnsList = useMemo(() => {
    return columns.filter((col) => visibleColumns.has(col.key));
  }, [columns, visibleColumns]);

  // Group data if groupBy is specified
  const groupedData = useMemo(() => {
    if (!groupBy) return { groups: [{ key: null, rows: data }] };

    const groups = new Map<T[keyof T], T[]>();
    data.forEach((row) => {
      const key = row[groupBy];
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      const group = groups.get(key);
      if (group) {
        group.push(row);
      }
    });

    return {
      groups: Array.from(groups.entries()).map(([key, rows]) => ({ key, rows })),
    };
  }, [data, groupBy]);

  const handleColumnResize = useCallback(
    (key: keyof T, width: number) => {
      setColumnWidths((prev) => ({ ...prev, [String(key)]: width }));
      const column = columns.find((col) => col.key === key);
      column?.onResize?.(width);
    },
    [columns],
  );

  const handleCellEdit = useCallback(
    (row: T, columnKey: keyof T, newValue: T[keyof T]) => {
      const updatedData = editedData.map((r) => (r === row ? { ...r, [columnKey]: newValue } : r));
      setEditedData(updatedData);
      onCellEdit?.(row, columnKey, newValue);
      setEditingCell(null);
    },
    [editedData, onCellEdit],
  );

  const handleCellDoubleClick = useCallback(
    (rowIndex: number, columnKey: keyof T) => {
      if (editable || columns.find((col) => col.key === columnKey)?.editable) {
        setEditingCell({ rowIndex, columnKey });
      }
    },
    [editable, columns],
  );
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
          {visibleColumnsList.map((column) => (
            <TableHeaderCell
              key={String(column.key)}
              sortable={column.sortable}
              sortDirection={sortBy === column.key ? sortDirection : undefined}
              onSort={() => column.sortable && handleSort(column.key)}
              resizable={column.resizable}
              width={columnWidths[String(column.key)] || column.width}
              minWidth={column.minWidth}
              maxWidth={column.maxWidth}
              pinned={column.pinned}
              onResize={(width) => handleColumnResize(column.key, width)}
            >
              {column.label}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {groupedData.groups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {groupBy && group.key !== null && (
              <TableRow className="table-group-header">
                <TableCell colSpan={visibleColumnsList.length + (selectable ? 1 : 0)}>
                  {renderGroup ? renderGroup(group.key, group.rows) : String(group.key)}
                </TableCell>
              </TableRow>
            )}
            {group.rows.map((row, rowIndex) => {
              const actualIndex = groupIndex * 1000 + rowIndex; // Unique index for editing
              const isEditing = editingCell?.rowIndex === actualIndex;

              return (
                <TableRow
                  key={actualIndex}
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
                  {visibleColumnsList.map((column) => {
                    const isCellEditing = isEditing && editingCell?.columnKey === column.key;
                    const isEditable = editable || column.editable;

                    return (
                      <TableCell
                        key={String(column.key)}
                        pinned={column.pinned}
                        onDoubleClick={() => handleCellDoubleClick(actualIndex, column.key)}
                        className={isCellEditing ? "table-cell-editing" : ""}
                      >
                        {isCellEditing && isEditable ? (
                          column.editor ? (
                            column.editor(row[column.key], row, (newValue) =>
                              handleCellEdit(row, column.key, newValue),
                            )
                          ) : (
                            <input
                              type="text"
                              defaultValue={String(row[column.key])}
                              onBlur={(e) => {
                                handleCellEdit(row, column.key, e.target.value as T[keyof T]);
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleCellEdit(
                                    row,
                                    column.key,
                                    (e.target as HTMLInputElement).value as T[keyof T],
                                  );
                                } else if (e.key === "Escape") {
                                  setEditingCell(null);
                                }
                              }}
                              className="table-cell-input"
                            />
                          )
                        ) : column.render ? (
                          column.render(row[column.key], row)
                        ) : (
                          String(row[column.key])
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
}) as <T extends Record<string, unknown> = Record<string, unknown>>(
  props: DataTableProps<T>,
) => React.ReactElement;
