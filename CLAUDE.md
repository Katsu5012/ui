# @katsu5012/ui

React UI コンポーネントライブラリ。Base UI (`@base-ui/react`) をヘッドレスプリミティブとして使い、Tailwind CSS v4 でスタイリングする。

## 技術スタック

- React 19 / TypeScript(strict)
- Base UI (`@base-ui/react`) — ヘッドレスUIプリミティブ(旧 `@base-ui-components/react`。旧パッケージは使わない)
- Tailwind CSS v4(`@tailwindcss/vite`、設定ファイルなしのCSS-first構成)
- Storybook(`@storybook/react-vite`)
- テスト/VRT: Vitest browser mode + `@storybook/addon-vitest` + Playwright(Jestは使わない)
- ビルド: tsup(ESM + CJS + d.ts)
- パッケージマネージャ: pnpm

## コマンド

| コマンド | 内容 |
| --- | --- |
| `pnpm storybook` | Storybook 開発サーバー(port 6006) |
| `pnpm build-storybook` | Storybook 静的ビルド(`storybook-static/`) |
| `pnpm test:vrt` | VRT 実行(headless Chromium、自己完結。CIもこれでよい) |
| `pnpm test:vrt:update` | VRT ベースライン更新 |
| `pnpm typecheck` | 型チェック(`tsc --noEmit`) |
| `pnpm build` | ライブラリビルド(`dist/`) |

初回のみ Playwright のブラウザが必要: `pnpm exec playwright install chromium`

## ディレクトリ構成と規約

- コンポーネントは `src/components/<name>/` に置く:
  - `<name>.tsx` — 実装
  - `<name>.stories.tsx` — Storybook stories(そのままVRTの対象になる)
  - `index.ts` — re-export
- 新しいコンポーネントを追加したら `src/index.ts` からも export する。
- Base UI のコンポーネントをラップする場合、状態は `data-[checked]` / `data-[disabled]` などの data 属性バリアントでスタイリングする。
- クラス結合は `src/lib/cx.ts` の `cx()` を使う(外部の clsx/tailwind-merge には依存しない)。
- Tailwind v4 なので `tailwind.config.js` は存在しない。グローバルCSSは `.storybook/preview.css`(`@import 'tailwindcss'`)のみ。

## VRT の仕組みと運用

- `vitest.config.ts` の `storybookTest` プラグインが全 stories を Vitest のテストとして実行し、`.storybook/vitest.setup.ts` の `afterEach` が各ストーリーを `toMatchScreenshot` でベースライン比較する。
- ベースラインは `src/**/__screenshots__/<Story>-chromium-darwin.png` に保存され、コミット対象。
- 失敗時の actual / diff 画像は `.vitest-attachments/`(gitignore済み)。
- ベースラインはレンダリング環境依存(フォント等)。基準はローカルmacOSで生成したもの。
- 意図的な見た目の変更・ストーリー追加をしたら `pnpm test:vrt:update` を実行し、更新されたベースラインをコミットに含める。
- 特定ストーリーをテスト対象から外すには story または meta に `tags: ['!test']` を付ける。
- 新規ベースライン作成の初回実行は「レビューせよ」という意図で fail する仕様(2回目から比較でpass)。

## 既知の注意点

- `@storybook/test-runner`(Jestベース)は Storybook 10 + Jest 30.5+ で `module.register()` 非対応により動かない(storybookjs/storybook#36269)。VRTをJest系に戻さないこと。
- `@storybook/addon-vitest` は Vitest ^3 || ^4 のみ対応(Vitest 5 は不可)。
