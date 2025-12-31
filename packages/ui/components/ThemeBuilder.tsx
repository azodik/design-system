"use client";
import React, { useState } from "react";
import Card, { CardHeader, CardTitle, CardContent } from "./Card";
import Button from "./Button";
import { Select } from "./Select";
import { useTheme } from "../providers/ThemeProvider";

export interface ThemeBuilderProps {
  onThemeChange?: (theme: ThemeConfig) => void;
}

export interface ThemeConfig {
  defaultTheme: "light" | "dark";
  accentColor: string;
  grayColor: string;
  radius: "none" | "small" | "medium" | "large" | "full";
}

/**
 * Theme Builder Component
 *
 * Visual tool for customizing theme settings
 *
 * @example
 * ```tsx
 * <ThemeBuilder onThemeChange={(theme) => console.log(theme)} />
 * ```
 */
export default function ThemeBuilder({ onThemeChange }: ThemeBuilderProps) {
  const theme = useTheme();
  const [config, setConfig] = useState<ThemeConfig>({
    defaultTheme: theme?.theme || "light",
    accentColor: theme?.accentColor || "indigo",
    grayColor: theme?.grayColor || "gray",
    radius: theme?.radius || "medium",
  });

  const handleChange = (updates: Partial<ThemeConfig>) => {
    const newConfig = { ...config, ...updates };
    setConfig(newConfig);
    onThemeChange?.(newConfig);
  };

  const accentColors = [
    "indigo",
    "ruby",
    "grass",
    "amber",
    "cyan",
    "azodik",
    "gray",
    "crimson",
    "pink",
    "purple",
    "violet",
    "blue",
    "teal",
    "green",
    "lime",
    "yellow",
    "orange",
  ];

  const grayColors = ["gray", "slate", "mauve", "sage", "olive", "sand"];

  const radiusOptions = [
    { value: "none", label: "None" },
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
    { value: "full", label: "Full" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Theme Builder</CardTitle>
      </CardHeader>
      <CardContent style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <div style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
            Default Theme
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Button
              size="sm"
              variant={config.defaultTheme === "light" ? "solid" : "outline"}
              onClick={() => handleChange({ defaultTheme: "light" })}
            >
              Light
            </Button>
            <Button
              size="sm"
              variant={config.defaultTheme === "dark" ? "solid" : "outline"}
              onClick={() => handleChange({ defaultTheme: "dark" })}
            >
              Dark
            </Button>
          </div>
        </div>

        <div>
          <Select
            label="Accent Color"
            options={accentColors.map((color) => ({ value: color, label: color }))}
            value={config.accentColor}
            onChange={(value) => handleChange({ accentColor: value })}
          />
        </div>

        <div>
          <Select
            label="Gray Color"
            options={grayColors.map((color) => ({ value: color, label: color }))}
            value={config.grayColor}
            onChange={(value) => handleChange({ grayColor: value })}
          />
        </div>

        <div>
          <Select
            label="Border Radius"
            options={radiusOptions}
            value={config.radius}
            onChange={(value) => handleChange({ radius: value as ThemeConfig["radius"] })}
          />
        </div>

        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            background: "var(--gray-2)",
            borderRadius: "8px",
          }}
        >
          <h4 style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: 600 }}>Preview</h4>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <Button color={config.accentColor} size="sm">
              Button
            </Button>
            <Button color={config.accentColor} variant="outline" size="sm">
              Outline
            </Button>
            <Button color={config.accentColor} variant="soft" size="sm">
              Soft
            </Button>
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <h4 style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: 600 }}>
            Export Theme
          </h4>
          <pre
            style={{
              padding: "1rem",
              background: "var(--gray-2)",
              borderRadius: "8px",
              fontSize: "0.75rem",
              overflow: "auto",
            }}
          >
            {JSON.stringify(config, null, 2)}
          </pre>
          <Button
            size="sm"
            variant="outline"
            style={{ marginTop: "0.5rem" }}
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(config, null, 2));
            }}
          >
            Copy to Clipboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
