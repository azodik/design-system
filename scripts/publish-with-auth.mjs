#!/usr/bin/env node

/**
 * Wrapper script that loads npm token and runs publish commands
 */

import { spawn } from "node:child_process";
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

if (!token) {
  console.error("❌ NPM token not found!");
  console.error("\nPlease set up authentication:");
  console.error("  1. Run: pnpm run setup:auth");
  console.error("  2. Or create .npmrc.local with: //registry.npmjs.org/:_authToken=YOUR_TOKEN");
  console.error("  3. Or set NPM_TOKEN environment variable\n");
  process.exit(1);
}

// Set token in environment for child processes
process.env.NPM_TOKEN = token;

// Get the command to run (everything after the script name)
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("❌ No command provided");
  process.exit(1);
}

// Run the command with the token in environment
const [command, ...commandArgs] = args;
const child = spawn(command, commandArgs, {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    NPM_TOKEN: token,
  },
});

child.on("exit", (code) => {
  process.exit(code || 0);
});

