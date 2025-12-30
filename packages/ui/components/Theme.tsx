"use client";
import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { useTheme as useGlobalTheme } from "../providers/ThemeProvider";
import { SunIcon, MoonIcon } from "@azodik/icons";
import { Box } from "./Box";

export type ThemeAppearance = "light" | "dark" | "inherit";
export type ThemeAccentColor =
  | "indigo"
  | "ruby"
  | "grass"
  | "amber"
  | "cyan"
  | "azodik"
  | "orange"
  | "mint"
  | "sky"
  | string;
export type ThemeGrayColor = "gray" | "mauve" | "slate" | "sage" | "olive" | "sand";
export type ThemeRadius = "none" | "small" | "medium" | "large" | "full";
export type ThemeScaling = "90%" | "95%" | "100%" | "105%" | "110%";

export interface ThemeContextValue {
  appearance: "light" | "dark";
  accentColor?: ThemeAccentColor;
  grayColor?: ThemeGrayColor;
  radius?: ThemeRadius;
  scaling?: ThemeScaling;
  hasBackground: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  return context;
}

export interface ThemeProps {
  asChild?: boolean;
  className?: string;
  style?: React.CSSProperties;
  appearance?: ThemeAppearance;
  accentColor?: ThemeAccentColor;
  grayColor?: ThemeGrayColor;
  radius?: ThemeRadius;
  scaling?: ThemeScaling;
  hasBackground?: boolean;
  children?: React.ReactNode;
}

/**
 * Theme component for applying Radix-like theming to a subtree.
 */
export function Theme({
  asChild = false,
  className = "",
  style,
  appearance = "inherit",
  accentColor,
  grayColor,
  radius,
  scaling,
  hasBackground = true,
  children,
}: ThemeProps) {
  const globalTheme = useGlobalTheme();
  const parentContext = useThemeContext();

  // Resolve appearance
  const resolvedAppearance = useMemo(() => {
    if (appearance !== "inherit") return appearance;
    if (parentContext) return parentContext.appearance;
    return globalTheme.theme; // Fallback to global
  }, [appearance, parentContext, globalTheme.theme]);

  // Resolve other props (inherit from parent if not provided)
  const resolvedAccent = accentColor || parentContext?.accentColor;
  const resolvedGray = grayColor || parentContext?.grayColor;
  const resolvedRadius = radius || parentContext?.radius;
  const resolvedScaling = scaling || parentContext?.scaling;

  const isNamedAccent =
    resolvedAccent &&
    ["indigo", "ruby", "grass", "amber", "cyan", "azodik", "orange", "mint", "sky"].includes(
      resolvedAccent,
    );
  const isNamedGray =
    resolvedGray && ["gray", "mauve", "slate", "sage", "olive", "sand"].includes(resolvedGray);

  const themeStyle: React.CSSProperties = {
    ...style,
    ...(resolvedAccent && !isNamedAccent && { "--accent-9": resolvedAccent }),
    ...(resolvedScaling && { "--scaling": resolvedScaling.replace("%", "") }),
    ...(resolvedRadius && {
      "--radius-factor":
        resolvedRadius === "none"
          ? "0"
          : resolvedRadius === "small"
            ? "0.75"
            : resolvedRadius === "medium"
              ? "1"
              : resolvedRadius === "large"
                ? "1.5"
                : "2",
    }),
  } as React.CSSProperties;

  const themeClassName = [
    "azodik-theme",
    `azodik-theme-${resolvedAppearance}`,
    isNamedAccent ? `az-accent-${resolvedAccent}` : "",
    isNamedGray ? `az-gray-${resolvedGray}` : "",
    hasBackground ? "az-theme-background" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const contextValue = useMemo(
    () => ({
      appearance: resolvedAppearance,
      accentColor: resolvedAccent,
      grayColor: resolvedGray,
      radius: resolvedRadius,
      scaling: resolvedScaling,
      hasBackground,
    }),
    [
      resolvedAppearance,
      resolvedAccent,
      resolvedGray,
      resolvedRadius,
      resolvedScaling,
      hasBackground,
    ],
  );

  const content = <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;

  if (asChild && React.isValidElement(children)) {
    type ChildProps = Record<string, unknown>;
    const childProps = (children as React.ReactElement<ChildProps>).props || {};
    const childStyle =
      childProps.style && typeof childProps.style === "object" && !Array.isArray(childProps.style)
        ? (childProps.style as React.CSSProperties)
        : {};
    return React.cloneElement(children as React.ReactElement<ChildProps>, {
      ...childProps,
      className: `${childProps.className || ""} ${themeClassName}`.trim(),
      style: { ...childStyle, ...themeStyle },
      "data-theme": resolvedAppearance,
      children: content,
    });
  }

  return (
    <div className={themeClassName} style={themeStyle} data-theme={resolvedAppearance}>
      {content}
    </div>
  );
}

/**
 * ThemeToggle component for switching between light and dark themes
 */
export interface ThemeToggleProps {
  className?: string;
  children?: React.ReactNode;
}

export function ThemeToggle({ className = "", children }: ThemeToggleProps) {
  const { theme, setTheme } = useGlobalTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (children) {
    return (
      <div
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
          }
        }}
        role="button"
        tabIndex={0}
        className={className}
        style={{ cursor: "pointer" }}
      >
        {children}
      </div>
    );
  }

  // Prevent hydration mismatch by rendering a skeleton or a stable state
  if (!mounted) {
    return (
      <button
        className={`theme-toggle ${className}`}
        aria-label="Toggle theme"
        style={{
          padding: "0.5rem",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-2)",
          background: "var(--color-background)",
          color: "var(--color-text)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "36px",
          height: "36px",
          transition: "all 0.2s ease",
          opacity: 0.5,
        }}
      >
        <Box style={{ width: 20, height: 20 }} />
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className={`theme-toggle ${className}`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      style={{
        padding: "0.5rem",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-2)",
        background: "var(--color-background)",
        color: "var(--color-text)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "36px",
        height: "36px",
        transition: "all 0.2s ease",
      }}
    >
      {theme === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
    </button>
  );
}
