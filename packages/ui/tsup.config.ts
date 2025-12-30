import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: true, // Enable code splitting for better tree-shaking
  sourcemap: true,
  clean: true,
  treeshake: true, // Enable tree-shaking
  minify: false, // Let consumers minify if needed
  external: ["react", "react-dom", "azodik-ui-core", "@azodik/icons", "recharts", "minisearch"],
  esbuildOptions(options) {
    options.treeShaking = true;
    options.drop = ["console", "debugger"]; // Remove console/debugger in production
  },
});
