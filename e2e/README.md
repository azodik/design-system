# E2E Testing with Playwright

This directory contains end-to-end tests for the design system documentation and components.

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Install Playwright browsers:
   ```bash
   pnpm exec playwright install
   ```

## Running Tests

### Run all tests

```bash
pnpm exec playwright test
```

### Run tests in UI mode

```bash
pnpm exec playwright test --ui
```

### Run specific test file

```bash
pnpm exec playwright test e2e/example.spec.ts
```

### Run visual regression tests

```bash
pnpm exec playwright test --grep "Visual Regression"
```

### Update snapshots

```bash
pnpm exec playwright test --update-snapshots
```

## Test Structure

- **Component Examples**: Tests for component functionality
- **Visual Regression**: Screenshot comparison tests
- **Accessibility**: A11y tests using Playwright's built-in accessibility features

## Writing Tests

### Basic Test

```typescript
import { test, expect } from "@playwright/test";

test("my test", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Azodik/);
});
```

### Visual Regression

```typescript
test("visual snapshot", async ({ page }) => {
  await page.goto("/components/button");
  await expect(page).toHaveScreenshot("button.png");
});
```

### Accessibility

```typescript
test("accessibility", async ({ page }) => {
  await page.goto("/");
  const snapshot = await page.accessibility.snapshot();
  expect(snapshot).toBeTruthy();
});
```

## CI Integration

Tests run automatically in CI. Screenshots and traces are saved on failure.

## More Information

See [Playwright Documentation](https://playwright.dev) for more details.
