import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/providers/LanguageProvider";
import "azodik-ui-core/index.css";
import "@/styles/theme.css";
import "@/styles/docs.css";
import "@/styles/fonts.css";

import "@/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>,
);
