import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const rootDir = process.cwd();

async function readProjectFile(relativePath) {
  return readFile(path.join(rootDir, relativePath), "utf8");
}

test("package.json exposes the standard project scripts", async () => {
  const packageJson = JSON.parse(await readProjectFile("package.json"));

  assert.equal(packageJson.name, "nextjs-project");
  assert.equal(packageJson.private, true);
  assert.deepEqual(packageJson.scripts, {
    dev: "next dev",
    build: "next build",
    start: "next start",
    lint: "eslint",
    test: "node --test tests/*.test.mjs",
  });
});

test("app metadata describes the starter project", async () => {
  const layoutFile = await readProjectFile("src/app/layout.tsx");

  assert.match(layoutFile, /title: "Next\.js Project Starter"/);
  assert.match(layoutFile, /App Router, TypeScript, Tailwind CSS, and ESLint/);
});

test("homepage includes the main quick-start commands", async () => {
  const pageFile = await readProjectFile("src/app/page.tsx");

  assert.match(pageFile, /Next\.js project ready/);
  assert.match(pageFile, /npm run dev/);
  assert.match(pageFile, /npm run build/);
  assert.match(pageFile, /npm test/);
});
