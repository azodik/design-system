import React, { useState } from "react";
import { Select, Card } from "@azodik/ui";

export const SelectPreview = () => {
  const [country, setCountry] = useState("");
  const [size, setSize] = useState("");

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="space-y-4">
          <Select
            label="Country"
            options={[
              { value: "", label: "Select a country" },
              { value: "us", label: "United States" },
              { value: "ca", label: "Canada" },
              { value: "uk", label: "United Kingdom" },
              { value: "au", label: "Australia" },
            ]}
            value={country}
            onChange={setCountry}
          />
          <Select
            label="Size"
            options={[
              { value: "", label: "Choose size" },
              { value: "sm", label: "Small" },
              { value: "md", label: "Medium" },
              { value: "lg", label: "Large" },
              { value: "xl", label: "Extra Large" },
            ]}
            value={size}
            onChange={setSize}
          />
        </div>
      </Card>
    </div>
  );
};

export const SelectCode = `import React, { useState } from "react";
import { Select, Card } from "@azodik/ui";

export const SelectExample = () => {
  const [country, setCountry] = useState("");
  const [size, setSize] = useState("");

  return (
    <div className="space-y-6">
      <Card 
        className="p-6"
        style={{ 
          width: '100%',
          minWidth: '280px',
          maxWidth: '500px'
        }}
      >
        <div className="space-y-4">
          <Select
            label="Country"
            options={[
              { value: "", label: "Select a country" },
              { value: "us", label: "United States" },
              { value: "ca", label: "Canada" },
              { value: "uk", label: "United Kingdom" },
              { value: "au", label: "Australia" },
            ]}
            value={country}
            onChange={setCountry}
          />
          <Select
            label="Size"
            options={[
              { value: "", label: "Choose size" },
              { value: "sm", label: "Small" },
              { value: "md", label: "Medium" },
              { value: "lg", label: "Large" },
              { value: "xl", label: "Extra Large" },
            ]}
            value={size}
            onChange={setSize}
          />
        </div>
      </Card>
    </div>
  );
};`;
