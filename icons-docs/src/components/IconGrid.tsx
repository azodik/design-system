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
      <Box style={{ 
        textAlign: 'center', 
        padding: 'var(--space-16) var(--space-4)',
      }}>
        <Box 
          as="div"
          style={{
            fontSize: '4rem',
            marginBottom: 'var(--space-4)',
            opacity: 0.3,
          }}
        >
          🔍
        </Box>
        <Box as="h3" style={{ 
          color: 'var(--color-text)', 
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: 'var(--space-2)',
          fontFamily: 'var(--font-montserrat), sans-serif',
        }}>
          No icons found
        </Box>
        <Box as="p" style={{ 
          color: 'var(--color-text-secondary)', 
          fontSize: '1rem',
          maxWidth: '400px',
          margin: '0 auto',
        }}>
          Try adjusting your search or filter to find what you're looking for
        </Box>
      </Box>
    );
  }

  return (
    <Grid
      columns="repeat(auto-fill, minmax(180px, 1fr))"
      gap="4"
      style={{ 
        paddingBottom: 'var(--space-12)',
      }}
      className="icon-grid"
    >
      {icons.map(icon => (
        <IconCard key={icon.componentName} icon={icon} onClick={() => onIconClick(icon)} />
      ))}
    </Grid>
  );
}
