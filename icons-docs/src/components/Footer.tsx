'use client';

import { Box, Footer } from '@azodik/ui';

export default function DocsFooter() {
  return (
    <Footer variant="simple">
      <Box style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
        © {new Date().getFullYear()} Azodik Design System. All rights reserved.
      </Box>
      <Box 
        style={{ 
          fontSize: '0.9375rem', 
          color: 'var(--accent-11)', 
          fontWeight: 700,
          fontFamily: 'var(--font-montserrat), sans-serif',
          letterSpacing: '0.02em',
        }}
      >
        Built with Azodik UI
      </Box>
    </Footer>
  );
}
