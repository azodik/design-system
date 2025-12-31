# 🎨 @azodik/ui

A modern, accessible React component library built with TypeScript, featuring a beautiful orange color palette, dark/light mode support, and comprehensive design system integration.

## ✨ Features

- **🎨 Modern Design** - Beautiful orange color palette with dark/light mode
- **⚡ TypeScript First** - Full TypeScript support with comprehensive type definitions
- **♿ Accessible** - Built with accessibility in mind using modern patterns
- **📱 Responsive** - Mobile-first responsive design
- **🎯 Tree Shakeable** - Import only what you need
- **🔧 Customizable** - Easy to customize with CSS custom properties
- **📦 Lightweight** - Optimized bundle size

## 🚀 Quick Start

### Installation

```bash
# Install the React components (includes CSS automatically)
npm install @azodik/ui
```

### Basic Usage

**Standard Installation with ThemeProvider (Recommended)**

```tsx
import React from "react";
import { ThemeProvider, Button, Card, Input } from "@azodik/ui";
import "@azodik/ui/styles.css"; // Import CSS (includes default theme)

function App() {
  return (
    <ThemeProvider defaultTheme="light" accentColor="#f97316">
      <Card>
        <h2>Welcome to Azodik UI</h2>
        <Input placeholder="Enter your name" />
        <Button>Get Started</Button>
      </Card>
    </ThemeProvider>
  );
}

export default App;
```

**With Custom Theme Configuration**

```tsx
import React from "react";
import { ThemeProvider, Button, Card, Input } from "@azodik/ui";
import "@azodik/ui/styles.css";

function App() {
  const themeConfig = {
    primary: "#f97316",
    primaryHover: "#ea580c",
    background: "#ffffff",
    text: "#111827",
    // ... more theme tokens
  };

  return (
    <ThemeProvider defaultTheme="light" config={themeConfig}>
      <Card>
        <h2>Welcome to Azodik UI</h2>
        <Input placeholder="Enter your name" />
        <Button>Get Started</Button>
      </Card>
    </ThemeProvider>
  );
}

export default App;
```

**With System Theme Detection**

```tsx
import React from "react";
import { ThemeProvider, Button, Card, Input } from "@azodik/ui";
import "@azodik/ui/styles.css";

function App() {
  return (
    <ThemeProvider defaultTheme="system" accentColor="#f97316">
      <Card>
        <h2>Welcome to Azodik UI</h2>
        <Input placeholder="Enter your name" />
        <Button>Get Started</Button>
      </Card>
    </ThemeProvider>
  );
}

export default App;
```

**Legacy Usage (Without ThemeProvider)**

```tsx
import React from "react";
import { Button, Card, Input } from "@azodik/ui";
import "@azodik/ui/styles.css"; // Import CSS (includes default theme)

function App() {
  return (
    <div>
      <Card>
        <h2>Welcome to Azodik UI</h2>
        <Input placeholder="Enter your name" />
        <Button>Get Started</Button>
      </Card>
    </div>
  );
}

export default App;
```

## 🧩 Components

### Form Components

#### Input

```tsx
import { Input, Textarea, Select, Checkbox, Radio, Switch } from '@azodik/ui';

// Text input
<Input placeholder="Enter text" />

// Textarea
<Textarea placeholder="Enter message" rows={4} />

// Select dropdown
<Select>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</Select>

// Form controls
<Checkbox label="I agree to terms" />
<Radio name="choice" value="option1" label="Option 1" />
<Switch label="Enable notifications" />
```

#### Button

```tsx
import { Button } from '@azodik/ui';

// Primary button
<Button>Click me</Button>

// Soft variant button
<Button variant="soft">Cancel</Button>

// Outline button
<Button variant="outline">Learn More</Button>

// Different sizes
<Button size="1">Small</Button>
<Button size="3">Large</Button>
```

### Layout Components

#### Card

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@azodik/ui";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>;
```

#### Navigation

```tsx
import { Navigation, NavItem } from "@azodik/ui";

<Navigation>
  <NavItem href="/home">Home</NavItem>
  <NavItem href="/about">About</NavItem>
  <NavItem href="/contact">Contact</NavItem>
</Navigation>;
```

### Feedback Components

#### Alert

```tsx
import { Alert } from '@azodik/ui';

<Alert type="success">
  Success! Your action was completed.
</Alert>

<Alert type="error">
  Error! Something went wrong.
</Alert>

<Alert type="warning">
  Warning! Please check your input.
</Alert>

<Alert type="info">
  Info! Here's some helpful information.
</Alert>
```

#### Modal

```tsx
import { Modal, ModalHeader, ModalFooter } from "@azodik/ui";

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <ModalHeader>
    <h2>Modal Title</h2>
  </ModalHeader>
  <div>
    <p>Modal content goes here.</p>
  </div>
  <ModalFooter>
    <Button onClick={() => setIsOpen(false)}>Close</Button>
  </ModalFooter>
