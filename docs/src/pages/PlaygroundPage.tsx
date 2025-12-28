import Playground from "@/components/Playground";

export default function PlaygroundPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Component Playground</h1>
        <p className="text-gray-500 text-lg">
          Experiment with different component variations and copy the generated code directly into
          your project.
        </p>
      </div>
      <Playground />
    </div>
  );
}
