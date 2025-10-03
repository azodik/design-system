import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyIcon, TickIcon } from '../../icons';

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  children, 
  language = 'tsx',
  title 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="relative">
      {title && (
        <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm font-medium rounded-t-lg">
          {title}
        </div>
      )}
      <div 
        className="relative"
        style={{ 
          position: 'relative'
        }}
      >
        <button
          onClick={handleCopy}
          className="absolute z-10 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors duration-200 flex items-center gap-2"
          style={{ top: '10px', right: '10px' }}
          title={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <TickIcon size={16} color="currentColor" />
          ) : (
            <CopyIcon size={16} color="currentColor" />
          )}
        </button>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            borderRadius: title ? '0 0 8px 8px' : '8px',
            fontSize: '14px',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
