import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

function ModalWrapper(args: Story["args"]) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is modal content. You can put anything here.</p>
      </Modal>
    </>
  );
}

function SizesModal() {
  const [size, setSize] = useState<"xs" | "sm" | "md" | "lg" | "xl">("md");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        {(["xs", "sm", "md", "lg", "xl"] as const).map((s) => (
          <Button key={s} size="sm" onClick={() => setSize(s)}>
            {s}
          </Button>
        ))}
      </div>
      <Button onClick={() => setIsOpen(true)}>Open {size} Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={`${size} Modal`} size={size}>
        <p>This is a {size} sized modal.</p>
      </Modal>
    </>
  );
}

function WithContentModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal with Content</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal with Rich Content">
        <div>
          <h3>Section Title</h3>
          <p>This modal contains rich content including headings, paragraphs, and buttons.</p>
          <Button size="sm" style={{ marginTop: "1rem" }}>
            Action Button
          </Button>
        </div>
      </Modal>
    </>
  );
}

export const Default: Story = {
  render: () => <ModalWrapper title="Modal Title" />,
};

export const WithoutTitle: Story = {
  render: () => <ModalWrapper />,
};

export const Sizes: Story = {
  render: () => <SizesModal />,
};

export const WithContent: Story = {
  render: () => <WithContentModal />,
};
