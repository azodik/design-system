
import { ThemeProvider, Button, Box, Textarea } from "@azodik/ui";

export default function ThemeTestPage() {
  return (
    <div className="p-10 space-y-10">
      <section>
        <h2 className="text-xl font-bold mb-4">1. Custom Hex Color via ThemeProvider (New Feature)</h2>
        {/* Attempting to pass a hex code directly - expecting this to WORK now */}
        <ThemeProvider accentColor="#D946EF"> 
          <Box className="p-4 border rounded">
             <Button variant="solid">Should be Pink (#D946EF)</Button>
             <div className="mt-2 text-primary">Primary Text</div>
          </Box>
        </ThemeProvider>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">2. Custom Hex Color via Style Override</h2>
        <p className="text-sm text-gray-600 mb-2">Note: For style override to work, apply it at the root ThemeProvider level, not nested.</p>
        {/* Demonstrating that inline styles work on regular divs */}
        <div style={{ "--accent-9": "#D946EF" } as any} className="p-4 border rounded">
           <Button variant="solid">This won't be pink (no ThemeProvider context)</Button>
           <div className="mt-2" style={{ color: "#D946EF" }}>But this text is pink via direct style</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">3. Custom Font Family</h2>
        <ThemeProvider style={{ "--font-family-sans": "'Courier New', monospace" } as any}>
          <Box className="p-4 border rounded">
             <h1 className="text-2xl font-bold">Courier New Heading</h1>
             <p>This text should be monospaced.</p>
          </Box>
        </ThemeProvider>
      </section>
    </div>
  );
}
