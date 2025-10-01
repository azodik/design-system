import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SidebarLayout from "./sidebar/Sidebar";
import CodePreviewTabs from "./CodePreviewTabs";
import GettingStarted from "./getting-started/GettingStarted";
import {
  Card,
  Breadcrumb,
  useResponsive,
} from "@azodik/ui";
import { AlertPreview, AlertCode } from "./view-components/AlertPreview";
import { AvatarPreview, AvatarCode } from "./view-components/AvatarPreview";
import { BadgePreview, BadgeCode } from "./view-components/BadgePreview";
import { ButtonPreview, ButtonCode } from "./view-components/ButtonPreview";
import { CardPreview, CardCode } from "./view-components/CardPreview";
import { FormPreview, FormCode } from "./view-components/FormPreview";
import { ModalPreview, ModalCode } from "./view-components/ModalPreview";
import { NavigationPreview, NavigationCode } from "./view-components/NavigationPreview";
import { PaginationPreview, PaginationCode } from "./view-components/PaginationPreview";
import { SidebarPreview, SidebarCode } from "./view-components/SidebarPreview";
import { TablePreview, TableCode } from "./view-components/TablePreview";
import { DataTablePreview, DataTableCode } from "./view-components/DataTablePreview";
import { TabsPreview, TabsCode } from "./view-components/TabsPreview";
import { ToastPreview, ToastCode } from "./view-components/ToastPreview";
import { BreadcrumbPreview, BreadcrumbCode } from "./view-components/BreadcrumbPreview";
import { ScrollAreaPreview, ScrollAreaCode } from "./view-components/ScrollAreaPreview";
import { InputPreview, InputCode } from "./view-components/InputPreview";
import { TextareaPreview, TextareaCode } from "./view-components/TextareaPreview";
import { SelectPreview, SelectCode } from "./view-components/SelectPreview";
import { CheckboxPreview, CheckboxCode } from "./view-components/CheckboxPreview";
import { RadioPreview, RadioCode } from "./view-components/RadioPreview";
import { SwitchPreview, SwitchCode } from "./view-components/SwitchPreview";
import { TooltipPreview, TooltipCode } from "./view-components/TooltipPreview";
import { PopoverPreview, PopoverCode } from "./view-components/PopoverPreview";

interface ComponentShowcaseProps {
  showAll?: boolean; // If true, shows all components; if false, shows specific component
}

