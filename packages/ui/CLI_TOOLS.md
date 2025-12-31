# CLI Tools

This document outlines CLI tools for scaffolding and code generation (planned feature).

## Planned Features

### Component Generator

Generate new components with boilerplate code:

```bash
pnpm create-component Button
```

This would create:

- Component file with TypeScript
- Test file
- Storybook story
- Documentation

### Theme Generator

Generate theme configurations:

```bash
pnpm create-theme my-theme --colors indigo,blue --radius medium
```

### Project Scaffold

Scaffold a new project using the design system:

```bash
pnpm create-azodik-app my-app
```

## Implementation Status

**Status**: Planned

CLI tools are planned for future implementation. For now, you can:

1. Use the existing component structure as a template
2. Copy from existing components
3. Use the Storybook playground for testing

## Future Implementation

When implemented, CLI tools will be available as:

- `@azodik/cli` - Standalone CLI package
- `pnpm create-azodik-app` - Create React app template
- VS Code snippets - Code snippets for components

---

**Last Updated**: 2024
