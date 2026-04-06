import { render, screen, within } from "@testing-library/react";
import { HomePage } from "@/components/home-page";

describe("HomePage", () => {
  it("renders the starter heading and feature cards", () => {
    render(<HomePage />);

    const featureRegion = screen.getByRole("region", {
      name: "project features",
    });

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /新しい next\.js プロジェクトをすぐに始められる土台を用意しました。/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(featureRegion).getAllByRole("heading", { level: 2 }),
    ).toHaveLength(3);
    expect(
      screen.getByRole("heading", { level: 2, name: "App Router" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Tailwind CSS" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Vitest" }),
    ).toBeInTheDocument();
  });
});
