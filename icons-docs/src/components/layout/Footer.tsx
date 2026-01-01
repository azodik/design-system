"use client";

import { Box, Footer, Stack, Flex } from "@azodik/ui";
import Link from "next/link";
import { AppsIcon, BookOpenIcon, GithubIcon } from "@azodik/icons";

export default function DocsFooter() {
  return (
    <Footer
      variant="centered"
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border-subtle)",
        padding: "var(--space-10) 0 var(--space-8)",
      }}
    >
      <Stack direction="column" align="center" gap="4" fullWidth>
        {/* Navigation Links with Icons - First Line */}
        <Flex
          direction="row"
          wrap="nowrap"
          justify="center"
          align="center"
          gap={{ base: "3", md: "6" }}
          style={{
            width: "100%",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <Link
            href="/icons"
            className="footer-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              transition: "all 0.2s ease",
              padding:
                "clamp(var(--space-1), 1vw, var(--space-2)) clamp(var(--space-2), 2vw, var(--space-3))",
              borderRadius: "var(--radius-2)",
              fontSize: "clamp(0.8125rem, 2vw, 0.9375rem)",
              fontWeight: 500,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent-9)";
              e.currentTarget.style.background = "var(--accent-2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-secondary)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <AppsIcon size={18} style={{ display: "flex", flexShrink: 0 }} />
            <span>Icons</span>
          </Link>

          <Link
            href="/llm-resource"
            className="footer-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              transition: "all 0.2s ease",
              padding:
                "clamp(var(--space-1), 1vw, var(--space-2)) clamp(var(--space-2), 2vw, var(--space-3))",
              borderRadius: "var(--radius-2)",
              fontSize: "clamp(0.8125rem, 2vw, 0.9375rem)",
              fontWeight: 500,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent-9)";
              e.currentTarget.style.background = "var(--accent-2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-secondary)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <BookOpenIcon size={18} style={{ display: "flex", flexShrink: 0 }} />
            <span>LLM Resource</span>
          </Link>

          <Link
            href="https://github.com/azodik/ui"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              transition: "all 0.2s ease",
              padding:
                "clamp(var(--space-1), 1vw, var(--space-2)) clamp(var(--space-2), 2vw, var(--space-3))",
              borderRadius: "var(--radius-2)",
              fontSize: "clamp(0.8125rem, 2vw, 0.9375rem)",
              fontWeight: 500,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent-9)";
              e.currentTarget.style.background = "var(--accent-2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-secondary)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <GithubIcon size={18} style={{ display: "flex", flexShrink: 0 }} />
            <span>GitHub</span>
          </Link>
        </Flex>

        {/* Second Line: Copyright and Built with Azodik UI */}
        <Flex
          direction="row"
          wrap="wrap"
          justify="center"
          align="center"
          gap="4"
          style={{
            width: "100%",
            fontSize: "clamp(0.8125rem, 2vw, 0.875rem)",
            color: "var(--color-text-secondary)",
            opacity: 0.8,
            marginTop: "var(--space-4)",
          }}
        >
          <Box
            as="span"
            style={{
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            © {new Date().getFullYear()} Azodik. All rights reserved.
          </Box>
          <Box
            as="span"
            style={{
              opacity: 0.5,
              fontSize: "0.75rem",
            }}
          >
            •
          </Box>
          <Box
            as="span"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontWeight: 400,
              fontFamily: "var(--font-montserrat), sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            <Box as="span" style={{ opacity: 0.7 }}>
              Built with
            </Box>
            <Box
              as="span"
              style={{
                fontWeight: 600,
                background: "linear-gradient(135deg, var(--accent-9), var(--accent-11))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Azodik UI
            </Box>
          </Box>
        </Flex>
      </Stack>
    </Footer>
  );
}
