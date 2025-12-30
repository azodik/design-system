import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: false,
  external: ["react", "react-dom", "azodik-ui-core", "@azodik/icons", "recharts", "minisearch"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
    options.treeShaking = true;
    options.drop = ["console", "debugger"];
  },
});
