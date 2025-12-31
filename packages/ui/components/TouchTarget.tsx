import React from "react";

export interface TouchTargetProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Children to wrap
   */
  children: React.ReactNode;
  /**
   * Minimum touch target size (px)
   */
  minSize?: number;
  /**
   * Ensure minimum size even if content is smaller
   */
  enforceSize?: boolean;
}

/**
 * TouchTarget component - Ensures minimum 44x44px touch targets for accessibility
 *
 * @example
 * ```tsx
 * <TouchTarget minSize={44}>
 *   <IconButton icon={<Icon />} />
 * </TouchTarget>
 * ```
 */
export function TouchTarget({
  children,
  minSize = 44,
  enforceSize = true,
  className = "",
  style,
  ...props
}: TouchTargetProps) {
  const touchTargetClasses = ["touch-target", className].filter(Boolean).join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    minWidth: enforceSize ? `${minSize}px` : undefined,
    minHeight: enforceSize ? `${minSize}px` : undefined,
  } as React.CSSProperties;

  return (
    <div className={touchTargetClasses} style={customStyle} {...props}>
      {children}
    </div>
  );
}

export default TouchTarget;
