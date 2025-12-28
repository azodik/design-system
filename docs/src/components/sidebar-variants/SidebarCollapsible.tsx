import React, { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarBrand,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMainContent,
} from "@azodik/ui";
import { HomeIcon, BarChartIcon, UserIcon } from "@azodik/icons";

export function SidebarCollapsibleExample() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const smallScreen = window.innerWidth <= 1024;
      setIsSmallScreen(smallScreen);

      // If it's a small screen, ensure sidebar is closed initially
      if (smallScreen) {
        setIsSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleSidebarToggle = () => {
    if (isSmallScreen) {
      setIsSidebarOpen(!isSidebarOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const closeSidebar = () => {
    if (isSmallScreen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div style={{ display: "flex", height: "75vh", border: "1px solid var(--color-border)" }}>
      {/* Mobile & Tablet Overlay */}
      {isSmallScreen && isSidebarOpen && (
        <div
          className="sidebar-overlay open"
          onClick={closeSidebar}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              closeSidebar();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
            opacity: isSidebarOpen ? 1 : 0,
            visibility: isSidebarOpen ? "visible" : "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
          }}
        />
      )}

      <Sidebar
        width={isSmallScreen ? 280 : isCollapsed ? 60 : 250}
        collapsed={!isSmallScreen && isCollapsed}
        className={`${isSmallScreen && isSidebarOpen ? "open" : ""}`}
        style={{
          ...(isSmallScreen && {
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
            zIndex: 1000,
            transition: "transform 0.3s ease-in-out",
          }),
        }}
      >
        <SidebarHeader>
          <SidebarBrand>Collapsible Sidebar</SidebarBrand>
        </SidebarHeader>
        <SidebarContent style={{ marginLeft: "-30px" }}>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton active icon={<HomeIcon size={16} />}>
                Home
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton icon={<BarChartIcon size={16} />}>Analytics</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton icon={<UserIcon size={16} />}>Team</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      <SidebarMainContent
        onSidebarToggle={handleSidebarToggle}
        isSidebarCollapsed={isSmallScreen ? false : isCollapsed}
        showToggleOnDesktop={true}
        style={{
          ...(isSmallScreen && {
            width: "100%",
            marginLeft: 0,
          }),
        }}
      >
        <div className="p-6">
          <h1>Main Content</h1>
          <p>Click the toggle button to collapse/expand the sidebar.</p>
        </div>
      </SidebarMainContent>
    </div>
  );
}
