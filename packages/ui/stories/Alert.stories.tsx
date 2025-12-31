import type { Meta, StoryObj } from "@storybook/react";
import Alert from "../components/Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["soft", "surface", "outline", "glass"],
    },
    color: {
      control: "select",
      options: ["indigo", "ruby", "grass", "amber", "cyan"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: "This is an alert message.",
    variant: "soft",
    color: "indigo",
  },
};

export const WithTitle: Story = {
  args: {
    title: "Alert Title",
    children: "This alert has a title and message.",
    variant: "soft",
    color: "indigo",
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
      <Alert color="indigo" title="Info">
        This is an informational alert.
      </Alert>
      <Alert color="grass" title="Success">
        Operation completed successfully.
      </Alert>
      <Alert color="amber" title="Warning">
        Please review this information.
      </Alert>
      <Alert color="ruby" title="Error">
        An error has occurred.
      </Alert>
      <Alert color="cyan" title="Info">
        This is a cyan alert.
      </Alert>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
      <Alert variant="soft" title="Soft">
        Soft variant alert
      </Alert>
      <Alert variant="surface" title="Surface">
        Surface variant alert
      </Alert>
      <Alert variant="outline" title="Outline">
        Outline variant alert
      </Alert>
      <Alert variant="glass" title="Glass">
        Glass variant alert
      </Alert>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    title: "Alert with Icon",
    icon: "ℹ️",
    children: "This alert includes an icon.",
    variant: "soft",
    color: "indigo",
  },
};
