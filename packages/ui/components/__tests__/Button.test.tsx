import { describe, it, expect } from "vitest";
import { render, screen } from "./test-utils";
import Button from "../Button";

describe("Button", () => {
  it("renders with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies default size class", () => {
    const { container } = render(<Button>Test</Button>);
    const button = container.querySelector(".az-Button");
    expect(button).toHaveClass("az-r-size-2");
  });

  it("applies custom size class", () => {
    const { container } = render(<Button size="lg">Test</Button>);
    const button = container.querySelector(".az-Button");
    expect(button).toHaveClass("az-r-size-4");
  });

  it("applies variant class", () => {
    const { container } = render(<Button variant="outline">Test</Button>);
    const button = container.querySelector(".az-Button");
    expect(button).toHaveClass("az-variant-outline");
  });
});
