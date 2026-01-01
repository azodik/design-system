import { MDXProvider } from "@mdx-js/react";
import ActionCenter from "@/docs/ActionCenter.mdx";
import { ActionCenter as ActionCenterComponent, Card, CardContent, Box, Container } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  ActionCenter: ActionCenterComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function ActionCenterDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "ActionCenter", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <ActionCenter />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}

