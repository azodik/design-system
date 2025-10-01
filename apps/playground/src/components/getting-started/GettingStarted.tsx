import React from "react";
import { Card } from "@azodik/ui";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function GettingStarted() {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Getting Started</h1>
        <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Welcome to the Azodik Design System! A modern, accessible, and highly customizable component library built with React and TypeScript. 
          This comprehensive guide will help you integrate our components into your projects quickly and efficiently.
        </p>
        <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Production Ready</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>TypeScript</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Accessible</span>
          </div>
        </div>
      </div>
      
      <div className="prose max-w-none">

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Installation</h2>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Start</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Install the Azodik UI package using your preferred package manager. Our components are built with modern React patterns and include full TypeScript support.
              </p>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4 text-sm font-medium">Install the package:</p>
              <Card className="p-0 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-lg">
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.6',
                    padding: '1.25rem',
                    background: '#111827',
                    color: '#f9fafb',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#d1d5db transparent'
                  }}
                  wrapLines={true}
                  wrapLongLines={true}
                >
                  {`npm install @azodik/ui`}
                </SyntaxHighlighter>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• React 16.8+ (hooks support)</li>
                  <li>• TypeScript 4.5+ (optional but recommended)</li>
                  <li>• Node.js 14+ for development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Bundle Size</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Tree-shakeable components</li>
                  <li>• ~15KB gzipped (core)</li>
                  <li>• Individual component imports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">What's Included</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our design system provides everything you need to build modern, accessible, and beautiful user interfaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-3xl">🧩</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">50+ Components</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Comprehensive collection of buttons, forms, navigation, data display, and layout components</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>• Form Controls & Inputs</div>
                <div>• Navigation & Layout</div>
                <div>• Data Display & Tables</div>
                <div>• Feedback & Overlays</div>
              </div>
            </Card>
            <Card className="text-center p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Consistent Design</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Unified design language with design tokens, consistent spacing, and cohesive visual hierarchy</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>• Design Tokens</div>
                <div>• Color System</div>
                <div>• Typography Scale</div>
                <div>• Spacing System</div>
              </div>
            </Card>
            <Card className="text-center p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">TypeScript Ready</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Full type safety, IntelliSense support, and excellent developer experience</p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>• Type Definitions</div>
                <div>• IntelliSense Support</div>
                <div>• Compile-time Safety</div>
                <div>• Auto-completion</div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Next Steps</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Follow these steps to get the most out of the Azodik Design System and start building amazing user interfaces.
          </p>
          <div className="max-w-4xl mx-auto">
            <ol className="space-y-10 list-none">
              <li className="flex items-start space-x-8">
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Explore Components</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Browse through our comprehensive component library to discover what's available. Each component includes live examples, 
                    interactive demos, and detailed documentation to help you understand how to use them effectively.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Pro Tip:</strong> Use the search functionality to quickly find components by name or functionality. 
                      All components are organized by category for easy navigation.
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-start space-x-8">
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Copy Code Examples</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Use our interactive examples to copy code snippets and integrate them into your project. Each example is 
                    production-ready and includes proper TypeScript types and accessibility features.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Pro Tip:</strong> Customize the examples using the interactive controls before copying the code. 
                      This helps you understand the component's API and customization options.
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-start space-x-8">
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Customize & Deploy</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Customize components to match your brand identity using our theming system and design tokens. 
                    Deploy your application with confidence knowing all components are production-tested and accessible.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Pro Tip:</strong> Use CSS custom properties to create consistent theming across your application. 
                      Our design tokens make it easy to maintain brand consistency.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