export default function ComponentShowcase({ showAll = false }: ComponentShowcaseProps) {
  const { componentName } = useParams<{ componentName: string }>();
  const [activeTab, setActiveTab] = useState("preview");

  // Redirect /components to /components/getting-started
  React.useEffect(() => {
    if (showAll) {
      window.history.replaceState(null, '', '/components/getting-started');
    }
  }, [showAll]);

  // Individual component demos

  const renderAlertComponent = () => (
    <CodePreviewTabs
      title="Alerts"
      description="Displays a callout for user attention."
      preview={<AlertPreview />}
      code={AlertCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderAvatarComponent = () => (
    <CodePreviewTabs
      title="Avatars"
      description="User profile images and initials for personal identification."
      preview={<AvatarPreview />}
      code={AvatarCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderBadgeComponent = () => (
    <CodePreviewTabs
      title="Badges"
      description="Small status indicators for labels, counts, and notifications."
      preview={<BadgePreview />}
      code={BadgeCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderButtonComponent = () => (
    <CodePreviewTabs
      title="Buttons"
      description="Interactive elements for user actions and navigation."
      preview={<ButtonPreview />}
      code={ButtonCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderCardComponent = () => (
    <CodePreviewTabs
      title="Cards"
      description="Flexible containers for grouping related content and actions."
      preview={<CardPreview />}
      code={CardCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderFormComponent = () => (
    <CodePreviewTabs
      title="Form Components"
      description="Input fields, controls, and validation for user data collection."
      preview={<FormPreview />}
      code={FormCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderModalComponent = () => (
    <CodePreviewTabs
      title="Modal & Overlays"
      description="Overlay components for dialogs, tooltips, and popovers."
      preview={<ModalPreview />}
      code={ModalCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderTabsComponent = () => (
    <CodePreviewTabs
      title="Tabs"
      description="Organize content into multiple panels with tab navigation."
      preview={<TabsPreview />}
      code={TabsCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderTableComponent = () => (
    <CodePreviewTabs
      title="Tables"
      description="Basic table structure for displaying data in rows and columns."
      preview={<TablePreview />}
      code={TableCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderDataTableComponent = () => (
    <CodePreviewTabs
      title="DataTable"
      description="Advanced table with sorting, selection, and interactive features."
      preview={<DataTablePreview />}
      code={DataTableCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderPaginationComponent = () => (
    <CodePreviewTabs
      title="Pagination"
      description="Navigate through multiple pages of content with page controls."
      preview={<PaginationPreview />}
      code={PaginationCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderBreadcrumbComponent = () => (
    <CodePreviewTabs
      title="Breadcrumb"
      description="Show the current page location within the site hierarchy."
      preview={<BreadcrumbPreview />}
      code={BreadcrumbCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderScrollAreaComponent = () => (
    <CodePreviewTabs
      title="ScrollArea"
      description="Customizable scrollable areas with different scrollbar sizes."
      preview={<ScrollAreaPreview />}
      code={ScrollAreaCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderInputComponent = () => (
    <CodePreviewTabs
      title="Input"
      description="Text input fields for user data entry with various types and validation."
      preview={<InputPreview />}
      code={InputCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderTextareaComponent = () => (
    <CodePreviewTabs
      title="Textarea"
      description="Multi-line text input for longer content and messages."
      preview={<TextareaPreview />}
      code={TextareaCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderSelectComponent = () => (
    <CodePreviewTabs
      title="Select"
      description="Dropdown selection menus for choosing from predefined options."
      preview={<SelectPreview />}
      code={SelectCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderCheckboxComponent = () => (
    <CodePreviewTabs
      title="Checkbox"
      description="Binary choice controls for enabling or disabling options."
      preview={<CheckboxPreview />}
      code={CheckboxCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderRadioComponent = () => (
    <CodePreviewTabs
      title="Radio"
      description="Single-choice controls for selecting one option from a group."
      preview={<RadioPreview />}
      code={RadioCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderSwitchComponent = () => (
    <CodePreviewTabs
      title="Switch"
      description="Toggle switches for binary on/off states and settings."
      preview={<SwitchPreview />}
      code={SwitchCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderTooltipComponent = () => (
    <CodePreviewTabs
      title="Tooltip"
      description="Contextual information that appears on hover for enhanced user guidance."
      preview={<TooltipPreview />}
      code={TooltipCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  const renderPopoverComponent = () => (
    <CodePreviewTabs
      title="Popover"
      description="Floating panels that appear on click for additional content and actions."
      preview={<PopoverPreview />}
      code={PopoverCode}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );

  // Render specific component or all components
  const renderContent = () => {
    if (showAll) {
      // Show getting started content when on /components route
      return <GettingStarted />;
    } else {
      // Show specific component (ComponentDetail page)
      if (!componentName) return null;

      switch (componentName.toLowerCase()) {
        case "getting-started":
          return <GettingStarted />;
        case "alert":
          return renderAlertComponent();
        case "avatar":
          return renderAvatarComponent();
        case "badge":
          return renderBadgeComponent();
        case "breadcrumb":
          return renderBreadcrumbComponent();
        case "scroll-area":
          return renderScrollAreaComponent();
        case "button":
           return renderButtonComponent();
        case "card":
          return renderCardComponent();
        case "checkbox":
          return renderCheckboxComponent();
        case "form":
          return renderFormComponent();
        case "input":
          return renderInputComponent();
        case "modal":
          return renderModalComponent();
        case "navigation":
          return (
            <CodePreviewTabs
              title="Navigation"
              description="Horizontal navigation bars for site-wide navigation."
              preview={<NavigationPreview />}
              code={NavigationCode}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          );
        case "pagination":
          return renderPaginationComponent();
        case "popover":
          return renderPopoverComponent();
        case "radio":
          return renderRadioComponent();
        case "select":
          return renderSelectComponent();
        case "sidebar":
          return (
            <CodePreviewTabs
              title="Sidebar"
              description="Vertical navigation panels for app layouts and navigation."
              preview={<SidebarPreview />}
              code={SidebarCode}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          );
        case "switch":
          return renderSwitchComponent();
        case "table":
          return renderTableComponent();
        case "datatable":
          return renderDataTableComponent();
        case "tabs":
          return renderTabsComponent();
        case "textarea":
          return renderTextareaComponent();
        case "toast":
          return (
            <CodePreviewTabs
              title="Toast"
              description="Temporary notifications that appear and disappear automatically."
              preview={<ToastPreview />}
              code={ToastCode}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          );
        case "tooltip":
          return renderTooltipComponent();
        default:
          return (
            <section className="mb-lg">
              <h2>Component Not Found</h2>
              <p>The component "{componentName}" was not found.</p>
            </section>
          );
      }
    }
  };

  // Determine breadcrumb and title based on mode
  const getBreadcrumbItems = () => {
    if (showAll) {
      return [
        { label: "Components", href: "/components" },
        { label: "Getting Started", current: true },
      ];
    } else {
      return [
        { label: "Components", href: "/components" },
        { 
          label: componentName === 'getting-started' ? 'Getting Started' : 
                 (componentName ? componentName.charAt(0).toUpperCase() + componentName.slice(1) : "Component"), 
          current: true 
        },
      ];
    }
  };

  const getTitle = () => {
    if (showAll) {
      return "Azodik Design System Components";
    } else {
      return componentName 
        ? `${componentName.charAt(0).toUpperCase() + componentName.slice(1)} Component`
        : "Component";
    }
  };

  return (
    <SidebarLayout
      breadcrumb={<Breadcrumb items={getBreadcrumbItems()} />}
    >
      <div className="p-md">
        {/* <h1 className="text-center">{getTitle()}</h1>
        <p className="text-center">
          Device: {deviceType} {isMobile && "(Mobile)"}
        </p> */}

        {renderContent()}
      </div>
    </SidebarLayout>
  );
}
