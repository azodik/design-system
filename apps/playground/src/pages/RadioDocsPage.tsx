import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Radio from "../docs/Radio.mdx";
import { Radio as RadioComponent, Card, CardContent } from "@azodik/ui";
import { ComponentNavigation } from "../components/docs";
import SidebarLayout from "../components/sidebar/Sidebar";
import "../styles/docs.css";

const components = {
  Radio: RadioComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function RadioDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Radio", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Radio />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
