#!/usr/bin/env node
/**
 * CLI Tool for creating theme configurations
 *
 * Usage: pnpm create-theme theme-name --colors indigo,blue --radius medium
 */

import { writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "../..");

interface ThemeOptions {
  name: string;
  colors?: string[];
  radius?: "none" | "small" | "medium" | "large" | "full";
  defaultTheme?: "light" | "dark";
}

function parseArgs(): ThemeOptions {
  const args = process.argv.slice(2);
  const name = args[0];

  if (!name) {
    console.error("Error: Theme name is required");
    console.log(
      "Usage: pnpm create-theme theme-name [--colors color1,color2] [--radius small|medium|large] [--default-theme light|dark]",
    );
    process.exit(1);
  }

  const options: ThemeOptions = {
    name,
    colors: ["indigo"],
    radius: "medium",
    defaultTheme: "light",
  };

  for (let i = 1; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--colors" && args[i + 1]) {
      const colorsValue = args[i + 1];
      if (colorsValue) {
        options.colors = colorsValue.split(",").map((c) => c.trim());
      }
      i++;
    } else if (arg === "--radius" && args[i + 1]) {
      const radiusValue = args[i + 1];
      if (radiusValue && ["none", "small", "medium", "large", "full"].includes(radiusValue)) {
        options.radius = radiusValue as ThemeOptions["radius"];
      }
      i++;
    } else if (arg === "--default-theme" && args[i + 1]) {
      const themeValue = args[i + 1];
      if (themeValue && ["light", "dark"].includes(themeValue)) {
        options.defaultTheme = themeValue as "light" | "dark";
      }
      i++;
    }
  }

  return options;
}

function generateThemeConfig(options: ThemeOptions): string {
  const { name, colors = ["indigo"], radius = "medium", defaultTheme = "light" } = options;

  return `import { ThemeProviderProps } from "@azodik/ui";

/**
 * ${name} Theme Configuration
 * 
 * Generated theme configuration for ${name}
 */
export const ${name}Theme: ThemeProviderProps = {
  defaultTheme: "${defaultTheme}",
  accentColor: "${colors[0]}",
  grayColor: "gray",
  radius: "${radius}",
};

/**
 * Usage:
 * 
 * \`\`\`tsx
 * import { ThemeProvider } from "@azodik/ui";
 * import { ${name}Theme } from "./themes/${name}";
 * 
 * <ThemeProvider {...${name}Theme}>
 *   <App />
 * </ThemeProvider>
 * \`\`\`
 */
`;
}

function createTheme(options: ThemeOptions): void {
  const { name } = options;
  const themesDir = join(rootDir, "themes");
  const themePath = join(themesDir, `${name}.ts`);

  // Check if theme already exists
  if (existsSync(themePath)) {
    console.error(`Error: Theme ${name} already exists at ${themePath}`);
    process.exit(1);
  }

  // Create themes directory if it doesn't exist
  try {
    if (!existsSync(themesDir)) {
      writeFileSync(join(themesDir, ".gitkeep"), "");
    }
  } catch {
    // Directory might already exist, that's fine
  }

  const config = generateThemeConfig(options);

  // Create theme file
  writeFileSync(themePath, config);
  console.log(`✅ Created theme: ${themePath}`);

  console.log(`\n🎉 Theme ${name} created successfully!`);
  console.log(`\nNext steps:`);
  console.log(`1. Import and use the theme in your app:`);
  console.log(`   import { ${name}Theme } from "./themes/${name}";`);
  console.log(`2. Apply the theme:`);
  console.log(`   <ThemeProvider {...${name}Theme}>`);
}

const options = parseArgs();
createTheme(options);
