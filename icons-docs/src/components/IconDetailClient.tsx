'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Container, Grid, Card, CardHeader, CardTitle, CardContent, Button, Flex } from '@azodik/ui';
import { getIconComponent } from '@/lib/icon-loader';
import { downloadSVG, downloadPNG } from '@/lib/icon-utils';
import type { IconInfo, DownloadOptions } from '@/types/icon';
import DownloadPanel from './DownloadPanel';
import IconPreview from './IconPreview';

interface IconDetailClientProps {
  icon: IconInfo;
}

export default function IconDetailClient({ icon }: IconDetailClientProps) {
  const router = useRouter();
  const [downloadOptions, setDownloadOptions] = useState<DownloadOptions>({
    format: 'svg',
    style: 'solid',
    color: 'default',
    size: 24,
  });

  const IconComponent = getIconComponent(icon.componentName);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!previewRef.current) return;
    
    try {
      const filename = icon.componentName.toLowerCase();
      if (downloadOptions.format === 'svg') {
        await downloadSVG(previewRef.current, filename);
      } else {
        await downloadPNG(previewRef.current, filename);
      }
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  return (
    <Box style={{ minHeight: '100vh', background: 'var(--color-background)' }}>
      <Box
        style={{
          background: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <Container size="4" style={{ padding: '1rem' }}>
          <Button
            variant="ghost"
            onClick={() => router.back()}
            style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Box as="span">←</Box>
            Back to Icons
          </Button>
          <Box as="h1" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text)' }}>
            {icon.displayName}
          </Box>
          <Box as="p" style={{ color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
            {icon.componentName}
          </Box>
        </Container>
      </Box>

      <Container size="4" style={{ padding: '2rem 1rem' }}>
        <Grid columns="2" gap="4">
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <IconPreview
                ref={previewRef}
                icon={icon}
                options={downloadOptions}
                IconComponent={IconComponent}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Download</CardTitle>
            </CardHeader>
            <CardContent>
              <DownloadPanel
                icon={icon}
                options={downloadOptions}
                onOptionsChange={setDownloadOptions}
                onDownload={handleDownload}
              />
            </CardContent>
          </Card>
        </Grid>

        {icon.category && (
          <Card style={{ marginTop: '2rem' }}>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Flex direction="column" gap="2" style={{ fontSize: '0.875rem' }}>
                <Box>
                  <Box as="span" style={{ fontWeight: 600 }}>Category:</Box>{' '}
                  {icon.category}
                </Box>
                {icon.tags && icon.tags.length > 0 && (
                  <Box>
                    <Box as="span" style={{ fontWeight: 600 }}>Tags:</Box>{' '}
                    {icon.tags.join(', ')}
                  </Box>
                )}
              </Flex>
            </CardContent>
          </Card>
        )}
      </Container>
    </Box>
  );
}
