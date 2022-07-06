import { join } from "path";
import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src/**/*.ts"],
    outDir: "build",
    clean: true,
    dts: true,
    minify: true,
    platform: "node",
    format: ["cjs", "esm", "iife"],
    tsconfig: "./tsconfig.json",
    ignoreWatch: ["coverage/**/*, 'build/**/*", "**/*.spec.ts"],
    onSuccess: options.watch
      ? `node ${join(process.cwd(), "build", "diagraph.js")}`
      : "",
  };
});
