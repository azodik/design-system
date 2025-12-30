import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: false,
  external: ["react", "react-dom", "azodik-ui-core", "@azodik/icons", "recharts", "minisearch"],
  esbuildOptions(options) {
    options.treeShaking = true;
    options.drop = ["console", "debugger"];
  },
});
