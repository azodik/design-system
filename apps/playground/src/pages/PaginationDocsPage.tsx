import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Pagination from '../docs/Pagination.mdx';
import { Pagination as PaginationComponent, Card, CardContent } from '@azodik/ui';
import { ComponentNavigation } from '../components/docs';
import SidebarLayout from '../components/sidebar/Sidebar';
import '../styles/docs.css';

const components = {
  Pagination: PaginationComponent,
  Card: Card,
  CardContent: CardContent,
};

export default function PaginationDocsPage() {
  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Pagination", current: true }
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="docs-content">
          <MDXProvider components={components}>
            <Pagination />
          </MDXProvider>
          <ComponentNavigation />
        </div>
      </div>
    </SidebarLayout>
  );
}
