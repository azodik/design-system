/**
 * Theme Variants utilities - Multiple built-in themes
 */

export type ThemeVariant = "light" | "dark" | "auto" | "high-contrast";

export interface ThemeVariantConfig {
  /**
   * Theme variant
   */
  variant: ThemeVariant;
  /**
   * Custom colors
   */
  colors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    background?: string;
    surface?: string;
    text?: string;
    border?: string;
  };
}

const THEME_VARIANTS: Record<ThemeVariant, Record<string, string>> = {
  light: {
    "--color-background": "#ffffff",
    "--color-surface": "#f5f5f5",
    "--color-text": "#1a1a1a",
    "--color-border": "#e5e5e5",
    "--accent-9": "#f97316",
  },
  dark: {
    "--color-background": "#1a1a1a",
    "--color-surface": "#2a2a2a",
    "--color-text": "#ffffff",
    "--color-border": "#3a3a3a",
    "--accent-9": "#f97316",
  },
  auto: {
    "--color-background": "var(--color-background-light, #ffffff)",
    "--color-surface": "var(--color-surface-light, #f5f5f5)",
    "--color-text": "var(--color-text-light, #1a1a1a)",
    "--color-border": "var(--color-border-light, #e5e5e5)",
  },
  "high-contrast": {
    "--color-background": "#ffffff",
    "--color-surface": "#ffffff",
    "--color-text": "#000000",
    "--color-border": "#000000",
    "--accent-9": "#0000ff",
  },
};

/**
 * Apply theme variant to element
 */
export function applyThemeVariant(element: HTMLElement, config: ThemeVariantConfig): void {
  const variant = THEME_VARIANTS[config.variant] || THEME_VARIANTS.light;
  const customColors = config.colors || {};

  // Apply base variant
  Object.entries(variant).forEach(([name, value]) => {
    element.style.setProperty(name, value);
  });

  // Apply custom colors
  if (customColors.primary) {
    element.style.setProperty("--accent-9", customColors.primary);
  }
  if (customColors.background) {
    element.style.setProperty("--color-background", customColors.background);
  }
  if (customColors.surface) {
    element.style.setProperty("--color-surface", customColors.surface);
  }
  if (customColors.text) {
    element.style.setProperty("--color-text", customColors.text);
  }
  if (customColors.border) {
    element.style.setProperty("--color-border", customColors.border);
  }

  // Set data attribute for CSS targeting
  element.setAttribute("data-theme", config.variant);
}

/**
 * Get theme variant CSS
 */
export function getThemeVariantCSS(config: ThemeVariantConfig): string {
  const variant = THEME_VARIANTS[config.variant] || THEME_VARIANTS.light;
  const customColors = config.colors || {};

  const variables: string[] = [];

  // Base variant
  Object.entries(variant).forEach(([name, value]) => {
    variables.push(`  ${name}: ${value};`);
  });

  // Custom colors
  if (customColors.primary) {
    variables.push(`  --accent-9: ${customColors.primary};`);
  }
  if (customColors.background) {
    variables.push(`  --color-background: ${customColors.background};`);
  }
  if (customColors.surface) {
    variables.push(`  --color-surface: ${customColors.surface};`);
  }
  if (customColors.text) {
    variables.push(`  --color-text: ${customColors.text};`);
  }
  if (customColors.border) {
    variables.push(`  --color-border: ${customColors.border};`);
  }

  return `[data-theme="${config.variant}"] {\n${variables.join("\n")}\n}`;
}

/**
 * Generate all theme variants CSS
 */
export function generateAllThemeVariants(): string {
  const variants: ThemeVariant[] = ["light", "dark", "auto", "high-contrast"];
  return variants.map((variant) => getThemeVariantCSS({ variant })).join("\n\n");
}
