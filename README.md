# Design System Monorepo

A modern design system monorepo built with pnpm, Turbo, and TypeScript.

## Structure

```
├── packages/
│   ├── design-system/     # Core CSS design system
│   └── ui/                # React components
├── apps/
│   └── playground/        # Development playground
└── ...
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development server
pnpm dev
```

## Available Scripts

- `pnpm build` - Build all packages
- `pnpm dev` - Start development servers
- `pnpm lint` - Lint all packages
- `pnpm type-check` - Type check all packages
- `pnpm clean` - Clean all build outputs
- `pnpm format` - Format code with Prettier

## Packages

### @design-system/core

The core CSS design system with tokens, components, and utilities.

### @design-system/ui

React components built on top of the core design system.

### @design-system/playground

Development playground for testing components and design system.

## Development

This monorepo uses:
- **pnpm** for package management
- **Turbo** for build orchestration
- **TypeScript** for type safety
- **Vite** for development and building

## Contributing

1. Make your changes
2. Run `pnpm build` to ensure everything builds
3. Run `pnpm type-check` to ensure type safety
4. Test your changes in the playground app
