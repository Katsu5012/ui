# @hirokikatsu/ui

React UI コンポーネントライブラリ。Base UI (`@base-ui/react`) をヘッドレスプリミティブとして使い、Tailwind CSS v4 でスタイリングする。

## 技術スタックとバージョンポリシー

- React 19 / TypeScript **6系**(7系には上げない)
- Base UI (`@base-ui/react`) — ヘッドレスUIプリミティブ(旧 `@base-ui-components/react`。旧パッケージは使わない)
- Tailwind CSS v4(`@tailwindcss/vite`、設定ファイルなしのCSS-first構成)
- Storybook 11(`@storybook/react-vite`。Vitest 5対応のため11系alpha)
- テスト/VRT: **Vitest 5系** browser mode + `@storybook/addon-vitest` + Playwright(Jestは使わない)
- ビルド: **vite lib mode** + `vite-plugin-dts`(`vite.lib.config.ts`。tsupは使わない)
- lint: **Oxlint** + `@shadcn/lint` プラグイン(`.oxlintrc.json`)。formatter: **oxfmt**(ESLint/Prettier/Biomeは使わない)
- パッケージマネージャ: pnpm。**`pnpm-workspace.yaml` の `minimumReleaseAge: 1440` によりリリース後24時間未満のバージョンはインストールされない**(サプライチェーン対策。消さないこと)

## コマンド

| コマンド               | 内容                                                  |
| ---------------------- | ----------------------------------------------------- |
| `pnpm storybook`       | Storybook 開発サーバー(port 6006)                     |
| `pnpm build-storybook` | Storybook 静的ビルド(`storybook-static/`)             |
| `pnpm test:vrt`        | VRT 実行(headless Chromium、自己完結。CIもこれでよい) |
| `pnpm test:vrt:update` | VRT ベースライン更新                                  |
| `pnpm typecheck`       | 型チェック(`tsc --noEmit`)                            |
| `pnpm build`           | ライブラリビルド(`dist/`、ESM + CJS + d.ts)           |

このほか `pnpm lint`(oxlint)、`pnpm format`(oxfmt、in-place)、`pnpm format:check` がある。

初回のみ Playwright のブラウザが必要: `pnpm exec playwright install chromium`

## ディレクトリ構成と規約

- コンポーネントは `src/components/<name>/` に置く:
  - `<name>.tsx` — 実装
  - `<name>.stories.tsx` — Storybook stories(そのままVRTの対象になる)
  - `index.ts` — re-export
- 新しいコンポーネントを追加したら `src/index.ts` からも export する。
- **import は `@/` エイリアス(→ `src/`)を使う**。相対パスの `../../` は書かない。エイリアス定義は tsconfig `paths` / `.storybook/main.ts` / `vite.lib.config.ts` の3箇所にある。
- Base UI をラップする場合、状態は `data-[checked]` / `data-[disabled]` / `data-[selected]` などの data 属性バリアントでスタイリングする。Base UI の `className` は関数型もとりうるので、パススルーする際は `typeof className === 'string'` でガードする。
- クラス結合は `@/lib/cx` の `cx()` を使う(外部の clsx/tailwind-merge には依存しない)。
- Tailwind v4 なので `tailwind.config.js` は存在しない。グローバルCSSは `.storybook/preview.css`(`@import 'tailwindcss'`)のみ。
- スタイルトーン: アクセント blue-600、ニュートラル gray、角丸 rounded-lg、フォーカスは `focus-visible:outline-2 focus-visible:outline-offset-2`。

## VRT の仕組みと運用

