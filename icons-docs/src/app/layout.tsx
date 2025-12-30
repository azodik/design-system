import type { Metadata } from 'next';
import 'azodik-ui-core/base.css';
import 'azodik-ui-core/styles/theme.css';
import '../styles/globals.css';
import { Flex, Box, Container } from '@azodik/ui';
import { ThemeToggle } from '@azodik/ui';
import ThemeProviderWrapper from '@/components/ThemeProviderWrapper';

export const metadata: Metadata = {
  title: 'Azodik Icons - Icon Library',
  description: 'Browse, search, and download icons from the Azodik icon library',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProviderWrapper>
          <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box
              as="header"
              style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                width: '100%',
                background: 'var(--color-background)',
                opacity: 0.95,
                backdropFilter: 'blur(8px)',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <Container size="4">
                <Flex align="center" justify="between" style={{ height: '4rem' }}>
                  <Flex align="center" gap="2">
                    <Box
                      style={{
                        width: '32px',
                        height: '32px',
                        background: 'var(--accent-9)',
                        borderRadius: 'var(--radius-2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      A
                    </Box>
                    <Box as="span" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                      Azodik Icons
                    </Box>
                  </Flex>

                  <Flex align="center" gap="4">
                    <ThemeToggle />
                  </Flex>
                </Flex>
              </Container>
            </Box>

            <Box as="main" style={{ flex: 1 }}>
              {children}
            </Box>

            <Box
              as="footer"
              style={{
                padding: '2rem 0',
                borderTop: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
              }}
            >
              <Container size="4">
                <Flex align="center" justify="between">
                  <Box style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                    © {new Date().getFullYear()} Azodik Design System. All rights reserved.
                  </Box>
                  <Box style={{ fontSize: '0.875rem', color: 'var(--accent-11)' }}>
                    Built with Azodik UI
                  </Box>
                </Flex>
              </Container>
            </Box>
          </Box>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}

