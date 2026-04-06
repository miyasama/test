import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import Home from "./page";

describe("Home page", () => {
  it("renders the project heading and available scripts", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).toContain("Next.js project is ready to build on.");
    expect(html).toContain("npm run dev");
    expect(html).toContain("Vitest");
  });
});
