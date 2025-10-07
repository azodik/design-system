import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarToggleIcon } from "../../icons";
import {
  Sidebar as SidebarComponent,
  SidebarHeader,
  SidebarContent,
  SidebarBrand,
  SidebarMainContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  Breadcrumb,
} from "@azodik/ui";
import { componentsMenuItems, ComponentMenuItem } from "../../data/componentsMenu";

interface SidebarLayoutProps {
  children: React.ReactNode;
  breadcrumbItems?: Array<{
    label: string;
    href?: string;
    current?: boolean;
  }>;
  breadcrumb?: React.ReactNode;
  showBreadcrumb?: boolean;
  showToggleButton?: boolean;
  hideToggleOnDesktop?: boolean;
}

export default function SidebarLayout({
  children,
  breadcrumbItems,
  breadcrumb,
  showBreadcrumb = true,
  showToggleButton = true,
  hideToggleOnDesktop = true,
}: SidebarLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSidebarToggle = () => {
    if (isSmallScreen) {
      setIsSidebarOpen(!isSidebarOpen);
    } else {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  const closeSidebar = () => {
    if (isSmallScreen) {
      setIsSidebarOpen(false);
    }
  };

  const handleComponentClick = (href: string) => {
    navigate(href);
    // Close sidebar on mobile after navigation
    if (isSmallScreen) {
      setIsSidebarOpen(false);
    }
  };

  // Get current component name from URL
  const getCurrentComponent = () => {
    const pathParts = location.pathname.split('/');
    if (pathParts[1] === 'components' && pathParts[2]) {
      if (pathParts[2] === 'getting-started') {
        return 'Getting Started';
      }
      return pathParts[2].charAt(0).toUpperCase() + pathParts[2].slice(1);
    }
    return null;
  };

  // Generate breadcrumb items based on current route
  const getBreadcrumbItems = () => {
    if (breadcrumbItems) return breadcrumbItems;
    
    const currentComponent = getCurrentComponent();
    const items: Array<{
      label: string;
      href?: string;
      current?: boolean;
    }> = [
      { label: "Components", href: "/components" }
    ];
    
    if (currentComponent) {
      items.push({ label: currentComponent, current: true });
    } else {
      items.push({ label: "Design System", current: true });
    }
    
    return items;
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Mobile & Tablet Overlay */}
      {isSmallScreen && isSidebarOpen && (
        <div 
          className="sidebar-overlay open"
          onClick={closeSidebar}
        />
      )}
      
      <SidebarComponent 
        width={isSmallScreen ? 280 : (isSidebarCollapsed ? 60 : 280)} 
        className={`${!isSmallScreen && isSidebarCollapsed ? "sidebar-collapsed" : ""} ${isSmallScreen && isSidebarOpen ? "open" : ""}`}
        showHeader={true}
        showFooter={true}
        showBreadcrumb={true}
        color="white"
      >
        <SidebarHeader show={true}>
          <SidebarBrand 
            logo="A" 
            subtitle="Enterprise" 
            show={true}
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          >
            Azodik Inc
          </SidebarBrand>
        </SidebarHeader>
        
        <SidebarContent>
          <SidebarMenu>
            {componentsMenuItems.map((item: ComponentMenuItem, index: number) => {
              const isActive = location.pathname === item.href;
              return (
                <SidebarMenuItem key={index} show={true}>
                  <SidebarMenuButton 
                    onClick={() => handleComponentClick(item.href)}
                    active={isActive}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.name}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
      </SidebarComponent>
      
      <SidebarMainContent
        onSidebarToggle={handleSidebarToggle}
        isSidebarCollapsed={isSidebarCollapsed}
        sidebarToggleIcon={<SidebarToggleIcon size={16} isCollapsed={isSidebarCollapsed} />}
        showBreadcrumb={showBreadcrumb}
        showToggleButton={showToggleButton}
        hideToggleOnDesktop={hideToggleOnDesktop}
        breadcrumb={breadcrumb || <div className="breadcrumb-container"><Breadcrumb items={getBreadcrumbItems()} /></div>}
      >
        {children}
      </SidebarMainContent>
    </div>
  );
}
