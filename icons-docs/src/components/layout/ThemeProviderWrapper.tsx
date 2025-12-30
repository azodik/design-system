"use client";

import { ThemeProvider } from "@azodik/ui";

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme="system"
      storageKey="azodik-theme"
      accentColor="azodik"
      grayColor="slate"
      radius="medium"
      scaling="100%"
    >
      {children}
    </ThemeProvider>
  );
}
