'use client';

import { Box, Hero, Button } from '@azodik/ui';
import { SearchIcon, GithubIcon } from '@azodik/icons';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  
  return (
    <Hero 
      variant="centered" 
      size="full" 
      hasGradient={true}
    >
      <Hero.Title>
        <Box as="span" style={{ 
          display: 'block',
          color: 'var(--color-text)',
          marginBottom: '0.25em',
          fontWeight: 800,
          letterSpacing: '-0.03em',
        }}>
          The most beautiful
        </Box>
        <Box as="span" style={{ 
          display: 'block',
          background: 'linear-gradient(135deg, var(--accent-9) 0%, var(--accent-11) 50%, var(--accent-9) 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'gradient-shift 3s ease infinite',
          filter: 'drop-shadow(0 2px 4px rgba(var(--accent-9-rgb, 244, 129, 32), 0.2))',
        }}>
          Open Source Icons
        </Box>
      </Hero.Title>

      <Hero.Description>
        <Box as="span" style={{ 
          display: 'block',
          marginBottom: '0.75em',
          fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
          lineHeight: 1.7,
          fontWeight: 500,
        }}>
          A high-quality icon set designed with precision and consistency.
        </Box>
        <Box as="span" style={{ 
          display: 'block',
          color: 'var(--color-text-secondary)',
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          lineHeight: 1.6,
          opacity: 0.85,
        }}>
          Built for modern web applications using Azodik UI.
        </Box>
      </Hero.Description>

      <Hero.Actions>
        <Button 
          size="4" 
          onClick={() => router.push('/icons')}
          style={{ 
            height: 'clamp(2.75rem, 8vw, 3.5rem)', 
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            padding: '0 clamp(1.25rem, 4vw, 2rem)',
            borderRadius: 'var(--radius-4)',
            fontWeight: 600,
            width: '100%',
            maxWidth: '280px',
          }}
        >
          <SearchIcon style={{ marginRight: '0.5rem', width: 'clamp(16px, 4vw, 20px)', height: 'clamp(16px, 4vw, 20px)' }} />
          Search Icons
        </Button>

        <Button 
          variant="outline"
          size="4" 
          onClick={() => window.open('https://github.com/azodik/design-system', '_blank')}
          style={{ 
            height: 'clamp(2.75rem, 8vw, 3.5rem)', 
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            padding: '0 clamp(1.25rem, 4vw, 2rem)',
            borderRadius: 'var(--radius-4)',
            fontWeight: 600,
            width: '100%',
            maxWidth: '280px',
          }}
        >
          <GithubIcon size={20} style={{ marginRight: '0.5rem', width: 'clamp(16px, 4vw, 20px)', height: 'clamp(16px, 4vw, 20px)' }} />
          Star on GitHub
        </Button>
      </Hero.Actions>
    </Hero>
  );
}
