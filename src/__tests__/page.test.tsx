import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Home from "../app/page";

vi.mock("next/image", () => ({
  // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

afterEach(() => {
  cleanup();
});

describe("Home page", () => {
  it("renders the heading", () => {
    render(<Home />);
    expect(
      screen.getByText(/to get started, edit the page\.tsx file/i)
    ).toBeDefined();
  });

  it("renders the Deploy Now link", () => {
    render(<Home />);
    expect(screen.getByText("Deploy Now")).toBeDefined();
  });

  it("renders the Documentation link", () => {
    render(<Home />);
    expect(screen.getByText("Documentation")).toBeDefined();
  });

  it("renders the Next.js logo", () => {
    render(<Home />);
    expect(screen.getByAltText("Next.js logo")).toBeDefined();
  });
});
