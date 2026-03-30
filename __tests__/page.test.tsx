import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the Next.js logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the heading text", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("To get started, edit the page.tsx file.");
  });

  it("renders Deploy Now and Documentation links", () => {
    render(<Home />);
    expect(screen.getByText("Deploy Now")).toBeInTheDocument();
    expect(screen.getByText("Documentation")).toBeInTheDocument();
  });
});
