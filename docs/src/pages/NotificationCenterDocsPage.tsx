import { MDXProvider } from "@mdx-js/react";
import NotificationCenter from "@/docs/NotificationCenter.mdx";
import { NotificationCenter as NotificationCenterComponent, Button } from "@azodik/ui";
import { ComponentNavigation } from "@/components/docs";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";

const components = {
  NotificationCenter: NotificationCenterComponent,
  Button: Button,
};

export default function NotificationCenterDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Notification Center", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-2">
        <div className="docs-content">
          <MDXProvider components={components}>
            <NotificationCenter />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
