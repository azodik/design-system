# @azodik/ui API Reference

Complete API reference for all components, hooks, and utilities in the `@azodik/ui` package.

## Table of Contents

- [Components](#components)
- [Hooks](#hooks)
- [Utilities](#utilities)
- [Providers](#providers)
- [Types](#types)

---

## Components

### Button

A versatile button component with multiple variants, sizes, and colors.

```tsx
import { Button } from "@azodik/ui";
```

#### Props

| Prop           | Type                                                           | Default    | Description               |
| -------------- | -------------------------------------------------------------- | ---------- | ------------------------- |
| `children`     | `React.ReactNode`                                              | -          | Button content            |
| `variant`      | `"solid" \| "soft" \| "outline" \| "ghost" \| "link"`          | `"solid"`  | Button style variant      |
| `size`         | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                         | `"sm"`     | Button size               |
| `color`        | `"indigo" \| "ruby" \| "grass" \| "amber" \| "cyan" \| string` | `"indigo"` | Button color              |
| `radius`       | `"none" \| "small" \| "medium" \| "large" \| "full"`           | -          | Border radius             |
| `highContrast` | `boolean`                                                      | -          | Enable high contrast mode |
| `loading`      | `boolean`                                                      | `false`    | Show loading spinner      |
| `icon`         | `React.ReactNode`                                              | -          | Icon to display           |
| `disabled`     | `boolean`                                                      | `false`    | Disable button            |
| `onClick`      | `(event: React.MouseEvent<HTMLButtonElement>) => void`         | -          | Click handler             |

#### Example

```tsx
<Button variant="solid" size="md" color="indigo" onClick={handleClick}>
  Click me
</Button>

<Button variant="outline" loading>
  Loading...
</Button>
```

---

### Input

Text input component with validation and error states.

```tsx
import { Input } from "@azodik/ui";
```

#### Props

| Prop           | Type                                               | Default  | Description                               |
| -------------- | -------------------------------------------------- | -------- | ----------------------------------------- |
| `label`        | `string`                                           | -        | Input label                               |
| `id`           | `string`                                           | -        | Input ID (auto-generated if not provided) |
| `type`         | `string`                                           | `"text"` | Input type                                |
| `value`        | `string`                                           | -        | Input value                               |
| `onChange`     | `(e: React.ChangeEvent<HTMLInputElement>) => void` | -        | Change handler                            |
| `placeholder`  | `string`                                           | -        | Placeholder text                          |
| `error`        | `string`                                           | -        | Error message                             |
| `help`         | `string`                                           | -        | Help text                                 |
| `required`     | `boolean`                                          | `false`  | Required field                            |
| `disabled`     | `boolean`                                          | `false`  | Disable input                             |
| `size`         | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`             | `"sm"`   | Input size                                |
| `color`        | `string`                                           | -        | Input color                               |
| `highContrast` | `boolean`                                          | -        | Enable high contrast mode                 |

#### Example

```tsx
<Input
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={errors.email}
  required
/>
```

---

### Modal

Modal dialog component with focus management and keyboard support.

```tsx
import { Modal } from "@azodik/ui";
```

#### Props

| Prop                  | Type                                   | Default | Description               |
| --------------------- | -------------------------------------- | ------- | ------------------------- |
| `isOpen`              | `boolean`                              | -       | Controls modal visibility |
| `onClose`             | `() => void`                           | -       | Close handler             |
| `title`               | `string`                               | -       | Modal title               |
| `children`            | `React.ReactNode`                      | -       | Modal content             |
| `size`                | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"sm"`  | Modal size                |
| `showCloseButton`     | `boolean`                              | `true`  | Show close button         |
| `closeOnOverlayClick` | `boolean`                              | `true`  | Close on overlay click    |
| `closeOnEscape`       | `boolean`                              | `true`  | Close on Escape key       |
| `highContrast`        | `boolean`                              | -       | Enable high contrast mode |

#### Example

```tsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm Action">
  <p>Are you sure you want to proceed?</p>
</Modal>
```

---

### Card

Card component for displaying content in a contained area.

```tsx
import { Card, CardHeader, CardContent, CardFooter } from "@azodik/ui";
```

#### Props

| Prop           | Type                                                 | Default     | Description               |
| -------------- | ---------------------------------------------------- | ----------- | ------------------------- |
| `children`     | `React.ReactNode`                                    | -           | Card content              |
| `variant`      | `"surface" \| "classic" \| "ghost" \| "glass"`       | `"surface"` | Card variant              |
| `size`         | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`               | `"sm"`      | Card size                 |
| `radius`       | `"none" \| "small" \| "medium" \| "large" \| "full"` | -           | Border radius             |
| `highContrast` | `boolean`                                            | -           | Enable high contrast mode |

#### Sub-components

- `CardHeader` - Card header section
- `CardTitle` - Card title
- `CardDescription` - Card description
- `CardContent` - Card main content
- `CardFooter` - Card footer section
- `CardAction` - Card action buttons

#### Example

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

### Select

Dropdown select component with search and keyboard navigation.

```tsx
import { Select } from "@azodik/ui";
```

#### Props

| Prop           | Type                                                              | Default              | Description               |
| -------------- | ----------------------------------------------------------------- | -------------------- | ------------------------- |
| `label`        | `string`                                                          | -                    | Select label              |
| `options`      | `Array<{ value: string; label: string; icon?: React.ReactNode }>` | -                    | Select options            |
| `value`        | `string`                                                          | `""`                 | Selected value            |
| `onChange`     | `(value: string) => void`                                         | -                    | Change handler            |
| `placeholder`  | `string`                                                          | `"Select an option"` | Placeholder text          |
| `error`        | `string`                                                          | -                    | Error message             |
| `help`         | `string`                                                          | -                    | Help text                 |
| `disabled`     | `boolean`                                                         | `false`              | Disable select            |
| `size`         | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                            | `"sm"`               | Select size               |
| `color`        | `string`                                                          | -                    | Select color              |
| `highContrast` | `boolean`                                                         | -                    | Enable high contrast mode |

#### Example

```tsx
<Select
  label="Choose option"
  options={[
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ]}
  value={selected}
  onChange={setSelected}
/>
```

---

### Alert

Alert component for displaying messages and notifications.

```tsx
import { Alert } from "@azodik/ui";
```

#### Props

| Prop           | Type                                          | Default  | Description               |
| -------------- | --------------------------------------------- | -------- | ------------------------- |
| `children`     | `React.ReactNode`                             | -        | Alert content             |
| `variant`      | `"soft" \| "surface" \| "outline" \| "glass"` | `"soft"` | Alert variant             |
| `size`         | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`        | `"sm"`   | Alert size                |
| `color`        | `string`                                      | -        | Alert color               |
| `title`        | `string`                                      | -        | Alert title               |
| `icon`         | `React.ReactNode`                             | -        | Alert icon                |
| `highContrast` | `boolean`                                     | -        | Enable high contrast mode |

#### Example

```tsx
<Alert variant="soft" color="indigo" title="Info">
  This is an informational alert.
</Alert>
```

---

### StatCard

Dashboard stat card component with trend indicators.

```tsx
import { StatCard } from "@azodik/ui";
```

#### Props

| Prop          | Type               | Default | Description                                 |
| ------------- | ------------------ | ------- | ------------------------------------------- |
| `title`       | `string`           | -       | Stat title                                  |
| `value`       | `string \| number` | -       | Stat value                                  |
| `change`      | `number`           | -       | Percentage change                           |
| `trend`       | `"up" \| "down"`   | -       | Trend direction (auto-detected from change) |
| `icon`        | `React.ReactNode`  | -       | Custom icon                                 |
| `description` | `string`           | -       | Description text                            |
| `loading`     | `boolean`          | `false` | Show loading state                          |
| `onClick`     | `() => void`       | -       | Click handler                               |

#### Example

```tsx
<StatCard title="Total Revenue" value="$45,231" change={+12.5} description="vs last month" />
```

---

## Hooks

### useBreakpoint

Hook to detect current breakpoint.

```tsx
import { useBreakpoint } from "@azodik/ui";
```

#### Returns

```typescript
{
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2Xl: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}
```

#### Example

```tsx
const { breakpoint, isMobile } = useBreakpoint();

if (isMobile) {
  // Mobile-specific logic
}
```

---

### useDebounce

Hook to debounce a value.

```tsx
import { useDebounce } from "@azodik/ui";
```

#### Parameters

- `value: T` - Value to debounce
- `delay: number` - Debounce delay in milliseconds (default: 300)

#### Returns

Debounced value

#### Example

```tsx
const [search, setSearch] = useState("");
const debouncedSearch = useDebounce(search, 500);

useEffect(() => {
  // Perform search with debouncedSearch
}, [debouncedSearch]);
```

---

### useReducedMotion

Hook to detect if user prefers reduced motion.

```tsx
import { useReducedMotion } from "@azodik/ui";
```

#### Returns

`boolean` - True if user prefers reduced motion

---

### useHighContrastMode

Hook to detect if user prefers high contrast mode.

```tsx
import { useHighContrastMode } from "@azodik/ui";
```

#### Returns

`boolean` - True if user prefers high contrast mode

---

## Utilities

### breakpoints

Breakpoint constants for responsive design.

```tsx
import { breakpoints } from "@azodik/ui";
```

#### Values

```typescript
{
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
}
```

---

### ResponsiveProp

Type utility for responsive props.

```tsx
import type { ResponsiveProp } from "@azodik/ui";
```

#### Usage

```typescript
type ResponsiveSize = ResponsiveProp<"xs" | "sm" | "md" | "lg" | "xl">;

// Can be:
// - Single value: "md"
// - Object: { base: "sm", md: "lg", xl: "xl" }
```

---

## Providers

### ThemeProvider

Theme provider for the design system.

```tsx
import { ThemeProvider } from "@azodik/ui";
```

#### Props

| Prop           | Type                                                 | Default    | Description   |
| -------------- | ---------------------------------------------------- | ---------- | ------------- |
| `defaultTheme` | `"light" \| "dark"`                                  | `"light"`  | Default theme |
| `accentColor`  | `string`                                             | `"indigo"` | Accent color  |
| `grayColor`    | `string`                                             | `"gray"`   | Gray color    |
| `radius`       | `"none" \| "small" \| "medium" \| "large" \| "full"` | `"medium"` | Border radius |
| `children`     | `React.ReactNode`                                    | -          | App content   |

#### Example

```tsx
<ThemeProvider defaultTheme="dark" accentColor="indigo" grayColor="gray" radius="medium">
  <App />
</ThemeProvider>
```

---

## Types

### SemanticSize

Semantic size type used across components.

```typescript
type SemanticSize = "xs" | "sm" | "md" | "lg" | "xl";
```

---

### ResponsiveProp

Type for responsive props that can be a single value or an object with breakpoint-specific values.

```typescript
type ResponsiveProp<T> =
  | T
  | {
      base?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
      "2xl"?: T;
    };
```

---

## Accessibility

All components follow WCAG 2.1 AA standards and include:

- ✅ Proper ARIA attributes
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader support
- ✅ High contrast mode support
- ✅ Reduced motion support

---

## TypeScript Support

The package is fully typed with TypeScript. All components, hooks, and utilities have comprehensive type definitions.

---

**Last Updated**: 2024
