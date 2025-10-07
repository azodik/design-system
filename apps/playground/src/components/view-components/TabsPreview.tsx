import React, { useState } from "react";
import { Tabs, TabList, TabTrigger, TabContent, Card } from "@azodik/ui";

export const TabsPreview = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabList>
        <TabTrigger value="tab1" borderWidth={4} width="100px">Tab 1</TabTrigger>
        <TabTrigger value="tab2" borderWidth={4} width="100px">Tab 2</TabTrigger>
        <TabTrigger value="tab3" borderWidth={4} width="100px">Tab 3</TabTrigger>
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
  );
};

export const TabsCode = `import React, { useState } from "react";
import { Tabs, TabList, TabTrigger, TabContent, Card } from "@azodik/ui";

export const TabsExample = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabList>
        <TabTrigger value="tab1" borderWidth={4} borderColor="#f97316">Tab 1</TabTrigger>
        <TabTrigger value="tab2" borderWidth={2} borderColor="#3b82f6">Tab 2</TabTrigger>
        <TabTrigger value="tab3" borderWidth={5} borderColor="#10b981">Tab 3</TabTrigger>
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
  );
};`;
