import React from "react";
import { resolveResponsiveVars, ResponsiveProp } from "../utils/responsive";

export interface GridProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "align"> {
  columns?: ResponsiveProp<"1" | "2" | "3" | "4" | "5" | "6" | "12" | string>;
  rows?: ResponsiveProp<string>;
  gap?: ResponsiveProp<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | string>;
  align?: ResponsiveProp<"start" | "center" | "end" | "baseline" | "stretch">;
  justify?: ResponsiveProp<"start" | "center" | "end" | "between" | "around" | "evenly">;
  as?: React.ElementType;
}

export function Grid({
  children,
  className = "",
  columns,
  rows,
  gap,
  align,
  justify,
  as: Component = "div",
  style,
  ...props
}: GridProps) {
  const alignMap: Record<string, string> = {
    start: "start",
    center: "center",
    end: "end",
    baseline: "baseline",
    stretch: "stretch",
  };

  const justifyMap: Record<string, string> = {
    start: "start",
    center: "center",
    end: "end",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };

  const resolveAlign = (val: string | number) => alignMap[val] || String(val);
  const resolveJustify = (val: string | number) => justifyMap[val] || String(val);
  const resolveGap = (val: string | number) => `var(--space-${val}, ${val})`;
  const resolveColumns = (val: string | number) =>
    isNaN(Number(val)) ? String(val) : `repeat(${val}, 1fr)`;

  const responsiveVars = {
    ...resolveResponsiveVars(columns, "grid-cols", resolveColumns),
    ...resolveResponsiveVars(rows, "grid-rows"),
    ...resolveResponsiveVars(gap, "grid-gap", resolveGap),
    ...resolveResponsiveVars(align, "grid-align", resolveAlign),
    ...resolveResponsiveVars(justify, "grid-justify", resolveJustify),
  };

  return (
    <Component
      className={`az-Grid ${className}`}
      style={{ ...style, ...responsiveVars }}
      {...props}
    >
      {children}
    </Component>
  );
}
