/**
 * Responsive spacing utilities - Dynamic spacing based on viewport
 */

export interface ResponsiveSpacingConfig {
  /**
   * Minimum spacing value (px)
   */
  min: number;
  /**
   * Maximum spacing value (px)
   */
  max: number;
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
 * Generate fluid spacing CSS using clamp()
 */
export function fluidSpacing(config: ResponsiveSpacingConfig): string {
  const { min, max, minViewport = 320, maxViewport = 1920 } = config;

  const minRem = min / 16;
  const maxRem = max / 16;
  const minViewportRem = minViewport / 16;
  const maxViewportRem = maxViewport / 16;

  // Calculate preferred value (rem)
  const preferredValue = ((maxRem - minRem) / (maxViewportRem - minViewportRem)) * 100;

  return `clamp(${minRem}rem, ${preferredValue}vw + ${minRem - (preferredValue * minViewportRem) / 100}rem, ${maxRem}rem)`;
}

/**
 * Generate responsive spacing styles
 */
export function getResponsiveSpacing(config: ResponsiveSpacingConfig): React.CSSProperties {
  return {
    padding: fluidSpacing(config),
  };
}

/**
 * Generate responsive margin styles
 */
export function getResponsiveMargin(config: ResponsiveSpacingConfig): React.CSSProperties {
  return {
    margin: fluidSpacing(config),
  };
}

/**
 * Generate responsive gap styles
 */
export function getResponsiveGap(config: ResponsiveSpacingConfig): React.CSSProperties {
  return {
    gap: fluidSpacing(config),
  };
}
