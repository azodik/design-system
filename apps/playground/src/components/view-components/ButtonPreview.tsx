import React from "react";
import { Button } from "@azodik/ui";

export const ButtonPreview = () => (
  <div className="space-y-6">
    {/* Button Variants */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Button Variants</h3>
      <div className="flex gap-4" style={{ gap: 'var(--space-sm)' }}>
        <Button variant="primary" onClick={() => alert("Primary clicked!")}>
          Primary Button
        </Button>
        <Button variant="secondary">
          Secondary Button
        </Button>
        <Button variant="tertiary">
          Tertiary Button
        </Button>
      </div>
    </div>

    {/* Button Sizes */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Button Sizes</h3>
      <div className="flex flex-col gap-12 items-center" style={{ gap: 'var(--space-sm)' }}>
        <Button size="sm" variant="primary">Small Primary</Button>
        <Button size="md" variant="secondary" width={200}>Medium Secondary</Button>
        <Button size="lg" variant="tertiary" width={300}>Large Tertiary</Button>
      </div>
    </div>
  </div>
);

export const ButtonCode = `import React from "react";
import { Button } from "@azodik/ui";

export const ButtonExample = () => {
  return (
    <div className="space-y-6">
      {/* Button Variants */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Button Variants</h3>
        <div className="flex gap-4">
          <Button variant="primary" onClick={() => alert("Primary clicked!")}>
            Primary Button
          </Button>
          <Button variant="secondary">
            Secondary Button
          </Button>
          <Button variant="tertiary">
            Tertiary Button
          </Button>
        </div>
      </div>

      {/* Button Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Button Sizes</h3>
        <div className="flex flex-col gap-12 items-center">
          <Button size="sm" variant="primary">Small Primary</Button>
          <Button size="md" variant="secondary" width={200}>Medium Secondary</Button>
          <Button size="lg" variant="tertiary" width={300}>Large Tertiary</Button>
        </div>
      </div>
    </div>
  );
};`;
