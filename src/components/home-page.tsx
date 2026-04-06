const featureItems = [
  {
    title: "App Router",
    description: "Next.js の標準構成として App Router を採用しています。",
  },
  {
    title: "Tailwind CSS",
    description: "ルートのグローバル CSS から Tailwind を読み込む構成です。",
  },
  {
    title: "Vitest",
    description: "UI コンポーネントを素早く検証できるテスト環境を追加しています。",
  },
] as const;

const stackItems = ["TypeScript", ...featureItems.map(({ title }) => title)];

export function HomePage() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <section className="overflow-hidden rounded-[2rem] border border-black/10 bg-[var(--surface)] p-8 shadow-[0_24px_80px_rgba(70,33,11,0.12)] backdrop-blur sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent-strong)]">
            Next.js Starter
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
            新しい Next.js プロジェクトをすぐに始められる土台を用意しました。
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
            TypeScript、App Router、Tailwind CSS、Vitest を含む最小構成です。
            画面実装とテストをこのまま拡張できます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
            {stackItems.map((item) => (
              <span key={item} className="rounded-full bg-white/80 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section
          aria-label="project features"
          className="grid gap-4 md:grid-cols-3"
        >
          {featureItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-black/10 bg-white/70 p-6 shadow-[0_18px_50px_rgba(56,29,13,0.08)]"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-black/70">
                {item.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
