import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uiPackagePath = path.resolve(__dirname, "../../packages/ui/package.json");
const versionPath = path.resolve(__dirname, "../src/utils/version.ts");

const uiPackageJson = JSON.parse(fs.readFileSync(uiPackagePath, "utf-8"));
const uiVersion = uiPackageJson.version;

const versionFileContent = `/**
 * Version management for docs
 * Ensures docs stay compatible with the UI package version
 * 
 * This file is auto-generated. Do not edit manually.
 * The UI version is read from @azodik/ui package.json during build.
 */

// UI version - should match @azodik/ui package version
export const UI_VERSION = "${uiVersion}";

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
`;

fs.writeFileSync(versionPath, versionFileContent, "utf-8");
console.log(`✓ Updated version.ts with UI version: ${uiVersion}`);

