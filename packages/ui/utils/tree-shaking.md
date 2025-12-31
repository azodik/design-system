# Tree Shaking Guide

This design system is fully tree-shakeable. This means you can import only the components and utilities you need, and unused code will be automatically removed during the build process.

## How Tree Shaking Works

Tree shaking is a dead code elimination technique that removes unused exports from your bundle. It works best when:

1. **ES Modules are used** - The design system uses ES modules (`import`/`export`)
2. **Side-effect free** - Components don't have side effects at the module level
3. **Named exports** - Use named exports for better tree shaking

## Import Patterns

### ✅ Good - Tree-shakeable

```typescript
// Import only what you need
import { Button, Input } from "@azodik/ui";

// Import specific utilities
import { useDebounce, useBreakpoint } from "@azodik/ui";
```

### ❌ Bad - Not tree-shakeable

```typescript
// Don't import the entire package
import * as UI from "@azodik/ui";

// Don't use default imports for everything
import UI from "@azodik/ui";
```

## Component Imports

All components are exported as named exports and can be imported individually:

```typescript
import { Button, Card, Modal, Input } from "@azodik/ui";
```

## Hook Imports

All hooks are exported individually:

```typescript
import { useDebounce, useBreakpoint, useResponsive } from "@azodik/ui";
```

## Utility Imports

Utilities are organized by category and can be imported individually:

```typescript
// Spacing utilities
import { getSpacing, getMargin, getPadding } from "@azodik/ui";

// Typography utilities
import { getFontSize, getLineHeight } from "@azodik/ui";

// Theme utilities
import { generateTheme, applyThemeVariant } from "@azodik/ui";
```

## CSS Imports

The CSS is also modular. You can import only the CSS you need:

```typescript
// Import all styles
import "@azodik/core/index.css";

// Or import specific component styles (if using CSS modules)
import "@azodik/core/components/button.css";
```

## Build Tool Configuration

### Webpack

Webpack 4+ supports tree shaking by default when using ES modules. Ensure your `package.json` has:

```json
{
  "sideEffects": false
}
```

Or specify files with side effects:

```json
{
  "sideEffects": ["*.css", "*.scss"]
}
```

### Vite

Vite supports tree shaking out of the box. No additional configuration needed.

### Rollup

Rollup has excellent tree shaking support. Ensure you're using ES modules:

```javascript
export default {
  input: "src/index.js",
  output: {
    file: "bundle.js",
    format: "es",
  },
};
```

### Parcel

Parcel 2+ supports tree shaking automatically when using ES modules.

## Verifying Tree Shaking

### Bundle Analysis

Use bundle analysis tools to verify tree shaking is working:

```bash
# Using webpack-bundle-analyzer
npm install --save-dev webpack-bundle-analyzer

# Using rollup-plugin-visualizer
npm install --save-dev rollup-plugin-visualizer
```

### Check Bundle Size

Compare bundle sizes:

```typescript
// Small bundle - only Button
import { Button } from "@azodik/ui";

// Larger bundle - multiple components
import { Button, Card, Modal, Input, Select } from "@azodik/ui";
```

## Best Practices

1. **Import only what you need** - Don't import entire categories
2. **Use named imports** - Better for tree shaking than default imports
3. **Avoid barrel imports** - Import directly from component files when possible
4. **Check your bundle** - Use bundle analyzers to verify tree shaking

## Example

```typescript
// ✅ Good - Only imports Button
import { Button } from "@azodik/ui";

// ✅ Good - Only imports specific hooks
import { useDebounce, useBreakpoint } from "@azodik/ui";

// ❌ Bad - Imports everything
import * as UI from "@azodik/ui";
```

## Notes

- CSS files are not tree-shakeable by default, but you can use CSS modules or CSS-in-JS for better optimization
- Some utilities may have dependencies, but they're kept minimal
- All components are side-effect free at the module level
