/**
 * Focus Indicators utilities - Visible focus states
 */

/**
 * Apply visible focus styles to element
 */
export function applyFocusIndicator(element: HTMLElement): void {
  element.style.outline = "2px solid var(--accent-9, #f97316)";
  element.style.outlineOffset = "2px";
}

/**
 * Remove focus indicator from element
 */
export function removeFocusIndicator(element: HTMLElement): void {
  element.style.outline = "";
  element.style.outlineOffset = "";
}

/**
 * Check if element has visible focus
 */
export function hasVisibleFocus(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element);
  return style.outlineWidth !== "0px" && style.outlineWidth !== "";
}

/**
 * Ensure focus indicator is visible
 */
export function ensureFocusIndicator(element: HTMLElement): void {
  if (!hasVisibleFocus(element)) {
    applyFocusIndicator(element);
  }
}

/**
 * Get focus indicator styles
 */
export function getFocusIndicatorStyles(): React.CSSProperties {
  return {
    outline: "2px solid var(--accent-9, #f97316)",
    outlineOffset: "2px",
  };
}
