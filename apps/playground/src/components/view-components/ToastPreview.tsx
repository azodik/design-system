import React, { useState } from "react";
import { Toast, Button } from "@azodik/ui";

export const ToastPreview = () => {
  const [showTopRight, setShowTopRight] = useState(false);
  const [showTopCenter, setShowTopCenter] = useState(false);
  const [showBottomRight, setShowBottomRight] = useState(false);

  return (
    <div className="space-y-4">
      <div className="text-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <p className="text-gray-500 mb-4">Click buttons to see different toast positions</p>
        <div className="flex gap-2 justify-center flex-wrap" style={{ gap: 'var(--space-sm)' }}>
          <Button onClick={() => setShowTopRight(true)} size="sm">
            Top Right
          </Button>
          <Button onClick={() => setShowTopCenter(true)} size="sm">
            Top Center
          </Button>
          <Button onClick={() => setShowBottomRight(true)} size="sm">
            Bottom Right
          </Button>
        </div>
      </div>
      
      {showTopRight && (
        <Toast
          title="Top Right Toast"
          children="Slides in from the right"
          variant="success"
          position="top-right"
          onClose={() => setShowTopRight(false)}
          autoClose={2000}
        />
      )}
      
      {showTopCenter && (
        <Toast
          title="Top Center Toast"
          children="Pops up from above"
          variant="info"
          position="top-center"
          onClose={() => setShowTopCenter(false)}
          autoClose={2000}
        />
      )}
      
      {showBottomRight && (
        <Toast
          title="Bottom Right Toast"
          children="Slides in from the right at bottom"
          variant="warning"
          position="bottom-right"
          onClose={() => setShowBottomRight(false)}
          autoClose={2000}
        />
      )}
    </div>
  );
};

export const ToastCode = `import React from "react";
import { Toast } from "@azodik/ui";

export const ToastExample = () => {
  return (
    <div className="space-y-4">
      <div className="text-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <p className="text-gray-500 mb-4">Click buttons to see different toast positions</p>
        <div className="flex gap-2 justify-center flex-wrap">
          <Button onClick={() => setShowTopRight(true)} size="sm">
            Top Right
          </Button>
          <Button onClick={() => setShowTopCenter(true)} size="sm">
            Top Center
          </Button>
          <Button onClick={() => setShowBottomRight(true)} size="sm">
            Bottom Right
          </Button>
        </div>
      </div>
      
      {showTopRight && (
        <Toast
          title="Top Right Toast"
          children="Slides in from the right"
          variant="success"
          position="top-right"
          onClose={() => setShowTopRight(false)}
          autoClose={2000}
        />
      )}
      
      {showTopCenter && (
        <Toast
          title="Top Center Toast"
          children="Pops up from above"
          variant="info"
          position="top-center"
          onClose={() => setShowTopCenter(false)}
          autoClose={2000}
        />
      )}
      
      {showBottomRight && (
        <Toast
          title="Bottom Right Toast"
          children="Slides in from the right at bottom"
          variant="warning"
          position="bottom-right"
          onClose={() => setShowBottomRight(false)}
          autoClose={2000}
        />
      )}
    </div>
  );
};`;
