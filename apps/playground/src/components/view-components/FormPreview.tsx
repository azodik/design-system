import React, { useState } from "react";
import { Input, Textarea, Select, Checkbox, Radio, Switch, Card, ScrollArea } from "@azodik/ui";

export const FormPreview = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    country: "",
    newsletter: false,
    gender: "",
    notifications: false,
  });

  return (
    <Card 
      className="p-6"
      style={{ 
        width: '100%',
        minWidth: '280px',
        maxWidth: '500px',
        height: '400px',
        overflow: 'hidden'
      }}
    >
      <ScrollArea className="h-full" scrollbarSize="sm">
        <div className="space-y-4 p-1">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Textarea
          label="Message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <Select
          label="Country"
          options={[
            { value: "us", label: "United States" },
            { value: "ca", label: "Canada" },
            { value: "uk", label: "United Kingdom" },
          ]}
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        />
        <Checkbox
          label="Subscribe to newsletter"
          checked={formData.newsletter}
          onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
        />
        <div>
          <label className="form-label">Gender</label>
          <div className="mt-2 space-y-2">
            <Radio
              name="gender"
              value="male"
              label="Male"
              checked={formData.gender === "male"}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            />
            <Radio
              name="gender"
              value="female"
              label="Female"
              checked={formData.gender === "female"}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            />
          </div>
        </div>
        <Switch
          label="Enable notifications"
          checked={formData.notifications}
          onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
        />
        </div>
      </ScrollArea>
    </Card>
  );
};

export const FormCode = `import React, { useState } from "react";
import { Input, Textarea, Select, Checkbox, Radio, Switch, Card, ScrollArea } from "@azodik/ui";

export const FormExample = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    country: "",
    newsletter: false,
    gender: "",
    notifications: false,
  });

  return (
    <Card 
      className="p-6"
      style={{ 
        width: '100%',
        minWidth: '280px',
        maxWidth: '500px',
        height: '400px',
        overflow: 'hidden'
      }}
    >
      <ScrollArea className="h-full" scrollbarSize="sm">
        <div className="space-y-4 p-1">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Textarea
            label="Message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Select
            label="Country"
            options={[
              { value: "us", label: "United States" },
              { value: "ca", label: "Canada" },
              { value: "uk", label: "United Kingdom" },
            ]}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <Checkbox
            label="Subscribe to newsletter"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
          />

          <Radio
            name="gender"
            value="male"
            label="Male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />

          <Switch
            label="Enable notifications"
            checked={formData.notifications}
            onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
          />
        </div>
      </ScrollArea>
    </Card>
  );
};`;
