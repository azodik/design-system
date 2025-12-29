import { routes } from "@/config/routes";
import React, { lazy } from "react";

const components = {
  // Design System components
  Home: lazy(() => import("@/pages/HomePage")),
  GettingStarted: lazy(() => import("@/pages/GettingStartedPage")),
  Playground: lazy(() => import("@/pages/PlaygroundPage")),
  TestComponents: lazy(() => import("@/pages/TestComponentsPage")),
  AccordionDocs: lazy(() => import("@/pages/AccordionDocsPage")),
  AlertDocs: lazy(() => import("@/pages/AlertDocsPage")),
  AvatarDocs: lazy(() => import("@/pages/AvatarDocsPage")),
  BadgeDocs: lazy(() => import("@/pages/BadgeDocsPage")),
  BreadcrumbDocs: lazy(() => import("@/pages/BreadcrumbDocsPage")),
  ButtonDocs: lazy(() => import("@/pages/ButtonDocsPage")),
  BoxDocs: lazy(() => import("@/pages/BoxDocsPage")),
  CardDocs: lazy(() => import("@/pages/CardDocsPage")),
  ChartsDocs: lazy(() => import("@/pages/ChartsDocsPage")),
  CheckboxDocs: lazy(() => import("@/pages/CheckboxDocsPage")),
  ContainerDocs: lazy(() => import("@/pages/ContainerDocsPage")),
  DialogDocs: lazy(() => import("@/pages/DialogDocsPage")),
  DrawerDocs: lazy(() => import("@/pages/DrawerDocsPage")),
  DataTableDocs: lazy(() => import("@/pages/DataTableDocsPage")),
  FeedbackDocs: lazy(() => import("@/pages/FeedbackDocsPage")),
  FlexDocs: lazy(() => import("@/pages/FlexDocsPage")),
  FormDocs: lazy(() => import("@/pages/FormDocsPage")),
  GridDocs: lazy(() => import("@/pages/GridDocsPage")),
  InputDocs: lazy(() => import("@/pages/InputDocsPage")),
  IconsDocs: lazy(() => import("@/pages/IconsDocsPage")),
  ModalDocs: lazy(() => import("@/pages/ModalDocsPage")),
  NavigationDocs: lazy(() => import("@/pages/NavigationDocsPage")),
  PaginationDocs: lazy(() => import("@/pages/PaginationDocsPage")),
  PopoverDocs: lazy(() => import("@/pages/PopoverDocsPage")),
  RadioDocs: lazy(() => import("@/pages/RadioDocsPage")),
  ScrollAreaDocs: lazy(() => import("@/pages/ScrollAreaDocsPage")),
  SelectDocs: lazy(() => import("@/pages/SelectDocsPage")),
  SelectWithSearchDocs: lazy(() => import("@/pages/SelectWithSearchDocsPage")),
  SidebarDocs: lazy(() => import("@/pages/SidebarDocsPage")),
  SwitchDocs: lazy(() => import("@/pages/SwitchDocsPage")),
  TableDocs: lazy(() => import("@/pages/TableDocsPage")),
  TabsDocs: lazy(() => import("@/pages/TabsDocsPage")),
  TextareaDocs: lazy(() => import("@/pages/TextareaDocsPage")),
  ToastDocs: lazy(() => import("@/pages/ToastDocsPage")),
  TooltipDocs: lazy(() => import("@/pages/TooltipDocsPage")),
  ThemingDocs: lazy(() => import("@/pages/ThemingDocsPage")),
  TypographyDocs: lazy(() => import("@/pages/TypographyDocsPage")),
};

// Route mapping for easy access
const routeComponents = {
  // Design System routes
  [routes.home]: components.Home,
  [routes.gettingStarted]: components.GettingStarted,
  [routes.playground]: components.Playground,
  [routes.testComponents]: components.TestComponents,
  [routes.accordionDocs]: components.AccordionDocs,
  [routes.alertDocs]: components.AlertDocs,
  [routes.avatarDocs]: components.AvatarDocs,
  [routes.badgeDocs]: components.BadgeDocs,
  [routes.breadcrumbDocs]: components.BreadcrumbDocs,
  [routes.buttonDocs]: components.ButtonDocs,
  [routes.boxDocs]: components.BoxDocs,
  [routes.cardDocs]: components.CardDocs,
  [routes.chartsDocs]: components.ChartsDocs,
  [routes.checkboxDocs]: components.CheckboxDocs,
  [routes.containerDocs]: components.ContainerDocs,
  [routes.dialogDocs]: components.DialogDocs,
  [routes.drawerDocs]: components.DrawerDocs,
  [routes.datatableDocs]: components.DataTableDocs,
  [routes.feedbackDocs]: components.FeedbackDocs,
  [routes.flexDocs]: components.FlexDocs,
  [routes.formDocs]: components.FormDocs,
  [routes.gridDocs]: components.GridDocs,
  [routes.inputDocs]: components.InputDocs,
  [routes.iconsDocs]: components.IconsDocs,
  [routes.modalDocs]: components.ModalDocs,
  [routes.navigationDocs]: components.NavigationDocs,
  [routes.paginationDocs]: components.PaginationDocs,
  [routes.popoverDocs]: components.PopoverDocs,
  [routes.radioDocs]: components.RadioDocs,
  [routes.scrollAreaDocs]: components.ScrollAreaDocs,
  [routes.selectDocs]: components.SelectDocs,
  [routes.selectWithSearchDocs]: components.SelectWithSearchDocs,
  [routes.sidebarDocs]: components.SidebarDocs,
  [routes.switchDocs]: components.SwitchDocs,
  [routes.tableDocs]: components.TableDocs,
  [routes.tabsDocs]: components.TabsDocs,
  [routes.textareaDocs]: components.TextareaDocs,
  [routes.toastDocs]: components.ToastDocs,
  [routes.tooltipDocs]: components.TooltipDocs,
  [routes.themingDocs]: components.ThemingDocs,
  [routes.typographyDocs]: components.TypographyDocs,
};

// Static routes
const staticRoutes = (Object.keys(routeComponents) as Array<keyof typeof routeComponents>).map(
  (path) => ({
    path: path as string,
    element: React.createElement(routeComponents[path]),
  }),
);

// All routes combined
export const allRoutes = [...staticRoutes];

// Export individual route arrays for different purposes
export const publicRoutes = staticRoutes.filter(
  ({ path }: { path: string }) =>
    path === routes.home || path === routes.components || path === routes.playground,
);

export interface RouteConfig {
  path: string;
  element: React.ReactElement;
}

export const protectedRoutes: RouteConfig[] = [];

export const authRoutes: RouteConfig[] = [];

export { routes, components, routeComponents };
