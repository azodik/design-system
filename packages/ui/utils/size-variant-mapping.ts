/**
 * Size Variant System - Semantic sizes only
 * All components use semantic sizes: xs | sm | md | lg | xl
 */

export type SemanticSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Map semantic size to numeric for CSS classes
 */
export function mapSemanticToNumeric(size: SemanticSize): "1" | "2" | "3" | "4" | "5" {
  const mapping: Record<SemanticSize, "1" | "2" | "3" | "4" | "5"> = {
    xs: "1",
    sm: "2",
    md: "3",
    lg: "4",
    xl: "5",
  };
  return mapping[size];
}

/**
 * Get size class name from semantic size
 */
export function getSizeClassName(size: SemanticSize, prefix = "az-r-size"): string {
  const numericSize = mapSemanticToNumeric(size);
  return `${prefix}-${numericSize}`;
}
