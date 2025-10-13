import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Breadcrumb from "../docs/Breadcrumb.mdx";
import { Breadcrumb as BreadcrumbComponent, Card, CardContent } from "@azodik/ui";
import SidebarLayout from "../components/sidebar/Sidebar";
import "../styles/docs.css";

const components = {
  Breadcrumb: BreadcrumbComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function BreadcrumbDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Breadcrumb", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Breadcrumb />
          </MDXProvider>
        </div>
      </div>
    </SidebarLayout>
  );
}
