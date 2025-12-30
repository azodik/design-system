import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

/**
 * Bumps the patch version of a semver string
 * @param {string} version - Semver version string (e.g., "0.10.0")
 * @returns {string} - Bumped patch version (e.g., "0.10.1")
 */
function bumpPatchVersion(version) {
  const parts = version.split(".");
  if (parts.length !== 3) {
    throw new Error(`Invalid version format: ${version}. Expected format: x.y.z`);
  }
  const patch = parseInt(parts[2], 10);
  if (isNaN(patch)) {
    throw new Error(`Invalid patch version: ${parts[2]}`);
  }
  return `${parts[0]}.${parts[1]}.${patch + 1}`;
}

/**
 * Reads package.json and returns its content
 */
function readPackageJson(packagePath) {
  const packageJsonPath = path.join(packagePath, "package.json");
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(`package.json not found at ${packageJsonPath}`);
  }
  return JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
}

/**
 * Writes package.json
 */
function writePackageJson(packagePath, content) {
  const packageJsonPath = path.join(packagePath, "package.json");
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(content, null, 2) + "\n",
    "utf-8"
  );
}

/**
 * Bumps patch version for all packages
 */
function bumpAllPackages() {
  const packages = [
    { dir: "packages/core", name: "azodik-ui-core" },
    { dir: "packages/icons", name: "@azodik/icons" },
    { dir: "packages/ui", name: "@azodik/ui" },
  ];

  console.log("🔄 Bumping patch versions for all packages...\n");

  // First, read all current versions to ensure they're in sync
  const versions = new Map();
  for (const pkg of packages) {
    const packagePath = path.join(rootDir, pkg.dir);
    const packageJson = readPackageJson(packagePath);
    versions.set(pkg.name, packageJson.version);
    console.log(`  Current ${pkg.name}: ${packageJson.version}`);
  }

  // Get the first version as the base (all should be the same due to fixed config)
  const baseVersion = Array.from(versions.values())[0];
  const newVersion = bumpPatchVersion(baseVersion);

  console.log(`\n  New version: ${newVersion}\n`);

  // Update all packages
  for (const pkg of packages) {
    const packagePath = path.join(rootDir, pkg.dir);
    const packageJson = readPackageJson(packagePath);
    const oldVersion = packageJson.version;
    packageJson.version = newVersion;
    writePackageJson(packagePath, packageJson);
    console.log(`  ✓ Updated ${pkg.name}: ${oldVersion} → ${newVersion}`);
  }

  console.log(`\n✅ All packages bumped to ${newVersion}\n`);
  return newVersion;
}

// Run the bump
try {
  bumpAllPackages();
} catch (error) {
  console.error("❌ Error bumping versions:", error.message);
  process.exit(1);
}

