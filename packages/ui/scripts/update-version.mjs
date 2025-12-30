import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packagePath = path.resolve(__dirname, "../package.json");
const versionPath = path.resolve(__dirname, "../version.ts");

const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf-8"));
const version = packageJson.version;

const versionFileContent = `// This file is auto-generated. Do not edit manually.
// The version is read from package.json during build.
export const VERSION = "${version}";
`;

fs.writeFileSync(versionPath, versionFileContent, "utf-8");
console.log(`✓ Updated version.ts with version: ${version}`);

