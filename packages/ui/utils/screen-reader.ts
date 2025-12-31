/**
 * Screen Reader utilities - Enhanced screen reader support
 */

/**
 * Announce message to screen readers
 */
export function announceToScreenReader(
  message: string,
  priority: "polite" | "assertive" = "polite",
): void {
  if (typeof document === "undefined") return;

  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", priority);
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Create screen reader only element
 */
export function createScreenReaderOnly(text: string): HTMLElement {
  const element = document.createElement("span");
  element.className = "sr-only";
  element.textContent = text;
  return element;
}

/**
 * Get screen reader text class
 */
export function getScreenReaderOnlyClass(): string {
  return "sr-only";
}

/**
 * Check if screen reader is active (heuristic)
 */
export function isScreenReaderActive(): boolean {
  if (typeof window === "undefined") return false;

  // Check for common screen reader indicators
  const indicators = [
    window.navigator.userAgent.includes("NVDA"),
    window.navigator.userAgent.includes("JAWS"),
    window.navigator.userAgent.includes("VoiceOver"),
    document.querySelector('[role="application"]') !== null,
  ];

  return indicators.some((indicator) => indicator);
}
