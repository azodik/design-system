export type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

export type ResponsiveProp<T> = T | Partial<Record<Breakpoint, T>>;

export function isResponsiveObject<T>(
  prop: ResponsiveProp<T> | undefined,
): prop is Partial<Record<Breakpoint, T>> {
  if (!prop || typeof prop !== "object") return false;
  return "base" in prop || "sm" in prop || "md" in prop || "lg" in prop || "xl" in prop;
}

export function resolveResponsiveVars<T extends string | number | boolean>(
  prop: ResponsiveProp<T> | undefined,
  variableName: string,
  transform?: (value: T) => string,
): React.CSSProperties {
  if (prop === undefined) return {};

  const vars: Record<string, string> = {};
  const normalize = (val: T) => (transform ? transform(val) : String(val));

  if (isResponsiveObject(prop)) {
    if (prop.base !== undefined) vars[`--${variableName}-base`] = normalize(prop.base);
    if (prop.sm !== undefined) vars[`--${variableName}-sm`] = normalize(prop.sm);
    if (prop.md !== undefined) vars[`--${variableName}-md`] = normalize(prop.md);
    if (prop.lg !== undefined) vars[`--${variableName}-lg`] = normalize(prop.lg);
    if (prop.xl !== undefined) vars[`--${variableName}-xl`] = normalize(prop.xl);
  } else {
    vars[`--${variableName}-base`] = normalize(prop);
  }

  return vars as React.CSSProperties;
}
