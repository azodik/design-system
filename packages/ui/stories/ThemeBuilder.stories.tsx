import type { Meta, StoryObj } from "@storybook/react";
import ThemeBuilder from "../components/ThemeBuilder";

const meta: Meta<typeof ThemeBuilder> = {
  title: "Tools/ThemeBuilder",
  component: ThemeBuilder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThemeBuilder>;

export const Default: Story = {
  args: {
    onThemeChange: (theme) => {
      console.log("Theme changed:", theme);
    },
  },
};
