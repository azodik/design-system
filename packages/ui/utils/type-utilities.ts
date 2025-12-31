/**
 * Type Utilities - Helper types for common patterns
 */

/**
 * Make specific properties optional
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Make specific properties required
 */
export type Required<T, K extends keyof T> = T & { [P in K]-?: T[P] };

/**
 * Extract component props type
 */
export type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

/**
 * Extract function return type
 */
export type ReturnType<T> = T extends (...args: unknown[]) => infer R ? R : never;

/**
 * Extract function parameters
 */
export type Parameters<T> = T extends (...args: infer P) => unknown ? P : never;

/**
 * Deep partial type
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Deep required type
 */
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

/**
 * Non-nullable type
 */
export type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * Array element type
 */
export type ArrayElement<T> = T extends (infer U)[] ? U : never;

/**
 * Object values type
 */
export type ObjectValues<T> = T[keyof T];

/**
 * Object keys type
 */
export type ObjectKeys<T> = keyof T;

/**
 * Merge two types
 */
export type Merge<T, U> = Omit<T, keyof U> & U;

/**
 * Pick by value type
 */
export type PickByValue<T, V> = Pick<T, { [K in keyof T]: T[K] extends V ? K : never }[keyof T]>;

/**
 * Omit by value type
 */
export type OmitByValue<T, V> = Omit<T, { [K in keyof T]: T[K] extends V ? K : never }[keyof T]>;
