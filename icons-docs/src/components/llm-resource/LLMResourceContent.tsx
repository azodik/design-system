'use client';

import { useState } from 'react';
import { Button } from '@azodik/ui';
import { ClipboardCopyIcon, CheckIcon } from '@azodik/icons';

export default function LLMResourceContent() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const contentElement = document.getElementById('llm-resource-content');
    if (!contentElement) return;

    const text = contentElement.textContent || '';
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <Button
      variant={copied ? 'solid' : 'outline'}
      color={copied ? 'azodik' : undefined}
      onClick={handleCopy}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        minWidth: '120px',
      }}
    >
      {copied ? (
        <>
          <CheckIcon size={18} />
          Copied!
        </>
      ) : (
        <>
          <ClipboardCopyIcon size={18} />
          Copy Text
        </>
      )}
    </Button>
  );
}

