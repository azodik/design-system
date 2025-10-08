import React, { useState, useEffect } from 'react';
import CodePreviewTabs from '../CodePreviewTabs';
import { AccordionPreview, AccordionCode } from '../view-components/AccordionPreview';
import { AlertPreview, AlertCode } from '../view-components/AlertPreview';
import { ChartsPreview, ChartsCode } from '../view-components/ChartsPreview';
import { DialogPreview, DialogCode } from '../view-components/DialogPreview';
import { DrawerPreview, DrawerCode } from '../view-components/DrawerPreview';
import { AvatarPreview, AvatarCode } from '../view-components/AvatarPreview';
import { BadgePreview, BadgeCode } from '../view-components/BadgePreview';
import { ButtonPreview, ButtonCode } from '../view-components/ButtonPreview';
import { CardPreview, CardCode } from '../view-components/CardPreview';
import { FormPreview, FormCode } from '../view-components/FormPreview';
import { ModalPreview, ModalCode } from '../view-components/ModalPreview';
import { NavigationPreview, NavigationCode } from '../view-components/NavigationPreview';
import { PaginationPreview, PaginationCode } from '../view-components/PaginationPreview';
import { SidebarPreview, SidebarCode } from '../view-components/SidebarPreview';
import { TablePreview, TableCode } from '../view-components/TablePreview';
import { DataTablePreview, DataTableCode } from '../view-components/DataTablePreview';
import { TabsPreview, TabsCode } from '../view-components/TabsPreview';
import { ToastPreview, ToastCode } from '../view-components/ToastPreview';
import { BreadcrumbPreview, BreadcrumbCode } from '../view-components/BreadcrumbPreview';
import { ScrollAreaPreview, ScrollAreaCode } from '../view-components/ScrollAreaPreview';
import { InputPreview, InputCode } from '../view-components/InputPreview';
import { TextareaPreview, TextareaCode } from '../view-components/TextareaPreview';
import { SelectPreview, SelectCode } from '../view-components/SelectPreview';
import { CheckboxPreview, CheckboxCode } from '../view-components/CheckboxPreview';
import { RadioPreview, RadioCode } from '../view-components/RadioPreview';
import { SwitchPreview, SwitchCode } from '../view-components/SwitchPreview';
import { TooltipPreview, TooltipCode } from '../view-components/TooltipPreview';
import { PopoverPreview, PopoverWithSharedState, usePopoverState, getPopoverCode } from '../view-components/PopoverPreview';

interface ComponentRendererProps {
  componentName: string;
}

