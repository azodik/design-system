# Azodik Design System

A modern, comprehensive design system built with TypeScript, React, and CSS custom properties. This monorepo provides both CSS-only components and React wrappers for seamless integration.

## 🏗️ Architecture

This is a **monorepo** managed with **pnpm** and **Turbo**, containing:

- **`@azodik/core`** - CSS-only design system with tokens and components
- **`@azodik/ui`** - React components that wrap the core CSS
- **`@azodik/playground`** - Development playground and examples

## 📦 Packages

### `@azodik/core`

CSS-only design system with:

- **Design Tokens**: Colors, typography, spacing, borders, shadows
- **Components**: Button, Card, Alert, Avatar, Badge, Input, Modal, Navigation, Table
- **Utilities**: Layout helpers, responsive utilities
- **Theming**: Light/dark mode support

### `@azodik/ui`

React components with TypeScript support:

- **Button**: Primary, secondary, tertiary variants
- **Card**: Flexible container component
- **useResponsive**: Hook for responsive design and custom media queries

### `@azodik/playground`

Development environment showcasing all components and features.

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

### Using CSS Only

```html
<!-- Import the core CSS -->
<link rel="stylesheet" href="@azodik/core/index.css" />

<!-- Use CSS classes -->
<button class="btn btn-primary">Primary Button</button>
<div class="card">Card Content</div>
```

### Using React Components

```tsx
import { Button, Card, useResponsive } from "@azodik/ui";

function MyComponent() {
  const { deviceType, isMobile } = useResponsive();

  return (
    <div>
      <Button variant="solid">Click me</Button>
      <Card className="mt-md">
        <h2>Card Title</h2>
        <p>Card content</p>
      </Card>
    </div>
  );
}
```

## 🎨 Design Tokens

### Colors

- **Primary**: `#f97316` (Orange)
- **Secondary**: `#ea580c` (Dark Orange)
- **Background**: `#ffffff` (White)
- **Text**: `#111827` (Dark Gray)
- **Surface**: `#f9fafb` (Light Gray)

### Typography

- **Font Family**: Montserrat, system-ui, sans-serif
- **Sizes**: Small (0.875rem), Medium (1rem), Large (1.25rem)

### Spacing

- **XS**: 4px, **SM**: 8px, **MD**: 16px, **LG**: 24px, **XL**: 32px

### Breakpoints

- **Mobile**: `(max-width: 767px)`
- **Tablet**: `(min-width: 768px) and (max-width: 1023px)`
- **Desktop**: `(min-width: 1024px)`

## 🧩 Components

### Button

```tsx
<Button variant="solid">Solid</Button>
<Button variant="soft">Soft</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Card

```tsx
<Card className="p-md">
  <h2>Card Title</h2>
  <p>Card content</p>
</Card>
```

### useResponsive Hook

```tsx
const { deviceType, isMobile, isTablet, isDesktop, matches } = useResponsive();

// Device detection
console.log(deviceType); // 'mobile' | 'tablet' | 'desktop'

// Custom media queries
const isLargeScreen = matches("(min-width: 1440px)");
const isDarkMode = matches("(prefers-color-scheme: dark)");
```

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev                    # Start all dev servers
pnpm -F playground dev      # Start only playground

# Building
pnpm build                  # Build all packages
pnpm -F @azodik/ui build    # Build specific package

# Code Quality
pnpm lint                   # Lint all packages
pnpm type-check            # Type check all packages
pnpm format               # Format code with Prettier

# Cleanup
pnpm clean                # Clean all build artifacts
```

### Project Structure

```
design-system/
├── apps/
│   └── playground/          # Development playground
├── packages/
│   ├── core/               # CSS-only design system
│   │   ├── components/     # CSS component files
│   │   ├── tokens/        # Design tokens
│   │   └── styles/        # Global styles
│   └── ui/                 # React components
│       ├── components/     # React components
│       └── hooks/         # Custom hooks
├── scripts/                # Build and utility scripts
└── turbo.json             # Turbo configuration
```

## 🎯 Features

- ✅ **CSS-First**: Core system works without JavaScript
- ✅ **React Integration**: TypeScript React components
- ✅ **Responsive Design**: Built-in responsive utilities and hooks
- ✅ **Dark Mode**: Automatic theme switching support
- ✅ **TypeScript**: Full type safety
- ✅ **Monorepo**: Efficient development with pnpm + Turbo
- ✅ **Customizable**: Design tokens and CSS custom properties
- ✅ **Accessible**: Semantic HTML and ARIA support

## 📱 Responsive Design

The design system includes comprehensive responsive utilities:

### CSS Classes

```css
.mt-md {
  margin-top: var(--space-md);
}
.p-md {
  padding: var(--space-md);
}
.text-center {
  text-align: center;
}
```

### React Hook

```tsx
const { deviceType, isMobile, matches } = useResponsive();

// Custom breakpoints
const custom = useResponsive({
  mobile: "(max-width: 599px)",
  tablet: "(min-width: 600px) and (max-width: 1199px)",
  desktop: "(min-width: 1200px)",
});
```

## 🌙 Theming

The design system supports both light and dark modes:

```css
/* Light mode (default) */
:root {
  --color-background: #ffffff;
  --color-text: #111827;
}

/* Dark mode */
[data-theme="dark"] {
  --color-background: #0f172a;
  --color-text: #f1f5f9;
}
```

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Support

For questions and support, please open an issue in the repository.
