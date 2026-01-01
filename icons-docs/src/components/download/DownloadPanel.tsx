"use client";

import React, { useState, useCallback } from "react";
import { Box, Button, Flex, Input, ColorPicker } from "@azodik/ui";
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

  const updateOption = React.useCallback(
    <K extends keyof DownloadOptions>(key: K, value: DownloadOptions[K]) => {
      onOptionsChange({ ...options, [key]: value });
    },
    [options, onOptionsChange],
  );

  // Memoize the color change handler to ensure stable reference
  const handleColorChange = useCallback(
    (newColor: string) => {
      const newOptions = { ...options, customColor: newColor };
      onOptionsChange(newOptions);
    },
    [options, onOptionsChange],
  );

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
              onClick={(e) => {
                e.stopPropagation();
                if (color === "custom") {
                  // Initialize customColor when switching to custom - update both at once
                  const newCustomColor = options.customColor || "#000000";
                  onOptionsChange({ ...options, color: "custom", customColor: newCustomColor });
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
          <ColorPicker value={options.customColor || "#000000"} onChange={handleColorChange} />
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
