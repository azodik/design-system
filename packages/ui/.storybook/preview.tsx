import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "../providers/ThemeProvider";
import "../styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: false, // Disabled as design system handles this
          },
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light" accentColor="indigo" grayColor="gray" radius="medium">
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
