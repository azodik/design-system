import React from "react";
import { Alert } from "@azodik/ui";

export const AlertPreview = () => (
  <div className="flex-vertical">
    <Alert variant="success" title="Success!" onClose={() => {}}>
      Your changes have been saved successfully.
    </Alert>
    <Alert variant="warning" title="Warning">
      Please review your information before proceeding.
    </Alert>
    <Alert variant="error" title="Error">
      Something went wrong. Please try again.
    </Alert>
    <Alert variant="info" title="Info">
      Here's some helpful information for you.
    </Alert>
  </div>
);

export const AlertCode = `import React from "react";
import { Alert } from "@azodik/ui";

export const AlertExample = () => {
  return (
    <div className="flex-vertical">
      <Alert variant="success" title="Success!" onClose={() => {}}>
        Your changes have been saved successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        Please review your information before proceeding.
      </Alert>
      <Alert variant="error" title="Error">
        Something went wrong. Please try again.
      </Alert>
      <Alert variant="info" title="Info">
        Here's some helpful information for you.
      </Alert>
    </div>
  );
};`;
