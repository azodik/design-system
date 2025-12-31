"use client";
import React, { useState, useCallback, useRef } from "react";

export interface DragAndDropItem {
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

export interface DragAndDropProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrop"> {
  /**
   * Items to display
   */
  items: DragAndDropItem[];
  /**
   * Callback when items are reordered
   */
  onReorder?: (items: DragAndDropItem[]) => void;
  /**
   * Callback when item is dropped
   */
  onDrop?: (draggedItem: DragAndDropItem, targetItem: DragAndDropItem) => void;
  /**
   * Drag handle selector (default: entire item)
   */
  dragHandle?: string;
  /**
   * Orientation
   */
  orientation?: "vertical" | "horizontal";
  /**
   * Show drag handle
   */
  showDragHandle?: boolean;
}

/**
 * Drag and Drop component for reorderable lists/grids
 *
 * @example
 * ```tsx
 * <DragAndDrop
 *   items={items}
 *   onReorder={setItems}
 *   showDragHandle
 * />
 * ```
 */
export function DragAndDrop({
  items,
  onReorder,
  onDrop,
  dragHandle: _dragHandle,
  orientation = "vertical",
  showDragHandle = false,
  className = "",
  ...props
}: DragAndDropProps) {
  const [draggedItem, setDraggedItem] = useState<DragAndDropItem | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = useCallback(
    (e: React.DragEvent, item: DragAndDropItem, index: number) => {
      setDraggedItem(item);
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", String(index));
      if (e.dataTransfer.setDragImage) {
        const dragImage = document.createElement("div");
        dragImage.style.opacity = "0.5";
        dragImage.textContent = "Dragging...";
        document.body.appendChild(dragImage);
        e.dataTransfer.setDragImage(dragImage, 0, 0);
        setTimeout(() => document.body.removeChild(dragImage), 0);
      }
    },
    [],
  );

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverIndex(index);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragOverIndex(null);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, targetItem: DragAndDropItem, targetIndex: number) => {
      e.preventDefault();
      const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);

      if (draggedItem && draggedIndex !== targetIndex) {
        const newItems = [...items];
        const [removed] = newItems.splice(draggedIndex, 1);
        newItems.splice(targetIndex, 0, removed);

        onReorder?.(newItems);
        onDrop?.(draggedItem, targetItem);
      }

      setDraggedItem(null);
      setDragOverIndex(null);
    },
    [draggedItem, items, onReorder, onDrop],
  );

  const handleDragEnd = useCallback(() => {
    setDraggedItem(null);
    setDragOverIndex(null);
  }, []);

  const dragAndDropClasses = ["drag-and-drop", `drag-and-drop-${orientation}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={containerRef} className={dragAndDropClasses} {...props}>
      {items.map((item, index) => {
        const isDragging = draggedItem?.id === item.id;
        const isDragOver = dragOverIndex === index;

        const itemClasses = [
          "drag-and-drop-item",
          isDragging && "drag-and-drop-item-dragging",
          isDragOver && "drag-and-drop-item-drag-over",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div
            key={item.id}
            className={itemClasses}
            draggable
            role="button"
            tabIndex={0}
            aria-label={`Drag item ${index + 1}`}
            onDragStart={(e) => handleDragStart(e, item, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, item, index)}
            onDragEnd={handleDragEnd}
          >
            {showDragHandle && (
              <div className="drag-and-drop-handle" aria-label="Drag handle">
                ⋮⋮
              </div>
            )}
            <div className="drag-and-drop-content">{item.content}</div>
          </div>
        );
      })}
    </div>
  );
}

export default DragAndDrop;
