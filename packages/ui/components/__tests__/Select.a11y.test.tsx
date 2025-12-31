import { describe, it, expect, vi } from "vitest";
import { render, screen } from "./test-utils";
import { testA11y, testAriaAttributes } from "./a11y-test-utils";
import { Select } from "../Select";
import userEvent from "@testing-library/user-event";

describe("Select Accessibility", () => {
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  it("should have no accessibility violations", async () => {
    await testA11y(<Select label="Choose option" options={options} />);
  });

  it("should have proper ARIA attributes", () => {
    render(<Select label="Choose option" options={options} />);
    const select = screen.getByRole("combobox");
    testAriaAttributes(select, {
      "aria-expanded": "false",
      "aria-haspopup": "listbox",
    });
  });

  it("should be keyboard accessible", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Select label="Choose" options={options} onChange={handleChange} />);

    const select = screen.getByRole("combobox");
    await user.tab();
    expect(select).toHaveFocus();

    await user.keyboard("{Enter}");
    // Select should open
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("should associate error message with select", () => {
    render(<Select label="Choose" options={options} error="Please select an option" />);
    const select = screen.getByRole("combobox");
    const errorMessage = screen.getByText("Please select an option");

    expect(select).toHaveAttribute("aria-invalid", "true");
    expect(select).toHaveAttribute("aria-describedby", errorMessage.id);
  });

  it("should support disabled state", () => {
    render(<Select label="Choose" options={options} disabled />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveAttribute("aria-disabled", "true");
  });

  it("should have accessible label", () => {
    render(<Select label="Select an option" options={options} />);
    const select = screen.getByRole("combobox", { name: /select an option/i });
    expect(select).toBeInTheDocument();
  });
});
