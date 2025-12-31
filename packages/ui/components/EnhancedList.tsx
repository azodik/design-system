import React from "react";
import WindowedList from "./WindowedList";

export interface ListItem {
  /**
   * Item ID
   */
  id: string;
  /**
   * Item content
   */
  content: React.ReactNode;
  /**
   * Item data
   */
  data?: unknown;
}

export interface EnhancedListProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * List items
   */
  items: ListItem[];
  /**
   * Render function for each item
   */
  renderItem?: (item: ListItem, index: number) => React.ReactNode;
  /**
   * Item height (fixed) or function to calculate height
   */
  itemHeight?: number | ((item: ListItem, index: number) => number);
  /**
   * Container height
   */
  height?: number;
  /**
   * Enable virtualization
   */
  virtualized?: boolean;
  /**
   * Overscan (number of items to render outside viewport)
   */
  overscan?: number;
  /**
   * Empty state message
   */
  emptyMessage?: string;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Loading component
   */
  loadingComponent?: React.ReactNode;
}

/**
 * Enhanced List component with virtualization
 *
 * @example
 * ```tsx
 * <EnhancedList
 *   items={listItems}
 *   virtualized
 *   height={400}
 *   itemHeight={50}
 * />
 * ```
 */
export function EnhancedList({
  items,
  renderItem,
  itemHeight = 50,
  height = 400,
  virtualized = false,
  overscan = 3,
  emptyMessage = "No items",
  loading = false,
  loadingComponent,
  className = "",
  ...props
}: EnhancedListProps) {
  const defaultRenderItem = (item: ListItem) => item.content;

  const itemRenderer = renderItem || defaultRenderItem;

  const enhancedListClasses = ["enhanced-list", className].filter(Boolean).join(" ");

  if (loading) {
    return (
      <div className={enhancedListClasses} {...props}>
        {loadingComponent || <div className="enhanced-list-loading">Loading...</div>}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className={enhancedListClasses} {...props}>
        <div className="enhanced-list-empty">{emptyMessage}</div>
      </div>
    );
  }

  if (virtualized && height) {
    return (
      <WindowedList
        items={items}
        renderItem={itemRenderer}
        itemHeight={itemHeight}
        height={height}
        overscan={overscan}
        className={enhancedListClasses}
      />
    );
  }

  return (
    <div className={enhancedListClasses} {...props}>
      {items.map((item, index) => (
        <div key={item.id} className="enhanced-list-item">
          {itemRenderer(item, index)}
        </div>
      ))}
    </div>
  );
}

export default EnhancedList;
