import { useState, useMemo } from "react";
import { Card, Input, Button, Box, Container } from "@azodik/ui";
import { SearchIcon } from "@azodik/icons";
import SidebarLayout from "@/components/sidebar/Sidebar";
import "@/styles/docs.css";
import * as Icons from "@azodik/icons";

type IconComponent = React.ComponentType<{ size?: number; style?: React.CSSProperties }>;

// Get all icon names and components
const iconEntries = (Object.entries(Icons) as Array<[string, IconComponent]>).filter(
  ([name]: [string, IconComponent]) => name !== "default" && name.endsWith("Icon"),
);

// Categorize icons
const iconCategories = {
  Navigation: [
    "SidebarToggleIcon",
    "ArrowRightIcon",
    "ArrowLeftIcon",
    "ArrowUpIcon",
    "ArrowDownIcon",
    "ChevronRightIcon",
    "ChevronDownIcon",
    "ChevronUpIcon",
    "ChevronDownSmallIcon",
    "LeftLongArrowIcon",
    "RightLongArrowIcon",
    "MenuIcon",
  ],
  User: ["UserIcon", "User3Icon", "UserAddIcon", "UserCheckIcon", "GroupIcon"],
  Interface: [
    "ApplicationIcon",
    "AppsIcon",
    "BarChartIcon",
    "CopyIcon",
    "GithubIcon",
    "MoneyDollarIcon",
    "SettingsIcon",
    "ShieldIcon",
    "TickIcon",
    "EditIcon",
    "TrashIcon",
    "SaveIcon",
    "RefreshIcon",
    "FilterIcon",
    "SortIcon",
    "MoreVerticalIcon",
    "MoreHorizontalIcon",
  ],
  Social: ["GoogleIcon", "AppleIcon", "FacebookIcon", "InstagramIcon"],
  Common: [
    "HeartIcon",
    "StarIcon",
    "SearchIcon",
    "HomeIcon",
    "MailIcon",
    "PhoneIcon",
    "CalendarIcon",
    "ClockIcon",
    "DownloadIcon",
    "UploadIcon",
    "XIcon",
    "CheckIcon",
    "PlusIcon",
    "MinusIcon",
  ],
  Files: [
    "FileIcon",
    "FolderIcon",
    "ImageIcon",
    "FileTextIcon",
    "FilePlusIcon",
    "FileImageIcon",
    "FileVideoIcon",
    "FileMusicIcon",
    "FolderPlusIcon",
    "FolderOpenIcon",
    "FolderMinusIcon",
    "ArchiveIcon",
    "InboxIcon",
    "PaperclipIcon",
  ],
  Communication: [
    "MessageIcon",
    "SendIcon",
    "BellIcon",
    "BellOffIcon",
    "BellRingIcon",
    "AtSignIcon",
    "HashIcon",
  ],
  Status: ["AlertCircleIcon", "CheckCircleIcon", "XCircleIcon", "InfoIcon"],
  Security: [
    "LockIcon",
    "UnlockIcon",
    "EyeIcon",
    "EyeOffIcon",
    "ShieldCheckIcon",
    "ShieldAlertIcon",
    "KeyIcon",
    "KeyRoundIcon",
  ],
  Auth: ["LogOutIcon", "LogInIcon"],
  Media: [
    "PlayIcon",
    "PauseIcon",
    "StopIcon",
    "SkipForwardIcon",
    "SkipBackIcon",
    "VolumeIcon",
    "VolumeOffIcon",
    "MicIcon",
    "MicOffIcon",
    "VideoIcon",
    "CameraIcon",
    "MusicIcon",
    "RadioIcon",
    "HeadphonesIcon",
  ],
  Layout: ["GridIcon", "ListIcon", "LayoutIcon", "ColumnsIcon", "RowsIcon"],
  Business: [
    "ShoppingCartIcon",
    "CreditCardIcon",
    "WalletIcon",
    "TagIcon",
    "CoinsIcon",
    "BanknoteIcon",
    "ReceiptIcon",
  ],
  Technology: [
    "WifiIcon",
    "WifiOffIcon",
    "BluetoothIcon",
    "BatteryIcon",
    "ChargingIcon",
    "ZapIcon",
    "PowerIcon",
    "DatabaseIcon",
    "ServerIcon",
    "HardDriveIcon",
    "MonitorIcon",
    "LaptopIcon",
    "TabletIcon",
    "SmartphoneIcon",
    "RouterIcon",
    "UsbIcon",
    "SdCardIcon",
    "MemoryStickIcon",
    "CpuIcon",
    "MotherboardIcon",
  ],
  Cloud: [
    "CloudIcon",
    "CloudUploadIcon",
    "CloudDownloadIcon",
    "CloudRainIcon",
    "CloudSnowIcon",
    "CloudLightningIcon",
  ],
  Tools: [
    "ShareIcon",
    "BookmarkIcon",
    "BookmarkPlusIcon",
    "ClipboardIcon",
    "ClipboardCheckIcon",
    "PrinterIcon",
    "ScissorsIcon",
    "LinkIcon",
    "LinkOffIcon",
    "ExternalLinkIcon",
    "QrCodeIcon",
    "ScanIcon",
    "RotateCwIcon",
    "RotateCcwIcon",
    "MoveIcon",
    "MaximizeIcon",
    "MinimizeIcon",
    "ZoomInIcon",
    "ZoomOutIcon",
    "CropIcon",
    "FlipHorizontalIcon",
    "FlipVerticalIcon",
    "ImagePlusIcon",
  ],
  TextFormatting: [
    "TypeIcon",
    "BoldIcon",
    "ItalicIcon",
    "UnderlineIcon",
    "StrikethroughIcon",
    "AlignLeftIcon",
    "AlignCenterIcon",
    "AlignRightIcon",
    "AlignJustifyIcon",
    "CodeIcon",
    "TerminalIcon",
    "CommandIcon",
    "SlackIcon",
  ],
  Location: ["GlobeIcon", "MapIcon", "MapPinIcon", "CompassIcon", "NavigationIcon"],
  Analytics: [
    "ActivityIcon",
    "TrendingUpIcon",
    "TrendingDownIcon",
    "LineChartIcon",
    "PieChartIcon",
    "BarChart2Icon",
    "AreaChartIcon",
  ],
  Weather: ["SunIcon", "MoonIcon", "WindIcon", "DropletIcon", "UmbrellaIcon"],
  Nature: ["FlowerIcon", "LeafIcon"],
  SocialActions: ["ThumbsUpIcon", "ThumbsDownIcon", "FlagIcon", "FlagOffIcon"],
  Awards: [
    "TrophyIcon",
    "AwardIcon",
    "MedalIcon",
    "CrownIcon",
    "TargetIcon",
    "CrosshairIcon",
    "SparklesIcon",
  ],
  Special: ["GiftIcon", "CakeIcon"],
  Gadgets: ["SmartwatchIcon", "GamepadIcon", "RemoteIcon", "AirpodsIcon"],
  Law: ["GavelIcon", "ScaleIcon", "FileContractIcon", "FileCheckIcon"],
  Construction: ["HammerIcon", "WrenchIcon", "ScrewdriverIcon", "DrillIcon", "NutIcon"],
  Medical: ["StethoscopeIcon", "PillIcon", "HeartPulseIcon"],
  Education: ["BookIcon", "GraduationCapIcon", "CalculatorIcon"],
  Transportation: ["CarIcon", "BikeIcon", "PlaneIcon", "TrainIcon"],
};

