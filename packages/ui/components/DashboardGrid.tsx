import React, { useState, useCallback } from "react";
import { DragAndDrop, DragAndDropItem } from "./DragAndDrop";

export interface DashboardGridItem {
  /**
   * Item ID
   */
  id: string;
  /**
   * Item content
   */
  content: React.ReactNode;
  /**
   * Grid column span
   */
  colSpan?: number;
  /**
   * Grid row span
   */
  rowSpan?: number;
  /**
   * Minimum column span
   */
  minColSpan?: number;
  /**
   * Maximum column span
   */
  maxColSpan?: number;
}

export interface DashboardGridProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrop"> {
  /**
   * Grid items
   */
  items: DashboardGridItem[];
  /**
   * Number of columns
   */
  columns?: number;
  /**
   * Gap between items
   */
  gap?: number;
  /**
   * Callback when items are reordered
   */
  onReorder?: (items: DashboardGridItem[]) => void;
  /**
   * Enable drag and drop
   */
  draggable?: boolean;
}

/**
 * Dashboard Grid component - Drag-and-drop grid layout system
 *
 * @example
 * ```tsx
 * <DashboardGrid
 *   items={widgets}
 *   columns={4}
 *   onReorder={setWidgets}
 *   draggable
 * />
 * ```
 */
export function DashboardGrid({
  items,
  columns = 4,
  gap = 16,
  onReorder,
  draggable = true,
  className = "",
  style,
  ...props
}: DashboardGridProps) {
  const [gridItems, setGridItems] = useState(items);

  const handleReorder = useCallback(
    (reorderedItems: DragAndDropItem[]) => {
      const newItems = reorderedItems.map((item) => {
        const originalItem = items.find((i) => i.id === item.id);
        return originalItem || { id: item.id, content: item.content };
      });
      setGridItems(newItems);
      onReorder?.(newItems);
    },
    [items, onReorder],
  );

  const gridClasses = ["dashboard-grid", className].filter(Boolean).join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  } as React.CSSProperties;

  if (draggable) {
    const dragItems: DragAndDropItem[] = gridItems.map((item) => ({
      id: item.id,
      content: (
        <div
          className="dashboard-grid-item"
          style={{
            gridColumn: `span ${item.colSpan || 1}`,
            gridRow: `span ${item.rowSpan || 1}`,
          }}
        >
          {item.content}
        </div>
      ),
      data: item,
    }));

    return (
      <DragAndDrop
        items={dragItems}
        onReorder={handleReorder}
        orientation="vertical"
        className={gridClasses}
        style={customStyle}
        {...props}
      />
    );
  }

  return (
    <div className={gridClasses} style={customStyle} {...props}>
      {gridItems.map((item) => (
        <div
          key={item.id}
          className="dashboard-grid-item"
          style={{
            gridColumn: `span ${item.colSpan || 1}`,
            gridRow: `span ${item.rowSpan || 1}`,
          }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}

export default DashboardGrid;
