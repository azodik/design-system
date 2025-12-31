/**
 * Focus Management utilities - Proper focus trapping and restoration
 */

/**
 * Trap focus within an element
 */
export function trapFocus(element: HTMLElement): () => void {
  const focusableElements = getFocusableElements(element);
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== "Tab") return;

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };

  element.addEventListener("keydown", handleTabKey);

  // Focus first element
  firstElement?.focus();

  return () => {
    element.removeEventListener("keydown", handleTabKey);
  };
}

/**
 * Get all focusable elements within a container
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const selector = [
    "a[href]",
    "button:not([disabled])",
    "textarea:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
  ].join(", ");

  return Array.from(container.querySelectorAll<HTMLElement>(selector)).filter((el) => {
    const style = window.getComputedStyle(el);
    return style.display !== "none" && style.visibility !== "hidden";
  });
}

/**
 * Restore focus to a previously focused element
 */
export function restoreFocus(element: HTMLElement | null): void {
  if (element && document.contains(element)) {
    element.focus();
  }
}

/**
 * Save current focus element
 */
export function saveFocus(): HTMLElement | null {
  return document.activeElement as HTMLElement;
}

/**
 * Focus first element in container
 */
export function focusFirst(container: HTMLElement): void {
  const focusableElements = getFocusableElements(container);
  focusableElements[0]?.focus();
}

/**
 * Focus last element in container
 */
export function focusLast(container: HTMLElement): void {
  const focusableElements = getFocusableElements(container);
  const lastElement = focusableElements[focusableElements.length - 1];
  lastElement?.focus();
}

/**
 * Focus next element
 */
export function focusNext(currentElement: HTMLElement): void {
  const allFocusable = getFocusableElements(document.body);
  const currentIndex = allFocusable.indexOf(currentElement);
  if (currentIndex < allFocusable.length - 1) {
    allFocusable[currentIndex + 1]?.focus();
  }
}

/**
 * Focus previous element
 */
export function focusPrevious(currentElement: HTMLElement): void {
  const allFocusable = getFocusableElements(document.body);
  const currentIndex = allFocusable.indexOf(currentElement);
  if (currentIndex > 0) {
    allFocusable[currentIndex - 1]?.focus();
  }
}
