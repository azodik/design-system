import { MDXProvider } from "@mdx-js/react";
import Tabs from "@/docs/Tabs.mdx";
import {
  Tabs as TabsComponent,
  TabList,
  TabTrigger,
  TabContent,
  Card,
  Box,
  Container,
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
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <Tabs />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
