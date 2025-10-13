import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
  Input,
  Button,
} from "@azodik/ui";

export const CardPreview = () => (
  <div className="card-container">
    <Card
      width="100%"
      height="auto"
      backgroundColor="white"
      padding="lg"
      rounded="lg"
      variant="shadow"
    >
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-md">
            <div className="grid gap-2">
              <Input id="email" type="email" placeholder="m@example.com" required label="Email" />
            </div>
            <div className="grid gap-2">
              <Input
                label="Password"
                id="password"
                type="password"
                required
                placeholder="*************"
                autoComplete="current-password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button type="submit" size="md" variant="primary">
          Login
        </Button>
      </CardFooter>
    </Card>
  </div>
);

export const CardCode = `import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction, Input, Button } from "@azodik/ui";

export const CardPreview = () => (
  <div className="card-container">
    <Card
      width="100%"
      height="auto"
      backgroundColor="white"
      padding="lg"
      rounded="lg"
      variant="shadow"
    >
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-md">
            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                label="Email"
              />
            </div>
            <div className="grid gap-2">
              <Input
                label="Password"
                id="password" 
                type="password" 
                required
                placeholder="*************"
                autoComplete="current-password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button type="submit" size="md" variant="primary">
          Login
        </Button>
      </CardFooter>
    </Card>
  </div>
);`;
