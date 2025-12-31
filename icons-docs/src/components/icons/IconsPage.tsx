"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { Box, Container } from "@azodik/ui";
import type { IconInfo } from "@/types/icon";
import IconGrid from "./IconGrid";
import SearchBar from "@/components/search/SearchBar";
import CategoryFilter from "@/components/search/CategoryFilter";

interface IconsPageProps {
  initialIcons: IconInfo[];
}

export default function IconsPage({ initialIcons }: IconsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const router = useRouter();

  const fuse = useMemo(
    () =>
      new Fuse(initialIcons, {
        keys: ["name", "displayName", "componentName", "tags"],
        threshold: 0.3,
        includeScore: true,
      }),
    [initialIcons],
  );

  const filteredIcons = useMemo(() => {
    let results = initialIcons;

    // Filter by category
    if (selectedCategory !== "all") {
      results = results.filter((icon) => icon.category === selectedCategory);
    }

    // Search
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery);
      results = searchResults.map((result) => result.item);
    }

    return results;
  }, [searchQuery, selectedCategory, initialIcons, fuse]);

  const categories = useMemo(() => {
    const cats = new Set(initialIcons.map((icon) => icon.category).filter(Boolean));
    return ["all", ...Array.from(cats)].sort() as string[];
  }, [initialIcons]);

  const handleIconClick = (icon: IconInfo) => {
    router.push(`/icons/${icon.name}`);
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        background: "var(--color-background)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Search & Filter Section - Full Width */}
      <Box
        style={{
          width: "100%",
          background: "var(--color-background)",
          paddingTop: "clamp(var(--space-4), 4vw, var(--space-6))",
          paddingBottom: "clamp(var(--space-8), 10vw, var(--space-12))",
          borderBottom: "1px solid var(--color-border-subtle)",
          borderTop: "1px solid var(--color-border-subtle)",
          marginBottom: 0,
          position: "relative",
          zIndex: 1,
          overflow: "visible",
        }}
        className="icons-search-section"
      >
        <Container
          size="4"
          style={{ width: "100%", padding: "0 clamp(var(--space-3), 4vw, var(--space-4))" }}
        >
          {/* Search Bar - Full Width */}
          <Box
            style={{
              width: "100%",
              marginBottom: "clamp(var(--space-3), 4vw, var(--space-5))",
            }}
          >
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </Box>

          {/* Category Filters */}
          <Box
            style={{
              width: "100%",
              marginBottom: "clamp(var(--space-4), 4vw, var(--space-5))",
              paddingBottom: "clamp(var(--space-3), 3vw, var(--space-4))",
            }}
          >
            <CategoryFilter
              categories={categories}
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />
          </Box>

          {/* Result Count */}
          <Box
            className="icons-result-count"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-2)",
              fontSize: "clamp(0.8125rem, 2vw, 0.875rem)",
              color: "var(--color-text-secondary)",
              fontWeight: 500,
              width: "100%",
              marginTop: "var(--space-2)",
              paddingBottom: "clamp(var(--space-4), 5vw, var(--space-6))",
              marginBottom: 0,
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
              as="span"
              style={{
                color: "var(--accent-9)",
                fontWeight: 700,
                fontSize: "clamp(0.9375rem, 2.5vw, 1rem)",
              }}
            >
              {filteredIcons.length}
            </Box>
            <Box as="span" style={{ opacity: 0.5 }}>
              of
            </Box>
            <Box
              as="span"
              style={{
                color: "var(--color-text)",
                fontWeight: 600,
              }}
            >
              {initialIcons.length}
            </Box>
            <Box as="span" style={{ opacity: 0.5, marginLeft: "var(--space-1)" }}>
              icons
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Spacer to prevent overlap */}
      <Box
        className="icons-section-spacer"
        style={{
          width: "100%",
          height: "clamp(var(--space-10), 12vw, var(--space-12))",
          flexShrink: 0,
          background: "transparent",
          minHeight: "var(--space-10)",
        }}
      />

      {/* Grid Section */}
      <Container
        size="4"
        style={{
          width: "100%",
          paddingTop: 0,
          paddingLeft: "clamp(var(--space-3), 4vw, var(--space-4))",
          paddingRight: "clamp(var(--space-3), 4vw, var(--space-4))",
          position: "relative",
          zIndex: 0,
          marginTop: 0,
        }}
      >
        <Box style={{ paddingBottom: "clamp(var(--space-6), 8vw, var(--space-12))" }}>
          <IconGrid icons={filteredIcons} onIconClick={handleIconClick} />
        </Box>
      </Container>
    </Box>
  );
}
