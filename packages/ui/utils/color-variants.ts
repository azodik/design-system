/**
 * Color Variants utilities - More color options
 */

export type ColorVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral";

export interface ColorVariantConfig {
  /**
   * Base color (hex)
   */
  baseColor: string;
  /**
   * Variant name
   */
  variant: ColorVariant;
  /**
   * Generate shades
   */
  generateShades?: boolean;
}

const COLOR_VARIANT_MAP: Record<ColorVariant, string> = {
  primary: "--accent-9",
  secondary: "--secondary-9",
  accent: "--accent-9",
  success: "--success-9",
  warning: "--warning-9",
  error: "--error-9",
  info: "--info-9",
  neutral: "--neutral-9",
};

/**
 * Get color variant CSS variable name
 */
export function getColorVariantVar(variant: ColorVariant): string {
  return COLOR_VARIANT_MAP[variant] || COLOR_VARIANT_MAP.primary;
}

/**
 * Generate color variant CSS
 */
export function generateColorVariantCSS(config: ColorVariantConfig): string {
  const { baseColor, variant, generateShades = true } = config;
  const variables: string[] = [];

  variables.push(`  ${getColorVariantVar(variant)}: ${baseColor};`);

  if (generateShades) {
    // Generate light shades
    for (let i = 1; i <= 4; i++) {
      const lightColor = lightenColor(baseColor, i * 20);
      const shadeIndex = 9 - i;
      const varName = getColorVariantVar(variant).replace("-9", `-${shadeIndex}`);
      variables.push(`  ${varName}: ${lightColor};`);
    }

    // Generate dark shades
    for (let i = 1; i <= 4; i++) {
      const darkColor = darkenColor(baseColor, i * 20);
      const shadeIndex = 9 + i;
      const varName = getColorVariantVar(variant).replace("-9", `-${shadeIndex}`);
      variables.push(`  ${varName}: ${darkColor};`);
    }
  }

  return `:root {\n${variables.join("\n")}\n}`;
}

/**
 * Lighten color helper
 */
function lightenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = (num >> 16) + Math.round((255 - (num >> 16)) * (percent / 100));
  const g = ((num >> 8) & 0x00ff) + Math.round((255 - ((num >> 8) & 0x00ff)) * (percent / 100));
  const b = (num & 0x0000ff) + Math.round((255 - (num & 0x0000ff)) * (percent / 100));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

/**
 * Darken color helper
 */
function darkenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.round((num >> 16) * (1 - percent / 100));
  const g = Math.round(((num >> 8) & 0x00ff) * (1 - percent / 100));
  const b = Math.round((num & 0x0000ff) * (1 - percent / 100));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
