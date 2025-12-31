import React from "react";
import type { SemanticSize } from "../utils/size-variant-mapping";
import { mapSemanticToNumeric } from "../utils/size-variant-mapping";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: SemanticSize;
  as?: React.ElementType;
}

export function Section({
  children,
  className = "",
  size = "md",
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component
      className={`az-Section az-size-${mapSemanticToNumeric(size)} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
