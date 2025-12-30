import { Box, Grid } from '@azodik/ui';
import type { IconInfo, DownloadOptions } from '@/types/icon';
import React, { type ComponentType } from 'react';

interface IconPreviewProps {
  icon: IconInfo;
  options: DownloadOptions;
  IconComponent: ComponentType<any> | undefined;
}

const IconPreview = React.forwardRef<HTMLDivElement, IconPreviewProps>(
  ({ icon, options, IconComponent }, ref) => {
    const { size, color, customColor } = options;
    
    const iconColor =
      color === 'custom' && customColor
        ? customColor
        : color === 'primary'
        ? 'var(--accent-9)'
        : color === 'secondary'
        ? 'var(--gray-9)'
        : color === 'accent'
        ? 'var(--accent-9)'
        : 'currentColor';

    const iconStyle: React.CSSProperties = {
      color: iconColor,
      width: size,
      height: size,
    };

    return (
      <Box style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Box
          ref={ref}
          className="icon-preview-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem',
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-3)',
          }}
        >
          {IconComponent ? (
            <IconComponent size={size} style={iconStyle} />
          ) : (
            <Box
              style={{
                background: 'var(--color-border)',
                borderRadius: 'var(--radius-2)',
                width: size,
                height: size,
              }}
            />
          )}
        </Box>

      <Grid columns="3" gap="2">
        {[16, 24, 32, 48, 64, 96].map(s => (
          <Box
            key={s}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem',
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-2)',
            }}
          >
            {IconComponent ? (
              <IconComponent size={s} style={iconStyle} />
            ) : (
              <Box
                style={{
                  background: 'var(--color-border)',
                  borderRadius: 'var(--radius-2)',
                  width: s,
                  height: s,
                }}
              />
            )}
            <Box as="span" style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
              {s}px
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
});

IconPreview.displayName = 'IconPreview';
export default IconPreview;
