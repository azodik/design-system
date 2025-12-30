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
        padding: '2.5rem 1.5rem',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-4)',
        cursor: 'pointer',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-9)';
        e.currentTarget.style.transform = 'translateY(-12px)';
        e.currentTarget.style.boxShadow = '0 30px 60px -12px rgba(0, 0, 0, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.1)';
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
          copyBtn.style.transform = 'translateY(-10px)';
        }
      }}
    >
      <Box
        className="copy-indicator"
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          padding: '0.4rem 0.75rem',
          fontSize: '0.625rem',
          background: 'linear-gradient(135deg, var(--accent-9), var(--accent-11))',
          color: 'white',
          borderRadius: 'var(--radius-2)',
          opacity: 0,
          transform: 'translateY(-10px)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          fontWeight: 800,
          letterSpacing: '0.08em',
          boxShadow: '0 4px 12px rgba(var(--accent-9-rgb), 0.3)',
          zIndex: 5,
        }}
      >
        COPY NAME
      </Box>

      <Box
        style={{
          width: '80px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-background)',
          color: 'var(--color-text)',
          borderRadius: 'var(--radius-4)',
          marginBottom: '1.5rem',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          border: '1px solid var(--color-border-subtle)',
          boxShadow: 'var(--shadow-2)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--accent-9)';
          e.currentTarget.style.color = 'var(--accent-9)';
          e.currentTarget.style.transform = 'rotate(10deg) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
          e.currentTarget.style.color = 'var(--color-text)';
          e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
        }}
      >
        {IconComponent ? (
          <IconComponent size={40} />
        ) : (
          <Box
            style={{
              width: '40px',
              height: '40px',
              background: 'var(--color-border)',
              borderRadius: 'var(--radius-2)',
            }}
          />
        )}
      </Box>
      <Box
        as="span"
        style={{
          fontSize: '1rem',
          fontWeight: 700,
          color: 'var(--color-text)',
          textAlign: 'center',
          width: '100%',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          marginBottom: '0.35rem',
          fontFamily: 'var(--font-montserrat), sans-serif',
          letterSpacing: '-0.01em',
        }}
      >
        {icon.displayName}
      </Box>
      <Box
        as="span"
        style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'var(--color-text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          opacity: 0.6,
        }}
      >
        {icon.category}
      </Box>
    </Box>
  );
}
