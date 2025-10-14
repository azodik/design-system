# @azodik/icons

A comprehensive collection of React icon components for the Azodik UI design system.

## Installation

```bash
npm install @azodik/icons
```

## Usage

```tsx
import React from 'react';
import { UserIcon, SettingsIcon, ChevronDownIcon } from '@azodik/icons';

function MyComponent() {
  return (
    <div>
      <UserIcon size={24} className="text-blue-500" />
      <SettingsIcon size={20} />
      <ChevronDownIcon size={16} />
    </div>
  );
}
```

## Available Icons

### Navigation Icons
- `ArrowRightIcon` - Right arrow
- `ChevronDownIcon` - Down chevron
- `ChevronDownSmallIcon` - Small down chevron
- `ChevronRightIcon` - Right chevron
- `ChevronUpIcon` - Up chevron
- `LeftLongArrowIcon` - Long left arrow
- `RightLongArrowIcon` - Long right arrow

### User Icons
- `UserIcon` - Basic user icon
- `User3Icon` - User with circle
- `UserAddIcon` - Add user icon
- `UserCheckIcon` - User with checkmark
- `GroupIcon` - Group of users

### Interface Icons
- `ApplicationIcon` - Application icon
- `AppsIcon` - Apps grid icon
- `BarChartIcon` - Bar chart icon
- `CopyIcon` - Copy icon
- `GithubIcon` - GitHub icon
- `MoneyDollarIcon` - Dollar sign
- `SettingsIcon` - Settings gear
- `ShieldIcon` - Shield icon
- `SidebarToggleIcon` - Sidebar toggle
- `TickIcon` - Checkmark

## Props

All icons accept the following props:

```tsx
interface IconProps {
  size?: number;           // Icon size in pixels (default varies by icon)
  className?: string;       // CSS classes
  style?: React.CSSProperties; // Inline styles
  color?: string;          // Icon color (some icons only)
}
```

## Features

- **TypeScript Support**: Full TypeScript definitions included
- **Tree Shakeable**: Import only the icons you need
- **Consistent API**: All icons follow the same prop interface
- **Accessible**: Proper ARIA attributes and semantic markup
- **Customizable**: Size, color, and styling options
- **React 18+ Compatible**: Works with React 18 and 19

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch for changes
npm run dev

# Type check
npm run type-check
```

## License

MIT © Azodik
