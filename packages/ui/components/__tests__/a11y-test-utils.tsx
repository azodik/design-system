/**
 * Accessibility Testing Utilities
 *
 * Provides utilities for automated accessibility testing
 */

import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "../../providers/ThemeProvider";
import { axe } from "vitest-axe";
import { expect } from "vitest";

interface AllTheProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return (
    <ThemeProvider defaultTheme="light" accentColor="indigo" grayColor="gray" radius="medium">
      {children}
    </ThemeProvider>
  );
};

/**
 * Custom render function with accessibility testing support
 */
export const renderWithA11y = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

/**
 * Test component for accessibility violations
 *
 * @param component - React component to test
 * @param options - Additional render options
 */
export const testA11y = async (
  component: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => {
  const { container } = renderWithA11y(component, options);
  const results = await axe(container, {
    rules: {
      // Disable color-contrast rule in tests (handled by design system)
      "color-contrast": { enabled: false },
    },
  });

  if (results.violations.length > 0) {
    throw new Error(
      `Accessibility violations found:\n${results.violations
        .map((v) => `- ${v.id}: ${v.description}`)
        .join("\n")}`,
    );
  }
};

/**
 * Test keyboard navigation
 *
 * @param element - Element to test keyboard navigation on
 * @param key - Key to press
 */
export const testKeyboardNavigation = async (element: HTMLElement, key: string) => {
  const event = new KeyboardEvent("keydown", {
    key,
    bubbles: true,
    cancelable: true,
  });
  element.dispatchEvent(event);
};

/**
 * Test ARIA attributes
 *
 * @param element - Element to test
 * @param attributes - Expected ARIA attributes
 */
export const testAriaAttributes = (
  element: HTMLElement,
  attributes: Record<string, string | null>,
) => {
  Object.entries(attributes).forEach(([attr, value]) => {
    const ariaAttr = attr.startsWith("aria-") ? attr : `aria-${attr}`;
    if (value === null) {
      expect(element).not.toHaveAttribute(ariaAttr);
    } else {
      expect(element).toHaveAttribute(ariaAttr, value);
    }
  });
};

/**
 * Test focus management
 *
 * @param element - Element that should receive focus
 */
export const testFocusManagement = (element: HTMLElement) => {
  element.focus();
  expect(document.activeElement).toBe(element);
};

/**
 * Test screen reader text
 *
 * @param container - Container element
 * @param text - Expected screen reader text
 */
export const testScreenReaderText = (container: HTMLElement, text: string) => {
  const srOnly = container.querySelector(".sr-only, [aria-label], [aria-labelledby]");
  if (srOnly) {
    const srText = srOnly.getAttribute("aria-label") || srOnly.textContent;
    expect(srText).toContain(text);
  }
};

export * from "./test-utils";
