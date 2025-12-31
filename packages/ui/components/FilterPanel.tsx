import React, { useState } from "react";
import Accordion, { AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion";
import Input from "./Input";
import { Select } from "./Select";
import { Checkbox } from "./Checkbox";
import { Radio } from "./Radio";
import { Slider } from "./Slider";
import Button from "./Button";

export interface FilterOption {
  /**
   * Option value
   */
  value: string;
  /**
   * Option label
   */
  label: string;
  /**
   * Option count (optional)
   */
  count?: number;
}

export interface Filter {
  /**
   * Filter ID
   */
  id: string;
  /**
   * Filter label
   */
  label: string;
  /**
   * Filter type
   */
  type: "text" | "select" | "multiselect" | "checkbox" | "radio" | "range" | "date";
  /**
   * Filter options (for select, multiselect, checkbox, radio)
   */
  options?: FilterOption[];
  /**
   * Filter value (controlled)
   */
  value?: string | string[] | number | [number, number];
  /**
   * Default filter value (uncontrolled)
   */
  defaultValue?: string | string[] | number | [number, number];
  /**
   * Callback when filter changes
   */
  onChange?: (value: string | string[] | number | [number, number]) => void;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Min value (for range)
   */
  min?: number;
  /**
   * Max value (for range)
   */
  max?: number;
}

export interface FilterPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Filters configuration
   */
  filters: Filter[];
  /**
   * Panel title
   */
  title?: string;
  /**
   * Collapsible panels
   */
  collapsible?: boolean;
  /**
   * Default expanded state
   */
  defaultExpanded?: boolean;
  /**
   * Show clear all button
   */
  showClearAll?: boolean;
  /**
   * Callback when clear all is clicked
   */
  onClearAll?: () => void;
  /**
   * Show apply button
   */
  showApply?: boolean;
  /**
   * Callback when apply is clicked
   */
  onApply?: () => void;
}

/**
 * Filter Panel component for collapsible filter sidebar
 *
 * @example
 * ```tsx
 * <FilterPanel
 *   filters={[
 *     { id: "search", label: "Search", type: "text" },
 *     { id: "category", label: "Category", type: "select", options: [...] },
 *   ]}
 *   title="Filters"
 *   collapsible
 * />
 * ```
 */
export function FilterPanel({
  filters,
  title = "Filters",
  collapsible = true,
  defaultExpanded = true,
  showClearAll = true,
  onClearAll,
  showApply = false,
  onApply,
  className = "",
  ...props
}: FilterPanelProps) {
  const [_expanded, _setExpanded] = useState(defaultExpanded);

  const renderFilter = (filter: Filter) => {
    switch (filter.type) {
      case "text": {
        return (
          <Input
            placeholder={filter.placeholder || "Search..."}
            value={filter.value as string}
            defaultValue={filter.defaultValue as string}
            onChange={(e) => filter.onChange?.(e.target.value)}
          />
        );
      }
      case "select": {
        return (
          <Select
            options={filter.options || []}
            value={(filter.value || filter.defaultValue) as string}
            onChange={(value) => filter.onChange?.(value)}
            placeholder={filter.placeholder || "Select..."}
          />
        );
      }
      case "multiselect": {
        const values = (filter.value || filter.defaultValue || []) as string[];
        return (
          <div className="filter-panel-multiselect">
            {(filter.options || []).map((option) => (
              <Checkbox
                key={option.value}
                checked={values.includes(option.value)}
                onChange={(checked) => {
                  const newValues = checked
                    ? [...values, option.value]
                    : values.filter((v) => v !== option.value);
                  filter.onChange?.(newValues);
                }}
              >
                {option.label}
                {option.count !== undefined && (
                  <span className="filter-panel-count">({option.count})</span>
                )}
              </Checkbox>
            ))}
          </div>
        );
      }
      case "checkbox": {
        return (
          <div className="filter-panel-checkbox">
            {(filter.options || []).map((option) => (
              <Checkbox
                key={option.value}
                checked={(filter.value as string[])?.includes(option.value)}
                onChange={(checked) => {
                  const currentValues = (filter.value || []) as string[];
                  const newValues = checked
                    ? [...currentValues, option.value]
                    : currentValues.filter((v) => v !== option.value);
                  filter.onChange?.(newValues);
                }}
              >
                {option.label}
                {option.count !== undefined && (
                  <span className="filter-panel-count">({option.count})</span>
                )}
              </Checkbox>
            ))}
          </div>
        );
      }
      case "radio": {
        return (
          <div className="filter-panel-radio">
            {(filter.options || []).map((option) => (
              <Radio
                key={option.value}
                name={filter.id}
                value={option.value}
                checked={(filter.value as string) === option.value}
                onChange={(e) => filter.onChange?.(e.target.value)}
              >
                {option.label}
                {option.count !== undefined && (
                  <span className="filter-panel-count">({option.count})</span>
                )}
              </Radio>
            ))}
          </div>
        );
      }
      case "range": {
        return (
          <Slider
            value={filter.value as number}
            defaultValue={filter.defaultValue as number}
            min={filter.min || 0}
            max={filter.max || 100}
            onChange={(value) => filter.onChange?.(value)}
            showValue
          />
        );
      }
      default:
        return null;
    }
  };

  const filterPanelClasses = ["filter-panel", className].filter(Boolean).join(" ");

  const content = (
    <div className="filter-panel-content">
      {filters.map((filter) => (
        <div key={filter.id} className="filter-panel-item">
          <label className="filter-panel-label">{filter.label}</label>
          {renderFilter(filter)}
        </div>
      ))}
      {(showClearAll || showApply) && (
        <div className="filter-panel-actions">
          {showClearAll && (
            <Button variant="outline" onClick={onClearAll}>
              Clear All
            </Button>
          )}
          {showApply && (
            <Button variant="solid" onClick={onApply}>
              Apply
            </Button>
          )}
        </div>
      )}
    </div>
  );

  if (collapsible) {
    return (
      <div className={filterPanelClasses} {...props}>
        <Accordion defaultValue={defaultExpanded ? "filters" : undefined} type="single" collapsible>
          <AccordionItem value="filters">
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }

  return (
    <div className={filterPanelClasses} {...props}>
      {title && <h3 className="filter-panel-title">{title}</h3>}
      {content}
    </div>
  );
}

export default FilterPanel;
