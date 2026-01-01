import { MDXProvider } from "@mdx-js/react";
import BottomNavigation from "@/docs/BottomNavigation.mdx";
import {
  BottomNavigation as BottomNavigationComponent,
  Card,
  CardContent,
  Box,
  Container,
} from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  BottomNavigation: BottomNavigationComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function BottomNavigationDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "BottomNavigation", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" className="p-2">
        <Box className="docs-content">
          <MDXProvider components={components}>
            <BottomNavigation />
          </MDXProvider>
          <ComponentNavigation />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
