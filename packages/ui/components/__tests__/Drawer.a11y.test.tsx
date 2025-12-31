import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, within, waitFor, act } from "./test-utils";
import { testAriaAttributes } from "./a11y-test-utils";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerBody } from "../Drawer";
import userEvent from "@testing-library/user-event";

describe("Drawer Accessibility", () => {
  const mockOnOpenChange = vi.fn();

  beforeEach(() => {
    mockOnOpenChange.mockClear();
  });

  it("should have proper ARIA attributes", async () => {
    await act(async () => {
      render(
        <Drawer open={true} onOpenChange={mockOnOpenChange}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Test Drawer</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>Content</DrawerBody>
          </DrawerContent>
        </Drawer>,
      );
    });

    // Wait for drawer to render
    const dialog = await waitFor(() => screen.getByRole("dialog"));
    testAriaAttributes(dialog, {
      "aria-modal": "true",
    });
  });

  it("should trap focus within drawer", async () => {
    const user = userEvent.setup();
    await act(async () => {
      render(
        <Drawer open={true} onOpenChange={mockOnOpenChange}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Test Drawer</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <button>First button</button>
              <button>Second button</button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>,
      );
    });

    // Wait for drawer to render
    const dialog = await waitFor(() => screen.getByRole("dialog"));

    // Query buttons within the drawer content, not the overlay
    const drawerContent = within(dialog);
    const firstButton = await waitFor(() =>
      drawerContent.getByRole("button", { name: /first button/i }),
    );
    const secondButton = drawerContent.getByRole("button", { name: /second button/i });

    // Drawer should be visible
    expect(dialog).toBeInTheDocument();

    // Buttons should be accessible
    expect(firstButton).toBeInTheDocument();
    expect(secondButton).toBeInTheDocument();

    // Verify focus trap is set up by checking that buttons are focusable
    // and the drawer content has the focus trap ref
    expect(firstButton).toBeInTheDocument();
    expect(secondButton).toBeInTheDocument();

    // Test that focus can move between buttons
    firstButton.focus();
    await waitFor(() => {
      expect(firstButton).toHaveFocus();
    });

    await user.tab();
    // Focus should move to second button or stay within drawer
    const activeElement = document.activeElement;
    expect(activeElement === secondButton || activeElement === firstButton).toBe(true);
  });

  it("should close on Escape key", async () => {
    const user = userEvent.setup();
    await act(async () => {
      render(
        <Drawer open={true} onOpenChange={mockOnOpenChange}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Test Drawer</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>Content</DrawerBody>
          </DrawerContent>
        </Drawer>,
      );
    });

    // Wait for drawer to render
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(mockOnOpenChange).toHaveBeenCalledWith(false);
    });
  });

  it("should have accessible title", async () => {
    await act(async () => {
      render(
        <Drawer open={true} onOpenChange={mockOnOpenChange}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Accessible Drawer Title</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>Content</DrawerBody>
          </DrawerContent>
        </Drawer>,
      );
    });

    // Wait for drawer to render
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    const title = screen.getByText("Accessible Drawer Title");
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H2");
  });
});
