import { describe, it, vi } from "vitest";
import { render, screen } from "./test-utils";
import { testA11y, testAriaAttributes } from "./a11y-test-utils";
import Button from "../Button";
import userEvent from "@testing-library/user-event";

describe("Button Accessibility", () => {
  it("should have no accessibility violations", async () => {
    await testA11y(<Button>Click me</Button>);
  });

  it("should have proper ARIA attributes", () => {
    render(<Button aria-label="Submit form">Submit</Button>);
    const button = screen.getByRole("button");
    testAriaAttributes(button, {
      "aria-label": "Submit form",
    });
  });

  it("should be keyboard accessible", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button");
    await user.tab();
    expect(button).toHaveFocus();

    await user.keyboard("{Enter}");
    expect(handleClick).toHaveBeenCalledTimes(1);

    await user.keyboard(" ");
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it("should announce loading state to screen readers", () => {
    render(
      <Button loading aria-label="Loading button">
        Submit
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button).toBeDisabled();
  });

  it("should respect disabled state", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-disabled", "true");
  });

  it("should have accessible name", () => {
    render(<Button>Accessible Button</Button>);
    const button = screen.getByRole("button", { name: /accessible button/i });
    expect(button).toBeInTheDocument();
  });
});
