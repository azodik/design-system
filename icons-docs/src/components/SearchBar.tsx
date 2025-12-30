'use client';

import { Input, Box } from '@azodik/ui';
import { Search2Icon } from '@azodik/icons';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <Box 
      style={{ 
        position: 'relative', 
        height: '4.5rem', 
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for icons..."
        style={{
          paddingLeft: '4rem',
          width: '100%',
          border: 'none',
          background: 'transparent',
          height: '100%',
          fontSize: '1.125rem',
          boxShadow: 'none',
          fontWeight: 500,
          color: 'var(--color-text)',
        }}
      />
      <Box
        style={{
          position: 'absolute',
          left: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--accent-9)',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          transition: 'transform 0.3s ease',
        }}
      >
        <Search2Icon size={24} />
      </Box>
    </Box>
  );
}
