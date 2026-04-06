const setupItems = [
  "App Router",
  "TypeScript",
  "Tailwind CSS",
  "ESLint",
  "Vitest",
] as const;

const scriptItems = [
  { label: "Development", command: "npm run dev" },
  { label: "Lint", command: "npm run lint" },
  { label: "Test", command: "npm run test" },
  { label: "Production build", command: "npm run build" },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffffff,_#e2e8f0_40%,_#cbd5e1_100%)] px-6 py-16 text-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_30px_120px_rgba(15,23,42,0.16)] backdrop-blur md:p-12">
        <section className="flex flex-col gap-6">
          <span className="w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-900">
            Next.js bootstrap complete
          </span>
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              Next.js project is ready to build on.
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              This starter includes the App Router, TypeScript, Tailwind CSS,
              ESLint, and a basic test setup so development can start
              immediately.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.5rem] bg-slate-950 p-6 text-slate-50">
            <h2 className="text-xl font-semibold">Included setup</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {setupItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-950">
              Useful scripts
            </h2>
            <dl className="mt-4 space-y-4">
              {scriptItems.map((item) => (
                <div key={item.command} className="space-y-1">
                  <dt className="text-sm font-medium text-slate-500">
                    {item.label}
                  </dt>
                  <dd className="font-mono text-sm text-slate-900">
                    {item.command}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>
    </main>
  );
}
