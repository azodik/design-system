import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import path from "path";
import { cloudflare } from "@cloudflare/vite-plugin";
import { watchWorkspacePackages } from "./vite-plugin-watch-workspace";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        compact: false,
      },
    }),
    mdx({
      jsxImportSource: "react",
    }),
    cloudflare(),
    watchWorkspacePackages(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: path.resolve(__dirname, "./public"),
  server: {
    port: 3000,
    // Allow Vite to access files outside the project root (for workspace packages)
    fs: {
      allow: [".."],
    },
    watch: {
      // Explicitly watch workspace package dist folders for changes
      ignored: ["!**/packages/ui/dist/**", "!**/packages/icons/dist/**", "!**/packages/core/**"],
    },
    hmr: {
      overlay: true,
    },
  },
  optimizeDeps: {
    include: ["@mdx-js/react"],
    // Don't pre-bundle workspace packages in dev to allow hot reload
    exclude: ["@azodik/ui", "@azodik/icons"],
  },
  build: {
    copyPublicDir: true,
  },
});
