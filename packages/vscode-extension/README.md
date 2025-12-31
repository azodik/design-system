# Azodik UI IntelliSense

VS Code extension providing IntelliSense, code snippets, and documentation for `@azodik/ui` components.

## Features

- ✅ **IntelliSense**: Auto-completion for @azodik/ui components
- ✅ **Hover Documentation**: Show component documentation on hover
- ✅ **Code Snippets**: Quick snippets for common components
- ✅ **TypeScript Support**: Full TypeScript/TSX support
- ✅ **JavaScript Support**: Works with JavaScript/JSX files

## Installation

### From Source

1. Clone the repository
2. Navigate to `packages/vscode-extension`
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Compile:
   ```bash
   pnpm compile
   ```
5. Package:
   ```bash
   pnpm package
   ```
6. Install the `.vsix` file in VS Code

### From Marketplace (Coming Soon)

The extension will be available on the VS Code Marketplace.

## Usage

### IntelliSense

When typing `import` statements, you'll get auto-completion for all @azodik/ui components:

```typescript
import { Button, Input, Card } from "@azodik/ui";
//     ^^^^^^  ^^^^^  ^^^^ - Auto-completed
```

### Hover Documentation

Hover over any component name to see:

- Component description
- Available props
- Usage example

### Code Snippets

Type the snippet prefix and press `Tab`:

- `az-button` - Button component
- `az-input` - Input component
- `az-card` - Card component
- `az-modal` - Modal component
- `az-alert` - Alert component
- `az-select` - Select component
- `az-import` - Import statement
- `az-theme` - Theme Provider

### Example

Type `az-button` and press `Tab`:

```tsx
<Button variant="solid" size="md" color="indigo" onClick={handleClick}>
  Button Text
</Button>
```

## Configuration

The extension can be configured in VS Code settings:

- `azodik.ui.enableIntelliSense` - Enable/disable IntelliSense (default: true)
- `azodik.ui.showHoverDocs` - Show/hide hover documentation (default: true)

## Supported Components

- Button
- Input
- Card
- Modal
- Alert
- Select
- And more...

## Development

### Building

```bash
pnpm compile
```

### Watching

```bash
pnpm watch
```

### Packaging

```bash
pnpm package
```

## Contributing

Contributions are welcome! Please see the main repository for contribution guidelines.

## License

MIT

---

**Last Updated**: 2024
