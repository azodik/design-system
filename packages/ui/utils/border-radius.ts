/**
 * Border Radius utilities - Consistent radius scale
 */

export type RadiusScale = "none" | "sm" | "md" | "lg" | "xl" | "full";

export interface RadiusConfig {
  /**
   * Base radius unit (px)
   */
  baseUnit?: number;
  /**
   * Scale multiplier
   */
  scale?: number;
}

const DEFAULT_BASE_UNIT = 4;
const DEFAULT_SCALE = 1.5;

const RADIUS_MAP: Record<RadiusScale, number> = {
  none: 0,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  full: 9999,
};

/**
 * Get border radius value from scale
 */
export function getRadius(scale: RadiusScale, config: RadiusConfig = {}): string {
  const { baseUnit = DEFAULT_BASE_UNIT, scale: scaleMultiplier = DEFAULT_SCALE } = config;

  if (scale === "none") return "0";
  if (scale === "full") return "9999px";

  const scaleValue = RADIUS_MAP[scale];
  const value = baseUnit * Math.pow(scaleMultiplier, scaleValue - 1);
  return `${value}px`;
}

/**
 * Get radius CSS variable
 */
export function getRadiusVar(scale: RadiusScale): string {
  return `var(--radius-${scale})`;
}

/**
 * Generate radius scale CSS variables
 */
export function generateRadiusScale(config: RadiusConfig = {}): string {
  const scales: RadiusScale[] = ["none", "sm", "md", "lg", "xl", "full"];
  const variables = scales.map((scale) => {
    const value = getRadius(scale, config);
    return `  --radius-${scale}: ${value};`;
  });

  return `:root {\n${variables.join("\n")}\n}`;
}

/**
 * Get radius styles
 */
export function getRadiusStyles(scale: RadiusScale, config?: RadiusConfig): React.CSSProperties {
  return {
    borderRadius: getRadius(scale, config),
  };
}
