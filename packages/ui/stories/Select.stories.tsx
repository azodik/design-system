import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components/Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      control: "select",
      options: ["indigo", "ruby", "grass", "amber", "cyan"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
];

export const Default: Story = {
  args: {
    label: "Choose an option",
    options,
    placeholder: "Select...",
  },
};

export const WithValue: Story = {
  args: {
    label: "Selected Option",
    options,
    value: "2",
  },
};

export const WithError: Story = {
  args: {
    label: "Select with Error",
    options,
    error: "Please select an option",
  },
};

export const WithHelp: Story = {
  args: {
    label: "Select with Help",
    options,
    help: "Choose the best option for your needs",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Select",
    options,
    disabled: true,
    value: "1",
  },
};

export const ManyOptions: Story = {
  args: {
    label: "Many Options",
    options: Array.from({ length: 20 }, (_, i) => ({
      value: String(i + 1),
      label: `Option ${i + 1}`,
    })),
    placeholder: "Select from many options...",
  },
};
