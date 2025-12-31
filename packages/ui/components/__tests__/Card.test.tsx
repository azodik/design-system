import { describe, it, expect } from "vitest";
import { render, screen } from "./test-utils";
import Card, { CardHeader, CardContent, CardFooter } from "../Card";

describe("Card", () => {
  it("renders with children", () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>,
    );
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("applies default size class", () => {
    const { container } = render(<Card>Test</Card>);
    const card = container.querySelector(".az-Card");
    expect(card).toBeInTheDocument();
  });

  it("applies custom size class", () => {
    const { container } = render(<Card size="lg">Test</Card>);
    const card = container.querySelector(".az-Card");
    expect(card).toBeInTheDocument();
  });

  it("applies variant class", () => {
    const { container } = render(<Card variant="outline">Test</Card>);
    const card = container.querySelector(".az-Card");
    expect(card).toHaveClass("az-variant-outline");
  });

  it("renders with header and footer", () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardContent>Body</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
