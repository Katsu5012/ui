# @katsu5012/ui

React UI component library built with [Base UI](https://base-ui.com) and [Tailwind CSS v4](https://tailwindcss.com), documented with [Storybook](https://storybook.js.org) and visually tested with [Vitest browser mode](https://vitest.dev/guide/browser/).

## Development

```sh
pnpm install
pnpm exec playwright install chromium  # first time only, for VRT
pnpm storybook                          # dev server at http://localhost:6006
```

## Scripts

| Script | Description |
| --- | --- |
| `pnpm storybook` | Start Storybook dev server |
| `pnpm build-storybook` | Build static Storybook into `storybook-static/` |
| `pnpm test:vrt` | Run visual regression tests (headless Chromium, self-contained) |
| `pnpm test:vrt:update` | Update VRT baseline screenshots |
| `pnpm typecheck` | Type-check with `tsc --noEmit` |
| `pnpm build` | Build the library into `dist/` (ESM + CJS + type declarations) |

## Visual regression testing

VRT is implemented with `@storybook/addon-vitest`: every story runs as a Vitest browser-mode test in headless Chromium, and an `afterEach` hook in `.storybook/vitest.setup.ts` screenshots the rendered story and compares it against the committed baseline via Vitest's `toMatchScreenshot`.

- Baselines live in `src/**/__screenshots__/`, named `<Story>-chromium-darwin.png`, and are committed.
- Baselines are rendering-environment dependent (OS fonts, GPU). The committed ones were generated on macOS; running on another platform creates separate `-<platform>` baselines.
- On a failed comparison, the actual and diff images are written to `.vitest-attachments/` (gitignored).
- After an intentional visual change, run `pnpm test:vrt:update` and commit the updated baselines.
- Exclude a story from testing entirely with `tags: ['!test']` in the story or meta.

## Adding a component

1. Create `src/components/<name>/<name>.tsx`, `<name>.stories.tsx`, and `index.ts`.
2. Export it from `src/index.ts`.
3. Generate baselines for the new stories: `pnpm test:vrt:update`, then commit them.
