'use client';

import { Select } from '@azodik/ui';

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onChange,
}: CategoryFilterProps) {
  const options = categories.map(category => ({
    value: category,
    label: category === 'all' ? 'All Categories' : category,
  }));

  return (
    <Select
      value={selected}
      onChange={onChange}
      options={options}
      placeholder="Select category"
      style={{ minWidth: '200px' }}
    />
  );
}
