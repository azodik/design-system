import {
  AppsIcon,
  UserIcon,
  ShieldIcon,
  UserCheckIcon,
  User3Icon,
  MoneyDollarIcon,
  SettingsIcon,
  BarChartIcon,
  UserAddIcon,
  GroupIcon,
} from "../icons";

export interface SubMenuItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

export interface MenuItem {
  name: string;
  href?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description?: string;
  subItems?: SubMenuItem[];
  isAccordion?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    name: "Applications",
    href: "/applications",
    icon: AppsIcon,
    description: "Manage your applications",
  },
  {
    name: "User Management",
    icon: UserIcon,
    description: "Manage users and permissions",
    isAccordion: true,
    subItems: [
      { name: "Invite Users", href: "/user-management/invite", icon: UserAddIcon },
      { name: "User Groups", href: "/user-management/groups", icon: GroupIcon },
    ],
  },
  {
    name: "Role Management",
    icon: ShieldIcon,
    description: "Configure roles and permissions",
    isAccordion: true,
    subItems: [
      { name: "All Roles", href: "/role-management", icon: ShieldIcon },
      { name: "Role Templates", href: "/role-management/templates", icon: ShieldIcon },
      { name: "Create Role", href: "/role-management/create", icon: ShieldIcon },
      { name: "Access Control", href: "/role-management/access", icon: ShieldIcon },
    ],
  },
  {
    name: "Teams",
    icon: UserCheckIcon,
    description: "Manage team members",
    isAccordion: true,
    subItems: [
      { name: "All Teams", href: "/teams", icon: GroupIcon },
      { name: "Create Team", href: "/teams/create", icon: UserAddIcon },
      { name: "Team Settings", href: "/teams/settings", icon: SettingsIcon },
    ],
  },
  {
    name: "Analytics",
    icon: BarChartIcon,
    description: "View analytics and reports",
    isAccordion: true,
    subItems: [
      { name: "Dashboard", href: "/analytics/dashboard", icon: BarChartIcon },
      { name: "User Activity", href: "/analytics/activity", icon: BarChartIcon },
      { name: "Security Reports", href: "/analytics/security", icon: BarChartIcon },
      { name: "Usage Metrics", href: "/analytics/usage", icon: BarChartIcon },
    ],
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    description: "Application settings",
    isAccordion: true,
    subItems: [
      { name: "General", href: "/settings/general", icon: SettingsIcon },
      { name: "Security", href: "/settings/security", icon: ShieldIcon },
      { name: "Integrations", href: "/settings/integrations", icon: SettingsIcon },
      { name: "API Keys", href: "/settings/api-keys", icon: SettingsIcon },
    ],
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User3Icon,
    description: "Your profile settings",
  },
  {
    name: "Billing",
    href: "/billing",
    icon: MoneyDollarIcon,
    description: "Billing and subscription",
  },
];
