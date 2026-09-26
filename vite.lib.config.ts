// Library build config. Named vite.lib.config.ts (not vite.config.ts) so that
// Storybook's vite builder does not pick up the lib-mode build options.
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    dts({
      tsconfigPath: "./tsconfig.json",
      include: ["src"],
      exclude: ["src/**/*.stories.tsx"],
    }),
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: [/^react($|\/)/, /^react-dom($|\/)/, /^@base-ui\/react($|\/)/],
    },
    sourcemap: true,
  },
});
