import React from "react";

export const ThemeScript = () => {
  const script = `
    (function() {
      try {
        var localTheme = localStorage.getItem("azodik-theme");
        var supportDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        if (localTheme === "dark" || (!localTheme && supportDarkMode)) {
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.setAttribute("data-theme", "light");
        }
      } catch (e) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};
