import React from "react";
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarBrand, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarUser, SidebarUserDropdown, SidebarMainContent } from "@azodik/ui";
import { SidebarToggleIcon } from "../../icons";

export const SidebarPreview = () => (
  <div className="flex-vertical">
    <div style={{ height: '450px', display: 'flex', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
      <Sidebar width={280} showHeader showFooter
      style={{ height: '100%' }}
      >
        <SidebarHeader>
          <SidebarBrand logo="A" subtitle="Enterprise">
            Azodik Inc
          </SidebarBrand>
        </SidebarHeader>
        
        <SidebarContent style={{ marginLeft: '-25px' }}>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton active>Dashboard</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Users</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Settings</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Reports</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        
        <SidebarFooter>
          <SidebarUserDropdown
            name="John Doe"
            email="john@example.com"
            menuItems={[
              { label: 'Profile', onClick: () => {} },
              { label: 'Settings', onClick: () => {} },
              { divider: true },
              { label: 'Logout', onClick: () => {} }
            ]}
          />
        </SidebarFooter>
      </Sidebar>
      
      <SidebarMainContent
        onSidebarToggle={() => {}}
        isSidebarCollapsed={false}
        showBreadcrumb={true}
        showToggleButton={false}
        sidebarToggleIcon={<SidebarToggleIcon size={16} isCollapsed={false} />}
        breadcrumbItems={[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Overview', current: true }
        ]}
        style={{ height: '100%' }}
      >
        <div style={{ padding: '20px', marginTop: '-50px' }}>
          <h2 style={{ marginBottom: '16px', fontSize: '24px', fontWeight: '600' }}>Dashboard Overview</h2>
          <p style={{ color: '#6b7280', marginBottom: '20px' }}>
            Welcome to your dashboard. Here you can manage your projects and view analytics.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Total Users</h3>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#1f2937' }}>1,234</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Revenue</h3>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#1f2937' }}>$12,345</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Orders</h3>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#1f2937' }}>567</p>
            </div>
          </div>
        </div>
      </SidebarMainContent>
    </div>
  </div>
);

export const SidebarCode = `import React from "react";
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarBrand, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarUser, SidebarUserDropdown, SidebarMainContent } from "@azodik/ui";
import { SidebarToggleIcon } from "../../icons";

export const SidebarPreview = () => (
  <div style={{display: 'flex'}}>
      <Sidebar width={280} showHeader showFooter>
        <SidebarHeader>
          <SidebarBrand logo="A" subtitle="Enterprise">
            Azodik Inc
          </SidebarBrand>
        </SidebarHeader>
        
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton active>Dashboard</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Users</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Settings</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Reports</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        
        <SidebarFooter>
          <SidebarUserDropdown
            name="John Doe"
            email="john@example.com"
            menuItems={[
              { label: 'Profile', onClick: () => {} },
              { label: 'Settings', onClick: () => {} },
              { divider: true },
              { label: 'Logout', onClick: () => {} }
            ]}
          />
        </SidebarFooter>
      </Sidebar>
      
      <SidebarMainContent
        onSidebarToggle={() => {}}
        isSidebarCollapsed={false}
        showBreadcrumb={true}
        showToggleButton={false}
        sidebarToggleIcon={<SidebarToggleIcon size={16} isCollapsed={false} />}
        breadcrumbItems={[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Overview', current: true }
        ]}>
        Your Content
      </SidebarMainContent>
    </div>
);`;
