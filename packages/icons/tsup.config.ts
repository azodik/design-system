import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: !options.watch, // Only generate types in build mode, not in watch/dev mode (to avoid memory issues with 2283 files)
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
}));
