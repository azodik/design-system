#!/usr/bin/env node

/**
 * Setup script to configure npm authentication
 * This script helps you set up your npm token for publishing
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import readline from "readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const npmrcLocalPath = path.join(rootDir, ".npmrc.local");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function setupAuth() {
  console.log("🔐 NPM Authentication Setup\n");
  console.log("You can get your npm token from:");
  console.log("  https://www.npmjs.com/settings/YOUR_USERNAME/tokens\n");
  console.log("Or create a new token by running:");
  console.log("  npm token create\n");

  const token = await question("Enter your npm token (or press Enter to skip): ");

  if (!token || token.trim() === "") {
    console.log("\n⚠️  No token provided. Skipping setup.");
    console.log("\nYou can manually create .npmrc.local with:");
    console.log("  //registry.npmjs.org/:_authToken=YOUR_TOKEN_HERE\n");
    rl.close();
    return;
  }

  const content = `# NPM Authentication Token
# This file is gitignored and contains your personal npm token
# Generated on ${new Date().toISOString()}

//registry.npmjs.org/:_authToken=${token.trim()}
`;

  fs.writeFileSync(npmrcLocalPath, content, "utf-8");
  console.log("\n✅ NPM authentication configured!");
  console.log(`   Token saved to: .npmrc.local (gitignored)`);
  console.log("\n💡 You can now run 'pnpm run pub' without logging in!\n");
  rl.close();
}

setupAuth().catch((error) => {
  console.error("❌ Error setting up authentication:", error.message);
  process.exit(1);
});

