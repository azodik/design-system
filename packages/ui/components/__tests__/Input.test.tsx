import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from "../Input";
import { Checkbox } from "../Checkbox";
import { Radio } from "../Radio";
import { Switch } from "../Switch";

describe("Input", () => {
  it("renders with label", () => {
    render(<Input label="Test Input" />);
    expect(screen.getByLabelText("Test Input")).toBeInTheDocument();
  });

  it("applies size class", () => {
    const { container } = render(<Input size="xs" />);
    const input = container.querySelector("input");
    expect(input).toHaveClass("az-r-size-1");
  });

  it("shows error message", () => {
    render(<Input error="This is an error" />);
    expect(screen.getByText("This is an error")).toBeInTheDocument();
  });

  it("shows help text", () => {
    render(<Input help="This is help text" />);
    expect(screen.getByText("This is help text")).toBeInTheDocument();
  });
});

describe("Checkbox", () => {
  it("renders with label", () => {
    render(<Checkbox label="Test Checkbox" />);
    expect(screen.getByLabelText("Test Checkbox")).toBeInTheDocument();
  });

  it("applies size class", () => {
    const { container } = render(<Checkbox size="lg" />);
    const checkbox = container.querySelector(".az-Checkbox");
    expect(checkbox).toHaveClass("az-r-size-4");
  });
});

describe("Radio", () => {
  it("renders with label", () => {
    render(<Radio label="Test Radio" name="test" />);
    expect(screen.getByLabelText("Test Radio")).toBeInTheDocument();
  });

  it("applies size class", () => {
    const { container } = render(<Radio size="md" name="test" />);
    const radio = container.querySelector(".radio");
    expect(radio).toHaveClass("az-r-size-3");
  });
});

describe("Switch", () => {
  it("renders with label", () => {
    render(<Switch label="Test Switch" />);
    expect(screen.getByLabelText("Test Switch")).toBeInTheDocument();
  });

  it("applies size class", () => {
    const { container } = render(<Switch size="xs" />);
    const switchElement = container.querySelector(".switch");
    expect(switchElement).toHaveClass("az-r-size-1");
  });
});
