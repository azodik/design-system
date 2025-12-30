#!/usr/bin/env node

/**
 * Loads npm token from .npmrc.local and exports it as NPM_TOKEN
 * This is used by publish scripts to authenticate with npm
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const npmrcLocalPath = path.join(rootDir, ".npmrc.local");

function loadToken() {
  // First check environment variable
  if (process.env.NPM_TOKEN) {
    return process.env.NPM_TOKEN;
  }

  // Then check .npmrc.local file
  if (fs.existsSync(npmrcLocalPath)) {
    const content = fs.readFileSync(npmrcLocalPath, "utf-8");
    const match = content.match(/\/\/registry\.npmjs\.org\/:_authToken=(.+)/);
    if (match && match[1]) {
      return match[1].trim();
    }
  }

  return null;
}

const token = loadToken();

if (token) {
  // Export token as environment variable for child processes
  process.env.NPM_TOKEN = token;
  console.log("✅ NPM token loaded");
} else {
  console.error("❌ NPM token not found!");
  console.error("\nPlease set up authentication:");
  console.error("  1. Run: pnpm run setup:auth");
  console.error("  2. Or create .npmrc.local with: //registry.npmjs.org/:_authToken=YOUR_TOKEN");
  console.error("  3. Or set NPM_TOKEN environment variable\n");
  process.exit(1);
}

