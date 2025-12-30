'use client';

import { Box, Navbar, ThemeToggle } from '@azodik/ui';
import { GithubIcon, DocumentationIcon } from '@azodik/icons';

export default function Header() {
  return (
    <Navbar 
      variant="sticky" 
      isGlass={true} 
      containerSize="4"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
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
          <Navbar.Link 
            href="https://github.com/azodik/ui" 
            target="_blank"
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <GithubIcon size={18} style={{ display: 'flex', flexShrink: 0 }} />
            GitHub
          </Navbar.Link>
          <Navbar.Link 
            href="/docs"
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <DocumentationIcon size={18} style={{ display: 'flex', flexShrink: 0 }} />
            Docs
          </Navbar.Link>
        </Navbar.Links>
      </Navbar.Content>

      <Navbar.Actions>
        <ThemeToggle />
      </Navbar.Actions>
    </Navbar>
  );
}
