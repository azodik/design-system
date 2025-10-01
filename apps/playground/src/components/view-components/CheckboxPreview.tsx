import React, { useState } from "react";
import { Checkbox, Card } from "@azodik/ui";

export const CheckboxPreview = () => {
  const [newsletter, setNewsletter] = useState(false);
  const [terms, setTerms] = useState(false);
  const [marketing, setMarketing] = useState(true);

  return (
    <div className="space-y-6">
      <Card 
        className="p-6"
        style={{ 
          width: '100%',
          minWidth: '220px',
          maxWidth: '500px'
        }}
      >
        <div className="space-y-4">
          <Checkbox
            label="Subscribe to newsletter"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
          />
          <Checkbox
            label="I agree to the terms and conditions"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <Checkbox
            label="Send me marketing emails"
            checked={marketing}
            onChange={(e) => setMarketing(e.target.checked)}
          />
        </div>
      </Card>
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
      <Card 
        className="p-6"
        style={{ 
          width: '100%',
          minWidth: '320px',
          maxWidth: '500px'
        }}
      >
        <div className="space-y-4">
          <Checkbox
            label="Subscribe to newsletter"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
          />
          <Checkbox
            label="I agree to the terms and conditions"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <Checkbox
            label="Send me marketing emails"
            checked={marketing}
            onChange={(e) => setMarketing(e.target.checked)}
          />
        </div>
      </Card>
    </div>
  );
};`;
