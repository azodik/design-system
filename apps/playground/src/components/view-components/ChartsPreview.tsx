import React, { useState } from "react";
import { LineChart, AreaChart, BarChart, PieChart, Tabs, TabList, TabTrigger, TabContent } from "@azodik/ui";

const sampleData = [
  { name: "Jan", value: 400, sales: 2400, revenue: 2400, profit: 800 },
  { name: "Feb", value: 300, sales: 1398, revenue: 1398, profit: 450 },
  { name: "Mar", value: 200, sales: 9800, revenue: 9800, profit: 3200 },
  { name: "Apr", value: 278, sales: 3908, revenue: 3908, profit: 1200 },
  { name: "May", value: 189, sales: 4800, revenue: 4800, profit: 1500 },
  { name: "Jun", value: 239, sales: 3800, revenue: 3800, profit: 1100 },
  { name: "Jul", value: 349, sales: 5200, revenue: 5200, profit: 1800 },
  { name: "Aug", value: 420, sales: 6100, revenue: 6100, profit: 2100 },
  { name: "Sep", value: 380, sales: 5800, revenue: 5800, profit: 1900 },
  { name: "Oct", value: 450, sales: 7200, revenue: 7200, profit: 2400 },
  { name: "Nov", value: 520, sales: 8500, revenue: 8500, profit: 2800 },
  { name: "Dec", value: 480, sales: 7800, revenue: 7800, profit: 2600 },
];

const pieData = [
  { name: "Desktop", value: 400, users: 400 },
  { name: "Mobile", value: 300, users: 300 },
  { name: "Tablet", value: 200, users: 200 },
  { name: "Smart TV", value: 150, users: 150 },
  { name: "Gaming Console", value: 120, users: 120 },
  { name: "Other", value: 100, users: 100 },
];

export const ChartsPreview = () => {
  const [activeTab, setActiveTab] = useState("line");

  return (
    <div className="charts-container">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="charts-container">
        <TabList className="charts-tab-list">
          <TabTrigger value="line">Line Chart</TabTrigger>
          <TabTrigger value="area">Area Chart</TabTrigger>
          <TabTrigger value="bar">Bar Chart</TabTrigger>
          <TabTrigger value="pie">Pie Chart</TabTrigger>
        </TabList>
        
        <TabContent value="line" className="charts-tab-content">
          <LineChart
            data={sampleData}
            dataKey="sales"
            title="Sales Trend"
            subtitle="Monthly sales performance"
            height={400}
          />
        </TabContent>
        
        <TabContent value="area" className="charts-tab-content">
          <AreaChart
            data={sampleData}
            dataKey="revenue"
            title="Revenue Growth"
            subtitle="Revenue over time"
            height={400}
            fillColor="#10b981"
            strokeColor="#059669"
          />
        </TabContent>
        
        <TabContent value="bar" className="charts-tab-content">
          <BarChart
            data={sampleData}
            dataKey="value"
            title="Monthly Values"
            subtitle="Value distribution by month"
            height={400}
            fillColor="#f59e0b"
          />
        </TabContent>
        
        <TabContent value="pie" className="charts-tab-content">
          <PieChart
            data={pieData}
            dataKey="users"
            nameKey="name"
            title="Device Usage"
            subtitle="User distribution by device"
            height={400}
          />
        </TabContent>
      </Tabs>
    </div>
  );
};

export const ChartsCode = `import React, { useState } from "react";
import { LineChart, AreaChart, BarChart, PieChart, Tabs, TabList, TabTrigger, TabContent } from "@azodik/ui";

const sampleData = [
  { name: "Jan", value: 400, sales: 2400, revenue: 2400, profit: 800 },
  { name: "Feb", value: 300, sales: 1398, revenue: 1398, profit: 450 },
  { name: "Mar", value: 200, sales: 9800, revenue: 9800, profit: 3200 },
  { name: "Apr", value: 278, sales: 3908, revenue: 3908, profit: 1200 },
  { name: "May", value: 189, sales: 4800, revenue: 4800, profit: 1500 },
  { name: "Jun", value: 239, sales: 3800, revenue: 3800, profit: 1100 },
  { name: "Jul", value: 349, sales: 5200, revenue: 5200, profit: 1800 },
  { name: "Aug", value: 420, sales: 6100, revenue: 6100, profit: 2100 },
  { name: "Sep", value: 380, sales: 5800, revenue: 5800, profit: 1900 },
  { name: "Oct", value: 450, sales: 7200, revenue: 7200, profit: 2400 },
  { name: "Nov", value: 520, sales: 8500, revenue: 8500, profit: 2800 },
  { name: "Dec", value: 480, sales: 7800, revenue: 7800, profit: 2600 },
];

const pieData = [
  { name: "Desktop", value: 400, users: 400 },
  { name: "Mobile", value: 300, users: 300 },
  { name: "Tablet", value: 200, users: 200 },
  { name: "Smart TV", value: 150, users: 150 },
  { name: "Gaming Console", value: 120, users: 120 },
  { name: "Other", value: 100, users: 100 },
];

export const ChartsExample = () => {
  const [activeTab, setActiveTab] = useState("line");

  return (
    <div className="charts-container">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="charts-container">
        <TabList className="charts-tab-list">
          <TabTrigger value="line">Line Chart</TabTrigger>
          <TabTrigger value="area">Area Chart</TabTrigger>
          <TabTrigger value="bar">Bar Chart</TabTrigger>
          <TabTrigger value="pie">Pie Chart</TabTrigger>
        </TabList>
        
        <TabContent value="line" className="charts-tab-content">
          <LineChart
            data={sampleData}
            dataKey="sales"
            title="Sales Trend"
            subtitle="Monthly sales performance"
            height={400}
          />
        </TabContent>
        
        <TabContent value="area" className="charts-tab-content">
          <AreaChart
            data={sampleData}
            dataKey="revenue"
            title="Revenue Growth"
            subtitle="Revenue over time"
            height={400}
            fillColor="#10b981"
            strokeColor="#059669"
          />
        </TabContent>
        
        <TabContent value="bar" className="charts-tab-content">
          <BarChart
            data={sampleData}
            dataKey="value"
            title="Monthly Values"
            subtitle="Value distribution by month"
            height={400}
            fillColor="#f59e0b"
          />
        </TabContent>
        
        <TabContent value="pie" className="charts-tab-content">
          <PieChart
            data={pieData}
            dataKey="users"
            nameKey="name"
            title="Device Usage"
            subtitle="User distribution by device"
            height={400}
          />
        </TabContent>
      </Tabs>
    </div>
  );
};`;
