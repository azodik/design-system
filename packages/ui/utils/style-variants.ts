/**
 * Style Variants utilities - Outline, solid, ghost, etc.
 */

export type StyleVariant = "solid" | "outline" | "ghost" | "soft" | "link";

export interface StyleVariantConfig {
  /**
   * Base color
   */
  color: string;
  /**
   * Style variant
   */
  variant: StyleVariant;
  /**
   * Background opacity (for soft variant)
   */
  backgroundOpacity?: number;
}

/**
 * Get style variant classes
 */
export function getStyleVariantClasses(variant: StyleVariant): string {
  return `variant-${variant}`;
}

/**
 * Generate style variant styles
 */
export function generateStyleVariantStyles(config: StyleVariantConfig): React.CSSProperties {
  const { color, variant, backgroundOpacity = 0.1 } = config;

  switch (variant) {
    case "solid":
      return {
        backgroundColor: color,
        color: "#ffffff",
        border: "none",
      };
    case "outline":
      return {
        backgroundColor: "transparent",
        color: color,
        border: `1px solid ${color}`,
      };
    case "ghost":
      return {
        backgroundColor: "transparent",
        color: color,
        border: "none",
      };
    case "soft":
      return {
        backgroundColor: `${color}${Math.round(backgroundOpacity * 255)
          .toString(16)
          .padStart(2, "0")}`,
        color: color,
        border: "none",
      };
    case "link":
      return {
        backgroundColor: "transparent",
        color: color,
        border: "none",
        textDecoration: "underline",
      };
    default:
      return {};
  }
}

/**
 * Get all style variants
 */
export function getAllStyleVariants(): StyleVariant[] {
  return ["solid", "outline", "ghost", "soft", "link"];
}
