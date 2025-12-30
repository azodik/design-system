'use client';

import React from 'react';
import { Input, Box } from '@azodik/ui';
import { SearchIcon } from '@azodik/icons';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);

  React.useEffect(() => {
    setHasValue(value.length > 0);
  }, [value]);

  return (
    <Box 
      style={{ 
        position: 'relative', 
        width: '100%',
      }}
    >
      <Box
        style={{
          position: 'absolute',
          left: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: isFocused || hasValue ? 'var(--accent-9)' : 'var(--color-text-secondary)',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 2,
          opacity: isFocused || hasValue ? 1 : 0.6,
        }}
      >
        <SearchIcon 
          size={22} 
          style={{
            display: 'flex',
            flexShrink: 0,
          }}
        />
      </Box>
      <Box 
        style={{ 
          position: 'relative', 
          width: '100%',
        }}
        className="search-input-wrapper"
      >
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search icons by name, category, or tag..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          size="3"
          style={{
            paddingLeft: '3.5rem',
            paddingRight: 'var(--space-5)',
            width: '100%',
            height: '3.5rem',
            fontSize: '1rem',
            fontWeight: 500,
            color: 'var(--color-text)',
            background: 'var(--color-surface)',
            border: `2px solid ${isFocused ? 'var(--accent-9)' : 'var(--color-border)'}`,
            borderRadius: 'var(--radius-4)',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: isFocused 
              ? '0 0 0 4px rgba(var(--accent-9-rgb, 244, 129, 32), 0.12), 0 4px 16px rgba(0, 0, 0, 0.08)'
              : '0 2px 8px rgba(0, 0, 0, 0.04)',
            outline: 'none',
          }}
        />
      </Box>
    </Box>
  );
}

