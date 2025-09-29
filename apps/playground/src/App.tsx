import { Button, Card } from "@azodik/ui";

export default function App() {
  return (
    <div className="p-md">
      <h1 className="text-center">Design System + React UI</h1>

      <Button variant="primary" onClick={() => alert("Clicked!")}>
        Primary Button
      </Button>

      <Button variant="secondary" className="mt-md">
        Secondary Button
      </Button>

      <Card className="mt-md">
        <h2>Card Example</h2>
        <p>This card uses design-system CSS with a React wrapper.</p>
      </Card>
    </div>
  );
}
