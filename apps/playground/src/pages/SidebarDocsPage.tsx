import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Sidebar from "../docs/Sidebar.mdx";
import { Sidebar as SidebarComponent, Card, CardContent } from "@azodik/ui";
import { ComponentNavigation } from "../components/docs";
import SidebarLayout from "../components/sidebar/Sidebar";
import "../styles/docs.css";

const components = {
  Sidebar: SidebarComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function SidebarDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Sidebar", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Sidebar />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
