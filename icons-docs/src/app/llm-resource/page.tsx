import { Box, Container, Card, CardHeader, CardTitle, CardContent, Flex } from "@azodik/ui";
import LLMResourceContent from "@/components/llm-resource/LLMResourceContent";
import DownloadButton from "@/components/llm-resource/DownloadButton";

export const metadata = {
  title: "LLM Resource - Azodik Icons",
  description: "LLM resource guide for using Azodik Icons in your projects",
};

export default async function LLMResourcePage() {
  return (
    <Box style={{ minHeight: "100vh", background: "var(--color-background)" }}>
      <Container size="4" style={{ padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem)" }}>
        <Box style={{ marginBottom: "clamp(1.5rem, 4vw, 2rem)" }}>
          <Box
            as="h1"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "var(--color-text)",
              marginBottom: "var(--space-2)",
              fontFamily: "var(--font-montserrat), sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            LLM Resource Guide
          </Box>
          <Box
            as="p"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Comprehensive guide for using Azodik Icons in your projects. Perfect for LLM assistants
            and developers.
          </Box>
        </Box>

        <Card>
          <CardHeader>
            <Flex justify="between" align="center" wrap="wrap" gap="2">
              <CardTitle>Azodik Icons - Usage Guide</CardTitle>
              <Flex gap="2" wrap="wrap">
                <LLMResourceContent />
                <DownloadButton />
              </Flex>
            </Flex>
          </CardHeader>
          <CardContent>
            <Box
              as="pre"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-3)",
                padding: "clamp(1rem, 3vw, 1.5rem)",
                fontSize: "clamp(0.8125rem, 2vw, 0.875rem)",
                lineHeight: 1.7,
                color: "var(--color-text)",
                fontFamily:
                  'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
              id="llm-resource-content"
            >
              {`Azodik Icons - LLM Resource Guide

Azodik Icons is a comprehensive icon library designed for modern web applications. Here's how you can utilize it in your projects:

INSTALLATION:
npm install @azodik/icons

BASIC USAGE:
import { IconName } from '@azodik/icons';

// Example
import { SearchIcon, HomeIcon, UserIcon } from '@azodik/icons';

<SearchIcon size={24} />
<HomeIcon size={32} color="var(--accent-9)" />
<UserIcon size={20} style={{ color: '#ff0000' }} />

ICON COMPONENT PROPS:
- size: number (default: 20) - Size of the icon in pixels
- className: string - CSS class name
- style: React.CSSProperties - Inline styles
- color: string - Icon color (uses currentColor by default)

AVAILABLE ICONS:
The library includes hundreds of icons organized by category:
- Navigation icons (HomeIcon, ArrowLeftIcon, MenuIcon, etc.)
- Action icons (SearchIcon, DownloadIcon, ShareIcon, etc.)
- Social icons (GithubIcon, TwitterIcon, etc.)
- UI icons (CheckIcon, XIcon, PlusIcon, etc.)
- And many more...

STYLING:
Icons use currentColor by default, so they inherit the text color from their parent:
<div style={{ color: 'blue' }}>
  <SearchIcon size={24} /> {/* Will be blue */}
</div>

You can also use CSS variables:
<SearchIcon size={24} style={{ color: 'var(--accent-9)' }} />

TYPESCRIPT SUPPORT:
The library is fully typed with TypeScript, providing autocomplete and type safety.

BUNDLE SIZE:
Icons are tree-shakeable, so only the icons you import will be included in your bundle.

For more information, visit: https://icons.azodik.com`}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
