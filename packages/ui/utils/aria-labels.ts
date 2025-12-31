/**
 * ARIA Labels utilities - Comprehensive ARIA support
 */

/**
 * Generate ARIA label for form field
 */
export function getFieldAriaLabel(label?: string, required?: boolean, error?: string): string {
  let ariaLabel = label || "";
  if (required) {
    ariaLabel += " (required)";
  }
  if (error) {
    ariaLabel += `, ${error}`;
  }
  return ariaLabel;
}

/**
 * Generate ARIA described by IDs
 */
export function getAriaDescribedBy(helpTextId?: string, errorId?: string): string | undefined {
  const ids: string[] = [];
  if (helpTextId) ids.push(helpTextId);
  if (errorId) ids.push(errorId);
  return ids.length > 0 ? ids.join(" ") : undefined;
}

/**
 * Generate ARIA live region attributes
 */
export function getAriaLiveAttributes(assertive = false): {
  "aria-live": "polite" | "assertive";
  "aria-atomic": boolean;
} {
  return {
    "aria-live": assertive ? "assertive" : "polite",
    "aria-atomic": true,
  };
}

/**
 * Generate ARIA expanded attributes
 */
export function getAriaExpandedAttributes(expanded: boolean): { "aria-expanded": boolean } {
  return {
    "aria-expanded": expanded,
  };
}

/**
 * Generate ARIA selected attributes
 */
export function getAriaSelectedAttributes(selected: boolean): { "aria-selected": boolean } {
  return {
    "aria-selected": selected,
  };
}

/**
 * Generate ARIA checked attributes
 */
export function getAriaCheckedAttributes(checked: boolean | "mixed"): {
  "aria-checked": boolean | "mixed";
} {
  return {
    "aria-checked": checked,
  };
}

/**
 * Generate ARIA disabled attributes
 */
export function getAriaDisabledAttributes(disabled: boolean): { "aria-disabled": boolean } {
  return {
    "aria-disabled": disabled,
  };
}

/**
 * Generate ARIA hidden attributes
 */
export function getAriaHiddenAttributes(hidden: boolean): { "aria-hidden": boolean } {
  return {
    "aria-hidden": hidden,
  };
}

/**
 * Generate ARIA label attributes
 */
export function getAriaLabelAttributes(label: string): { "aria-label": string } {
  return {
    "aria-label": label,
  };
}

/**
 * Generate ARIA labelled by attributes
 */
export function getAriaLabelledByAttributes(labelId: string): { "aria-labelledby": string } {
  return {
    "aria-labelledby": labelId,
  };
}
