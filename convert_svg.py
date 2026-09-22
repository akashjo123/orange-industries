import re

with open('raw_logo.svg', 'r') as f:
    svg = f.read()

# React specific conversions
svg = svg.replace('xmlns:xlink="http://www.w3.org/1999/xlink"', '')
svg = svg.replace('xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"', '')
svg = svg.replace('inkscape:groupmode="layer"', '')
svg = svg.replace('inkscape:label="Layer 1"', '')
svg = svg.replace('clip-path', 'clipPath')
svg = svg.replace('xlink:href', 'xlinkHref')
svg = svg.replace('fill="#58595b"', 'fill="currentColor"')
svg = svg.replace('version="1.1"', '')

# Remove empty lines
svg = '\n'.join([line for line in svg.split('\n') if line.strip()])

# The component structure
component = f"""import React from 'react';

interface LogoSVGProps extends React.SVGProps<SVGSVGElement> {{}}

export default function LogoSVG(props: LogoSVGProps) {{
  return (
    {svg.replace('<svg ', '<svg {...props} ')}
  );
}}
"""

with open('components/LogoSVG.tsx', 'w') as f:
    f.write(component)

print("Created components/LogoSVG.tsx")
