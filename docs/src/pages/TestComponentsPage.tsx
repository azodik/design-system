import { useState } from "react";
import {
  Button,
  Badge,
  Alert,
  Card,
  Input,
  Modal,
  Toast,
  Tooltip,
  Popover,
  Avatar,
  Breadcrumb,
  Checkbox,
  DataTable,
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
  TableHeaderCell,
  Select,
  ModalHeader,
  ModalFooter,
  Navigation,
  NavItem,
  Pagination,
  Radio,
  ScrollArea,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarBrand,
  SidebarFooter,
  SidebarMainContent,
  SidebarUserDropdown,
  Switch,
  Table,
  Tabs,
  TabContent,
  TabList,
  TabTrigger,
  Textarea,
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
  LineChart,
  AreaChart,
  BarChart,
  PieChart,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogBody,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogClose,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerBody,
  DrawerHeader,
  DrawerTrigger,
  useResponsiveSidebar,
} from "@azodik/ui";
import { SidebarToggleIcon } from "@azodik/icons";

const sampleData = [
  { name: "Jan", value: 400, sales: 2400, revenue: 2400 },
  { name: "Feb", value: 300, sales: 1398, revenue: 1398 },
  { name: "Mar", value: 200, sales: 9800, revenue: 9800 },
  { name: "Apr", value: 278, sales: 3908, revenue: 3908 },
  { name: "May", value: 189, sales: 4800, revenue: 4800 },
  { name: "Jun", value: 239, sales: 3800, revenue: 3800 },
];

const pieData = [
  { name: "Desktop", value: 400, users: 400 },
  { name: "Mobile", value: 300, users: 300 },
  { name: "Tablet", value: 200, users: 200 },
  { name: "Other", value: 100, users: 100 },
];

