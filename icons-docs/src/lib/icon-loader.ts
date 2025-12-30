import * as Icons from "@azodik/icons";
import type { IconInfo } from "@/types/icon";

// Extract icon names from the icons package
export function getAllIcons(): IconInfo[] {
  const iconNames = Object.keys(Icons);

  return iconNames
    .filter((name) => name.endsWith("Icon"))
    .map((name) => {
      const displayName = name.replace(/Icon$/, "");
      // Convert PascalCase to space-separated words
      const formattedName = displayName
        .replace(/([A-Z])/g, " $1")
        .trim()
        .replace(/\d+/g, " $&")
        .trim();

      return {
        name: displayName.toLowerCase(),
        displayName: formattedName,
        componentName: name,
        category: categorizeIcon(displayName),
        tags: generateTags(displayName),
      };
    })
    .sort((a, b) => a.displayName.localeCompare(b.displayName));
}

function categorizeIcon(name: string): string {
  const categories: Record<string, string[]> = {
    Arrows: ["arrow", "chevron", "corner", "move", "direction"],
    "UI Elements": ["button", "input", "checkbox", "radio", "switch", "slider", "toggle"],
    Actions: ["add", "remove", "delete", "edit", "save", "cancel", "confirm", "close"],
    Communication: ["message", "chat", "mail", "notification", "bell", "comment"],
    "Files & Folders": ["file", "folder", "document", "archive", "download", "upload"],
    Media: ["image", "video", "audio", "camera", "play", "pause", "stop"],
    Navigation: ["menu", "home", "search", "filter", "sort", "grid", "list"],
    Status: ["check", "error", "warning", "info", "success", "loading"],
    Shapes: ["circle", "square", "triangle", "star", "heart", "diamond"],
    Business: ["chart", "graph", "analytics", "report", "dashboard", "finance"],
    Technology: ["code", "database", "server", "cloud", "network", "api"],
    Social: ["user", "users", "team", "profile", "avatar", "share"],
    Time: ["clock", "calendar", "schedule", "time", "date"],
    Location: ["map", "location", "pin", "marker", "globe", "world"],
    Settings: ["settings", "config", "gear", "preferences", "options"],
    Other: [],
  };

  const lowerName = name.toLowerCase();

  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some((keyword) => lowerName.includes(keyword))) {
      return category;
    }
  }

  return "Other";
}

function generateTags(name: string): string[] {
  const lowerName = name.toLowerCase();
  const tags: string[] = [];

  // Common patterns
  if (lowerName.includes("2") || lowerName.includes("3")) {
    tags.push("variant");
  }
  if (lowerName.includes("off") || lowerName.includes("disable")) {
    tags.push("disabled");
  }
  if (lowerName.includes("outline") || lowerName.includes("line")) {
    tags.push("outline");
  }
  if (lowerName.includes("fill") || lowerName.includes("solid")) {
    tags.push("solid");
  }

  // Extract meaningful words
  const words = lowerName.split(/(?=[A-Z])|[-_\s]/).filter(Boolean);
  tags.push(...words.slice(0, 3));

  return [...new Set(tags)];
}

export function getIconComponent(name: string) {
  const componentName = name.endsWith("Icon") ? name : `${name}Icon`;
  return (
    Icons as Record<
      string,
      React.ComponentType<{ size?: number; style?: React.CSSProperties; color?: string }>
    >
  )[componentName];
}

export function getIconByName(name: string): IconInfo | undefined {
  const icons = getAllIcons();
  return icons.find((icon) => icon.name === name.toLowerCase() || icon.componentName === name);
}
