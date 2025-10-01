import React, { useState } from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarItem,
  SidebarBrand,
  SidebarUser,
  SidebarUserDropdown,
  SidebarMainContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent
} from '@azodik/ui';
import { Button, Avatar, Badge } from '@azodik/ui';

// Icons (you can replace with your preferred icon library)
const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 14.5V22h2v-6h2.5l2.54-7.63A1.5 1.5 0 0 1 9.46 8H12c.8 0 1.54.37 2.01.99L16 11l1.99-2.01A2.5 2.5 0 0 1 20 8h2.54c.8 0 1.54.37 2.01.99L27 14.5V22h-2v-6h-2.5z" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
  </svg>
);

const DashboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

export default function SidebarExample() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleSidebarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  // User dropdown menu items
  const userMenuItems = [
    { label: 'Profile', onClick: () => console.log('Profile clicked') },
    { label: 'Settings', onClick: () => console.log('Settings clicked') },
    { divider: true },
    { label: 'Sign out', onClick: () => console.log('Sign out clicked') }
  ];

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Analytics', current: true }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        width={280} 
        collapsed={isCollapsed}
        className="bg-white border-r border-gray-200"
      >
        {/* Sidebar Header */}
        <SidebarHeader className="p-4 border-b border-gray-200">
          <SidebarBrand 
            logo={
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
            }
            subtitle="Design System"
          >
            Azodik
          </SidebarBrand>
        </SidebarHeader>

        {/* Sidebar Content */}
        <SidebarContent className="flex-1 overflow-y-auto">
          {/* Main Navigation */}
          <SidebarGroup title="Main" className="p-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  href="#"
                  icon={<DashboardIcon />}
                  active={activeItem === 'dashboard'}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick('dashboard');
                  }}
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                >
                  Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton
                  href="#"
                  icon={<HomeIcon />}
                  active={activeItem === 'home'}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick('home');
                  }}
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                >
                  Home
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>

          {/* Components Section */}
          <SidebarGroup 
            title="Components" 
            collapsible={true}
            isOpen={true}
            className="p-2"
            chevronDownIcon={<ChevronDownIcon />}
            chevronRightIcon={<ChevronRightIcon />}
          >
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    href="#"
                    icon={<UsersIcon />}
                    active={activeItem === 'users'}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick('users');
                    }}
                    className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                  >
                    Users
                    <Badge variant="primary" className="ml-auto">3</Badge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton
                    href="#"
                    icon={<SettingsIcon />}
                    active={activeItem === 'settings'}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick('settings');
                    }}
                    className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                  >
                    Settings
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Simple Navigation (Alternative approach) */}
          <div className="p-2">
            <SidebarGroupLabel className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Quick Actions
            </SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarItem
                  href="#"
                  icon={<DashboardIcon />}
                  active={activeItem === 'analytics'}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick('analytics');
                  }}
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
                >
                  Analytics
                </SidebarItem>
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </SidebarContent>

        {/* Sidebar Footer */}
        <SidebarFooter className="p-4 border-t border-gray-200">
          <SidebarUserDropdown
            name="John Doe"
            email="john@example.com"
            companyName="Acme Corp"
            companyEmail="john@acme.com"
            menuItems={userMenuItems}
            collapsed={isCollapsed}
            className="w-full"
          />
        </SidebarFooter>
      </Sidebar>

      {/* Main Content Area */}
      <SidebarMainContent
        breadcrumbItems={breadcrumbItems}
        onSidebarToggle={handleSidebarToggle}
        isSidebarCollapsed={isCollapsed}
        showBreadcrumb={true}
        showToggleButton={true}
        hideToggleOnDesktop={false}
        className="flex-1 flex flex-col"
      >
        <div className="flex-1 p-6">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dashboard
            </h1>
            <p className="text-gray-600 mb-8">
              Welcome to your dashboard. Here's what's happening with your projects today.
            </p>

            {/* Sample Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Users</h3>
                <p className="text-3xl font-bold text-orange-500">1,234</p>
                <p className="text-sm text-gray-500 mt-1">+12% from last month</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue</h3>
                <p className="text-3xl font-bold text-green-500">$45,678</p>
                <p className="text-sm text-gray-500 mt-1">+8% from last month</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Orders</h3>
                <p className="text-3xl font-bold text-blue-500">567</p>
                <p className="text-sm text-gray-500 mt-1">+3% from last month</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button variant="primary" onClick={() => console.log('Create clicked')}>
                Create New
              </Button>
              <Button variant="secondary" onClick={() => console.log('Import clicked')}>
                Import Data
              </Button>
              <Button variant="tertiary" onClick={() => console.log('Export clicked')}>
                Export
              </Button>
            </div>

            {/* Sidebar State Info */}
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <h4 className="font-semibold mb-2">Sidebar State:</h4>
              <p className="text-sm text-gray-600">
                Collapsed: {isCollapsed ? 'Yes' : 'No'} | 
                Active Item: {activeItem} | 
                Width: {isCollapsed ? '60px' : '280px'}
              </p>
            </div>
          </div>
        </div>
      </SidebarMainContent>
    </div>
  );
}

