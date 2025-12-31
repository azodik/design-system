/**
 * Responsive typography utilities using clamp()
 */

export interface ResponsiveTypographyConfig {
  /**
   * Minimum font size (px)
   */
  minSize: number;
  /**
   * Maximum font size (px)
   */
  maxSize: number;
  /**
   * Minimum viewport width (px)
   */
  minViewport?: number;
  /**
   * Maximum viewport width (px)
   */
  maxViewport?: number;
}

/**
 * Generate fluid typography CSS using clamp()
 */
export function fluidTypography(config: ResponsiveTypographyConfig): string {
  const { minSize, maxSize, minViewport = 320, maxViewport = 1920 } = config;

  const minSizeRem = minSize / 16;
  const maxSizeRem = maxSize / 16;
  const minViewportRem = minViewport / 16;
  const maxViewportRem = maxViewport / 16;

  // Calculate preferred value (rem)
  const preferredValue = ((maxSizeRem - minSizeRem) / (maxViewportRem - minViewportRem)) * 100;

  return `clamp(${minSizeRem}rem, ${preferredValue}vw + ${minSizeRem - (preferredValue * minViewportRem) / 100}rem, ${maxSizeRem}rem)`;
}

/**
 * Generate responsive font size styles
 */
export function getResponsiveFontSize(config: ResponsiveTypographyConfig): React.CSSProperties {
  return {
    fontSize: fluidTypography(config),
  };
}
