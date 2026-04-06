# Next.js Starter

Next.js 16 の App Router を使ったスタータープロジェクトです。TypeScript、ESLint、Tailwind CSS、Vitest を設定済みです。

## セットアップ

依存関係はインストール済みです。開発を始める場合は以下を実行します。

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開くとトップページを確認できます。

## 利用可能なコマンド

- `npm run dev`: 開発サーバーを起動
- `npm run build`: 本番ビルドを作成
- `npm run start`: 本番ビルドを起動
- `npm run lint`: ESLint を実行
- `npm run test`: Vitest による単体テストを実行

## プロジェクト構成

- `src/app`: App Router のページとレイアウト
- `src/app/page.test.tsx`: ホーム画面のレンダリングテスト
- `vitest.config.ts`: Vitest の設定

## 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [Vitest Documentation](https://vitest.dev/)
