import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-vitest"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(viteConfig) {
    const { mergeConfig } = await import("vite");
    const { default: tailwindcss } = await import("@tailwindcss/vite");
    const { fileURLToPath } = await import("node:url");
    return mergeConfig(viteConfig, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("../src", import.meta.url)),
        },
      },
    });
  },
};

export default config;
