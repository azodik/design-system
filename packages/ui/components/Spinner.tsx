import React from "react";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "1" | "2" | "3";
  color?: string;
}

export function Spinner({ size = "2", color, className = "", style, ...props }: SpinnerProps) {
  const customStyle: React.CSSProperties = {
    borderTopColor: color,
    ...style,
  };

  return (
    <span
      className={`az-Spinner az-size-${size} ${className}`}
      style={customStyle}
      role="status"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </span>
  );
}
