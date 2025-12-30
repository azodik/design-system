'use client';

import { Box, Navbar, ThemeToggle } from '@azodik/ui';

export default function Header() {
  return (
    <Navbar variant="sticky" isGlass={true} containerSize="4">
      <Navbar.Brand href="/">
        <Box
          style={{
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, var(--accent-9), var(--accent-11))',
            borderRadius: 'var(--radius-2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 900,
            fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(244, 129, 32, 0.3)',
            flexShrink: 0,
          }}
        >
          A
        </Box>
        <Box 
          as="span" 
          style={{ 
            fontWeight: 800, 
            fontSize: '1.25rem', 
            color: 'var(--color-text)', 
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-montserrat), sans-serif',
          }}
        >
          Azodik Icons
        </Box>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Content>
        <Navbar.Links>
          <Navbar.Link href="https://github.com/azodik/ui" target="_blank">GitHub</Navbar.Link>
          <Navbar.Link href="/docs">Docs</Navbar.Link>
        </Navbar.Links>
      </Navbar.Content>

      <Navbar.Actions>
        <ThemeToggle />
      </Navbar.Actions>
    </Navbar>
  );
}
