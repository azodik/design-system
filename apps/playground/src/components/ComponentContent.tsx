import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SidebarLayout from "./sidebar/Sidebar";
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
  Toast,
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
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  DataTable,
  useResponsive,
} from "@azodik/ui";

interface ComponentShowcaseProps {
  showAll?: boolean; // If true, shows all components; if false, shows specific component
}

export default function ComponentShowcase({ showAll = false }: ComponentShowcaseProps) {
  const { componentName } = useParams<{ componentName: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    country: "",
    newsletter: false,
    gender: "",
    notifications: false,
  });

  const { deviceType, isMobile } = useResponsive();

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

  // Individual component demos
  const renderAlertDemo = () => (
    <section className="mb-lg">
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
  );

  const renderAvatarDemo = () => (
    <section className="mb-lg">
      <h2>Avatars</h2>
      <div className="mb-md">
        <Avatar size="sm" initials="JD" />
        <Avatar size="md" initials="JS" className="ml-sm" />
        <Avatar size="lg" initials="BJ" className="ml-sm" />
        <Avatar size="xl" initials="XL" className="ml-sm" />
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
  );

  const renderBadgeDemo = () => (
    <section className="mb-lg">
      <h2>Badges</h2>
      <div className="mb-md">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success" className="ml-sm">Success</Badge>
        <Badge variant="warning" className="ml-sm">Warning</Badge>
        <Badge variant="error" className="ml-sm">Error</Badge>
        <Badge variant="info" className="ml-sm">Info</Badge>
        <Badge variant="neutral" className="ml-sm">Neutral</Badge>
      </div>
    </section>
  );

  const renderButtonDemo = () => (
    <section className="mb-lg">
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
        <div style={{ display: 'flex', gap: 'var(--space-xl)', alignItems: 'flex-start' }}>
          {/* Primary Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', alignItems: 'flex-start' }}>
            <h4 style={{ margin: '0 0 var(--space-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-text)' }}>Primary</h4>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', alignItems: 'flex-start' }}>
            <h4 style={{ margin: '0 0 var(--space-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-text)' }}>Secondary</h4>
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

      {/* Badge Variants */}
      <div className="mb-md">
        <h3>Badge Variants</h3>
        <div className="mb-sm">
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
      </div>
    </section>
  );

  const renderCardDemo = () => (
    <section className="mb-lg">
      <h2>Cards</h2>
      <div className="mb-md">
        <Card className="p-md">
          <h3>Card Title</h3>
          <p>This is a card component with some content.</p>
        </Card>
      </div>
    </section>
  );

  const renderFormDemo = () => (
    <section className="mb-lg">
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
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
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
  );

  const renderModalDemo = () => (
    <section className="mb-lg">
      <h2>Modal & Overlays</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', alignItems: 'flex-start' }}>
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
  );

  const renderTabsDemo = () => (
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
  );

  const renderTableDemo = () => (
    <section className="mb-lg">
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
  );

  const renderPaginationDemo = () => (
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
  );

  const renderBreadcrumbDemo = () => (
    <section className="mb-lg">
      <h2>Breadcrumb</h2>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Components", href: "/components" },
          { label: "Breadcrumb", current: true },
        ]}
      />
    </section>
  );

  // Render specific component or all components
  const renderContent = () => {
    if (showAll) {
      // Show all components (Components page)
      return (
        <>
          <section id="alerts" className="mb-lg">
            {renderAlertDemo()}
          </section>
          <section id="buttons" className="mb-lg">
            {renderButtonDemo()}
          </section>
          <section className="mb-lg">
            {renderAvatarDemo()}
          </section>
          <section id="forms" className="mb-lg">
            {renderFormDemo()}
          </section>
          <section className="mb-lg">
            {renderModalDemo()}
          </section>
          <section className="mb-lg">
            {renderTabsDemo()}
          </section>
          <section id="tables" className="mb-lg">
            {renderTableDemo()}
          </section>
          <section className="mb-lg">
            {renderPaginationDemo()}
          </section>
        </>
      );
    } else {
      // Show specific component (ComponentDetail page)
      if (!componentName) return null;

      switch (componentName.toLowerCase()) {
        case "alert":
          return renderAlertDemo();
        case "avatar":
          return renderAvatarDemo();
        case "badge":
          return renderBadgeDemo();
        case "breadcrumb":
          return renderBreadcrumbDemo();
        case "button":
          return (
            <section className="mb-lg">
              <h2>Buttons</h2>
              
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
                <div style={{ display: 'flex', gap: 'var(--space-xl)', alignItems: 'flex-start' }}>
                  {/* Primary Buttons */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', alignItems: 'flex-start' }}>
                    <h4 style={{ margin: '0 0 var(--space-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-text)' }}>Primary</h4>
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
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', alignItems: 'flex-start' }}>
                    <h4 style={{ margin: '0 0 var(--space-sm) 0', fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--color-text)' }}>Secondary</h4>
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
            </section>
          );
        case "card":
          return renderCardDemo();
        case "checkbox":
          return renderFormDemo();
        case "input":
          return renderFormDemo();
        case "modal":
          return renderModalDemo();
        case "navigation":
          return (
            <section className="mb-lg">
              <h2>Navigation</h2>
              
              {/* Basic Navigation Demo */}
              <div className="mb-md">
                <h3>Basic Navigation</h3>
                <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  <Navigation brand="Azodik">
                    <NavItem href="#" active>Home</NavItem>
                    <NavItem href="#">About</NavItem>
                    <NavItem href="#">Services</NavItem>
                    <NavItem href="#">Contact</NavItem>
                  </Navigation>
                </div>
              </div>
            </section>
          );
        case "pagination":
          return renderPaginationDemo();
        case "popover":
          return renderModalDemo();
        case "radio":
          return renderFormDemo();
        case "select":
          return renderFormDemo();
        case "sidebar":
          return (
            <section className="mb-lg">
              <h2>Sidebar</h2>
              <p>Sidebar component demo would go here.</p>
            </section>
          );
        case "switch":
          return renderFormDemo();
        case "table":
          return renderTableDemo();
        case "tabs":
          return renderTabsDemo();
        case "textarea":
          return renderFormDemo();
        case "toast":
          return (
            <section className="mb-lg">
              <h2>Toast</h2>
              <p>Toast component demo would go here.</p>
            </section>
          );
        case "tooltip":
          return renderModalDemo();
        default:
          return (
            <section className="mb-lg">
              <h2>Component Not Found</h2>
              <p>The component "{componentName}" was not found.</p>
            </section>
          );
      }
    }
  };

  // Determine breadcrumb and title based on mode
  const getBreadcrumbItems = () => {
    if (showAll) {
      return [
        { label: "Components", href: "/components" },
        { label: "Design System", current: true },
      ];
    } else {
      return [
        { label: "Components", href: "/components" },
        { 
          label: componentName ? componentName.charAt(0).toUpperCase() + componentName.slice(1) : "Component", 
          current: true 
        },
      ];
    }
  };

  const getTitle = () => {
    if (showAll) {
      return "Azodik Design System Components";
    } else {
      return componentName 
        ? `${componentName.charAt(0).toUpperCase() + componentName.slice(1)} Component`
        : "Component";
    }
  };

  return (
    <SidebarLayout
      breadcrumb={<Breadcrumb items={getBreadcrumbItems()} />}
    >
      <div className="p-md">
        <h1 className="text-center">{getTitle()}</h1>
        <p className="text-center">
          Device: {deviceType} {isMobile && "(Mobile)"}
        </p>

        {renderContent()}
      </div>
    </SidebarLayout>
  );
}
