import React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
  loading?: boolean;
  /**
   * Enable shimmer animation effect (default: true)
   */
  shimmer?: boolean;
}

export function Skeleton({
  variant = "text",
  width,
  height,
  loading = true,
  shimmer = true,
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

  const skeletonClasses = [
    "az-Skeleton",
    `az-variant-${variant}`,
    shimmer && "az-skeleton-shimmer",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={skeletonClasses} style={customStyle} aria-hidden="true" {...props} />;
}
