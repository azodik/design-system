/**
 * Icon tree shaking utilities - Import only used icons
 */

/**
 * Icon registry for tree shaking
 * This helps track which icons are actually used
 */
export const iconRegistry = new Set<string>();

/**
 * Register an icon as used
 *
 * @example
 * ```tsx
 * registerIcon('arrow-right');
 * ```
 */
export function registerIcon(iconName: string): void {
  iconRegistry.add(iconName);
}

/**
 * Get all registered icons
 */
export function getRegisteredIcons(): string[] {
  return Array.from(iconRegistry);
}

/**
 * Clear icon registry
 */
export function clearIconRegistry(): void {
  iconRegistry.clear();
}

/**
 * Check if icon is registered
 */
export function isIconRegistered(iconName: string): boolean {
  return iconRegistry.has(iconName);
}
