'use client';

import { Box, Grid } from '@azodik/ui';
import type { IconInfo } from '@/types/icon';
import IconCard from './IconCard';

interface IconGridProps {
  icons: IconInfo[];
  onIconClick: (icon: IconInfo) => void;
}

export default function IconGrid({ icons, onIconClick }: IconGridProps) {
  if (icons.length === 0) {
    return (
      <Box style={{ textAlign: 'center', padding: '3rem 0' }}>
        <Box as="p" style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem' }}>
          No icons found
        </Box>
      </Box>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: '1.5rem',
      }}
    >
      {icons.map(icon => (
        <IconCard key={icon.componentName} icon={icon} onClick={() => onIconClick(icon)} />
      ))}
    </div>
  );
}
