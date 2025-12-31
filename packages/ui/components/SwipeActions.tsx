import React, { useState, useRef, useCallback, useEffect } from "react";

export interface SwipeAction {
  /**
   * Action label
   */
  label: string;
  /**
   * Action icon
   */
  icon?: React.ReactNode;
  /**
   * Action color
   */
  color?: "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
  /**
   * Action handler
   */
  onClick: () => void;
}

export interface SwipeActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Child content (the swipeable item)
   */
  children: React.ReactNode;
  /**
   * Left swipe actions
   */
  leftActions?: SwipeAction[];
  /**
   * Right swipe actions
   */
  rightActions?: SwipeAction[];
  /**
   * Threshold for swipe to trigger (default: 100px)
   */
  threshold?: number;
  /**
   * Disable swipe actions
   */
  disabled?: boolean;
}

/**
 * SwipeActions - Swipeable list items for mobile (delete, archive, etc.)
 *
 * @example
 * ```tsx
 * <SwipeActions
 *   rightActions={[
 *     { label: "Delete", color: "ruby", onClick: handleDelete },
 *     { label: "Archive", color: "amber", onClick: handleArchive }
 *   ]}
 * >
 *   <div>List item content</div>
 * </SwipeActions>
 * ```
 */
export function SwipeActions({
  children,
  leftActions = [],
  rightActions = [],
  threshold = 100,
  disabled = false,
  className = "",
  ...props
}: SwipeActionsProps) {
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  const maxTranslate = useRef(0);
  const minTranslate = useRef(0);

  // Calculate max translate based on actions
  useEffect(() => {
    if (actionsRef.current) {
      const width = actionsRef.current.offsetWidth;
      if (leftActions.length > 0) {
        minTranslate.current = -width;
      }
      if (rightActions.length > 0) {
        maxTranslate.current = width;
      }
    }
  }, [leftActions.length, rightActions.length]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (disabled) return;
      setIsDragging(true);
      setStartX(e.touches[0].clientX);
    },
    [disabled],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || disabled) return;
      const newX = e.touches[0].clientX;
      const deltaX = newX - startX;
      const newTranslate = translateX + deltaX;

      // Clamp translate value
      const clamped = Math.max(minTranslate.current, Math.min(maxTranslate.current, newTranslate));
      setTranslateX(clamped);
      setStartX(newX);
    },
    [isDragging, disabled, startX, translateX],
  );

  const handleTouchEnd = useCallback(() => {
    if (disabled) return;
    setIsDragging(false);

    // Determine which actions to show
    const targetTranslate =
      translateX < -threshold && leftActions.length > 0
        ? minTranslate.current
        : translateX > threshold && rightActions.length > 0
          ? maxTranslate.current
          : 0;

    setTranslateX(targetTranslate);
  }, [disabled, translateX, threshold, leftActions.length, rightActions.length]);

  const handleActionClick = useCallback((action: SwipeAction) => {
    action.onClick();
    // Reset position after action
    setTranslateX(0);
  }, []);

  const actions = translateX < 0 ? leftActions : rightActions;
  const actionsWidth = Math.abs(translateX);

  return (
    <div ref={containerRef} className={`swipe-actions-container ${className}`} {...props}>
      {/* Actions background */}
      {(leftActions.length > 0 || rightActions.length > 0) && (
        <div
          ref={actionsRef}
          className={`swipe-actions ${translateX < 0 ? "swipe-actions-left" : "swipe-actions-right"}`}
          style={{
            width: `${Math.min(actionsWidth, Math.max(...[leftActions.length, rightActions.length].map(() => 200)))}px`,
          }}
        >
          {actions.map((action, index) => (
            <button
              key={index}
              className={`swipe-action swipe-action-${action.color || "indigo"}`}
              onClick={() => handleActionClick(action)}
            >
              {action.icon && <span className="swipe-action-icon">{action.icon}</span>}
              <span className="swipe-action-label">{action.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div
        ref={contentRef}
        className="swipe-actions-content"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isDragging ? "none" : "transform 0.3s ease-out",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
    </div>
  );
}

export default SwipeActions;
