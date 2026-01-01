import { MDXProvider } from "@mdx-js/react";
import StatusBadge from "@/docs/StatusBadge.mdx";
import { StatusBadge as StatusBadgeComponent, Card, CardContent, Box, Container } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  StatusBadge: StatusBadgeComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function StatusBadgeDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "StatusBadge", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <StatusBadge />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}

