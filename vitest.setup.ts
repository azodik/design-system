import "@testing-library/jest-dom";
import { afterEach, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";

// Mock window.matchMedia
beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    }),
  });
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});
