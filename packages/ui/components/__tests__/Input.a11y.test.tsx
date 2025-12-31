import { describe, it } from "vitest";
import { render, screen } from "./test-utils";
import { testA11y } from "./a11y-test-utils";
import Input from "../Input";
import userEvent from "@testing-library/user-event";

describe("Input Accessibility", () => {
  it("should have no accessibility violations", async () => {
    await testA11y(<Input label="Email" />);
  });

  it("should have proper ARIA attributes with label", () => {
    render(<Input label="Email address" id="email" type="text" />);
    const input = screen.getByLabelText(/email address/i);
    expect(input).toHaveAttribute("id", "email");
    expect(input).toHaveAttribute("type", "text");
  });

  it("should associate error message with input", () => {
    render(<Input label="Email" error="Invalid email" id="email" />);
    const input = screen.getByLabelText(/email/i);
    const errorMessage = screen.getByText("Invalid email");

    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-describedby", errorMessage.id);
  });

  it("should be keyboard accessible", async () => {
    const user = userEvent.setup();
    render(<Input label="Name" />);

    const input = screen.getByLabelText(/name/i);
    await user.tab();
    expect(input).toHaveFocus();

    await user.type(input, "John Doe");
    expect(input).toHaveValue("John Doe");
  });

  it("should support required field indication", () => {
    render(<Input label="Email" required />);
    const input = screen.getByLabelText(/email/i);
    expect(input).toHaveAttribute("required");
    expect(input).toHaveAttribute("aria-required", "true");
  });

  it("should have accessible placeholder", () => {
    render(<Input label="Search" placeholder="Enter search term" />);
    const input = screen.getByLabelText(/search/i);
    expect(input).toHaveAttribute("placeholder", "Enter search term");
  });

  it("should support disabled state", () => {
    render(<Input label="Disabled" disabled />);
    const input = screen.getByLabelText(/disabled/i);
    expect(input).toBeDisabled();
  });
});
