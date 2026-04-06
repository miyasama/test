const setupItems = [
  {
    title: "App Router",
    description: "src/app を起点にルーティングとレイアウトを構成できます。",
  },
  {
    title: "Tailwind CSS",
    description: "ユーティリティクラスを使って、そのまま UI 実装を始められます。",
  },
  {
    title: "Vitest",
    description: "画面のスモークテストを追加済みで、すぐにテストを拡張できます。",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-1 items-center">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10 lg:px-12">
        <section className="overflow-hidden rounded-[2rem] border border-white/50 bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur sm:p-10">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
            Next.js 16 / App Router / TypeScript
          </span>
          <div className="mt-6 max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Next.js プロジェクトの初期設定が完了しました。
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              App Router、Tailwind CSS、ESLint、Vitest を揃えた最小構成です。
              ここから画面実装や機能追加をすぐに始められます。
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-slate-700">
            <code className="rounded-full bg-slate-950 px-4 py-2 text-slate-50">
              npm run dev
            </code>
            <code className="rounded-full bg-white px-4 py-2 ring-1 ring-slate-200">
              npm run test
            </code>
            <code className="rounded-full bg-white px-4 py-2 ring-1 ring-slate-200">
              npm run lint
            </code>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {setupItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white/70 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
            >
              <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{item.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
