import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal, { ModalHeader, ModalFooter } from "../Modal";

describe("Modal", () => {
  it("renders when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <p>Modal content</p>
      </Modal>,
    );
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    const { container } = render(
      <Modal isOpen={false} onClose={() => {}}>
        <p>Modal content</p>
      </Modal>,
    );
    expect(container.firstChild).toBeNull();
  });

  it("applies correct size class", () => {
    const { container } = render(
      <Modal isOpen={true} onClose={() => {}} size="3">
        <p>Content</p>
      </Modal>,
    );
    const modal = container.querySelector(".az-Modal");
    expect(modal).toHaveClass("az-r-size-3");
  });

  it("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal">
        <p>Content</p>
      </Modal>,
    );
    const closeButton = screen.getByLabelText("Close modal");
    await user.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("renders ModalHeader correctly", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <ModalHeader>Header Content</ModalHeader>
        <p>Body</p>
      </Modal>,
    );
    expect(screen.getByText("Header Content")).toBeInTheDocument();
  });

  it("renders ModalFooter correctly", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <p>Body</p>
        <ModalFooter>Footer Content</ModalFooter>
      </Modal>,
    );
    expect(screen.getByText("Footer Content")).toBeInTheDocument();
  });
});
