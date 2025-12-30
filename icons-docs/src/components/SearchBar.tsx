'use client';

import { Input, Box } from '@azodik/ui';
import { Search2Icon } from '@azodik/icons';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <Box style={{ position: 'relative' }}>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search icons..."
        style={{
          paddingLeft: '2.5rem',
          width: '100%',
        }}
      />
      <Box
        style={{
          position: 'absolute',
          left: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--color-text-secondary)',
          pointerEvents: 'none',
        }}
      >
        <Search2Icon size={20} />
      </Box>
    </Box>
  );
}
