import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        plugins: [storybookTest({ configDir: path.join(dirname, ".storybook") })],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
            expect: {
              toMatchScreenshot: {
                // Keep all baselines in one place (repo root) instead of
                // scattering __screenshots__ directories across src/.
                resolveScreenshotPath: ({
                  root,
                  testFileDirectory,
                  arg,
                  browserName,
                  platform,
                  ext,
                }) =>
                  path.resolve(
                    root,
                    "__screenshots__",
                    path.basename(testFileDirectory),
                    `${arg}-${browserName}-${platform}${ext}`,
                  ),
              },
            },
          },
          setupFiles: ["./.storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
