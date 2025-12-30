import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { SidebarToggleIcon, SparklesIcon } from "@azodik/icons";
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
  Search,
  SearchIndex,
  SearchableItem,
  NotificationCenter,
  Notification,
} from "@azodik/ui";
import { componentsMenuItems, ComponentMenuItem } from "@/data/componentsMenu";
import ThemeToggle from "../ThemeToggle";
import LanguageSelector from "../LanguageSelector";
import { useLanguageTranslation } from "@/hooks/useLanguageTranslation";
import { routes } from "@/config/routes";
import { buildSearchIndex } from "@/utils/buildSearchIndex";
import { UI_VERSION } from "../../utils/version";

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
  showBreadcrumb,
}: SidebarLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, currentLanguage } = useLanguageTranslation();

  // Initialize search index
  const [searchIndex] = useState<SearchIndex>(() => buildSearchIndex());

  const handleSearchSelect = (item: SearchableItem) => {
    navigate(item.url);
  };

  // Sample notifications for testing
  const [notifications, setNotifications] = useState<Notification[]>(() => [
    {
      id: "1",
      title: "Welcome to Azodik UI!",
      message: "Explore our components and start building amazing interfaces.",
      type: "info",
      timestamp: new Date(Date.now() - 3600 * 1000), // 1 hour ago
      read: false,
    },
    {
      id: "2",
      title: "New Feature Alert",
      message: "We just released a new Notification Center component. Check it out!",
      type: "success",
      timestamp: new Date(Date.now() - 2 * 24 * 3600 * 1000), // 2 days ago
      read: false,
      actions: [
        {
          label: "Learn More",
          onClick: () => {
            navigate("/components/docs/notification-center");
          },
        },
      ],
    },
    {
      id: "3",
      title: "Documentation Updated",
      message: "The sidebar documentation has been updated with new examples.",
      type: "info",
      timestamp: new Date(Date.now() - 7 * 24 * 3600 * 1000), // 7 days ago
      read: true,
    },
  ]);

  const handleNotificationClick = (notification: Notification) => {
    console.log("Notification clicked:", notification);
    setNotifications((prev) =>
      prev.map((n) => (n.id === notification.id ? { ...n, read: true } : n)),
    );
  };

  const handleNotificationDismiss = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

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
    const pathParts = location.pathname.split("/");

    // Handle /components/docs/componentName pattern
    if (pathParts[1] === "components" && pathParts[2] === "docs" && pathParts[3]) {
      if (pathParts[3] === "getting-started") {
        return "Getting Started";
      }
      const componentName = pathParts[3].charAt(0).toUpperCase() + pathParts[3].slice(1);
      return componentName;
    }

    // Handle /components/componentName pattern (fallback)
    if (pathParts[1] === "components" && pathParts[2]) {
      if (pathParts[2] === "getting-started") {
        return "Getting Started";
      }
      const componentName = pathParts[2].charAt(0).toUpperCase() + pathParts[2].slice(1);
      return componentName;
    }

    return null;
  };

  // Generate breadcrumb items based on current route
  const getBreadcrumbItems = () => {
    const currentComponent = getCurrentComponent();

    // For mobile view, show only component name (even if breadcrumbItems prop is passed)
    if (isSmallScreen && currentComponent) {
      return [{ label: currentComponent, current: true }];
    }

    // For desktop view, use passed breadcrumbItems or generate default
    if (breadcrumbItems) {
      return breadcrumbItems;
    }

    // Generate default desktop breadcrumb
    const items: Array<{
      label: string;
      href?: string;
      current?: boolean;
    }> = [{ label: "Components", href: "/components" }];

    if (currentComponent) {
      items.push({ label: currentComponent, current: true });
    } else {
      items.push({ label: "Design System", current: true });
    }

    return items;
  };

  return (
    <div className="sidebar-layout">
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
        />
      )}

      <SidebarComponent
        width={isSmallScreen ? 280 : isSidebarCollapsed ? 60 : 280}
        className={`${!isSmallScreen && isSidebarCollapsed ? "sidebar-collapsed" : ""} ${isSmallScreen && isSidebarOpen ? "open" : ""}`}
        showHeader={true}
        showFooter={true}
        showBreadcrumb={showBreadcrumb}
      >
        <SidebarHeader show={true}>
          <SidebarBrand title="Azodik UI" onClick={() => navigate("/")} />
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
                    style={{ cursor: "pointer" }}
                  >
                    {t(item.nameKey)}
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
        showToggleOnDesktop={false}
        isSmallScreen={isSmallScreen}
        hideAdditionalControlsOnMobile={true}
        hideBreadcrumbOnMobile={true}
        version={UI_VERSION}
        languageSelector={<LanguageSelector />}
        searchComponent={
          <Search
            searchIndex={searchIndex}
            onSelect={handleSearchSelect}
            placeholder="Search components..."
            maxResults={8}
            language={currentLanguage}
          />
        }
        showBreadcrumb={showBreadcrumb}
        breadcrumb={
          breadcrumb || (
            <div className="breadcrumb-container">
              <Breadcrumb items={getBreadcrumbItems()} />
            </div>
          )
        }
        additionalControls={[]}
        primaryControls={[
          <Link to={routes.iconsDocs} key="icons-link" className="sidebar-icons-link">
            <SparklesIcon size={18} />
            <span>Icons</span>
          </Link>,
          <ThemeToggle key="theme-toggle" />,
          <NotificationCenter
            key="notification-center"
            notifications={notifications}
            onNotificationClick={handleNotificationClick}
            onNotificationDismiss={handleNotificationDismiss}
            onMarkAllAsRead={handleMarkAllAsRead}
            onClearAll={handleClearAll}
            locale={currentLanguage}
          />,
        ]}
      >
        {children}
      </SidebarMainContent>
    </div>
  );
}
