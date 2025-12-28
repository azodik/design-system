import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

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
 * Gets the version of a workspace package
 */
function getWorkspaceVersion(packageName) {
  const packages = ["packages/core", "packages/icons", "packages/ui"];
  
  for (const pkgDir of packages) {
    const packagePath = path.join(rootDir, pkgDir);
    const pkg = readPackageJson(packagePath);
    if (pkg.name === packageName) {
      return pkg.version;
    }
  }
  
  throw new Error(`Package ${packageName} not found in workspace`);
}

/**
 * Replaces workspace:* with actual versions in dependencies
 */
function replaceWorkspaceProtocols(packageJson) {
  const updated = { ...packageJson };
  let changed = false;

  if (updated.dependencies) {
    for (const [depName, depVersion] of Object.entries(updated.dependencies)) {
      if (depVersion === "workspace:*") {
        try {
          const actualVersion = getWorkspaceVersion(depName);
          updated.dependencies[depName] = `^${actualVersion}`;
          changed = true;
          console.log(
            `  ✓ Replaced ${depName}: workspace:* → ^${actualVersion}`
          );
        } catch (error) {
          console.warn(
            `  ⚠ Could not resolve version for ${depName}: ${error.message}`
          );
        }
      }
    }
  }

  return { updated, changed };
}

/**
 * Main function to prepare package for publishing
 */
function preparePackageForPublish(packagePath) {
  const packageJson = readPackageJson(packagePath);
  const packageName = packageJson.name;

  console.log(`\n📦 Preparing ${packageName} for publish...`);

  const { updated, changed } = replaceWorkspaceProtocols(
    packageJson,
    packagePath
  );

  if (changed) {
    // Save original for restoration
    const backupPath = path.join(packagePath, "package.json.backup");
    fs.writeFileSync(backupPath, JSON.stringify(packageJson, null, 2) + "\n");
    writePackageJson(packagePath, updated);
    console.log(`  ✓ Updated package.json (backup saved)`);
    return true;
  } else {
    console.log(`  ✓ No workspace protocols to replace`);
    return false;
  }
}

/**
 * Restores original package.json after publishing
 */
function restorePackageJson(packagePath) {
  const backupPath = path.join(packagePath, "package.json.backup");
  if (fs.existsSync(backupPath)) {
    const original = JSON.parse(fs.readFileSync(backupPath, "utf-8"));
    writePackageJson(packagePath, original);
    fs.unlinkSync(backupPath);
    console.log(`  ✓ Restored original package.json`);
  }
}

/**
 * Restores all packages in the workspace
 */
function restoreAllPackages() {
  const packages = ["packages/core", "packages/icons", "packages/ui"];
  console.log("\n🔄 Restoring all packages...");
  
  for (const pkgDir of packages) {
    const packagePath = path.join(rootDir, pkgDir);
    restorePackageJson(packagePath);
  }
  
  console.log("  ✓ All packages restored\n");
}

// CLI interface
const args = process.argv.slice(2);
const command = args[0];
const packageDir = args[1];

if (command === "prepare") {
  if (!packageDir) {
    console.error("Usage: node prepare-publish.mjs prepare <package-dir>");
    process.exit(1);
  }
  const packagePath = path.resolve(rootDir, packageDir);
  preparePackageForPublish(packagePath);
} else if (command === "restore") {
  if (packageDir === "all") {
    restoreAllPackages();
  } else if (!packageDir) {
    console.error("Usage: node prepare-publish.mjs restore <package-dir|all>");
    process.exit(1);
  } else {
    const packagePath = path.resolve(rootDir, packageDir);
    restorePackageJson(packagePath);
  }
} else {
  console.error(`Unknown command: ${command}`);
  console.error("Usage: node prepare-publish.mjs <prepare|restore> <package-dir|all>");
  process.exit(1);
}

