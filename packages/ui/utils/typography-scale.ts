/**
 * Typography Scale utilities - Comprehensive typography scale
 */

export type TypographyScale =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl";

export interface TypographyConfig {
  /**
   * Base font size (px)
   */
  baseSize?: number;
  /**
   * Scale ratio
   */
  scaleRatio?: number;
  /**
   * Base line height
   */
  baseLineHeight?: number;
}

const DEFAULT_BASE_SIZE = 16;
const DEFAULT_SCALE_RATIO = 1.25;
const DEFAULT_BASE_LINE_HEIGHT = 1.5;

const SCALE_MAP: Record<TypographyScale, number> = {
  xs: -2,
  sm: -1,
  base: 0,
  lg: 1,
  xl: 2,
  "2xl": 3,
  "3xl": 4,
  "4xl": 5,
  "5xl": 6,
  "6xl": 7,
};

/**
 * Get font size from scale
 */
export function getFontSize(scale: TypographyScale, config: TypographyConfig = {}): string {
  const { baseSize = DEFAULT_BASE_SIZE, scaleRatio = DEFAULT_SCALE_RATIO } = config;
  const scaleValue = SCALE_MAP[scale];
  const fontSize = baseSize * Math.pow(scaleRatio, scaleValue);
  return `${fontSize}px`;
}

/**
 * Get line height from scale
 */
export function getLineHeight(scale: TypographyScale, config: TypographyConfig = {}): string {
  const { baseLineHeight = DEFAULT_BASE_LINE_HEIGHT } = config;
  return String(baseLineHeight);
}

/**
 * Get typography CSS variable
 */
export function getTypographyVar(scale: TypographyScale, property: "size" | "lineHeight"): string {
  return `var(--font-${property}-${scale})`;
}

/**
 * Generate typography scale CSS variables
 */
export function generateTypographyScale(config: TypographyConfig = {}): string {
  const scales: TypographyScale[] = [
    "xs",
    "sm",
    "base",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
  ];
  const sizeVars = scales.map((scale) => {
    const value = getFontSize(scale, config);
    return `  --font-size-${scale}: ${value};`;
  });
  const lineHeightVars = scales.map((scale) => {
    const value = getLineHeight(scale, config);
    return `  --font-line-height-${scale}: ${value};`;
  });

  return `:root {\n${sizeVars.join("\n")}\n${lineHeightVars.join("\n")}\n}`;
}

/**
 * Get typography styles
 */
export function getTypographyStyles(
  scale: TypographyScale,
  config?: TypographyConfig,
): React.CSSProperties {
  return {
    fontSize: getFontSize(scale, config),
    lineHeight: getLineHeight(scale, config),
  };
}
