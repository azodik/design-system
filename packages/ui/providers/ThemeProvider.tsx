"use client";
import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";

export type Appearance = "inherit" | "light" | "dark";
export type AccentColor = "indigo" | "ruby" | "grass" | "amber" | "cyan" | "azodik" | string;
export type GrayColor = "gray" | "mauve" | "slate" | "sage";
export type Radius = "none" | "small" | "medium" | "large" | "full";

export interface ThemeConfig {
  appearance?: Appearance;
  accentColor?: AccentColor;
  grayColor?: GrayColor;
  radius?: Radius;
  scaling?: string;
}

export interface ThemeProviderProps extends ThemeConfig {
  children: React.ReactNode;
  defaultTheme?: "light" | "dark" | "system";
  storageKey?: string;
  className?: string;
  style?: React.CSSProperties;
}

interface ThemeContextValue {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark" | "system") => void;
  appearance: "light" | "dark" | "system";
  accentColor: AccentColor;
  setAccentColor: (color: AccentColor) => void;
  grayColor: GrayColor;
  setGrayColor: (color: GrayColor) => void;
  radius: Radius;
  setRadius: (radius: Radius) => void;
  scaling: string;
  setScaling: (scaling: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({
  children,
  accentColor: propsAccentColor = "indigo",
  grayColor: propsGrayColor = "gray",
  radius: propsRadius = "medium",
  scaling: propsScaling = "100%",
  defaultTheme = "system",
  storageKey = "azodik-theme",
  className = "",
  style,
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const [internalAppearance, setInternalAppearance] = useState<"light" | "dark" | "system">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(storageKey) as "light" | "dark" | "system" | null;
      if (stored) return stored;
    }
    return defaultTheme;
  });

  const [accentColor, setAccentColor] = useState<AccentColor>(propsAccentColor);
  const [grayColor, setGrayColor] = useState<GrayColor>(propsGrayColor);
  const [radius, setRadius] = useState<Radius>(propsRadius);
  const [scaling, setScaling] = useState<string>(propsScaling);

  const theme = useMemo(() => {
    if (internalAppearance === "system") {
      return typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return internalAppearance;
  }, [internalAppearance]) as "light" | "dark";

  const setTheme = useCallback(
    (newTheme: "light" | "dark" | "system") => {
      // Disable transitions during theme change
      if (typeof document !== "undefined") {
        document.documentElement.classList.add("az-theme-changing");
      }
      
      setInternalAppearance(newTheme);
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, newTheme);
      }
      
      // Re-enable transitions after theme change
      if (typeof window !== "undefined") {
        setTimeout(() => {
          if (typeof document !== "undefined") {
            document.documentElement.classList.remove("az-theme-changing");
          }
        }, 0);
      }
    },
    [storageKey],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync props to state if they change
  useEffect(() => {
    setAccentColor(propsAccentColor);
  }, [propsAccentColor]);
  useEffect(() => {
    setGrayColor(propsGrayColor);
  }, [propsGrayColor]);
  useEffect(() => {
    setRadius(propsRadius);
  }, [propsRadius]);
  useEffect(() => {
    setScaling(propsScaling);
  }, [propsScaling]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    
    // Disable transitions during theme application
    root.classList.add("az-theme-changing");
    root.setAttribute("data-theme", theme);

    // Apply Gray Scale
    const grayClasses = ["az-gray-gray", "az-gray-mauve", "az-gray-slate", "az-gray-sage"];
    root.classList.remove(...grayClasses);
    root.classList.add(`az-gray-${grayColor}`);

    // Apply Accent Class
    const accentClasses = [
      "az-accent-indigo",
      "az-accent-ruby",
      "az-accent-grass",
      "az-accent-amber",
      "az-accent-cyan",
      "az-accent-azodik",
    ];
    root.classList.remove(...accentClasses);

    // Check if accentColor is a named color or a hex code
    if (accentClasses.includes(`az-accent-${accentColor}`)) {
      root.classList.add(`az-accent-${accentColor}`);
      root.style.removeProperty("--accent-9");
    } else {
      // Assume it's a hex code or other CSS color value
      root.style.setProperty("--accent-9", accentColor);
    }

    // Apply Scaling & Radius Factor
    const scalingValue = parseFloat(scaling.replace("%", "")) / 100;
    root.style.setProperty("--scaling", scalingValue.toString());

    const radiusValue =
      radius === "none"
        ? "0"
        : radius === "small"
          ? "0.75"
          : radius === "medium"
            ? "1"
            : radius === "large"
              ? "1.5"
              : "2";
    root.style.setProperty("--radius-factor", radiusValue);
    
    // Re-enable transitions after theme is applied
    requestAnimationFrame(() => {
      root.classList.remove("az-theme-changing");
    });
  }, [theme, grayColor, accentColor, radius, scaling]);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      appearance: internalAppearance,
      accentColor,
      setAccentColor,
      grayColor,
      setGrayColor,
      radius,
      setRadius,
      scaling,
      setScaling,
    }),
    [theme, internalAppearance, accentColor, grayColor, radius, scaling, setTheme],
  );

  const accentClasses = [
    "az-accent-indigo",
    "az-accent-ruby",
    "az-accent-grass",
    "az-accent-amber",
    "az-accent-cyan",
    "az-accent-azodik",
  ];

  // Check if user provided a custom --accent-9 in the style prop
  const hasCustomAccentInStyle = style && typeof style === "object" && "--accent-9" in style;
  const isNamedAccent =
    !hasCustomAccentInStyle && accentClasses.includes(`az-accent-${accentColor}`);

  const wrapperClassName =
    `azodik-theme az-theme-background az-gray-${grayColor} ${isNamedAccent ? `az-accent-${accentColor}` : ""} ${className}`.trim();
  const wrapperStyle = {
    ...(!isNamedAccent &&
      !hasCustomAccentInStyle &&
      ({ "--accent-9": accentColor } as React.CSSProperties)),
    ...style, // User-provided styles should override defaults
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div
        className={wrapperClassName}
        style={wrapperStyle}
        data-theme={mounted ? theme : undefined}
        data-debug="true"
        suppressHydrationWarning
        {...(hasCustomAccentInStyle && { "data-custom-accent": "true" })}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
