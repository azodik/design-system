import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Please enter a valid email address",
  },
};

export const WithHelp: Story = {
  args: {
    label: "Password",
    type: "password",
    help: "Must be at least 8 characters",
  },
};

export const Required: Story = {
  args: {
    label: "Required Field",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    value: "Cannot edit",
    disabled: true,
  },
};
