/**
 * Shadow System utilities - Elevation/shadow tokens
 */

export type ShadowScale = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "inner";

export interface ShadowConfig {
  /**
   * Shadow color
   */
  color?: string;
  /**
   * Shadow opacity
   */
  opacity?: number;
}

const _DEFAULT_COLOR = "rgba(0, 0, 0, 0.1)";

const SHADOW_MAP: Record<ShadowScale, string> = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
};

/**
 * Get shadow value from scale
 */
export function getShadow(scale: ShadowScale, _config: ShadowConfig = {}): string {
  return SHADOW_MAP[scale] || SHADOW_MAP.md;
}

/**
 * Get shadow CSS variable
 */
export function getShadowVar(scale: ShadowScale): string {
  return `var(--shadow-${scale})`;
}

/**
 * Generate shadow scale CSS variables
 */
export function generateShadowScale(config: ShadowConfig = {}): string {
  const scales: ShadowScale[] = ["none", "sm", "md", "lg", "xl", "2xl", "inner"];
  const variables = scales.map((scale) => {
    const value = getShadow(scale, config);
    return `  --shadow-${scale}: ${value};`;
  });

  return `:root {\n${variables.join("\n")}\n}`;
}

/**
 * Get shadow styles
 */
export function getShadowStyles(scale: ShadowScale, config?: ShadowConfig): React.CSSProperties {
  return {
    boxShadow: getShadow(scale, config),
  };
}
