export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-16 text-zinc-50">
      <section className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30 backdrop-blur sm:p-14">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
          Next.js 16 Starter
        </p>
        <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Next.js project is ready for development.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
          This starter includes the App Router, TypeScript, Tailwind CSS, ESLint,
          and a Vitest + Testing Library setup for component tests.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h2 className="text-lg font-semibold">Develop</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Run <code className="rounded bg-white/10 px-2 py-1">npm run dev</code>{" "}
              to start the local server.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h2 className="text-lg font-semibold">Lint</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Check code quality with{" "}
              <code className="rounded bg-white/10 px-2 py-1">npm run lint</code>.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h2 className="text-lg font-semibold">Test</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Run component tests with{" "}
              <code className="rounded bg-white/10 px-2 py-1">npm run test</code>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
