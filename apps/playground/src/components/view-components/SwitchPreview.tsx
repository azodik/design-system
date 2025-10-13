import React, { useState } from "react";
import { Switch, Card } from "@azodik/ui";

export const SwitchPreview = () => {
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [autoSave, setAutoSave] = useState(false);

  return (
    <div className="flex-vertical-lg">
      <Card className="p-6">
        <div className="flex-vertical">
          <Switch
            label="Enable notifications"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          <Switch
            label="Dark mode"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
          <Switch
            label="Auto-save changes"
            checked={autoSave}
            onChange={(e) => setAutoSave(e.target.checked)}
          />
        </div>
      </Card>
    </div>
  );
};

export const SwitchCode = `import React, { useState } from "react";
import { Switch, Card } from "@azodik/ui";

export const SwitchExample = () => {
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [autoSave, setAutoSave] = useState(false);

  return (
    <div className="flex-vertical-lg">
      <Card className="p-6">
        <div className="flex-vertical">
          <Switch
            label="Enable notifications"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          <Switch
            label="Dark mode"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
          <Switch
            label="Auto-save changes"
            checked={autoSave}
            onChange={(e) => setAutoSave(e.target.checked)}
          />
        </div>
      </Card>
    </div>
  );
};`;
