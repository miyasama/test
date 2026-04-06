import { renderToStaticMarkup } from "react-dom/server";
import Home from "./page";

describe("Home", () => {
  it("renders the starter overview and commands", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).toContain("Next.js プロジェクトを作成しました");
    expect(html).toContain("App Router、TypeScript、ESLint、Tailwind CSS");
    expect(html).toContain("npm run dev");
    expect(html).toContain("npm run lint");
    expect(html).toContain("npm run test");
    expect(html).toContain("https://nextjs.org/docs");
  });
});
