import React from "react";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | string;
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
  const alignMap = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    baseline: "baseline",
    stretch: "stretch",
  };

  const justifyMap = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };

  const customStyle: React.CSSProperties = {
    flexDirection: direction,
    alignItems: align ? alignMap[align] : undefined,
    justifyContent: justify ? justifyMap[justify] : undefined,
    flexWrap: wrap,
    gap: gap ? `var(--space-${gap}, ${gap})` : undefined,
    ...style,
  };

  return (
    <Component className={`az-Flex ${className}`} style={customStyle} {...props}>
      {children}
    </Component>
  );
}
