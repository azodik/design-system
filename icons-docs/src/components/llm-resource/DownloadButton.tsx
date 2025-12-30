'use client';

import { Button } from '@azodik/ui';
import { DownloadIcon } from '@azodik/icons';

export default function DownloadButton() {
  const handleDownload = () => {
    window.open('/llm-resource.txt', '_blank');
  };

  return (
    <Button
      variant="outline"
      onClick={handleDownload}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      <DownloadIcon size={18} />
      Download TXT
    </Button>
  );
}

