import React from "react";
import { fluidSpacing, ResponsiveSpacingConfig } from "../utils/responsive-spacing";

export interface ResponsiveSpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Spacing configuration
   */
  spacing: ResponsiveSpacingConfig;
  /**
   * Apply as padding
   */
  asPadding?: boolean;
  /**
   * Apply as margin
   */
  asMargin?: boolean;
  /**
   * Apply as gap
   */
  asGap?: boolean;
  /**
   * Children
   */
  children: React.ReactNode;
}

/**
 * Responsive Spacing component - Dynamic spacing based on viewport
 *
 * @example
 * ```tsx
 * <ResponsiveSpacing
 *   spacing={{ min: 16, max: 32 }}
 *   asPadding
 * >
 *   Content
 * </ResponsiveSpacing>
 * ```
 */
export function ResponsiveSpacing({
  spacing,
  asPadding = false,
  asMargin = false,
  asGap = false,
  children,
  className = "",
  style,
  ...props
}: ResponsiveSpacingProps) {
  const spacingValue = fluidSpacing(spacing);

  const customStyle: React.CSSProperties = {
    ...style,
    ...(asPadding && { padding: spacingValue }),
    ...(asMargin && { margin: spacingValue }),
    ...(asGap && { gap: spacingValue }),
  } as React.CSSProperties;

  const responsiveSpacingClasses = ["responsive-spacing", className].filter(Boolean).join(" ");

  return (
    <div className={responsiveSpacingClasses} style={customStyle} {...props}>
      {children}
    </div>
  );
}

export default ResponsiveSpacing;
