# Next.js Project Starter

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開くと初期画面を確認できます。

## Scripts

- `npm run dev`: 開発サーバーを起動
- `npm run lint`: ESLint を実行
- `npm run test`: Vitest のテストを実行
- `npm run build`: 本番ビルドを作成

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9
- Vitest

## Structure

- `src/app/layout.tsx`: ルートレイアウトとメタデータ
- `src/app/page.tsx`: 初期ホーム画面
- `src/app/globals.css`: グローバルスタイル
- `src/app/page.test.tsx`: ホーム画面のスモークテスト

## Notes

- App Router を前提に構成しています。
- `AGENTS.md` の指示に合わせ、Next 16 のローカルドキュメント前提で実装しています。
