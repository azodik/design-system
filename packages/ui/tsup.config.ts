import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  dts: !options.watch, // Only generate types in build mode, not in watch/dev mode
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: false,
  banner: {
    js: '"use client";',
  },
  external: ["react", "react-dom", "azodik-ui-core", "@azodik/icons", "recharts", "minisearch"],
  esbuildOptions(options) {
    options.treeShaking = true;
    options.drop = ["console", "debugger"];
  },
}));
