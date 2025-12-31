"use client";
import React from "react";
import { resolveResponsiveVars, ResponsiveProp } from "../utils/responsive";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: ResponsiveProp<"row" | "column" | "row-reverse" | "column-reverse">;
  align?: ResponsiveProp<"start" | "center" | "end" | "baseline" | "stretch">;
  justify?: ResponsiveProp<"start" | "center" | "end" | "between" | "around" | "evenly">;
  wrap?: ResponsiveProp<"nowrap" | "wrap" | "wrap-reverse">;
  gap?: ResponsiveProp<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | string>;
  as?: React.ElementType;
}

export function Flex({
  children,
  className = "",
  direction,
  align,
  justify,
  wrap,
  gap,
  as: Component = "div",
  style,
  ...props
}: FlexProps) {
  const alignMap: Record<string, string> = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    baseline: "baseline",
    stretch: "stretch",
  };

  const justifyMap: Record<string, string> = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };

  const resolveAlign = (val: string | number) => alignMap[String(val)] || String(val);
  const resolveJustify = (val: string | number) => justifyMap[String(val)] || String(val);
  const resolveGap = (val: string | number) => `var(--space-${val}, ${val})`;

  const responsiveVars = {
    ...resolveResponsiveVars(direction, "flex-direction"),
    ...resolveResponsiveVars(align, "flex-align", resolveAlign),
    ...resolveResponsiveVars(justify, "flex-justify", resolveJustify),
    ...resolveResponsiveVars(wrap, "flex-wrap"),
    ...resolveResponsiveVars(gap, "flex-gap", resolveGap),
  };

  // For non-responsive fallback, use direct values
  const defaultDirection = typeof direction === "object" ? direction.base : direction;
  const defaultAlign = typeof align === "object" ? align.base : align;
  const defaultJustify = typeof justify === "object" ? justify.base : justify;
  const defaultWrap = typeof wrap === "object" ? wrap.base : wrap;
  const defaultGap = typeof gap === "object" ? gap.base : gap;

  const customStyle: React.CSSProperties = {
    flexDirection: defaultDirection,
    alignItems: defaultAlign ? alignMap[defaultAlign] : undefined,
    justifyContent: defaultJustify ? justifyMap[defaultJustify] : undefined,
    flexWrap: defaultWrap,
    gap: defaultGap ? `var(--space-${defaultGap}, ${defaultGap})` : undefined,
    ...style,
    ...responsiveVars,
  };

  return (
    <Component className={`az-Flex ${className}`} style={customStyle} {...props}>
      {children}
    </Component>
  );
}