export default function IconsDocsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | "all">("all");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  // Filter icons based on search and category
  const filteredIcons = useMemo(() => {
    let filtered = iconEntries;

    // Filter by category
    if (selectedCategory !== "all") {
      const categoryIcons = iconCategories[selectedCategory as keyof typeof iconCategories] || [];
      filtered = filtered.filter(
        ([name]: [string, IconComponent]) => categoryIcons.indexOf(name) !== -1,
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(([name]) => {
        // Remove "Icon" suffix for better matching
        const baseName = name.replace(/Icon$/i, "").toLowerCase();
        const fullName = name.toLowerCase();

        // Split camelCase into words (e.g., "WifiIcon" -> ["wifi"])
        // This handles cases like "WifiIcon", "UserCheckIcon", etc.
        const camelCaseWords = baseName
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .toLowerCase()
          .split(/\s+/)
          .filter((w) => w.length > 0);

        // Check if query matches:
        // 1. Full icon name (case-insensitive)
        // 2. Base name without "Icon" suffix
        // 3. Any individual word from camelCase split
        // 4. Query as substring of any word
        return (
          fullName.includes(query) ||
          baseName.includes(query) ||
          camelCaseWords.some((word) => word.includes(query) || query.includes(word))
        );
      });
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const copyToClipboard = (iconName: string, importCode: string) => {
    navigator.clipboard.writeText(importCode);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const breadcrumbItems = [
    { label: "Components", href: "/components" },
    { label: "Docs", href: "/components/docs" },
    { label: "Icons", current: true },
  ];

  return (
    <SidebarLayout breadcrumbItems={breadcrumbItems}>
      <Container size="lg" style={{ maxWidth: "1200px" }} className="p-2">
        <Box className="docs-content">
          <h1>Icons</h1>
          <p>
            A comprehensive collection of high-quality React icon components for the Azodik UI
            design system. All icons are optimized, accessible, and fully customizable.
          </p>

          <h2>Installation</h2>
          <pre className="code-block">
            <code>{`npm install @azodik/icons`}</code>
          </pre>

          <h2>Usage</h2>
          <pre className="code-block">
            <code>{`import { SearchIcon, UserIcon, SettingsIcon } from '@azodik/icons';

function MyComponent() {
  return (
    <div>
      <SearchIcon size={24} />
      <UserIcon size={20} className="text-blue-500" />
      <SettingsIcon size={16} />
    </div>
  );
}`}</code>
          </pre>

          <h2>Props</h2>
          <p>All icons accept the following props:</p>
          <ul>
            <li>
              <code>size?: number</code> - Icon size in pixels (default: 20)
            </li>
            <li>
              <code>className?: string</code> - CSS classes
            </li>
            <li>
              <code>style?: React.CSSProperties</code> - Inline styles
            </li>
            <li>
              <code>color?: string</code> - Icon color (some icons only)
            </li>
            <li>
              <code>filled?: boolean</code> - Filled state (HeartIcon, StarIcon only)
            </li>
          </ul>

          <h2>Browse Icons</h2>

          {/* Search and Filter */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <div style={{ flex: "1", minWidth: "300px", position: "relative" }}>
                <Input
                  placeholder="Search icons..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <SearchIcon size={18} />
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              <Button
                onClick={() => setSelectedCategory("all")}
                variant={selectedCategory === "all" ? "solid" : "soft"}
                size="md"
              >
                All ({iconEntries.length})
              </Button>
              {(Object.entries(iconCategories) as Array<[string, string[]]>).map(
                ([category, icons]: [string, string[]]) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? "solid" : "soft"}
                    size="md"
                  >
                    {category} ({icons.length})
                  </Button>
                ),
              )}
            </div>
          </div>

          {/* Icons Grid */}
          {filteredIcons.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {filteredIcons.map(([iconName, IconComponent]) => {
                const importCode = `import { ${iconName} } from '@azodik/icons';`;
                const isCopied = copiedIcon === iconName;

                return (
                  <Card
                    key={iconName}
                    style={{
                      padding: "1.5rem",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      border: isCopied ? "2px solid var(--color-primary)" : undefined,
                    }}
                    onClick={() => copyToClipboard(iconName, importCode)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "var(--shadow-md)";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "1rem",
                        minHeight: "60px",
                      }}
                    >
                      <IconComponent size={32} style={{ color: "var(--color-primary)" }} />
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        marginBottom: "0.5rem",
                        wordBreak: "break-word",
                      }}
                    >
                      {iconName.replace("Icon", "")}
                    </div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--color-text-secondary)",
                        fontFamily: "monospace",
                      }}
                    >
                      {iconName}
                    </div>
                    {isCopied && (
                      <div
                        style={{
                          marginTop: "0.5rem",
                          fontSize: "0.7rem",
                          color: "var(--color-primary)",
                          fontWeight: "600",
                        }}
                      >
                        ✓ Copied!
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card style={{ padding: "2rem", textAlign: "center" }}>
              <p style={{ color: "var(--color-text-secondary)" }}>
                No icons found matching &quot;{searchQuery}&quot;
              </p>
            </Card>
          )}

          <h2>How to Add New Icons</h2>
          <p>To add a new icon to the library:</p>
          <ol>
            <li>
              <strong>Create the icon component</strong> in <code>packages/icons/src/</code>:
              <pre className="code-block">
                <code>{`// packages/icons/src/NewIcon.tsx
import React from &quot;react&quot;;

interface NewIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const NewIcon: React.FC&lt;NewIconProps&gt; = ({ size = 20, className, style }) =&gt; {
  return (
    &lt;svg
      xmlns=&quot;http://www.w3.org/2000/svg&quot;
      viewBox=&quot;0 0 24 24&quot;
      fill=&quot;none&quot;
      stroke=&quot;currentColor&quot;
      strokeWidth=&quot;2&quot;
      width={size}
      height={size}
      className={className}
      style={{
        color: &quot;currentColor&quot;,
        ...style,
      }}
    &gt;
      {/* Your SVG path here */}
    &lt;/svg&gt;
  );
};

export default NewIcon;`}</code>
              </pre>
            </li>
            <li>
              <strong>Export it</strong> in <code>packages/icons/src/index.ts</code>:
              <pre className="code-block">
                <code>{`export { default as NewIcon } from &quot;./NewIcon&quot;;`}</code>
              </pre>
            </li>
            <li>
              <strong>Build the package</strong>:
              <pre className="code-block">
                <code>{`cd packages/icons && pnpm build`}</code>
              </pre>
            </li>
            <li>
              <strong>Update this documentation</strong> by adding the icon to the appropriate
              category in <code>docs/src/pages/IconsDocsPage.tsx</code>
            </li>
          </ol>

          <h3>Icon Design Guidelines</h3>
          <ul>
            <li>
              Use a consistent <code>viewBox=&quot;0 0 24 24&quot;</code> for all icons
            </li>
            <li>
              Use <code>stroke=&quot;currentColor&quot;</code> and{" "}
              <code>fill=&quot;none&quot;</code> for outline icons
            </li>
            <li>
              Use <code>strokeWidth=&quot;2&quot;</code> for consistent line weight
            </li>
            <li>Keep paths simple and optimized</li>
            <li>Ensure icons are centered in the viewBox</li>
            <li>Test icons at different sizes (16px, 20px, 24px, 32px)</li>
            <li>Ensure proper contrast for accessibility</li>
          </ul>

          <h3>Icon Sources</h3>
          <p>Icons should be high-quality and consistent. Recommended sources:</p>
          <ul>
            <li>
              Lucide Icons (MIT License) -{" "}
              <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer">
                lucide.dev
              </a>
            </li>
            <li>
              Heroicons (MIT License) -{" "}
              <a href="https://heroicons.com" target="_blank" rel="noopener noreferrer">
                heroicons.com
              </a>
            </li>
            <li>Custom designed icons following the design system guidelines</li>
          </ul>
        </Box>
      </Container>
    </SidebarLayout>
  );
}
