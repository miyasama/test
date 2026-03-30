import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe("Home page", () => {
  it("renders the page heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("To get started, edit the page.tsx file.");
  });

  it("renders the Deploy Now link", () => {
    render(<Home />);
    const deployLink = screen.getByText("Deploy Now");
    expect(deployLink).toBeInTheDocument();
  });

  it("renders the Documentation link", () => {
    render(<Home />);
    const docsLink = screen.getByText("Documentation");
    expect(docsLink).toBeInTheDocument();
  });
});
