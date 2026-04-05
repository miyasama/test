const capabilities = [
  {
    title: "App Router",
    description: "File-based routing with layouts and server components ready to use.",
  },
  {
    title: "TypeScript",
    description: "Strict defaults are enabled so new features stay typed from the start.",
  },
  {
    title: "Tailwind CSS",
    description: "Tailwind CSS v4 is configured for quick UI iteration inside src/app.",
  },
  {
    title: "ESLint",
    description: "Linting is wired in through the standard Next.js configuration.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Next.js project ready
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Start building on a clean Next.js 16 foundation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            This project ships with the App Router, TypeScript, Tailwind CSS,
            and ESLint so you can move straight into feature work.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <code className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100">
              npm run dev
            </code>
            <code className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200">
              npm run build
            </code>
            <code className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200">
              npm test
            </code>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6"
            >
              <h2 className="text-xl font-semibold text-white">
                {capability.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                {capability.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
