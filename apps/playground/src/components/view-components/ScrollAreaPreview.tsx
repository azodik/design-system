import React from "react";
import { Card, ScrollArea } from "@azodik/ui";

export const ScrollAreaPreview = () => (
  <div className="space-y-6" style={{ width: '100%', maxWidth: '800px' }}>
    <div>
      <h3 className="text-lg font-semibold mb-3">Small Scrollbar</h3>
      <Card 
        className="border border-gray-200 rounded-lg p-4"
        style={{ 
          width: '100%',
          minWidth: '250px',
          maxWidth: '100%',
          height: '200px',
          backgroundColor: '#f8fafc'
        }}
      >
        <ScrollArea className="h-24 w-full" scrollbarSize="sm">
          <div className="p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mt-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mt-3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
            </p>
          </div>
        </ScrollArea>
      </Card>
    </div>
  </div>
);

export const ScrollAreaCode = `import React from "react";
import { Card, ScrollArea } from "@azodik/ui";

export const ScrollAreaExample = () => {
  return (
    <div className="space-y-6" style={{ width: '100%', maxWidth: '800px' }}>
      <div>
        <h3 className="text-lg font-semibold mb-3">Small Scrollbar</h3>
        <Card 
          className="border border-gray-200 rounded-lg p-4"
          style={{ 
            width: '100%',
            minWidth: '280px',
            maxWidth: '100%',
            height: '200px',
            backgroundColor: '#f8fafc'
          }}
        >
          <ScrollArea className="h-24 w-full" scrollbarSize="sm">
            <div className="p-4">
              <p className="text-sm text-gray-700">Your Content</p>
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
};`;
