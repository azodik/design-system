import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Checkbox from "../docs/Checkbox.mdx";
import { Checkbox as CheckboxComponent, Card, CardContent } from "@azodik/ui";
import SidebarLayout from "../components/sidebar/Sidebar";
import "../styles/docs.css";
import { ComponentNavigation } from "../components/docs";

const components = {
  Checkbox: CheckboxComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function CheckboxDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Checkbox", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Checkbox />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
