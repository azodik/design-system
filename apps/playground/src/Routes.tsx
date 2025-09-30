import { routes } from './config/routes';
import React, { lazy } from 'react';

const components = {
	// Design System components
	Home: lazy(() => import('./pages/HomePage')),
	ComponentPage: lazy(() => import('./pages/ComponentPage')),
	Playground: lazy(() => import('./pages/PlaygroundPage')),
};

// Route mapping for easy access
const routeComponents = {
	// Design System routes
	[routes.home]: components.Home,
	[routes.components]: components.ComponentPage,
	[routes.playground]: components.Playground,
};

// Dynamic component routes
const componentRoutes = [
	{ path: "/components/:componentName", element: React.createElement(components.ComponentPage) },
];

// Static routes
const staticRoutes = (Object.keys(routeComponents) as Array<keyof typeof routeComponents>).map(
	(path) => ({
		path: path as string,
		element: React.createElement(routeComponents[path]),
	})
);

// All routes combined
export const allRoutes = [...staticRoutes, ...componentRoutes];

// Export individual route arrays for different purposes
export const publicRoutes = staticRoutes.filter(({ path }: { path: string }) => 
	path === routes.home || 
	path === routes.components || 
	path === routes.playground
);

export const protectedRoutes: any[] = [];

export const authRoutes: any[] = [];

export { routes, components, routeComponents };