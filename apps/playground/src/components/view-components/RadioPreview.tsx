import React, { useState } from "react";
import { Radio, Card } from "@azodik/ui";

export const RadioPreview = () => {
  const [gender, setGender] = useState("");
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
        <div className="space-y-6">
          <div>
            <label className="form-label">Gender</label>
            <div className="mt-2 space-y-2">
              <Radio
                name="gender"
                value="male"
                label="Male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <Radio
                name="gender"
                value="female"
                label="Female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <Radio
                name="gender"
                value="other"
                label="Other"
                checked={gender === "other"}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="form-label">Size</label>
            <div className="mt-2 space-y-2">
              <Radio
                name="size"
                value="small"
                label="Small"
                checked={size === "small"}
                onChange={(e) => setSize(e.target.value)}
              />
              <Radio
                name="size"
                value="medium"
                label="Medium"
                checked={size === "medium"}
                onChange={(e) => setSize(e.target.value)}
              />
              <Radio
                name="size"
                value="large"
                label="Large"
                checked={size === "large"}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export const RadioCode = `import React, { useState } from "react";
import { Radio, Card } from "@azodik/ui";

export const RadioExample = () => {
  const [gender, setGender] = useState("");
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
        <div className="space-y-6">
          <div>
            <label className="form-label">Gender</label>
            <div className="mt-2 space-y-2">
              <Radio
                name="gender"
                value="male"
                label="Male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <Radio
                name="gender"
                value="female"
                label="Female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <Radio
                name="gender"
                value="other"
                label="Other"
                checked={gender === "other"}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="form-label">Size</label>
            <div className="mt-2 space-y-2">
              <Radio
                name="size"
                value="small"
                label="Small"
                checked={size === "small"}
                onChange={(e) => setSize(e.target.value)}
              />
              <Radio
                name="size"
                value="medium"
                label="Medium"
                checked={size === "medium"}
                onChange={(e) => setSize(e.target.value)}
              />
              <Radio
                name="size"
                value="large"
                label="Large"
                checked={size === "large"}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};`;
