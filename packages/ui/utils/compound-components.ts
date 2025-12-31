/**
 * Compound Components utilities - Better component composition
 */

import React, { createContext, useContext } from "react";

/**
 * Create compound component context
 */
export function createCompoundContext<T>() {
  const Context = createContext<T | undefined>(undefined);

  const useCompoundContext = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error("Compound component must be used within its parent");
    }
    return context;
  };

  return { Context, useCompoundContext };
}

/**
 * Create compound component
 */
export function createCompoundComponent<TContext, TProps extends Record<string, unknown>>(
  contextValue: TContext,
  Component: React.ComponentType<TProps>,
): {
  Root: React.ComponentType<TProps>;
  useContext: () => TContext;
} {
  const { Context, useCompoundContext } = createCompoundContext<TContext>();

  const Root: React.ComponentType<TProps> = (props: TProps) => {
    return React.createElement(
      Context.Provider,
      { value: contextValue },
      React.createElement(Component, props),
    );
  };

  return {
    Root,
    useContext: useCompoundContext,
  };
}

/**
 * Create sub-component
 */
export function createSubComponent<TContext, TProps extends Record<string, unknown>>(
  useContextHook: () => TContext,
  Component: React.ComponentType<TProps & { context: TContext }>,
): React.ComponentType<TProps> {
  const SubComponent: React.ComponentType<TProps> = (props: TProps) => {
    const context = useContextHook();
    return React.createElement(Component, { ...props, context });
  };
  return SubComponent;
}
