import React from "react";
import { Toast } from "@azodik/ui";

export const ToastPreview = () => (
  <div className="space-y-4">
    <div className="text-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
      <p className="text-gray-500">Toast notifications would appear here</p>
      <p className="text-sm text-gray-400 mt-2">These are temporary messages that auto-dismiss</p>
    </div>
  </div>
);

export const ToastCode = `import React from "react";
import { Toast } from "@azodik/ui";

export const ToastExample = () => {
  return (
    <div className="space-y-4">
      <div className="text-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <p className="text-gray-500">Toast notifications would appear here</p>
        <p className="text-sm text-gray-400 mt-2">These are temporary messages that auto-dismiss</p>
      </div>
    </div>
  );
};`;
