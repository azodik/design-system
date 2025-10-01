import React, { useState } from "react";
import { Input, Textarea, Select, Checkbox, Radio, Switch, Card } from "@azodik/ui";

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
    <div className="space-y-8">
      {/* Input Component */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Input</h3>
        <Card 
          className="p-6"
          style={{ 
            width: '100%',
            minWidth: '400px',
            maxWidth: '500px'
          }}
        >
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </Card>
      </div>

      {/* Textarea Component */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Textarea</h3>
        <Card 
          className="p-6"
          style={{ 
            width: '100%',
            minWidth: '400px',
            maxWidth: '500px'
          }}
        >
          <Textarea
            label="Message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </Card>
      </div>

      {/* Select Component */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Select</h3>
        <Card 
          className="p-6"
          style={{ 
            width: '100%',
            minWidth: '400px',
            maxWidth: '500px'
          }}
        >
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
        </Card>
      </div>

      {/* Checkbox Component */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Checkbox</h3>
        <Card 
          className="p-6"
          style={{ 
            width: '100%',
            minWidth: '400px',
            maxWidth: '500px'
          }}
        >
          <Checkbox
            label="Subscribe to newsletter"
            checked={formData.newsletter}
            onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
          />
        </Card>
      </div>

      {/* Radio Component */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Radio</h3>
        <Card 
          className="p-6"
          style={{ 
            width: '100%',
            minWidth: '400px',
            maxWidth: '500px'
          }}
        >
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
        </Card>
      </div>

      {/* Switch Component */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Switch</h3>
        <Card 
          className="p-6"
          style={{ 
            width: '100%',
            minWidth: '400px',
            maxWidth: '500px'
          }}
        >
          <Switch
            label="Enable notifications"
            checked={formData.notifications}
            onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
          />
        </Card>
      </div>
    </div>
  );
};

export const FormCode = `import React, { useState } from "react";
import { Input, Textarea, Select, Checkbox, Radio, Switch, Card } from "@azodik/ui";

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
    <div className="space-y-8">
      {/* Input Component */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Input</h3>
        <Card className="p-6">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </Card>
      </div>

      {/* Textarea Component */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Textarea</h3>
        <Card className="p-6">
          <Textarea
            label="Message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </Card>
      </div>

      {/* Select Component */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Select</h3>
        <Card className="p-6">
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
        </Card>
      </div>

      {/* Checkbox Component */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Checkbox</h3>
        <Card className="p-6">
          <Checkbox
            label="Subscribe to newsletter"
            checked={formData.newsletter}
            onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
          />
        </Card>
      </div>

      {/* Radio Component */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Radio</h3>
        <Card className="p-6">
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
        </Card>
      </div>

      {/* Switch Component */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Switch</h3>
        <Card className="p-6">
          <Switch
            label="Enable notifications"
            checked={formData.notifications}
            onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
          />
        </Card>
      </div>
    </div>
  );
};`;
