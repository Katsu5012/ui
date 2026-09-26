import { setProjectAnnotations } from "@storybook/react-vite";
import { afterEach, beforeAll, expect } from "vitest";
import { page } from "vitest/browser";
import * as projectAnnotations from "./preview";

const annotations = setProjectAnnotations([projectAnnotations]);

beforeAll(annotations.beforeAll);

// VRT: screenshot every story after it renders and compare against the
// committed baseline (__screenshots__/). Update with `pnpm test:vrt:update`.
afterEach(async ({ task }) => {
  const root = page.elementLocator(document.body);
  try {
    await expect(root).toMatchScreenshot(task.name);
  } catch (error) {
    // A brand-new story or component has no baseline yet; the screenshot is
    // created on this run and that must not fail the suite. Only actual
    // mismatches against an existing baseline are failures.
    if (
      error instanceof Error &&
      error.message.includes("No existing reference screenshot found")
    ) {
      return;
    }
    throw error;
  }
});
