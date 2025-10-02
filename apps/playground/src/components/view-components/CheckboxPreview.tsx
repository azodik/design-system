import React, { useState } from "react";
import { Checkbox, Card } from "@azodik/ui";

export const CheckboxPreview = () => {
  const [newsletter, setNewsletter] = useState(false);
  const [terms, setTerms] = useState(false);
  const [marketing, setMarketing] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Checkbox Sizes</h3>
        <div className="space-y-4">
          <Checkbox
            label="Small checkbox"
            size="sm"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
          />
          <Checkbox
            label="Medium checkbox (default)"
            size="md"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <Checkbox
            label="Large checkbox"
            size="lg"
            checked={marketing}
            onChange={(e) => setMarketing(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
};

export const CheckboxCode = `import React, { useState } from "react";
import { Checkbox, Card } from "@azodik/ui";

export const CheckboxExample = () => {
  const [newsletter, setNewsletter] = useState(false);
  const [terms, setTerms] = useState(false);
  const [marketing, setMarketing] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Checkbox Sizes</h3>
        <div className="space-y-4">
          <Checkbox
            label="Small checkbox"
            size="sm"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
          />
          <Checkbox
            label="Medium checkbox (default)"
            size="md"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <Checkbox
            label="Large checkbox"
            size="lg"
            checked={marketing}
            onChange={(e) => setMarketing(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
};`;
