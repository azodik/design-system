/**
 * Resolves a radius name to its corresponding CSS variable factor.
 * These factors are used to multiply the base radius in CSS:
 * calc(var(--base-radius) * var(--radius-factor))
 */
export function resolveRadiusFactor(radius: string | undefined): Record<string, string> | Record<string, never> {
  if (!radius) return {};

  const factorMap: Record<string, string> = {
    none: "0",
    small: "0.75",
    medium: "1",
    large: "1.5",
    full: "2",
  };

  const factor = factorMap[radius] || "1";
  return { "--radius-factor": factor };
}
