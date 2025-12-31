/**
 * Generic Components utilities - Better generic type support
 */

import React from "react";

/**
 * Extract props from component type
 */
export type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

/**
 * Extract element type from component
 */
export type ComponentElement<T> =
  T extends React.ComponentType<infer P>
    ? P extends React.HTMLAttributes<infer E>
      ? E
      : never
    : never;

/**
 * Make component props extendable
 */
export type ExtendableProps<T, E = Record<string, unknown>> = T & E;

/**
 * Polymorphic component props
 */
export type PolymorphicProps<As extends React.ElementType = "div"> = {
  as?: As;
} & React.ComponentPropsWithoutRef<As>;

/**
 * Note: Use React.forwardRef directly for better type inference
 * This utility provides type helpers for generic components
 */

/**
 * Create generic component type
 */
export type GenericComponent<T = Record<string, unknown>> = React.ComponentType<T>;

/**
 * Merge component props
 */
export type MergeComponentProps<T, U> = Omit<T, keyof U> & U;

/**
 * Make component props partial except required keys
 */
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;
