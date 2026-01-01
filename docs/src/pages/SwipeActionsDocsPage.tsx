import { MDXProvider } from "@mdx-js/react";
import SwipeActions from "@/docs/SwipeActions.mdx";
import {
  SwipeActions as SwipeActionsComponent,
  Card,
  CardContent,
  Box,
  Container,
} from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  SwipeActions: SwipeActionsComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function SwipeActionsDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "SwipeActions", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <SwipeActions />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
