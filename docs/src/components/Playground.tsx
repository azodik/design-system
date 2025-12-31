import React, { useState } from "react";
import {
  Button,
  Badge,
  Alert,
  Checkbox,
  Input,
  Select,
  Switch,
  Card,
  CardContent,
  Avatar,
} from "@azodik/ui";
import { CodeBlock } from "@/components/docs/CodeBlock";

// Define the valid prop types for our controls
type PropDefinition =
  | { type: "select"; options: string[]; defaultValue: string }
  | { type: "boolean"; defaultValue: boolean }
  | { type: "string"; defaultValue: string }
  | { type: "number"; defaultValue: number };

interface ComponentConfig {
  component: React.ComponentType<Record<string, unknown>>;
  name: string;
  props: Record<string, PropDefinition>;
  // Optional: wrapper to provide context or specific layout if needed
  wrapper?: React.FC<{ children: React.ReactNode }>;
  // Optional: inner content for container components
  defaultChildren?: React.ReactNode;
}

const COMPONENTS: Record<string, ComponentConfig> = {
  Button: {
    component: Button as unknown as React.ComponentType<Record<string, unknown>>,
    name: "Button",
    defaultChildren: "Click Me",
    props: {
      variant: {
        type: "select",
        options: ["solid", "soft", "outline", "ghost", "link"],
        defaultValue: "solid",
      },
      size: {
        type: "select",
        options: ["1", "2", "3", "4"],
        defaultValue: "2",
      },
      color: {
        type: "select",
        options: [
          "indigo",
          "ruby",
          "grass",
          "amber",
          "cyan",
          "azodik",
          "gray",
          "crimson",
          "pink",
          "purple",
          "violet",
          "blue",
          "teal",
          "green",
          "lime",
          "yellow",
          "orange",
        ],
        defaultValue: "indigo",
      },
      disabled: { type: "boolean", defaultValue: false },
      highContrast: { type: "boolean", defaultValue: false },
      radius: {
        type: "select",
        options: ["none", "small", "medium", "large", "full"],
        defaultValue: "medium",
      },
    },
  },
  Badge: {
    component: Badge as unknown as React.ComponentType<Record<string, unknown>>,
    name: "Badge",
    defaultChildren: "New Feature",
    props: {
      variant: {
        type: "select",
        options: ["solid", "soft", "surface", "outline"],
        defaultValue: "soft",
      },
      size: {
        type: "select",
        options: ["1", "2", "3"],
        defaultValue: "2",
      },
      color: {
        type: "select",
        options: [
          "indigo",
          "ruby",
          "grass",
          "amber",
          "cyan",
          "azodik",
          "gray",
          "crimson",
          "pink",
          "purple",
          "violet",
          "blue",
          "teal",
          "green",
          "lime",
          "yellow",
          "orange",
        ],
        defaultValue: "indigo",
      },
      radius: {
        type: "select",
        options: ["none", "small", "medium", "large", "full"],
        defaultValue: "medium",
      },
      highContrast: { type: "boolean", defaultValue: false },
    },
  },
  Alert: {
    component: Alert as unknown as React.ComponentType<Record<string, unknown>>,
    name: "Alert",
    defaultChildren: "This is an alert message.",
    props: {
      variant: {
        type: "select",
        options: ["info", "success", "warning", "error", "neutral"],
        defaultValue: "info",
      },
      title: { type: "string", defaultValue: "Alert Title" },
      size: {
        type: "select",
        options: ["1", "2", "3"],
        defaultValue: "2",
      },
    },
  },
  Checkbox: {
    component: Checkbox,
    name: "Checkbox",
    props: {
      label: { type: "string", defaultValue: "Accept terms and conditions" },
      size: {
        type: "select",
        options: ["1", "2", "3"],
        defaultValue: "2",
      },
      disabled: { type: "boolean", defaultValue: false },
      defaultChecked: { type: "boolean", defaultValue: false },
    },
  },
  Input: {
    component: Input,
    name: "Input",
    props: {
      placeholder: { type: "string", defaultValue: "Type something..." },
      size: {
        type: "select",
        options: ["1", "2", "3"],
        defaultValue: "2",
      },
      variant: {
        type: "select",
        options: ["surface", "classic", "soft"],
        defaultValue: "surface",
      },
      radius: {
        type: "select",
        options: ["none", "small", "medium", "large", "full"],
        defaultValue: "medium",
      },
      disabled: { type: "boolean", defaultValue: false },
      label: { type: "string", defaultValue: "Email Address" },
    },
  },
  Avatar: {
    component: Avatar as unknown as React.ComponentType<Record<string, unknown>>,
    name: "Avatar",
    props: {
      size: {
        type: "select",
        options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        defaultValue: "3",
      },
      variant: {
        type: "select",
        options: ["solid", "soft"],
        defaultValue: "soft",
      },
      fallback: { type: "string", defaultValue: "JD" },
      src: {
        type: "string",
        defaultValue:
          "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
      },
      items: { type: "number", defaultValue: 1 }, // Hack to re-render image
    },
  },
};

