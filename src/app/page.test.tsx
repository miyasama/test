import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("renders the starter heading and commands", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: "Next.js project is ready for development.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("npm run dev")).toBeInTheDocument();
    expect(screen.getByText("npm run lint")).toBeInTheDocument();
    expect(screen.getByText("npm run test")).toBeInTheDocument();
  });
});
