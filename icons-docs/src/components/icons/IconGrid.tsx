"use client";

import { EmptyState } from "@azodik/ui";
import { SearchIcon } from "@azodik/icons";
import type { IconInfo } from "@/types/icon";
import IconCard from "./IconCard";

interface IconGridProps {
  icons: IconInfo[];
  onIconClick: (icon: IconInfo) => void;
}

export default function IconGrid({ icons, onIconClick }: IconGridProps) {
  if (icons.length === 0) {
    return (
      <EmptyState
        icon={<SearchIcon size={48} style={{ opacity: 0.3 }} />}
        title="No icons found"
        description="Try adjusting your search or filter to find what you're looking for"
        size="lg"
      />
    );
  }

  return (
    <div
      className="icon-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(140px, 100%), 1fr))",
        gap: "var(--space-4)",
        paddingBottom: "var(--space-12)",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {icons.map((icon) => (
        <IconCard key={icon.componentName} icon={icon} onClick={() => onIconClick(icon)} />
      ))}
    </div>
  );
}
