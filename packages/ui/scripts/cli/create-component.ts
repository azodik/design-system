#!/usr/bin/env node
/**
 * CLI Tool for creating new components
 *
 * Usage: pnpm create-component ComponentName
 */

import { writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "../..");

interface ComponentTemplate {
  component: string;
  test: string;
  story: string;
}

function toPascalCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[\s_-]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

function generateComponentTemplate(name: string): ComponentTemplate {
  const pascalName = toPascalCase(name);

  const component = `import React from "react";
import { SemanticSize, getSizeClassName } from "../utils/size-variant-mapping";
import { useReducedMotion } from "../utils/reduced-motion";
import { useHighContrastMode } from "../utils/high-contrast";

export interface ${pascalName}Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: SemanticSize;
  highContrast?: boolean;
}

/**
 * ${pascalName} component
 *
 * @example
 * \`\`\`tsx
 * <${pascalName} size="md">
 *   Content
 * </${pascalName}>
 * \`\`\`
 */
export default function ${pascalName}({
  children,
  size = "sm",
  highContrast: propHighContrast,
  className = "",
  style,
  ...props
}: ${pascalName}Props) {
  const reducedMotion = useReducedMotion();
  const systemHighContrast = useHighContrastMode();
  const highContrast = propHighContrast ?? systemHighContrast;
  const sizeClassName = getSizeClassName(size);

  const combinedClassName = [
    "az-${pascalName}",
    sizeClassName,
    highContrast ? "az-high-contrast" : "",
    reducedMotion ? "az-reduced-motion" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={combinedClassName}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
`;

  const test = `import { describe, it, expect } from "vitest";
import { render, screen } from "./test-utils";
import ${pascalName} from "../${pascalName}";

describe("${pascalName}", () => {
  it("renders with children", () => {
    render(<${pascalName}>Test content</${pascalName}>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies size class", () => {
    const { container } = render(<${pascalName} size="lg">Test</${pascalName}>);
    const element = container.querySelector(".az-${pascalName}");
    expect(element).toBeInTheDocument();
  });
});
`;

  const story = `import type { Meta, StoryObj } from "@storybook/react";
import ${pascalName} from "../components/${pascalName}";

const meta: Meta<typeof ${pascalName}> = {
  title: "Components/${pascalName}",
  component: ${pascalName},
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
type Story = StoryObj<typeof ${pascalName}>;

export const Default: Story = {
  args: {
    children: "${pascalName} content",
    size: "sm",
  },
};
`;

  return { component, test, story };
}

function createComponent(name: string): void {
  if (!name) {
    console.error("Error: Component name is required");
    console.log("Usage: pnpm create-component ComponentName");
    process.exit(1);
  }

  const pascalName = toPascalCase(name);
  const componentDir = join(rootDir, "components");
  const testDir = join(rootDir, "components/__tests__");
  const storyDir = join(rootDir, "stories");

  // Check if component already exists
  const componentPath = join(componentDir, `${pascalName}.tsx`);
  if (existsSync(componentPath)) {
    console.error(`Error: Component ${pascalName} already exists at ${componentPath}`);
    process.exit(1);
  }

  const templates = generateComponentTemplate(name);

  // Create component file
  writeFileSync(componentPath, templates.component);
  console.log(`✅ Created component: ${componentPath}`);

  // Create test file
  const testPath = join(testDir, `${pascalName}.test.tsx`);
  writeFileSync(testPath, templates.test);
  console.log(`✅ Created test: ${testPath}`);

  // Create story file
  const storyPath = join(storyDir, `${pascalName}.stories.tsx`);
  writeFileSync(storyPath, templates.story);
  console.log(`✅ Created story: ${storyPath}`);

  console.log(`\n🎉 Component ${pascalName} created successfully!`);
  console.log(`\nNext steps:`);
  console.log(`1. Add styles for .az-${pascalName} in packages/core/components/`);
  console.log(`2. Export ${pascalName} from packages/ui/index.ts`);
  console.log(`3. Run tests: pnpm test`);
  console.log(`4. View in Storybook: pnpm storybook`);
}

// Get component name from command line arguments
const componentName = process.argv[2];

if (!componentName) {
  console.error("Error: Component name is required");
  console.log("Usage: pnpm create-component ComponentName");
  process.exit(1);
}

createComponent(componentName);
