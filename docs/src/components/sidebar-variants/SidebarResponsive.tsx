import React, { useState, useEffect } from 'react';
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarBrand,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMainContent
} from '@azodik/ui';
import { 
  HomeIcon, 
  BarChartIcon, 
  MailIcon, 
  SettingsIcon 
} from '@azodik/icons';

export function SidebarResponsiveExample() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
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
    <div style={{ display: 'flex', height: '75vh', border: '1px solid var(--color-border)' }}>
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
        width={isSmallScreen ? 280 : (isCollapsed ? 60 : 250)}
        collapsed={!isSmallScreen && isCollapsed}
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
          <SidebarBrand>Responsive Sidebar</SidebarBrand>
        </SidebarHeader>
        <SidebarContent style={{ marginLeft: '-30px' }}>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                active
                icon={<HomeIcon size={16} />}
              >
                Home
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton 
                icon={<BarChartIcon size={16} />}
              >
                Analytics
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton 
                icon={<MailIcon size={16} />}
              >
                Messages
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton 
                icon={<SettingsIcon size={16} />}
              >
                Settings
              </SidebarMenuButton>
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
            width: '100%',
            marginLeft: 0
          })
        }}
      >
        <div className="p-6">
          <h1>Responsive Layout</h1>
          <p>This sidebar adapts to different screen sizes.</p>
          <p>On mobile: Full-width overlay</p>
          <p>On desktop: Collapsible sidebar</p>
        </div>
      </SidebarMainContent>
    </div>
  );
}
