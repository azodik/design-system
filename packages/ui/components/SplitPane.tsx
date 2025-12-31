"use client";
import React, { useState, useRef, useCallback } from "react";

export interface SplitPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * First pane content
   */
  left?: React.ReactNode;
  /**
   * Second pane content
   */
  right?: React.ReactNode;
  /**
   * Split direction
   */
  direction?: "horizontal" | "vertical";
  /**
   * Initial split position (0-100)
   */
  defaultSplit?: number;
  /**
   * Controlled split position
   */
  split?: number;
  /**
   * Callback when split changes
   */
  onSplitChange?: (split: number) => void;
  /**
   * Minimum size for first pane (%)
   */
  minSize?: number;
  /**
   * Maximum size for first pane (%)
   */
  maxSize?: number;
  /**
   * Show resize handle
   */
  showHandle?: boolean;
  /**
   * Resize handle size (px)
   */
  handleSize?: number;
}

/**
 * Split Pane component for resizable split panels
 *
 * @example
 * ```tsx
 * <SplitPane
 *   left={<div>Left Panel</div>}
 *   right={<div>Right Panel</div>}
 *   defaultSplit={50}
 *   minSize={20}
 *   maxSize={80}
 * />
 * ```
 */
export function SplitPane({
  left,
  right,
  direction = "horizontal",
  defaultSplit = 50,
  split: controlledSplit,
  onSplitChange,
  minSize = 0,
  maxSize = 100,
  showHandle = true,
  handleSize = 4,
  className = "",
  style,
  ...props
}: SplitPaneProps) {
  const [internalSplit, setInternalSplit] = useState(defaultSplit);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const split = controlledSplit !== undefined ? controlledSplit : internalSplit;
  const clampedSplit = Math.max(minSize, Math.min(maxSize, split));

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsResizing(true);

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        let newSplit: number;

        if (direction === "horizontal") {
          const x = moveEvent.clientX - rect.left;
          newSplit = (x / rect.width) * 100;
        } else {
          const y = moveEvent.clientY - rect.top;
          newSplit = (y / rect.height) * 100;
        }

        const clamped = Math.max(minSize, Math.min(maxSize, newSplit));
        if (controlledSplit === undefined) {
          setInternalSplit(clamped);
        }
        onSplitChange?.(clamped);
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [direction, minSize, maxSize, controlledSplit, onSplitChange],
  );

  const splitPaneClasses = [
    "split-pane",
    `split-pane-${direction}`,
    isResizing && "split-pane-resizing",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={containerRef} className={splitPaneClasses} style={style} {...props}>
      <div
        className="split-pane-left"
        style={{
          [direction === "horizontal" ? "width" : "height"]: `${clampedSplit}%`,
        }}
      >
        {left}
      </div>
      {showHandle && (
        <button
          type="button"
          className="split-pane-handle"
          aria-label={`Resize panes, current split: ${split}%`}
          onMouseDown={handleMouseDown}
          onKeyDown={(e) => {
            const step = 5;
            if (direction === "horizontal") {
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                onSplitChange?.(Math.max(0, split - step));
              } else if (e.key === "ArrowRight") {
                e.preventDefault();
                onSplitChange?.(Math.min(100, split + step));
              }
            } else {
              if (e.key === "ArrowUp") {
                e.preventDefault();
                onSplitChange?.(Math.max(0, split - step));
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                onSplitChange?.(Math.min(100, split + step));
              }
            }
          }}
          style={{
            [direction === "horizontal" ? "width" : "height"]: `${handleSize}px`,
          }}
        />
      )}
      <div
        className="split-pane-right"
        style={{
          [direction === "horizontal" ? "width" : "height"]: `${100 - clampedSplit}%`,
        }}
      >
        {right}
      </div>
    </div>
  );
}

export default SplitPane;
