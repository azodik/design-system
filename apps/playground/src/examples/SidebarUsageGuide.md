# Sidebar Component Usage Guide

## Overview

The Sidebar component is a flexible, composable navigation component that can be used in various layouts. It supports both simple and complex navigation patterns.

## Basic Structure

```tsx
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarItem,
  SidebarBrand,
  SidebarUser,
  SidebarMainContent,
} from "@azodik/ui";

<Sidebar width={280} collapsed={false}>
  <SidebarHeader>
    <SidebarBrand>My App</SidebarBrand>
  </SidebarHeader>

  <SidebarContent>{/* Navigation items */}</SidebarContent>

  <SidebarFooter>
    <SidebarUser>John Doe</SidebarUser>
  </SidebarFooter>
</Sidebar>;
```

## Component Hierarchy

```
Sidebar (Root)
├── SidebarHeader
│   └── SidebarBrand
├── SidebarContent
│   ├── SidebarGroup
│   │   ├── SidebarGroupLabel
│   │   └── SidebarGroupContent
│   │       └── SidebarMenu
│   │           └── SidebarMenuItem
│   │               └── SidebarMenuButton / SidebarItem
└── SidebarFooter
    └── SidebarUser / SidebarUserDropdown
```

## Usage Patterns

### 1. Simple Sidebar

```tsx
function SimpleSidebar() {
  return (
    <Sidebar width={250}>
      <SidebarHeader>
        <SidebarBrand>My App</SidebarBrand>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard" icon={<HomeIcon />}>
              Dashboard
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="/users" icon={<UsersIcon />}>
              Users
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarUser>John Doe</SidebarUser>
      </SidebarFooter>
    </Sidebar>
  );
}
```

### 2. Grouped Navigation

```tsx
function GroupedSidebar() {
  return (
    <Sidebar width={280}>
      <SidebarHeader>
        <SidebarBrand logo={<Logo />}>My App</SidebarBrand>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup title="Main">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="/dashboard">Dashboard</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Management Section */}
        <SidebarGroup title="Management" collapsible>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="/users">Users</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/products">Products</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
```

### 3. With User Dropdown

```tsx
function SidebarWithUserDropdown() {
  const userMenuItems = [
    { label: "Profile", onClick: () => console.log("Profile") },
    { label: "Settings", onClick: () => console.log("Settings") },
    { divider: true },
    { label: "Sign out", onClick: () => console.log("Sign out") },
  ];

  return (
    <Sidebar width={280}>
      {/* ... other content ... */}

      <SidebarFooter>
        <SidebarUserDropdown name="John Doe" email="john@example.com" menuItems={userMenuItems} />
      </SidebarFooter>
    </Sidebar>
  );
}
```

### 4. Collapsible Sidebar

```tsx
function CollapsibleSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar width={280} collapsed={isCollapsed} className="bg-white border-r">
        {/* ... sidebar content ... */}
      </Sidebar>

      <SidebarMainContent
        onSidebarToggle={() => setIsCollapsed(!isCollapsed)}
        isSidebarCollapsed={isCollapsed}
        showToggleButton={true}
      >
        {/* Main content */}
      </SidebarMainContent>
    </div>
  );
}
```

## Props Reference

### Sidebar Props

| Prop             | Type      | Default | Description                  |
| ---------------- | --------- | ------- | ---------------------------- |
| `width`          | `number`  | `250`   | Sidebar width in pixels      |
| `collapsed`      | `boolean` | `false` | Whether sidebar is collapsed |
| `showHeader`     | `boolean` | `true`  | Show/hide header             |
| `showFooter`     | `boolean` | `true`  | Show/hide footer             |
| `showBreadcrumb` | `boolean` | `true`  | Show/hide breadcrumb         |

### SidebarGroup Props

| Prop          | Type         | Default | Description                    |
| ------------- | ------------ | ------- | ------------------------------ |
| `title`       | `string`     | -       | Group title                    |
| `collapsible` | `boolean`    | `false` | Whether group can be collapsed |
| `isOpen`      | `boolean`    | `false` | Initial open state             |
| `onToggle`    | `() => void` | -       | Toggle handler                 |
| `icon`        | `ReactNode`  | -       | Group icon                     |
| `show`        | `boolean`    | `true`  | Show/hide group                |

### SidebarItem Props

| Prop      | Type               | Default | Description    |
| --------- | ------------------ | ------- | -------------- |
| `icon`    | `ReactNode`        | -       | Item icon      |
| `active`  | `boolean`          | `false` | Active state   |
| `badge`   | `string \| number` | -       | Badge content  |
| `tooltip` | `string`           | -       | Tooltip text   |
| `show`    | `boolean`          | `true`  | Show/hide item |

### SidebarUserDropdown Props

