/**
 * Theme Generator utilities - Generate themes from colors
 */

export interface ColorPalette {
  /**
   * Base color (hex)
   */
  base: string;
  /**
   * Light shades
   */
  light?: string[];
  /**
   * Dark shades
   */
  dark?: string[];
}

export interface ThemeColors {
  /**
   * Primary color
   */
  primary?: string;
  /**
   * Secondary color
   */
  secondary?: string;
  /**
   * Accent color
   */
  accent?: string;
  /**
   * Success color
   */
  success?: string;
  /**
   * Warning color
   */
  warning?: string;
  /**
   * Error color
   */
  error?: string;
  /**
   * Info color
   */
  info?: string;
  /**
   * Background color
   */
  background?: string;
  /**
   * Surface color
   */
  surface?: string;
  /**
   * Text color
   */
  text?: string;
  /**
   * Border color
   */
  border?: string;
}

/**
 * Convert hex to RGB
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Convert RGB to hex
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}

/**
 * Lighten color
 */
export function lightenColor(hex: string, percent: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const factor = percent / 100;
  const r = Math.round(rgb.r + (255 - rgb.r) * factor);
  const g = Math.round(rgb.g + (255 - rgb.g) * factor);
  const b = Math.round(rgb.b + (255 - rgb.b) * factor);

  return rgbToHex(r, g, b);
}

/**
 * Darken color
 */
export function darkenColor(hex: string, percent: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const factor = percent / 100;
  const r = Math.round(rgb.r * (1 - factor));
  const g = Math.round(rgb.g * (1 - factor));
  const b = Math.round(rgb.b * (1 - factor));

  return rgbToHex(r, g, b);
}

/**
 * Generate color palette from base color
 */
export function generateColorPalette(baseColor: string): ColorPalette {
  const light = [
    lightenColor(baseColor, 90),
    lightenColor(baseColor, 70),
    lightenColor(baseColor, 50),
    lightenColor(baseColor, 30),
    lightenColor(baseColor, 10),
  ];
  const dark = [
    darkenColor(baseColor, 10),
    darkenColor(baseColor, 30),
    darkenColor(baseColor, 50),
    darkenColor(baseColor, 70),
    darkenColor(baseColor, 90),
  ];

  return {
    base: baseColor,
    light,
    dark,
  };
}

/**
 * Generate theme CSS variables from colors
 */
export function generateThemeFromColors(colors: ThemeColors): string {
  const variables: string[] = [];

  if (colors.primary) {
    const palette = generateColorPalette(colors.primary);
    variables.push(`  --primary-9: ${palette.base};`);
    palette.light?.forEach((color, index) => {
      variables.push(`  --primary-${9 - (index + 1)}: ${color};`);
    });
    palette.dark?.forEach((color, index) => {
      variables.push(`  --primary-${9 + (index + 1)}: ${color};`);
    });
  }

  if (colors.accent) {
    variables.push(`  --accent-9: ${colors.accent};`);
  }

  if (colors.success) {
    variables.push(`  --success-9: ${colors.success};`);
  }

  if (colors.warning) {
    variables.push(`  --warning-9: ${colors.warning};`);
  }

  if (colors.error) {
    variables.push(`  --error-9: ${colors.error};`);
  }

  if (colors.background) {
    variables.push(`  --color-background: ${colors.background};`);
  }

  if (colors.surface) {
    variables.push(`  --color-surface: ${colors.surface};`);
  }

  if (colors.text) {
    variables.push(`  --color-text: ${colors.text};`);
  }

  if (colors.border) {
    variables.push(`  --color-border: ${colors.border};`);
  }

  return `:root {\n${variables.join("\n")}\n}`;
}

/**
 * Generate complete theme
 */
export function generateTheme(config: {
  colors: ThemeColors;
  spacing?: { baseUnit?: number; scale?: number };
  typography?: { baseSize?: number; scaleRatio?: number };
  shadows?: { color?: string; opacity?: number };
  radius?: { baseUnit?: number; scale?: number };
}): string {
  const themeParts: string[] = [];

  // Colors
  themeParts.push(generateThemeFromColors(config.colors));

  // Spacing
  if (config.spacing) {
    // Would need to import spacing utilities, but keeping it simple
    themeParts.push("/* Spacing scale */");
  }

  // Typography
  if (config.typography) {
    themeParts.push("/* Typography scale */");
  }

  // Shadows
  if (config.shadows) {
    themeParts.push("/* Shadow scale */");
  }

  // Radius
  if (config.radius) {
    themeParts.push("/* Radius scale */");
  }

  return themeParts.join("\n\n");
}
