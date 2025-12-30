'use client';

import { Box, Hero, Button } from '@azodik/ui';
import { SearchIcon, GithubIcon } from '@azodik/icons';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  
  return (
    <Hero 
      variant="centered" 
      size="medium" 
      hasGradient={true}
    >
      <Hero.Title>
        The most beautiful <br />
        <Box as="span" style={{ 
          background: 'linear-gradient(to right, var(--accent-9), var(--accent-11))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Open Source Icons
        </Box>
      </Hero.Title>
      
      <Hero.Description>
        A high-quality icon set designed with precision and consistency. <br />
        Built for modern web applications using Azodik UI.
      </Hero.Description>

      <Hero.Actions>
        <Button 
          size="4" 
          onClick={() => router.push('/icons')}
          style={{ 
            height: '3.5rem', 
            fontSize: '1.25rem',
            padding: '0 2rem',
            borderRadius: 'var(--radius-4)',
            fontWeight: 600,
          }}
        >
          <SearchIcon style={{ marginRight: '0.5rem' }} />
          Search Icons
        </Button>

        <Button 
          variant="outline"
          size="4" 
          onClick={() => window.open('https://github.com/azodik/design-system', '_blank')}
          style={{ 
            height: '3.5rem', 
            fontSize: '1.25rem',
            padding: '0 2rem',
            borderRadius: 'var(--radius-4)',
            fontWeight: 600,
          }}
        >
          <GithubIcon style={{ marginRight: '0.5rem' }} />
          Star on GitHub
        </Button>
      </Hero.Actions>
    </Hero>
  );
}
