import { routes } from './config/routes';
import React, { lazy } from 'react';

const components = {
	// Design System components
	Home: lazy(() => import('./pages/HomePage')),
	GettingStarted: lazy(() => import('./pages/GettingStartedPage')),
	Playground: lazy(() => import('./pages/PlaygroundPage')),
	TestComponents: lazy(() => import('./pages/TestComponentsPage')),
	AlertDocs: lazy(() => import('./pages/AlertDocsPage')),
	AvatarDocs: lazy(() => import('./pages/AvatarDocsPage')),
	BadgeDocs: lazy(() => import('./pages/BadgeDocsPage')),
	BreadcrumbDocs: lazy(() => import('./pages/BreadcrumbDocsPage')),
	ButtonDocs: lazy(() => import('./pages/ButtonDocsPage')),
	CardDocs: lazy(() => import('./pages/CardDocsPage')),
	CheckboxDocs: lazy(() => import('./pages/CheckboxDocsPage')),
	DataTableDocs: lazy(() => import('./pages/DataTableDocsPage')),
	FormDocs: lazy(() => import('./pages/FormDocsPage')),
	InputDocs: lazy(() => import('./pages/InputDocsPage')),
	ModalDocs: lazy(() => import('./pages/ModalDocsPage')),
	NavigationDocs: lazy(() => import('./pages/NavigationDocsPage')),
	PaginationDocs: lazy(() => import('./pages/PaginationDocsPage')),
	PopoverDocs: lazy(() => import('./pages/PopoverDocsPage')),
	RadioDocs: lazy(() => import('./pages/RadioDocsPage')),
	ScrollAreaDocs: lazy(() => import('./pages/ScrollAreaDocsPage')),
	SelectDocs: lazy(() => import('./pages/SelectDocsPage')),
	SidebarDocs: lazy(() => import('./pages/SidebarDocsPage')),
	SwitchDocs: lazy(() => import('./pages/SwitchDocsPage')),
	TableDocs: lazy(() => import('./pages/TableDocsPage')),
	TabsDocs: lazy(() => import('./pages/TabsDocsPage')),
	TextareaDocs: lazy(() => import('./pages/TextareaDocsPage')),
	ToastDocs: lazy(() => import('./pages/ToastDocsPage')),
	TooltipDocs: lazy(() => import('./pages/TooltipDocsPage')),
};

// Route mapping for easy access
const routeComponents = {
	// Design System routes
	[routes.home]: components.Home,
	[routes.gettingStarted]: components.GettingStarted,
	[routes.playground]: components.Playground,
	[routes.testComponents]: components.TestComponents,
	[routes.alertDocs]: components.AlertDocs,
	[routes.avatarDocs]: components.AvatarDocs,
	[routes.badgeDocs]: components.BadgeDocs,
	[routes.breadcrumbDocs]: components.BreadcrumbDocs,
	[routes.buttonDocs]: components.ButtonDocs,
	[routes.cardDocs]: components.CardDocs,
	[routes.checkboxDocs]: components.CheckboxDocs,
	[routes.datatableDocs]: components.DataTableDocs,
	[routes.formDocs]: components.FormDocs,
	[routes.inputDocs]: components.InputDocs,
	[routes.modalDocs]: components.ModalDocs,
	[routes.navigationDocs]: components.NavigationDocs,
	[routes.paginationDocs]: components.PaginationDocs,
	[routes.popoverDocs]: components.PopoverDocs,
	[routes.radioDocs]: components.RadioDocs,
	[routes.scrollAreaDocs]: components.ScrollAreaDocs,
	[routes.selectDocs]: components.SelectDocs,
	[routes.sidebarDocs]: components.SidebarDocs,
	[routes.switchDocs]: components.SwitchDocs,
	[routes.tableDocs]: components.TableDocs,
	[routes.tabsDocs]: components.TabsDocs,
	[routes.textareaDocs]: components.TextareaDocs,
	[routes.toastDocs]: components.ToastDocs,
	[routes.tooltipDocs]: components.TooltipDocs,
};

// Static routes
const staticRoutes = (Object.keys(routeComponents) as Array<keyof typeof routeComponents>).map(
	(path) => ({
		path: path as string,
		element: React.createElement(routeComponents[path]),
	})
);

// All routes combined
export const allRoutes = [...staticRoutes];

// Export individual route arrays for different purposes
export const publicRoutes = staticRoutes.filter(({ path }: { path: string }) => 
	path === routes.home || 
	path === routes.components || 
	path === routes.playground
);

export const protectedRoutes: any[] = [];

export const authRoutes: any[] = [];

export { routes, components, routeComponents };