</Modal>;
```

#### Toast

```tsx
import { Toast } from "@azodik/ui";

// Show a toast notification
Toast.show({
  title: "Success!",
  message: "Your changes have been saved.",
  type: "success",
});
```

### Data Display Components

#### Table

```tsx
import { Table, TableHeader, TableBody, TableRow, TableCell, DataTable } from '@azodik/ui';

// Simple table
<Table>
  <TableHeader>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Email</TableCell>
      <TableCell>Status</TableCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>

// Data table with sorting and pagination
<DataTable
  data={users}
  columns={columns}
  onSort={handleSort}
  onPageChange={handlePageChange}
/>
```

#### Badge

```tsx
import { Badge } from '@azodik/ui';

<Badge variant="solid" color="indigo">New</Badge>
<Badge variant="solid" color="grass">Active</Badge>
<Badge variant="solid" color="amber">Pending</Badge>
<Badge variant="solid" color="ruby">Error</Badge>
```

#### Avatar

```tsx
import { Avatar, AvatarGroup } from '@azodik/ui';

// Single avatar
<Avatar src="/user.jpg" alt="User" size="4" />

// Avatar with fallback
<Avatar name="John Doe" size="3" />

// Avatar group
<AvatarGroup>
  <Avatar src="/user1.jpg" />
  <Avatar src="/user2.jpg" />
  <Avatar src="/user3.jpg" />
  <Avatar name="+5" />
</AvatarGroup>
```

### Navigation Components

#### Sidebar

```tsx
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarItem,
  SidebarBrand,
} from "@azodik/ui";

<Sidebar>
  <SidebarHeader>
    <SidebarBrand>
      <h2>My App</h2>
    </SidebarBrand>
  </SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarItem href="/dashboard">Dashboard</SidebarItem>
      <SidebarItem href="/users">Users</SidebarItem>
      <SidebarItem href="/settings">Settings</SidebarItem>
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>
    <SidebarItem href="/profile">Profile</SidebarItem>
  </SidebarFooter>
</Sidebar>;
```

#### Tabs

```tsx
import { Tabs, TabList, TabTrigger, TabContent } from "@azodik/ui";

<Tabs defaultValue="tab1">
  <TabList>
    <TabTrigger value="tab1">Tab 1</TabTrigger>
    <TabTrigger value="tab2">Tab 2</TabTrigger>
    <TabTrigger value="tab3">Tab 3</TabTrigger>
  </TabList>
  <TabContent value="tab1">Content for tab 1</TabContent>
  <TabContent value="tab2">Content for tab 2</TabContent>
  <TabContent value="tab3">Content for tab 3</TabContent>
</Tabs>;
```

#### Breadcrumb

```tsx
import { Breadcrumb } from "@azodik/ui";

<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
  <Breadcrumb.Item>Current Page</Breadcrumb.Item>
</Breadcrumb>;
```

### Interactive Components

#### Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@azodik/ui";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <p>Dialog content goes here.</p>
  </DialogContent>
</Dialog>;
```

#### Popover

```tsx
import { Popover } from "@azodik/ui";

<Popover>
  <Popover.Trigger asChild>
    <Button>Open Popover</Button>
  </Popover.Trigger>
  <Popover.Content>
    <p>Popover content goes here.</p>
  </Popover.Content>
</Popover>;
```

#### Tooltip

```tsx
import { Tooltip } from "@azodik/ui";

<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>;
```

### Charts

```tsx
import { LineChart, AreaChart, BarChart, PieChart } from '@azodik/ui';

const data = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 150 },
  { name: 'Mar', value: 200 },
];

<LineChart data={data} />
<AreaChart data={data} />
<BarChart data={data} />
<PieChart data={data} />
```

## 🎨 Theming

### ThemeProvider

The `ThemeProvider` component is the recommended way to set up theming in your application. It provides theme configuration, theme switching, and system theme detection.

#### Basic ThemeProvider Usage

```tsx
import { ThemeProvider } from "@azodik/ui";

function App() {
  return (
    <ThemeProvider defaultTheme="light" accentColor="#f97316">
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

#### ThemeProvider with Custom Configuration

```tsx
import { ThemeProvider } from "@azodik/ui";

