import { MDXProvider } from "@mdx-js/react";
import Tabs from "@/docs/Tabs.mdx";
import {
  Tabs as TabsComponent,
  TabList,
  TabTrigger,
  TabContent,
  Card,
  CardContent,
} from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  Tabs: TabsComponent,
  TabList: TabList,
  TabTrigger: TabTrigger,
  TabContent: TabContent,
  Card: Card,
  CardContent: CardContent,
};

export default function TabsDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Tabs", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Tabs />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
