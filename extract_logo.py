import fitz

doc = fitz.open("/Users/apple/.gemini/antigravity-ide/brain/755ca510-b60e-4f03-9bbc-7b07b444a705/.user_uploaded/media_1790055526092.pdf")
page = doc[0]
svg = page.get_svg_image()

# Write the raw SVG to inspect it
with open("raw_logo.svg", "w") as f:
    f.write(svg)

# Replace the gray text color (#59595B or similar) with white (#FFFFFF).
# Let's see what the exact color is. First I'll just write it and look at it.
