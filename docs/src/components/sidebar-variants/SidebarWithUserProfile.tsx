import React, { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarBrand,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarUserDropdown,
  SidebarMainContent,
} from "@azodik/ui";

export function SidebarWithUserProfileExample() {
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

  const userMenuItems = [
    {
      label: "Profile",
      onClick: () => {
        // Demo handler - in production, implement actual navigation
      },
    },
    {
      label: "Settings",
      onClick: () => {
        // Demo handler - in production, implement actual navigation
      },
    },
    { divider: true },
    {
      label: "Sign Out",
      onClick: () => {
        // Demo handler - in production, implement actual logout logic
      },
    },
  ];

  return (
    <>
      <style>{`
        .sidebar-user-profile-custom .sidebar-user-dropdown-header {
          padding: 6px 8px !important;
        }
        .sidebar-user-profile-custom .sidebar-user-dropdown-item a {
          padding: 6px 8px !important;
        }
        .sidebar-user-profile-custom .sidebar-user-dropdown-divider {
          margin: 0 8px !important;
        }
        .sidebar-user-profile-custom .sidebar-user-dropdown-content {
          padding: 0 !important;
        }
        .sidebar-user-profile-custom .sidebar-user-dropdown-menu {
          padding: 0 !important;
          margin: 0 !important;
        }
        .sidebar-user-profile-custom .sidebar-user-dropdown-info {
          margin-left: 0 !important;
          padding-left: 0 !important;
        }
        .sidebar-user-profile-custom .sidebar-user-dropdown-avatar {
          margin-right: 8px !important;
        }
        .sidebar-user-profile-custom .sidebar-user-dropdown-item {
          margin: 0 !important;
          padding: 0 !important;
        }
        .sidebar-user-profile-custom .sidebar-user-dropdown-item li {
          margin: 0 !important;
          padding: 0 !important;
        }
        
        /* Mobile and Tablet - Keep Desktop Width */
        @media (max-width: 1024px) {
          .sidebar-user-profile-custom .sidebar-user-dropdown-content {
            position: fixed !important;
            bottom: 60px !important;
            left: 40px !important;
            right: auto !important;
            top: auto !important;
            transform: none !important;
            max-width: 200px !important;
            min-width: 200px !important;
            width: 200px !important;
            z-index: 1001 !important;
          }
          
          .sidebar-user-profile-custom .sidebar-user-dropdown.open .sidebar-user-dropdown-content {
            transform: none !important;
          }
        }
        
        /* Desktop - Keep Original Styling */
        @media (min-width: 1025px) {
          .sidebar-user-profile-custom .sidebar-user-dropdown-content {
            position: absolute !important;
            bottom: 0 !important;
            left: calc(100% + 8px) !important;
            right: auto !important;
            top: auto !important;
            transform: translateX(-8px) !important;
            max-width: 200px !important;
            width: auto !important;
            z-index: 1000 !important;
          }
          
          .sidebar-user-profile-custom .sidebar-user-dropdown.open .sidebar-user-dropdown-content {
            transform: translateX(0) !important;
          }
        }
      `}</style>
      <div
        className="sidebar-user-profile-custom"
        style={{ display: "flex", height: "100vh", border: "1px solid var(--color-border)" }}
      >
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
          width={isSmallScreen ? 280 : 250}
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
            <SidebarBrand>Sidebar with User Profile</SidebarBrand>
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
                <SidebarMenuButton>Reports</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>Settings</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarUserDropdown
              name="John Doe"
              email="john@example.com"
              menuItems={userMenuItems}
            />
          </SidebarFooter>
        </Sidebar>

        <SidebarMainContent
          onSidebarToggle={handleSidebarToggle}
          isSidebarCollapsed={false}
          showToggleOnDesktop={false}
          style={{
            ...(isSmallScreen && {
              width: "100%",
              marginLeft: 0,
            }),
          }}
        >
          <div className="p-6">
            <h1>Admin Dashboard</h1>
            <p>Welcome back, John!</p>
          </div>
        </SidebarMainContent>
      </div>
    </>
  );
}
