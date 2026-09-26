import { setProjectAnnotations } from "@storybook/react-vite";
import { afterEach, beforeAll, expect } from "vitest";
import { page } from "vitest/browser";
import * as projectAnnotations from "./preview";

const annotations = setProjectAnnotations([projectAnnotations]);

beforeAll(annotations.beforeAll);

// VRT: screenshot every story after it renders and compare against the
// committed baseline (src/**/__screenshots__/). Update with `pnpm test:vrt:update`.
afterEach(async ({ task }) => {
  const root = page.elementLocator(document.body);
  await expect(root).toMatchScreenshot(task.name);
});
