/**
 * CSS optimization utilities - Purge unused CSS
 */

/**
 * Get all CSS classes used in a component tree
 * This is a helper for CSS purging tools
 */
export function getUsedClasses(element: HTMLElement): Set<string> {
  const classes = new Set<string>();

  const traverse = (el: Element) => {
    if (el.classList) {
      el.classList.forEach((cls) => classes.add(cls));
    }

    for (const child of Array.from(el.children)) {
      traverse(child);
    }
  };

  traverse(element);
  return classes;
}

/**
 * Extract CSS variables from stylesheet
 */
export function extractCSSVariables(stylesheet: CSSStyleSheet): Record<string, string> {
  const variables: Record<string, string> = {};

  try {
    for (const rule of Array.from(stylesheet.cssRules)) {
      if (rule instanceof CSSStyleRule) {
        for (const declaration of Array.from(rule.style)) {
          if (declaration.startsWith("--")) {
            variables[declaration] = rule.style.getPropertyValue(declaration);
          }
        }
      }
    }
  } catch (e) {
    // Cross-origin stylesheets may throw
    console.warn("Could not access stylesheet:", e);
  }

  return variables;
}

/**
 * Check if CSS class is used
 */
export function isClassUsed(className: string, element: HTMLElement): boolean {
  const usedClasses = getUsedClasses(element);
  return usedClasses.has(className);
}