| Prop           | Type        | Default | Description         |
| -------------- | ----------- | ------- | ------------------- |
| `name`         | `string`    | -       | User name           |
| `email`        | `string`    | -       | User email          |
| `avatar`       | `ReactNode` | -       | Custom avatar       |
| `companyName`  | `string`    | -       | Company name        |
| `companyEmail` | `string`    | -       | Company email       |
| `menuItems`    | `Array`     | -       | Dropdown menu items |
| `collapsed`    | `boolean`   | `false` | Collapsed state     |

## Styling

### CSS Classes

The sidebar uses the following CSS classes that you can customize:

```css
.sidebar {
  /* Main sidebar container */
}

.sidebar-header {
  /* Header section */
}

.sidebar-content {
  /* Content section */
}

.sidebar-footer {
  /* Footer section */
}

.sidebar-group {
  /* Navigation group */
}

.sidebar-group-header {
  /* Group header */
}

.sidebar-group-content {
  /* Group content */
}

.sidebar-item {
  /* Navigation item */
}

.sidebar-item-icon {
  /* Item icon */
}

.sidebar-item-text {
  /* Item text */
}

.sidebar-item-badge {
  /* Item badge */
}

.sidebar-brand {
  /* Brand section */
}

.sidebar-user {
  /* User section */
}

.sidebar-user-dropdown {
  /* User dropdown */
}
```

### Custom Styling

```tsx
<Sidebar className="bg-gray-900 text-white border-r-2 border-gray-700" width={300}>
  <SidebarHeader className="bg-gray-800 border-b border-gray-700">
    <SidebarBrand className="text-xl font-bold">My App</SidebarBrand>
  </SidebarHeader>

  <SidebarContent className="bg-gray-900">{/* Content */}</SidebarContent>
</Sidebar>
```

## Best Practices

### 1. Use Semantic Structure

```tsx
// ✅ Good: Clear hierarchy
<SidebarGroup title="Navigation">
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton href="/dashboard">Dashboard</SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</SidebarGroup>

// ❌ Bad: Flat structure
<SidebarContent>
  <SidebarMenuButton href="/dashboard">Dashboard</SidebarMenuButton>
</SidebarContent>
```

### 2. Handle Active States

```tsx
function NavigationSidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          href="/dashboard"
          active={activeItem === "dashboard"}
          onClick={() => setActiveItem("dashboard")}
        >
          Dashboard
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
```

### 3. Use Icons Consistently

```tsx
// ✅ Good: Consistent icon usage
<SidebarMenuButton icon={<HomeIcon />}>Home</SidebarMenuButton>
<SidebarMenuButton icon={<UsersIcon />}>Users</SidebarMenuButton>

// ❌ Bad: Inconsistent icons
<SidebarMenuButton icon={<HomeIcon />}>Home</SidebarMenuButton>
<SidebarMenuButton>Users</SidebarMenuButton>
```

### 4. Responsive Design

```tsx
function ResponsiveSidebar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Sidebar width={isMobile ? 0 : 280} collapsed={isMobile} className={isMobile ? "hidden" : ""}>
      {/* Content */}
    </Sidebar>
  );
}
```

## Common Use Cases

### 1. Admin Dashboard

```tsx
function AdminDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar width={280}>
        <SidebarHeader>
          <SidebarBrand logo={<AdminLogo />}>Admin Panel</SidebarBrand>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup title="Overview">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton href="/admin/dashboard">Dashboard</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup title="Management">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton href="/admin/users">Users</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="/admin/settings">Settings</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarUserDropdown
            name="Admin User"
            email="admin@example.com"
            menuItems={adminMenuItems}
          />
        </SidebarFooter>
      </Sidebar>

      <SidebarMainContent>{/* Dashboard content */}</SidebarMainContent>
    </div>
  );
}
```

### 2. E-commerce App

```tsx
function EcommerceApp() {
  return (
    <Sidebar width={300}>
      <SidebarHeader>
        <SidebarBrand logo={<ShopLogo />}>My Store</SidebarBrand>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup title="Sales">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="/orders">Orders</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/products">Products</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup title="Analytics">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="/reports">Reports</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
```

## Troubleshooting

### Common Issues

1. **Sidebar not collapsing**: Check if `collapsed` prop is properly set
2. **Items not showing**: Verify `show` prop is not set to `false`
3. **Styling issues**: Check if CSS classes are properly imported
4. **Click handlers not working**: Ensure `onClick` is properly bound

### Debug Tips

```tsx
// Add debug logging
<SidebarItem
  onClick={(e) => {
    console.log("Item clicked:", e.target);
    // Your handler
  }}
>
  Item
</SidebarItem>
```

## Migration Guide

### From Basic Sidebar

```tsx
// Old way
<div className="sidebar">
  <div className="sidebar-header">Header</div>
  <div className="sidebar-content">Content</div>
</div>

// New way
<Sidebar>
  <SidebarHeader>Header</SidebarHeader>
  <SidebarContent>Content</SidebarContent>
</Sidebar>
```

This guide should help you implement the Sidebar component effectively in your applications!
