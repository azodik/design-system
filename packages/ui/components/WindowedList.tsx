import React, { useRef, useEffect, useState, useMemo } from "react";

export interface WindowedListProps<T> {
  /**
   * Items to render
   */
  items: T[];
  /**
   * Render function for each item
   */
  renderItem: (item: T, index: number) => React.ReactNode;
  /**
   * Item height (fixed) or function to calculate height
   */
  itemHeight: number | ((item: T, index: number) => number);
  /**
   * Container height
   */
  height: number;
  /**
   * Overscan (number of items to render outside viewport)
   */
  overscan?: number;
  /**
   * Container className
   */
  className?: string;
}

/**
 * Windowed List component - Render only visible items
 *
 * @example
 * ```tsx
 * <WindowedList
 *   items={items}
 *   renderItem={(item) => <div>{item.name}</div>}
 *   itemHeight={50}
 *   height={400}
 * />
 * ```
 */
export function WindowedList<T>({
  items,
  renderItem,
  itemHeight,
  height,
  overscan = 3,
  className = "",
}: WindowedListProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const getItemHeight = useMemo(() => {
    if (typeof itemHeight === "number") {
      return () => itemHeight;
    }
    return itemHeight;
  }, [itemHeight]);

  const totalHeight = useMemo(() => {
    if (typeof itemHeight === "number") {
      return items.length * itemHeight;
    }
    return items.reduce((sum, item, index) => sum + getItemHeight(item, index), 0);
  }, [items, itemHeight, getItemHeight]);

  const visibleRange = useMemo(() => {
    let start = 0;
    let end = items.length;
    let currentTop = 0;

    for (let i = 0; i < items.length; i++) {
      const itemH = getItemHeight(items[i], i);
      if (currentTop + itemH < scrollTop) {
        start = i + 1;
      }
      if (currentTop > scrollTop + height) {
        end = i;
        break;
      }
      currentTop += itemH;
    }

    start = Math.max(0, start - overscan);
    end = Math.min(items.length, end + overscan);

    return { start, end };
  }, [items, scrollTop, height, overscan, getItemHeight]);

  const visibleItems = useMemo(() => {
    return items.slice(visibleRange.start, visibleRange.end);
  }, [items, visibleRange]);

  const offsetY = useMemo(() => {
    if (typeof itemHeight === "number") {
      return visibleRange.start * itemHeight;
    }
    let offset = 0;
    for (let i = 0; i < visibleRange.start; i++) {
      offset += getItemHeight(items[i], i);
    }
    return offset;
  }, [visibleRange.start, itemHeight, items, getItemHeight]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollTop(container.scrollTop);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const windowedListClasses = ["windowed-list", className].filter(Boolean).join(" ");

  return (
    <div
      ref={containerRef}
      className={windowedListClasses}
      style={{ height: `${height}px`, overflow: "auto" }}
    >
      <div style={{ height: `${totalHeight}px`, position: "relative" }}>
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          {visibleItems.map((item, index) => {
            const actualIndex = visibleRange.start + index;
            return (
              <div key={actualIndex} style={{ height: `${getItemHeight(item, actualIndex)}px` }}>
                {renderItem(item, actualIndex)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WindowedList;
