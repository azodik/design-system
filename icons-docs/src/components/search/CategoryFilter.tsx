"use client";

import { SegmentedControl } from "@azodik/ui";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  const options = categories.map((category) => ({
    value: category,
    label: category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1),
  }));

  return (
    <SegmentedControl
      options={options}
      value={selected}
      onChange={onChange}
      size="medium"
      color="azodik"
      fullWidth={false}
    />
  );
}
