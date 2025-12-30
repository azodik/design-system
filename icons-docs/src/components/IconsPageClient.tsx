'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';
import { Box, Container, Flex, Section } from '@azodik/ui';
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
    <Box style={{ minHeight: '100vh', background: 'var(--color-background)', display: 'flex', flexDirection: 'column' }}>
      {/* Search & Filter Section */}
      <Section
        size="2"
        style={{
          background: 'rgba(var(--gray-2-rgb, 249, 249, 249), 0.5)',
          borderBottom: '1px solid var(--color-border)',
          zIndex: 10,
          position: 'sticky',
          top: '5rem',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <Container size="4">
          <Flex 
            gap="0" 
            align="stretch" 
            justify="center"
            style={{ 
              maxWidth: '900px', 
              margin: '0 auto',
              background: 'var(--color-background)', 
              borderRadius: 'var(--radius-4)',
              border: '2px solid var(--color-border)',
              overflow: 'hidden',
              boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.15)',
              height: '4.5rem',
            }}
          >
            <Box style={{ flex: 1 }}>
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </Box>
            <Box style={{ borderLeft: '2px solid var(--color-border)', width: '240px', background: 'var(--color-surface)' }}>
              <CategoryFilter
                categories={categories}
                selected={selectedCategory}
                onChange={setSelectedCategory}
              />
            </Box>
          </Flex>
          
          <Box style={{ 
            marginTop: '1.5rem', 
            textAlign: 'center', 
            fontSize: '1rem', 
            color: 'var(--color-text-secondary)', 
            fontWeight: 600,
            fontFamily: 'var(--font-montserrat), sans-serif',
            letterSpacing: '0.01em',
          }}>
            Showing <Box as="span" style={{ color: 'var(--accent-9)', fontWeight: 800 }}>{filteredIcons.length}</Box> of <Box as="span" style={{ color: 'var(--color-text)', fontWeight: 800 }}>{initialIcons.length}</Box> icons
          </Box>
        </Container>
      </Section>

      {/* Grid Section */}
      <Section size="3" style={{ flex: 1 }}>
        <Container size="4">
          <IconGrid icons={filteredIcons} onIconClick={handleIconClick} />
        </Container>
      </Section>
    </Box>
  );
}
