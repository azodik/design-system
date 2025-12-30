"use client";

import { useState } from "react";
import { Box, Button, Flex, Input } from "@azodik/ui";
import type { IconInfo, DownloadOptions, IconFormat, IconStyle, IconColor } from "@/types/icon";

interface DownloadPanelProps {
  icon: IconInfo;
  options: DownloadOptions;
  onOptionsChange: (options: DownloadOptions) => void;
  onDownload: () => Promise<void>;
}

export default function DownloadPanel({
  icon: _icon,
  options,
  onOptionsChange,
  onDownload,
}: DownloadPanelProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await onDownload();
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const updateOption = <K extends keyof DownloadOptions>(key: K, value: DownloadOptions[K]) => {
    onOptionsChange({ ...options, [key]: value });
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <Box>
        <Box
          as="label"
          style={{
            display: "block",
            fontSize: "0.875rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            color: "var(--color-text)",
          }}
        >
          Format
        </Box>
        <Flex gap="2">
          {(["svg", "png"] as IconFormat[]).map((format) => (
            <Button
              key={format}
              variant={options.format === format ? "solid" : "outline"}
              onClick={() => updateOption("format", format)}
              style={{ textTransform: "uppercase" }}
            >
              {format}
            </Button>
          ))}
        </Flex>
      </Box>

      <Box>
        <Box
          as="label"
          style={{
            display: "block",
            fontSize: "0.875rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            color: "var(--color-text)",
          }}
        >
          Style
        </Box>
        <Flex gap="2" wrap="wrap">
          {(["solid", "outline", "duotone"] as IconStyle[]).map((style) => (
            <Button
              key={style}
              variant={options.style === style ? "solid" : "outline"}
              onClick={() => updateOption("style", style)}
              style={{ textTransform: "capitalize" }}
            >
              {style}
            </Button>
          ))}
        </Flex>
      </Box>

      <Box>
        <Box
          as="label"
          style={{
            display: "block",
            fontSize: "0.875rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            color: "var(--color-text)",
          }}
        >
          Color
        </Box>
        <Flex
          gap="2"
          wrap="wrap"
          style={{ marginBottom: options.color === "custom" ? "1rem" : "0" }}
        >
          {(["default", "primary", "secondary", "accent", "custom"] as IconColor[]).map((color) => (
            <Button
              key={color}
              variant={options.color === color ? "solid" : "outline"}
              onClick={() => {
                if (color === "custom" && !options.customColor) {
                  // Initialize customColor when switching to custom
                  updateOption("color", color);
                  updateOption("customColor", "#000000");
                } else {
                  updateOption("color", color);
                }
              }}
              style={{ textTransform: "capitalize" }}
            >
              {color}
            </Button>
          ))}
        </Flex>
        {options.color === "custom" && (
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-3)",
            }}
          >
            <Box
              style={{
                position: "relative",
                width: "3rem",
                height: "3rem",
                borderRadius: "var(--radius-2)",
                background: options.customColor || "#000000",
                border: "2px solid var(--color-border)",
                cursor: "pointer",
                flexShrink: 0,
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
              }}
              onClick={() => {
                const input = document.getElementById("color-picker-input") as HTMLInputElement;
                if (input) {
                  input.click();
                }
              }}
            >
              <input
                id="color-picker-input"
                type="color"
                value={options.customColor || "#000000"}
                onChange={(e) => {
                  const newColor = e.target.value.toUpperCase();
                  updateOption("customColor", newColor);
                }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                  padding: 0,
                  border: "none",
                  top: 0,
                  left: 0,
                }}
              />
            </Box>
            <Box style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <Input
                type="text"
                value={options.customColor || "#000000"}
                onChange={(e) => {
                  const value = e.target.value;
                  // Allow partial input while typing
                  if (/^#[0-9A-Fa-f]{0,6}$/.test(value) || value === "") {
                    const finalValue =
                      value === "" ? "#000000" : value.length === 1 ? `#${value}` : value;
                    updateOption("customColor", finalValue);
                  }
                }}
                onBlur={(e) => {
                  // Ensure valid hex on blur
                  const value = e.target.value;
                  if (!/^#[0-9A-Fa-f]{6}$/.test(value)) {
                    // If invalid, try to fix it or default
                    const cleaned = value.replace(/[^0-9A-Fa-f]/g, "").slice(0, 6);
                    const finalValue = cleaned.length === 6 ? `#${cleaned}` : "#000000";
                    updateOption("customColor", finalValue);
                  }
                }}
                placeholder="#000000"
                style={{
                  width: "100%",
                  fontFamily: "monospace",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  padding: "0.5rem 0.75rem",
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-2)",
                }}
              />
              <Box
                as="span"
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-text-secondary)",
                  fontWeight: 500,
                }}
              >
                Click the color box or enter hex value
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      <Box>
        <Box
          as="label"
          style={{
            display: "block",
            fontSize: "0.875rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            color: "var(--color-text)",
          }}
        >
          Size: {options.size}px
        </Box>
        <Input
          type="range"
          min="16"
          max="256"
          value={options.size}
          onChange={(e) => updateOption("size", parseInt(e.target.value, 10))}
          style={{ width: "100%" }}
        />
        <Flex
          justify="between"
          style={{
            fontSize: "0.75rem",
            color: "var(--color-text-secondary)",
            marginTop: "0.25rem",
          }}
        >
          <Box as="span">16px</Box>
          <Box as="span">256px</Box>
        </Flex>
      </Box>

      <Button
        onClick={handleDownload}
        disabled={isDownloading}
        variant="solid"
        color="azodik"
        style={{ width: "100%", marginTop: "0.5rem" }}
      >
        {isDownloading ? "Downloading..." : `Download ${options.format.toUpperCase()}`}
      </Button>
    </Box>
  );
}
