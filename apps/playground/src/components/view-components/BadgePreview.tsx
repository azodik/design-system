import React from "react";
import { Badge } from "@azodik/ui";

export const BadgePreview = () => (
  <div className="space-y-4">
    <div className="flex gap-3 flex-wrap">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  </div>
);

export const BadgeCode = `import React from "react";
import { Badge } from "@azodik/ui";

export const BadgeExample = () => {
  return (
    <div className="space-y-4">
      <div className="flex gap-3 flex-wrap">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="neutral">Neutral</Badge>
      </div>
    </div>
  );
};`;
