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
    <Box style={{ 
      minHeight: '100vh', 
      background: 'var(--color-background)', 
      display: 'flex', 
      flexDirection: 'column',
    }}>


      {/* Search & Filter Section - Full Width */}
      <Box style={{
        width: '100%',
        background: 'var(--color-background)',
        paddingTop: 'var(--space-6)',
        paddingBottom: 'var(--space-10)',
        borderBottom: '1px solid var(--color-border-subtle)',
        borderTop: '1px solid var(--color-border-subtle)',
        marginBottom: 'var(--space-8)',
        position: 'relative',
        zIndex: 1,
      }}
      className="icons-search-section"
      >
        <Container size="4" style={{ width: '100%' }}>
          {/* Search Bar - Full Width */}
          <Box style={{ 
            width: '100%',
            marginBottom: 'var(--space-5)',
          }}>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </Box>

          {/* Category Filters */}
          <Box style={{ 
            width: '100%',
            marginBottom: 'var(--space-4)',
            position: 'relative',
            zIndex: 2,
            minHeight: '60px',
          }}>
            <CategoryFilter
              categories={categories}
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />
          </Box>

          {/* Result Count */}
          <Box style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-2)',
            fontSize: '0.875rem',
            color: 'var(--color-text-secondary)',
            fontWeight: 500,
            width: '100%',
            marginTop: 'var(--space-2)',
          }}>
            <Box as="span" style={{ 
              color: 'var(--accent-9)', 
              fontWeight: 700,
              fontSize: '1rem',
            }}>
              {filteredIcons.length}
            </Box>
            <Box as="span" style={{ opacity: 0.5 }}>of</Box>
            <Box as="span" style={{ 
              color: 'var(--color-text)', 
              fontWeight: 600,
            }}>
              {initialIcons.length}
            </Box>
            <Box as="span" style={{ opacity: 0.5, marginLeft: 'var(--space-1)' }}>icons</Box>
          </Box>
        </Container>
      </Box>

      {/* Grid Section */}
      <Container size="4" style={{ width: '100%', paddingTop: 'var(--space-10)', position: 'relative', zIndex: 0 }}>
        <Box style={{ paddingBottom: 'var(--space-12)' }}>
          <IconGrid icons={filteredIcons} onIconClick={handleIconClick} />
        </Box>
      </Container>
    </Box>
  );
}
