import React from "react";
import { Card } from "@azodik/ui";

export const CardPreview = () => (
  <div className="space-y-4">
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-2">Card Title</h3>
      <p className="text-gray-600">This is a card component with some content. Cards are great for organizing information in a clean, structured way.</p>
    </Card>
  </div>
);

export const CardCode = `import React from "react";
import { Card } from "@azodik/ui";

export const CardExample = () => {
  return (
    <div className="space-y-4">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">This is a card component with some content. Cards are great for organizing information in a clean, structured way.</p>
      </Card>
    </div>
  );
};`;
