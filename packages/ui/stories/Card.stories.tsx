import type { Meta, StoryObj } from "@storybook/react";
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/Card";
import Button from "../components/Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["surface", "classic", "ghost", "glass"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Card content",
    variant: "surface",
    size: "sm",
  },
};

export const WithHeader: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card.</p>
      </CardContent>
    </Card>
  ),
};

export const Complete: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Complete Card</CardTitle>
        <CardDescription>Card with all sections</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card includes a header, content, and footer.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Card variant="surface">
        <CardContent>Surface</CardContent>
      </Card>
      <Card variant="classic">
        <CardContent>Classic</CardContent>
      </Card>
      <Card variant="ghost">
        <CardContent>Ghost</CardContent>
      </Card>
      <Card variant="glass">
        <CardContent>Glass</CardContent>
      </Card>
    </div>
  ),
};
