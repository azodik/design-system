import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { ThemeProvider } from "@azodik/ui";
import { LanguageProvider } from "@/providers/LanguageProvider";
// Import base CSS without default theme, then our custom theme
import "azodik-ui-core/base.css";
import "@/styles/theme.css";
import "@/styles/docs.css";
import "@/styles/fonts.css";

import "@/i18n";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider
        defaultTheme="system"
        accentColor="azodik"
        grayColor="slate"
        radius="medium"
        scaling="100%"
      >
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>,
);
