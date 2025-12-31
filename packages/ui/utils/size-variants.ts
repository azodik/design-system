/**
 * Size Variants utilities - xs, sm, md, lg, xl for all components
 */

export type SizeVariant = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface SizeConfig {
  /**
   * Base size (px)
   */
  baseSize?: number;
  /**
   * Scale multiplier
   */
  scale?: number;
}

const DEFAULT_BASE_SIZE = 16;
const DEFAULT_SCALE = 1.25;

const SIZE_MAP: Record<SizeVariant, number> = {
  xs: -2,
  sm: -1,
  md: 0,
  lg: 1,
  xl: 2,
  "2xl": 3,
};

/**
 * Get size value from variant
 */
export function getSize(variant: SizeVariant, config: SizeConfig = {}): string {
  const { baseSize = DEFAULT_BASE_SIZE, scale = DEFAULT_SCALE } = config;
  const scaleValue = SIZE_MAP[variant];
  const size = baseSize * Math.pow(scale, scaleValue);
  return `${size}px`;
}

/**
 * Get size CSS variable
 */
export function getSizeVar(variant: SizeVariant): string {
  return `var(--size-${variant})`;
}

/**
 * Generate size scale CSS variables
 */
export function generateSizeScale(config: SizeConfig = {}): string {
  const variants: SizeVariant[] = ["xs", "sm", "md", "lg", "xl", "2xl"];
  const variables = variants.map((variant) => {
    const value = getSize(variant, config);
    return `  --size-${variant}: ${value};`;
  });

  return `:root {\n${variables.join("\n")}\n}`;
}

/**
 * Get size styles
 */
export function getSizeStyles(variant: SizeVariant, config?: SizeConfig): React.CSSProperties {
  const size = getSize(variant, config);
  return {
    width: size,
    height: size,
  };
}

/**
 * Get font size from size variant
 */
export function getFontSizeFromVariant(variant: SizeVariant, config?: SizeConfig): string {
  return getSize(variant, config);
}

/**
 * Get padding from size variant
 */
export function getPaddingFromVariant(variant: SizeVariant, config?: SizeConfig): string {
  const { baseSize = DEFAULT_BASE_SIZE, scale = DEFAULT_SCALE } = config || {};
  const scaleValue = SIZE_MAP[variant];
  const padding = (baseSize * Math.pow(scale, scaleValue)) / 2;
  return `${padding}px`;
}
