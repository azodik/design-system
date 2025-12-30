/**
 * Version management for docs
 * Ensures docs stay compatible with the UI package version
 * 
 * This file is auto-generated. Do not edit manually.
 * The UI version is read from @azodik/ui package.json during build.
 */

// UI version - should match @azodik/ui package version
export const UI_VERSION = "0.10.5";

/**
 * Check if current UI version matches expected version
 */
export function checkVersionCompatibility(expectedVersion?: string): boolean {
  if (!expectedVersion) return true;
  
  // Simple version check - can be enhanced for semver comparison
  return UI_VERSION === expectedVersion;
}

/**
 * Get version info for display
 */
export function getVersionInfo() {
  return {
    uiVersion: UI_VERSION,
    docsVersion: "0.1.0", // Docs version from docs/package.json
  };
}