function App() {
  const themeConfig = {
    primary: "#f97316",
    primaryHover: "#ea580c",
    primaryLight: "#fff7ed",
    secondary: "#ea580c",
    background: "#ffffff",
    surface: "#f9fafb",
    text: "#111827",
    textSecondary: "#6b7280",
    border: "#e5e7eb",
    radiusMd: "8px",
    shadowMd: "0 4px 6px rgba(0, 0, 0, 0.1)",
    // ... more tokens
  };

  return (
    <ThemeProvider defaultTheme="light" config={themeConfig}>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

#### Preventing Theme Flicker in SSR (Next.js, Remix, etc.)

To prevent theme flicker on page load in SSR environments, add a blocking script in your HTML `<head>` before React hydrates:

**Next.js App Router (app/layout.tsx):**

```tsx
import { getThemeScript } from "@azodik/ui/server";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: getThemeScript({
              storageKey: "azodik-theme",
              defaultTheme: "system",
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

**Next.js Pages Router (\_document.tsx):**

```tsx
import { Html, Head, Main, NextScript } from "next/document";
import { getThemeScript } from "@azodik/ui/server";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: getThemeScript({
              storageKey: "azodik-theme",
              defaultTheme: "system",
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

**Plain HTML:**

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      (function () {
        try {
          const storageKey = "azodik-theme";
          const stored = localStorage.getItem(storageKey);
          const defaultTheme = "system";
          let theme = stored || defaultTheme;

          if (theme === "system") {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            theme = prefersDark ? "dark" : "light";
          }

          document.documentElement.setAttribute("data-theme", theme);
          document.documentElement.classList.add("az-theme-initialized");
        } catch (e) {
          document.documentElement.setAttribute("data-theme", "light");
          document.documentElement.classList.add("az-theme-initialized");
        }
      })();
    </script>
  </head>
  <body>
    <!-- Your app -->
  </body>
</html>
```

**Important:** Make sure the `storageKey` and `defaultTheme` in the script match your `ThemeProvider` props!

#### Theme Switching with useTheme Hook

```tsx
import { ThemeProvider, useTheme, Button } from "@azodik/ui";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </Button>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <ThemeSwitcher />
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

#### Using Theme Component for Local Theme Changes

```tsx
import { ThemeProvider, Theme, Button } from "@azodik/ui";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      {/* Default theme */}
      <Button>Default Theme Button</Button>

      {/* Local theme override */}
      <Theme accentColor="#3b82f6" appearance="dark">
        <Button>Blue Dark Theme Button</Button>
      </Theme>

      {/* Another local theme */}
      <Theme accentColor="#10b981">
        <Button>Green Theme Button</Button>
      </Theme>
    </ThemeProvider>
  );
}
```

#### ThemeToggle Component

```tsx
import { ThemeProvider, ThemeToggle } from "@azodik/ui";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <ThemeToggle />
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

### CSS Custom Properties

The design system uses CSS custom properties for easy theming. When using `ThemeProvider`, these are automatically applied:

```css
:root {
  --color-primary: #f97316;
  --color-background: #ffffff;
  --color-text: #111827;
  /* ... more tokens */
}

[data-theme="dark"] {
  --color-background: #0f172a;
  --color-text: #f1f5f9;
  /* ... dark mode tokens */
}
```

### Manual Theme Switching (Without ThemeProvider)

```tsx
// Toggle theme manually
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("azodik-theme", newTheme);
}
```

## 🎯 Hooks

### useResponsive

```tsx
import { useResponsive } from "@azodik/ui";

function MyComponent() {
  const { isMobile, isTablet, isDesktop, deviceType } = useResponsive();

  return (
    <div>
      {isMobile && <MobileLayout />}
      {isTablet && <TabletLayout />}
      {isDesktop && <DesktopLayout />}
    </div>
  );
}
```

## 📱 Responsive Design

All components are mobile-first and responsive:

```tsx
// Components automatically adapt to screen size
<Button size={{ base: "1", md: "2", lg: "3" }}>
  Responsive Button
</Button>

<Card className="w-full md:w-1/2 lg:w-1/3">
  Responsive Card
</Card>
```

## 🎨 Customization

### CSS Classes

All components use CSS classes that can be customized:

```css
/* Custom button styles */
.btn-primary {
  background: var(--color-primary);
  color: white;
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-md);
}

/* Custom card styles */
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
```

### Component Props

All components accept standard HTML attributes and custom props:

```tsx
<Button className="my-custom-class" style={{ backgroundColor: "red" }} onClick={handleClick}>
  Custom Button
</Button>
```

## 🛠️ Development

### TypeScript Support

Full TypeScript definitions are included:

```tsx
import { Button, ButtonProps } from "@azodik/ui";

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

### Tree Shaking

Import only what you need:

```tsx
// ✅ Good - tree shakeable
import { Button } from "@azodik/ui";

// ❌ Avoid - imports everything
import * as UI from "@azodik/ui";
```

## 📦 Bundle Size

- **Core CSS**: ~19KB (gzipped)
- **React Components**: ~35KB (gzipped)
- **Tree Shakeable**: Import only what you use

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Links

- **npm Package**: https://www.npmjs.com/package/@azodik/ui
- **CSS Package**: https://www.npmjs.com/package/azodik-ui-core
- **Repository**: https://github.com/azodik/design-system
- **Issues**: https://github.com/azodik/design-system/issues

---

**Built with ❤️ using React, TypeScript, and modern design principles.**