export default function TestComponentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [showTopRightToast, setShowTopRightToast] = useState(false);
  const [showTopCenterToast, setShowTopCenterToast] = useState(false);
  const [showBottomRightToast, setShowBottomRightToast] = useState(false);

  // Responsive sidebar functionality
  const { isSidebarOpen, isSmallScreen, handleSidebarToggle } = useResponsiveSidebar();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Combined toggle function for both mobile and desktop
  const handleToggle = () => {
    if (isSmallScreen) {
      // Mobile/Tablet: Use responsive toggle
      handleSidebarToggle();
    } else {
      // Desktop: Toggle collapse state
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  return (
    <div className="test-components-page p-4">
      <div className="test-components-header">
        <h1>Test Components</h1>
        <p>Interactive playground to test all default components</p>
      </div>

      <div className="test-components-grid">
        <Alert>Hello! This is an alert.</Alert>
        <Avatar>Hello! This is an avatar.</Avatar>
        <Badge>Hello! This is a badge.</Badge>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Components", href: "/components" },
            { label: "Breadcrumb", current: true },
          ]}
        />
        <Button>Hello! This is a button.</Button>
        <Card>
          Hello! This is a card. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          autem molestiae sed voluptatum excepturi, vero voluptate maiores esse enim quae nihil
          quibusdam iusto asperiores fugiat! Maiores nemo ratione voluptatem sequi.
        </Card>
        <Checkbox label="Hello! This is a checkbox." onChange={() => {}} />
        <DataTable
          data={[
            { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
            { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
          ]}
          columns={[
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "role", label: "Role" },
          ]}
        />
        <Card>
          <form onSubmit={() => {}}>
            <Input
              label="Hello! This is a input."
              onChange={() => {}}
              placeholder="Enter your name"
            />
            <Select
              label="Hello! This is a select."
              onChange={() => {}}
              placeholder="Select your role"
              options={[
                { value: "admin", label: "Admin" },
                { value: "user", label: "User" },
              ]}
            />
          </form>
        </Card>
        <Input label="Hello! This is a input." onChange={() => {}} placeholder="Enter your name" />
        <Card>
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalHeader onClose={() => setIsModalOpen(false)}>
              <h2 className="modal-title">Modal</h2>
            </ModalHeader>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit et
              minus sapiente. Vero incidunt deleniti repellendus quasi sapiente nisi minima iusto
              rem possimus provident laborum nostrum, architecto corporis aliquid.
            </p>
            <ModalFooter>
              <Button onClick={() => setIsModalOpen(false)}>Close</Button>
            </ModalFooter>
          </Modal>
        </Card>
        <Card style={{ width: "100%", height: "auto" }}>
          <Navigation
            brand={<span className="font-bold text-xl">Azodik</span>}
            mobile={true}
            style={{ height: "75px" }}
          >
            <NavItem href="/" active>
              Home
            </NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/services">Services</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </Navigation>
        </Card>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={setCurrentPage}
          showFirstLast
          showPrevNext
        />
        <Card>
          <Popover
            content="This is a simple popover with custom position and offset."
            title="Popover Title"
            position="right"
            offset={20}
            isOpen={isPopoverOpen}
            onClose={() => setIsPopoverOpen(false)}
          >
            <Button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>Toggle Popover</Button>
          </Popover>
        </Card>
        <Card>
          <Radio name="gender" value="male" label="Male" />
          <Radio name="gender" value="female" label="Female" />
          <Radio name="gender" value="other" label="Other" />
        </Card>
        <Card style={{ width: "100%", height: "200px" }}>
          <ScrollArea>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tempore laudantium
              necessitatibus dolor similique repudiandae inventore, neque facere reprehenderit error
              rerum velit sapiente sequi, consequuntur mollitia beatae quisquam eum possimus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tempore laudantium
              necessitatibus dolor similique repudiandae inventore, neque facere reprehenderit error
              rerum velit sapiente sequi, consequuntur mollitia beatae quisquam eum possimus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tempore laudantium
              necessitatibus dolor similique repudiandae inventore, neque facere reprehenderit error
              rerum velit sapiente sequi, consequuntur mollitia beatae quisquam eum possimus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tempore laudantium
              necessitatibus dolor similique repudiandae inventore, neque facere reprehenderit error
              rerum velit sapiente sequi, consequuntur mollitia beatae quisquam eum possimus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tempore laudantium
              necessitatibus dolor similique repudiandae inventore, neque facere reprehenderit error
              rerum velit sapiente sequi, consequuntur mollitia beatae quisquam eum possimus.
            </p>
          </ScrollArea>
        </Card>
        <Card>
          <Select
            label="Hello! This is a select."
            onChange={() => {}}
            placeholder="Select your role"
            options={[
              { value: "admin", label: "Admin" },
              { value: "user", label: "User" },
            ]}
          />
        </Card>
        <div style={{ display: "flex" }}>
          <Sidebar
            width={isSmallScreen ? 280 : 280}
            showHeader
            showFooter
            collapsed={isSidebarCollapsed}
            isSidebarOpen={isSidebarOpen}
            onSidebarToggle={handleSidebarToggle}
            isSmallScreen={isSmallScreen}
          >
            <SidebarHeader>
              <SidebarBrand logo="A" title="Azodik Inc" />
            </SidebarHeader>

            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton active>Dashboard</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>Users</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>Settings</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>Reports</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>

            <SidebarFooter>
              <SidebarUserDropdown
                name="John Doe"
                email="john@example.com"
                menuItems={[
                  { label: "Profile", onClick: () => {} },
                  { label: "Settings", onClick: () => {} },
                  { divider: true },
                  { label: "Logout", onClick: () => {} },
                ]}
              />
            </SidebarFooter>
          </Sidebar>

          <SidebarMainContent
            onSidebarToggle={handleToggle}
            isSidebarCollapsed={isSidebarCollapsed}
            showBreadcrumb={true}
            showToggleOnDesktop={true}
            isSmallScreen={isSmallScreen}
            sidebarToggleIcon={<SidebarToggleIcon size={16} isCollapsed={isSidebarCollapsed} />}
            breadcrumbItems={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Overview", current: true },
            ]}
          >
            Your Content
          </SidebarMainContent>
        </div>
        <Card>
          <Switch label="Hello! This is a switch." onChange={() => {}} />
        </Card>
        <Card style={{ width: "100%" }}>
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
              <TableRow>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>bob@example.com</TableCell>
                <TableCell>User</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <Card>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabList>
              <TabTrigger value="tab1" borderWidth={4} width="100px">
                Tab 1
              </TabTrigger>
              <TabTrigger value="tab2" borderWidth={4} width="100px">
                Tab 2
              </TabTrigger>
              <TabTrigger value="tab3" borderWidth={4} width="100px">
                Tab 3
              </TabTrigger>
            </TabList>

            <TabContent value="tab1">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Tab 1 Content</h3>
                <p className="text-gray-600">This is the content for tab 1.</p>
              </Card>
            </TabContent>

            <TabContent value="tab2">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Tab 2 Content</h3>
                <p className="text-gray-600">This is the content for tab 2.</p>
              </Card>
            </TabContent>

            <TabContent value="tab3">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Tab 3 Content</h3>
                <p className="text-gray-600">This is the content for tab 3.</p>
              </Card>
            </TabContent>
          </Tabs>
        </Card>
        <Card style={{ width: "50%" }}>
          <Textarea
            label="Hello! This is a textarea."
            onChange={() => {}}
            placeholder="Enter your message"
          />
        </Card>
        <Card>
          <div className="flex-gap-sm">
            <Button onClick={() => setShowTopRightToast(true)}>Show Toast (Top Right)</Button>
            <Button onClick={() => setShowTopCenterToast(true)}>Show Toast (Top Center)</Button>
            <Button onClick={() => setShowBottomRightToast(true)}>Show Toast (Bottom Right)</Button>
          </div>

          {showTopRightToast && (
            <Toast
              title="Top Right Toast"
              variant="success"
              position="top-right"
              onClose={() => setShowTopRightToast(false)}
              autoClose={3000}
            >
              This slides in from the right
            </Toast>
          )}

          {showTopCenterToast && (
            <Toast
              title="Top Center Toast"
              variant="info"
              position="top-center"
              onClose={() => setShowTopCenterToast(false)}
              autoClose={3000}
            >
              This pops up from above
            </Toast>
          )}

          {showBottomRightToast && (
            <Toast
              title="Bottom Right Toast"
              variant="warning"
              position="bottom-right"
              onClose={() => setShowBottomRightToast(false)}
              autoClose={3000}
            >
              This slides in from the right at bottom
            </Toast>
          )}
        </Card>
        <Card style={{ width: "50%" }} className="flex justify-center items-center">
          <Tooltip
            content="This is a simple tooltip with custom position and offset."
            position="top"
          >
            <Button>Hover me</Button>
          </Tooltip>
        </Card>
        <div>
          <Accordion>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is this component?</AccordionTrigger>
              <AccordionContent>
                This is an accordion component that allows you to show and hide content sections.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I use it?</AccordionTrigger>
              <AccordionContent>
                This is an accordion component that allows you to show and hide content sections.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I customize it?</AccordionTrigger>
              <AccordionContent>
                This is an accordion component that allows you to show and hide content sections.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <Card style={{ width: "50%" }}>
          <LineChart
            data={sampleData}
            dataKey="sales"
            title="Sales Trend"
            subtitle="Monthly sales performance"
            height={400}
          />
          <AreaChart
            data={sampleData}
            dataKey="revenue"
            title="Revenue Trend"
            subtitle="Monthly revenue performance"
            height={400}
          />
          <BarChart
            data={sampleData}
            dataKey="value"
            title="Monthly Values"
            subtitle="Value distribution by month"
            height={400}
          />
          <PieChart
            data={pieData}
            dataKey="users"
            nameKey="name"
            title="Device Usage"
            subtitle="User distribution by device"
            height={400}
          />
        </Card>
        <Card>
          <Dialog>
            <DialogTrigger>Open Dialog</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <DialogBody>
                <div className="flex-vertical">
                  <Input
                    label="Name"
                    type="text"
                    defaultValue="Pedro Duarte"
                    placeholder="Enter your name"
                  />
                </div>
              </DialogBody>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Save changes</Button>
              </DialogFooter>
              <DialogClose />
            </DialogContent>
          </Dialog>
        </Card>
        <Card>
          <Drawer>
            <DrawerTrigger>Open Drawer</DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>Drawer Header</DrawerHeader>
              <DrawerBody>Drawer Body</DrawerBody>
              <DrawerFooter>Drawer Footer</DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Card>
      </div>
    </div>
  );
}