// Alternative: Simple Sidebar Layout (Minimal)
export function SimpleSidebarExample() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Simple Sidebar */}
      <Sidebar 
        width={250} 
        collapsed={isCollapsed}
        className="bg-white border-r border-gray-200"
      >
        <SidebarHeader className="p-4">
          <SidebarBrand>My App</SidebarBrand>
        </SidebarHeader>

        <SidebarContent className="p-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" icon={<HomeIcon />}>
                Home
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" icon={<UsersIcon />}>
                Users
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" icon={<SettingsIcon />}>
                Settings
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="p-4">
          <SidebarUser 
            avatar="https://via.placeholder.com/32"
            email="john@example.com"
          >
            John Doe
          </SidebarUser>
        </SidebarFooter>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Simple Layout</h1>
          <Button 
            variant="secondary" 
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            Toggle Sidebar
          </Button>
        </div>
        <p>This is a simple sidebar layout example.</p>
      </div>
    </div>
  );
}

// Alternative: Complex Sidebar with Multiple Groups
export function ComplexSidebarExample() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        width={300} 
        collapsed={isCollapsed}
        className="bg-white border-r border-gray-200"
      >
        <SidebarHeader className="p-4 border-b border-gray-200">
          <SidebarBrand 
            logo={<div className="w-8 h-8 bg-blue-500 rounded"></div>}
            subtitle="v2.0.0"
          >
            Complex App
          </SidebarBrand>
        </SidebarHeader>

        <SidebarContent className="flex-1 overflow-y-auto">
          {/* Dashboard Section */}
          <SidebarGroup title="Dashboard" className="p-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  href="#"
                  icon={<DashboardIcon />}
                  active={activeItem === 'dashboard'}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem('dashboard');
                  }}
                >
                  Overview
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>

          {/* Management Section */}
          <SidebarGroup title="Management" className="p-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  href="#"
                  icon={<UsersIcon />}
                  active={activeItem === 'users'}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem('users');
                  }}
                >
                  Users
                  <Badge variant="error" className="ml-auto">5</Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>

          {/* Settings Section */}
          <SidebarGroup title="Settings" className="p-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  href="#"
                  icon={<SettingsIcon />}
                  active={activeItem === 'settings'}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem('settings');
                  }}
                >
                  General
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4 border-t border-gray-200">
          <SidebarUserDropdown
            name="Admin User"
            email="admin@example.com"
            menuItems={[
              { label: 'Profile', onClick: () => console.log('Profile') },
              { label: 'Account', onClick: () => console.log('Account') },
              { divider: true },
              { label: 'Logout', onClick: () => console.log('Logout') }
            ]}
            collapsed={isCollapsed}
          />
        </SidebarFooter>
      </Sidebar>

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Complex Sidebar Example</h1>
        <p>This example shows a more complex sidebar with multiple groups and features.</p>
      </div>
    </div>
  );
}
