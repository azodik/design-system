'use client';

import { Box, Container, Flex } from '@azodik/ui';

export default function Footer() {
  return (
    <Box
      as="footer"
      style={{
        padding: '3rem 0',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
      }}
    >
      <Container size="4">
        <Flex align="center" justify="between">
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
        </Flex>
      </Container>
    </Box>
  );
}
