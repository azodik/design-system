#!/usr/bin/env node
/**
 * CLI Tool for scaffolding a new Azodik UI app
 *
 * Usage: pnpm create-azodik-app my-app
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface AppOptions {
  name: string;
  template?: "react" | "next" | "vite";
}

function parseArgs(): AppOptions {
  const args = process.argv.slice(2);
  const name = args[0];

  if (!name) {
    console.error("Error: App name is required");
    console.log("Usage: pnpm create-azodik-app my-app [--template react|next|vite]");
    process.exit(1);
  }

  const options: AppOptions = {
    name,
    template: "vite",
  };

  for (let i = 1; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--template" && args[i + 1]) {
      const templateValue = args[i + 1];
      if (templateValue && ["react", "next", "vite"].includes(templateValue)) {
        options.template = templateValue as AppOptions["template"];
      }
      i++;
    }
  }

  return options;
}

function generatePackageJson(name: string, template: string): string {
  const scripts = {
    vite: {
      dev: "vite",
      build: "tsc && vite build",
      preview: "vite preview",
    },
    react: {
      start: "react-scripts start",
      build: "react-scripts build",
      test: "react-scripts test",
      eject: "react-scripts eject",
    },
    next: {
      dev: "next dev",
      build: "next build",
      start: "next start",
      lint: "next lint",
    },
  };

  const templateScripts = scripts[template as keyof typeof scripts] || scripts.vite;

  return JSON.stringify(
    {
      name,
      version: "0.1.0",
      private: true,
      type: "module",
      scripts: templateScripts,
      dependencies: {
        "@azodik/ui": "latest",
        react: "^19.2.3",
        "react-dom": "^19.2.3",
      },
      devDependencies: {
        "@types/react": "^19.2.7",
        "@types/react-dom": "^19.2.3",
        typescript: "^5.9.3",
        ...(template === "vite"
          ? {
              vite: "^7.3.0",
              "@vitejs/plugin-react": "^5.1.2",
            }
          : {}),
        ...(template === "next"
          ? {
              next: "^15.0.0",
              "@types/node": "^20.0.0",
            }
          : {}),
      },
    },
    null,
    2,
  );
}

function generateAppTsx(name: string, template: string): string {
  if (template === "next") {
    return `"use client";
import { ThemeProvider } from "@azodik/ui";
import { Button } from "@azodik/ui";
import "@azodik/ui/styles.css";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" accentColor="indigo" grayColor="gray" radius="medium">
      <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Welcome to ${name}</h1>
        <p>This is a Next.js app using Azodik UI.</p>
        <Button>Get Started</Button>
      </main>
    </ThemeProvider>
  );
}
`;
  }

  return `import { ThemeProvider } from "@azodik/ui";
import { Button } from "@azodik/ui";
import "@azodik/ui/styles.css";

function App() {
  return (
    <ThemeProvider defaultTheme="light" accentColor="indigo" grayColor="gray" radius="medium">
      <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Welcome to ${name}</h1>
        <p>This is a ${template === "vite" ? "Vite" : "React"} app using Azodik UI.</p>
        <Button>Get Started</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
`;
}

function generateMainTsx(template: string): string {
  if (template === "next") {
    return ""; // Next.js doesn't need main.tsx
  }

  return `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;
}

function generateIndexHtml(template: string): string {
  if (template === "next") {
    return ""; // Next.js doesn't need index.html
  }

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Azodik UI App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
}

function generateViteConfig(): string {
  return `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
`;
}

function generateTsConfig(template: string): string {
  if (template === "next") {
    return `{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
`;
  }

  return `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
`;
}

function generateReadme(name: string, template: string): string {
  return `# ${name}

This project was created with Azodik UI.

## Getting Started

\`\`\`bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
\`\`\`

## Template

This app uses the **${template}** template.

## Documentation

- [Azodik UI Documentation](https://github.com/azodik/design-system)
- [Component API Reference](https://github.com/azodik/design-system/blob/main/packages/ui/API_REFERENCE.md)

## Learn More

- [React Documentation](https://react.dev)
${template === "next" ? "- [Next.js Documentation](https://nextjs.org/docs)" : ""}
${template === "vite" ? "- [Vite Documentation](https://vitejs.dev)" : ""}
`;
}

function createApp(options: AppOptions): void {
  const { name, template = "vite" } = options;
  const appDir = join(process.cwd(), name);

  // Check if directory already exists
  if (existsSync(appDir)) {
    console.error(`Error: Directory ${name} already exists`);
    process.exit(1);
  }

  // Create app directory
  mkdirSync(appDir, { recursive: true });
  const srcDir = join(appDir, "src");
  mkdirSync(srcDir, { recursive: true });

  // Generate files
  writeFileSync(join(appDir, "package.json"), generatePackageJson(name, template));
  console.log(`✅ Created package.json`);

  writeFileSync(
    join(srcDir, template === "next" ? "page.tsx" : "App.tsx"),
    generateAppTsx(name, template),
  );
  console.log(`✅ Created App component`);

  if (template !== "next") {
    writeFileSync(join(srcDir, "main.tsx"), generateMainTsx(template));
    console.log(`✅ Created main.tsx`);

    writeFileSync(join(appDir, "index.html"), generateIndexHtml(template));
    console.log(`✅ Created index.html`);

    if (template === "vite") {
      writeFileSync(join(appDir, "vite.config.ts"), generateViteConfig());
      console.log(`✅ Created vite.config.ts`);
    }
  }

  writeFileSync(join(appDir, "tsconfig.json"), generateTsConfig(template));
  console.log(`✅ Created tsconfig.json`);

  writeFileSync(join(appDir, "README.md"), generateReadme(name, template));
  console.log(`✅ Created README.md`);

  console.log(`\n🎉 App ${name} created successfully!`);
  console.log(`\nNext steps:`);
  console.log(`1. cd ${name}`);
  console.log(`2. pnpm install`);
  console.log(`3. pnpm dev`);
  console.log(`\nHappy coding! 🚀`);
}

const options = parseArgs();
createApp(options);
