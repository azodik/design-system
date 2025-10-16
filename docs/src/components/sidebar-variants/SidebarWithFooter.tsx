import React, { useState, useEffect } from 'react';
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter,
  SidebarBrand,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMainContent
} from '@azodik/ui';

export function SidebarWithFooterExample() {
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
    }
  };

  const closeSidebar = () => {
    if (isSmallScreen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', border: '1px solid var(--color-border)' }}>
      {/* Mobile & Tablet Overlay */}
      {isSmallScreen && isSidebarOpen && (
        <div 
          className="sidebar-overlay open" 
          onClick={closeSidebar}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            opacity: isSidebarOpen ? 1 : 0,
            visibility: isSidebarOpen ? 'visible' : 'hidden',
            transition: 'opacity 0.3s ease, visibility 0.3s ease'
          }}
        />
      )}

      <Sidebar 
        width={isSmallScreen ? 280 : 250}
        showFooter={true}
        className={`${isSmallScreen && isSidebarOpen ? "open" : ""}`}
        style={{
          ...(isSmallScreen && {
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
            zIndex: 1000,
            transition: 'transform 0.3s ease-in-out'
          })
        }}
      >
        <SidebarHeader>
          <SidebarBrand>Sidebar with Footer</SidebarBrand>
        </SidebarHeader>
        <SidebarContent style={{ marginLeft: '-30px' }}>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton active>Dashboard</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Projects</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Tasks</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Calendar</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Reports</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div style={{ padding: '12px', borderTop: '1px solid #e5e7eb', fontSize: '12px', color: '#6b7280' }}>
            <div>Version 1.2.3</div>
            <div>© 2024 My App</div>
          </div>
        </SidebarFooter>
      </Sidebar>
      
      <SidebarMainContent
        onSidebarToggle={handleSidebarToggle}
        isSidebarCollapsed={false}
        showToggleOnDesktop={false}
        style={{
          ...(isSmallScreen && {
            width: '100%',
            marginLeft: 0
          })
        }}
      >
        <div className="p-6">
          <h1>Dashboard</h1>
          <p>This sidebar includes a footer with additional information.</p>
        </div>
      </SidebarMainContent>
    </div>
  );
}
