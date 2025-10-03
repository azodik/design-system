import React from 'react';
import { CodeBlock } from './docs';

export default function GettingStarted() {
  return (
    <div>
      <h1>Getting Started</h1>
      <p>Welcome to the Azodik Design System! This is your starting point for building beautiful, consistent user interfaces.</p>
      
      <h2>Installation</h2>
      <p>Install the Azodik UI package using npm:</p>
      
      <CodeBlock language="bash">
        npm install @azodik/ui
      </CodeBlock>
      
      <h2>Quick Start</h2>
      <p>Once installed, you can start using components in your React application:</p>
      
      <CodeBlock language="jsx">
        {`import React from 'react';
import { Button, Alert, Card } from '@azodik/ui';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Alert variant="success" title="Success!">
        Your changes have been saved.
      </Alert>
      <Card>
        <h3>Welcome to Azodik</h3>
        <p>Start building amazing interfaces!</p>
      </Card>
    </div>
  );
}

export default App;`}
      </CodeBlock>
      
      <h2>Available Components</h2>
      <p>Our design system includes a comprehensive collection of React components:</p>
      
      <ul>
        <li><strong>Alert</strong> - Display important messages to users</li>
        <li><strong>Avatar</strong> - User profile pictures and initials</li>
        <li><strong>Badge</strong> - Small status indicators and labels</li>
        <li><strong>Breadcrumb</strong> - Navigation breadcrumbs</li>
        <li><strong>Button</strong> - Interactive buttons with multiple variants</li>
        <li><strong>Card</strong> - Content containers with headers and footers</li>
        <li><strong>Checkbox</strong> - Form input checkboxes</li>
        <li><strong>DataTable</strong> - Advanced data tables with sorting and filtering</li>
        <li><strong>Form</strong> - Form components and validation</li>
        <li><strong>Input</strong> - Text input fields</li>
        <li><strong>Modal</strong> - Overlay dialogs and popups</li>
        <li><strong>Navigation</strong> - Navigation menus and bars</li>
        <li><strong>Pagination</strong> - Page navigation controls</li>
        <li><strong>Popover</strong> - Floating content containers</li>
        <li><strong>Radio</strong> - Radio button inputs</li>
        <li><strong>ScrollArea</strong> - Custom scrollable areas</li>
        <li><strong>Select</strong> - Dropdown selection inputs</li>
        <li><strong>Sidebar</strong> - Application sidebars and navigation</li>
        <li><strong>Switch</strong> - Toggle switches</li>
        <li><strong>Table</strong> - Data tables</li>
        <li><strong>Tabs</strong> - Tabbed content organization</li>
        <li><strong>Textarea</strong> - Multi-line text inputs</li>
        <li><strong>Toast</strong> - Notification messages</li>
        <li><strong>Tooltip</strong> - Contextual help text</li>
      </ul>
      
      <h2>Styling</h2>
      <p>All components come with built-in styling that follows our design system principles. No additional CSS is required, but you can customize components using props and CSS custom properties.</p>
      
      <h2>Next Steps</h2>
      <ol>
        <li><strong>Explore Components</strong> - Browse through individual component documentation in the sidebar</li>
        <li><strong>View Examples</strong> - Each component page includes live examples and code snippets</li>
        <li><strong>Copy Code</strong> - Use the provided code examples to quickly integrate components</li>
        <li><strong>Customize</strong> - Learn about available props and customization options</li>
      </ol>
      
      <h2>Support</h2>
      <p>Need help? Check out our documentation or reach out to our support team.</p>
      
      <p>Happy building! 🚀</p>
    </div>
  );
}
