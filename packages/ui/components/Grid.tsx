import React from "react";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: "1" | "2" | "3" | "4" | "5" | "6" | "12" | string;
  rows?: string;
  gap?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | string;
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
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
  const alignMap = {
    start: "start",
    center: "center",
    end: "end",
    baseline: "baseline",
    stretch: "stretch",
  };

  const justifyMap = {
    start: "start",
    center: "center",
    end: "end",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };

  const customStyle: React.CSSProperties = {
    gridTemplateColumns: columns
      ? isNaN(Number(columns))
        ? columns
        : `repeat(${columns}, 1fr)`
      : undefined,
    gridTemplateRows: rows,
    gap: gap ? `var(--space-${gap}, ${gap})` : undefined,
    alignItems: align ? alignMap[align] : undefined,
    justifyContent: justify ? justifyMap[justify] : undefined,
    ...style,
  };

  return (
    <Component className={`az-Grid ${className}`} style={customStyle} {...props}>
      {children}
    </Component>
  );
}
