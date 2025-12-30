'use client';

import { Box, Footer, Flex } from '@azodik/ui';
import Link from 'next/link';

export default function DocsFooter() {
  return (
    <Footer variant="simple">
      <Flex 
        direction="column" 
        align="center" 
        gap="4"
        style={{ width: '100%' }}
      >
        <Flex 
          gap="4" 
          wrap="wrap" 
          justify="center"
          style={{
            fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)',
            color: 'var(--color-text-secondary)',
          }}
        >
          <Link 
            href="/icons"
            style={{ 
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-9)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            Icons
          </Link>
          <Box as="span" style={{ opacity: 0.3 }}>•</Box>
          <Link 
            href="/llm-resource"
            style={{ 
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-9)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            LLM Resource
          </Link>
          <Box as="span" style={{ opacity: 0.3 }}>•</Box>
          <Link 
            href="https://github.com/azodik/ui"
            target="_blank"
            style={{ 
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-9)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            GitHub
          </Link>
        </Flex>
        
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
      </Flex>
    </Footer>
  );
}

