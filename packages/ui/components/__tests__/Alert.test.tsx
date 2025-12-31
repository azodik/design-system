import { describe, it, expect } from "vitest";
import { render, screen } from "./test-utils";
import Alert from "../Alert";

describe("Alert", () => {
  it("renders with children", () => {
    render(<Alert>Alert message</Alert>);
    expect(screen.getByText("Alert message")).toBeInTheDocument();
  });

  it("applies variant class", () => {
    const { container } = render(
      <Alert variant="soft" color="grass">
        Success
      </Alert>,
    );
    const alert = container.querySelector('[role="alert"]');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("az-variant-soft");
  });

  it("renders with title", () => {
    render(
      <Alert title="Alert Title">
        <p>Alert message</p>
      </Alert>,
    );
    expect(screen.getByText("Alert Title")).toBeInTheDocument();
    expect(screen.getByText("Alert message")).toBeInTheDocument();
  });

  it("renders with icon", () => {
    const { container } = render(<Alert icon="✓">Success</Alert>);
    const alert = container.querySelector('[role="alert"]');
    expect(alert).toBeInTheDocument();
    const icon = container.querySelector(".alert-icon");
    expect(icon).toBeInTheDocument();
  });

  it("has proper ARIA role", () => {
    const { container } = render(<Alert>Alert message</Alert>);
    const alert = container.querySelector('[role="alert"]');
    expect(alert).toBeInTheDocument();
  });
});
