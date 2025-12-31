# Storybook Configuration

This directory contains Storybook configuration for the UI package.

## Running Storybook

```bash
pnpm storybook
```

This will start Storybook on http://localhost:6006

## Building Storybook

```bash
pnpm build-storybook
```

This creates a static build of Storybook in the `storybook-static` directory.

## Writing Stories

Stories are located in the `stories/` directory. Each component should have a corresponding `.stories.tsx` file.

### Example Story

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};
```

## Addons

- **@storybook/addon-essentials**: Core Storybook functionality
- **@storybook/addon-interactions**: Interactive testing
- **@storybook/addon-a11y**: Accessibility testing

## More Information

See [Storybook Documentation](https://storybook.js.org) for more details.
