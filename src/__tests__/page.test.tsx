import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe("Home page", () => {
  it("renders the heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("To get started, edit the page.tsx file.");
  });

  it("renders the Deploy Now link", () => {
    render(<Home />);
    const deployLink = screen.getByText("Deploy Now");
    expect(deployLink).toBeInTheDocument();
    expect(deployLink.closest("a")).toHaveAttribute("target", "_blank");
  });

  it("renders the Documentation link", () => {
    render(<Home />);
    const docsLink = screen.getByText("Documentation");
    expect(docsLink).toBeInTheDocument();
    expect(docsLink.closest("a")).toHaveAttribute("target", "_blank");
  });
});
