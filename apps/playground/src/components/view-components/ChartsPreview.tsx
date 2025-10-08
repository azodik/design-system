import React, { useState } from "react";
import { LineChart, AreaChart, BarChart, PieChart, Tabs, TabList, TabTrigger, TabContent } from "@azodik/ui";

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

export const ChartsPreview = () => {
  const [activeTab, setActiveTab] = useState("line");

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabList className="grid w-full grid-cols-4">
          <TabTrigger value="line">Line Chart</TabTrigger>
          <TabTrigger value="area">Area Chart</TabTrigger>
          <TabTrigger value="bar">Bar Chart</TabTrigger>
          <TabTrigger value="pie">Pie Chart</TabTrigger>
        </TabList>
        
        <TabContent value="line" className="mt-6">
          <LineChart
            data={sampleData}
            dataKey="sales"
            title="Sales Trend"
            subtitle="Monthly sales performance"
            height={400}
          />
        </TabContent>
        
        <TabContent value="area" className="mt-6">
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
        
        <TabContent value="bar" className="mt-6">
          <BarChart
            data={sampleData}
            dataKey="value"
            title="Monthly Values"
            subtitle="Value distribution by month"
            height={400}
            fillColor="#f59e0b"
          />
        </TabContent>
        
        <TabContent value="pie" className="mt-6">
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

export const ChartsExample = () => {
  const [activeTab, setActiveTab] = useState("line");

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabList className="grid w-full grid-cols-4">
          <TabTrigger value="line">Line Chart</TabTrigger>
          <TabTrigger value="area">Area Chart</TabTrigger>
          <TabTrigger value="bar">Bar Chart</TabTrigger>
          <TabTrigger value="pie">Pie Chart</TabTrigger>
        </TabList>
        
        <TabContent value="line" className="mt-6">
          <LineChart
            data={sampleData}
            dataKey="sales"
            title="Sales Trend"
            subtitle="Monthly sales performance"
            height={400}
          />
        </TabContent>
        
        <TabContent value="area" className="mt-6">
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
        
        <TabContent value="bar" className="mt-6">
          <BarChart
            data={sampleData}
            dataKey="value"
            title="Monthly Values"
            subtitle="Value distribution by month"
            height={400}
            fillColor="#f59e0b"
          />
        </TabContent>
        
        <TabContent value="pie" className="mt-6">
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