export default function Playground() {
  const [selectedComponent, setSelectedComponent] = useState("Button");
  const [propValues, setPropValues] = useState<Record<string, string | number | boolean>>({});
  const [key, setKey] = useState(0); // Force re-render when switching components

  const config = COMPONENTS[selectedComponent];

  // Initialize defaults when component changes
  React.useEffect(() => {
    const defaults: Record<string, string | number | boolean> = {};
    if (config) {
      Object.entries(config.props).forEach(([key, def]) => {
        defaults[key] = def.defaultValue;
      });
      setPropValues(defaults);
      setKey((prev) => prev + 1);
    }
  }, [selectedComponent, config]);

  const handlePropChange = (prop: string, value: string | number | boolean) => {
    setPropValues((prev) => ({ ...prev, [prop]: value }));
  };

  const generateCode = () => {
    if (!config) return "";

    const propsList = Object.entries(propValues)
      .filter(([_prop, value]) => {
        // Only show prop if it differs from default OR if it's significant
        // For simplicity, we show all modified props, or maybe just all needed props
        // Let's filter out false booleans if default is false, etc.
        // Actually, let's just show everything that isn't empty string or undefined
        if (value === "") return false;
        if (typeof value === "boolean" && value === false) return false;
        return true;
      })
      .map(([prop, value]) => {
        if (typeof value === "boolean") return prop; // e.g. "disabled"
        if (typeof value === "number") return `${prop}={${value}}`;
        return `${prop}="${value}"`;
      })
      .join("\n  ");

    const children = config.defaultChildren
      ? `\n  ${typeof config.defaultChildren === "string" ? config.defaultChildren : "..."}\n`
      : "";
    const closing = config.defaultChildren ? `</${config.name}>` : " />";

    return `<${config.name}\n  ${propsList}${children ? "" : "\n"}${children ? ">" + children + closing : closing}`;
  };

  if (!config) return <div>Component not found</div>;

  const Component = config.component;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Controls Panel */}
        <div className="w-full md:w-80 flex-shrink-0 flex flex-col gap-6">
          <Card>
            <CardContent className="p-4 space-y-6">
              <div>
                <label htmlFor="component-select" className="text-sm font-medium mb-2 block">
                  Component
                </label>
                <Select
                  options={Object.keys(COMPONENTS).map((c) => ({ value: c, label: c }))}
                  value={selectedComponent}
                  onChange={setSelectedComponent}
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Props
                </h3>
                {Object.entries(config.props).map(([propName, def]) => (
                  <div key={propName}>
                    <label className="text-sm mb-1.5 block capitalize">{propName}</label>
                    {def.type === "select" && (
                      <Select
                        options={def.options.map((opt) => ({ value: opt, label: opt }))}
                        value={String(propValues[propName] || def.defaultValue)}
                        onChange={(val) => handlePropChange(propName, val)}
                        size="md"
                      />
                    )}
                    {def.type === "string" && (
                      <Input
                        value={String(propValues[propName] || "")}
                        onChange={(e) => handlePropChange(propName, e.target.value)}
                        size="md"
                      />
                    )}
                    {def.type === "number" && (
                      <Input
                        type="number"
                        value={Number(propValues[propName] || 0)}
                        onChange={(e) => handlePropChange(propName, Number(e.target.value))}
                        size="md"
                      />
                    )}
                    {def.type === "boolean" && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Enabled</span>
                        <Switch
                          checked={Boolean(propValues[propName] || false)}
                          onChange={(e) => handlePropChange(propName, e.target.checked)}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview Panel */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          <Card className="flex-1 min-h-[300px] flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 border-2 border-dashed border-gray-200 dark:border-gray-800">
            <div key={key}>
              {/* Special case handling for Avatar fallback which isn't a prop in the same way */}
              {selectedComponent === "Avatar" ? (
                <Component
                  {...propValues}
                  fallback={
                    typeof propValues.fallback === "string"
                      ? propValues.fallback.charAt(0)
                      : undefined
                  }
                />
              ) : (
                <Component {...propValues}>{config.defaultChildren}</Component>
              )}
            </div>
          </Card>

          <CodeBlock language="tsx" title="React Code">
            {generateCode()}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
