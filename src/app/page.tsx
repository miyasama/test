export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16 text-slate-900">
      <section className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-black/10 bg-white/85 shadow-[0_30px_120px_rgba(88,63,22,0.18)] backdrop-blur">
        <div className="grid gap-12 px-8 py-10 sm:px-12 lg:grid-cols-[1.3fr_0.9fr] lg:px-14 lg:py-14">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-amber-900/15 bg-amber-100 px-4 py-1 text-sm font-medium tracking-[0.18em] text-amber-950 uppercase">
              Next.js 16 Starter
            </span>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                Next.js プロジェクトを作成しました
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                App Router、TypeScript、ESLint、Tailwind CSS を含む最小構成です。
                このまま機能追加を始められます。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-2xl bg-slate-950 px-5 py-5 text-slate-50">
                <p className="text-sm text-slate-300">Framework</p>
                <p className="mt-2 text-xl font-semibold">App Router</p>
              </article>
              <article className="rounded-2xl bg-amber-50 px-5 py-5 text-amber-950 ring-1 ring-inset ring-amber-900/10">
                <p className="text-sm text-amber-800">Language</p>
                <p className="mt-2 text-xl font-semibold">TypeScript</p>
              </article>
              <article className="rounded-2xl bg-emerald-50 px-5 py-5 text-emerald-950 ring-1 ring-inset ring-emerald-900/10">
                <p className="text-sm text-emerald-800">Styling</p>
                <p className="mt-2 text-xl font-semibold">Tailwind CSS</p>
              </article>
            </div>
          </div>
          <aside className="rounded-[1.75rem] bg-slate-950 p-6 text-slate-50 shadow-inner">
            <p className="text-sm font-medium tracking-[0.2em] text-slate-400 uppercase">
              Available Commands
            </p>
            <ul className="mt-5 space-y-3">
              <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <code className="font-mono text-sm">npm run dev</code>
                <p className="mt-1 text-sm text-slate-300">
                  開発サーバーを起動します。
                </p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <code className="font-mono text-sm">npm run lint</code>
                <p className="mt-1 text-sm text-slate-300">
                  ESLint でコードを検証します。
                </p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <code className="font-mono text-sm">npm run test</code>
                <p className="mt-1 text-sm text-slate-300">
                  Vitest で単体テストを実行します。
                </p>
              </li>
            </ul>
            <a
              className="mt-6 inline-flex rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js Documentation
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
