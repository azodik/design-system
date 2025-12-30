'use client';

import { Box, Select } from '@azodik/ui';


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
    <Box style={{ height: '4.5rem', width: '100%' }}>
      <Select
        value={selected}
        onChange={onChange}
        options={options}
        placeholder="All Categories"
        style={{ 
          width: '100%', 
          border: 'none', 
          background: 'transparent',
          height: '100%',
          boxShadow: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--color-text-secondary)',
        }}
      />
    </Box>
  );
}
