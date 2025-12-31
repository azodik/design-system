import React from "react";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Stack direction
   */
  direction?: "row" | "column";
  /**
   * Alignment along main axis
   */
  align?:
    | "start"
    | "center"
    | "end"
    | "stretch"
    | "space-between"
    | "space-around"
    | "space-evenly";
  /**
   * Alignment along cross axis
   */
  justify?: "start" | "center" | "end" | "stretch" | "baseline";
  /**
   * Gap between items
   */
  gap?: number | string;
  /**
   * Wrap items
   */
  wrap?: boolean;
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
  const stackClasses = [
    "stack",
    `stack-direction-${direction}`,
    `stack-align-${align}`,
    `stack-justify-${justify}`,
    wrap && "stack-wrap",
    fullWidth && "stack-full-width",
    fullHeight && "stack-full-height",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customStyle: React.CSSProperties = {
    ...style,
    gap: typeof gap === "number" ? `${gap}px` : gap,
  } as React.CSSProperties;

  return (
    <div className={stackClasses} style={customStyle} {...props}>
      {children}
    </div>
  );
}

export default Stack;
