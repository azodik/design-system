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
    const { size, color, customColor, style } = options;
    
    // Get the actual color value
    const getIconColor = (): string => {
      if (color === 'custom' && customColor) {
        return customColor;
      }
      if (color === 'primary') {
        return 'var(--accent-9)';
      }
      if (color === 'secondary') {
        return 'var(--gray-9)';
      }
      if (color === 'accent') {
        return 'var(--accent-9)';
      }
      return 'currentColor';
    };

    const iconColor = getIconColor();

    const getIconStyle = (iconSize: number): React.CSSProperties => {
      const baseStyle: React.CSSProperties = {
        width: iconSize,
        height: iconSize,
        display: 'flex',
        flexShrink: 0,
      };

      // For custom colors, we need to apply it directly
      if (color === 'custom' && customColor) {
        return {
          ...baseStyle,
          color: customColor,
          fill: customColor,
          stroke: customColor,
        };
      }

      // For CSS variable colors, use color property (works with currentColor in SVG)
      return {
        ...baseStyle,
        color: iconColor,
      };
    };

    // Generate size previews including the selected size
    const previewSizes = React.useMemo(() => {
      const sizes = [16, 24, 32, 48, 64, 96];
      if (!sizes.includes(size)) {
        sizes.push(size);
        sizes.sort((a, b) => a - b);
      }
      return sizes;
    }, [size]);

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
            minHeight: '200px',
          }}
        >
          {IconComponent ? (
            <IconComponent 
              size={size} 
              style={getIconStyle(size)} 
            />
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

        <Box>
          <Box as="label" style={{ 
            display: 'block', 
            fontSize: '0.875rem', 
            fontWeight: 600, 
            marginBottom: '0.75rem',
            color: 'var(--color-text)' 
          }}>
            Size Preview
          </Box>
          <Grid columns="3" gap="2">
            {previewSizes.map(s => (
              <Box
                key={s}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem',
                  background: s === size ? 'var(--accent-2)' : 'var(--color-surface)',
                  border: s === size ? '2px solid var(--accent-9)' : '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-2)',
                  transition: 'all 0.2s ease',
                }}
              >
                {IconComponent ? (
                  <IconComponent 
                    size={s} 
                    style={getIconStyle(s)} 
                  />
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
                <Box as="span" style={{ 
                  fontSize: '0.75rem', 
                  color: s === size ? 'var(--accent-9)' : 'var(--color-text-secondary)',
                  fontWeight: s === size ? 700 : 500,
                }}>
                  {s}px
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  }
);

IconPreview.displayName = 'IconPreview';
export default IconPreview;