export const ComponentRenderer = ({ componentName }: ComponentRendererProps) => {
  const [activeTab, setActiveTab] = useState("preview");
  
  // Reset to preview tab when component changes
  useEffect(() => {
    setActiveTab("preview");
  }, [componentName]);
  
  // Special handling for Popover with shared state
  const popoverState = usePopoverState();

  // Component configuration mapping
  const componentConfig = {
    accordion: {
      title: "Accordion",
      description: "Collapsible content sections for organizing information.",
      preview: <AccordionPreview />,
      code: AccordionCode
    },
    alert: {
      title: "Alerts",
      description: "Displays a callout for user attention.",
      preview: <AlertPreview />,
      code: AlertCode
    },
    charts: {
      title: "Charts",
      description: "Data visualization components for displaying trends and metrics.",
      preview: <ChartsPreview />,
      code: ChartsCode
    },
    dialog: {
      title: "Dialog",
      description: "Modal dialog components for displaying content and forms.",
      preview: <DialogPreview />,
      code: DialogCode
    },
    drawer: {
      title: "Drawer",
      description: "Slide-up modal components for mobile-friendly interactions.",
      preview: <DrawerPreview />,
      code: DrawerCode
    },
    avatar: {
      title: "Avatars",
      description: "User profile images and initials for personal identification.",
      preview: <AvatarPreview />,
      code: AvatarCode
    },
    badge: {
      title: "Badges",
      description: "Small status indicators for labels, counts, and notifications.",
      preview: <BadgePreview />,
      code: BadgeCode
    },
    button: {
      title: "Buttons",
      description: "Interactive elements for user actions and navigation.",
      preview: <ButtonPreview />,
      code: ButtonCode
    },
    card: {
      title: "Cards",
      description: "Flexible containers for grouping related content and actions.",
      preview: <CardPreview />,
      code: CardCode
    },
    form: {
      title: "Form Components",
      description: "Input fields, controls, and validation for user data collection.",
      preview: <FormPreview />,
      code: FormCode
    },
    modal: {
      title: "Modal & Overlays",
      description: "Overlay components for dialogs, tooltips, and popovers.",
      preview: <ModalPreview />,
      code: ModalCode
    },
    navigation: {
      title: "Navigation",
      description: "Horizontal navigation bars for site-wide navigation.",
      preview: <NavigationPreview />,
      code: NavigationCode
    },
    pagination: {
      title: "Pagination",
      description: "Navigate through multiple pages of content with page controls.",
      preview: <PaginationPreview />,
      code: PaginationCode
    },
    sidebar: {
      title: "Sidebar",
      description: "Vertical navigation panels for app layouts and navigation.",
      preview: <SidebarPreview />,
      code: SidebarCode
    },
    table: {
      title: "Tables",
      description: "Basic table structure for displaying data in rows and columns.",
      preview: <TablePreview />,
      code: TableCode
    },
    datatable: {
      title: "DataTable",
      description: "Advanced table with sorting, selection, and interactive features.",
      preview: <DataTablePreview />,
      code: DataTableCode
    },
    tabs: {
      title: "Tabs",
      description: "Organize content into multiple panels with tab navigation.",
      preview: <TabsPreview />,
      code: TabsCode
    },
    toast: {
      title: "Toast",
      description: "Temporary notifications that appear and disappear automatically.",
      preview: <ToastPreview />,
      code: ToastCode
    },
    breadcrumb: {
      title: "Breadcrumb",
      description: "Show the current page location within the site hierarchy.",
      preview: <BreadcrumbPreview />,
      code: BreadcrumbCode
    },
    scrollarea: {
      title: "ScrollArea",
      description: "Customizable scrollable areas with different scrollbar sizes.",
      preview: <ScrollAreaPreview />,
      code: ScrollAreaCode
    },
    input: {
      title: "Input",
      description: "Text input fields for user data entry with various types and validation.",
      preview: <InputPreview />,
      code: InputCode
    },
    textarea: {
      title: "Textarea",
      description: "Multi-line text input for longer content and messages.",
      preview: <TextareaPreview />,
      code: TextareaCode
    },
    select: {
      title: "Select",
      description: "Dropdown selection menus for choosing from predefined options.",
      preview: <SelectPreview />,
      code: SelectCode
    },
    checkbox: {
      title: "Checkbox",
      description: "Binary choice controls for enabling or disabling options.",
      preview: <CheckboxPreview />,
      code: CheckboxCode
    },
    radio: {
      title: "Radio",
      description: "Single-choice controls for selecting one option from a group.",
      preview: <RadioPreview />,
      code: RadioCode
    },
    switch: {
      title: "Switch",
      description: "Toggle switches for binary on/off states and settings.",
      preview: <SwitchPreview />,
      code: SwitchCode
    },
    tooltip: {
      title: "Tooltip",
      description: "Contextual information that appears on hover for enhanced user guidance.",
      preview: <TooltipPreview />,
      code: TooltipCode
    },
    popover: {
      title: "Popover",
      description: "Floating panels that appear on click for additional content and actions.",
      preview: <PopoverWithSharedState {...popoverState} />,
      code: getPopoverCode(popoverState.selectedPosition, popoverState.selectedOffset)
    }
  };

  const config = componentConfig[componentName.toLowerCase() as keyof typeof componentConfig];

  if (!config) {
    return (
      <div>
        <h3>Component not found</h3>
        <p>The component "{componentName}" is not available.</p>
      </div>
    );
  }

  return (
    <CodePreviewTabs
      title={config.title}
      description={config.description}
      preview={config.preview}
      code={config.code}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
};
