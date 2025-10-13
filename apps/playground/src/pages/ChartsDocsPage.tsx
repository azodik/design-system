import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Charts from "../docs/Charts.mdx";
import { LineChart, AreaChart, BarChart, PieChart, Card, CardContent } from "@azodik/ui";
import { ComponentNavigation } from "../components/docs";
import SidebarLayout from "../components/sidebar/Sidebar";
import "../styles/docs.css";

const components = {
  LineChart: LineChart,
  AreaChart: AreaChart,
  BarChart: BarChart,
  PieChart: PieChart,
  Card: Card,
  CardContent: CardContent,
};

export default function ChartsDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Charts", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Charts />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
