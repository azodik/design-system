"use client";
import React, { useState, useCallback } from "react";
import Input from "./Input";
import { Select } from "./Select";
import Button from "./Button";
import { Popover } from "./Popover";

export type FilterOperator =
  | "equals"
  | "notEquals"
  | "contains"
  | "startsWith"
  | "endsWith"
  | "greaterThan"
  | "lessThan"
  | "greaterThanOrEqual"
  | "lessThanOrEqual";

export interface TableFilter {
  /**
   * Column key to filter
   */
  columnKey: string;
  /**
   * Filter operator
   */
  operator: FilterOperator;
  /**
   * Filter value
   */
  value: string | number;
}

export interface TableFiltersProps<T extends Record<string, unknown> = Record<string, unknown>> {
  /**
   * Column definitions
   */
  columns: Array<{ key: keyof T; label: string; type?: "string" | "number" | "date" }>;
  /**
   * Current filters
   */
  filters?: TableFilter[];
  /**
   * Callback when filters change
   */
  onFiltersChange?: (filters: TableFilter[]) => void;
  /**
   * Trigger button
   */
  trigger?: React.ReactNode;
}

const OPERATORS: Array<{ value: FilterOperator; label: string }> = [
  { value: "equals", label: "Equals" },
  { value: "notEquals", label: "Not equals" },
  { value: "contains", label: "Contains" },
  { value: "startsWith", label: "Starts with" },
  { value: "endsWith", label: "Ends with" },
  { value: "greaterThan", label: "Greater than" },
  { value: "lessThan", label: "Less than" },
  { value: "greaterThanOrEqual", label: "Greater than or equal" },
  { value: "lessThanOrEqual", label: "Less than or equal" },
];

/**
 * Advanced Table Filters component with multi-column filtering
 *
 * @example
 * ```tsx
 * <TableFilters
 *   columns={columns}
 *   filters={filters}
 *   onFiltersChange={setFilters}
 * />
 * ```
 */
export function TableFilters<T extends Record<string, unknown> = Record<string, unknown>>({
  columns,
  filters: controlledFilters,
  onFiltersChange,
  trigger,
}: TableFiltersProps<T>) {
  const [internalFilters, setInternalFilters] = useState<TableFilter[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const filters = controlledFilters !== undefined ? controlledFilters : internalFilters;

  const addFilter = useCallback(() => {
    const newFilter: TableFilter = {
      columnKey: columns[0]?.key as string,
      operator: "equals",
      value: "",
    };
    const newFilters = [...filters, newFilter];
    if (controlledFilters === undefined) {
      setInternalFilters(newFilters);
    }
    onFiltersChange?.(newFilters);
  }, [filters, columns, controlledFilters, onFiltersChange]);

  const updateFilter = useCallback(
    (index: number, updates: Partial<TableFilter>) => {
      const newFilters = filters.map((filter, i) =>
        i === index ? { ...filter, ...updates } : filter,
      );
      if (controlledFilters === undefined) {
        setInternalFilters(newFilters);
      }
      onFiltersChange?.(newFilters);
    },
    [filters, controlledFilters, onFiltersChange],
  );

  const removeFilter = useCallback(
    (index: number) => {
      const newFilters = filters.filter((_, i) => i !== index);
      if (controlledFilters === undefined) {
        setInternalFilters(newFilters);
      }
      onFiltersChange?.(newFilters);
    },
    [filters, controlledFilters, onFiltersChange],
  );

  const clearAll = useCallback(() => {
    if (controlledFilters === undefined) {
      setInternalFilters([]);
    }
    onFiltersChange?.([]);
  }, [controlledFilters, onFiltersChange]);

  const filterContent = (
    <div className="table-filters">
      <div className="table-filters-header">
        <h4>Filters</h4>
        <button type="button" className="table-filters-close" onClick={() => setIsOpen(false)}>
          ×
        </button>
      </div>
      <div className="table-filters-list">
        {filters.map((filter, index) => (
          <div key={index} className="table-filters-item">
            <Select
              options={columns.map((col) => ({
                value: String(col.key),
                label: col.label,
              }))}
              value={filter.columnKey}
              onChange={(value) => updateFilter(index, { columnKey: value })}
            />
            <Select
              options={OPERATORS}
              value={filter.operator}
              onChange={(value) => updateFilter(index, { operator: value as FilterOperator })}
            />
            <Input
              type={
                columns.find((c) => String(c.key) === filter.columnKey)?.type === "number"
                  ? "number"
                  : "text"
              }
              value={String(filter.value)}
              onChange={(e) => {
                const value =
                  columns.find((c) => String(c.key) === filter.columnKey)?.type === "number"
                    ? parseFloat(e.target.value) || 0
                    : e.target.value;
                updateFilter(index, { value });
              }}
              placeholder="Value"
            />
            <Button variant="ghost" onClick={() => removeFilter(index)}>
              ×
            </Button>
          </div>
        ))}
      </div>
      <div className="table-filters-actions">
        <Button variant="outline" onClick={addFilter}>
          Add Filter
        </Button>
        {filters.length > 0 && (
          <Button variant="ghost" onClick={clearAll}>
            Clear All
          </Button>
        )}
      </div>
    </div>
  );

  const defaultTrigger = (
    <Button variant="outline">Filters {filters.length > 0 && `(${filters.length})`}</Button>
  );

  return (
    <Popover
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      content={filterContent}
      position="bottom-start"
    >
      <div
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        role="button"
        tabIndex={0}
      >
        {trigger || defaultTrigger}
      </div>
    </Popover>
  );
}

export default TableFilters;
