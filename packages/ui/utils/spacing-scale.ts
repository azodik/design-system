/**
 * Spacing Scale utilities - Consistent spacing system
 */

export type SpacingScale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface SpacingConfig {
  /**
   * Base spacing unit (px)
   */
  baseUnit?: number;
  /**
   * Spacing scale multiplier
   */
  scale?: number;
}

const DEFAULT_BASE_UNIT = 4;
const DEFAULT_SCALE = 1.5;

/**
 * Get spacing value from scale
 */
export function getSpacing(scale: SpacingScale, config: SpacingConfig = {}): string {
  const { baseUnit = DEFAULT_BASE_UNIT, scale: scaleMultiplier = DEFAULT_SCALE } = config;

  if (scale === 0) return "0";

  const value = baseUnit * Math.pow(scaleMultiplier, scale - 1);
  return `${value}px`;
}

/**
 * Get spacing CSS variable
 */
export function getSpacingVar(scale: SpacingScale): string {
  return `var(--space-${scale})`;
}

/**
 * Generate spacing scale CSS variables
 */
export function generateSpacingScale(config: SpacingConfig = {}): string {
  const scales: SpacingScale[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const variables = scales.map((scale) => {
    const value = getSpacing(scale, config);
    return `  --space-${scale}: ${value};`;
  });

  return `:root {\n${variables.join("\n")}\n}`;
}

/**
 * Get margin utilities
 */
export function getMargin(scale: SpacingScale, config?: SpacingConfig): React.CSSProperties {
  return {
    margin: getSpacing(scale, config),
  };
}

/**
 * Get padding utilities
 */
export function getPadding(scale: SpacingScale, config?: SpacingConfig): React.CSSProperties {
  return {
    padding: getSpacing(scale, config),
  };
}

/**
 * Get gap utilities
 */
export function getGap(scale: SpacingScale, config?: SpacingConfig): React.CSSProperties {
  return {
    gap: getSpacing(scale, config),
  };
}
