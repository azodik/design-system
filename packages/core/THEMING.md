# Theming Guide

## Import Options

### 1. With Default Theme (Recommended for most users)

```tsx
import "azodik-ui-core";
// or
import "azodik-ui-core/index.css";
```

This includes:

- All component styles
- Default theme variables (light and dark)
- All tokens and utilities

### 2. Without Default Theme (For custom themes)

```tsx
import "azodik-ui-core/base.css";
// Then import your custom theme
import "./my-custom-theme.css";
```

This includes:

- All component styles
- Base tokens
- **NO default theme variables**

You can then define your own theme:

```css
/* my-custom-theme.css */
:root {
  --color-primary: #your-color;
  --color-background: #your-bg;
  /* ... other variables */
}

[data-theme="dark"] {
  --color-primary: #your-dark-color;
  --color-background: #your-dark-bg;
  /* ... other variables */
}
```

## Theme Variables

The design system uses CSS custom properties for theming. Key variables include:

### Colors

- `--color-primary`
- `--color-primary-hover`
- `--color-primary-light`
- `--color-secondary`
- `--color-background`
- `--color-surface`
- `--color-text`
- `--color-text-secondary`
- `--color-border`

### Typography

- `--font-family-sans`
- `--font-size-sm`, `--font-size-md`, `--font-size-lg`, etc.

### Spacing

- `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`

### Borders

- `--radius-sm`, `--radius-md`, `--radius-lg`

### Shadows

- `--shadow-sm`, `--shadow-md`, `--shadow-lg`

## Dark Mode

The design system supports dark mode via the `data-theme` attribute:

```tsx
// Set dark theme
document.documentElement.setAttribute("data-theme", "dark");

// Set light theme
document.documentElement.setAttribute("data-theme", "light");
```

All theme variables automatically switch based on the `data-theme` attribute.

## Example: Custom Theme

```css
/* custom-theme.css */
:root {
  --color-primary: #6366f1;
  --color-primary-hover: #4f46e5;
  --color-background: #ffffff;
  --color-text: #1f2937;
  --color-surface: #f9fafb;
  --color-border: #e5e7eb;
}

[data-theme="dark"] {
  --color-primary: #818cf8;
  --color-primary-hover: #6366f1;
  --color-background: #111827;
  --color-text: #f9fafb;
  --color-surface: #1f2937;
  --color-border: #374151;
}
```

Then import:

```tsx
import "azodik-ui-core/base.css";
import "./custom-theme.css";
```
