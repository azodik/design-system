'use client';

import { Box, Button } from '@azodik/ui';
import { getIconComponent } from '@/lib/icon-loader';
import type { IconInfo } from '@/types/icon';

interface IconCardProps {
  icon: IconInfo;
  onClick: () => void;
}

export default function IconCard({ icon, onClick }: IconCardProps) {
  const IconComponent = getIconComponent(icon.componentName);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(icon.componentName);
    // You could add a toast here if available
  };

  return (
    <Box
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5rem',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-4)',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-9)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-4)';
        const copyBtn = e.currentTarget.querySelector('.copy-indicator') as HTMLElement;
        if (copyBtn) copyBtn.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        const copyBtn = e.currentTarget.querySelector('.copy-indicator') as HTMLElement;
        if (copyBtn) copyBtn.style.opacity = '0';
      }}
    >
      <Box
        className="copy-indicator"
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          padding: '0.25rem 0.5rem',
          fontSize: '0.625rem',
          background: 'var(--accent-9)',
          color: 'white',
          borderRadius: 'var(--radius-2)',
          opacity: 0,
          transition: 'opacity 0.2s',
          fontWeight: 600,
        }}
      >
        COPY NAME
      </Box>

      <Box
        style={{
          width: '64px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text)',
          marginBottom: '1rem',
          transition: 'color 0.2s',
        }}
      >
        {IconComponent ? (
          <IconComponent size={32} />
        ) : (
          <Box
            style={{
              width: '32px',
              height: '32px',
              background: 'var(--color-border)',
              borderRadius: 'var(--radius-2)',
            }}
          />
        )}
      </Box>
      <Box
        as="span"
        style={{
          fontSize: '0.8125rem',
          fontWeight: 500,
          color: 'var(--color-text)',
          textAlign: 'center',
          width: '100%',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {icon.displayName}
      </Box>
      <Box
        as="span"
        style={{
          fontSize: '0.6875rem',
          color: 'var(--color-text-secondary)',
          marginTop: '0.25rem',
        }}
      >
        {icon.category}
      </Box>
    </Box>
  );
}
