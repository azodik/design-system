/**
 * Render Props utilities - Flexible rendering patterns
 */

import React from "react";

/**
 * Render prop function type
 */
export type RenderProp<T = Record<string, unknown>> = (props: T) => React.ReactNode;

/**
 * Children as render prop
 */
export type ChildrenAsRenderProp<T = Record<string, unknown>> = React.ReactNode | RenderProp<T>;

/**
 * Check if children is a render prop
 */
export function isRenderProp<T>(children: ChildrenAsRenderProp<T>): children is RenderProp<T> {
  return typeof children === "function";
}

/**
 * Render children (supports both ReactNode and render prop)
 */
export function renderChildren<T>(children: ChildrenAsRenderProp<T>, props: T): React.ReactNode {
  if (isRenderProp(children)) {
    return children(props);
  }
  return children;
}

/**
 * Create render prop component type
 */
export interface RenderPropComponentProps<T = Record<string, unknown>> {
  children?: RenderProp<T>;
  render?: RenderProp<T>;
}

/**
 * Get render function from props
 */
export function getRenderFunction<T>(
  props: RenderPropComponentProps<T>,
): RenderProp<T> | undefined {
  return props.render || (typeof props.children === "function" ? props.children : undefined);
}
