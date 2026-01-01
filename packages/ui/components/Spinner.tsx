import React from "react";
import { SemanticSize, getSizeClassName } from "../utils/size-variant-mapping";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: SemanticSize;
  color?: string;
}

export function Spinner({ size = "md", color, className = "", style, children, ...props }: SpinnerProps) {
  const customStyle: React.CSSProperties = {
    borderTopColor: color,
    ...style,
  };

  const sizeClassName = getSizeClassName(size);

  return (
    <span
      className={`az-Spinner ${sizeClassName} ${className}`}
      style={customStyle}
      role="status"
      aria-label="Loading"
      {...props}
    >
      {children || <span className="sr-only">Loading...</span>}
    </span>
  );
}
