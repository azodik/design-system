'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';
import { Box, Container, Flex } from '@azodik/ui';
import type { IconInfo } from '@/types/icon';
import IconGrid from './IconGrid';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

interface IconsPageClientProps {
  initialIcons: IconInfo[];
}

export default function IconsPageClient({ initialIcons }: IconsPageClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const router = useRouter();

  const fuse = useMemo(
    () =>
      new Fuse(initialIcons, {
        keys: ['name', 'displayName', 'componentName', 'tags'],
        threshold: 0.3,
        includeScore: true,
      }),
    [initialIcons]
  );

  const filteredIcons = useMemo(() => {
    let results = initialIcons;

    // Filter by category
    if (selectedCategory !== 'all') {
      results = results.filter(icon => icon.category === selectedCategory);
    }

    // Search
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery);
      results = searchResults.map(result => result.item);
    }

    return results;
  }, [searchQuery, selectedCategory, initialIcons, fuse]);

  const categories = useMemo(() => {
    const cats = new Set(initialIcons.map(icon => icon.category).filter(Boolean));
    return ['all', ...Array.from(cats)].sort() as string[];
  }, [initialIcons]);

  const handleIconClick = (icon: IconInfo) => {
    router.push(`/icons/${icon.name}`);
  };

  return (
    <Box style={{ minHeight: '100vh', background: 'var(--color-background)' }}>
      {/* Hero Section */}
      <Box
        style={{
          background: 'linear-gradient(to bottom, var(--color-surface), var(--color-background))',
          padding: '4rem 0 2rem 0',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <Container size="4">
          <Box style={{ maxWidth: '800px' }}>
            <Box
              as="h1"
              style={{
                fontSize: '3.5rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                color: 'var(--color-text)',
                lineHeight: 1.1,
              }}
            >
              Beautifully crafted <br />
              <Box as="span" style={{ color: 'var(--accent-9)' }}>
                Open Source Icons
              </Box>
            </Box>
            <Box
              as="p"
              style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-secondary)',
                marginBottom: '2.5rem',
                lineHeight: 1.6,
              }}
            >
              Over {initialIcons.length} high-quality icons for your next project. 
              Designed to be clean, consistent, and easy to use with Azodik UI.
            </Box>
          </Box>

          <Flex gap="4" align="center" style={{ flexWrap: 'wrap' }}>
            <Box style={{ flex: 1, minWidth: '300px' }}>
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </Box>
            <Box style={{ minWidth: '200px' }}>
              <CategoryFilter
                categories={categories}
                selected={selectedCategory}
                onChange={setSelectedCategory}
              />
            </Box>
          </Flex>
          
          <Box style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
            Showing <Box as="span" style={{ color: 'var(--color-text)', fontWeight: 600 }}>{filteredIcons.length}</Box> unique icons
          </Box>
        </Container>
      </Box>

      <Container size="4" style={{ padding: '3rem 1rem' }}>
        <IconGrid icons={filteredIcons} onIconClick={handleIconClick} />
      </Container>
    </Box>
  );
}
