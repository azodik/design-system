import os
import re
import json

src_dir = '/Users/jai/Azodik/design-system/packages/icons/src'
output_file = '/Users/jai/Azodik/design-system/packages/icons/icons-catalog.json'

icons = {}

if not os.path.exists(src_dir):
    print(f"Error: {src_dir} does not exist")
    exit(1)

files = os.listdir(src_dir)
print(f"Found {len(files)} files in {src_dir}")

for filename in files:
    if filename.endswith('.tsx') and filename != 'index.ts':
        icon_name = filename.replace('.tsx', '')
        filepath = os.path.join(src_dir, filename)
        
        with open(filepath, 'r') as f:
            content = f.read()
            
            # Match <svg ...>(...)</svg>
            svg_match = re.search(r'<svg[^>]*>(.*?)</svg>', content, re.DOTALL)
            if svg_match:
                inner_content = svg_match.group(1).strip()
                
                # Check viewBox
                viewbox_match = re.search(r'viewBox="([^"]+)"', svg_match.group(0))
                viewbox = viewbox_match.group(1) if viewbox_match else "0 0 24 24"
                
                icons[icon_name] = {
                    "v": viewbox,
                    "c": inner_content
                }
            else:
                # If no direct SVG, maybe it's a wrapper, skip for now
                pass

with open(output_file, 'w') as f:
    json.dump(icons, f, indent=2)

print(f"Generated catalog with {len(icons)} icons.")
