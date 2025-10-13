import React, { useState } from "react";
import { Input, Card } from "@azodik/ui";

export const InputPreview = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  return (
    <Card>
      <form>
        <div className="flex-vertical">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Input
            label="Search"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </Card>
  );
};

export const InputCode = `import React, { useState } from "react";
import { Input, Card } from "@azodik/ui";

export const InputExample = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  return (
    <Card>
        <form>
          <div className="flex-vertical">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Input
              label="Search"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
    </Card>
  );
};`;
