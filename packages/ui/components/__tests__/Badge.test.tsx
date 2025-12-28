import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Badge from "../Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
  });

  it("applies variant class", () => {
    const { container } = render(<Badge variant="solid">Badge</Badge>);
    const badge = container.querySelector(".badge");
    expect(badge).toHaveClass("az-variant-solid");
  });

  it("applies size class", () => {
    const { container } = render(<Badge size="1">Badge</Badge>);
    const badge = container.querySelector(".badge");
    expect(badge).toHaveClass("az-r-size-1");
  });

  it("applies high contrast class", () => {
    const { container } = render(<Badge highContrast>Badge</Badge>);
    const badge = container.querySelector(".badge");
    expect(badge).toHaveClass("az-high-contrast");
  });
});
