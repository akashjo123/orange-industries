import re

with open('raw_logo.svg', 'r') as f:
    svg = f.read()

# Replace fill="#58595b" with fill="currentColor"
svg = svg.replace('#58595b', 'currentColor')

# Remove xml declaration and other unnecessary attributes
svg = re.sub(r'<\?xml.*?\?>', '', svg)
svg = svg.replace('xmlns:xlink="http://www.w3.org/1999/xlink"', '')
svg = svg.replace('xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"', '')
svg = svg.replace('version="1.1"', '')
svg = svg.replace('inkscape:groupmode="layer"', '')
svg = svg.replace('inkscape:label="Layer 1"', '')
svg = svg.replace('clip-path', 'clipPath')

# Fix camelCase for SVG props
svg = svg.replace('viewBox', 'viewBox')
# In React, some attributes need to be camelCase, but we only have a few here.
# Let's write the component manually by looking at the raw SVG.
