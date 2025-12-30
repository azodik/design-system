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
    label: category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1),
  }));

  return (
    <Box style={{ 
      display: 'flex',
      gap: 'clamp(var(--space-1), 2vw, var(--space-2))',
      flexWrap: 'wrap',
      alignItems: 'center',
      width: '100%',
      position: 'relative',
      zIndex: 1,
      overflow: 'visible',
      minHeight: 'auto',
    }}>
      {categories.map((category) => {
        const isSelected = selected === category;
        return (
          <Box
            key={category}
            as="button"
            onClick={() => onChange(category)}
            style={{
              padding: 'clamp(0.5rem, 2vw, var(--space-2)) clamp(0.75rem, 3vw, var(--space-4))',
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
              fontWeight: isSelected ? 700 : 600,
              color: isSelected ? 'var(--accent-9)' : 'var(--color-text-secondary)',
              background: isSelected 
                ? 'var(--accent-2)' 
                : 'var(--color-surface)',
              border: `1px solid ${isSelected ? 'var(--accent-9)' : 'var(--color-border)'}`,
              borderRadius: 'var(--radius-3)',
              cursor: 'pointer',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              textTransform: 'capitalize',
              fontFamily: 'var(--font-montserrat), sans-serif',
              letterSpacing: '0.01em',
              boxShadow: isSelected ? '0 2px 8px rgba(var(--accent-9-rgb, 244, 129, 32), 0.15)' : 'none',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              if (!isSelected) {
                e.currentTarget.style.borderColor = 'var(--accent-9)';
                e.currentTarget.style.color = 'var(--accent-9)';
                e.currentTarget.style.background = 'var(--accent-1)';
                // Only apply transform on desktop
                if (typeof window !== 'undefined' && window.innerWidth > 768) {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }
              }
            }}
            onMouseLeave={(e) => {
              if (!isSelected) {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
                e.currentTarget.style.background = 'var(--color-surface)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            {category === 'all' ? 'All' : category}
          </Box>
        );
      })}
    </Box>
  );
}
