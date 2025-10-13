import React from "react";
import { Breadcrumb } from "@azodik/ui";

export const BreadcrumbPreview = () => (
  <div className="space-y-4">
    <Breadcrumb
      items={[{ label: "Home" }, { label: "Components" }, { label: "Breadcrumb", current: true }]}
    />
  </div>
);

export const BreadcrumbCode = `import React from "react";
import { Breadcrumb } from "@azodik/ui";

export const BreadcrumbExample = () => {
  return (
    <div className="space-y-4">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Components", href: "/components" },
          { label: "Breadcrumb", current: true },
        ]}
      />
    </div>
  );
};`;
