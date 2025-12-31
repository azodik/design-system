import React from "react";
import Button from "./Button";

export type QuickFilterPeriod = "today" | "week" | "month" | "year" | "all";

export interface QuickFilter {
  key: QuickFilterPeriod;
  label: string;
}

export interface QuickFiltersProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Selected filter
   */
  value?: QuickFilterPeriod;
  /**
   * Filter change handler
   */
  onChange?: (period: QuickFilterPeriod) => void;
  /**
   * Custom filters
   */
  filters?: QuickFilter[];
  /**
   * Show "All" filter
   */
  showAll?: boolean;
  /**
   * Button variant
   */
  variant?: "solid" | "soft" | "outline" | "ghost";
  /**
   * Button size
   */
  size?: "1" | "2" | "3";
}

const DEFAULT_FILTERS: QuickFilter[] = [
  { key: "today", label: "Today" },
  { key: "week", label: "Week" },
  { key: "month", label: "Month" },
  { key: "year", label: "Year" },
];

/**
 * QuickFilters - Predefined filter buttons (Today, Week, Month, Year)
 *
 * @example
 * ```tsx
 * <QuickFilters
 *   value={selectedPeriod}
 *   onChange={setSelectedPeriod}
 * />
 * ```
 */
export function QuickFilters({
  value,
  onChange,
  filters = DEFAULT_FILTERS,
  showAll = false,
  variant = "outline",
  size = "2",
  className = "",
  ...props
}: QuickFiltersProps) {
  const allFilters = showAll
    ? [...filters, { key: "all" as QuickFilterPeriod, label: "All" }]
    : filters;

  return (
    <div className={`quick-filters ${className}`} {...props}>
      {allFilters.map((filter) => (
        <Button
          key={filter.key}
          variant={value === filter.key ? "solid" : variant}
          size={size}
          onClick={() => onChange?.(filter.key)}
          className={value === filter.key ? "quick-filter-active" : ""}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}

export default QuickFilters;
