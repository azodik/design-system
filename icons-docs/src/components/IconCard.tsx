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
      className="icon-card"
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'var(--space-6) var(--space-4)',
        background: 'var(--color-surface)',
        border: '2px solid var(--color-border)',
        borderRadius: 'var(--radius-4)',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-1)',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-9)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 24px -8px rgba(var(--accent-9-rgb, 244, 129, 32), 0.25)';
        const copyBtn = e.currentTarget.querySelector('.copy-indicator') as HTMLElement;
        if (copyBtn) {
          copyBtn.style.opacity = '1';
          copyBtn.style.transform = 'translateY(0)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-1)';
        const copyBtn = e.currentTarget.querySelector('.copy-indicator') as HTMLElement;
        if (copyBtn) {
          copyBtn.style.opacity = '0';
          copyBtn.style.transform = 'translateY(-8px)';
        }
      }}
    >
      <Box
        className="copy-indicator"
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: 'var(--space-3)',
          right: 'var(--space-3)',
          padding: 'var(--space-2) var(--space-3)',
          fontSize: '0.75rem',
          background: 'var(--accent-9)',
          color: 'white',
          borderRadius: 'var(--radius-2)',
          opacity: 0,
          transform: 'translateY(-8px)',
          transition: 'all 0.2s ease',
          fontWeight: 700,
          letterSpacing: '0.05em',
          boxShadow: '0 4px 12px rgba(var(--accent-9-rgb, 244, 129, 32), 0.4)',
          zIndex: 5,
          cursor: 'pointer',
        }}
      >
        Copy
      </Box>

      <Box
        style={{
          width: '72px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-background)',
          color: 'var(--color-text)',
          borderRadius: 'var(--radius-3)',
          marginBottom: 'var(--space-4)',
          transition: 'all 0.3s ease',
          border: '1px solid var(--color-border-subtle)',
        }}
      >
        {IconComponent ? (
          <IconComponent size={36} />
        ) : (
          <Box
            style={{
              width: '36px',
              height: '36px',
              background: 'var(--color-border)',
              borderRadius: 'var(--radius-2)',
            }}
          />
        )}
      </Box>
      
      <Box
        as="span"
        style={{
          fontSize: '0.9375rem',
          fontWeight: 700,
          color: 'var(--color-text)',
          textAlign: 'center',
          width: '100%',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          marginBottom: 'var(--space-2)',
          fontFamily: 'var(--font-montserrat), sans-serif',
          letterSpacing: '-0.01em',
        }}
      >
        {icon.displayName}
      </Box>
      
      <Box
        as="span"
        style={{
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: 'var(--color-text-secondary)',
          textTransform: 'capitalize',
          letterSpacing: '0.02em',
          opacity: 0.7,
        }}
      >
        {icon.category}
      </Box>
    </Box>
  );
}
