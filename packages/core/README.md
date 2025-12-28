# 🎨 Design System

A comprehensive, modern design system built with CSS custom properties, featuring an orange color palette, dark/light mode support, and a complete set of reusable components.

## ✨ Features

- **🎨 Orange Color Palette** - Beautiful primary and secondary orange colors
- **🌙 Dark/Light Mode** - Full theme support with smooth transitions
- **📱 Responsive Design** - Mobile-first approach with flexible layouts
- **🔤 Montserrat Typography** - Clean, modern font throughout
- **⚡ CSS Custom Properties** - Easy theming and customization
- **🧩 Component Library** - 50+ reusable components
- **🎯 Design Tokens** - Consistent spacing, colors, and typography

## 🚀 Quick Start

### Installation

```bash
npm install azodik-ui-core
```

### Usage

**Option 1: With Default Theme (Recommended)**

```tsx
import "azodik-ui-core";
// or
import "azodik-ui-core/index.css";
```

**Option 2: Without Default Theme (For Custom Themes)**

```tsx
import "azodik-ui-core/base.css";
// Then import your custom theme
import "./my-custom-theme.css";
```

See [THEMING.md](./THEMING.md) for detailed theming guide.

## 🎨 Color Palette

### Primary Colors

- **Primary**: `#f97316` (Orange)
- **Secondary**: `#ea580c` (Darker Orange)
- **Primary Hover**: `#ea580c` (Light) / `#fb923c` (Dark)
- **Secondary Hover**: `#dc2626` (Light) / `#f97316` (Dark)

### Neutral Colors

- **Background**: `#ffffff` (Light) / `#0f172a` (Dark)
- **Text**: `#111827` (Light) / `#f1f5f9` (Dark)
- **Surface**: `#f9fafb` (Light) / `#1e293b` (Dark)
- **Border**: `#e5e7eb` (Light) / `#334155` (Dark)

## 🧩 Components

### Form Components

- **Input Fields** - Text, email, password, search inputs
- **Textarea** - Multi-line text input with resize
- **Select** - Dropdown selection
- **Checkbox & Radio** - Form controls with custom styling
- **Switch** - Toggle switches
- **Form Groups** - Labels, help text, and validation states

### Button Components

- **Primary Button** - Main action buttons
- **Secondary Button** - Secondary actions
- **Outline Button** - Subtle actions
- **Icon Buttons** - Icon-only buttons
- **Button Sizes** - Small, medium, large variants

### Card Components

- **Card** - Content containers with shadows
- **Card Variants** - Different styles and layouts

### Alert Components

- **Success Alert** - Positive feedback
- **Warning Alert** - Caution messages
- **Error Alert** - Error notifications
- **Info Alert** - Informational messages

### Badge Components

- **Badge Variants** - Primary, secondary, success, warning, error, info, neutral
- **Badge Sizes** - Small, medium, large
- **Badge with Icons** - Icons and close buttons

### Avatar Components

- **Avatar Sizes** - Extra small to 2XL
- **Status Indicators** - Online, away, offline, busy
- **Avatar Groups** - Multiple avatars with overflow

### Navigation Components

- **Navigation Bar** - Main navigation with responsive design
- **Breadcrumbs** - Navigation context
- **Pagination** - Data navigation
- **Tabs** - Content organization
- **Sidebar** - Side navigation

### Feedback Components

- **Modal** - Dialog overlays
- **Toast** - Notification messages
- **Tooltip** - Hover information
- **Popover** - Click-triggered content
- **Loading Spinner** - Loading states
- **Progress Bar** - Progress indicators

### Layout Components

- **Container** - Content wrapper with max-width
- **Grid System** - 1-12 column responsive grid
- **Flex Utilities** - Flexbox helpers
- **Spacing Utilities** - Margin and padding classes
- **Text Utilities** - Typography helpers
- **Color Utilities** - Background and text colors
- **Hero Section** - Landing page headers

### Data Display Components

- **Table** - Data tables with variants
- **List** - Structured lists with actions
- **Stats Cards** - Metrics and KPIs
- **Empty State** - No data states

### Icon Components

- **Icon Sizes** - Multiple size variants
- **Icon Colors** - Theme-aware colors
- **Icon Buttons** - Interactive icon buttons
- **Icon Grid** - Icon collections

## 🌙 Dark Mode

The design system includes full dark mode support:

```css
/* Light mode (default) */
:root {
  --color-background: #ffffff;
  --color-text: #111827;
  /* ... other light mode colors */
}

/* Dark mode */
[data-theme="dark"] {
  --color-background: #0f172a;
  --color-text: #f1f5f9;
  /* ... other dark mode colors */
}
```

### JavaScript Theme Switching

```javascript
// Toggle theme
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}
```

## 📱 Responsive Design

All components are mobile-first and responsive:

```css
/* Mobile-first breakpoints */
@media (max-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
  .navbar-nav {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--space-md);
  }
}
```

## 🎯 Design Tokens

### Spacing

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
```

### Typography

```css
--font-family-sans: "Montserrat", system-ui, sans-serif;
--font-size-sm: 0.875rem;
--font-size-md: 1rem;
--font-size-lg: 1.25rem;
```

### Border Radius

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
```

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
```

## 🛠️ Development

### Project Structure

```
design-system/
├── components/          # Component CSS files
│   ├── button.css
│   ├── card.css
│   ├── input.css
│   ├── alert.css
│   ├── badge.css
│   ├── avatar.css
│   ├── navigation.css
│   ├── modal.css
│   ├── layout.css
│   ├── table.css
│   └── icon.css
├── tokens/             # Design tokens
│   └── tokens.css
├── styles/             # Global styles
│   └── globals.css
├── index.html          # Component showcase
├── package.json
└── README.md
```

### Available Scripts

```bash
# Start development server
pnpm  dev

# Build for production
pnpm  build

# Preview production build
pnpm  preview
```

## 🎨 Customization

### Adding New Colors

```css
:root {
  --color-accent: #your-color;
}

[data-theme="dark"] {
  --color-accent: #your-dark-color;
}
```

### Creating Custom Components

```css
.my-component {
  background: var(--color-surface);
  color: var(--color-text);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}
```

## 📚 Usage Examples

### Basic Button

```html
<button class="btn btn-primary">Click me</button>
```

### Card with Content

```html
<div class="card">
  <h4>Card Title</h4>
  <p>Card content goes here.</p>
  <button class="btn btn-primary">Action</button>
</div>
```

### Form with Validation

```html
<div class="form-group">
  <label class="form-label">Email</label>
  <input type="email" class="input" placeholder="Enter email" />
  <div class="form-help">We'll never share your email</div>
</div>
```

### Alert Message

```html
<div class="alert alert-success">
  <span class="alert-icon">✓</span>
  <div class="alert-content">
    <div class="alert-title">Success!</div>
    <div class="alert-message">Your action was completed.</div>
  </div>
</div>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- **Montserrat Font** - Google Fonts
- **CSS Custom Properties** - Modern CSS features
- **Design System Best Practices** - Industry standards

---

**Built with ❤️ using modern CSS and design system principles.**