- `vitest.config.ts` の `storybookTest` プラグインが全 stories を Vitest のテストとして実行し、`.storybook/vitest.setup.ts` の `afterEach` が各ストーリーを `toMatchScreenshot` でベースライン比較する。
- ベースラインは **リポジトリ直下の `__screenshots__/<コンポーネント名>/<Story>-chromium-<platform>.png`** に集約して保存され、コミット対象(配置は `vitest.config.ts` の `resolveScreenshotPath` で定義。src内には置かない)。
- 失敗時の actual / diff 画像は `.vitest/attachments/`(gitignore済み)。
- ベースラインはレンダリング環境依存(フォント・viewport等)。基準はローカルmacOSで生成したもの。**Vitestのメジャーアップデートでviewportが変わり全件failすることがある**(v4→v5で960×720→1200×900に変化した実績あり)。その場合はベースライン再生成でよい。
- 意図的な見た目の変更・ストーリー追加をしたら `pnpm test:vrt:update` を実行し、更新されたベースラインをコミットに含める。
- Dialog/Popover/Tooltip/Select などオーバーレイ系は `defaultOpen` / `open` を使った開状態のストーリーを用意してVRT対象にする(ポータル先の body ごとスクリーンショットされる)。
- 特定ストーリーをテスト対象から外すには story または meta に `tags: ['!test']` を付ける。
- 新規ベースライン作成の初回実行は「レビューせよ」という意図で fail する仕様(2回目から比較でpass)。

## 既知の注意点

- `@storybook/test-runner`(Jestベース)は Storybook 10+ + Jest 30.5+ で `module.register()` 非対応により動かない(storybookjs/storybook#36269)。VRTをJest系に戻さないこと。
- `@storybook/addon-vitest` の Vitest 5 対応は Storybook 11 以降(10系は Vitest ^3||^4 のみ)。
- TypeScript 6 では `baseUrl` が非推奨。`paths` は `"./src/*"` のように相対で書く。
- ライブラリのビルド設定はあえて `vite.lib.config.ts` という名前にしてある(`vite.config.ts` にすると Storybook の vite builder が lib mode 設定を拾って壊れるため)。

## 開発フロー(PRベース)

- **mainへの直接pushは禁止**(branch protection、管理者含む)。必ずブランチを切ってPRを出す。
- マージに必須なのは `checks` ジョブ(lint / format / typecheck / build / build-storybook)のみ。
- **`vrt` ジョブは任意項目**(マージをブロックしない)。意図した見た目の変更でVRTが赤くなるのは正常で、その場合はPRブランチ上でベースラインを更新してからマージする(下記)。赤のまま放置せず、必ず「更新して緑にする」か「差分を確認して意図どおりと判断した」かのどちらかにすること。
- PRの会話(レビューコメント)は解決必須。

## CI(GitHub Actions)

- `.github/workflows/ci.yml`: push(main)/PR/manualで実行。`checks` ジョブ(ubuntu: lint / format:check / typecheck / build / build-storybook)と `vrt` ジョブ。
- `vrt` ジョブは **Playwright公式コンテナ**(`mcr.microsoft.com/playwright:v<playwrightのバージョン>-noble`)内で実行する。描画環境がイメージタグで固定されるため。**playwrightパッケージを更新したらイメージタグも合わせて更新すること**(ci.yml / vrt-update.yml の2箇所)。
- VRTベースラインは **2系統コミットされる**: `-darwin.png`(ローカルmacOS用)と `-linux.png`(CIコンテナ用)。`toMatchScreenshot` がプラットフォームで自動的に使い分ける。
- 見た目を変えたら: ローカルで `pnpm test:vrt:update`(darwin更新)+ **PRブランチを指定して** `.github/workflows/vrt-update.yml` をdispatch(`gh workflow run vrt-update.yml --ref <branch>`。linuxベースラインをrunnerが生成してそのブランチにコミットする)。mainは保護されているのでmainに対するdispatchは失敗する。
- VRT失敗時は actual / diff 画像が `vrt-attachments` アーティファクトに上がる。

## lint ポリシー(shadcn/lint)

- このリポジトリは「スタイルを定義する側」なので、`@shadcn/lint` のルールは `no-unknown-classes` / `no-arbitrary-values` / `no-inline-styles` のみ有効。`no-raw-colors` や `no-restyle` は消費側アプリ向けのルールなのでここでは有効化しない。
- `no-arbitrary-values` があるため `p-[13px]` や `max-w-[calc(...)]` のような arbitrary value は書かない。トークン・スケール値で表現する(例: ビューポート端の余白は `inset-x-4 mx-auto w-96 max-w-full` のように組む)。
