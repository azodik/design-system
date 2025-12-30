import type { Metadata } from 'next';
import '@azodik/ui/styles.css';
import '../styles/globals.css';
import { Inter, Montserrat } from 'next/font/google';
import { Box } from '@azodik/ui';
import ThemeProviderWrapper from '@/components/layout/ThemeProviderWrapper';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

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
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storageKey = 'azodik-theme';
                  const stored = localStorage.getItem(storageKey);
                  const defaultTheme = 'system';
                  let theme = stored || defaultTheme;
                  
                  if (theme === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    theme = prefersDark ? 'dark' : 'light';
                  }
                  
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.classList.add('az-theme-initialized');
                } catch (e) {
                  // Fallback to light theme if there's an error
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.classList.add('az-theme-initialized');
                }
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning style={{ 
        fontFamily: 'var(--font-inter), sans-serif',
        background: 'var(--color-background)',
        color: 'var(--color-text)',
      }}>
        <ThemeProviderWrapper>
          <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <Box 
              as="main" 
              style={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column',
                width: '100%',
                overflowX: 'hidden',
              }}
            >
              {children}
            </Box>

            <Footer />
          </Box>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}

