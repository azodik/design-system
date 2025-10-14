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
# Install the React components
npm install @azodik/ui

# Install the CSS design system (required)
npm install azodik-ui-core
```

### Basic Usage

```tsx
import React from 'react';
import { Button, Card, Input } from '@azodik/ui';
import 'azodik-ui-core'; // Import the CSS

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

// Secondary button
<Button variant="secondary">Cancel</Button>

// Outline button
<Button variant="outline">Learn More</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Layout Components

#### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@azodik/ui';

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
</Card>
```

#### Navigation
```tsx
import { Navigation, NavItem } from '@azodik/ui';

<Navigation>
  <NavItem href="/home">Home</NavItem>
  <NavItem href="/about">About</NavItem>
  <NavItem href="/contact">Contact</NavItem>
</Navigation>
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
import { Modal, ModalHeader, ModalFooter } from '@azodik/ui';

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
</Modal>
```

#### Toast
```tsx
import { Toast } from '@azodik/ui';

// Show a toast notification
Toast.show({
  title: "Success!",
  message: "Your changes have been saved.",
  type: "success"
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

<Badge variant="primary">New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Error</Badge>
```

#### Avatar
```tsx
import { Avatar, AvatarGroup } from '@azodik/ui';

// Single avatar
<Avatar src="/user.jpg" alt="User" size="lg" />

// Avatar with fallback
<Avatar name="John Doe" size="md" />

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
  SidebarBrand
} from '@azodik/ui';

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
</Sidebar>
```

#### Tabs
```tsx
import { Tabs, TabList, TabTrigger, TabContent } from '@azodik/ui';

<Tabs defaultValue="tab1">
  <TabList>
    <TabTrigger value="tab1">Tab 1</TabTrigger>
    <TabTrigger value="tab2">Tab 2</TabTrigger>
    <TabTrigger value="tab3">Tab 3</TabTrigger>
  </TabList>
  <TabContent value="tab1">Content for tab 1</TabContent>
  <TabContent value="tab2">Content for tab 2</TabContent>
  <TabContent value="tab3">Content for tab 3</TabContent>
</Tabs>
```

#### Breadcrumb
```tsx
import { Breadcrumb } from '@azodik/ui';

<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
  <Breadcrumb.Item>Current Page</Breadcrumb.Item>
</Breadcrumb>
```

### Interactive Components

#### Dialog
```tsx
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from '@azodik/ui';

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
</Dialog>
```

#### Popover
```tsx
import { Popover } from '@azodik/ui';

<Popover>
  <Popover.Trigger asChild>
    <Button>Open Popover</Button>
  </Popover.Trigger>
  <Popover.Content>
    <p>Popover content goes here.</p>
  </Popover.Content>
</Popover>
```

#### Tooltip
```tsx
import { Tooltip } from '@azodik/ui';

<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>
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

### CSS Custom Properties

The design system uses CSS custom properties for easy theming:

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

### Theme Switching

```tsx
// Toggle theme
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}
```

## 🎯 Hooks

### useResponsive

```tsx
import { useResponsive } from '@azodik/ui';

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
<Button size={{ base: "sm", md: "md", lg: "lg" }}>
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
<Button 
  className="my-custom-class"
  style={{ backgroundColor: 'red' }}
  onClick={handleClick}
>
  Custom Button
</Button>
```

## 🛠️ Development

### TypeScript Support

Full TypeScript definitions are included:

```tsx
import { Button, ButtonProps } from '@azodik/ui';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

### Tree Shaking

Import only what you need:

```tsx
// ✅ Good - tree shakeable
import { Button } from '@azodik/ui';

// ❌ Avoid - imports everything
import * as UI from '@azodik/ui';
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
