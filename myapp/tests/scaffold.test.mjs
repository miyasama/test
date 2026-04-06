import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

async function readProjectFile(relativePath) {
  return readFile(path.join(projectRoot, relativePath), "utf8");
}

test("package.json exposes the expected Next.js scripts", async () => {
  const packageJson = JSON.parse(await readProjectFile("package.json"));

  assert.equal(packageJson.name, "myapp");
  assert.deepEqual(packageJson.scripts, {
    dev: "next dev",
    build: "next build",
    start: "next start",
    lint: "eslint",
    test: 'node --test "tests/**/*.test.mjs"',
  });
});

test("App Router entrypoints exist in src/app", async () => {
  const page = await readProjectFile("src/app/page.tsx");
  const layout = await readProjectFile("src/app/layout.tsx");

  assert.match(page, /export default function Home\(\)/);
  assert.match(layout, /export default function RootLayout/);
});

test("project includes the core Next.js scaffold configuration files", async () => {
  const fileChecks = await Promise.all([
    readProjectFile("next.config.ts"),
    readProjectFile("tsconfig.json"),
    readProjectFile("postcss.config.mjs"),
    readProjectFile("eslint.config.mjs"),
  ]);

  assert.equal(fileChecks.length, 4);
});
