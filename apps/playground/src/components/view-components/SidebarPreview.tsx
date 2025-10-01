import React from "react";
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarBrand, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarUser, SidebarUserDropdown } from "@azodik/ui";

export const SidebarPreview = () => (
  <div className="space-y-4">
    <div className="text-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
      <p className="text-gray-500">Sidebar component preview would be displayed here</p>
      <p className="text-sm text-gray-400 mt-2">This would show an interactive sidebar example</p>
    </div>
  </div>
);

export const SidebarCode = `<Sidebar width={280} showHeader showFooter>
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
    </SidebarMenu>
  </SidebarContent>
</Sidebar>`;
