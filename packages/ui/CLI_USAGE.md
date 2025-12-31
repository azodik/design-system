# CLI Tools Usage Guide

This guide explains how to use the CLI tools for scaffolding and code generation.

## Component Generator

Generate a new component with boilerplate code, tests, and Storybook story.

### Usage

```bash
cd packages/ui
pnpm create-component ComponentName
```

### Example

```bash
pnpm create-component MyComponent
```

This will create:

- `components/MyComponent.tsx` - Component file
- `components/__tests__/MyComponent.test.tsx` - Test file
- `stories/MyComponent.stories.tsx` - Storybook story

### Generated Files

#### Component File

- TypeScript component with proper types
- Size variants support
- High contrast mode support
- Reduced motion support
- Proper className handling

#### Test File

- Basic rendering test
- Size variant test
- Uses test utilities

#### Story File

- Default story
- Size controls
- Auto-documentation enabled

### Next Steps

After creating a component:

1. **Add Styles**: Add CSS for `.az-ComponentName` in `packages/core/components/`
2. **Export Component**: Add export to `packages/ui/index.ts`
3. **Run Tests**: `pnpm test` to verify tests pass
4. **View in Storybook**: `pnpm storybook` to see the component

### Component Name Format

The CLI accepts component names in various formats:

- `MyComponent` → `MyComponent`
- `my-component` → `MyComponent`
- `my_component` → `MyComponent`
- `myComponent` → `MyComponent`

All formats are converted to PascalCase for the component name.

## Future CLI Tools

### Theme Generator (Planned)

```bash
pnpm create-theme my-theme --colors indigo,blue --radius medium
```

### Project Scaffold (Planned)

```bash
pnpm create-azodik-app my-app
```

## Troubleshooting

### Component Already Exists

If you get an error that the component already exists, either:

- Use a different name
- Delete the existing component files
- Manually modify the existing component

### TypeScript Errors

If you see TypeScript errors:

1. Run `pnpm type-check` to see all errors
2. Ensure all imports are correct
3. Check that utility types are imported correctly

---

**Last Updated**: 2024
