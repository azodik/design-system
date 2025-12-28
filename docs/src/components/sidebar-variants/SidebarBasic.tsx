import React from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarBrand,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMainContent,
  useResponsiveSidebar,
} from "@azodik/ui";

export function BasicSidebarExample() {
  const { isSidebarOpen, isSmallScreen, handleSidebarToggle } = useResponsiveSidebar();

  return (
    <div style={{ display: "flex", height: "75vh", border: "1px solid var(--color-border)" }}>
      <Sidebar
        width={isSmallScreen ? 280 : 250}
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={handleSidebarToggle}
        isSmallScreen={isSmallScreen}
        collapsed={false}
      >
        <SidebarHeader>
          <SidebarBrand>Basic Sidebar</SidebarBrand>
        </SidebarHeader>
        <SidebarContent style={{ marginLeft: "-30px" }}>
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
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      <SidebarMainContent
        onSidebarToggle={handleSidebarToggle}
        isSidebarCollapsed={false}
        showToggleOnDesktop={false}
        isSmallScreen={isSmallScreen}
      >
        <div className="p-6">
          <h1>Main Content</h1>
          <p>Your application content goes here.</p>
        </div>
      </SidebarMainContent>
    </div>
  );
}
