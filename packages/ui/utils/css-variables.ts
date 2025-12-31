/**
 * CSS Variables utilities - Enhanced CSS variable system
 */

export interface CSSVariable {
  /**
   * Variable name (without -- prefix)
   */
  name: string;
  /**
   * Variable value
   */
  value: string;
  /**
   * Variable description
   */
  description?: string;
}

/**
 * Set CSS variable on element
 */
export function setCSSVariable(element: HTMLElement, name: string, value: string): void {
  element.style.setProperty(`--${name}`, value);
}

/**
 * Get CSS variable value
 */
export function getCSSVariable(element: HTMLElement, name: string): string | null {
  return getComputedStyle(element).getPropertyValue(`--${name}`).trim();
}

/**
 * Remove CSS variable from element
 */
export function removeCSSVariable(element: HTMLElement, name: string): void {
  element.style.removeProperty(`--${name}`);
}

/**
 * Set multiple CSS variables at once
 */
export function setCSSVariables(element: HTMLElement, variables: Record<string, string>): void {
  Object.entries(variables).forEach(([name, value]) => {
    setCSSVariable(element, name, value);
  });
}

/**
 * Generate CSS variables string
 */
export function generateCSSVariables(variables: CSSVariable[]): string {
  const declarations = variables.map((variable) => {
    const comment = variable.description ? `  /* ${variable.description} */\n` : "";
    return `${comment}  --${variable.name}: ${variable.value};`;
  });

  return `:root {\n${declarations.join("\n")}\n}`;
}

/**
 * Get all CSS variables from element
 */
export function getAllCSSVariables(element: HTMLElement): Record<string, string> {
  const _computedStyle = getComputedStyle(element);
  const variables: Record<string, string> = {};

  // Get all CSS variables (properties starting with --)
  const styleSheet = Array.from(document.styleSheets);
  styleSheet.forEach((sheet) => {
    try {
      const rules = Array.from(sheet.cssRules || sheet.rules);
      rules.forEach((rule) => {
        if (rule instanceof CSSStyleRule) {
          const matches = rule.cssText.match(/--([\w-]+):\s*([^;]+)/g);
          if (matches) {
            matches.forEach((match) => {
              const [, name, value] = match.match(/--([\w-]+):\s*(.+)/) || [];
              if (name && value) {
                variables[name] = value.trim();
              }
            });
          }
        }
      });
    } catch {
      // Cross-origin stylesheets may throw
    }
  });

  return variables;
}

/**
 * Create CSS variable scope
 */
export function createCSSVariableScope(scope: string, variables: Record<string, string>): string {
  const declarations = Object.entries(variables).map(([name, value]) => `  --${name}: ${value};`);

  return `.${scope} {\n${declarations.join("\n")}\n}`;
}
