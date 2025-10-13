import React from "react";
import { Badge } from "@azodik/ui";

export const BadgePreview = () => (
  <div className="container-centered">
    <div className="flex-row-wrap">
      <Badge variant="primary" size="sm" rounded="xs">Primary</Badge>
      <Badge variant="success" size="sm" rounded="xs">Success</Badge>
      <Badge variant="warning" size="sm" rounded="xs">Warning</Badge>
      <Badge variant="error" size="sm" rounded="xs">Error</Badge>
      <Badge variant="info" size="sm" rounded="xs">Info</Badge>
      <Badge variant="neutral" size="sm" rounded="xs">Neutral</Badge>
    </div>

    <div className="flex-row-wrap">
      <Badge variant="primary" size="md" rounded="md">Primary</Badge>
      <Badge variant="success" size="md" rounded="md">Success</Badge>
      <Badge variant="warning" size="md" rounded="md">Warning</Badge>
      <Badge variant="error" size="md" rounded="md">Error</Badge>
      <Badge variant="info" size="md" rounded="md">Info</Badge>
      <Badge variant="neutral" size="md" rounded="md">Neutral</Badge>
    </div>

    <div className="flex-row-wrap">
      <Badge variant="primary" size="lg" rounded="xl">Primary</Badge>
      <Badge variant="success" size="lg" rounded="xl">Success</Badge>
      <Badge variant="warning" size="lg" rounded="xl">Warning</Badge>
      <Badge variant="error" size="lg" rounded="xl">Error</Badge>
      <Badge variant="info" size="lg" rounded="xl">Info</Badge>
      <Badge variant="neutral" size="lg" rounded="xl">Neutral</Badge>
    </div>
  </div>
);

export const BadgeCode = `import React from "react";
import { Badge } from "@azodik/ui";

export const BadgeExample = () => {
  return (
    <div className="flex-vertical">
      <div className="flex-row-wrap">
        <Badge variant="primary" size="sm" rounded="xs">Primary</Badge>
        <Badge variant="success" size="sm" rounded="xs">Success</Badge>
        <Badge variant="warning" size="sm" rounded="xs">Warning</Badge>
        <Badge variant="error" size="sm" rounded="xs">Error</Badge>
        <Badge variant="info" size="sm" rounded="xs">Info</Badge>
        <Badge variant="neutral" size="sm" rounded="xs">Neutral</Badge>
      </div>

      <div className="flex-row-wrap">
        <Badge variant="primary" size="md" rounded="md">Primary</Badge>
        <Badge variant="success" size="md" rounded="md">Success</Badge>
        <Badge variant="warning" size="md" rounded="md">Warning</Badge>
        <Badge variant="error" size="md" rounded="md">Error</Badge>
        <Badge variant="info" size="md" rounded="md">Info</Badge>
        <Badge variant="neutral" size="md" rounded="md">Neutral</Badge>
      </div>

      <div className="flex-row-wrap">
        <Badge variant="primary" size="lg" rounded="xl">Primary</Badge>
        <Badge variant="success" size="lg" rounded="xl">Success</Badge>
        <Badge variant="warning" size="lg" rounded="xl">Warning</Badge>
        <Badge variant="error" size="lg" rounded="xl">Error</Badge>
        <Badge variant="info" size="lg" rounded="xl">Info</Badge>
        <Badge variant="neutral" size="lg" rounded="xl">Neutral</Badge>
      </div>
    </div>
  );
};`;
