import React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
  loading?: boolean;
}

export function Skeleton({
  variant = "text",
  width,
  height,
  loading = true,
  className = "",
  children,
  style,
  ...props
}: SkeletonProps) {
  if (!loading) return <>{children}</>;

  const customStyle: React.CSSProperties = {
    width,
    height,
    ...style,
  };

  return (
    <div
      className={`az-Skeleton az-variant-${variant} ${className}`}
      style={customStyle}
      aria-hidden="true"
      {...props}
    />
  );
}
