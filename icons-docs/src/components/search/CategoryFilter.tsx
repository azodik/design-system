"use client";

import { Button, Box } from "@azodik/ui";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  return (
    <Box
      className="category-filter-container"
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "var(--space-2)",
          alignItems: "center",
          width: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingBottom: "var(--space-2)",
          paddingRight: "var(--space-2)",
          scrollPaddingLeft: "var(--space-4)",
          scrollPaddingRight: "var(--space-4)",
        }}
        className="category-filter-scroll"
      >
        {categories.map((category) => {
          const label = category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1);
          const isSelected = selected === category;

          return (
            <Button
              key={category}
              variant={isSelected ? "solid" : "outline"}
              size="sm"
              color={isSelected ? "azodik" : undefined}
              onClick={() => onChange(category)}
              style={{
                whiteSpace: "nowrap",
                flexShrink: 0,
                minWidth: "fit-content",
                pointerEvents: "auto",
              }}
            >
              {label}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
}
