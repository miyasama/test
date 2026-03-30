import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe("Home page", () => {
  it("renders the heading text", () => {
    render(<Home />);
    expect(
      screen.getByText(/To get started, edit the page.tsx file/i)
    ).toBeInTheDocument();
  });

  it("renders the Deploy Now link", () => {
    render(<Home />);
    expect(screen.getByText("Deploy Now")).toBeInTheDocument();
  });

  it("renders the Documentation link", () => {
    render(<Home />);
    expect(screen.getByText("Documentation")).toBeInTheDocument();
  });
});
