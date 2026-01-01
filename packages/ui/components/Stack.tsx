"use client";
import React from "react";
import { resolveResponsiveVars, ResponsiveProp } from "../utils/responsive";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Stack direction
   */
  direction?: ResponsiveProp<"row" | "column">;
  /**
   * Alignment along main axis
   */
  align?: ResponsiveProp<
    "start" | "center" | "end" | "stretch" | "space-between" | "space-around" | "space-evenly"
  >;
  /**
   * Alignment along cross axis
   */
  justify?: ResponsiveProp<"start" | "center" | "end" | "stretch" | "baseline">;
  /**
   * Gap between items
   */
  gap?: ResponsiveProp<number | string>;
  /**
   * Wrap items
   */
  wrap?: ResponsiveProp<boolean>;
  /**
   * Full width
   */
  fullWidth?: boolean;
  /**
   * Full height
   */
  fullHeight?: boolean;
}

/**
 * Stack layout component for flexible layouts
 *
 * @example
 * ```tsx
 * <Stack direction="row" gap={16} align="center">
 *   <Button>Button 1</Button>
 *   <Button>Button 2</Button>
 * </Stack>
 * ```
 */
export function Stack({
  direction = "column",
  align = "stretch",
  justify = "start",
  gap = 0,
  wrap = false,
  fullWidth = false,
  fullHeight = false,
  className = "",
  style,
  children,
  ...props
}: StackProps) {
  // Resolve responsive values
  const resolveDirection = (val: string | number | boolean) => String(val);
  const resolveAlign = (val: string | number | boolean) => String(val);
  const resolveJustify = (val: string | number | boolean) => String(val);
  const resolveGap = (val: string | number | boolean) =>
    typeof val === "number" ? `${val}px` : String(val);
  const resolveWrap = (val: string | number | boolean) => (val ? "wrap" : "nowrap");

  const responsiveVars = {
    ...resolveResponsiveVars(direction, "stack-direction", resolveDirection),
    ...resolveResponsiveVars(align, "stack-align", resolveAlign),
    ...resolveResponsiveVars(justify, "stack-justify", resolveJustify),
    ...resolveResponsiveVars(gap, "stack-gap", resolveGap),
    ...resolveResponsiveVars(wrap, "stack-wrap", resolveWrap),
  };

  const stackClasses = [
    "stack",
    fullWidth && "stack-full-width",
    fullHeight && "stack-full-height",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    ...responsiveVars,
  } as React.CSSProperties;

  return (
    <div className={stackClasses} style={customStyle} {...props}>
      {children}
    </div>
  );
}

export default Stack;
