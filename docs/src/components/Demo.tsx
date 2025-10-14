import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarToggleIcon, ChevronDownIcon } from "@azodik/icons";
import { menuItems } from "@/data/menuItems";
import {
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Card,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Modal,
  ModalFooter,
  Tooltip,
  Popover,
  Navigation,
  NavItem,
  Breadcrumb,
  Pagination,
  Tabs,
  TabList,
  TabTrigger,
  TabContent,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarBrand,
  SidebarUserDropdown,
  SidebarMainContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  DataTable,
  useResponsive,
} from "@azodik/ui";

export default function Demo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    country: "",
    newsletter: false,
    gender: "",
    notifications: false,
  });

  const { deviceType, isMobile } = useResponsive();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size on mount and resize
  React.useEffect(() => {
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

  const handleGroupToggle = (groupName: string) => {
    setOpenGroup(openGroup === groupName ? null : groupName);
  };

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

  // Sample data for DataTable
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  ];

  const columns = [
    { key: "name" as const, label: "Name", sortable: true },
    { key: "email" as const, label: "Email", sortable: true },
    { key: "role" as const, label: "Role" },
  ];

  return (
    <div className="p-md">
      {/* Back to Home Button */}
      <div className="mb-md">
        <Button
          variant="tertiary"
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            padding: "8px 16px",
          }}
        >
          ← Back to Home
        </Button>
      </div>

      <h1 className="text-center">Azodik Design System Playground</h1>
      <p className="text-center">
        Device: {deviceType} {isMobile && "(Mobile)"}
      </p>

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Components", href: "/components" },
          { label: "Playground", current: true },
        ]}
        className="mb-lg"
      />

      {/* Alerts Section */}
      <section id="alerts" className="mb-lg">
        <h2>Alerts</h2>
        <Alert variant="success" title="Success!" onClose={() => {}}>
          Your changes have been saved successfully.
        </Alert>
        <Alert variant="warning" title="Warning">
          Please review your information before proceeding.
        </Alert>
        <Alert variant="error" title="Error">
          Something went wrong. Please try again.
        </Alert>
        <Alert variant="info" title="Info">
          Here's some helpful information for you.
        </Alert>
      </section>

      {/* Buttons Section */}
      <section id="buttons" className="mb-lg">
        <h2>Buttons & Badges</h2>

        {/* Button Variants */}
        <div className="mb-md">
          <h3>Button Variants</h3>
          <div className="mb-sm">
            <Button variant="primary" onClick={() => alert("Primary clicked!")}>
              Primary Button
            </Button>
            <Button variant="secondary" className="ml-sm">
              Secondary Button
            </Button>
            <Button variant="tertiary" className="ml-sm">
              Tertiary Button
            </Button>
          </div>
        </div>

        {/* Button Sizes */}
        <div className="mb-md">
          <h3>Button Sizes</h3>
          <div style={{ display: "flex", gap: "var(--space-xl)", alignItems: "flex-start" }}>
            {/* Primary Buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-sm)",
                alignItems: "flex-start",
              }}
            >
              <h4
                style={{
                  margin: "0 0 var(--space-sm) 0",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "600",
                  color: "var(--color-text)",
                }}
              >
                Primary
              </h4>
              <Button size="sm" variant="primary">
                Small Button
              </Button>
              <Button size="md" variant="primary">
                Medium Button
              </Button>
              <Button size="lg" variant="primary">
                Large Button
              </Button>
            </div>

            {/* Secondary Buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-sm)",
                alignItems: "flex-start",
              }}
            >
              <h4
                style={{
                  margin: "0 0 var(--space-sm) 0",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "600",
                  color: "var(--color-text)",
                }}
              >
                Secondary
              </h4>
              <Button size="sm" variant="secondary">
                Small Secondary
              </Button>
              <Button size="md" variant="secondary">
                Medium Secondary
              </Button>
              <Button size="lg" variant="secondary">
                Large Secondary
              </Button>
            </div>
          </div>
        </div>
        <div className="mb-md">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success" className="ml-sm">
            Success
          </Badge>
          <Badge variant="warning" className="ml-sm">
            Warning
          </Badge>
          <Badge variant="error" className="ml-sm">
            Error
          </Badge>
          <Badge variant="info" className="ml-sm">
            Info
          </Badge>
          <Badge variant="neutral" className="ml-sm">
            Neutral
          </Badge>
        </div>
      </section>

      {/* Avatars Section */}
      <section className="mb-lg">
        <h2>Avatars</h2>
        <div className="mb-md">
          <Avatar size="sm" initials="JD" />
          <Avatar size="md" initials="JS" className="ml-sm" />
          <Avatar size="lg" initials="BJ" className="ml-sm" />
          <Avatar size="xl" src="https://via.placeholder.com/64" className="ml-sm" />
        </div>
        <div className="mb-md">
          <AvatarGroup max={3}>
            <Avatar size="md" initials="A" />
            <Avatar size="md" initials="B" />
            <Avatar size="md" initials="C" />
            <Avatar size="md" initials="D" />
            <Avatar size="md" initials="E" />
          </AvatarGroup>
        </div>
      </section>

      {/* Forms Section */}
      <section id="forms" className="mb-lg">
        <h2>Form Components</h2>
        <Card className="p-md">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mb-md"
          />
          <Textarea
            label="Message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mb-md"
          />
          <Select
            label="Country"
            options={[
              { value: "us", label: "United States" },
              { value: "ca", label: "Canada" },
              { value: "uk", label: "United Kingdom" },
            ]}
            value={formData.country}
            onChange={(value) => setFormData({ ...formData, country: value })}
            className="mb-md"
          />
          <Checkbox
            label="Subscribe to newsletter"
            checked={formData.newsletter}
            onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
            className="mb-md"
          />
          <div className="mb-md">
            <label className="form-label">Gender</label>
            <Radio
              name="gender"
              value="male"
              label="Male"
              checked={formData.gender === "male"}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            />
            <Radio
              name="gender"
              value="female"
              label="Female"
              checked={formData.gender === "female"}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            />
          </div>
          <Switch
            label="Enable notifications"
            checked={formData.notifications}
            onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
          />
        </Card>
      </section>

      {/* Modal Section */}
      <section className="mb-lg">
        <h2>Modal & Overlays</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-xl)",
            alignItems: "flex-start",
          }}
        >
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>

          <Tooltip content="This is a helpful tooltip">
            <Button>Hover for tooltip</Button>
          </Tooltip>

          <Popover
            isOpen={isPopoverOpen}
            onClose={() => setIsPopoverOpen(false)}
            content="This is popover content"
            title="Popover Title"
          >
            <Button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>Toggle Popover</Button>
          </Popover>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Confirm Action"
          size="md"
        >
          <p>Are you sure you want to proceed with this action?</p>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </section>

      {/* Tabs Section */}
      <section className="mb-lg">
        <h2>Tabs</h2>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabList>
            <TabTrigger value="tab1">Tab 1</TabTrigger>
            <TabTrigger value="tab2">Tab 2</TabTrigger>
            <TabTrigger value="tab3">Tab 3</TabTrigger>
          </TabList>
          <TabContent value="tab1">
            <Card className="p-md">
              <h3>Tab 1 Content</h3>
              <p>This is the content for tab 1.</p>
            </Card>
          </TabContent>
          <TabContent value="tab2">
            <Card className="p-md">
              <h3>Tab 2 Content</h3>
              <p>This is the content for tab 2.</p>
            </Card>
          </TabContent>
          <TabContent value="tab3">
            <Card className="p-md">
              <h3>Tab 3 Content</h3>
              <p>This is the content for tab 3.</p>
            </Card>
          </TabContent>
        </Tabs>
      </section>

      {/* Tables Section */}
      <section id="tables" className="mb-lg">
        <h2>Tables</h2>
        <Card className="p-md">
          <h3>Basic Table</h3>
          <Table striped hover>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Email</TableHeaderCell>
                <TableHeaderCell>Role</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>Admin</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>jane@example.com</TableCell>
                <TableCell>User</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

        <Card className="p-md mt-md">
          <h3>Data Table with Sorting</h3>
          <DataTable
            data={users}
            columns={columns}
            onSort={(key) => console.log("Sort by:", key)}
            onRowClick={(row) => console.log("Row clicked:", row)}
            selectable
            striped
            hover
          />
        </Card>
      </section>

      {/* Pagination */}
      <section className="mb-lg">
        <h2>Pagination</h2>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={setCurrentPage}
          showFirstLast
          showPrevNext
        />
      </section>

      {/* Navigation Section */}
      <section className="mb-lg">
        <h2>Navigation Components</h2>

        {/* Basic Navigation Demo */}
        <div className="mb-md">
          <h3>Basic Navigation</h3>
          <div
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
            }}
          >
            <Navigation brand="Azodik">
              <NavItem href="/home" active>
                Home
              </NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/services">Services</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </Navigation>
          </div>
        </div>
      </section>

      {/* Sidebar Example */}
      <section className="mb-lg">
        <h2>Sidebar Navigation</h2>
        <div style={{ display: "flex", gap: "1rem", height: "500px" }}>
          {/* Mobile & Tablet Overlay */}
          {isSmallScreen && isSidebarOpen && (
            <div className="sidebar-overlay open" onClick={closeSidebar} />
          )}

          <Sidebar
            width={isSmallScreen ? 280 : isSidebarCollapsed ? 60 : 280}
            className={`${!isSmallScreen && isSidebarCollapsed ? "sidebar-collapsed" : ""} ${isSmallScreen && isSidebarOpen ? "open" : ""}`}
          >
            <SidebarHeader>
              <SidebarBrand logo="A" subtitle="Enterprise">
                Azodik Inc
              </SidebarBrand>
            </SidebarHeader>

            <SidebarContent>
              <SidebarMenu>
                {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.isAccordion ? (
                      <SidebarGroup
                        title={item.name}
                        collapsible
                        icon={item.icon ? <item.icon size={16} /> : undefined}
                        chevronDownIcon={<ChevronDownIcon size={20} />}
                        isOpen={openGroup === item.name}
                        onToggle={() => handleGroupToggle(item.name)}
                      >
                        <SidebarMenu>
                          {item.subItems?.map((subItem, subIndex) => (
                            <SidebarMenuItem key={subIndex}>
                              <SidebarMenuButton
                                href={subItem.href}
                                icon={subItem.icon ? <subItem.icon size={16} /> : undefined}
                              >
                                {subItem.name}
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </SidebarGroup>
                    ) : (
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          href={item.href}
                          icon={item.icon ? <item.icon size={16} /> : undefined}
                        >
                          {item.name}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )}
                  </React.Fragment>
                ))}
              </SidebarMenu>
            </SidebarContent>

            <SidebarFooter>
              <SidebarUserDropdown
                name="azodik"
                email="m@example.com"
                companyName="Azodik Inc"
                companyEmail="m@example.com"
                collapsed={isSidebarCollapsed}
                menuItems={[
                  { label: "Upgrade to Pro", onClick: () => console.log("Upgrade to Pro clicked") },
                  { label: "Account", onClick: () => console.log("Account clicked") },
                  { label: "Billing", onClick: () => console.log("Billing clicked") },
                  { label: "Notifications", onClick: () => console.log("Notifications clicked") },
                  { divider: true },
                  { label: "Log out", onClick: () => console.log("Log out clicked") },
                ]}
              />
            </SidebarFooter>
          </Sidebar>

          <SidebarMainContent
            onSidebarToggle={handleSidebarToggle}
            isSidebarCollapsed={isSidebarCollapsed}
            sidebarToggleIcon={<SidebarToggleIcon size={16} isCollapsed={isSidebarCollapsed} />}
            breadcrumb={
              <Breadcrumb
                items={[
                  { label: "Building Your Application", href: "/building" },
                  { label: "Data Fetching", current: true },
                ]}
              />
            }
          >
            {/* Blank Cards */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", flex: 1 }}
            >
              {/* First Card - Smaller */}
              <div
                style={{
                  height: "250px",
                  background: "var(--color-surface)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-text)",
                  opacity: 0.5,
                  fontSize: "var(--font-size-sm)",
                }}
              >
                Content placeholder
              </div>

              {/* Second Card - Larger */}
              <div
                style={{
                  flex: 1,
                  minHeight: "300px",
                  background: "var(--color-surface)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-text)",
                  opacity: 0.5,
                  fontSize: "var(--font-size-sm)",
                }}
              >
                Content placeholder
              </div>

              {/* Third Card - Medium */}
              <div
                style={{
                  height: "200px",
                  background: "var(--color-surface)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-text)",
                  opacity: 0.5,
                  fontSize: "var(--font-size-sm)",
                }}
              >
                Additional content placeholder
              </div>

              {/* Fourth Card - Large */}
              <div
                style={{
                  height: "400px",
                  background: "var(--color-surface)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-text)",
                  opacity: 0.5,
                  fontSize: "var(--font-size-sm)",
                }}
              >
                More content to test scrolling
              </div>
            </div>
          </SidebarMainContent>
        </div>
      </section>
    </div>
  );
}
