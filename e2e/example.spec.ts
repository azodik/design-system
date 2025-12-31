import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Component Examples", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load the homepage", async ({ page }) => {
    await expect(page).toHaveTitle(/Azodik/);
  });

  test("should navigate to playground", async ({ page }) => {
    // Navigate to playground if link exists
    const playgroundLink = page.getByRole("link", { name: /playground/i });
    if (await playgroundLink.isVisible()) {
      await playgroundLink.click();
      await expect(page).toHaveURL(/playground/);
    }
  });
});

test.describe("Visual Regression", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("homepage visual snapshot", async ({ page }) => {
    await expect(page).toHaveScreenshot("homepage.png", {
      fullPage: true,
      maxDiffPixels: 100,
    });
  });

  test("button component visual snapshot", async ({ page }) => {
    // Navigate to button docs if available
    await page.goto("/components/button");
    await page.waitForLoadState("networkidle");

    // Take screenshot of button examples
    const buttonSection = page.locator('[data-testid="button-examples"]').first();
    if (await buttonSection.isVisible()) {
      await expect(buttonSection).toHaveScreenshot("button-component.png", {
        maxDiffPixels: 100,
      });
    }
  });
});

test.describe("Accessibility", () => {
  test("should have no accessibility violations on homepage", async ({ page }) => {
    await page.goto("/");

    // Run accessibility tests using axe-core
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("keyboard navigation works", async ({ page }) => {
    await page.goto("/");

    // Test tab navigation
    await page.keyboard.press("Tab");
    const focusedElement = page.locator(":focus");
    await expect(focusedElement).toBeVisible();
  });
});
