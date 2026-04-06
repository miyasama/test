import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home", () => {
  it("renders the starter heading and commands", () => {
    const markup = renderToStaticMarkup(<Home />);

    expect(markup).toContain("Next.js プロジェクトの初期設定が完了しました。");
    expect(markup).toContain("npm run dev");
    expect(markup).toContain("Vitest");
  });
});
