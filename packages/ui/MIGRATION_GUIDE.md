# Migration Guide

This guide helps you migrate between versions of `@azodik/ui`.

## Table of Contents

- [v0.10.x to v0.11.x](#v010x-to-v011x)
- [Breaking Changes](#breaking-changes)
- [Deprecations](#deprecations)

---

## v0.10.x to v0.11.x

### Size Props Standardization

Size props have been standardized to use semantic sizes (`xs`, `sm`, `md`, `lg`, `xl`) instead of numeric sizes.

#### Before

```tsx
<Button size="2">Click me</Button>
<Input size="3" />
```

#### After

```tsx
<Button size="sm">Click me</Button>
<Input size="md" />
```

**Migration**: Numeric sizes are still supported but deprecated. Update to semantic sizes for better consistency.

---

### Responsive Props

Responsive props now support breakpoint-specific values.

#### Before

```tsx
<Button size="md">Click me</Button>
```

#### After

```tsx
<Button size={{ base: "sm", md: "lg", xl: "xl" }}>Click me</Button>
```

---

### Accessibility Enhancements

All components now have improved accessibility. No breaking changes, but you may want to:

1. **Review ARIA attributes**: Components now have better ARIA support
2. **Test keyboard navigation**: All interactive components support full keyboard navigation
3. **Check focus management**: Modals and dialogs now have proper focus trapping

---

### Theme Provider Updates

The `ThemeProvider` now has improved SSR support and better theme management.

#### Before

```tsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

#### After

```tsx
<ThemeProvider defaultTheme="light" accentColor="indigo" grayColor="gray" radius="medium">
  <App />
</ThemeProvider>
```

**Migration**: The old API still works, but explicit props are recommended for better control.

---

## Breaking Changes

### Removed Components

No components have been removed in recent versions.

### Changed Component APIs

#### Modal

- `size` prop now uses semantic sizes (`xs`, `sm`, `md`, `lg`, `xl`) instead of numeric

#### Select

- `size` prop now uses semantic sizes
- Improved keyboard navigation (no API changes)

---

## Deprecations

### Numeric Sizes

Numeric sizes (`"1"`, `"2"`, `"3"`, `"4"`, `"5"`) are deprecated in favor of semantic sizes (`"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`).

**Timeline**: Will be removed in v0.12.0

**Migration**:

```tsx
// Deprecated
<Button size="2" />

// Recommended
<Button size="sm" />
```

---

## Upgrade Steps

1. **Update package**:

   ```bash
   pnpm add @azodik/ui@latest
   ```

2. **Review size props**: Update any numeric sizes to semantic sizes

3. **Test accessibility**: Verify keyboard navigation and screen reader support

4. **Update theme provider**: Add explicit props if needed

5. **Run tests**: Ensure all tests pass with the new version

---

## Getting Help

If you encounter issues during migration:

1. Check the [API Reference](./API_REFERENCE.md)
2. Review [Component Examples](./README.md)
3. Open an issue on GitHub

---

**Last Updated**: 2024
