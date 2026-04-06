import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Next.js project ready</p>
        <h1>Build from a clean App Router foundation.</h1>
        <p className={styles.description}>
          This starter includes TypeScript, ESLint, and a Vitest smoke test so
          you can move straight into feature work.
        </p>
      </section>

      <section className={styles.grid} aria-label="Project starter details">
        <article className={styles.card}>
          <h2>Included</h2>
          <ul className={styles.list}>
            <li>Next.js 16 App Router structure</li>
            <li>TypeScript and strict compiler settings</li>
            <li>ESLint with Next.js rules</li>
            <li>Vitest and Testing Library for UI tests</li>
          </ul>
        </article>

        <article className={styles.card}>
          <h2>Common commands</h2>
          <ul className={styles.commands}>
            <li>
              <code>npm run dev</code>
            </li>
            <li>
              <code>npm run lint</code>
            </li>
            <li>
              <code>npm test</code>
            </li>
            <li>
              <code>npm run build</code>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
