# Real-World Code Examples

This document provides real-world examples of using `@azodik/ui` components in common scenarios.

## Table of Contents

- [Dashboard Layout](#dashboard-layout)
- [Form with Validation](#form-with-validation)
- [Data Table with Filters](#data-table-with-filters)
- [Mobile App Layout](#mobile-app-layout)
- [E-commerce Product Card](#e-commerce-product-card)
- [User Profile](#user-profile)

---

## Dashboard Layout

Complete dashboard example with stat cards, charts, and filters.

```tsx
import {
  StatCard,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  QuickFilters,
  DateRangePicker,
  Charts,
} from "@azodik/ui";
import { useState } from "react";

function Dashboard() {
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [timeRange, setTimeRange] = useState("month");

  return (
    <div className="dashboard">
      {/* Header with filters */}
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="dashboard-filters">
          <QuickFilters
            value={timeRange}
            onChange={setTimeRange}
            options={[
              { value: "today", label: "Today" },
              { value: "week", label: "This Week" },
              { value: "month", label: "This Month" },
              { value: "year", label: "This Year" },
            ]}
          />
          <DateRangePicker value={dateRange} onChange={setDateRange} />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="dashboard-stats">
        <StatCard
          title="Total Revenue"
          value="$45,231"
          change={+12.5}
          description="vs last month"
        />
        <StatCard title="Active Users" value="2,341" change={+8.2} description="vs last month" />
        <StatCard title="Conversion Rate" value="3.2%" change={-2.1} description="vs last month" />
        <StatCard
          title="Avg. Order Value"
          value="$127.50"
          change={+5.4}
          description="vs last month"
        />
      </div>

      {/* Charts */}
      <div className="dashboard-charts">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <Charts.Line data={revenueData} xKey="date" yKey="revenue" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
```

---

## Form with Validation

Complete form example with validation and error handling.

```tsx
import { Input, Button, Select, Alert } from "@azodik/ui";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Submit form
      console.log("Form submitted:", formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <Alert variant="soft" color="grass" title="Success!">
        Your message has been sent successfully.
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <Input
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={errors.name}
        required
      />

      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
        required
      />

      <Select
        label="Subject"
        options={[
          { value: "general", label: "General Inquiry" },
          { value: "support", label: "Support" },
          { value: "sales", label: "Sales" },
        ]}
        value={formData.subject}
        onChange={(value) => setFormData({ ...formData, subject: value })}
        error={errors.subject}
      />

      <Textarea
        label="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        error={errors.message}
        required
        rows={5}
      />

      <Button type="submit" variant="solid" size="md">
        Send Message
      </Button>
    </form>
  );
}
```

---

## Data Table with Filters

Advanced data table with filtering, sorting, and pagination.

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Select,
  Pagination,
} from "@azodik/ui";
import { useState, useMemo } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

function UserTable({ users }: { users: User[] }) {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());
      const matchesRole = !roleFilter || user.role === roleFilter;
      const matchesStatus = !statusFilter || user.status === statusFilter;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, search, roleFilter, statusFilter]);

  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredUsers.slice(start, start + pageSize);
  }, [filteredUsers, page]);

  const totalPages = Math.ceil(filteredUsers.length / pageSize);

  return (
    <div className="user-table">
      {/* Filters */}
      <div className="table-filters">
        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          placeholder="Filter by role"
          options={[
            { value: "", label: "All Roles" },
            { value: "admin", label: "Admin" },
            { value: "user", label: "User" },
            { value: "moderator", label: "Moderator" },
          ]}
          value={roleFilter}
          onChange={setRoleFilter}
        />
        <Select
          placeholder="Filter by status"
          options={[
            { value: "", label: "All Statuses" },
            { value: "active", label: "Active" },
            { value: "inactive", label: "Inactive" },
          ]}
          value={statusFilter}
          onChange={setStatusFilter}
        />
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Badge color={user.status === "active" ? "grass" : "ruby"}>{user.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
```

---

## Mobile App Layout

Mobile-first layout with bottom navigation and swipe actions.

```tsx
import { BottomNavigation, SwipeActions, PullToRefresh, BottomSheet } from "@azodik/ui";
import { useState } from "react";

function MobileApp() {
  const [activeTab, setActiveTab] = useState("home");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setRefreshing(false);
  };

  return (
    <div className="mobile-app">
      {/* Main Content */}
      <PullToRefresh onRefresh={handleRefresh} refreshing={refreshing}>
        <div className="app-content">
          {items.map((item) => (
            <SwipeActions
              key={item.id}
              leftActions={[
                {
                  label: "Archive",
                  onClick: () => archiveItem(item.id),
                  color: "amber",
                },
              ]}
              rightActions={[
                {
                  label: "Delete",
                  onClick: () => deleteItem(item.id),
                  color: "ruby",
                },
              ]}
            >
              <Card>
                <CardContent>{item.content}</CardContent>
              </Card>
            </SwipeActions>
          ))}
        </div>
      </PullToRefresh>

      {/* Bottom Navigation */}
      <BottomNavigation
        value={activeTab}
        onChange={setActiveTab}
        items={[
          { value: "home", label: "Home", icon: <HomeIcon /> },
          { value: "search", label: "Search", icon: <SearchIcon /> },
          { value: "profile", label: "Profile", icon: <ProfileIcon /> },
        ]}
      />

      {/* Bottom Sheet */}
      <BottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} title="Menu">
        <Menu>
          <MenuItem onClick={() => setIsSheetOpen(false)}>Option 1</MenuItem>
          <MenuItem onClick={() => setIsSheetOpen(false)}>Option 2</MenuItem>
        </Menu>
      </BottomSheet>
    </div>
  );
}
```

---

## E-commerce Product Card

Product card with image, price, rating, and actions.

```tsx
import { Card, CardHeader, CardContent, CardFooter, Button, Rating, Badge } from "@azodik/ui";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  inStock: boolean;
  onSale?: boolean;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card variant="surface" className="product-card">
      {product.onSale && (
        <Badge color="ruby" className="product-badge">
          Sale
        </Badge>
      )}

      <CardHeader>
        <img src={product.image} alt={product.name} />
      </CardHeader>

      <CardContent>
        <h3>{product.name}</h3>
        <div className="product-rating">
          <Rating value={product.rating} readOnly />
          <span>({product.rating})</span>
        </div>
        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="solid" size="md" disabled={!product.inStock} fullWidth>
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
}
```

---

## User Profile

User profile page with editable fields and settings.

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  Button,
  Avatar,
  Switch,
  Modal,
} from "@azodik/ui";
import { useState } from "react";

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "Software developer",
    notifications: true,
    darkMode: false,
  });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <div className="user-profile">
      <Card>
        <CardHeader>
          <div className="profile-header">
            <Avatar size="lg" src="/avatar.jpg" alt={profile.name} />
            <div>
              <CardTitle>{profile.name}</CardTitle>
              <p>{profile.email}</p>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {isEditing ? (
            <>
              <Input
                label="Name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
              <Input
                label="Email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
              <Textarea
                label="Bio"
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              />
            </>
          ) : (
            <>
              <p>{profile.bio}</p>
              <div className="profile-settings">
                <div className="setting-item">
                  <span>Email Notifications</span>
                  <Switch
                    checked={profile.notifications}
                    onChange={(checked) => setProfile({ ...profile, notifications: checked })}
                  />
                </div>
                <div className="setting-item">
                  <span>Dark Mode</span>
                  <Switch
                    checked={profile.darkMode}
                    onChange={(checked) => setProfile({ ...profile, darkMode: checked })}
                  />
                </div>
              </div>
            </>
          )}
        </CardContent>

        <CardFooter>
          {isEditing ? (
            <>
              <Button variant="solid" onClick={() => setIsEditing(false)}>
                Save
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={() => setIsEditing(true)}>
                Edit Profile
              </Button>
              <Button variant="ghost" color="ruby" onClick={() => setIsDeleteModalOpen(true)}>
                Delete Account
              </Button>
            </>
          )}
        </CardFooter>
      </Card>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Account"
      >
        <p>Are you sure you want to delete your account? This action cannot be undone.</p>
        <div className="modal-actions">
          <Button
            variant="solid"
            color="ruby"
            onClick={() => {
              // Delete account
              setIsDeleteModalOpen(false);
            }}
          >
            Delete
          </Button>
          <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}
```

---

## Additional Examples

For more examples, see:

- [Component Documentation](./README.md)
- [API Reference](./API_REFERENCE.md)
- [Storybook Examples](#) (Coming soon)

---

**Last Updated**: 2024
