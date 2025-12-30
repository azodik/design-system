'use client';

import { Box, Footer } from '@azodik/ui';

export default function DocsFooter() {
  return (
    <Footer variant="simple">
      <Box 
        style={{ 
          fontSize: 'clamp(0.875rem, 2vw, 0.9375rem)', 
          color: 'var(--color-text-secondary)', 
          fontWeight: 500,
          lineHeight: 1.6,
          textAlign: 'center',
          opacity: 0.8,
        }}
      >
        © {new Date().getFullYear()} Azodik Design System. All rights reserved.
      </Box>
      <Box 
        style={{ 
          fontSize: 'clamp(0.875rem, 2vw, 0.9375rem)', 
          color: 'var(--color-text-secondary)', 
          fontWeight: 600,
          fontFamily: 'var(--font-montserrat), sans-serif',
          letterSpacing: '0.01em',
          textAlign: 'center',
          marginTop: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
        }}
      >
        <Box as="span" style={{ opacity: 0.7 }}>Built with</Box>
        <Box 
          as="span" 
          style={{ 
            color: 'var(--accent-9)', 
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--accent-9), var(--accent-11))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Azodik UI
        </Box>
      </Box>
    </Footer>
  );
}
